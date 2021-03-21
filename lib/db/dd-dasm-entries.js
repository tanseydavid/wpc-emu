'use strict';

const dasm = require('../../test/tracer/dasm-entry');
const dasmEntriesWpc = require('./wpc-dasm-entries');

 module.exports = {
   getDasmEntries
}

function getDasmEntries() {

    let dasmEntries = dasmEntriesWpc.getDasmEntriesWpc();

    getDasmEntries_bnk_20( dasmEntries );
    getDasmEntries_bnk_21( dasmEntries );
    getDasmEntries_bnk_22( dasmEntries );
    getDasmEntries_bnk_23( dasmEntries );
    getDasmEntries_bnk_24( dasmEntries );
    getDasmEntries_bnk_25( dasmEntries );
    getDasmEntries_bnk_26( dasmEntries );
    getDasmEntries_bnk_27( dasmEntries );
    getDasmEntries_bnk_28( dasmEntries );
    getDasmEntries_bnk_29( dasmEntries );
    getDasmEntries_bnk_2a( dasmEntries );
    getDasmEntries_bnk_2b( dasmEntries );
    getDasmEntries_bnk_2c( dasmEntries );
    getDasmEntries_bnk_2d( dasmEntries );
    getDasmEntries_bnk_2e( dasmEntries );
    getDasmEntries_bnk_2f( dasmEntries );

    getDasmEntries_bnk_30( dasmEntries );
    getDasmEntries_bnk_31( dasmEntries );
    getDasmEntries_bnk_32( dasmEntries );
    getDasmEntries_bnk_33( dasmEntries );
    getDasmEntries_bnk_34( dasmEntries );
    getDasmEntries_bnk_35( dasmEntries );
    getDasmEntries_bnk_36( dasmEntries );
    getDasmEntries_bnk_37( dasmEntries );
    getDasmEntries_bnk_38( dasmEntries );
    getDasmEntries_bnk_39( dasmEntries );
    getDasmEntries_bnk_3a( dasmEntries );
    getDasmEntries_bnk_3b( dasmEntries );
    getDasmEntries_bnk_3c( dasmEntries );
    getDasmEntries_bnk_3d( dasmEntries );

    getDasmEntries_sys_8000( dasmEntries );
    getDasmEntries_sys_9000( dasmEntries );
    getDasmEntries_sys_A000( dasmEntries );
    getDasmEntries_sys_B000( dasmEntries );
    //
    // getDasmEntries_sys_C000( dasmEntries );
    getDasmEntries_sys_D000( dasmEntries );
    getDasmEntries_sys_E000( dasmEntries );
    // getDasmEntries_sys_F000( dasmEntries );

    return dasmEntries;
}

function getDasmEntries_bnk_20( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x20, 'pageMarker_bnk_20', 1, 1 );
}

function getDasmEntries_bnk_21( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x21, 'pageMarker_bnk_21', 1, 1 );
}

function getDasmEntries_bnk_22( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x22, 'pageMarker_bnk_22', 1, 1 );
}

function getDasmEntries_bnk_23( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x23, 'pageMarker_bnk_23', 1, 1 );
}

function getDasmEntries_bnk_24( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x24, 'pageMarker_bnk_24', 1, 1 );
}

function getDasmEntries_bnk_25( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x25, 'pageMarker_bnk_25', 1, 1 );
}

function getDasmEntries_bnk_26( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x26, 'pageMarker_bnk_26', 1, 1 );
}

function getDasmEntries_bnk_27( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x27, 'pageMarker_bnk_27', 1, 1 );
}

function getDasmEntries_bnk_28( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x28, 'pageMarker_bnk_28', 1, 1 );
}

function getDasmEntries_bnk_29( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x29, 'pageMarker_bnk_29', 1, 1 );
}

function getDasmEntries_bnk_2a( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x2a, 'pageMarker_bnk_2a', 1, 1 );
}

function getDasmEntries_bnk_2b( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x2b, 'pageMarker_bnk_2b', 1, 1 );
}

function getDasmEntries_bnk_2c( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x2c, 'pageMarker_bnk_2c', 1, 1 );
}

function getDasmEntries_bnk_2d( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x2D, 'pageMarker_bnk_2D', 1, 1 );
}

function getDasmEntries_bnk_2e( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x2E, 'pageMarker_bnk_2e', 1, 1 );
}

function getDasmEntries_bnk_2f( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x2f, 'pageMarker_bnk_2f', 1, 1 );
}

function getDasmEntries_bnk_30( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x30, 'pageMarker_bnk_30', 1, 1 );
    dasmEntries.addTable( 0x4001, 0x30, 'copyright', 29, 7 );
}

function getDasmEntries_bnk_31( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x31, 'pageMarker_bnk_31', 1, 1 );
}

function getDasmEntries_bnk_32( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x32, 'pageMarker_bnk_32', 1, 1 );
}

function getDasmEntries_bnk_33( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x33, 'pageMarker_bnk_33', 1, 1 );
}

function getDasmEntries_bnk_34( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x34, 'pageMarker_bnk_34', 1, 1 );
}

function getDasmEntries_bnk_35( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x35, 'pageMarker_bnk_35', 1, 1 );
}

function getDasmEntries_bnk_36( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x36, 'pageMarker_bnk_36', 1, 1 );
}

function getDasmEntries_bnk_37( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x37, 'pageMarker_bnk_37', 1, 1 );
}

function getDasmEntries_bnk_38( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x38, 'pageMarker_bnk_38', 1, 1 );
    dasmEntries.addBankLabel( 0x40f1, 0x38 );
}

function getDasmEntries_bnk_39( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x39, 'pageMarker_bnk_39', 1, 1 );
}

function getDasmEntries_bnk_3a( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x3a, 'pageMarker_bnk_3a', 1, 1 );
}

function getDasmEntries_bnk_3b( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x3b, 'pageMarker_bnk_3b', 1, 1 );
}

function getDasmEntries_bnk_3c( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x3C, 'pageMarker_bnk_3C', 1, 1 );
}

function getDasmEntries_bnk_3d( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x3D, 'pageMarker_bnk_3D', 1, 1 );
}

function getDasmEntries_sys_8000( dasmEntries ) {
}

function getDasmEntries_sys_9000( dasmEntries ) {
 }

function getDasmEntries_sys_A000( dasmEntries ) {
}

function getDasmEntries_sys_B000( dasmEntries ) {
}

function getDasmEntries_sys_D000( dasmEntries ) {
}

function getDasmEntries_sys_E000( dasmEntries ) {
}