// DasmStaticAnalysis.js
'use strict';

module.exports = class DasmStaticAnalysis {

    constructor(startAddress) {
        this.startAddress = startAddress;
        this.endAddress = 0x0;
        this.bytesPerParameter = [];
        this.destinationRegisterPerParameter = [];
        // this.parameterBytesTotal = 0;
        this.count_LD_indexed_S = 0;
        this.count_ST_indexed_S = 0;
    }

    display() {
        console.log( this.startAddress.toString( 16 ) );
    }

    addParameter( parameterBytes, destinationRegister ) {
        this.bytesPerParameter.push( parameterBytes );
        this.destinationRegisterPerParameter.push( destinationRegister );
    }

    add_LD_indexed_S( ) {
        this.count_LD_indexed_S++;
    }

    add_ST_indexed_S( ) {
        this.count_ST_indexed_S++;
    }

    totalParameterBytesExpected() {
        return this.bytesPerParameter.reduce(function(a, b) { return a + b; }, 0);
    }

    getParameterBytesDetails() {
        let prefix = ";    ";
        let breakdown = "";
        let z = this.destinationRegisterPerParameter;
        this.bytesPerParameter.forEach( function( item, index ){
            breakdown += prefix + item + " bytes-> " + z[index] + "\n";
        });

        return "; " + this.totalParameterBytesExpected() +
            " total bytes expected for parameters \n" +
            breakdown ;
    }

}