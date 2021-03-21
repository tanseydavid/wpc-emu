'use strict';

const path = require('path');
const fs = require('fs');
const readChunk = require('read-chunk');
const fileType = require('file-type');
const AdmZip = require('adm-zip');
const sinon = require('sinon');

const GamelistDB = require('../../lib/db');
const Emulator = require('../../lib/emulator');

const mySearch = require('./search');
const dasmSym = require('./dasmSym');
global.dasmSym = dasmSym;

const PORT = process.env.PORT || 3000;
const express = require('express');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

let wpc = null;

const app = express();
app.set('view engine', 'pug')
app.set("views", path.join(__dirname, "views"));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


const HAS_SECURITY_FEATURE = process.env.HAS_SECURITY_FEATURE === 'true' ? ['securityPic', 'wpcSecure'] : [];
const HAS_DCS_BOARD = process.env.HAS_DCS_BOARD === 'true' ? ['wpcDcs'] : [];
const HAS_DMD_BOARD = process.env.HAS_DMD_BOARD === 'true' ? ['wpcDmd'] : [];
const HAS_FLIPTRONICS_BOARD = process.env.HAS_FLIPTRONICS_BOARD === 'true' ? ['wpcFliptronics'] : [];
const FEATURES = HAS_DCS_BOARD.concat(HAS_SECURITY_FEATURE).concat(HAS_DMD_BOARD).concat(HAS_FLIPTRONICS_BOARD);
const MAXSTEPS = process.env.STEPS || 0xFF000;

const MAX_LOOPS = 20000;

// TESTING
let dasmDefinitions = [];
let dasmOutput = [];
// TESTING

function initDasmEntries( romFilePath ) {

  let extension = path.extname(romFilePath);
  let file = path.basename(romFilePath,extension);

  if (file === 'cv200') {file = "cv_20h";}
  let dasmEntryList;

  switch (file){
    case 'gw_pc':
    case 'u6-p-c':
      dasmEntryList = require('../../lib/db/gw-proto-dasm-entries');
      break;
    case 'nbaf_31':
    case 'fb_g11':
      dasmEntryList = require('../../lib/db/nba-dasm-entries');
      break;
    case 'hurr_l2':
    case 'hurcnl_2':
      dasmEntryList = require('../../lib/db/dd-dasm-entries');
      break;
    case 'ADDAM_L5':
    case 'taf_l5':
    case 'cv_20h':
    case 'tom_13':
    case 'fh_l9':
      dasmEntryList = require('../../lib/db/dd-dasm-entries');
      break;
    case 'dd_p7':
    case 'dude_u6':
    case 'dd_p06':
    case 'u6-pa6':
      dasmEntryList = require('../../lib/db/dd-dasm-entries');
      break;
    default:
      throw new Error('unrecognized romId: ' + file);
  }
  dasmDefinitions = dasmEntryList.getDasmEntries();

  // db TESTING
  // dasmDefinitions.addEntriesToDb( )
  // db TESTING
}

//--------------------------------------------------------------------------------
// ROUTE: /
//--------------------------------------------------------------------------------
app.get('/', async function(req, res) {

  let dc = req.cookies.dasmContext;
  if (dc) {
    res.cookie('dasmContext', dc);
    res.redirect('/index');
  }
  else {
    res.cookie('dasmContext', getDefaultDasmContext());
  }

  res.render('home', { title: 'WPC-DASM' }, function(err, html) {
    if (err) {
      console.log(err);
    } else {
      res.write(html);
      res.end('-----------------------WPCDASM OUTPUT---------------------');
    }
  });

});

//--------------------------------------------------------------------------------
// ROUTE: /index
//--------------------------------------------------------------------------------
app.get('/index', async function(req, res) {

  if (wpc) {
    let romstate = getRomState( wpc );
    let labels = await dasmSym.getDefinitions( );
    let labelRegions = await dasmSym.getDefinitionsByRegion( );

    res.render('index', {title: romstate.romname, romstate, labelRegions: labelRegions }, function(err, html) {

      if (err) console.log(err);
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(html);
      res.end('-----------------------WPCDASM OUTPUT---------------------');
    });

  } else {
    res.redirect('/clear');
  }

});

//--------------------------------------------------------------------------------
// ROUTE: /clear
//--------------------------------------------------------------------------------
app.get('/clear', async function(req, res) {
    res.clearCookie('dasmContext');
    res.redirect('/');
});

//--------------------------------------------------------------------------------
// ROUTE: /CHART/$20/$4000
//--------------------------------------------------------------------------------
app.get('/chart/:bank/:start/:bytesperline?', async function(req, res) {

  let bankId = 0x3d;
  if (!req.params.bank) {}
  else {
    let bank = req.params.bank.replace( '$', '0x' );
    bankId = parseInt( bank );
  }

  let startAddress = 0x4000;
  if (!req.params.start) {}
  else {
    let start = req.params.start.replace( '$', '0x' );
    startAddress = parseInt( start );
  }

  let bytesPerLine = 16;
  if (!req.params.bytesperline) {}
  else {
    let bytesPer = req.params.bytesperline.replace( '$', '0x' );
    bytesPerLine = parseInt( bytesPer );
  }

  let dumpresult = await memoryDump( bankId, startAddress, bytesPerLine, 32 );
  let dc = req.cookies.dasmContext;
  if (dc) {
    dc.romFileName = 'u6-p-c.rom';
    dc.bankId = bankId;
    res.cookie('dasmContext', dc);
  }

  let romstate = getRomState( wpc );
  let linkNextDump = '/dump/$' + d2h( bankId ) + '/$' + d2h_16((startAddress + (bytesPerLine * 32)));
  let linkPreviousDump = '/dump/$' + d2h( bankId ) + '/$' + d2h_16((startAddress - (bytesPerLine * 32)));

  let labels = await dasmSym.getDefinitions( );
  let labelRegions = await dasmSym.getDefinitionsByRegion( );

  res.render('chart', { romstate, dumpresult, linkNextDump, linkPreviousDump, labelRegions }, function(err, html) {
    if (err) console.log(err);
    res.write(html);
    res.end('-----------------------WPCDASM OUTPUT---------------------');
  });

});

//--------------------------------------------------------------------------------
// ROUTE: /dump/$20/$4000
//--------------------------------------------------------------------------------
app.get('/dump/:bank/:start/:bytesperline?', async function(req, res) {

  let bankId = 0x3d;
  if (!req.params.bank) {}
  else {
    let bank = req.params.bank.replace( '$', '0x' );
    bankId = parseInt( bank );
  }

  let startAddress = 0x4000;
  if (!req.params.start) {}
  else {
    let start = req.params.start.replace( '$', '0x' );
    startAddress = parseInt( start );
  }

  let bytesPerLine = 16;
  if (!req.params.bytesperline) {}
  else {
    let bytesPer = req.params.bytesperline.replace( '$', '0x' );
    bytesPerLine = parseInt( bytesPer );
  }

  let dumpresult = await memoryDump( bankId, startAddress, bytesPerLine, 32 );
  let dc = req.cookies.dasmContext;
  if (dc) {
    dc.romFileName = 'u6-p-c.rom';
    dc.bankId = bankId;
    res.cookie('dasmContext', dc);
  }

  let navstate = {};
  navstate.startAddress = startAddress;
  navstate.endAddress = startAddress + (bytesPerLine * 32) - 1;
  navstate.bankId = bankId;
  navstate.linkNextDump = '/dump/$' + d2h( bankId ) + '/$' + d2h_16((startAddress + (bytesPerLine * 32)));
  navstate.linkPreviousDump = '/dump/$' + d2h( bankId ) + '/$' + d2h_16((startAddress - (bytesPerLine * 32)));

  let romstate = getRomState( wpc );
  let labels = await dasmSym.getDefinitions( );
  let labelRegions = await dasmSym.getDefinitionsByRegion( );

  res.render('dump', { romstate, dumpresult, navstate, labelRegions }, function(err, html) {
    if (err) console.log(err);
    res.write(html);
    res.end('-----------------------WPCDASM OUTPUT---------------------');
  });


});

//--------------------------------------------------------------------------------
// ROUTE: /dasm/$20/$4000/$8000
//--------------------------------------------------------------------------------
app.get('/dasm/:bank/:start/:end?', async function(req, res) {

  let bankId = 0x3d;
  if (!req.params.bank) {}
  else {
    let bank = req.params.bank.replace( '$', '0x' );
    bankId = parseInt( bank );
  }

  let startAddress = 0x4000;
  if (!req.params.start) {}
  else {
    let start = req.params.start.replace( '$', '0x' );
    startAddress = parseInt( start );
  }

  let endAddress = startAddress + 0xff;
  if (!req.params.end) {}
  else {
    let end = req.params.end.replace( '$', '0x' );
    endAddress = parseInt( end );
  }

  let labels = await dasmSym.getDefinitions( );
  let labelRegions = await dasmSym.getDefinitionsByRegion( );
  let dasmresult = await dasmBank( bankId, startAddress, endAddress);

  let dc = req.cookies.dasmContext;
  if (dc) {
    dc.romFileName = 'u6-p-c.rom';
    dc.bankId = bankId;
    res.cookie('dasmContext', dc);
  }

  let navstate = {};
  navstate.startAddress = startAddress;
  navstate.endAddress = endAddress;
  navstate.bankId = bankId;
  navstate.linkPreviousDump = '/dasm/$' + d2h( bankId ) + '/$' + d2h_16(startAddress - ( endAddress - startAddress + 1));
  navstate.linkNextDump = '/dasm/$' + d2h( bankId ) + '/$' + d2h_16((endAddress + 1));
  navstate.labelsNearby = dasmSym.getDefinitionsNearbyBankAddress( bankId, startAddress, 5 );

  let romstate = getRomState( wpc );

  res.render('dasm', {romstate, dasmresult, labelRegions, navstate }, function(err, html) {
    if (err) console.log(err);
    // res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(html);
    res.end('-----------------------WPCDASM OUTPUT---------------------');
  });


});

//--------------------------------------------------------------------------------
// ROUTE: /dasm/$4000/$8000
//--------------------------------------------------------------------------------
app.get('/dasm/:start/:end', async function(req, res) {

  var start = req.params.start.replace( '$', '0x' );
  var end = req.params.end.replace( '$', '0x' );

  var startAddress = parseInt( start );
  var endAddress = end ? parseInt( end ) : startAddress + 0xff;

  let dasmResult2 = await dasm( startAddress, endAddress);

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h2>ROM: gw_pc</h2>');
  res.write('<pre>' + dasmResult2 + '</pre>' );
  res.end('-----------------------WPCDASM OUTPUT---------------------');

});

//--------------------------------------------------------------------------------
// ROUTE: /load/romfilename
//--------------------------------------------------------------------------------
app.get('/load/:romfilename', async function(req, res) {

  let romfilename = req.params.romfilename;
  let romfilepath = path.join(__dirname, '/../../rom/' + romfilename);
  await startServer(romfilepath);

  res.redirect('/index');

});

//--------------------------------------------------------------------------------
// ROUTE: /labels
//--------------------------------------------------------------------------------
app.get('/labels', async function(req, res) {

  console.log('Cookies: ', req.cookies);

  let labels = await dasmSym.getDefinitions( );
  let labelRegions = await dasmSym.getDefinitionsByRegion( );
  let labelsByBank = await dasmSym.getDefinitionsByBank( );

  let romstate = getRomState( wpc );
  let t = labelsByBank;

  res.render('labels', {title: romstate.romname, romstate, labelRegions, labels, t }, function(err, html) {
    if (err) console.log(err);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(html);
    res.end('-----------------------WPCDASM OUTPUT---------------------');
  });

});

//--------------------------------------------------------------------------------
// ROUTE: /labels
//--------------------------------------------------------------------------------
app.get('/labels/:region', async function(req, res) {

  let labels = await dasmSym.getDefinitions( );
  let labelRegions = await dasmSym.getDefinitionsByRegion( );
  let labelsByBank = await dasmSym.getDefinitionsByBank( );

  let region = 'Ram';
  let labelsForRegion = {};
  let regionParameter = req.params.region;
  if (regionParameter) {
    if (regionParameter.startsWith('$')) {
      region = "bank_" + regionParameter.toLowerCase().slice(1);
      labelsForRegion = labelsByBank.labelsBank[ region ];
    } else {
      region =
          regionParameter.charAt(0).toUpperCase() +
          regionParameter.toLowerCase().slice(1);
      labelsForRegion = labelRegions.labelsRegion[region];
    }
  }

  let romstate = getRomState( wpc );
  let t = labelsByBank;

  res.render('labels', {title: romstate.romname, romstate, labelRegions, labels, labelsByBank, labelsForRegion, region }, function(err, html) {
    if (err) console.log(err);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(html);
    res.end('-----------------------WPCDASM OUTPUT---------------------');
  });

});

//--------------------------------------------------------------------------------
// ROUTE: /labelfor
//--------------------------------------------------------------------------------
app.get('/labelfor/:bankId/:bankAddress', async function(req, res) {

  let bankId = 0xff;
  if (!req.params.bankId) {}
  else {
    let bank = req.params.bankId.replace( '$', '0x' );
    bankId = parseInt( bank );
  }

  let bankAddress = 0x4000;
  if (!req.params.bankAddress) {}
  else {
    let address = req.params.bankAddress.replace( '$', '0x' );
    bankAddress = parseInt( address );
  }

  let labelDefinition = await dasmSym.getLabelForBankAddress( bankId, bankAddress );
  await res.json(labelDefinition);

  // res.render('labels', {title: romstate.romname, romstate, labelRegions, labels, t }, function(err, html) {
  //   if (err) console.log(err);
  //   res.writeHead(200, {'Content-Type': 'text/html'});
  //   res.write(html);
  //   res.end('-----------------------WPCDASM OUTPUT---------------------');
  // });

});

//--------------------------------------------------------------------------------
// ROUTE: /find
//--------------------------------------------------------------------------------
app.get('/find/:findval?', async function(req, res) {

  // NEW
  let findString = "Williams";
  if (!req.params.findval) {}
  else {
    // let isnum = /^\d+$/.test(val);
    findString = req.params.findval;
  }
  // NEW

  // let findresult = memorySearch(0x20, 'Williams' );
  let findresult = memorySearch(findString);
  let romstate = getRomState( wpc );

  let dc = req.cookies.dasmContext;
  if (dc) {
    dc.romFileName = 'u6-p-c.rom';
    dc.bankId = wpc.activeRomBank;
    res.cookie('dasmContext', dc);
  }

  res.render('find', {title: 'gw_pc', romstate, f: findresult }, function(err, html) {
    if (err) console.log(err);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(html);
    res.end('-----------------------WPCDASM OUTPUT---------------------');
  });

});

//--------------------------------------------------------------------------------
// ROUTE: /mru
//--------------------------------------------------------------------------------
app.get('/mru', async function(req, res) {

  console.log('Cookies: ', req.cookies);

  let labels = await dasmSym.getDefinitions( );
  let labelRegions = await dasmSym.getDefinitionsByRegion( );
  let labelsByBank = await dasmSym.getDefinitionsByBank( );

  let romstate = getRomState( wpc );
  let t = labelsByBank;

  res.render('mru', {title: 'test', romstate, labelRegions, labels, t }, function(err, html) {
    if (err) console.log(err);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(html);
    res.end('');
  });

});

app.listen(PORT, function () {
  console.clear();
  // console.log(getServerNameVersion());
  console.log(`Server is listening on port ${PORT}`);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

async function startServer(romFilePath) {
  await startTraceRomFile( romFilePath );
}

function startTraceRomFile( romFilePath ) {

  // console.log("startTraceRomFile(" +  romFilePath +")");
  console.log('=============================================================================');
  console.log('WPC-EMU Disassembly Testing', { FEATURES, MAXSTEPS, ROMFILE: romFilePath }  );
  console.log('=============================================================================');


  const loadRomFilesPromise = Promise.all([
    loadFile(romFilePath),
  ]);

  return loadRomFilesPromise
    .then((result) => {

      initDasmEntries(result[0].romfilepath);
      const romData = {
        u06: result[0].romFiles,
      };
      return Emulator.initVMwithRom(romData, {
        fileName: romFilePath,
        features: FEATURES,
        skipWpcRomCheck: true,
      });
    })
    .then((wpcSystem) => {

      wpc = wpcSystem;

      wpcSystem.reset();
      wpcSystem.start();

      console.error( "------------------------------------------------------------------");

      let bankId = 0x20;
      wpcSystem.cpuBoard.cpu.memoryWriteFunction( 0x3ffc, bankId );

      wpcSystem.cpuBoard.cpu.regPC = 0x40cc;
      let endAddress = 0x414a;
      let steps = 0;

      let dasmOutput = '';


    })
    .catch((error) => {
      console.log('ERROR', error.message, error.stack);
    });
}


function startTrace_OLD() {

  const loadRomFilesPromise = Promise.all([
    loadFile(romU06PathZZZ),
  ]);

  return loadRomFilesPromise
      .then((result) => {

        initDasmEntries();
        const romData = {
          u06: result[0].romFiles,
        };
        return Emulator.initVMwithRom(romData, {
          // fileName: 'foo',
          fileName: romU06Path,
          features: FEATURES,
          skipWpcRomCheck: true,
        });
      })
      .then((wpcSystem) => {

        wpc = wpcSystem;
        console.log("WPC set");

        wpcSystem.reset();
        wpcSystem.start();

        console.error( "------------------------------------------------------------------");

        let bankId = 0x20;
        wpcSystem.cpuBoard.cpu.memoryWriteFunction( 0x3ffc, bankId );

        wpcSystem.cpuBoard.cpu.regPC = 0x40cc;

      })
      .catch((error) => {
        console.log('ERROR', error.message, error.stack);
      });
}


function setRomBank(bankId) {
  wpc.cpuBoard.cpu.memoryWriteFunction(0x3ffc, bankId);
}

function memoryDump( bankId, bankAddress, bytesPerLine, numberOfLines ) {

  wpc.cpuBoard.cpu.memoryWriteFunction( 0x3ffc, bankId );
  const dumpMemory = memoryReadRange( bankAddress, numberOfLines * bytesPerLine, wpc.cpuBoard.cpu );

  let bytesString = '';
  let asciiString = '';
  let output = '';
  let currentLine = 1;
  let lineStartAddress = d2h_16( bankAddress );

  dumpMemory.forEach( ( byteval, i ) => {

    if (i > 0 && i % bytesPerLine === 0) {
      output += lineStartAddress + ":\t" + bytesString + " " + asciiString + "\n";
      bytesString = '';
      asciiString = '';
      let offset = (currentLine * bytesPerLine) ;
      currentLine++;
      lineStartAddress = d2h_16( bankAddress + offset);
    }

    bytesString += d2h( byteval ) + " " ;

    if (byteval < 0x20 || byteval > 0x7F ) asciiString += "." ;
    else asciiString += String.fromCharCode(byteval) ;


  });

  return output;
}

function memorySearch( searchString ) {

  let allFindResults = {};
  allFindResults.search = searchString;

  for( let currentBankId = 0x20; currentBankId <= 0x3d; currentBankId++ ) {
    let currentFindResults = memorySearchBank( currentBankId, searchString );
    allFindResults[ "bank_" + d2h( currentBankId) ] = currentFindResults
  }

  // const fixedMemory = memoryReadRange( 0x8000, 0x8000, wpc.cpuBoard.cpu );
  // let fixedFindResult = mySearch.findString( searchString, fixedMemory );
  let fixedFindResult = memorySearchFixed( searchString );

  // fixedFindResult.forEach( ( element, i ) => {
  //   fixedFindResult[ i ] = element + 0x8000;
  // });

  allFindResults[ "fixed" ] = fixedFindResult;
  return allFindResults;
}

function memorySearchBank( bankId, searchString) {

  wpc.cpuBoard.cpu.memoryWriteFunction( 0x3ffc, bankId );
  const bankMemory = memoryReadRange( 0x4000, 0x4000, wpc.cpuBoard.cpu );

  // let bankFindResult = mySearch.findString( searchString, bankMemory );
  let s = parseInt("0x" + searchString);
  let bankFindResult = mySearch.findUint16( s, bankMemory );

  bankFindResult.forEach( ( element, i ) => {
    bankFindResult[ i ] = element + 0x4000;
  });

  return bankFindResult;
}

function memorySearchFixed( searchString) {

  const bankMemory = memoryReadRange( 0x8000, 0x8000, wpc.cpuBoard.cpu );
  let s = parseInt("0x" + searchString);
  let fixedFindResult = mySearch.findUint16( s, bankMemory );

  fixedFindResult.forEach( ( element, i ) => {
    fixedFindResult[ i ] = element + 0x8000;
  });

  return fixedFindResult;
}

function dasmBank( bankId, startAddress, endAddress) {
  wpc.cpuBoard.cpu.memoryWriteFunction( 0x3ffc, bankId );
  console.error( bankId + " " + startAddress + " " + endAddress);
  return dasm( startAddress, endAddress);
}

function dasm( startAddress, endAddress) {

    // let bankId = 0x20;
    // wpc.cpuBoard.cpu.memoryWriteFunction( 0x3ffc, bankId );
    let bankId = wpc.cpuBoard.cpu.memoryReadFunction( 0x4000 );

    wpc.cpuBoard.cpu.regPC = startAddress;
    // let endAddress = 0x4fff;
    let steps = 0;
    let dasmOutput = '';

    while (steps++ < MAX_LOOPS) {

      const cpu = wpc.cpuBoard.cpu;
      const pc = cpu.regPC;

      // even though most instructions will use far fewer bytes than 8,
      // we don't yet know how many bytes we will need for the current instruction
      // ...so, grab next 8 bytes
      const line = memoryReadRange( pc, 8, cpu );

      let result = dasmSym.dasmSym( pc, line, cpu, bankId );

      if ( result ) {
        let dasmCurrentLine = result.getOutput();
        console.log(  dasmCurrentLine );
        dasmOutput += dasmCurrentLine + '\n';

        let newPC = pc + result.getLength();
        wpc.cpuBoard.cpu.regPC = newPC;

        if (newPC > 0xFFFF) { steps = MAX_LOOPS; }

        if (newPC >= endAddress) {
          steps = MAX_LOOPS;
          console.log('PASSED endAddress: ', d2h_16(endAddress));
          let g = GamelistDB.getAllNames();
        }

      }

    }

    return dasmOutput;
}

setupFakeSystemTime();
// startTrace();
//debugger;
// startServer( romU06Path );

// HERE
function memoryReadRange( start, length, cpu ) {

  let range = [];
  let end = start + length;

  for ( let currentMemoryLocation = start; currentMemoryLocation <= end; currentMemoryLocation++ ){
    range.push(  cpu.memoryReadFunction(currentMemoryLocation) );
  }

  // return range;
  return Uint8Array.from(range);

}
// HERE

function formatRegister(value, padLength) {
  return value.toString(16).padStart(padLength, '0').toUpperCase() + ' ';
}

function addDasmLine( sourceCodeToAdd ) {
  dasmOutput.push( sourceCodeToAdd );
}

function addDasmDividerComment( ) {
  addDasmLine( ";---------------------------------------------------------"  );
}

function d2h(d) {
  return (d / 256 + 1 / 512).toString(16).substring(2, 4).toUpperCase();
}

function d2h_16(d) {
  return d.toString(16).toUpperCase();
}

function loadFile(fileName) {
  return new Promise(async (resolve, reject) => {
    console.log("LOADFILE in PROMISE");
    // TESTING
    let t = path.extname(fileName)

    if (t === '.zip') {
      console.log("LOADFILE in ZIP PROMISE");
      (async () => {
        const buffer = readChunk.sync(fileName, 0, 4100);

        // console.log(await fileType.fromBuffer(buffer));
        let z = await fileType.fromBuffer(buffer);
        //=> {ext: 'png', mime: 'image/png'}
        // if (await fileType.fromBuffer(buffer).ext == "zip") {
        if (await z.ext == "zip") {

          console.log("Zip file loaded");
          let zip = new AdmZip(fileName);
          let zipEntries = zip.getEntries(); // an array of ZipEntry records

          zipEntries.forEach(function(zipEntry) {
            // console.log(zipEntry.toString()); // outputs zip entries information
            if (zipEntry.entryName == "u6-p-c.rom"
                || zipEntry.entryName == "fb_g11.3_1"
                || zipEntry.entryName == "hurcnl_2.rom"
                || zipEntry.entryName == "addam_l5.rom"
                || zipEntry.entryName == "tom1_3x.rom"
                || zipEntry.entryName == "funh_l9.rom"
                || zipEntry.entryName == "cv200h.rom"
                || zipEntry.entryName == "dude_u6.p7") {
              let zz = zip.readFile( zipEntry );
              let result =  { };
              result.romfilepath = fileName;
              result.romFiles = new Uint8Array(zz);
              resolve( result );
            }
          });
        }

      })();

    }
    else {
      console.log("LOADFILE in ROM PROMISE");
      await fs.readFileSync(fileName, (error, data) => {
        if (error) {
          return reject(error);
        }

        let result =  { };
        result.romfilepath = fileName;
        result.romFiles = new Uint8Array(data);
        resolve( result );

        // BEFORE
        // resolve(new Uint8Array(data));
        // BEFORE
      });

    }
    // TESTING

  });
}

function setupFakeSystemTime() {
  // to reduce diff generated by the roms, we set the system clock to January 1st 2017
  sinon.useFakeTimers({
    now: 1483228800000,
  });
  console.log('Fake system clock initialized:', new Date());
}

function getRomState( w ) {

  let romFilePath = w.cpuBoard.romFileName;
  let extension = path.extname(romFilePath);
  let file = path.basename(romFilePath,extension);

  let romstate = {};
  romstate.romFilePath = romFilePath;
  romstate.romname = file === "hurcnl_2" ? "hurr" : file;
  romstate.romsize = w.cpuBoard.gameRom.length + w.cpuBoard.systemRom.length;
  romstate.romsizekb = convertBytes(romstate.romsize);
  romstate.romsizehex = d2h_16( romstate.romsize );
  romstate.bankcount = w.cpuBoard.gameRom.length / 0x4000;
  romstate.bankid_first = 0x3d - (romstate.bankcount-1);
  romstate.bankid_first_hex = d2h( romstate.bankid_first );
  romstate.bankid_last = 0x3d;
  romstate.bankid_last_hex = d2h( 0x3d );
  romstate.currentbankid = w.cpuBoard.cpu.memoryReadFunction( 0x4000 );
  let pm = GamelistDB.getByPinmameName(romstate.romname);
  romstate.gamename = pm.pinmame.gameName;
  romstate.wpcversion = pm.name.substr( 0, pm.name.indexOf(":"));

  return romstate;
}

const convertBytes = function(bytes) {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"]

  if (bytes == 0) {
    return "n/a"
  }

  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))

  if (i == 0) {
    return bytes + " " + sizes[i]
  }

  return (bytes / Math.pow(1024, i)).toFixed(0) + " " + sizes[i]
}

const getDefaultDasmContext = function () {

  let dasmContext = {};

  dasmContext.romFileName = 'fb_g11.ROM';
  dasmContext.bankId = 0x3d;

  // dasmContext.romFileName = 'u6-p-c.rom';
// dasmContext.bankId = 0x3d;

  return dasmContext;

}


// // // let defaultDasmContext = getDefaultDasmContext();
//==========================================================================================
// NBAF
//==========================================================================================
// // // const romU06Path = process.env.ROMFILE || path.join(__dirname, '/../../rom/nbaf_31.zip');
// const romU06Path = process.env.ROMFILE || path.join(__dirname, '/../../rom/fb_g11.ROM');
//==========================================================================================
// NBAF
//==========================================================================================

//==========================================================================================
// GW proto
//==========================================================================================
// const romU06Path = process.env.ROMFILE || path.join(__dirname, '/../../rom/gw_pc.zip');
// const romU06Path = process.env.ROMFILE || path.join(__dirname, '/../../rom/u6-p-c.rom');
//==========================================================================================
// GW-proto
//==========================================================================================

//==========================================================================================
// Hurricane
//==========================================================================================
// const romU06Path = process.env.ROMFILE || path.join(__dirname, '/../../rom/hurcnl_2.rom');
// const romU06Path = process.env.ROMFILE || path.join(__dirname, '/../../rom/hurr_l2.zip');
//==========================================================================================
// Hurricane
//==========================================================================================

//==========================================================================================
// DrDude
//==========================================================================================
// const romU06Path = process.env.ROMFILE || path.join(__dirname, '/../../rom/dude_u6.p7');
// const romU06Path = process.env.ROMFILE || path.join(__dirname, '/../../rom/dd_p7.zip');
//==========================================================================================
// DrDude
//==========================================================================================
