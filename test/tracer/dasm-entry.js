// 'use strict';

const Database = require('./Database');
const db = new Database({
    host: 'localhost',
    user: 'dtansey',
    password: 'just4MySQL1,',
    database: 'classicmodels'
});

const wpcErrors = require('./wpcErrors');
let wpcErrorList = wpcErrors.getWpcErrors();

const gameAdjustments = require('./nbaf_31_adjustments');
let gameAdjustmentsList = gameAdjustments.getGameAdjustments();

const gameTasks = require('./nbaf_31_tasks');
let gameTasksList = gameTasks.getGameTasks();

class DasmEntry {

    constructor(address, bankId, parameterBytes, label,
                macroName, macroParameterBytes, macroPrintInstruction,
                numberOfEntries, bytesPerEntry,
                isWpcTable, isStringTable,
                offsetBankAddress, offsetBankAddress_B, isImage ) {

        this.address = address;
        this.bankId = bankId || 0xFF;
        this.parameterBytes = parameterBytes;
        this.label = label || this.getLabelDefault( address, bankId );
        this.labelScope = 'global';
        this.comments = [];
        this.macroName = macroName;
        this.macroParameterBytes = macroParameterBytes;
        this.macroPrintInstruction = macroPrintInstruction;
        this.numberOfEntries = numberOfEntries;
        this.bytesPerEntry = bytesPerEntry;
        this.isWpcTable = isWpcTable || false;
        this.isStringTable = isStringTable || false;
        this.offsetBankAddress = offsetBankAddress || null;
        this.offsetBankAddress_B = offsetBankAddress_B || null;
        this.isImage = isImage || false;
        this.region = this.getRegion( );
    }

    getRegion( ) {
        if ( this.address < 0x3800 ) return "ram";
        else if (this.address <= 0x3FFF ) return "wpc";
        // else if (this.address <= 0x7FFF ) return "$" + d2h( this.bankId );
        else if (this.address <= 0x7FFF ) return "bank";
        else return "sys";
    }

    getLabelDefault( address, bankId ) {
        if ( bankId == 0xFF || bankId == 0x3E || bankId == 0x3F )
            return 'sys_' + address.toString(16);
        else
            return 'bnk_' + address.toString(16) + '_' + address.toString(16);
    }

    printWpcTableHeader( pc, memoryBytes ) {

        let numberOfEntries = memoryBytes[0] * 256 + memoryBytes[1];
        let bytesPerEntry = memoryBytes[2];
        let out = pc.toString(16).toUpperCase() + ': ';

        // add endline comment
        console.log( "; -------------------------------------------------------------" );
        console.log( "; " + this.label  );
        console.log( "; number of entries: " + d2h_16( numberOfEntries)  );
        console.log( "; bytes per: " + d2h_16( bytesPerEntry )  );
        console.log( "; -------------------------------------------------------------" );

        for (let currentEntryOffset = 0; currentEntryOffset < 3; currentEntryOffset++ ){
            out += d2h(memoryBytes[currentEntryOffset]) + ' ';
        }

        // console.log( out );
        this.printEmptyComment();
        pc += 3;
    }

    getWpcTableHeader( pc, memoryBytes ) {

        let outputForWpcTableHeader = "";

        let numberOfEntries = memoryBytes[0] * 256 + memoryBytes[1];
        let bytesPerEntry = memoryBytes[2];
        let out = pc.toString(16).toUpperCase() + ': ';

        // add HEADER comments
        outputForWpcTableHeader += ";-------------------------------------------------------------\n";;
        outputForWpcTableHeader += "; " + this.label + "\n";;
        outputForWpcTableHeader += "; number of entries: " + d2h_16( numberOfEntries ) + "\n";
        outputForWpcTableHeader += "; bytes per: " + d2h_16( bytesPerEntry ) + "\n";
        outputForWpcTableHeader += "; -------------------------------------------------------------\n" ;

        for (let currentEntryOffset = 0; currentEntryOffset < 3; currentEntryOffset++ ){
            out += d2h(memoryBytes[currentEntryOffset]) + ' ';
        }

        pc += 3;
        return outputForWpcTableHeader + out;
    }

    printTable( pc, memoryBytes ) {
        console.log( this.getTable( pc, memoryBytes ) );
        this.printEmptyComment();
    }

    getTable( pc, memoryBytes ) {

        let outputForEntireTable = "";

        for (let currentEntry = 0; currentEntry < this.numberOfEntries; currentEntry++ ){
            let startByteCurrentEntry = currentEntry * this.bytesPerEntry;
            let out = pc.toString(16).toUpperCase() + ': ';

            for (let currentEntryOffset = 0; currentEntryOffset < this.bytesPerEntry; currentEntryOffset++ ){
                out += d2h(memoryBytes[startByteCurrentEntry + currentEntryOffset]) + ' ';
            }

            // add endline comment
            out += " ; entry 0x" + d2h_16( currentEntry ) + " (dec: " + currentEntry + ")";
            if( this.offsetBankAddress != null ){
                let startBankAddress = startByteCurrentEntry + this.offsetBankAddress;
                let bankAddress = d2h( memoryBytes[startBankAddress]) + d2h( memoryBytes[startBankAddress + 1]);
                let bankId = d2h( memoryBytes[startBankAddress + 2]);

                out += " - $" + bankAddress + ", $" + bankId;

                if( this.offsetBankAddress_B != null ){
                    let startBankAddress_B = startByteCurrentEntry + this.offsetBankAddress_B;
                    let bankAddress_B = d2h( memoryBytes[startBankAddress_B]) + d2h( memoryBytes[startBankAddress_B + 1]);
                    let bankId_B = d2h( memoryBytes[startBankAddress_B + 2]);

                    out += " - $" + bankAddress_B + ", $" + bankId_B;
                }
            }

            // console.log( out );
            outputForEntireTable += out + "\n";
            pc += this.bytesPerEntry;
        }

        return outputForEntireTable;
    }

    getImage( pc, memoryBytes ) {

        var output = pc.toString(16).toUpperCase() + ': ';
        var output = pc.toString(16).toUpperCase() + ': ';
        var stringValue = '';
        let currentCharacter = 0;
        let finalOutput = "";

        let imageEncodedCurrentByte = 0;
        const imageType = memoryBytes[imageEncodedCurrentByte++];
        output = output + d2h(imageType).padEnd( 20 )  + '.db $' + d2h(imageType).padEnd( 16 ) + '; Image Type = ' + d2h(imageType) + '\n';
        pc++;
        output += pc.toString(16).toUpperCase() + ': ';

        if(imageType === 1) {
            const repeatFlagValue = memoryBytes[imageEncodedCurrentByte++];
            output = output + d2h(repeatFlagValue).padEnd( 20 ) + '.db $' + d2h(repeatFlagValue).padEnd( 16 ) + '; repeat flag = ' + d2h(repeatFlagValue) + '\n;';
            pc++;

            let currentRawByteOutput = 0;
            let imageCurrentByte = 0;
            let image = [512];
            do {
                let currentInputByte = memoryBytes[imageEncodedCurrentByte++];
                if (currentInputByte === repeatFlagValue) {
                    let repeatsTotal = memoryBytes[imageEncodedCurrentByte++];
                    let repeatingValue = memoryBytes[imageEncodedCurrentByte++];

                    output += '\n' + pc.toString(16).toUpperCase() + ': ';
                    output += (d2h(currentInputByte) + ' ' + d2h(repeatsTotal)+ ' ' + d2h(repeatingValue)).padEnd(40);
                    output += '; repeat $' + d2h( repeatsTotal )  + ' times: $' + d2h(repeatingValue ) + ' \n';

                    for(let currentRepeat = 0; currentRepeat < repeatsTotal; currentRepeat++) {
                        image[imageCurrentByte++] = repeatingValue;
                    }
                    pc += 3;

                    currentRawByteOutput = 0;

                    if (imageCurrentByte < 512)
                        output += pc.toString(16).toUpperCase() + ': ';
                    else
                        output += ';\n;\n';

                } else {
                    image[imageCurrentByte++] = currentInputByte;
                    output += d2h(currentInputByte) + ' ' ;
                    pc++;
                    currentRawByteOutput++;

                    // next dasm output line condition
                    if (currentRawByteOutput % 4 == 0) {
                        output = output + "\n";
                        output = output + pc.toString(16).toUpperCase() + ': ';
                        currentRawByteOutput = 0;
                    }
                }
            } while (imageCurrentByte < 512)
        }

        // NEW 2021-01-01
        debugger;
        let imgDasm = {};
        imgDasm.length = imageEncodedCurrentByte;
        imgDasm.output = output;

        return imgDasm;
        // NEW 2021-01-01

        // return output;
    }

    printTableStrings( pc, memoryBytes ) {
        let outputTableStrings = this.getTableStrings( pc, memoryBytes );
        console.log( outputTableStrings );
        this.printEmptyComment();
    }

    getTableStrings( pc, memoryBytes ) {

        var output = pc.toString(16).toUpperCase() + ': ';
        var stringValue = '';
        let currentCharacter = 0;
        let finalOutput = "";
        let strStartAddress = pc;

        for (let currentByteOffset = 0; currentByteOffset < this.bytesPerEntry; currentByteOffset++ ){

            let currentByte = memoryBytes[currentByteOffset];
            output = output + d2h(currentByte) + ' ';

            let currentChars = (currentByte == 0x0a)
                ? "\\n"
                : String.fromCharCode( currentByte );
            stringValue += currentChars;

            pc++;
            currentCharacter++;

            // next dasm output line condition
            if (currentCharacter % 8 == 0) {
                output = output + "\n";
                if (currentByte != 0) { output = output + pc.toString(16).toUpperCase() + ': '; }
                currentCharacter = 0;
            }

            // End-of-String condition
            if (currentByte == 0) {
                finalOutput += "\n\n\t\t\t\t .db '" + stringValue + "'" + "\n";
                finalOutput += output;

                output = '\n' + pc.toString(16).toUpperCase() + ': ';
                stringValue = '';
                currentCharacter = 0;
            }
        }
        return finalOutput;
    }

    printInstruction( pc, instr, line ) {

        if (typeof this.macroPrintInstruction === "function") {
            this.macroPrintInstruction( this, pc, instr, line );
            return pc + instr.bytes;
        }

        if (this.parameterBytes > 0 ) {
            this.printInstructionWithParmBytes( pc, instr, line );
            return pc + instr.bytes;
        }

        this.printInstructionRaw( pc, instr, line );
        return pc + instr.bytes;
    }

    getInstruction( pc, instr, line ) {

        if (typeof this.macroPrintInstruction === "function") {

            // NEW
            if (instr.mnemo.startsWith('J')) {
                return this.macroPrintInstruction( this, pc, instr, line );
            }
        }

        if (this.parameterBytes > 0  && instr.mnemo.startsWith('J')) {
            return this.getInstructionWithParmBytes( pc, instr, line );
        }

        return this.getInstructionRaw( pc, instr, line );
    }

    printInstructionRaw( pc, instr, line) {
        let out = this.getInstructionRaw( pc, instr, line );
        // console.log( out );
    }

    getInstructionRaw( pc, instr, line) {
        var out = pc.toString(16).toUpperCase() + ': ' + d2h(line[0]) + ' ';

        if (instr.bytes >= 2)
            out += d2h(line[1]) + ' ';
        if (instr.bytes >= 3)
            out += d2h(line[2]) + ' ';
        if (instr.bytes >= 4)
            out += d2h(line[3]) + ' ';

        out = out.padEnd(18);

        let parmsOut = instr.params.padStart(8);
        if (this.label) {
            parmsOut = this.label;
            if (instr.params.startsWith('#')){
                parmsOut = '#' + parmsOut;
            }
        }

        out += instr.mnemo.padStart(10).padEnd(12) + parmsOut.padEnd(20);

        return out;
    }


    printEmptyComment() {
        console.log( '; ' );
    }

    printInstructionParmBytes(pc, instr, line, numberOfParmBytes ) {
        console.log(this.getInstructionParmBytes( pc, instr, line, numberOfParmBytes ));
        this.printEmptyComment();
    }

    getInstructionParmBytes(pc, instr, line, numberOfParmBytes ) {
        instr.bytes += numberOfParmBytes;
        let parmBytesOutput = (pc + 3).toString(16).toUpperCase() + ':';
        for (let currentParmByte = 0; currentParmByte < numberOfParmBytes; currentParmByte++) {
            parmBytesOutput = parmBytesOutput + ' ' + d2h(line[3 + currentParmByte]);
        }
        return parmBytesOutput;
    }

    printInstructionWithParmBytes(pc, instr, line) {
        this.printInstructionRaw( pc, instr, line );
        this.printInstructionParmBytes( pc, instr, line, this.parameterBytes)
    }

    getInstructionWithParmBytes(pc, instr, line) {
        let raw = this.getInstructionRaw( pc, instr, line );
        let instructionParameterBytes = this.getInstructionParmBytes( pc, instr, line, this.parameterBytes)

        return raw + "\n" + instructionParameterBytes;
    }

}

//-------------------------------------------------------

class DasmEntryList {

    constructor() {
        this.entries = [];
    }

    add(entry) {
        this.entries.push(entry);
    }

    add(address, parameterBytes) {
        this.entries.push(new DasmEntry( address, 0xFF, parameterBytes));
    }

    add(address, parameterBytes, label ) {
        this.entries.push(new DasmEntry( address, 0xFF, parameterBytes, label ));
    }

    addWPC(address, label ) {
        this.entries.push(new DasmEntry( address, 0xFF, 0, label ));
    }

    addBankLabel(address, bankId, label ) {
        this.entries.push(new DasmEntry( address, bankId, label ));
    }

    add(address, parameterBytes, macroName, macroParameterBytes, macroPrintInstruction ) {
        this.entries.push(new DasmEntry( address, 0xFF, parameterBytes, macroName, macroName, macroParameterBytes, macroPrintInstruction ));
    }

    addSysMacro(address, parameterBytes, macroParameterBytes, label ) {

        if (label == null || label == "") {
            label = getLabelDefault(address, 0xFF);
        }

        this.entries.push(new DasmEntry( address, 0xFF, parameterBytes, label, label, macroParameterBytes, getMacroInstruction_Any ));
    }

    addBankMacro(address, bankId, parameterBytes, macroParameterBytes, label ) {

        if (label == null || label == "") {
            label = getLabelDefault(address, bankId);
        }

        this.entries.push(new DasmEntry( address, bankId, parameterBytes, label, label, macroParameterBytes, getMacroInstruction_Any ));
    }

    addBankLabel(address, bankId, label ) {

        if (label == null || label == "") {
            label = getLabelDefault(address, bankId);
        }

        this.entries.push(new DasmEntry( address, bankId, 0, label, label ));
    }

    addTableSys(address, label, numberOfEntries, bytesPerEntry ) {
        this.entries.push(new DasmEntry( address, 0xFF, 0, label, '', [], {}, numberOfEntries, bytesPerEntry ));
    }

    addTable(address, bankId, label, numberOfEntries, bytesPerEntry ) {
        this.entries.push(new DasmEntry( address, bankId, 0, label, '', [], {}, numberOfEntries, bytesPerEntry ));
    }

    addImage(address, bankId, label ) {
        this.entries.push(
            new DasmEntry( address, bankId, 0, label,
                '', [], {},
                0, 0,
                false,
                false,
                null,
                null,
                true ));
    }

    addTableWpc(address, bankId, label, offsetBankAddress = null, offsetBankAddress_B = null ) {
        this.entries.push(
            new DasmEntry( address, bankId, 0, label,
                '', [], {},
                0, 0,
                true,
                false,
                offsetBankAddress,
                offsetBankAddress_B ));
    }

    addTableStrings(address, bankId, label, length ) {
        this.entries.push(new DasmEntry( address, bankId, 0, label, '', [], {}, 1, length, false, true ));
    }

    list() {
        this.entries.forEach(function(item){
            console.log(
                '0x' + item.address.toString(16) + '\t' +
                item.label + '\t\t' +
                'parameter bytes: ' + item.parameterBytes
            );
        });
    }

    find(address, bankId) {

        // fix bankId to $FF if the address is $8000 or higher
        if (address >= 0x8000) bankId = 0xff;
        // fix bankId to $FF if the address is $3FFF or lower
        if (address <= 0x3FFF) bankId = 0xff;

        return this.entries.find(function(item){
            return item.address == address && item.bankId == bankId
        });
    }

    addEntriesToDb() {

        this.entries.forEach(function(i){
            // console.log( formatDasmEntry(i) );
            let entryType = getDasmEntryType(i);
            let region = getDasmEntryRegion(i);
            let bankId = 0x00;
            if (typeof i.bankId === undefined ) {
                bankId = i.BankId
            } else {
                bankId = (i.address >= 0x8000) ? 0xFF : 0x00;
            }
            let parameterBytes = null;
            if (i.parameterBytes > 0 ) {
                parameterBytes = i.parameterBytes
            }

            let spparms = [
                // 'gw_pc' ,
                'nbaf' ,
                entryType,
                region,
                i.address,
                bankId,
                i.label,
                parameterBytes,
                null,
                i.numberOfEntries,
                i.bytesPerEntry,
                i.length
            ];
            let sql =  "CALL `wpcdasm`.`addDasmEntry`(?,?,?,?,?,?,?,?,?,?,?)";
            db.query( sql, spparms )
                .then( rows => {
                }, err => {
                    console.log("MYSQL: An error occurred: " + err );
                    return db.close().then( () => {
                        console.log("An error occurred: " + err );
                        throw err;
                    })
                });

        });
    }
}

function formatDasmEntry( dasmEntry ) {

    let entryType = getDasmEntryType( dasmEntry );
    let entryTypeFormatted = entryType + '\t';
    let addressFormatted = '0x' + dasmEntry.address.toString(16) + '\t';
    let labelFormatted = dasmEntry.label + '\t\t';
    let parameterBytesFormatted = dasmEntry.parameterBytes && dasmEntry.parameterBytes > 0
        ? '\tparameter bytes: ' + dasmEntry.parameterBytes
        : "";

    return entryTypeFormatted +
        addressFormatted +
        labelFormatted +
        parameterBytesFormatted;
}

function getDasmEntryRegion( dasmEntry ) {
    if ( dasmEntry.address < 0x3800 ) return "ram";
    else if ( dasmEntry.address <= 0x3FFF ) return "wpc";
    else if ( dasmEntry.address <= 0x7FFF ) return "$" + d2h( dasmEntry.bankId );
    // else if ( dasmEntry.address <= 0x7FFF ) return "bank";
    else return "sys";
}

function getDasmEntryType( dasmEntry ) {
    if ( dasmEntry.isWpcTable ) return "table-with-header";
    else if ( dasmEntry.isStringTable ) return "table-strings";
    else if ( dasmEntry.isImage ) return "image";
    else if ( dasmEntry.numberOfEntries == 1 ) return "data";
    else if ( dasmEntry.numberOfEntries > 1 ) return "table";
    else if ( dasmEntry.parameterBytes > 0 ) return "macro";
    else return "label";
}

function getDasmEntryForAddress( address, bankId ) {
}

module.exports = {
    DasmEntry,
    DasmEntryList,
    getMacroInstruction_Any,
    getMacroInstruction_OneByte,
    getMacroInstruction_ERRORHANDLER,
    getMacroInstruction_COMPAREADJUSTMENTOVALUE,
    getMacroInstruction_LOADAWITHSETTINGVALUE,
    getMacroInstruction_LOADYWITHSETTINGVALUE,
    getMacroInstruction_StartProcess_INDEX,
    getMacroInstruction_JSR_BANK,
    printMacroInstruction_JSR_BANK_ADDRESS_AT,
    getMacroInstruction_JSR_BANK_ADDRESS_AT
};

function getLabelDefault( address, bankId ) {

    if ( bankId == 0xFF || bankId == 0x3E || bankId == 0x3F )
        return 'sys_' + address.toString(16);
    else
        return 'bnk_' + bankId.toString(16) + '_' + address.toString(16);
}

function printInstruction( pc, instr, line ) {
    printRawInstruction( pc, instr, line );
}

function test() {
    return new DasmEntry( 0x4000, 0x30, 0 )
}


function d2h(d) {
    return (d / 256 + 1 / 512).toString(16).substring(2, 4);
}

function d2h_16(d) {
    return d.toString(16).toUpperCase();
}

function d2bitmap(d) {
    return (d / 256 + 1 / 512).toString(2);
}

// working
function printMacroInstruction_JSR_BANK_ADDRESS_AT(entry, pc, instr, line) {
    console.log( getMacroInstruction_JSR_BANK_ADDRESS_AT( pc, instr, line ) );
}

// function getMacroInstruction_JSR_BANK_ADDRESS_AT( pc, instr, line) {
function getMacroInstruction_JSR_BANK_ADDRESS_AT( entry, pc, instr, line) {
    instr.bytes += 2;

    let line1 = d2h_16(pc) + ': ' + d2h(line[0]) + ' ' + d2h(line[1]) + ' ' + d2h(line[2]) + '           ' +
        'JSR_BANK_ADDRESS_AT( $' +
        d2h(line[3]) + d2h(line[4])  + ' )' ;

    let line2 = (pc+3).toString(16).toUpperCase() + ': ' + d2h(line[3]) + ' ' + d2h(line[4]) ;

    return line1 + "\n" + line2;
}

// working
function printMacroInstruction_JSR_BANK(entry, pc, instr, line) {
    console.log( getMacroInstruction_JSR_BANK( pc, instr, line ) );
}

function getMacroInstruction_JSR_BANK(entry, pc, instr, line) {

    let dasmEntryForBankAddress = dasmSym.find( line[3] * 0x100 + line[4], line[5] );

    let called = '$' + d2h(line[3]) + d2h(line[4]) + ', $' + d2h(line[5]) ;
    if (dasmEntryForBankAddress !== undefined) {
        called = dasmEntryForBankAddress.label;
    }

    instr.bytes += 3;

    let line1 =  d2h_16(pc) + ': ' +
        d2h(line[0]) + ' ' + d2h(line[1]) + ' ' + d2h(line[2]) + '           ' +
        'JSR_BANK( ' + called +  ' )' ;

    let line2 = (pc+3).toString(16).toUpperCase() + ': ' + d2h(line[3]) + ' ' + d2h(line[4]) + ' ' + d2h(line[5]) ;

    return line1 + "\n" + line2;
}

function printMacroInstruction_JMP_BANK(entry, pc, instr, line) {
    console.log( getMacroInstruction_JMP_BANK( pc, instr, line ) );
}

function getMacroInstruction_JMP_BANK(entry, pc, instr, line) {

    instr.bytes += 3;

    let line1 =  d2h_16(pc) + ': ' +
        d2h(line[0]) + ' ' + d2h(line[1]) + ' ' + d2h(line[2]) + '           ' +
        'JMP_BANK( $' +
        d2h(line[3]) + d2h(line[4]) +
        ', $' +
        d2h(line[5]) + ' )' ;

    let line2 = (pc+3).toString(16).toUpperCase() + ': ' + d2h(line[3]) + ' ' + d2h(line[4]) + ' ' + d2h(line[5]) ;

    return line1 + "\n" + line2;
}

function getMacroInstruction_ERRORHANDLER(entry, pc, instr, line) {

    let errorNumber = line[3];
    let err = wpcErrorList[ errorNumber ];

    instr.bytes += 1;

    let line1 =  getInstructionPrefix( pc, instr, line ) +
        entry.label + '( $' + d2h(line[3])  + ' )\t; ' + err ;

    let line2 = (pc+3).toString(16).toUpperCase() + ': ' + d2h(line[3]);
    return line1 + "\n" + line2;
}

function getMacroInstruction_COMPAREADJUSTMENTOVALUE(entry, pc, instr, line) {

    let adjustmentNumber = line[3];
    let adjustment = gameAdjustmentsList[ adjustmentNumber ];

    instr.bytes += entry.parameterBytes;

    let line1 =  getInstructionPrefix( pc, instr, line ) +
        entry.label + '( '  +
        getMacroInstruction_Parameters(entry.macroParameterBytes, line) + ' )\t; ' + adjustment ;

    let line2 = (pc+3).toString(16).toUpperCase() + ': ';
    let parmByteIndex = 3;

    for( let parmByteIndex = 0; parmByteIndex < entry.parameterBytes;  parmByteIndex++ ) {
        line2 +=  d2h( line[parmByteIndex + 3] ) + " ";
    }

    return line1 + "\n" + line2;
}

// function getMacroInstruction_COMPAREADJUSTMENTOVALUE(entry, pc, instr, line) {
//     let adjustmentNumber = line[3];
//     let adjustment = gameAdjustmentsList[ adjustmentNumber ];
//
//     instr.bytes += 2;
//
//     let line1 =  getInstructionPrefix( pc, instr, line ) +
//         entry.label + '( $' + d2h(line[3])  + ' )\t; ' + adjustment ;
//
//     let line2 = (pc+3).toString(16).toUpperCase() + ': ' + d2h(line[3]);
//     return line1 + "\n" + line2;
// }

function getMacroInstruction_LOADAWITHSETTINGVALUE(entry, pc, instr, line) {
    // SAME AS getMacroInstruction_LOADYWITHSETTINGVALUE
    let settingNumber = line[3];
    let setting = gameAdjustmentsList[ settingNumber ];

    instr.bytes += 1;

    let line1 =  getInstructionPrefix( pc, instr, line ) +
        entry.label + '( $' + d2h(line[3])  + ' )\t; ' + setting ;

    let line2 = (pc+3).toString(16).toUpperCase() + ': ' + d2h(line[3]);
    return line1 + "\n" + line2;
}

function getMacroInstruction_LOADYWITHSETTINGVALUE(entry, pc, instr, line) {
    // SAME AS getMacroInstruction_LOADAWITHSETTINGVALUE
    let settingNumber = line[3];
    let setting = gameAdjustmentsList[ settingNumber ];

    instr.bytes += 1;

    let line1 =  getInstructionPrefix( pc, instr, line ) +
        entry.label + '( $' + d2h(line[3])  + ' )\t; ' + setting ;

    let line2 = (pc+3).toString(16).toUpperCase() + ': ' + d2h(line[3]);
    return line1 + "\n" + line2;
}

function getMacroInstruction_StartProcess_INDEX(entry, pc, instr, line) {

    let settingNumber = line[3];
    let setting = gameTasksList[ settingNumber ];

    instr.bytes += 1;

    let line1 =  getInstructionPrefix( pc, instr, line ) +
        entry.label + '( $' + d2h(line[3])  + ' )\t; ' + setting ;

    let line2 = (pc+3).toString(16).toUpperCase() + ': ' + d2h(line[3]);
    return line1 + "\n" + line2;
}

// function getMacroInstruction_ThrowGenError(entry, pc, instr, line) {
//
//     instr.bytes += 1;
//
//     let line1 =  d2h_16(pc) + ': ' +
//         d2h(line[0]) + ' ' + d2h(line[1]) + ' ' + d2h(line[2]) + '           ' +
//         'ThrowGenError( $' +
//         d2h(line[3]) + ' )' ;
//
//     let line2 = (pc+3).toString(16).toUpperCase() + ': ' + d2h(line[3]);
//
//     return line1 + "\n" + line2;
// }

// function getMacroInstruction_Sleep(entry, pc, instr, line) {
//
//     instr.bytes += 1;
//
//     let line1 =  getInstructionPrefix( pc, instr, line ) +
//         'Sleep( $' + d2h(line[3])  + ' )' ;
//
//     let line2 = (pc+3).toString(16).toUpperCase() + ': ' + d2h(line[3]);
//     return line1 + "\n" + line2;
// }

function getMacroInstruction_OneByte(entry, pc, instr, line) {

    instr.bytes += 1;

    let line1 =  getInstructionPrefix( pc, instr, line ) +
        entry.label + '( $' + d2h(line[3])  + ' )' ;

    let line2 = (pc+3).toString(16).toUpperCase() + ': ' + d2h(line[3]);
    return line1 + "\n" + line2;
}

function getMacroInstruction_Any(entry, pc, instr, line) {

    instr.bytes += entry.parameterBytes;

    let line1 =  getInstructionPrefix( pc, instr, line ) +
        entry.label + '( '  +
        getMacroInstruction_Parameters(entry.macroParameterBytes, line) + ' )' ;

    let line2 = (pc+3).toString(16).toUpperCase() + ': ';
    let parmByteIndex = 3;

    for( let parmByteIndex = 0; parmByteIndex < entry.parameterBytes;  parmByteIndex++ ) {
        line2 +=  d2h( line[parmByteIndex + 3] ) + " ";
    }

    return line1 + "\n" + line2;
}

function getInstructionPrefix(pc, instr, line) {
    return  d2h_16(pc) + ': ' +
        d2h(line[0]) + ' ' + d2h(line[1]) + ' ' + d2h(line[2]) + '           ' ;
}

function getMacroInstruction_Parameters(macroParameterBytes, line) {

    let parms = "";
    let parmByteIndex = 3;

    macroParameterBytes.forEach( function(bytesForCurrentParameter, index) {
        parms += "$" + d2h( line[parmByteIndex] );
        parmByteIndex++;

        if ( bytesForCurrentParameter > 1 ) {
            parms += d2h( line[parmByteIndex] );
            parmByteIndex++;
        }
        parms += ", ";
    });

    parms = parms.substring(0, parms.length - 2);
    return parms;
}