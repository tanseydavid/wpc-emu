params ='use strict';

const disasm = require('./disasm');
const DasmSymResult = require('./dasmSymResult');
// NEW OLD const xxx  = require('./wpcErrors');

const dasmEntryList = require('../../lib/db/nba-dasm-entries');
// const dasmEntryList = require('../../lib/db/gw-proto-dasm-entries');

module.exports = {
  dasmSym,
  getDefinitions,
  getDefinitionsByRegion,
  getDefinitionsByBank,
  find,
  getDefinitionsNearbyBankAddress,
  getLabelForBankAddress,
  getHeatmapForBank,
  getHeatmapForAllBanks
};

// TESTING
let dasmDefinitions;
let dasmOutput = [];
// TESTING

function init() {

    if (typeof dasmDefinitions === 'undefined') {
        dasmDefinitions = dasmEntryList.getDasmEntries();
        // dasmDefinitions = dasmEntryList.getDasmEntries();
    }
    if (dasmOutput.length > 0) { dasmOutput = []; }
}

function find(  pc, bankIdForPc ) {
    return dasmDefinitions.find( pc, bankIdForPc );
}

function getDefinitions() {
    init();
    return dasmDefinitions;
}

function getDefinitionsByRegion() {

    let res = {};
    res.labelsRegion = {};
    res.labelsRegion.Ram = dasmDefinitions.entries.filter(obj => {
        return obj.region === 'ram'
    });

    res.labelsRegion.Wpc = dasmDefinitions.entries.filter(obj => {
        return obj.region === 'wpc'
    });

    res.labelsRegion.Sys = dasmDefinitions.entries.filter(obj => {
        return obj.region === 'sys'
    });

    res.labelsRegion.Banks = dasmDefinitions.entries.filter(obj => {
        return obj.region === 'bank'
    });

    // res.getLabelsForBank = function( bankId ) {
    //
    // }

    return res;
}

function getDefinitionsByBank() {

    let res = {};
    res.labelsBank = {};

    // for(let currentBankId=0x20;currentBankId++;currentBankId<0x3e){
    //     getDefinitionsForBank( currentBankId, res );
    // }

    let currentBankId = 0x20;
    getDefinitionsForBank( currentBankId, res );

    currentBankId = 0x21;
    getDefinitionsForBank( currentBankId, res );

    currentBankId = 0x22;
    getDefinitionsForBank( currentBankId, res );

    currentBankId = 0x23;
    getDefinitionsForBank( currentBankId, res );

    currentBankId = 0x24;
    getDefinitionsForBank( currentBankId, res );

    currentBankId = 0x25;
    getDefinitionsForBank( currentBankId, res );

    currentBankId = 0x26;
    getDefinitionsForBank( currentBankId, res );

    currentBankId = 0x27;
    getDefinitionsForBank( currentBankId, res );

    currentBankId = 0x28;
    getDefinitionsForBank( currentBankId, res );

    currentBankId = 0x29;
    getDefinitionsForBank( currentBankId, res );

    currentBankId = 0x2a;
    getDefinitionsForBank( currentBankId, res );

    currentBankId = 0x2b;
    getDefinitionsForBank( currentBankId, res );

    currentBankId = 0x2c;
    getDefinitionsForBank( currentBankId, res );

    currentBankId = 0x2d;
    getDefinitionsForBank( currentBankId, res );

    currentBankId = 0x2e;
    getDefinitionsForBank( currentBankId, res );

    currentBankId = 0x2f;
    getDefinitionsForBank( currentBankId, res );

    currentBankId = 0x30;
    getDefinitionsForBank( currentBankId, res );

    currentBankId = 0x31;
    getDefinitionsForBank( currentBankId, res );

    currentBankId = 0x32;
    getDefinitionsForBank( currentBankId, res );

    currentBankId = 0x33;
    getDefinitionsForBank( currentBankId, res );

    currentBankId = 0x34;
    getDefinitionsForBank( currentBankId, res );

    currentBankId = 0x35;
    getDefinitionsForBank( currentBankId, res );

    currentBankId = 0x36;
    getDefinitionsForBank( currentBankId, res );

    currentBankId = 0x37;
    getDefinitionsForBank( currentBankId, res );

    currentBankId = 0x38;
    getDefinitionsForBank( currentBankId, res );

    currentBankId = 0x39;
    getDefinitionsForBank( currentBankId, res );

    currentBankId = 0x3a;
    getDefinitionsForBank( currentBankId, res );

    currentBankId = 0x3b;
    getDefinitionsForBank( currentBankId, res );

    currentBankId = 0x3c;
    getDefinitionsForBank( currentBankId, res );

    currentBankId = 0x3d;
    getDefinitionsForBank( currentBankId, res );

    // res.labelsBank[ "bank_" + d2h(currentBankId)] = dasmDefinitions.entries.filter(obj => {
    //     return obj.region === 'bank' && obj.bankId === currentBankId;
    // });

    return res;
}

function getDefinitionsForBank(bankId, res) {

    let currentBankId = bankId;
    let result = dasmDefinitions.entries.filter(obj => {
        return obj.bankId === currentBankId;
        // return obj.region === 'bank' && obj.bankId === currentBankId;
    });
    if (res) {
        res.labelsBank[ "bank_" + d2h(currentBankId)] = result;
   } else {
        return result;
    }

}


async function getLabelForBankAddress(bankId, bankAddress) {

    if (dasmDefinitions) {
        return dasmDefinitions.entries.find(obj => {
            return obj.bankId === bankId && obj.address === bankAddress;
        });
    }

    return {};
}


function getDefinitionsNearbyBankAddress(bankId, bankAddress, numberOfTailAndHeadEntries) {

    if (bankAddress > 0x5a67) debugger;
    let currentBankId = bankId;
    if (bankAddress > 0x7fff) currentBankId = 0xFF;
    let labelsBank = dasmDefinitions.entries.filter(obj => {
        return obj.bankId === currentBankId;
    });

    // sort by address
    labelsBank.sort((a,b) => {
        return (a.address > b.address) ? 1 : -1;
    });

    // debugger;

    let labelMatchIndex = labelsBank.findIndex(obj => {
        // return obj.bankId === currentBankId && obj.address === bankAddress;
        return obj.bankId === currentBankId && obj.address === bankAddress;
    });

    if (labelMatchIndex === -1) {
        labelMatchIndex = labelsBank.findIndex(obj => {
            return obj.bankId === currentBankId && obj.address > bankAddress;
        });

        labelMatchIndex = labelMatchIndex - 1;
    }

    if (labelMatchIndex === -1) {
        labelMatchIndex = labelsBank.findIndex(obj => {
            return obj.bankId === currentBankId && obj.address > bankAddress;
        });
    }

    if (labelMatchIndex >= 0) {
        let sliceStart = labelMatchIndex - numberOfTailAndHeadEntries;
        if (sliceStart < 0 ) sliceStart = 0;

        let sliceEnd = labelMatchIndex + numberOfTailAndHeadEntries + 1;
        if (sliceEnd > labelsBank.length ) sliceEnd = labelsBank.length;

        return labelsBank.slice( sliceStart, sliceEnd );
    }

}


function addDasmLine( sourceCodeToAdd ) {
    dasmOutput.push( sourceCodeToAdd );
}

function addDasmDividerComment( ) {
    addDasmLine( ";---------------------------------------------------------"  );
}

function addDasmEmptyComment( ) {
    addDasmLine( getEmptyComment() );
}

function printEmptyComment() {
    console.log( getEmptyComment() );
}

function getEmptyComment() {
    return '; \n' ;
}

function getDasmOutput( ) {
    let out = "";
    dasmOutput.forEach( function( item ) {
        out += item + "\n";
    });
    return out;
}

//--------------------------------------------------------------------
function dasmSym( pc, line, cpu, bankId ) {

    init();

    let bankIdForPc = 0xFF;
    if (pc < 0x8000) { bankIdForPc = bankId; }

    const dasmDefinitionForCurrentPC = dasmDefinitions.find( pc, bankIdForPc );

    // is there a DASM definition defined for the current address?
    if (dasmDefinitionForCurrentPC) {

        // THIS WORKS
        // Is the DASM defintion a TABLE definition?
        if (dasmIsForTable(dasmDefinitionForCurrentPC)) {

            if ( dasmIsForWpcTable(dasmDefinitionForCurrentPC)) {
                processWpcTableHeader( pc, line, cpu, bankId, dasmDefinitionForCurrentPC );
            }

            addHeaderForLabel(dasmDefinitionForCurrentPC);

            let testB = new DasmSymResult( pc, null  );
            // KEY
            testB.length = dasmDefinitionForCurrentPC.numberOfEntries * dasmDefinitionForCurrentPC.bytesPerEntry;
            if ( dasmIsForWpcTable(dasmDefinitionForCurrentPC)) {
                testB.length += 3;
            }
            if ( dasmIsForImage(dasmDefinitionForCurrentPC)) {
                const imageMemoryBytes = memoryReadRange( pc, 512, cpu );
                let testImg = dasmDefinitionForCurrentPC.getImage( pc, imageMemoryBytes );
                // let testImg = ( pc - dasmDefinitionForCurrentPC.address );
                testB.length += testImg.length;
                console.info( `PC: ${d2h_16(pc)} defPC: ${d2h_16(dasmDefinitionForCurrentPC.address)} TESTLEN: ${testImg.length}`)
            }

            // and HERE
            testB.outputTest = getDasmOutput() + getInstruction(pc, null, line, cpu, bankId );

            // here
            pc += testB.length;
            return testB;
        } else {

            addHeaderForLabel(dasmDefinitionForCurrentPC);

            const instrDasmA = disasm.disasm(line[0], line[1], line[2], line[3], line[4], pc);
            let test = new DasmSymResult( pc, instrDasmA );

            test.outputTest = getDasmOutput() + getInstruction(pc, instrDasmA, line, cpu, bankId );

            return test;
        }

    }
    else {
        return testmeA( pc, line, cpu, bankId );
    }
}

function processWpcTableHeader( pc, line, cpu, bankId, dasmDefinition  ) {

    let tableHeaderBytes = memoryReadRange(pc, 2, cpu);
    let wpcHeaderOut = dasmDefinition.getWpcTableHeader( pc, tableHeaderBytes );
    // dasmDefinition.printWpcTableHeader( pc, tableHeaderBytes );

    addDasmLine( wpcHeaderOut );

    const numberOfEntries = (((tableHeaderBytes[0] & 0xFF) << 8) | (tableHeaderBytes[1] & 0xFF));
    const bytesPerEntry = ((tableHeaderBytes[2] & 0xFF));
    dasmDefinition.numberOfEntries = numberOfEntries;
    dasmDefinition.bytesPerEntry = bytesPerEntry;

    pc += 3;
}

function testmeA(pc, line, cpu, bankId ) {

    let instrDasm;

    try {
        instrDasm = disasm.disasm(line[0], line[1], line[2], line[3], line[4], pc);

        let test = new DasmSymResult( pc, instrDasm );
        test.outputTest = getInstruction(pc, instrDasm, line, cpu, bankId );

        // let t = "";

        if (instrDasm.mnemo) {
            // t += getTrailingEmptyComments(instrDasm);
            test.outputTest += getTrailingEmptyComments(instrDasm);
        }

        return test;

    } catch ( error ) {
        console.error('DISASM ERR: ', error.message);
        pc++;
        let t = new DasmSymResult().addOutput( "???" );
        return t;
    }

}



function getInstruction( pc, instr, line, cpu, bankId ) {

    let bankIdForPc = 0xFF;
    if (pc < 0x8000) { bankIdForPc = bankId; }

    // ...does any definition/label etc. exist for the current Address?
    let dasmDefinitionForCurrentPC = dasmDefinitions.find( pc, bankIdForPc );
    if (dasmDefinitionForCurrentPC) {

        // ...is it an IMAGE?
        if (dasmDefinitionForCurrentPC.isImage == true ) {
            const imageMemoryBytes = memoryReadRange( pc, 512, cpu );
            let test = dasmDefinitionForCurrentPC.getImage( pc, imageMemoryBytes );

            // NEW TEST
            pc += test.length;
            // NEW TEST

            return test.output;
        }

        // ...is it a STRING TABLE?
        if (dasmDefinitionForCurrentPC.isStringTable == true ) {
            const wpcStringTableMemoryBytes = memoryReadRange( pc, dasmDefinitionForCurrentPC.bytesPerEntry, cpu );
            return dasmDefinitionForCurrentPC.getTableStrings( pc, wpcStringTableMemoryBytes );
        }

        // ...is it a WPC TABLE with HEADER data?
        if (dasmDefinitionForCurrentPC.isWpcTable === true) {

            // TESTING
            const tableHeaderBytes = memoryReadRange( pc, 2, cpu );
            dasmDefinitionForCurrentPC.getWpcTableHeader( pc, tableHeaderBytes );

            const numberOfEntries = (((tableHeaderBytes[0] & 0xFF) << 8) | (tableHeaderBytes[1] & 0xFF));
            const bytesPerEntry = ((tableHeaderBytes[2] & 0xFF));

            // TESTING
            dasmDefinitionForCurrentPC.numberOfEntries = numberOfEntries;
            // NOPE dasmDefinitionForCurrentPC.numberOfEntries = numberOfEntries + 1;

            dasmDefinitionForCurrentPC.bytesPerEntry = bytesPerEntry;

            pc += 3;

        }

        // TABLE (table dimensions are defined, rather than derived)
        // if (dasmDefinitionForCurrentPC.numberOfEntries && dasmDefinitionForCurrentPC.numberOfEntries > 0) {
        if (dasmIsForTable( dasmDefinitionForCurrentPC)) {

            const length = dasmDefinitionForCurrentPC.numberOfEntries * dasmDefinitionForCurrentPC.bytesPerEntry;
            const memoryBytes = memoryReadRange( pc, length, cpu );
            return dasmDefinitionForCurrentPC.getTable( pc, memoryBytes );

        }
    }

    // check for known address in the OPERANDS (parameters)
    // so we can substitute LABEL values where they are defined
    if ( instr && instr.params && instr.params.startsWith("$") && !instr.params.includes(",")) {
        let addressValue = parseInt("0x" + instr.params.substring(1) );
        // ...should now work all BANK IDs both SWITCHABLE banks with BANK IDs $3d and below
        // as well as SYS ROM bank(s) $3E,$3F (aka $FF)
        let dasmEntry = dasmDefinitions.find( addressValue, bankIdForPc );
        if (dasmEntry) {
            return dasmEntry.getInstruction( pc, instr, line );
        }
        else {
            return getDefault( pc, instr, line );
        }
    }
    else if ( instr && instr.params && instr.params.startsWith("#$")) {
        let addressValue = parseInt("0x" + instr.params.substring(2) );
        let dasmEntry = dasmDefinitions.find( addressValue, bankIdForPc );

        if (dasmEntry) {
            return dasmEntry.getInstruction( pc, instr, line );
        }
        else {
            return getDefault( pc, instr, line );
        }
    }
    else {
        return getDefault( pc, instr, line );
    }
}

function printDefault( pc, instr, line ){

    if (instr.mnemo == 'RTS') {
        printInstructionRaw(pc, instr, line);
        printEmptyComment();
        // printEmptyComment();
    } else if (instr.mnemo == 'RTI') {
        printInstructionRaw(pc, instr, line);
        printEmptyComment();
        // printEmptyComment();
    } else if (instr.mnemo == 'JMP') {
        printInstructionRaw(pc, instr, line);
        printEmptyComment();
    } else if (instr.mnemo == 'PULS' && instr.params.includes(',PC')) {
        printInstructionRaw(pc, instr, line);
        printEmptyComment();
        // printEmptyComment();
    } else if (instr.mnemo == 'ANDCC' && instr.params == '#$FE') {
        instr.comment = '; CLEAR Carry bit'
        printInstructionRaw(pc, instr, line);
    } else if (instr.mnemo == 'ORCC' && instr.params == '#$01') {
        instr.comment = '; SET Carry bit'
        printInstructionRaw(pc, instr, line);
    } else {
        printInstructionRaw(pc, instr, line);
    }
}

function getTrailingEmptyComments( instr ){

    if (instr.mnemo == 'RTS') {
        return getEmptyComment() + getEmptyComment();
    } else if (instr.mnemo == 'RTI') {
        return getEmptyComment() + getEmptyComment();
    } else if (instr.mnemo == 'JMP') {
        return getEmptyComment();
    } else if (instr.mnemo == 'PULS' && instr.params.includes(',PC')) {
        return getEmptyComment(); // + getEmptyComment();
    }

    return "";
}

function getDefault( pc, instr, line ){

    if (instr) {
        if (instr.mnemo == 'RTS') {
            return getInstructionRaw(pc, instr, line)+ "\n" + getEmptyComment();
        } else if (instr.mnemo == 'RTI') {
            return getInstructionRaw(pc, instr, line)+ "\n" + getEmptyComment();
        } else if (instr.mnemo == 'JMP') {
            return getInstructionRaw(pc, instr, line) + "\n" + getEmptyComment();
        } else if (instr.mnemo == 'PULS' && instr.params.includes(',PC')) {
            return getInstructionRaw(pc, instr, line) + "\n" + getEmptyComment();
        } else if (instr.mnemo == 'ANDCC' && instr.params == '#$FE') {
            instr.comment = '; CLEAR Carry bit'
            return getInstructionRaw(pc, instr, line);
        } else if (instr.mnemo == 'ORCC' && instr.params == '#$01') {
            instr.comment = '; SET Carry bit'
            return getInstructionRaw(pc, instr, line);
        } else {
            return getInstructionRaw(pc, instr, line);
        }
    }

    // return getInstructionRaw(pc, instr, line);
    return getTrailingEmptyComments( instr ) +
        getInstructionRaw(pc, instr, line);
}


function printInstructionRaw( pc, instr, line) {
    console.log( getInstructionRaw( pc, instr, line ));
}

function getInstructionRaw( pc, instr, line) {

    let out = pc.toString(16).toUpperCase() + ': ';
    out += d2h(line[0]);

    if (instr.bytes >= 2)
        out += ' ' + d2h(line[1]);
    if (instr.bytes >= 3)
        out += ' ' + d2h(line[2]);
    if (instr.bytes >= 4)
        out += ' ' + d2h(line[3]);

    out = out.padEnd(25);
    if (instr.mnemo){
        out += instr.mnemo.padEnd(6) + instr.params;
    }

    return out;
    // MAYBE NEWEST return getDasmOutput() + out;
}

function dasmIsForTable( dasmDefinition ) {
    return dasmIsForImage( dasmDefinition ) || dasmIsForWpcTable( dasmDefinition ) || (dasmDefinition.numberOfEntries > 0 && dasmDefinition.bytesPerEntry > 0);
}

function dasmIsForWpcTable(dasmDefinition) {
    return ( dasmDefinition.isWpcTable === true );
}

function dasmIsForImage(dasmDefinition) {
    return ( dasmDefinition.isImage === true );
}

function addHeaderForLabel(dasmDefinitionForCurrentPC) {
    // console.log( "addHeaderForLabel" + dasmDefinitionForCurrentPC.label)
    addDasmDividerComment();
    addDasmLine(dasmDefinitionForCurrentPC.label + ":");
    addDasmDividerComment();
}

function memoryReadRange( start, length, cpu ) {

    let range = [];
    let end = start + length;

    for ( let currentMemoryLocation = start; currentMemoryLocation <= end; currentMemoryLocation++ ){
        range.push(  cpu.memoryReadFunction(currentMemoryLocation) );
    }
    return range;
}

function d2h(d) {
    return (d / 256 + 1 / 512).toString(16).substring(2, 4);
}

function d2h_16(d) {
    return d.toString(16).toUpperCase();
}

function getHeatmapForBank(bankId) {

    if (dasmDefinitions) {
        let bankLabels = getDefinitionsForBank( bankId );
        bankLabels.sort((a, b) => (a.address > b.address) ? 1 : -1);
        let previousLabel = bankLabels[0];
        let tally = 0;
        let len = 0;
        let lenPrevious = 0;
        bankLabels.forEach( obj => {
            len = 0;
            if ( obj.isWpcTable || obj.isStringTable || obj.isImage ) {
                lenPrevious = obj.address - previousLabel.address;
                len = obj.numberOfEntries * obj.bytesPerEntry;
                // console.log( `Label: ${previousLabel.label} Address: ${d2h_16(previousLabel.address)} (length: ${lenPrevious}  $${d2h(lenPrevious)})  tally: ${d2h_16(tally)}`)
                tally += lenPrevious;
                lenPrevious = 0;
            } else {
                // if (obj.address === 0x7b4d) debugger;
                lenPrevious = obj.address - previousLabel.address;
                lenPrevious = lenPrevious > 0 ? lenPrevious : len;
                // console.log( `Label: ${previousLabel.label} Address: ${d2h_16(previousLabel.address)} (length: ${lenPrevious}  $${d2h(lenPrevious)})  tally: ${d2h_16(tally)}`)
                tally += lenPrevious;
            }
            previousLabel = obj;
        });

        let coverage = ( tally / 0x3fff ) * 100;
        console.log( `Bank: ${d2h_16(bankId)}`)
        console.log( `Known bytes: ${d2h_16(tally)}`)
        console.log( `Unknown bytes: ${d2h_16(0x3fff - tally)}`)
        console.log( `Label coverage: ${coverage.toFixed(2)}%`)

        let bankCoverage = {};
        bankCoverage.bankId = bankId;
        bankCoverage.knownBytes = tally;
        bankCoverage.unknownBytes = 0x3fff - tally;
        bankCoverage.coverage = coverage.toFixed(2);
        return bankCoverage;
    }
    return {};
}

function getHeatmapForAllBanks() {

    let series = [];

    let startingBankId = 0x20;
    let endingBankId = 0x3d;

    let seriesBankId = 0x20;
    let seriesvalues = [];
    for (let currentBankId = 0x20; currentBankId <= 0x3d; currentBankId++) {
        let relativeBankId = (currentBankId-startingBankId) + 1;
        let endOfSeries = relativeBankId > 0 && relativeBankId % 8 === 0;
        let heatmap = getHeatmapForBank(currentBankId);
        seriesvalues.push( heatmap.coverage )
        if (endOfSeries) {
            let entry = {};
            entry.name = '$' + d2h(seriesBankId);
            entry.data = seriesvalues;
            series.push( entry )
            seriesvalues = [];
            seriesBankId+=0x08;
        }
    }

    if(seriesvalues.length > 0) {
        let entry = {};
        entry.name = '$' + d2h(seriesBankId);
        entry.data = seriesvalues;
        series.push( entry );
    }
    return series;
}

// series: [
//     {
//         name: '$20',
//         data: [ .05, .99, .5, .05, .05, .05, .05, .05 ],
//     },
//     {
//         name: '$2a',
//         data: [ .05, .99, .5, .05, .05, .05, .05, .05 ],
//     },
//     {
//         name: '$30',
//         data: [ .05, .99, .5, .05, .05, .05, .05, .05 ],
//     },
//     {
//         name: '$3A',
//         data: [ .05, .99, .5, .05, .05, .05, .05, .05 ],
//     }
// ],
