params ='use strict';

// const disasm = require('./disasm');
// const dasmEntryList = require('../../lib/db/nba-dasm-entries');

module.exports = class DasmSymResult {

    constructor( pc, disasm ) {
        this.startAddress = pc;
        this.disasm = disasm;
        this.length = 0;
        this.outputTest = "";
    };

    addOutput( sourceCodeToAdd ) {
         this.outputTest = sourceCodeToAdd ;
    };

    getOutput( ) {
        if (this.outputTest)
            return this.outputTest;
        else
            return "";
    }

    getLength( ) {
        if (this.disasm) {
            return this.disasm.bytes;
        }
        else {
            return this.length;
        }
    }
};