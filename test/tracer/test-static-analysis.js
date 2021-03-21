'use strict';

const path = require('path');
const fs = require('fs');
const sinon = require('sinon');
const Emulator = require('../../lib/emulator');

const disasm = require('./disasm');
const dasmEntryList = require('../../lib/db/nba-dasm-entries');
const dasmStaticAnalysis = require('../../test/tracer/DasmStaticAnalysis');

const romU06Path = process.env.ROMFILE || path.join(__dirname, '/../../rom/fb_g11.ROM');
const HAS_SECURITY_FEATURE = process.env.HAS_SECURITY_FEATURE === 'true' ? ['securityPic', 'wpcSecure'] : [];
const HAS_DCS_BOARD = process.env.HAS_DCS_BOARD === 'true' ? ['wpcDcs'] : [];
const HAS_DMD_BOARD = process.env.HAS_DMD_BOARD === 'true' ? ['wpcDmd'] : [];
const HAS_FLIPTRONICS_BOARD = process.env.HAS_FLIPTRONICS_BOARD === 'true' ? ['wpcFliptronics'] : [];

const FEATURES = HAS_DCS_BOARD.concat(HAS_SECURITY_FEATURE).concat(HAS_DMD_BOARD).concat(HAS_FLIPTRONICS_BOARD);

const MAXSTEPS = process.env.STEPS || 0xFF000;

console.log('WPC-EMU Static Analysis for DASM dictionary', { FEATURES, MAXSTEPS, ROMFILE: romU06Path });

const MAX_LOOPS = 16384;
const MAX_STEPS = 95;
const lastPC = [MAX_LOOPS].fill(0xFF);
let outputSlice = [];
let traceLoops = 0;

// TESTING
let dasmDefinitions = [];
let dasmOutput = [];
// TESTING

function initDasmDefinitions() {
    dasmDefinitions = dasmEntryList.getDasmEntries();

    let t = new dasmStaticAnalysis( 0x4000 );
    t.display();
}

function addDasmLine( sourceCodeToAdd ) {
    dasmOutput.push( sourceCodeToAdd );
}

function isReturnSubroutine( dasmOutput ) {

    if (dasmOutput.includes( ': 35 ') && dasmOutput.includes( 'PC')){
        return true;
    }

    if (dasmOutput.includes( 'RTS')){
        return true;
    }

    return false;
}

function isLD_indexed_S( dasmOutput ) {

    // LDX ,S
    if (dasmOutput.includes( ': ae 6')){
        return true;
    }

    // LDX ,S
    if (dasmOutput.includes( ': ee 6')){
        return true;
    }

    return false;
}

function parseLD_indexed_S( dasmOutput ) {
    let start = dasmOutput.indexOf( "LD" );
    return dasmOutput.substring( start );
}


function isST_indexed_S( dasmOutput ) {

    if (dasmOutput.includes( ': af 6')){
        return true;
    }

    if (dasmOutput.includes( ': ef 6')){
        return true;
    }

    return false;
}

function is_indexed_autoincrement( dasmOutput ) {

    if (dasmOutput.includes( '++')){
        return true;
    }

    if (dasmOutput.includes( '+')){
        return true;
    }

    return false;
}

function printDasmLines( ) {

    dasmOutput.forEach( function(item){
        console.log( item );
    })
}

function startTrace() {
    const loadRomFilesPromise = Promise.all([
        loadFile(romU06Path),
    ]);

    initDasmDefinitions();
    // initTraceLoops();

    return loadRomFilesPromise
        .then((romFiles) => {
            const romData = {
                u06: romFiles[0],
            };
            return Emulator.initVMwithRom(romData, {
                fileName: 'foo',
                features: FEATURES,
                skipWpcRomCheck: false,
            });
        })
        .then((wpcSystem) => {

            wpcSystem.reset();
            wpcSystem.start();

            let bankId = 0x37;
            wpcSystem.cpuBoard.cpu.memoryWriteFunction( 0x3ffc, bankId );

            function extracted( startAddress ) {

                wpcSystem.cpuBoard.cpu.regPC = startAddress ;

                let steps = 0;
                let parameterBytesExpected = 0;
                let details = new dasmStaticAnalysis(wpcSystem.cpuBoard.cpu.regPC);

                while (steps++ < MAX_STEPS) {

                    const cpu = wpcSystem.cpuBoard.cpu;
                    const pc = cpu.regPC;

                    const line = memoryReadRange(pc, 8, cpu);
                    const instr = disasm.disasm(line[0], line[1], line[2], line[3], line[4], pc);

                    let newPC = dasmInstruction(pc, instr, line, cpu, bankId);
                    let lastDasmOutput = dasmOutput[dasmOutput.length - 1];

                    if (isLD_indexed_S(lastDasmOutput)) {
                        // addDasmLine( "; FOUND a LD indexed ,S");
                        // addDasmLine( ";" + parseLD_indexed_S(lastDasmOutput));
                        details.add_LD_indexed_S();
                    }

                    if (isST_indexed_S(lastDasmOutput)) {
                        // addDasmLine( "; FOUND a ST indexed ,S");
                        details.add_ST_indexed_S();
                    }

                    if (is_indexed_autoincrement(lastDasmOutput)) {
                        let count = (lastDasmOutput.match(/\+/g) || []).length;
                        parameterBytesExpected = parameterBytesExpected + count;
                        // addDasmLine( "; FOUND an indexed autoincrement - " + count);

                        let registerX = (lastDasmOutput.match(/LDX/g) || []).length;
                        let registerY = (lastDasmOutput.match(/LDY/g) || []).length;
                        let registerD = (lastDasmOutput.match(/LDD/g) || []).length;
                        let registerU = (lastDasmOutput.match(/LDU/g) || []).length;
                        let registerA = (lastDasmOutput.match(/LDA/g) || []).length;
                        let registerB = (lastDasmOutput.match(/LDB/g) || []).length;

                        if (registerX > 0)
                            details.addParameter(count, "X");
                        else if (registerY > 0)
                            details.addParameter(count, "Y");
                        else if (registerD > 0)
                            details.addParameter(count, "D");
                        else if (registerU > 0)
                            details.addParameter(count, "U");
                        else if (registerA > 0)
                            details.addParameter(count, "A");
                        else if (registerB > 0)
                            details.addParameter(count, "B");
                        else
                            details.addParameter(count, "Other");

                    }

                    if (isReturnSubroutine(lastDasmOutput)) {
                        // addDasmLine( "; FOUND THE EXIT POINT");
                        addDasmLine(details.getParameterBytesDetails());
                        steps = MAX_STEPS;
                    }

                    wpcSystem.cpuBoard.cpu.regPC = newPC;
                    steps++;

                    if (newPC > 0xFFFF) {
                        steps = MAX_LOOPS;
                    }
                }

                printDasmLines();
            }

            // extracted( 0x8452 );
            // extracted(0x83e0);
            // extracted(0x8452);
            // extracted(0x8486);
            // extracted(0x8512);
            // extracted(0x8553);
            // extracted(0x863a);
            extracted(0x8649);
            extracted(0x8742);
            extracted(0x8b95);
            extracted(0x8d2b);
            extracted(0x8c14);
            extracted(0x8d5f);
            extracted(0x8D94);
            extracted(0xeb4a);

        })
        .catch((error) => {
            console.log('ERROR', error.message, error.stack);
        });
}

setupFakeSystemTime();
startTrace();

function memoryReadRange( start, length, cpu ) {

    let range = [];
    let end = start + length;

    for ( let currentMemoryLocation = start; currentMemoryLocation <= end; currentMemoryLocation++ ){
        range.push(  cpu.memoryReadFunction(currentMemoryLocation) );
    }
    return range;
}

function formatRegister(value, padLength) {
    return value.toString(16).padStart(padLength, '0').toUpperCase() + ' ';
}

function dasmInstruction(pc, instr, line, cpu, bankId ) {

    let bankIdForPc = 0xFF;
    if (pc < 0x8000){
        bankIdForPc = bankId;
    }

    // ...does any definition/label etc. exist for the current Address?
    let dasmEntryForCurrentPC = dasmDefinitions.find( pc, bankIdForPc );
    if (dasmEntryForCurrentPC) {

        addDasmLine( ";---------------------------------------------------------" );
        addDasmLine( dasmEntryForCurrentPC.label + ":" );
        addDasmLine( ";---------------------------------------------------------" );

        // ...is it an IMAGE?
        if (dasmEntryForCurrentPC.isImage == true ) {
            // const wpcStringTableMemoryBytes = memoryReadRange( pc, dasmEntryForCurrentPC.bytesPerEntry, cpu );
            // dasmEntryForCurrentPC.printTableStrings( pc, wpcStringTableMemoryBytes );
            // return pc + dasmEntryForCurrentPC.bytesPerEntry;
        }

        // ...is it a STRING TABLE?
        // if (dasmEntryForCurrentPC.isStringTable == true || pc == 0x5158) {
        if (dasmEntryForCurrentPC.isStringTable == true ) {
            const wpcStringTableMemoryBytes = memoryReadRange( pc, dasmEntryForCurrentPC.bytesPerEntry, cpu );
            dasmEntryForCurrentPC.printTableStrings( pc, wpcStringTableMemoryBytes );
            return pc + dasmEntryForCurrentPC.bytesPerEntry;
        }

        // ...is it a WPC TABLE with HEADER data?
        if (dasmEntryForCurrentPC.isWpcTable == true) {
            const tableHeaderBytes = memoryReadRange( pc, 2, cpu );
            // dasmEntryForCurrentPC.numberOfEntries = 1;
            // dasmEntryForCurrentPC.bytesPerEntry = 3;
            // dasmEntryForCurrentPC.printTable( pc, tableHeaderBytes );
            dasmEntryForCurrentPC.printWpcTableHeader( pc, tableHeaderBytes );

            const numberOfEntries = (((tableHeaderBytes[0] & 0xFF) << 8) | (tableHeaderBytes[1] & 0xFF));
            const bytesPerEntry = ((tableHeaderBytes[2] & 0xFF));
            dasmEntryForCurrentPC.numberOfEntries = numberOfEntries;
            dasmEntryForCurrentPC.bytesPerEntry = bytesPerEntry;

            pc += 3;
            const length = dasmEntryForCurrentPC.numberOfEntries * dasmEntryForCurrentPC.bytesPerEntry;
            const wpcTableMemoryBytes = memoryReadRange( pc, length, cpu );
            dasmEntryForCurrentPC.printTable( pc, wpcTableMemoryBytes );
            return pc + length;
        }

        if (dasmEntryForCurrentPC.numberOfEntries && dasmEntryForCurrentPC.numberOfEntries > 0) {
            const length = dasmEntryForCurrentPC.numberOfEntries * dasmEntryForCurrentPC.bytesPerEntry;
            const memoryBytes = memoryReadRange( pc, length, cpu );
            dasmEntryForCurrentPC.printTable( pc, memoryBytes );
            return pc + length;
        }
    }

    // check for known address in the OPERANDS (parameters)
    // so we can substitute LABEL values where they are defined
    if ( instr.params && instr.params.startsWith("$") && !instr.params.includes(",")) {
        let addressValue = parseInt("0x" + instr.params.substring(1) );
        // ...currently only supporting LABELS for addresses within the SYS ROM bank(s) $3E,$3F (aka $FF)
        let dasmEntry = dasmDefinitions.find( addressValue, 0xFF );
        if (dasmEntry) {
            return dasmEntry.printInstruction( pc, instr, line );
        }
        else {
            dasmDefault( pc, instr, line );
            return pc + instr.bytes;
        }
    }
    else if ( instr.params && instr.params.startsWith("#$")) {
        let addressValue = parseInt("0x" + instr.params.substring(2) );
        let dasmEntry = dasmDefinitions.find( addressValue, 0xFF );

        if (dasmEntry) {
            return dasmEntry.printInstruction( pc, instr, line );
        }
        else {
            dasmDefault( pc, instr, line );
            return pc + instr.bytes;
        }
    }
    else {
        dasmDefault( pc, instr, line );
        return pc + instr.bytes;
    }
}

function dasmDefault( pc, instr, line ){

    if (instr.mnemo == 'RTS') {
        dasmInstructionRaw(pc, instr, line);
        // dasmEmptyComment();
        // dasmEmptyComment();
    } else if (instr.mnemo == 'RTI') {
        dasmInstructionRaw(pc, instr, line);
        dasmEmptyComment();
        dasmEmptyComment();
    } else if (instr.mnemo == 'JMP') {
        dasmInstructionRaw(pc, instr, line);
        dasmEmptyComment();
    } else if (instr.mnemo == 'PULS' && instr.params.includes(',PC')) {
        dasmInstructionRaw(pc, instr, line);
        // dasmEmptyComment();
        // dasmEmptyComment();
    } else if (instr.mnemo == 'ANDCC' && instr.params == '#$FE') {
        instr.comment = '; CLEAR Carry bit'
        dasmInstructionRaw(pc, instr, line);
    } else if (instr.mnemo == 'ORCC' && instr.params == '#$01') {
        instr.comment = '; SET Carry bit'
        dasmInstructionRaw(pc, instr, line);
    } else {
        dasmInstructionRaw(pc, instr, line);
    }

}

function dasmInstructionRaw( pc, instr, line){
    let out = '';
    if (instr.bytes == 1)
        out = pc.toString(16).toUpperCase() + ': ' + d2h(line[0]) + '                 ' + instr.mnemo.padEnd(6) + instr.params.padEnd(20) ;
    if (instr.bytes == 2)
        out = pc.toString(16).toUpperCase() + ': ' + d2h(line[0]) + ' ' + d2h(line[1]) + '              ' + instr.mnemo.padEnd(6) + instr.params.padEnd(20) ;
    if (instr.bytes == 3)
        out = pc.toString(16).toUpperCase() + ': ' + d2h(line[0]) + ' ' + d2h(line[1]) + ' ' + d2h(line[2]) + '           ' + instr.mnemo.padEnd(6) + instr.params.padEnd(20) ;
    if (instr.bytes == 4)
        out = pc.toString(16).toUpperCase() + ': ' + d2h(line[0]) + ' ' + d2h(line[1]) + ' '+ d2h(line[2]) + ' '+ d2h(line[3]) + '        ' + instr.mnemo.padEnd(6) + instr.params.padEnd(20) ;

    if (instr.comment) out += instr.comment;

    // console.log( out );
    addDasmLine( out );
}

function dasmInstructionWith1ByteParm(pc, instr, line) {
    dasmInstructionRaw( pc, instr, line );
    instr.bytes += 1;
    addDasmLine( (pc+3).toString(16).toUpperCase() + ': ' + d2h(line[3]));
    dasmEmptyComment();
}

function dasmInstructionWith2ByteParms(pc, instr, line) {
    dasmInstructionRaw( pc, instr, line );
    instr.bytes += 2;
    addDasmLine( (pc+3).toString(16).toUpperCase() + ': ' + d2h(line[3]) + ' ' + d2h(line[4]) );
    dasmEmptyComment();
}

function printInstructionWith3ByteParms(pc, instr, line) {
    dasmInstructionRaw( pc, instr, line );
    instr.bytes += 3;
    addDasmLine( (pc+3).toString(16).toUpperCase() + ': ' + d2h(line[3]) + ' ' + d2h(line[4]) + ' ' + d2h(line[5]));
    dasmEmptyComment();
}

function dasmInstructionWith4ByteParms(pc, instr, line) {
    dasmInstructionRaw( pc, instr, line );
    instr.bytes += 4;
    addDasmLine( (pc+3).toString(16).toUpperCase() + ': ' + d2h(line[3]) + ' ' + d2h(line[4]) + ' ' + d2h(line[5]) + ' ' + d2h(line[6]));
    dasmEmptyComment();
}

function dasmInstructionWith5ByteParms(pc, instr, line) {
    dasmInstructionRaw( pc, instr, line );
    instr.bytes += 5;
    addDasmLine( (pc+3).toString(16).toUpperCase() + ': ' + d2h(line[3]) + ' ' + d2h(line[4]) + ' ' + d2h(line[5]) + ' ' + d2h(line[6]) + ' ' + d2h(line[7]));
    dasmEmptyComment();
}

function dasmInstructionWith6ByteParms(pc, instr, line) {
    dasmInstructionRaw( pc, instr, line );
    instr.bytes += 6;
    addDasmLine( (pc+3).toString(16).toUpperCase() + ': ' + d2h(line[3]) + ' ' + d2h(line[4]) + ' ' + d2h(line[5]) + ' ' + d2h(line[6]) + ' ' + d2h(line[7]) + ' ' + d2h(line[8]));
    dasmEmptyComment();
}

function dasmEmptyComment() {
    addDasmLine( '; ' );
}

// function dasmInstruction_JSR_BANK(pc, instr, line) {
//     instr.bytes += 3;
//     addDasmLine( d2h_16(pc) + ': ' + d2h(line.i1) + ' ' + d2h(line[1]) + ' ' + d2h(line[2]) + '        JSR_BANK( $' + d2h(line[3]) + d2h(line[4]) + ', $' + d2h(line[5]) + ' )' );
//     addDasmLine( (pc+3).toString(16).toUpperCase() + ': ' + d2h(line[3]) + ' ' + d2h(line[4]) + ' ' + d2h(line[5]) );
//     dasmEmptyComment();
// }

function d2h(d) {
    return (d / 256 + 1 / 512).toString(16).substring(2, 4);
}

function d2h_16(d) {
    return d.toString(16).toUpperCase();
}

function loadFile(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (error, data) => {
            if (error) {
                return reject(error);
            }
            resolve(new Uint8Array(data));
        });
    });
}

function setupFakeSystemTime() {
    // to reduce diff generated by the roms, we set the system clock to January 1st 2017
    sinon.useFakeTimers({
        now: 1483228800000,
    });
    console.log('Fake system clock initialized:', new Date());
}