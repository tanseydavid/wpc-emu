'use strict';
'use strict';

// CONDITIONAL - ENTRIES
// NBAF
const dasm = require('../../test/tracer/dasm-entry');
const dasmEntriesWpc = require('./wpc-dasm-entries');
// NBAF
// CONDITIONAL - ENTRIES

 module.exports = {
   getDasmEntries
}

function getDasmEntries() {

   // let dasmEntries = new dasm.DasmEntryList();
   //
   //  getDasmEntries_RAM( dasmEntries );
   //  getDasmEntries_WPC( dasmEntries );

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

    getDasmEntries_sys_C000( dasmEntries );
    getDasmEntries_sys_D000( dasmEntries );
    getDasmEntries_sys_E000( dasmEntries );
    getDasmEntries_sys_F000( dasmEntries );

    return dasmEntries;
}

function getDasmEntries_bnk_20( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x20, 'pageMarker_bnk_20', 1, 1 );
    dasmEntries.addTable( 0x4001, 0x20, 'copyright', 15, 8 );
    dasmEntries.addTable( 0x4078, 0x20, 'copyright', 1, 1 );

    // dasmEntries.addTableWpc( 0x4079, 0x20, 'tblwpc_bnk_20_4079' );
    dasmEntries.addImage( 0x4079, 0x20, 'img_001');
    dasmEntries.addImage( 0x41bd, 0x20, 'img_000');
    dasmEntries.addImage( 0x43f1, 0x20, 'img_002');
    dasmEntries.addImage( 0x4308, 0x20, 'img_003');
    dasmEntries.addImage( 0x44eb, 0x20, 'img_004');
    dasmEntries.addImage( 0x453d, 0x20, 'img_005');
    dasmEntries.addImage( 0x455d, 0x20, 'img_006');
    dasmEntries.addImage( 0x45a2, 0x20, 'img_007');
    dasmEntries.addImage( 0x45c2, 0x20, 'img_008');
    dasmEntries.addImage( 0x45d0, 0x20, 'img_009');
    dasmEntries.addImage( 0x461d, 0x20, 'img_00a');
    dasmEntries.addImage( 0x4606, 0x20, 'img_00b');
    dasmEntries.addImage( 0x465d, 0x20, 'img_00c');
    dasmEntries.addImage( 0x462a, 0x20, 'img_00d');
    dasmEntries.addImage( 0x46d1, 0x20, 'img_00e');
    dasmEntries.addImage( 0x4683, 0x20, 'img_00f');
    dasmEntries.addImage( 0x476e, 0x20, 'img_010');
    dasmEntries.addImage( 0x470f, 0x20, 'img_011');
    dasmEntries.addImage( 0x484f, 0x20, 'img_012');
    dasmEntries.addImage( 0x47c7, 0x20, 'img_013');
    dasmEntries.addImage( 0x496a, 0x20, 'img_014');
    dasmEntries.addImage( 0x48c4, 0x20, 'img_015');
    dasmEntries.addImage( 0x4aab, 0x20, 'img_016');
    dasmEntries.addImage( 0x49fb, 0x20, 'img_017');
    dasmEntries.addImage( 0x4bf4, 0x20, 'img_018');
    dasmEntries.addImage( 0x4b52, 0x20, 'img_019' ) ;
    dasmEntries.addImage( 0x4d50, 0x20, 'img_01A' ) ;
    dasmEntries.addImage( 0x4c8b, 0x20, 'img_01B' ) ;
    dasmEntries.addImage( 0x4ed9, 0x20, 'img_01C' ) ;
    dasmEntries.addImage( 0x4e00, 0x20, 'img_01D' ) ;
    dasmEntries.addImage( 0x507b, 0x20, 'img_01E' ) ;
    dasmEntries.addImage( 0x4f90, 0x20, 'img_01F' ) ;
    dasmEntries.addImage( 0x5232, 0x20, 'img_020' ) ;
    dasmEntries.addImage( 0x5153, 0x20, 'img_021' ) ;
    dasmEntries.addImage( 0x53d2, 0x20, 'img_022' ) ;
    dasmEntries.addImage( 0x5300, 0x20, 'img_023' ) ;
    dasmEntries.addImage( 0x5593, 0x20, 'img_024' ) ;
    dasmEntries.addImage( 0x549e, 0x20, 'img_025' ) ;
    dasmEntries.addImage( 0x576c, 0x20, 'img_026' ) ;
    dasmEntries.addImage( 0x566e, 0x20, 'img_027' ) ;
    dasmEntries.addImage( 0x5965, 0x20, 'img_028' ) ;
    dasmEntries.addImage( 0x584e, 0x20, 'img_029' ) ;
    dasmEntries.addImage( 0x5b50, 0x20, 'img_02A' ) ;
    dasmEntries.addImage( 0x5a51, 0x20, 'img_02B' ) ;
    dasmEntries.addImage( 0x5d2f, 0x20, 'img_02C' ) ;
    dasmEntries.addImage( 0x5c37, 0x20, 'img_02D' ) ;
    dasmEntries.addImage( 0x5f0e, 0x20, 'img_02E' ) ;
    dasmEntries.addImage( 0x5e21, 0x20, 'img_02F' ) ;
    dasmEntries.addImage( 0x61b9, 0x20, 'img_030' ) ;
    dasmEntries.addImage( 0x5fdb, 0x20, 'img_031' ) ;
    dasmEntries.addImage( 0x6407, 0x20, 'img_032' ) ;
    dasmEntries.addImage( 0x6323, 0x20, 'img_033' ) ;
    dasmEntries.addImage( 0x65ab, 0x20, 'img_034' ) ;
    dasmEntries.addImage( 0x64cf, 0x20, 'img_035' ) ;
    dasmEntries.addImage( 0x674b, 0x20, 'img_036' ) ;
    dasmEntries.addImage( 0x666e, 0x20, 'img_037' ) ;
    dasmEntries.addImage( 0x68f3, 0x20, 'img_038' ) ;
    dasmEntries.addImage( 0x6819, 0x20, 'img_039' ) ;
    dasmEntries.addImage( 0x6a9a, 0x20, 'img_03A' ) ;
    dasmEntries.addImage( 0x69c1, 0x20, 'img_03B' ) ;
    dasmEntries.addImage( 0x6c44, 0x20, 'img_03C' ) ;
    dasmEntries.addImage( 0x6b63, 0x20, 'img_03D' ) ;
    dasmEntries.addImage( 0x6deb, 0x20, 'img_03E' ) ;
    dasmEntries.addImage( 0x6d0b, 0x20, 'img_03F' ) ;
    dasmEntries.addImage( 0x6f8b, 0x20, 'img_040' ) ;
    dasmEntries.addImage( 0x6eae, 0x20, 'img_041' ) ;
    dasmEntries.addImage( 0x713b, 0x20, 'img_042' ) ;
    dasmEntries.addImage( 0x7058, 0x20, 'img_043' ) ;
    dasmEntries.addImage( 0x71fe, 0x20, 'img_044' ) ;
    dasmEntries.addImage( 0x7218, 0x20, 'img_045' ) ;
    dasmEntries.addImage( 0x7256, 0x20, 'img_046' ) ;
    dasmEntries.addImage( 0x7291, 0x20, 'img_047' ) ;
    dasmEntries.addImage( 0x72de, 0x20, 'img_048' ) ;
    dasmEntries.addImage( 0x732b, 0x20, 'img_049' ) ;
    dasmEntries.addImage( 0x736e, 0x20, 'img_04A' ) ;
    dasmEntries.addImage( 0x73ae, 0x20, 'img_04B' ) ;
    dasmEntries.addImage( 0x73e9, 0x20, 'img_04C' ) ;
    dasmEntries.addImage( 0x742b, 0x20, 'img_04D' ) ;
    dasmEntries.addImage( 0x7466, 0x20, 'img_04E' ) ;
    dasmEntries.addImage( 0x74a2, 0x20, 'img_04F' ) ;
    dasmEntries.addImage( 0x74e0, 0x20, 'img_050' ) ;
    dasmEntries.addImage( 0x752c, 0x20, 'img_051' ) ;
    dasmEntries.addImage( 0x757b, 0x20, 'img_052' ) ;
    dasmEntries.addImage( 0x75b9, 0x20, 'img_053' ) ;
    dasmEntries.addImage( 0x75f2, 0x20, 'img_054' ) ;
    dasmEntries.addImage( 0x769e, 0x20, 'img_055' ) ;
    dasmEntries.addImage( 0x7624, 0x20, 'img_056' ) ;
    dasmEntries.addImage( 0x7791, 0x20, 'img_057' ) ;
    dasmEntries.addImage( 0x7715, 0x20, 'img_058' ) ;
    dasmEntries.addImage( 0x785f, 0x20, 'img_059' ) ;
    dasmEntries.addImage( 0x77f7, 0x20, 'img_05A' ) ;
    dasmEntries.addImage( 0x78ef, 0x20, 'img_05B' ) ;
    dasmEntries.addImage( 0x78be, 0x20, 'img_05C' ) ;
    dasmEntries.addImage( 0x792f, 0x20, 'img_05D' ) ;
    dasmEntries.addImage( 0x7922, 0x20, 'img_05E' ) ;
    dasmEntries.addImage( 0x7952, 0x20, 'img_05F' ) ;
    dasmEntries.addImage( 0x7940, 0x20, 'img_060' ) ;
    dasmEntries.addImage( 0x7975, 0x20, 'img_061' ) ;
    dasmEntries.addImage( 0x7960, 0x20, 'img_062' ) ;
    dasmEntries.addImage( 0x79a4, 0x20, 'img_063' ) ;
    dasmEntries.addImage( 0x7985, 0x20, 'img_064' ) ;
    dasmEntries.addImage( 0x79e1, 0x20, 'img_065' ) ;
    dasmEntries.addImage( 0x79c1, 0x20, 'img_066' ) ;
    dasmEntries.addImage( 0x7a0a, 0x20, 'img_067' ) ;
    dasmEntries.addImage( 0x79f1, 0x20, 'img_068' ) ;
    dasmEntries.addImage( 0x7abe, 0x20, 'img_069' ) ;
    dasmEntries.addImage( 0x7a22, 0x20, 'img_06A' ) ;
    dasmEntries.addImage( 0x7bea, 0x20, 'img_06B' ) ;
    dasmEntries.addImage( 0x7afb, 0x20, 'img_06C' ) ;
    dasmEntries.addImage( 0x7d51, 0x20, 'img_06D' ) ;
    dasmEntries.addImage( 0x7c4d, 0x20, 'img_06E' ) ;
    dasmEntries.addImage( 0x7ec1, 0x20, 'img_06F' ) ;
    dasmEntries.addImage( 0x7dac, 0x20, 'img_070' ) ;

    dasmEntries.addImage( 0x7f30, 0x20, 'img_64C' );
}

function getDasmEntries_bnk_21( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x21, 'pageMarker_bnk_21', 1, 1 );
    dasmEntries.addImage( 0x4001, 0x21, 'img_072');
    dasmEntries.addImage( 0x413d, 0x21, 'img_071');

    dasmEntries.addImage( 0x4396, 0x21, 'img_073');
    dasmEntries.addImage( 0x4251, 0x21, 'img_074');
    dasmEntries.addImage( 0x457b, 0x21, 'img_075');
    dasmEntries.addImage( 0x4421, 0x21, 'img_076');
    dasmEntries.addImage( 0x4750, 0x21, 'img_077');
    dasmEntries.addImage( 0x45f6, 0x21, 'img_078');
    dasmEntries.addImage( 0x4913, 0x21, 'img_079');
    dasmEntries.addImage( 0x47cc, 0x21, 'img_07A');
    dasmEntries.addImage( 0x4adc, 0x21, 'img_07B');
    dasmEntries.addImage( 0x49a5, 0x21, 'img_07C');
    dasmEntries.addImage( 0x4c77, 0x21, 'img_07D');
    dasmEntries.addImage( 0x4b59, 0x21, 'img_07E');
    dasmEntries.addImage( 0x4dd5, 0x21, 'img_07F');
    dasmEntries.addImage( 0x4ce9, 0x21, 'img_080');
    dasmEntries.addImage( 0x4ed9, 0x21, 'img_081');
    dasmEntries.addImage( 0x4e2a, 0x21, 'img_082');
    dasmEntries.addImage( 0x4f9a, 0x21, 'img_083');
    dasmEntries.addImage( 0x4f18, 0x21, 'img_084');
    dasmEntries.addImage( 0x503c, 0x21, 'img_085');
    dasmEntries.addImage( 0x4fe4, 0x21, 'img_086');
    dasmEntries.addImage( 0x50c9, 0x21, 'img_087');
    dasmEntries.addImage( 0x5086, 0x21, 'img_088');
    dasmEntries.addImage( 0x5150, 0x21, 'img_089');
    dasmEntries.addImage( 0x510e, 0x21, 'img_08A');
    dasmEntries.addImage( 0x52d7, 0x21, 'img_08B');
    dasmEntries.addImage( 0x5186, 0x21, 'img_08C');
    dasmEntries.addImage( 0x548f, 0x21, 'img_08D');
    dasmEntries.addImage( 0x541e, 0x21, 'img_08E');
    dasmEntries.addImage( 0x5647, 0x21, 'img_08F');
    dasmEntries.addImage( 0x54f2, 0x21, 'img_090');
    dasmEntries.addImage( 0x52d7, 0x21, 'img_091');
    dasmEntries.addImage( 0x5186, 0x21, 'img_092');
    dasmEntries.addImage( 0x58d3, 0x21, 'img_093');
    dasmEntries.addImage( 0x5781, 0x21, 'img_094');
    dasmEntries.addImage( 0x5abb, 0x21, 'img_095');
    dasmEntries.addImage( 0x5a0e, 0x21, 'img_096');
    dasmEntries.addImage( 0x5bf1, 0x21, 'img_097');
    dasmEntries.addImage( 0x5b51, 0x21, 'img_098');
    dasmEntries.addImage( 0x5d31, 0x21, 'img_099');
    dasmEntries.addImage( 0x5c86, 0x21, 'img_09A');
    dasmEntries.addImage( 0x5f22, 0x21, 'img_09B');
    dasmEntries.addImage( 0x5dcb, 0x21, 'img_09C');
    dasmEntries.addImage( 0x60f7, 0x21, 'img_09D');
    dasmEntries.addImage( 0x605f, 0x21, 'img_09E');
    dasmEntries.addImage( 0x61f7, 0x21, 'img_09F');
    dasmEntries.addImage( 0x616f, 0x21, 'img_0A0');
    dasmEntries.addImage( 0x62e6, 0x21, 'img_0A1');
    dasmEntries.addImage( 0x626b, 0x21, 'img_0A2');
    dasmEntries.addImage( 0x63ee, 0x21, 'img_0A3');
    dasmEntries.addImage( 0x6359, 0x21, 'img_0A4');
    dasmEntries.addImage( 0x64d8, 0x21, 'img_0A5');
    dasmEntries.addImage( 0x646a, 0x21, 'img_0A6');
    dasmEntries.addImage( 0x65ab, 0x21, 'img_0A7');
    dasmEntries.addImage( 0x6543, 0x21, 'img_0A8');
    dasmEntries.addImage( 0x6661, 0x21, 'img_0A9');
    dasmEntries.addImage( 0x6611, 0x21, 'img_0AA');
    dasmEntries.addImage( 0x670a, 0x21, 'img_0AB');
    dasmEntries.addImage( 0x66b4, 0x21, 'img_0AC');
    dasmEntries.addImage( 0x67c7, 0x21, 'img_0AD');
    dasmEntries.addImage( 0x6764, 0x21, 'img_0AE');
    dasmEntries.addImage( 0x68ad, 0x21, 'img_0AF');
    dasmEntries.addImage( 0x682a, 0x21, 'img_0B0');
    dasmEntries.addImage( 0x69b6, 0x21, 'img_0B1');
    dasmEntries.addImage( 0x692b, 0x21, 'img_0B2');
    dasmEntries.addImage( 0x6ac4, 0x21, 'img_0B3');
    dasmEntries.addImage( 0x6a3b, 0x21, 'img_0B4');
    dasmEntries.addImage( 0x6bd2, 0x21, 'img_0B5');
    dasmEntries.addImage( 0x6b42, 0x21, 'img_0B6');
    dasmEntries.addImage( 0x6cde, 0x21, 'img_0B7');
    dasmEntries.addImage( 0x6c5c, 0x21, 'img_0B8');
    dasmEntries.addImage( 0x6df9, 0x21, 'img_0B9');
    dasmEntries.addImage( 0x6d5a, 0x21, 'img_0BA');
    dasmEntries.addImage( 0x6f12, 0x21, 'img_0BB');
    dasmEntries.addImage( 0x6e96, 0x21, 'img_0BC');
    dasmEntries.addImage( 0x7016, 0x21, 'img_0BD');
    dasmEntries.addImage( 0x6f8a, 0x21, 'img_0BE');
    dasmEntries.addImage( 0x710b, 0x21, 'img_0BF');
    dasmEntries.addImage( 0x709a, 0x21, 'img_0C0');
    dasmEntries.addImage( 0x71b8, 0x21, 'img_0C1');
    dasmEntries.addImage( 0x7178, 0x21, 'img_0C2');
    dasmEntries.addImage( 0x7226, 0x21, 'img_0C3');
    dasmEntries.addImage( 0x71f9, 0x21, 'img_0C4');
    dasmEntries.addImage( 0x7270, 0x21, 'img_0C5');
    dasmEntries.addImage( 0x7250, 0x21, 'img_0C6');
    dasmEntries.addImage( 0x72ca, 0x21, 'img_0C7');
    dasmEntries.addImage( 0x7289, 0x21, 'img_0C8');
    dasmEntries.addImage( 0x736e, 0x21, 'img_0C9');
    dasmEntries.addImage( 0x730b, 0x21, 'img_0CA');
    dasmEntries.addImage( 0x745c, 0x21, 'img_0CB');
    dasmEntries.addImage( 0x73d1, 0x21, 'img_0CC');
    dasmEntries.addImage( 0x75a8, 0x21, 'img_0CD');
    dasmEntries.addImage( 0x74e6, 0x21, 'img_0CE');
    dasmEntries.addImage( 0x7754, 0x21, 'img_0CF');
    dasmEntries.addImage( 0x765c, 0x21, 'img_0D0');
    dasmEntries.addImage( 0x7956, 0x21, 'img_0D1');
    dasmEntries.addImage( 0x7837, 0x21, 'img_0D2');
    dasmEntries.addImage( 0x7b62, 0x21, 'img_0D3');
    dasmEntries.addImage( 0x7a5f, 0x21, 'img_0D4');
    dasmEntries.addImage( 0x7d5f, 0x21, 'img_0D5');
    dasmEntries.addImage( 0x7c64, 0x21, 'img_0D6');
    dasmEntries.addImage( 0x7e57, 0x21, 'img_0D8');

    dasmEntries.addImage( 0x7f7d, 0x21, 'img_60A' );

}

function getDasmEntries_bnk_22( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x22, 'pageMarker_bnk_22', 1, 1 );
    dasmEntries.addImage( 0x4001, 0x22, 'img_0D7');
    dasmEntries.addImage( 0x4233, 0x22, 'img_0D9' );
    dasmEntries.addImage( 0x4128, 0x22, 'img_0DA' );
    dasmEntries.addImage( 0x4430, 0x22, 'img_0DB' );
    dasmEntries.addImage( 0x433f, 0x22, 'img_0DC' );
    dasmEntries.addImage( 0x45fc, 0x22, 'img_0DD' );
    dasmEntries.addImage( 0x4520, 0x22, 'img_0DE' );
    dasmEntries.addImage( 0x4738, 0x22, 'img_0DF' );
    dasmEntries.addImage( 0x46c4, 0x22, 'img_0E0' );
    dasmEntries.addImage( 0x4804, 0x22, 'img_0E1' );
    dasmEntries.addImage( 0x47ac, 0x22, 'img_0E2' );
    dasmEntries.addImage( 0x488e, 0x22, 'img_0E3' );
    dasmEntries.addImage( 0x485c, 0x22, 'img_0E4' );
    dasmEntries.addImage( 0x48ca, 0x22, 'img_0E5' );
    dasmEntries.addImage( 0x48c0, 0x22, 'img_0E6' );
    dasmEntries.addImage( 0x498a, 0x22, 'img_0E7' );
    dasmEntries.addImage( 0x48d4, 0x22, 'img_0E8' );
    dasmEntries.addImage( 0x4adf, 0x22, 'img_0E9' );
    dasmEntries.addImage( 0x4a27, 0x22, 'img_0EA' );
    dasmEntries.addImage( 0x4c57, 0x22, 'img_0EB' );
    dasmEntries.addImage( 0x4b81, 0x22, 'img_0EC' );
    dasmEntries.addImage( 0x4de8, 0x22, 'img_0ED' );
    dasmEntries.addImage( 0x4d0f, 0x22, 'img_0EE' );
    dasmEntries.addImage( 0x4f8d, 0x22, 'img_0EF' );
    dasmEntries.addImage( 0x4ea5, 0x22, 'img_0F0' );
    dasmEntries.addImage( 0x517f, 0x22, 'img_0F1' );
    dasmEntries.addImage( 0x5059, 0x22, 'img_0F2' );
    dasmEntries.addImage( 0x53cb, 0x22, 'img_0F3' );
    dasmEntries.addImage( 0x5291, 0x22, 'img_0F4' );
    dasmEntries.addImage( 0x5619, 0x22, 'img_0F5' );
    dasmEntries.addImage( 0x54f1, 0x22, 'img_0F6' );
    dasmEntries.addImage( 0x582a, 0x22, 'img_0F7' );
    dasmEntries.addImage( 0x5723, 0x22, 'img_0F8' );
    dasmEntries.addImage( 0x5a1e, 0x22, 'img_0F9' );
    dasmEntries.addImage( 0x5905, 0x22, 'img_0FA' );
    dasmEntries.addImage( 0x5c10, 0x22, 'img_0FB' );
    dasmEntries.addImage( 0x5b09, 0x22, 'img_0FC' );
    dasmEntries.addImage( 0x5de5, 0x22, 'img_0FD' );
    dasmEntries.addImage( 0x5cf9, 0x22, 'img_0FE' );
    dasmEntries.addImage( 0x5f85, 0x22, 'img_0FF' );
    dasmEntries.addImage( 0x5ebe, 0x22, 'img_0100' );
    dasmEntries.addImage( 0x60fa, 0x22, 'img_0101' );
    dasmEntries.addImage( 0x6056, 0x22, 'img_0102' );
    dasmEntries.addImage( 0x6258, 0x22, 'img_0103' );
    dasmEntries.addImage( 0x61ae, 0x22, 'img_0104' );
    dasmEntries.addImage( 0x633d, 0x22, 'img_0105' );
    dasmEntries.addImage( 0x6311, 0x22, 'img_0106' );
    dasmEntries.addImage( 0x63e8, 0x22, 'img_0107' );
    dasmEntries.addImage( 0x6366, 0x22, 'img_0108' );
    dasmEntries.addImage( 0x64eb, 0x22, 'img_0109' );
    dasmEntries.addImage( 0x6468, 0x22, 'img_010A' );
    dasmEntries.addImage( 0x659e, 0x22, 'img_010B' );
    dasmEntries.addImage( 0x656d, 0x22, 'img_010C' );
    dasmEntries.addImage( 0x664f, 0x22, 'img_010D' );
    dasmEntries.addImage( 0x65ce, 0x22, 'img_010E' );
    dasmEntries.addImage( 0x6745, 0x22, 'img_010F' );
    dasmEntries.addImage( 0x66bd, 0x22, 'img_0110' );
    dasmEntries.addImage( 0x683a, 0x22, 'img_0111' );
    dasmEntries.addImage( 0x67b8, 0x22, 'img_0112' );
    dasmEntries.addImage( 0x6937, 0x22, 'img_0113' );
    dasmEntries.addImage( 0x68b0, 0x22, 'img_0114' );
    dasmEntries.addImage( 0x6a32, 0x22, 'img_0115' );
    dasmEntries.addImage( 0x69b1, 0x22, 'img_0116' );
    dasmEntries.addImage( 0x6b1c, 0x22, 'img_0117' );
    dasmEntries.addImage( 0x6aa2, 0x22, 'img_0118' );
    dasmEntries.addImage( 0x6bfb, 0x22, 'img_0119' );
    dasmEntries.addImage( 0x6b87, 0x22, 'img_011A' );
    dasmEntries.addImage( 0x6cdc, 0x22, 'img_011B' );
    dasmEntries.addImage( 0x6c5d, 0x22, 'img_011C' );
    dasmEntries.addImage( 0x6dcd, 0x22, 'img_011D' );
    dasmEntries.addImage( 0x6d49, 0x22, 'img_011E' );
    dasmEntries.addImage( 0x6ec0, 0x22, 'img_011F' );
    dasmEntries.addImage( 0x6e40, 0x22, 'img_0120' );
    dasmEntries.addImage( 0x6fbb, 0x22, 'img_0121' );
    dasmEntries.addImage( 0x6f34, 0x22, 'img_0122' );
    dasmEntries.addImage( 0x70a7, 0x22, 'img_0123' );
    dasmEntries.addImage( 0x702f, 0x22, 'img_0124' );
    dasmEntries.addImage( 0x718a, 0x22, 'img_0125' );
    dasmEntries.addImage( 0x710c, 0x22, 'img_0126' );
    dasmEntries.addImage( 0x72b8, 0x22, 'img_0127' );
    dasmEntries.addImage( 0x71f9, 0x22, 'img_0128' );
    dasmEntries.addImage( 0x743e, 0x22, 'img_0129' );
    dasmEntries.addImage( 0x735d, 0x22, 'img_012A' );
    dasmEntries.addImage( 0x75ea, 0x22, 'img_012B' );
    dasmEntries.addImage( 0x7509, 0x22, 'img_012C' );
    dasmEntries.addImage( 0x7793, 0x22, 'img_012D' );
    dasmEntries.addImage( 0x76b8, 0x22, 'img_012E' );
    dasmEntries.addImage( 0x796e, 0x22, 'img_012F' );
    dasmEntries.addImage( 0x785d, 0x22, 'img_0130' );
    dasmEntries.addImage( 0x7b9a, 0x22, 'img_0131' );
    dasmEntries.addImage( 0x7a6c, 0x22, 'img_0132' );
    dasmEntries.addImage( 0x7de7, 0x22, 'img_0133' );
    dasmEntries.addImage( 0x7cb0, 0x22, 'img_0134' );

    dasmEntries.addImage( 0x7fb4, 0x22, 'img_60E' );
    dasmEntries.addImage( 0x7f0c, 0x22, 'img_64D' );

}

function getDasmEntries_bnk_23( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x23, 'pageMarker_bnk_23', 1, 1 );
    dasmEntries.addTableWpc( 0x4001, 0x23, 'tblwpc_bnk_23_4001' );
    dasmEntries.addImage( 0x4110, 0x23, 'img_135' );
    dasmEntries.addImage( 0x4001, 0x23, 'img_136' );
    dasmEntries.addImage( 0x420f, 0x23, 'img_137' );
    dasmEntries.addImage( 0x420f, 0x23, 'img_138' );
    dasmEntries.addImage( 0x42b8, 0x23, 'img_139' );
    dasmEntries.addImage( 0x4243, 0x23, 'img_13A' );
    dasmEntries.addImage( 0x4396, 0x23, 'img_13B' );
    dasmEntries.addImage( 0x431b, 0x23, 'img_13C' );
    dasmEntries.addImage( 0x44c0, 0x23, 'img_13D' );
    dasmEntries.addImage( 0x4402, 0x23, 'img_13E' );
    dasmEntries.addImage( 0x4643, 0x23, 'img_13F' );
    dasmEntries.addImage( 0x4560, 0x23, 'img_140' );
    dasmEntries.addImage( 0x47ef, 0x23, 'img_141' );
    dasmEntries.addImage( 0x470f, 0x23, 'img_142' );
    dasmEntries.addImage( 0x4988, 0x23, 'img_143' );
    dasmEntries.addImage( 0x48bb, 0x23, 'img_144' );
    dasmEntries.addImage( 0x4b3a, 0x23, 'img_145' );
    dasmEntries.addImage( 0x4a42, 0x23, 'img_146' );
    dasmEntries.addImage( 0x4d54, 0x23, 'img_147' );
    dasmEntries.addImage( 0x4c20, 0x23, 'img_148' );
    dasmEntries.addImage( 0x4fa4, 0x23, 'img_149' );
    dasmEntries.addImage( 0x4e6e, 0x23, 'img_14A' );
    dasmEntries.addImage( 0x51d0, 0x23, 'img_14B' );
    dasmEntries.addImage( 0x50cc, 0x23, 'img_14C' );
    dasmEntries.addImage( 0x52c7, 0x23, 'img_14D' );
    dasmEntries.addImage( 0x52c7, 0x23, 'img_14E' );
    dasmEntries.addImage( 0x538f, 0x23, 'img_171' );
    dasmEntries.addImage( 0x52fe, 0x23, 'img_172' );
    dasmEntries.addImage( 0x54ad, 0x23, 'img_173' );
    dasmEntries.addImage( 0x540e, 0x23, 'img_174' );
    dasmEntries.addImage( 0x5623, 0x23, 'img_175' );
    dasmEntries.addImage( 0x5545, 0x23, 'img_176' );
    dasmEntries.addImage( 0x57cc, 0x23, 'img_177' );
    dasmEntries.addImage( 0x56f9, 0x23, 'img_178' );
    dasmEntries.addImage( 0x5946, 0x23, 'img_179' );
    dasmEntries.addImage( 0x5890, 0x23, 'img_17A' );
    dasmEntries.addImage( 0x5a89, 0x23, 'img_17B' );
    dasmEntries.addImage( 0x59f4, 0x23, 'img_17C' );
    dasmEntries.addImage( 0x5b7f, 0x23, 'img_17D' );
    dasmEntries.addImage( 0x5b18, 0x23, 'img_17E' );
    dasmEntries.addImage( 0x5be4, 0x23, 'img_17F' );
    dasmEntries.addImage( 0x5be4, 0x23, 'img_180' );
    dasmEntries.addImage( 0x5c4d, 0x23, 'img_181' );
    dasmEntries.addImage( 0x5bf3, 0x23, 'img_182' );
    dasmEntries.addImage( 0x5cff, 0x23, 'img_183' );
    dasmEntries.addImage( 0x5ca9, 0x23, 'img_184' );
    dasmEntries.addImage( 0x5da4, 0x23, 'img_185' );
    dasmEntries.addImage( 0x5d55, 0x23, 'img_186' );
    dasmEntries.addImage( 0x5e3d, 0x23, 'img_187' );
    dasmEntries.addImage( 0x5df3, 0x23, 'img_188' );
    dasmEntries.addImage( 0x5edf, 0x23, 'img_189' );
    dasmEntries.addImage( 0x5e86, 0x23, 'img_18A' );
    dasmEntries.addImage( 0x5f90, 0x23, 'img_18B' );
    dasmEntries.addImage( 0x5f3a, 0x23, 'img_18C' );
    dasmEntries.addImage( 0x603e, 0x23, 'img_18D' );
    dasmEntries.addImage( 0x5fe3, 0x23, 'img_18E' );
    dasmEntries.addImage( 0x60ef, 0x23, 'img_18F' );
    dasmEntries.addImage( 0x609a, 0x23, 'img_190' );
    dasmEntries.addImage( 0x61a5, 0x23, 'img_191' );
    dasmEntries.addImage( 0x6143, 0x23, 'img_192' );
    dasmEntries.addImage( 0x6252, 0x23, 'img_193' );
    dasmEntries.addImage( 0x6200, 0x23, 'img_194' );
    dasmEntries.addImage( 0x62f3, 0x23, 'img_195' );
    dasmEntries.addImage( 0x629b, 0x23, 'img_196' );
    dasmEntries.addImage( 0x63ad, 0x23, 'img_197' );
    dasmEntries.addImage( 0x6345, 0x23, 'img_198' );
    dasmEntries.addImage( 0x6454, 0x23, 'img_199' );
    dasmEntries.addImage( 0x63ff, 0x23, 'img_19A' );
    dasmEntries.addImage( 0x64f2, 0x23, 'img_19B' );
    dasmEntries.addImage( 0x649e, 0x23, 'img_19C' );
    dasmEntries.addImage( 0x658e, 0x23, 'img_19D' );
    dasmEntries.addImage( 0x653a, 0x23, 'img_19E' );
    dasmEntries.addImage( 0x6645, 0x23, 'img_19F' );
    dasmEntries.addImage( 0x65da, 0x23, 'img_1A0' );
    dasmEntries.addImage( 0x6797, 0x23, 'img_1A1' );
    dasmEntries.addImage( 0x6698, 0x23, 'img_1A2' );
    dasmEntries.addImage( 0x69c9, 0x23, 'img_1A3' );
    dasmEntries.addImage( 0x688a, 0x23, 'img_1A4' );
    dasmEntries.addImage( 0x6bd7, 0x23, 'img_1A5' );
    dasmEntries.addImage( 0x6ad8, 0x23, 'img_1A6' );
    dasmEntries.addImage( 0x6ddf, 0x23, 'img_1A7' );
    dasmEntries.addImage( 0x6cd2, 0x23, 'img_1A8' );
    dasmEntries.addImage( 0x7016, 0x23, 'img_1A9' );
    dasmEntries.addImage( 0x6ee6, 0x23, 'img_1AA' );
    dasmEntries.addImage( 0x727f, 0x23, 'img_1AB' );
    dasmEntries.addImage( 0x713d, 0x23, 'img_1AC' );
    dasmEntries.addImage( 0x73c1, 0x23, 'img_1AD' );
    dasmEntries.addImage( 0x73c1, 0x23, 'img_1AE' );
    dasmEntries.addImage( 0x74fa, 0x23, 'img_1AF' );
    dasmEntries.addImage( 0x74fa, 0x23, 'img_1B0' );
    dasmEntries.addImage( 0x7631, 0x23, 'img_1B1' );
    dasmEntries.addImage( 0x7631, 0x23, 'img_1B2' );
    dasmEntries.addImage( 0x7740, 0x23, 'img_1B3' );
    dasmEntries.addImage( 0x7740, 0x23, 'img_1B4' );
    dasmEntries.addImage( 0x7817, 0x23, 'img_1B5' );
    dasmEntries.addImage( 0x7817, 0x23, 'img_1B6' );
    dasmEntries.addImage( 0x78bc, 0x23, 'img_1B7' );
    dasmEntries.addImage( 0x78bc, 0x23, 'img_1B8' );
    dasmEntries.addImage( 0x792b, 0x23, 'img_1B9' );
    dasmEntries.addImage( 0x792b, 0x23, 'img_1BA' );
    dasmEntries.addImage( 0x79e0, 0x23, 'img_1BB' );
    dasmEntries.addImage( 0x7966, 0x23, 'img_1BC' );
    dasmEntries.addImage( 0x7ae6, 0x23, 'img_1BD' );
    dasmEntries.addImage( 0x7a50, 0x23, 'img_1BE' );
    dasmEntries.addImage( 0x7c02, 0x23, 'img_1BF' );
    dasmEntries.addImage( 0x7b70, 0x23, 'img_1C0' );
    dasmEntries.addImage( 0x7d21, 0x23, 'img_1C1' );
    dasmEntries.addImage( 0x7c88, 0x23, 'img_1C2' );
    dasmEntries.addImage( 0x7e2f, 0x23, 'img_1C3' );
    dasmEntries.addImage( 0x7d98, 0x23, 'img_1C4' );
    dasmEntries.addImage( 0x7f24, 0x23, 'img_1C5' );
    dasmEntries.addImage( 0x7eaa, 0x23, 'img_1C6' );

}

function getDasmEntries_bnk_24( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x24, 'pageMarker_bnk_24', 1, 1 );
    dasmEntries.addTableWpc( 0x4001, 0x24, 'tblwpc_bnk_24_4001' );
    dasmEntries.addImage( 0x703e, 0x24, 'img_1C7' );
    dasmEntries.addImage( 0x6f35, 0x24, 'img_1C8' );
    dasmEntries.addImage( 0x7218, 0x24, 'img_1C9' );
    dasmEntries.addImage( 0x7121, 0x24, 'img_1CA' );
    dasmEntries.addImage( 0x73ae, 0x24, 'img_1CB' );
    dasmEntries.addImage( 0x72e1, 0x24, 'img_1CC' );
    dasmEntries.addImage( 0x7507, 0x24, 'img_1CD' );
    dasmEntries.addImage( 0x7448, 0x24, 'img_1CE' );
    dasmEntries.addImage( 0x763d, 0x24, 'img_1CF' );
    dasmEntries.addImage( 0x7591, 0x24, 'img_1D0' );
    dasmEntries.addImage( 0x772f, 0x24, 'img_1D1' );
    dasmEntries.addImage( 0x76bf, 0x24, 'img_1D2' );
    dasmEntries.addImage( 0x77c5, 0x24, 'img_1D3' );
    dasmEntries.addImage( 0x778f, 0x24, 'img_1D4' );
    dasmEntries.addImage( 0x7816, 0x24, 'img_1D5' );
    dasmEntries.addImage( 0x77f3, 0x24, 'img_1D6' );
    dasmEntries.addImage( 0x784c, 0x24, 'img_1D7' );
    dasmEntries.addImage( 0x7836, 0x24, 'img_1D8' );
    dasmEntries.addImage( 0x7878, 0x24, 'img_1D9' );
    dasmEntries.addImage( 0x7862, 0x24, 'img_1DA' );
    dasmEntries.addImage( 0x78a2, 0x24, 'img_1DB' );
    dasmEntries.addImage( 0x788f, 0x24, 'img_1DC' );
    dasmEntries.addImage( 0x7907, 0x24, 'img_1DD' );
    dasmEntries.addImage( 0x78b4, 0x24, 'img_1DE' );
    dasmEntries.addImage( 0x79ad, 0x24, 'img_1DF' );
    dasmEntries.addImage( 0x7957, 0x24, 'img_1E0' );
    dasmEntries.addImage( 0x7a5b, 0x24, 'img_1E1' );
    dasmEntries.addImage( 0x79fd, 0x24, 'img_1E2' );
    dasmEntries.addImage( 0x7ada, 0x24, 'img_1E3' );
    dasmEntries.addImage( 0x7aa7, 0x24, 'img_1E4' );
    dasmEntries.addImage( 0x7b2f, 0x24, 'img_1E5' );
    dasmEntries.addImage( 0x7b0e, 0x24, 'img_1E6' );
    dasmEntries.addImage( 0x7b67, 0x24, 'img_1E7' );
    dasmEntries.addImage( 0x7b4e, 0x24, 'img_1E8' );
    dasmEntries.addImage( 0x7bbd, 0x24, 'img_1E9' );
    dasmEntries.addImage( 0x7b81, 0x24, 'img_1EA' );
    dasmEntries.addImage( 0x7c35, 0x24, 'img_1EB' );
    dasmEntries.addImage( 0x7beb, 0x24, 'img_1EC' );
    dasmEntries.addImage( 0x7ccc, 0x24, 'img_1ED' );
    dasmEntries.addImage( 0x7c70, 0x24, 'img_1EE' );
    dasmEntries.addImage( 0x7d8b, 0x24, 'img_1EF' );
    dasmEntries.addImage( 0x7d15, 0x24, 'img_1F0' );
    dasmEntries.addImage( 0x7e85, 0x24, 'img_1F1' );
    dasmEntries.addImage( 0x7ded, 0x24, 'img_1F2' );
    dasmEntries.addImage( 0x7f13, 0x24, 'img_1F4' );

    dasmEntries.addImage( 0x5ad8, 0x24, 'img_205' );
    dasmEntries.addImage( 0x5a50, 0x24, 'img_206' );
    dasmEntries.addImage( 0x5b8f, 0x24, 'img_207' );
    dasmEntries.addImage( 0x5b54, 0x24, 'img_208' );
    dasmEntries.addImage( 0x5c29, 0x24, 'img_209' );
    dasmEntries.addImage( 0x5bcf, 0x24, 'img_20A' );
    dasmEntries.addImage( 0x5cef, 0x24, 'img_20B' );
    dasmEntries.addImage( 0x5c83, 0x24, 'img_20C' );
    dasmEntries.addImage( 0x5d4f, 0x24, 'img_20D' );
    dasmEntries.addImage( 0x5d4f, 0x24, 'img_20E' );
    dasmEntries.addImage( 0x5e90, 0x24, 'img_20F' );
    dasmEntries.addImage( 0x5e90, 0x24, 'img_210' );
    dasmEntries.addImage( 0x6015, 0x24, 'img_211' );
    dasmEntries.addImage( 0x6015, 0x24, 'img_212' );
    dasmEntries.addImage( 0x6308, 0x24, 'img_213' );
    dasmEntries.addImage( 0x6199, 0x24, 'img_214' );
    dasmEntries.addImage( 0x65da, 0x24, 'img_215' );
    dasmEntries.addImage( 0x6476, 0x24, 'img_216' );
    dasmEntries.addImage( 0x689a, 0x24, 'img_217' );
    dasmEntries.addImage( 0x673d, 0x24, 'img_218' );
    dasmEntries.addImage( 0x6b25, 0x24, 'img_219' );
    dasmEntries.addImage( 0x69f2, 0x24, 'img_21A' );
    dasmEntries.addImage( 0x6d3a, 0x24, 'img_21B' );
    dasmEntries.addImage( 0x6c5b, 0x24, 'img_21C' );
    dasmEntries.addImage( 0x6e8f, 0x24, 'img_21D' );
    dasmEntries.addImage( 0x6e1b, 0x24, 'img_21E' );
    dasmEntries.addImage( 0x6f04, 0x24, 'img_21F' );
    dasmEntries.addImage( 0x6f04, 0x24, 'img_220' );
    dasmEntries.addImage( 0x4084, 0x24, 'img_221' );
    dasmEntries.addImage( 0x4001, 0x24, 'img_222' );
    dasmEntries.addImage( 0x417d, 0x24, 'img_223' );
    dasmEntries.addImage( 0x40ff, 0x24, 'img_224' );
    dasmEntries.addImage( 0x4263, 0x24, 'img_225' );
    dasmEntries.addImage( 0x41f0, 0x24, 'img_226' );
    dasmEntries.addImage( 0x4337, 0x24, 'img_227' );
    dasmEntries.addImage( 0x42c7, 0x24, 'img_228' );
    dasmEntries.addImage( 0x4404, 0x24, 'img_229' );
    dasmEntries.addImage( 0x4395, 0x24, 'img_22A' );
    dasmEntries.addImage( 0x44cc, 0x24, 'img_22B' );
    dasmEntries.addImage( 0x4460, 0x24, 'img_22C' );
    dasmEntries.addImage( 0x457e, 0x24, 'img_22D' );
    dasmEntries.addImage( 0x4528, 0x24, 'img_22E' );
    dasmEntries.addImage( 0x4627, 0x24, 'img_22F' );
    dasmEntries.addImage( 0x45cd, 0x24, 'img_230' );
    dasmEntries.addImage( 0x46ee, 0x24, 'img_231' );
    dasmEntries.addImage( 0x4674, 0x24, 'img_232' );
    dasmEntries.addImage( 0x47fa, 0x24, 'img_233' );
    dasmEntries.addImage( 0x475d, 0x24, 'img_234' );
    dasmEntries.addImage( 0x491b, 0x24, 'img_235' );
    dasmEntries.addImage( 0x487f, 0x24, 'img_236' );
    dasmEntries.addImage( 0x4a30, 0x24, 'img_237' );
    dasmEntries.addImage( 0x4999, 0x24, 'img_238' );
    dasmEntries.addImage( 0x4b19, 0x24, 'img_239' );
    dasmEntries.addImage( 0x4aa2, 0x24, 'img_23A' );
    dasmEntries.addImage( 0x4be6, 0x24, 'img_23B' );
    dasmEntries.addImage( 0x4b78, 0x24, 'img_23C' );

    dasmEntries.addImage( 0x7ff9, 0x24, 'img_624' );

}

function getDasmEntries_bnk_25( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x25, 'pageMarker_bnk_25', 1, 1 );

    dasmEntries.addImage( 0x4001, 0x25, 'img_1F3' );
    dasmEntries.addImage( 0x41fe, 0x25, 'img_1F5' );
    dasmEntries.addImage( 0x40e0, 0x25, 'img_1F6' );
    dasmEntries.addImage( 0x442f, 0x25, 'img_1F7' );
    dasmEntries.addImage( 0x4315, 0x25, 'img_1F8' );
    dasmEntries.addImage( 0x4654, 0x25, 'img_1F9' );
    dasmEntries.addImage( 0x4540, 0x25, 'img_1FA' );
    dasmEntries.addImage( 0x475e, 0x25, 'img_1FB' );
    dasmEntries.addImage( 0x475e, 0x25, 'img_1FC' );
    dasmEntries.addImage( 0x4865, 0x25, 'img_1FD' );
    dasmEntries.addImage( 0x4865, 0x25, 'img_1FE' );
    dasmEntries.addImage( 0x492e, 0x25, 'img_1FF' );
    dasmEntries.addImage( 0x492e, 0x25, 'img_200' );
    dasmEntries.addImage( 0x49c3, 0x25, 'img_201' );
    dasmEntries.addImage( 0x49c3, 0x25, 'img_202' );
    dasmEntries.addImage( 0x4a24, 0x25, 'img_203' );
    dasmEntries.addImage( 0x4a24, 0x25, 'img_204' );
    dasmEntries.addImage( 0x5eac, 0x25, 'img_23D' );
    dasmEntries.addImage( 0x5def, 0x25, 'img_23E' );
    dasmEntries.addImage( 0x5ff6, 0x25, 'img_23F' );
    dasmEntries.addImage( 0x5f5d, 0x25, 'img_240' );
    dasmEntries.addImage( 0x611b, 0x25, 'img_241' );
    dasmEntries.addImage( 0x608c, 0x25, 'img_242' );
    dasmEntries.addImage( 0x61f8, 0x25, 'img_243' );
    dasmEntries.addImage( 0x61a0, 0x25, 'img_244' );
    dasmEntries.addImage( 0x6288, 0x25, 'img_245' );
    dasmEntries.addImage( 0x624e, 0x25, 'img_246' );
    dasmEntries.addImage( 0x631c, 0x25, 'img_247' );
    dasmEntries.addImage( 0x62be, 0x25, 'img_248' );
    dasmEntries.addImage( 0x63ec, 0x25, 'img_249' );
    dasmEntries.addImage( 0x6372, 0x25, 'img_24A' );
    dasmEntries.addImage( 0x64f8, 0x25, 'img_24B' );
    dasmEntries.addImage( 0x645c, 0x25, 'img_24C' );
    dasmEntries.addImage( 0x664a, 0x25, 'img_24D' );
    dasmEntries.addImage( 0x6588, 0x25, 'img_24E' );
    dasmEntries.addImage( 0x67bc, 0x25, 'img_24F' );
    dasmEntries.addImage( 0x66ff, 0x25, 'img_250' );
    dasmEntries.addImage( 0x6912, 0x25, 'img_251' );
    dasmEntries.addImage( 0x6870, 0x25, 'img_252' );
    dasmEntries.addImage( 0x6a2e, 0x25, 'img_253' );
    dasmEntries.addImage( 0x69a6, 0x25, 'img_254' );
    dasmEntries.addImage( 0x6b1d, 0x25, 'img_255' );
    dasmEntries.addImage( 0x6aa4, 0x25, 'img_256' );
    dasmEntries.addImage( 0x6bf9, 0x25, 'img_257' );
    dasmEntries.addImage( 0x6b87, 0x25, 'img_258' );
    dasmEntries.addImage( 0x6ce7, 0x25, 'img_259' );
    dasmEntries.addImage( 0x6c60, 0x25, 'img_25A' );
    dasmEntries.addImage( 0x6dba, 0x25, 'img_25B' );
    dasmEntries.addImage( 0x6d5c, 0x25, 'img_25C' );
    dasmEntries.addImage( 0x6e71, 0x25, 'img_25D' );
    dasmEntries.addImage( 0x6e18, 0x25, 'img_25E' );
    dasmEntries.addImage( 0x6f20, 0x25, 'img_25F' );
    dasmEntries.addImage( 0x6ec6, 0x25, 'img_260' );
    dasmEntries.addImage( 0x6fc9, 0x25, 'img_261' );
    dasmEntries.addImage( 0x6f78, 0x25, 'img_262' );
    dasmEntries.addImage( 0x7063, 0x25, 'img_263' );
    dasmEntries.addImage( 0x7017, 0x25, 'img_264' );
    dasmEntries.addImage( 0x70fc, 0x25, 'img_265' );
    dasmEntries.addImage( 0x70ac, 0x25, 'img_266' );
    dasmEntries.addImage( 0x7190, 0x25, 'img_267' );
    dasmEntries.addImage( 0x7148, 0x25, 'img_268' );
    dasmEntries.addImage( 0x722c, 0x25, 'img_269' );
    dasmEntries.addImage( 0x71d8, 0x25, 'img_26A' );
    dasmEntries.addImage( 0x72c5, 0x25, 'img_26B' );
    dasmEntries.addImage( 0x727d, 0x25, 'img_26C' );
    dasmEntries.addImage( 0x736f, 0x25, 'img_26D' );
    dasmEntries.addImage( 0x7307, 0x25, 'img_26E' );
    dasmEntries.addImage( 0x7444, 0x25, 'img_26F' );
    dasmEntries.addImage( 0x73d1, 0x25, 'img_270' );
    dasmEntries.addImage( 0x7576, 0x25, 'img_271' );
    dasmEntries.addImage( 0x74b1, 0x25, 'img_272' );
    dasmEntries.addImage( 0x7712, 0x25, 'img_273' );
    dasmEntries.addImage( 0x7636, 0x25, 'img_274' );
    dasmEntries.addImage( 0x78e1, 0x25, 'img_275' );
    dasmEntries.addImage( 0x77ee, 0x25, 'img_276' );
    dasmEntries.addImage( 0x7b0c, 0x25, 'img_277' );
    dasmEntries.addImage( 0x79d1, 0x25, 'img_278' );
    dasmEntries.addImage( 0x7d8a, 0x25, 'img_279' );
    dasmEntries.addImage( 0x7c46, 0x25, 'img_27A' );
    dasmEntries.addImage( 0x4a44, 0x25, 'img_287' );
    dasmEntries.addImage( 0x4a55, 0x25, 'img_288' );
    dasmEntries.addImage( 0x4a6e, 0x25, 'img_289' );
    dasmEntries.addImage( 0x4a8c, 0x25, 'img_28A' );
    dasmEntries.addImage( 0x4aaf, 0x25, 'img_28B' );
    dasmEntries.addImage( 0x4ae3, 0x25, 'img_28C' );
    dasmEntries.addImage( 0x4b34, 0x25, 'img_28D' );
    dasmEntries.addImage( 0x4b96, 0x25, 'img_28E' );
    dasmEntries.addImage( 0x4c01, 0x25, 'img_290' );
    dasmEntries.addImage( 0x4c59, 0x25, 'img_291' );
    dasmEntries.addImage( 0x4cca, 0x25, 'img_292' );
    dasmEntries.addImage( 0x4d30, 0x25, 'img_293' );
    dasmEntries.addImage( 0x4d92, 0x25, 'img_294' );
    dasmEntries.addImage( 0x4e0d, 0x25, 'img_295' );
    dasmEntries.addImage( 0x4e7a, 0x25, 'img_296' );
    dasmEntries.addImage( 0x4ef5, 0x25, 'img_297' );
    dasmEntries.addImage( 0x4f78, 0x25, 'img_298' );
    dasmEntries.addImage( 0x5020, 0x25, 'img_299' );
    dasmEntries.addImage( 0x50c6, 0x25, 'img_29A' );
    dasmEntries.addImage( 0x5165, 0x25, 'img_29B' );
    dasmEntries.addImage( 0x51c6, 0x25, 'img_29C' );
    dasmEntries.addImage( 0x5213, 0x25, 'img_29D' );
    dasmEntries.addImage( 0x5283, 0x25, 'img_29E' );
    dasmEntries.addImage( 0x5301, 0x25, 'img_29F' );
    dasmEntries.addImage( 0x5377, 0x25, 'img_2A0' );
    dasmEntries.addImage( 0x5405, 0x25, 'img_2A1' );
    dasmEntries.addImage( 0x54aa, 0x25, 'img_2A2' );
    dasmEntries.addImage( 0x554d, 0x25, 'img_2A3' );
    dasmEntries.addImage( 0x55ff, 0x25, 'img_2A4' );
    dasmEntries.addImage( 0x56b3, 0x25, 'img_2A5' );
    dasmEntries.addImage( 0x5724, 0x25, 'img_2A6' );
    dasmEntries.addImage( 0x57bf, 0x25, 'img_2A7' );
    dasmEntries.addImage( 0x5847, 0x25, 'img_2A8' );
    dasmEntries.addImage( 0x58e2, 0x25, 'img_2A9' );
    dasmEntries.addImage( 0x59a3, 0x25, 'img_2AA' );
    dasmEntries.addImage( 0x5a7b, 0x25, 'img_2AB' );
    dasmEntries.addImage( 0x5b5c, 0x25, 'img_2AC' );
    dasmEntries.addImage( 0x5c37, 0x25, 'img_2AD' );
    dasmEntries.addImage( 0x5d18, 0x25, 'img_2AE' );

    dasmEntries.addImage( 0x7ece, 0x25, 'img_5CE' );
    dasmEntries.addImage( 0x7f97, 0x25, 'img_65F' );

}

function getDasmEntries_bnk_26( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x26, 'pageMarker_bnk_26', 1, 1 );
    dasmEntries.addImage( 0x4cae, 0x26, 'img_2AF' );
    dasmEntries.addImage( 0x4c65, 0x26, 'img_2B0' );
    dasmEntries.addImage( 0x4d21, 0x26, 'img_2B1' );
    dasmEntries.addImage( 0x4d19, 0x26, 'img_2B2' );
    dasmEntries.addImage( 0x4d90, 0x26, 'img_2B3' );
    dasmEntries.addImage( 0x4d83, 0x26, 'img_2B4' );
    dasmEntries.addImage( 0x4e00, 0x26, 'img_2B5' );
    dasmEntries.addImage( 0x4deb, 0x26, 'img_2B6' );
    dasmEntries.addImage( 0x4e81, 0x26, 'img_2B7' );
    dasmEntries.addImage( 0x4e6b, 0x26, 'img_2B8' );
    dasmEntries.addImage( 0x4f0d, 0x26, 'img_2B9' );
    dasmEntries.addImage( 0x4eee, 0x26, 'img_2BA' );
    dasmEntries.addImage( 0x4f90, 0x26, 'img_2BB' );
    dasmEntries.addImage( 0x4f6c, 0x26, 'img_2BC' );
    dasmEntries.addImage( 0x5028, 0x26, 'img_2BD' );
    dasmEntries.addImage( 0x4ff6, 0x26, 'img_2BE' );
    dasmEntries.addImage( 0x50c9, 0x26, 'img_2BF' );
    dasmEntries.addImage( 0x508f, 0x26, 'img_2C0' );
    dasmEntries.addImage( 0x5185, 0x26, 'img_2C1' );
    dasmEntries.addImage( 0x5145, 0x26, 'img_2C2' );
    dasmEntries.addImage( 0x5254, 0x26, 'img_2C3' );
    dasmEntries.addImage( 0x5203, 0x26, 'img_2C4' );
    dasmEntries.addImage( 0x534a, 0x26, 'img_2C5' );
    dasmEntries.addImage( 0x52e6, 0x26, 'img_2C6' );
    dasmEntries.addImage( 0x546f, 0x26, 'img_2C7' );
    dasmEntries.addImage( 0x53f4, 0x26, 'img_2C8' );
    dasmEntries.addImage( 0x55bb, 0x26, 'img_2C9' );
    dasmEntries.addImage( 0x5525, 0x26, 'img_2CA' );
    dasmEntries.addImage( 0x5726, 0x26, 'img_2CB' );
    dasmEntries.addImage( 0x5677, 0x26, 'img_2CC' );
    dasmEntries.addImage( 0x58c8, 0x26, 'img_2CD' );
    dasmEntries.addImage( 0x57f3, 0x26, 'img_2CE' );
    dasmEntries.addImage( 0x5ad8, 0x26, 'img_2CF' );
    dasmEntries.addImage( 0x59c2, 0x26, 'img_2D0' );
    dasmEntries.addImage( 0x5d23, 0x26, 'img_2D1' );
    dasmEntries.addImage( 0x5be8, 0x26, 'img_2D2' );
    dasmEntries.addImage( 0x5fb1, 0x26, 'img_2D3' );
    dasmEntries.addImage( 0x5e5e, 0x26, 'img_2D4' );
    dasmEntries.addImage( 0x6221, 0x26, 'img_2D5' );
    dasmEntries.addImage( 0x6108, 0x26, 'img_2D6' );
    dasmEntries.addImage( 0x646d, 0x26, 'img_2D7' );
    dasmEntries.addImage( 0x6349, 0x26, 'img_2D8' );
    dasmEntries.addImage( 0x66a1, 0x26, 'img_2D9' );
    dasmEntries.addImage( 0x65a1, 0x26, 'img_2DA' );
    dasmEntries.addImage( 0x68bb, 0x26, 'img_2DB' );
    dasmEntries.addImage( 0x67bf, 0x26, 'img_2DC' );
    dasmEntries.addImage( 0x6a80, 0x26, 'img_2DD' );
    dasmEntries.addImage( 0x69c7, 0x26, 'img_2DE' );
    dasmEntries.addImage( 0x6c18, 0x26, 'img_2DF' );
    dasmEntries.addImage( 0x6b6f, 0x26, 'img_2E0' );
    dasmEntries.addImage( 0x6d62, 0x26, 'img_2E1' );
    dasmEntries.addImage( 0x6cf5, 0x26, 'img_2E2' );
    dasmEntries.addImage( 0x6e0d, 0x26, 'img_2E3' );
    dasmEntries.addImage( 0x4611, 0x26, 'img_2E4' );
    dasmEntries.addImage( 0x459d, 0x26, 'img_2E5' );
    dasmEntries.addImage( 0x4646, 0x26, 'img_2E6' );
    dasmEntries.addImage( 0x4625, 0x26, 'img_2E7' );
    dasmEntries.addImage( 0x468a, 0x26, 'img_2E8' );
    dasmEntries.addImage( 0x4657, 0x26, 'img_2E9' );
    dasmEntries.addImage( 0x46c3, 0x26, 'img_2EA' );
    dasmEntries.addImage( 0x469e, 0x26, 'img_2EB' );
    dasmEntries.addImage( 0x46f9, 0x26, 'img_2EC' );
    dasmEntries.addImage( 0x46d7, 0x26, 'img_2ED' );
    dasmEntries.addImage( 0x4737, 0x26, 'img_2EE' );
    dasmEntries.addImage( 0x4712, 0x26, 'img_2EF' );
    dasmEntries.addImage( 0x476d, 0x26, 'img_2F0' );
    dasmEntries.addImage( 0x474e, 0x26, 'img_2F1' );
    dasmEntries.addImage( 0x47a5, 0x26, 'img_2F2' );
    dasmEntries.addImage( 0x4786, 0x26, 'img_2F3' );
    dasmEntries.addImage( 0x47da, 0x26, 'img_2F4' );
    dasmEntries.addImage( 0x47bc, 0x26, 'img_2F5' );
    dasmEntries.addImage( 0x4814, 0x26, 'img_2F6' );
    dasmEntries.addImage( 0x47f4, 0x26, 'img_2F7' );
    dasmEntries.addImage( 0x4849, 0x26, 'img_2F8' );
    dasmEntries.addImage( 0x482a, 0x26, 'img_2F9' );
    dasmEntries.addImage( 0x487e, 0x26, 'img_2FA' );
    dasmEntries.addImage( 0x485d, 0x26, 'img_2FB' );
    dasmEntries.addImage( 0x48b3, 0x26, 'img_2FC' );
    dasmEntries.addImage( 0x488f, 0x26, 'img_2FD' );
    dasmEntries.addImage( 0x48ef, 0x26, 'img_2FE' );
    dasmEntries.addImage( 0x48c8, 0x26, 'img_2FF' );
    dasmEntries.addImage( 0x4935, 0x26, 'img_300' );
    dasmEntries.addImage( 0x490b, 0x26, 'img_301' );
    dasmEntries.addImage( 0x4981, 0x26, 'img_302' );
    dasmEntries.addImage( 0x4950, 0x26, 'img_303' );
    dasmEntries.addImage( 0x49c8, 0x26, 'img_304' );
    dasmEntries.addImage( 0x499e, 0x26, 'img_305' );
    dasmEntries.addImage( 0x4a05, 0x26, 'img_306' );
    dasmEntries.addImage( 0x49e1, 0x26, 'img_307' );
    dasmEntries.addImage( 0x4a47, 0x26, 'img_308' );
    dasmEntries.addImage( 0x4a21, 0x26, 'img_309' );
    dasmEntries.addImage( 0x4b7d, 0x26, 'img_30A' );
    dasmEntries.addImage( 0x4a5b, 0x26, 'img_30B' );
    dasmEntries.addImage( 0x7d04, 0x26, 'img_358' );

    dasmEntries.addImage( 0x7dcc, 0x26, 'img_649' );
    dasmEntries.addImage( 0x7e9a, 0x26, 'img_64B' );
    dasmEntries.addImage( 0x7f46, 0x26, 'img_64E' );
    dasmEntries.addImage( 0x7806, 0x26, 'img_65A' );
    dasmEntries.addImage( 0x7806, 0x26, 'img_65B' );
    dasmEntries.addImage( 0x787f, 0x26, 'img_65C' );
    dasmEntries.addImage( 0x7841, 0x26, 'img_65D' );
    dasmEntries.addImage( 0x78de, 0x26, 'img_65E' );
    dasmEntries.addImage( 0x797b, 0x26, 'img_660' );
    dasmEntries.addImage( 0x793d, 0x26, 'img_661' );
    dasmEntries.addImage( 0x79ed, 0x26, 'img_662' );
    dasmEntries.addImage( 0x79b2, 0x26, 'img_663' );
    dasmEntries.addImage( 0x7bb6, 0x26, 'img_664' );
    dasmEntries.addImage( 0x79f7, 0x26, 'img_665' );
}

function getDasmEntries_bnk_27( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x27, 'pageMarker_bnk_27', 1, 1 );
    dasmEntries.addImage( 0x4001, 0x27, 'img_30C' );
    dasmEntries.addImage( 0x401d, 0x27, 'img_30D' );
    dasmEntries.addImage( 0x405a, 0x27, 'img_30E' );
    dasmEntries.addImage( 0x40b6, 0x27, 'img_30F' );
    dasmEntries.addImage( 0x4124, 0x27, 'img_310' );
    dasmEntries.addImage( 0x41b7, 0x27, 'img_311' );
    dasmEntries.addImage( 0x4263, 0x27, 'img_312' );
    dasmEntries.addImage( 0x4346, 0x27, 'img_313' );
    dasmEntries.addImage( 0x445a, 0x27, 'img_314' );
    dasmEntries.addImage( 0x4559, 0x27, 'img_315' );
    dasmEntries.addImage( 0x4665, 0x27, 'img_316' );
    dasmEntries.addImage( 0x4779, 0x27, 'img_317' );
    dasmEntries.addImage( 0x488d, 0x27, 'img_318' );
    dasmEntries.addImage( 0x49a6, 0x27, 'img_319' );
    dasmEntries.addImage( 0x4abb, 0x27, 'img_31A' );
    dasmEntries.addImage( 0x4bd4, 0x27, 'img_31B' );
    dasmEntries.addImage( 0x4cec, 0x27, 'img_31C' );
    dasmEntries.addImage( 0x4dfe, 0x27, 'img_31D' );
    dasmEntries.addImage( 0x4f15, 0x27, 'img_31E' );
    dasmEntries.addImage( 0x502d, 0x27, 'img_31F' );
    dasmEntries.addImage( 0x5144, 0x27, 'img_320' );
    dasmEntries.addImage( 0x5265, 0x27, 'img_321' );
    dasmEntries.addImage( 0x5375, 0x27, 'img_322' );
    dasmEntries.addImage( 0x54da, 0x27, 'img_323' );
    dasmEntries.addImage( 0x548e, 0x27, 'img_324' );
    dasmEntries.addImage( 0x557c, 0x27, 'img_325' );
    dasmEntries.addImage( 0x551d, 0x27, 'img_326' );
    dasmEntries.addImage( 0x5631, 0x27, 'img_327' );
    dasmEntries.addImage( 0x55ca, 0x27, 'img_328' );
    dasmEntries.addImage( 0x56e4, 0x27, 'img_329' );
    dasmEntries.addImage( 0x5684, 0x27, 'img_32A' );
    dasmEntries.addImage( 0x579b, 0x27, 'img_32B' );
    dasmEntries.addImage( 0x5735, 0x27, 'img_32C' );
    dasmEntries.addImage( 0x584d, 0x27, 'img_32D' );
    dasmEntries.addImage( 0x57e8, 0x27, 'img_32E' );
    dasmEntries.addImage( 0x5900, 0x27, 'img_32F' );
    dasmEntries.addImage( 0x589e, 0x27, 'img_330' );
    dasmEntries.addImage( 0x59a9, 0x27, 'img_331' );
    dasmEntries.addImage( 0x5951, 0x27, 'img_332' );
    dasmEntries.addImage( 0x5a5e, 0x27, 'img_333' );
    dasmEntries.addImage( 0x59f5, 0x27, 'img_334' );
    dasmEntries.addImage( 0x5b27, 0x27, 'img_335' );
    dasmEntries.addImage( 0x5ab5, 0x27, 'img_336' );
    dasmEntries.addImage( 0x5bd0, 0x27, 'img_337' );
    dasmEntries.addImage( 0x5b7a, 0x27, 'img_338' );
    dasmEntries.addImage( 0x5c75, 0x27, 'img_339' );
    dasmEntries.addImage( 0x5c1a, 0x27, 'img_33A' );
    dasmEntries.addImage( 0x5d0d, 0x27, 'img_33B' );
    dasmEntries.addImage( 0x5cc0, 0x27, 'img_33C' );
    dasmEntries.addImage( 0x5d99, 0x27, 'img_33D' );
    dasmEntries.addImage( 0x5d4d, 0x27, 'img_33E' );
    dasmEntries.addImage( 0x5e3b, 0x27, 'img_33F' );
    dasmEntries.addImage( 0x5ddc, 0x27, 'img_340' );
    dasmEntries.addImage( 0x5ef0, 0x27, 'img_341' );
    dasmEntries.addImage( 0x5e89, 0x27, 'img_342' );
    dasmEntries.addImage( 0x5fa3, 0x27, 'img_343' );
    dasmEntries.addImage( 0x5f43, 0x27, 'img_344' );
    dasmEntries.addImage( 0x605a, 0x27, 'img_345' );
    dasmEntries.addImage( 0x5ff4, 0x27, 'img_346' );
    dasmEntries.addImage( 0x610c, 0x27, 'img_347' );
    dasmEntries.addImage( 0x60a7, 0x27, 'img_348' );
    dasmEntries.addImage( 0x61bf, 0x27, 'img_349' );
    dasmEntries.addImage( 0x615d, 0x27, 'img_34A' );
    dasmEntries.addImage( 0x6268, 0x27, 'img_34B' );
    dasmEntries.addImage( 0x6210, 0x27, 'img_34C' );
    dasmEntries.addImage( 0x631d, 0x27, 'img_34D' );
    dasmEntries.addImage( 0x62b4, 0x27, 'img_34E' );
    dasmEntries.addImage( 0x63e6, 0x27, 'img_34F' );
    dasmEntries.addImage( 0x6374, 0x27, 'img_350' );
    dasmEntries.addImage( 0x648f, 0x27, 'img_351' );
    dasmEntries.addImage( 0x6439, 0x27, 'img_352' );
    dasmEntries.addImage( 0x6534, 0x27, 'img_353' );
    dasmEntries.addImage( 0x64d9, 0x27, 'img_354' );
    dasmEntries.addImage( 0x65cf, 0x27, 'img_355' );
    dasmEntries.addImage( 0x6580, 0x27, 'img_356' );
    dasmEntries.addImage( 0x660f, 0x27, 'img_357' );
    dasmEntries.addImage( 0x6796, 0x27, 'img_359' );
    dasmEntries.addImage( 0x66c4, 0x27, 'img_35A' );
    dasmEntries.addImage( 0x6904, 0x27, 'img_35B' );
    dasmEntries.addImage( 0x684d, 0x27, 'img_35C' );
    dasmEntries.addImage( 0x6a6b, 0x27, 'img_35D' );
    dasmEntries.addImage( 0x69ab, 0x27, 'img_35E' );
    dasmEntries.addImage( 0x6bde, 0x27, 'img_35F' );
    dasmEntries.addImage( 0x6b1b, 0x27, 'img_360' );
    dasmEntries.addImage( 0x6d62, 0x27, 'img_361' );
    dasmEntries.addImage( 0x6c87, 0x27, 'img_362' );
    dasmEntries.addImage( 0x6f05, 0x27, 'img_363' );
    dasmEntries.addImage( 0x6e24, 0x27, 'img_364' );
    dasmEntries.addImage( 0x70ce, 0x27, 'img_365' );
    dasmEntries.addImage( 0x6fc6, 0x27, 'img_366' );
    dasmEntries.addImage( 0x72d0, 0x27, 'img_367' );
    dasmEntries.addImage( 0x71cc, 0x27, 'img_368' );
    dasmEntries.addImage( 0x70ce, 0x27, 'img_369' );
    dasmEntries.addImage( 0x6fc6, 0x27, 'img_36A' );
    dasmEntries.addImage( 0x72d0, 0x27, 'img_36B' );
    dasmEntries.addImage( 0x71cc, 0x27, 'img_36C' );
    dasmEntries.addImage( 0x74db, 0x27, 'img_36D' );
    dasmEntries.addImage( 0x73cf, 0x27, 'img_36E' );
    dasmEntries.addImage( 0x76eb, 0x27, 'img_36F' );
    dasmEntries.addImage( 0x75df, 0x27, 'img_370' );
    dasmEntries.addImage( 0x74db, 0x27, 'img_371' );
    dasmEntries.addImage( 0x73cf, 0x27, 'img_372' );
    dasmEntries.addImage( 0x76eb, 0x27, 'img_373' );
    dasmEntries.addImage( 0x75df, 0x27, 'img_374' );
    dasmEntries.addImage( 0x7961, 0x27, 'img_375' );
    dasmEntries.addImage( 0x77ef, 0x27, 'img_376' );
    dasmEntries.addImage( 0x7c08, 0x27, 'img_377' );
    dasmEntries.addImage( 0x7aba, 0x27, 'img_378' );
    dasmEntries.addImage( 0x7d77, 0x27, 'img_379' );
    dasmEntries.addImage( 0x7d53, 0x27, 'img_37A' );
    dasmEntries.addImage( 0x7dff, 0x27, 'img_37B' );
    dasmEntries.addImage( 0x7da2, 0x27, 'img_37C' );
    dasmEntries.addImage( 0x7eb5, 0x27, 'img_37D' );
    dasmEntries.addImage( 0x7e50, 0x27, 'img_37E' );

    dasmEntries.addImage( 0x7fe3, 0x27, 'img_5D6' );

    dasmEntries.addImage( 0x7f0c, 0x27, 'img_64A' );
}

function getDasmEntries_bnk_28( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x28, 'pageMarker_bnk_28', 1, 1 );
    dasmEntries.addImage( 0x4051, 0x28, 'img_37F' );
    dasmEntries.addImage( 0x4001, 0x28, 'img_380' );
    dasmEntries.addImage( 0x40f5, 0x28, 'img_381' );
    dasmEntries.addImage( 0x409d, 0x28, 'img_382' );
    dasmEntries.addImage( 0x418a, 0x28, 'img_383' );
    dasmEntries.addImage( 0x4139, 0x28, 'img_384' );
    dasmEntries.addImage( 0x41f0, 0x28, 'img_385' );
    dasmEntries.addImage( 0x41cb, 0x28, 'img_386' );
    dasmEntries.addImage( 0x4223, 0x28, 'img_387' );
    dasmEntries.addImage( 0x420f, 0x28, 'img_388' );
    dasmEntries.addImage( 0x4254, 0x28, 'img_389' );
    dasmEntries.addImage( 0x422d, 0x28, 'img_38A' );
    dasmEntries.addImage( 0x42de, 0x28, 'img_38B' );
    dasmEntries.addImage( 0x4282, 0x28, 'img_38C' );
    dasmEntries.addImage( 0x438f, 0x28, 'img_38D' );
    dasmEntries.addImage( 0x4330, 0x28, 'img_38E' );
    dasmEntries.addImage( 0x442e, 0x28, 'img_38F' );
    dasmEntries.addImage( 0x43e1, 0x28, 'img_390' );
    dasmEntries.addImage( 0x44c6, 0x28, 'img_391' );
    dasmEntries.addImage( 0x4477, 0x28, 'img_392' );
    dasmEntries.addImage( 0x454f, 0x28, 'img_393' );
    dasmEntries.addImage( 0x4502, 0x28, 'img_394' );
    dasmEntries.addImage( 0x45b7, 0x28, 'img_395' );
    dasmEntries.addImage( 0x458f, 0x28, 'img_396' );
    dasmEntries.addImage( 0x45ed, 0x28, 'img_397' );
    dasmEntries.addImage( 0x45d9, 0x28, 'img_398' );
    dasmEntries.addImage( 0x460f, 0x28, 'img_399' );
    dasmEntries.addImage( 0x45f7, 0x28, 'img_39A' );
    dasmEntries.addImage( 0x4649, 0x28, 'img_39B' );
    dasmEntries.addImage( 0x4619, 0x28, 'img_39C' );
    dasmEntries.addImage( 0x46cb, 0x28, 'img_39D' );
    dasmEntries.addImage( 0x465e, 0x28, 'img_39E' );
    dasmEntries.addImage( 0x47ad, 0x28, 'img_39F' );
    dasmEntries.addImage( 0x4721, 0x28, 'img_3A0' );
    dasmEntries.addImage( 0x48ca, 0x28, 'img_3A1' );
    dasmEntries.addImage( 0x4827, 0x28, 'img_3A2' );
    dasmEntries.addImage( 0x49e2, 0x28, 'img_3A3' );
    dasmEntries.addImage( 0x4957, 0x28, 'img_3A4' );
    dasmEntries.addImage( 0x4adf, 0x28, 'img_3A5' );
    dasmEntries.addImage( 0x4a62, 0x28, 'img_3A6' );
    dasmEntries.addImage( 0x4bad, 0x28, 'img_3A7' );
    dasmEntries.addImage( 0x4b52, 0x28, 'img_3A8' );
    dasmEntries.addImage( 0x4c36, 0x28, 'img_3A9' );
    dasmEntries.addImage( 0x4bfd, 0x28, 'img_3AA' );
    dasmEntries.addImage( 0x4c84, 0x28, 'img_3AB' );
    dasmEntries.addImage( 0x4c5d, 0x28, 'img_3AC' );
    dasmEntries.addImage( 0x4cae, 0x28, 'img_3AD' );
    dasmEntries.addImage( 0x4c96, 0x28, 'img_3AE' );
    dasmEntries.addImage( 0x4ce6, 0x28, 'img_3AF' );
    dasmEntries.addImage( 0x4cb8, 0x28, 'img_3B0' );
    dasmEntries.addImage( 0x4d66, 0x28, 'img_3B1' );
    dasmEntries.addImage( 0x4cfb, 0x28, 'img_3B2' );
    dasmEntries.addImage( 0x4e44, 0x28, 'img_3B3' );
    dasmEntries.addImage( 0x4dba, 0x28, 'img_3B4' );
    dasmEntries.addImage( 0x4f62, 0x28, 'img_3B5' );
    dasmEntries.addImage( 0x4ebe, 0x28, 'img_3B6' );
    dasmEntries.addImage( 0x5079, 0x28, 'img_3B7' );
    dasmEntries.addImage( 0x4fec, 0x28, 'img_3B8' );
    dasmEntries.addImage( 0x5170, 0x28, 'img_3B9' );
    dasmEntries.addImage( 0x50f7, 0x28, 'img_3BA' );
    dasmEntries.addImage( 0x523b, 0x28, 'img_3BB' );
    dasmEntries.addImage( 0x51de, 0x28, 'img_3BC' );
    dasmEntries.addImage( 0x52c6, 0x28, 'img_3BD' );
    dasmEntries.addImage( 0x528c, 0x28, 'img_3BE' );
    dasmEntries.addImage( 0x5317, 0x28, 'img_3BF' );
    dasmEntries.addImage( 0x52ed, 0x28, 'img_3C0' );
    dasmEntries.addImage( 0x5338, 0x28, 'img_3C1' );
    dasmEntries.addImage( 0x5329, 0x28, 'img_3C2' );
    dasmEntries.addImage( 0x5372, 0x28, 'img_3C3' );
    dasmEntries.addImage( 0x534b, 0x28, 'img_3C4' );
    dasmEntries.addImage( 0x53f7, 0x28, 'img_3C5' );
    dasmEntries.addImage( 0x539d, 0x28, 'img_3C6' );
    dasmEntries.addImage( 0x54ab, 0x28, 'img_3C7' );
    dasmEntries.addImage( 0x544c, 0x28, 'img_3C8' );
    dasmEntries.addImage( 0x556e, 0x28, 'img_3C9' );
    dasmEntries.addImage( 0x5501, 0x28, 'img_3CA' );
    dasmEntries.addImage( 0x562c, 0x28, 'img_3CB' );
    dasmEntries.addImage( 0x55ce, 0x28, 'img_3CC' );
    dasmEntries.addImage( 0x56ed, 0x28, 'img_3CD' );
    dasmEntries.addImage( 0x5682, 0x28, 'img_3CE' );
    dasmEntries.addImage( 0x57c1, 0x28, 'img_3CF' );
    dasmEntries.addImage( 0x575b, 0x28, 'img_3D0' );
    dasmEntries.addImage( 0x5877, 0x28, 'img_3D1' );
    dasmEntries.addImage( 0x5823, 0x28, 'img_3D2' );
    dasmEntries.addImage( 0x5902, 0x28, 'img_3D3' );
    dasmEntries.addImage( 0x58c8, 0x28, 'img_3D4' );
    dasmEntries.addImage( 0x5944, 0x28, 'img_3D5' );
    dasmEntries.addImage( 0x5934, 0x28, 'img_3D6' );
    dasmEntries.addImage( 0x5965, 0x28, 'img_3D7' );
    dasmEntries.addImage( 0x5953, 0x28, 'img_3D8' );
    dasmEntries.addImage( 0x59ae, 0x28, 'img_3D9' );
    dasmEntries.addImage( 0x5976, 0x28, 'img_3DA' );
    dasmEntries.addImage( 0x5a41, 0x28, 'img_3DB' );
    dasmEntries.addImage( 0x59e6, 0x28, 'img_3DC' );
    dasmEntries.addImage( 0x5b02, 0x28, 'img_3DD' );
    dasmEntries.addImage( 0x5a95, 0x28, 'img_3DE' );
    dasmEntries.addImage( 0x5bd9, 0x28, 'img_3DF' );
    dasmEntries.addImage( 0x5b71, 0x28, 'img_3E0' );
    dasmEntries.addImage( 0x5c96, 0x28, 'img_3E1' );
    dasmEntries.addImage( 0x5c3c, 0x28, 'img_3E2' );
    dasmEntries.addImage( 0x5d4e, 0x28, 'img_3E3' );
    dasmEntries.addImage( 0x5cec, 0x28, 'img_3E4' );
    dasmEntries.addImage( 0x5e0d, 0x28, 'img_3E5' );
    dasmEntries.addImage( 0x5da5, 0x28, 'img_3E6' );
    dasmEntries.addImage( 0x5eb2, 0x28, 'img_3E7' );
    dasmEntries.addImage( 0x5e6f, 0x28, 'img_3E8' );
    dasmEntries.addImage( 0x5f17, 0x28, 'img_3E9' );
    dasmEntries.addImage( 0x5eeb, 0x28, 'img_3EA' );
    dasmEntries.addImage( 0x5f52, 0x28, 'img_3EB' );
    dasmEntries.addImage( 0x5f42, 0x28, 'img_3EC' );
    dasmEntries.addImage( 0x5fc0, 0x28, 'img_3ED' );
    dasmEntries.addImage( 0x5f61, 0x28, 'img_3EE' );
    dasmEntries.addImage( 0x6087, 0x28, 'img_3EF' );
    dasmEntries.addImage( 0x6013, 0x28, 'img_3F0' );
    dasmEntries.addImage( 0x61b4, 0x28, 'img_3F1' );
    dasmEntries.addImage( 0x60ea, 0x28, 'img_3F2' );
    dasmEntries.addImage( 0x6334, 0x28, 'img_3F3' );
    dasmEntries.addImage( 0x6265, 0x28, 'img_3F4' );
    dasmEntries.addImage( 0x64cf, 0x28, 'img_3F5' );
    dasmEntries.addImage( 0x63f9, 0x28, 'img_3F6' );
    dasmEntries.addImage( 0x65a1, 0x28, 'img_3F7' );
    dasmEntries.addImage( 0x6693, 0x28, 'img_3F8' );
    dasmEntries.addImage( 0x67c2, 0x28, 'img_3F9' );
    dasmEntries.addImage( 0x68ec, 0x28, 'img_3FA' );
    dasmEntries.addImage( 0x6a22, 0x28, 'img_3FB' );
    dasmEntries.addImage( 0x6b59, 0x28, 'img_3FC' );
    dasmEntries.addImage( 0x6c8c, 0x28, 'img_3FD' );
    dasmEntries.addImage( 0x6db2, 0x28, 'img_3FE' );
    dasmEntries.addImage( 0x6e96, 0x28, 'img_3FF' );
    dasmEntries.addImage( 0x6f3b, 0x28, 'img_400' );
    dasmEntries.addImage( 0x6fac, 0x28, 'img_401' );
    dasmEntries.addImage( 0x6fe2, 0x28, 'img_402' );
    dasmEntries.addImage( 0x7080, 0x28, 'img_403' );
    dasmEntries.addImage( 0x6ff3, 0x28, 'img_404' );
    dasmEntries.addImage( 0x7127, 0x28, 'img_405' );
    dasmEntries.addImage( 0x70ff, 0x28, 'img_406' );
    dasmEntries.addImage( 0x716f, 0x28, 'img_407' );
    dasmEntries.addImage( 0x714a, 0x28, 'img_408' );
    dasmEntries.addImage( 0x71b9, 0x28, 'img_409' );
    dasmEntries.addImage( 0x718e, 0x28, 'img_40A' );
    dasmEntries.addImage( 0x721d, 0x28, 'img_40B' );
    dasmEntries.addImage( 0x71dd, 0x28, 'img_40C' );
    dasmEntries.addImage( 0x72a0, 0x28, 'img_40D' );
    dasmEntries.addImage( 0x7250, 0x28, 'img_40E' );
    dasmEntries.addImage( 0x7327, 0x28, 'img_40F' );
    dasmEntries.addImage( 0x72e2, 0x28, 'img_410' );
    dasmEntries.addImage( 0x73a2, 0x28, 'img_411' );
    dasmEntries.addImage( 0x7368, 0x28, 'img_412' );
    dasmEntries.addImage( 0x7409, 0x28, 'img_413' );
    dasmEntries.addImage( 0x73e1, 0x28, 'img_414' );
    dasmEntries.addImage( 0x7452, 0x28, 'img_415' );
    dasmEntries.addImage( 0x7431, 0x28, 'img_416' );
    dasmEntries.addImage( 0x748f, 0x28, 'img_417' );
    dasmEntries.addImage( 0x7472, 0x28, 'img_418' );
    dasmEntries.addImage( 0x74c3, 0x28, 'img_419' );
    dasmEntries.addImage( 0x74a8, 0x28, 'img_41A' );
    dasmEntries.addImage( 0x750d, 0x28, 'img_41B' );
    dasmEntries.addImage( 0x74dd, 0x28, 'img_41C' );
    dasmEntries.addImage( 0x7578, 0x28, 'img_41D' );
    dasmEntries.addImage( 0x7530, 0x28, 'img_41E' );
    dasmEntries.addImage( 0x760f, 0x28, 'img_41F' );
    dasmEntries.addImage( 0x75b8, 0x28, 'img_420' );
    dasmEntries.addImage( 0x76a5, 0x28, 'img_421' );
    dasmEntries.addImage( 0x7663, 0x28, 'img_422' );
    dasmEntries.addImage( 0x770e, 0x28, 'img_423' );
    dasmEntries.addImage( 0x76e3, 0x28, 'img_424' );
    dasmEntries.addImage( 0x7762, 0x28, 'img_425' );
    dasmEntries.addImage( 0x7739, 0x28, 'img_426' );
    dasmEntries.addImage( 0x77af, 0x28, 'img_427' );
    dasmEntries.addImage( 0x7785, 0x28, 'img_428' );
    dasmEntries.addImage( 0x77fe, 0x28, 'img_429' );
    dasmEntries.addImage( 0x77d4, 0x28, 'img_42A' );
    dasmEntries.addImage( 0x7872, 0x28, 'img_42B' );
    dasmEntries.addImage( 0x7830, 0x28, 'img_42C' );
    dasmEntries.addImage( 0x78f9, 0x28, 'img_42D' );
    dasmEntries.addImage( 0x78b0, 0x28, 'img_42E' );
    dasmEntries.addImage( 0x7982, 0x28, 'img_42F' );
    dasmEntries.addImage( 0x793c, 0x28, 'img_430' );
    dasmEntries.addImage( 0x79f3, 0x28, 'img_431' );
    dasmEntries.addImage( 0x79ba, 0x28, 'img_432' );
    dasmEntries.addImage( 0x7a51, 0x28, 'img_433' );
    dasmEntries.addImage( 0x7a22, 0x28, 'img_434' );
    dasmEntries.addImage( 0x7aa3, 0x28, 'img_435' );
    dasmEntries.addImage( 0x7a7d, 0x28, 'img_436' );
    dasmEntries.addImage( 0x7aed, 0x28, 'img_437' );
    dasmEntries.addImage( 0x7ac7, 0x28, 'img_438' );
    dasmEntries.addImage( 0x7b40, 0x28, 'img_439' );
    dasmEntries.addImage( 0x7b11, 0x28, 'img_43A' );
    dasmEntries.addImage( 0x7bae, 0x28, 'img_43B' );
    dasmEntries.addImage( 0x7b6a, 0x28, 'img_43C' );
    dasmEntries.addImage( 0x7c43, 0x28, 'img_43D' );
    dasmEntries.addImage( 0x7bf0, 0x28, 'img_43E' );
    dasmEntries.addImage( 0x7cd0, 0x28, 'img_43F' );
    dasmEntries.addImage( 0x7c94, 0x28, 'img_440' );

    dasmEntries.addImage( 0x7e62, 0x28, 'img_563' );
    dasmEntries.addImage( 0x7d04, 0x28, 'img_564' );
    dasmEntries.addImage( 0x7f0c, 0x28, 'img_566' );

    dasmEntries.addImage( 0x7fc0, 0x28, 'img_5A7' );
    dasmEntries.addImage( 0x7fde, 0x28, 'img_5AF' );

}

function getDasmEntries_bnk_29( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x29, 'pageMarker_bnk_29', 1, 1 );

    // dasmEntries.addTable( 0x4001, 0x29, 'unknown', 1, 1 );
    // dasmEntries.addTableWpc( 0x4002, 0x29, 'tblwpc_bnk_2a_4002' );

    dasmEntries.addImage( 0x4001, 0x29, 'img_565' );
    dasmEntries.addImage( 0x4164, 0x29, 'img_567' );
    dasmEntries.addImage( 0x40a6, 0x29, 'img_568' );
    dasmEntries.addImage( 0x42f2, 0x29, 'img_569' );
    dasmEntries.addImage( 0x421e, 0x29, 'img_56A' );
    dasmEntries.addImage( 0x44b7, 0x29, 'img_56B' );
    dasmEntries.addImage( 0x43b9, 0x29, 'img_56C' );
    dasmEntries.addImage( 0x46bf, 0x29, 'img_56D' );
    dasmEntries.addImage( 0x45a1, 0x29, 'img_56E' );
    dasmEntries.addImage( 0x48d4, 0x29, 'img_56F' );
    dasmEntries.addImage( 0x47be, 0x29, 'img_570' );
    dasmEntries.addImage( 0x4ac2, 0x29, 'img_571' );
    dasmEntries.addImage( 0x49ca, 0x29, 'img_572' );
    dasmEntries.addImage( 0x4d55, 0x29, 'img_573' );
    dasmEntries.addImage( 0x4bb2, 0x29, 'img_574' );
    dasmEntries.addImage( 0x4ea5, 0x29, 'img_575' );
    dasmEntries.addImage( 0x4e63, 0x29, 'img_576' );
    dasmEntries.addImage( 0x4f3f, 0x29, 'img_577' );
    dasmEntries.addImage( 0x4ee9, 0x29, 'img_578' );
    dasmEntries.addImage( 0x4ff2, 0x29, 'img_579' );
    dasmEntries.addImage( 0x4f96, 0x29, 'img_57A' );
    dasmEntries.addImage( 0x50bb, 0x29, 'img_57B' );
    dasmEntries.addImage( 0x5050, 0x29, 'img_57C' );
    dasmEntries.addImage( 0x519f, 0x29, 'img_57D' );
    dasmEntries.addImage( 0x5126, 0x29, 'img_57E' );
    dasmEntries.addImage( 0x528e, 0x29, 'img_57F' );
    dasmEntries.addImage( 0x5218, 0x29, 'img_580' );
    dasmEntries.addImage( 0x5390, 0x29, 'img_581' );
    dasmEntries.addImage( 0x5302, 0x29, 'img_582' );
    dasmEntries.addImage( 0x54ab, 0x29, 'img_583' );
    dasmEntries.addImage( 0x5421, 0x29, 'img_584' );
    dasmEntries.addImage( 0x55ba, 0x29, 'img_585' );
    dasmEntries.addImage( 0x5538, 0x29, 'img_586' );
    dasmEntries.addImage( 0x56bd, 0x29, 'img_587' );
    dasmEntries.addImage( 0x563f, 0x29, 'img_588' );
    dasmEntries.addImage( 0x5795, 0x29, 'img_589' );
    dasmEntries.addImage( 0x5739, 0x29, 'img_58A' );
    dasmEntries.addImage( 0x5839, 0x29, 'img_58B' );
    dasmEntries.addImage( 0x57f3, 0x29, 'img_58C' );
    dasmEntries.addImage( 0x58b5, 0x29, 'img_58D' );
    dasmEntries.addImage( 0x587c, 0x29, 'img_58E' );
    dasmEntries.addImage( 0x59ff, 0x29, 'img_58F' );
    dasmEntries.addImage( 0x58f2, 0x29, 'img_590' );
    dasmEntries.addImage( 0x5a85, 0x29, 'img_591' );
    dasmEntries.addImage( 0x5a5b, 0x29, 'img_592' );
    dasmEntries.addImage( 0x5af9, 0x29, 'img_593' );
    dasmEntries.addImage( 0x5aaf, 0x29, 'img_594' );
    dasmEntries.addImage( 0x5b9e, 0x29, 'img_595' );
    dasmEntries.addImage( 0x5b43, 0x29, 'img_596' );
    dasmEntries.addImage( 0x5c46, 0x29, 'img_597' );
    dasmEntries.addImage( 0x5bf9, 0x29, 'img_598' );
    dasmEntries.addImage( 0x5cd6, 0x29, 'img_599' );
    dasmEntries.addImage( 0x5c93, 0x29, 'img_59A' );
    dasmEntries.addImage( 0x5d60, 0x29, 'img_59B' );
    dasmEntries.addImage( 0x5d19, 0x29, 'img_59C' );
    dasmEntries.addImage( 0x5dea, 0x29, 'img_59D' );
    dasmEntries.addImage( 0x5da6, 0x29, 'img_59E' );
    dasmEntries.addImage( 0x5e77, 0x29, 'img_59F' );
    dasmEntries.addImage( 0x5e31, 0x29, 'img_5A0' );
    dasmEntries.addImage( 0x5f09, 0x29, 'img_5A1' );
    dasmEntries.addImage( 0x5ebf, 0x29, 'img_5A2' );
    dasmEntries.addImage( 0x5f83, 0x29, 'img_5A3' );
    dasmEntries.addImage( 0x5f4c, 0x29, 'img_5A4' );
    dasmEntries.addImage( 0x5fe1, 0x29, 'img_5A5' );
    dasmEntries.addImage( 0x5fbc, 0x29, 'img_5A6' );
    dasmEntries.addImage( 0x600d, 0x29, 'img_5A8' );
    dasmEntries.addImage( 0x602e, 0x29, 'img_5A9' );
    dasmEntries.addImage( 0x6024, 0x29, 'img_5AA' );
    dasmEntries.addImage( 0x6203, 0x29, 'img_5AB' );
    dasmEntries.addImage( 0x6037, 0x29, 'img_5AC' );
    dasmEntries.addImage( 0x6353, 0x29, 'img_5AD' );
    dasmEntries.addImage( 0x633d, 0x29, 'img_5AE' );
    dasmEntries.addImage( 0x6368, 0x29, 'img_5B0' );
    dasmEntries.addImage( 0x63bd, 0x29, 'img_5B1' );
    dasmEntries.addImage( 0x638b, 0x29, 'img_5B2' );
    dasmEntries.addImage( 0x6426, 0x29, 'img_5B3' );
    dasmEntries.addImage( 0x63ef, 0x29, 'img_5B4' );
    dasmEntries.addImage( 0x649b, 0x29, 'img_5B5' );
    dasmEntries.addImage( 0x645e, 0x29, 'img_5B6' );
    dasmEntries.addImage( 0x6512, 0x29, 'img_5B7' );
    dasmEntries.addImage( 0x64d9, 0x29, 'img_5B8' );
    dasmEntries.addImage( 0x6577, 0x29, 'img_5B9' );
    dasmEntries.addImage( 0x654d, 0x29, 'img_5BA' );
    dasmEntries.addImage( 0x65c3, 0x29, 'img_5BB' );
    dasmEntries.addImage( 0x659d, 0x29, 'img_5BC' );
    dasmEntries.addImage( 0x6613, 0x29, 'img_5BD' );
    dasmEntries.addImage( 0x65eb, 0x29, 'img_5BE' );
    dasmEntries.addImage( 0x67e3, 0x29, 'img_5BF' );
    dasmEntries.addImage( 0x663c, 0x29, 'img_5C0' );
    dasmEntries.addImage( 0x6993, 0x29, 'img_5C1' );
    dasmEntries.addImage( 0x68e3, 0x29, 'img_5C2' );
    dasmEntries.addImage( 0x6b19, 0x29, 'img_5C3' );
    dasmEntries.addImage( 0x6a41, 0x29, 'img_5C4' );
    dasmEntries.addImage( 0x6db0, 0x29, 'img_5C5' );
    dasmEntries.addImage( 0x6bf0, 0x29, 'img_5C6' );
    dasmEntries.addImage( 0x70c6, 0x29, 'img_5C7' );
    dasmEntries.addImage( 0x6efe, 0x29, 'img_5C8' );
    dasmEntries.addImage( 0x7448, 0x29, 'img_5C9' );
    dasmEntries.addImage( 0x727e, 0x29, 'img_5CA' );
    dasmEntries.addImage( 0x77a7, 0x29, 'img_5CB' );
    dasmEntries.addImage( 0x7616, 0x29, 'img_5CC' );
    dasmEntries.addImage( 0x7928, 0x29, 'img_5CD' );
    dasmEntries.addImage( 0x7a13, 0x29, 'img_5CF' );
    dasmEntries.addImage( 0x79c7, 0x29, 'img_5D0' );
    dasmEntries.addImage( 0x7abc, 0x29, 'img_5D1' );
    dasmEntries.addImage( 0x7a5f, 0x29, 'img_5D2' );
    dasmEntries.addImage( 0x7b61, 0x29, 'img_5D3' );
    dasmEntries.addImage( 0x7b17, 0x29, 'img_5D4' );
    dasmEntries.addImage( 0x7ba9, 0x29, 'img_5D5' );
    dasmEntries.addImage( 0x7bd0, 0x29, 'img_5D7' );
    dasmEntries.addImage( 0x7bc7, 0x29, 'img_5D8' );
    dasmEntries.addImage( 0x7d51, 0x29, 'img_5D9' );
    dasmEntries.addImage( 0x7bdd, 0x29, 'img_5DA' );
    dasmEntries.addImage( 0x7e7f, 0x29, 'img_5DC' );
    dasmEntries.addImage( 0x7fa6, 0x29, 'img_5F3' );
    dasmEntries.addImage( 0x7ecf, 0x29, 'img_647' );

}

function getDasmEntries_bnk_2a( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x2a, 'pageMarker_bnk_2a', 1, 1 );
    dasmEntries.addImage( 0x7084, 0x2a, 'img_441' );
    dasmEntries.addImage( 0x7017, 0x2a, 'img_442' );
    dasmEntries.addImage( 0x7173, 0x2a, 'img_443' );
    dasmEntries.addImage( 0x70ef, 0x2a, 'img_444' );
    dasmEntries.addImage( 0x7266, 0x2a, 'img_445' );
    dasmEntries.addImage( 0x71ec, 0x2a, 'img_446' );
    dasmEntries.addImage( 0x7359, 0x2a, 'img_447' );
    dasmEntries.addImage( 0x72da, 0x2a, 'img_448' );
    dasmEntries.addImage( 0x7440, 0x2a, 'img_449' );
    dasmEntries.addImage( 0x73c2, 0x2a, 'img_44A' );
    dasmEntries.addImage( 0x7534, 0x2a, 'img_44B' );
    dasmEntries.addImage( 0x74b0, 0x2a, 'img_44C' );
    dasmEntries.addImage( 0x762c, 0x2a, 'img_44D' );
    dasmEntries.addImage( 0x75b3, 0x2a, 'img_44E' );
    dasmEntries.addImage( 0x771b, 0x2a, 'img_44F' );
    dasmEntries.addImage( 0x769b, 0x2a, 'img_450' );
    dasmEntries.addImage( 0x7810, 0x2a, 'img_451' );
    dasmEntries.addImage( 0x7792, 0x2a, 'img_452' );
    dasmEntries.addImage( 0x78ff, 0x2a, 'img_453' );
    dasmEntries.addImage( 0x7878, 0x2a, 'img_454' );
    dasmEntries.addImage( 0x79fc, 0x2a, 'img_455' );
    dasmEntries.addImage( 0x797a, 0x2a, 'img_456' );
    dasmEntries.addImage( 0x7af1, 0x2a, 'img_457' );
    dasmEntries.addImage( 0x7a70, 0x2a, 'img_458' );
    dasmEntries.addImage( 0x7be3, 0x2a, 'img_459' );
    dasmEntries.addImage( 0x7b64, 0x2a, 'img_45A' );
    dasmEntries.addImage( 0x7cd9, 0x2a, 'img_45B' );
    dasmEntries.addImage( 0x7c5b, 0x2a, 'img_45C' );
    dasmEntries.addImage( 0x7dc6, 0x2a, 'img_45D' );
    dasmEntries.addImage( 0x7d45, 0x2a, 'img_45E' );
    dasmEntries.addImage( 0x7eb2, 0x2a, 'img_45F' );
    dasmEntries.addImage( 0x7e34, 0x2a, 'img_460' );
    dasmEntries.addImage( 0x7f2c, 0x2a, 'img_462' );

    dasmEntries.addImage( 0x4001, 0x2a, 'img_5DB' );
    dasmEntries.addImage( 0x409c, 0x2a, 'img_5DD' );
    dasmEntries.addImage( 0x4055, 0x2a, 'img_5DE' );
    dasmEntries.addImage( 0x4120, 0x2a, 'img_5DF' );
    dasmEntries.addImage( 0x40e8, 0x2a, 'img_5E0' );
    dasmEntries.addImage( 0x4180, 0x2a, 'img_5E1' );
    dasmEntries.addImage( 0x415b, 0x2a, 'img_5E2' );
    dasmEntries.addImage( 0x41c7, 0x2a, 'img_5E3' );
    dasmEntries.addImage( 0x41a7, 0x2a, 'img_5E4' );
    dasmEntries.addImage( 0x43d7, 0x2a, 'img_5E5' );
    dasmEntries.addImage( 0x41eb, 0x2a, 'img_5E6' );
    dasmEntries.addImage( 0x45f7, 0x2a, 'img_5E7' );
    dasmEntries.addImage( 0x4574, 0x2a, 'img_5E8' );
    dasmEntries.addImage( 0x46fa, 0x2a, 'img_5E9' );
    dasmEntries.addImage( 0x4676, 0x2a, 'img_5EA' );
    dasmEntries.addImage( 0x47c4, 0x2a, 'img_5EB' );
    dasmEntries.addImage( 0x477a, 0x2a, 'img_5EC' );
    dasmEntries.addImage( 0x483f, 0x2a, 'img_5ED' );
    dasmEntries.addImage( 0x4812, 0x2a, 'img_5EE' );
    dasmEntries.addImage( 0x489d, 0x2a, 'img_5EF' );
    dasmEntries.addImage( 0x486b, 0x2a, 'img_5F0' );
    dasmEntries.addImage( 0x4abc, 0x2a, 'img_5F1' );
    dasmEntries.addImage( 0x48cb, 0x2a, 'img_5F2' );
    dasmEntries.addImage( 0x4c62, 0x2a, 'img_5F4' );
    dasmEntries.addImage( 0x4d28, 0x2a, 'img_5F5' );
    dasmEntries.addImage( 0x4cbd, 0x2a, 'img_5F6' );
    dasmEntries.addImage( 0x4e12, 0x2a, 'img_5F7' );
    dasmEntries.addImage( 0x4d93, 0x2a, 'img_5F8' );
    dasmEntries.addImage( 0x4f10, 0x2a, 'img_5F9' );
    dasmEntries.addImage( 0x4e90, 0x2a, 'img_5FA' );
    dasmEntries.addImage( 0x4ff7, 0x2a, 'img_5FB' );
    dasmEntries.addImage( 0x4f8d, 0x2a, 'img_5FC' );
    dasmEntries.addImage( 0x50fc, 0x2a, 'img_5FD' );
    dasmEntries.addImage( 0x505a, 0x2a, 'img_5FE' );
    dasmEntries.addImage( 0x5230, 0x2a, 'img_5FF' );
    dasmEntries.addImage( 0x5178, 0x2a, 'img_600' );
    dasmEntries.addImage( 0x5341, 0x2a, 'img_601' );
    dasmEntries.addImage( 0x528b, 0x2a, 'img_602' );
    dasmEntries.addImage( 0x544f, 0x2a, 'img_603' );
    dasmEntries.addImage( 0x5398, 0x2a, 'img_604' );
    dasmEntries.addImage( 0x5546, 0x2a, 'img_605' );
    dasmEntries.addImage( 0x549e, 0x2a, 'img_606' );
    dasmEntries.addImage( 0x5637, 0x2a, 'img_607' );
    dasmEntries.addImage( 0x5595, 0x2a, 'img_608' );
    dasmEntries.addImage( 0x5679, 0x2a, 'img_609' );
    dasmEntries.addImage( 0x5725, 0x2a, 'img_60B' );
    dasmEntries.addImage( 0x56ae, 0x2a, 'img_60C' );
    dasmEntries.addImage( 0x5758, 0x2a, 'img_60D' );
    dasmEntries.addImage( 0x57c5, 0x2a, 'img_60F' );
    dasmEntries.addImage( 0x57be, 0x2a, 'img_610' );
    dasmEntries.addImage( 0x583c, 0x2a, 'img_611' );
    dasmEntries.addImage( 0x5835, 0x2a, 'img_612' );
    dasmEntries.addImage( 0x58b6, 0x2a, 'img_613' );
    dasmEntries.addImage( 0x58af, 0x2a, 'img_614' );
    dasmEntries.addImage( 0x591f, 0x2a, 'img_615' );
    dasmEntries.addImage( 0x5918, 0x2a, 'img_616' );
    dasmEntries.addImage( 0x598c, 0x2a, 'img_617' );
    dasmEntries.addImage( 0x5985, 0x2a, 'img_618' );
    dasmEntries.addImage( 0x5a04, 0x2a, 'img_619' );
    dasmEntries.addImage( 0x59fd, 0x2a, 'img_61A' );
    dasmEntries.addImage( 0x5a79, 0x2a, 'img_61B' );
    dasmEntries.addImage( 0x5a72, 0x2a, 'img_61C' );
    dasmEntries.addImage( 0x5ae7, 0x2a, 'img_61D' );
    dasmEntries.addImage( 0x5ae0, 0x2a, 'img_61E' );
    dasmEntries.addImage( 0x5b59, 0x2a, 'img_61F' );
    dasmEntries.addImage( 0x5b52, 0x2a, 'img_620' );
    dasmEntries.addImage( 0x5bd8, 0x2a, 'img_621' );
    dasmEntries.addImage( 0x5bd1, 0x2a, 'img_622' );
    dasmEntries.addImage( 0x5c47, 0x2a, 'img_623' );
    dasmEntries.addImage( 0x5d76, 0x2a, 'img_625' );
    dasmEntries.addImage( 0x5cab, 0x2a, 'img_626' );
    dasmEntries.addImage( 0x5e0b, 0x2a, 'img_627' );
    dasmEntries.addImage( 0x5dfe, 0x2a, 'img_628' );
    dasmEntries.addImage( 0x5e44, 0x2a, 'img_629' );
    dasmEntries.addImage( 0x5e18, 0x2a, 'img_62A' );
    dasmEntries.addImage( 0x5ef6, 0x2a, 'img_62B' );
    dasmEntries.addImage( 0x5e67, 0x2a, 'img_62C' );
    dasmEntries.addImage( 0x6018, 0x2a, 'img_62D' );
    dasmEntries.addImage( 0x5f84, 0x2a, 'img_62E' );
    dasmEntries.addImage( 0x60e2, 0x2a, 'img_62F' );
    dasmEntries.addImage( 0x60a3, 0x2a, 'img_630' );
    dasmEntries.addImage( 0x6149, 0x2a, 'img_631' );
    dasmEntries.addImage( 0x611e, 0x2a, 'img_632' );
    dasmEntries.addImage( 0x61a0, 0x2a, 'img_633' );
    dasmEntries.addImage( 0x6179, 0x2a, 'img_634' );
    dasmEntries.addImage( 0x6259, 0x2a, 'img_635' );
    dasmEntries.addImage( 0x61c6, 0x2a, 'img_636' );
    dasmEntries.addImage( 0x6368, 0x2a, 'img_637' );
    dasmEntries.addImage( 0x62d7, 0x2a, 'img_638' );
    dasmEntries.addImage( 0x6493, 0x2a, 'img_639' );
    dasmEntries.addImage( 0x63f0, 0x2a, 'img_63A' );
    dasmEntries.addImage( 0x65d5, 0x2a, 'img_63B' );
    dasmEntries.addImage( 0x6512, 0x2a, 'img_63C' );
    dasmEntries.addImage( 0x6740, 0x2a, 'img_63D' );
    dasmEntries.addImage( 0x668b, 0x2a, 'img_63E' );
    dasmEntries.addImage( 0x690e, 0x2a, 'img_63F' );
    dasmEntries.addImage( 0x67f5, 0x2a, 'img_640' );
    dasmEntries.addImage( 0x6ae9, 0x2a, 'img_641' );
    dasmEntries.addImage( 0x6a05, 0x2a, 'img_642' );
    dasmEntries.addImage( 0x6ca6, 0x2a, 'img_643' );
    dasmEntries.addImage( 0x6bc4, 0x2a, 'img_644' );
    dasmEntries.addImage( 0x6e5e, 0x2a, 'img_645' );
    dasmEntries.addImage( 0x6d71, 0x2a, 'img_646' );
    dasmEntries.addImage( 0x6f38, 0x2a, 'img_648' );
    dasmEntries.addImage( 0x7fa9, 0x2a, 'img_64F' );
    dasmEntries.addImage( 0x7fc9, 0x2a, 'img_654' );


}

function getDasmEntries_bnk_2b( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x2b, 'pageMarker_bnk_2b', 1, 1 );
    dasmEntries.addTableWpc( 0x4001, 0x2b, 'tblwpc_bnk_2b_4001' );
    dasmEntries.addImage( 0x4001, 0x2b, 'img_461' );
    dasmEntries.addImage( 0x40e4, 0x2b, 'img_463' );
    dasmEntries.addImage( 0x4067, 0x2b, 'img_464' );
    dasmEntries.addImage( 0x41ce, 0x2b, 'img_465' );
    dasmEntries.addImage( 0x4150, 0x2b, 'img_466' );
    dasmEntries.addImage( 0x42b0, 0x2b, 'img_467' );
    dasmEntries.addImage( 0x4237, 0x2b, 'img_468' );
    dasmEntries.addImage( 0x4396, 0x2b, 'img_469' );
    dasmEntries.addImage( 0x431c, 0x2b, 'img_46A' );
    dasmEntries.addImage( 0x448a, 0x2b, 'img_46B' );
    dasmEntries.addImage( 0x440e, 0x2b, 'img_46C' );
    dasmEntries.addImage( 0x4582, 0x2b, 'img_46D' );
    dasmEntries.addImage( 0x4506, 0x2b, 'img_46E' );
    dasmEntries.addImage( 0x4673, 0x2b, 'img_46F' );
    dasmEntries.addImage( 0x45f5, 0x2b, 'img_470' );
    dasmEntries.addImage( 0x475e, 0x2b, 'img_471' );
    dasmEntries.addImage( 0x46e7, 0x2b, 'img_472' );
    dasmEntries.addImage( 0x484c, 0x2b, 'img_473' );
    dasmEntries.addImage( 0x47cb, 0x2b, 'img_474' );
    dasmEntries.addImage( 0x493f, 0x2b, 'img_475' );
    dasmEntries.addImage( 0x48bd, 0x2b, 'img_476' );
    dasmEntries.addImage( 0x4a26, 0x2b, 'img_477' );
    dasmEntries.addImage( 0x49aa, 0x2b, 'img_478' );
    dasmEntries.addImage( 0x4b02, 0x2b, 'img_479' );
    dasmEntries.addImage( 0x4a7e, 0x2b, 'img_47A' );
    dasmEntries.addImage( 0x4bfe, 0x2b, 'img_47B' );
    dasmEntries.addImage( 0x4b77, 0x2b, 'img_47C' );
    dasmEntries.addImage( 0x4cf0, 0x2b, 'img_47D' );
    dasmEntries.addImage( 0x4c72, 0x2b, 'img_47E' );
    dasmEntries.addImage( 0x4de6, 0x2b, 'img_47F' );
    dasmEntries.addImage( 0x4d64, 0x2b, 'img_480' );
    dasmEntries.addImage( 0x4ede, 0x2b, 'img_481' );
    dasmEntries.addImage( 0x4e5c, 0x2b, 'img_482' );
    dasmEntries.addImage( 0x4fd7, 0x2b, 'img_483' );
    dasmEntries.addImage( 0x4f5a, 0x2b, 'img_484' );
    dasmEntries.addImage( 0x50ce, 0x2b, 'img_485' );
    dasmEntries.addImage( 0x504b, 0x2b, 'img_486' );
    dasmEntries.addImage( 0x51c0, 0x2b, 'img_487' );
    dasmEntries.addImage( 0x5149, 0x2b, 'img_488' );
    dasmEntries.addImage( 0x52b7, 0x2b, 'img_489' );
    dasmEntries.addImage( 0x5231, 0x2b, 'img_48A' );
    dasmEntries.addImage( 0x53af, 0x2b, 'img_48B' );
    dasmEntries.addImage( 0x532e, 0x2b, 'img_48C' );
    dasmEntries.addImage( 0x5499, 0x2b, 'img_48D' );
    dasmEntries.addImage( 0x541d, 0x2b, 'img_48E' );
    dasmEntries.addImage( 0x5581, 0x2b, 'img_48F' );
    dasmEntries.addImage( 0x5502, 0x2b, 'img_490' );
    dasmEntries.addImage( 0x5677, 0x2b, 'img_491' );
    dasmEntries.addImage( 0x55fc, 0x2b, 'img_492' );
    dasmEntries.addImage( 0x5755, 0x2b, 'img_493' );
    dasmEntries.addImage( 0x56dd, 0x2b, 'img_494' );
    dasmEntries.addImage( 0x5847, 0x2b, 'img_495' );
    dasmEntries.addImage( 0x57ce, 0x2b, 'img_496' );
    dasmEntries.addImage( 0x5927, 0x2b, 'img_497' );
    dasmEntries.addImage( 0x58b0, 0x2b, 'img_498' );
    dasmEntries.addImage( 0x5a16, 0x2b, 'img_499' );
    dasmEntries.addImage( 0x599a, 0x2b, 'img_49A' );
    dasmEntries.addImage( 0x5b10, 0x2b, 'img_49B' );
    dasmEntries.addImage( 0x5a8d, 0x2b, 'img_49C' );
    dasmEntries.addImage( 0x5c03, 0x2b, 'img_49D' );
    dasmEntries.addImage( 0x5b7d, 0x2b, 'img_49E' );
    dasmEntries.addImage( 0x5cf8, 0x2b, 'img_49F' );
    dasmEntries.addImage( 0x5c7b, 0x2b, 'img_4A0' );
    dasmEntries.addImage( 0x5dec, 0x2b, 'img_4A1' );
    dasmEntries.addImage( 0x5d66, 0x2b, 'img_4A2' );
    dasmEntries.addImage( 0x5ee3, 0x2b, 'img_4A3' );
    dasmEntries.addImage( 0x5e67, 0x2b, 'img_4A4' );
    dasmEntries.addImage( 0x5fde, 0x2b, 'img_4A5' );
    dasmEntries.addImage( 0x5f5b, 0x2b, 'img_4A6' );
    dasmEntries.addImage( 0x60d4, 0x2b, 'img_4A7' );
    dasmEntries.addImage( 0x6050, 0x2b, 'img_4A8' );
    dasmEntries.addImage( 0x61bb, 0x2b, 'img_4A9' );
    dasmEntries.addImage( 0x6139, 0x2b, 'img_4AA' );
    dasmEntries.addImage( 0x62ad, 0x2b, 'img_4AB' );
    dasmEntries.addImage( 0x6229, 0x2b, 'img_4AC' );
    dasmEntries.addImage( 0x63a7, 0x2b, 'img_4AD' );
    dasmEntries.addImage( 0x6324, 0x2b, 'img_4AE' );
    dasmEntries.addImage( 0x649b, 0x2b, 'img_4AF' );
    dasmEntries.addImage( 0x641a, 0x2b, 'img_4B0' );
    dasmEntries.addImage( 0x6587, 0x2b, 'img_4B1' );
    dasmEntries.addImage( 0x6510, 0x2b, 'img_4B2' );
    dasmEntries.addImage( 0x6672, 0x2b, 'img_4B3' );
    dasmEntries.addImage( 0x65f3, 0x2b, 'img_4B4' );
    dasmEntries.addImage( 0x6764, 0x2b, 'img_4B5' );
    dasmEntries.addImage( 0x66e8, 0x2b, 'img_4B6' );
    dasmEntries.addImage( 0x6850, 0x2b, 'img_4B7' );
    dasmEntries.addImage( 0x67d3, 0x2b, 'img_4B8' );
    dasmEntries.addImage( 0x693c, 0x2b, 'img_4B9' );
    dasmEntries.addImage( 0x68ba, 0x2b, 'img_4BA' );
    dasmEntries.addImage( 0x6a31, 0x2b, 'img_4BB' );
    dasmEntries.addImage( 0x69b7, 0x2b, 'img_4BC' );
    dasmEntries.addImage( 0x6b2b, 0x2b, 'img_4BD' );
    dasmEntries.addImage( 0x6aa5, 0x2b, 'img_4BE' );
    dasmEntries.addImage( 0x6c24, 0x2b, 'img_4BF' );
    dasmEntries.addImage( 0x6ba1, 0x2b, 'img_4C0' );
    dasmEntries.addImage( 0x6d27, 0x2b, 'img_4C1' );
    dasmEntries.addImage( 0x6ca4, 0x2b, 'img_4C2' );
    dasmEntries.addImage( 0x6e0f, 0x2b, 'img_4C3' );
    dasmEntries.addImage( 0x6d95, 0x2b, 'img_4C4' );
    dasmEntries.addImage( 0x6ef5, 0x2b, 'img_4C5' );
    dasmEntries.addImage( 0x6e73, 0x2b, 'img_4C6' );
    dasmEntries.addImage( 0x6fe6, 0x2b, 'img_4C7' );
    dasmEntries.addImage( 0x6f66, 0x2b, 'img_4C8' );
    dasmEntries.addImage( 0x70c6, 0x2b, 'img_4C9' );
    dasmEntries.addImage( 0x704e, 0x2b, 'img_4CA' );
    dasmEntries.addImage( 0x71ae, 0x2b, 'img_4CB' );
    dasmEntries.addImage( 0x7131, 0x2b, 'img_4CC' );
    dasmEntries.addImage( 0x7295, 0x2b, 'img_4CD' );
    dasmEntries.addImage( 0x7217, 0x2b, 'img_4CE' );
    dasmEntries.addImage( 0x738c, 0x2b, 'img_4CF' );
    dasmEntries.addImage( 0x730c, 0x2b, 'img_4D0' );
    dasmEntries.addImage( 0x7478, 0x2b, 'img_4D1' );
    dasmEntries.addImage( 0x73f5, 0x2b, 'img_4D2' );
    dasmEntries.addImage( 0x7574, 0x2b, 'img_4D3' );
    dasmEntries.addImage( 0x74f3, 0x2b, 'img_4D4' );
    dasmEntries.addImage( 0x7672, 0x2b, 'img_4D5' );
    dasmEntries.addImage( 0x75f0, 0x2b, 'img_4D6' );
    dasmEntries.addImage( 0x7759, 0x2b, 'img_4D7' );
    dasmEntries.addImage( 0x76d7, 0x2b, 'img_4D8' );
    dasmEntries.addImage( 0x783e, 0x2b, 'img_4D9' );
    dasmEntries.addImage( 0x77c1, 0x2b, 'img_4DA' );
    dasmEntries.addImage( 0x7931, 0x2b, 'img_4DB' );
    dasmEntries.addImage( 0x78b2, 0x2b, 'img_4DC' );
    dasmEntries.addImage( 0x7a10, 0x2b, 'img_4DD' );
    dasmEntries.addImage( 0x799a, 0x2b, 'img_4DE' );
    dasmEntries.addImage( 0x7aef, 0x2b, 'img_4DF' );
    dasmEntries.addImage( 0x7a6f, 0x2b, 'img_4E0' );
    dasmEntries.addImage( 0x7bd9, 0x2b, 'img_4E1' );
    dasmEntries.addImage( 0x7b53, 0x2b, 'img_4E2' );
    dasmEntries.addImage( 0x7cce, 0x2b, 'img_4E3' );
    dasmEntries.addImage( 0x7c54, 0x2b, 'img_4E4' );
    dasmEntries.addImage( 0x7daa, 0x2b, 'img_4E5' );
    dasmEntries.addImage( 0x7d37, 0x2b, 'img_4E6' );
    dasmEntries.addImage( 0x7e90, 0x2b, 'img_4E7' );
    dasmEntries.addImage( 0x7e12, 0x2b, 'img_4E8' );
    dasmEntries.addImage( 0x7f03, 0x2b, 'img_4EA' );

    dasmEntries.addImage( 0x7f87, 0x2b, 'img_658' );
    dasmEntries.addImage( 0x7fc1, 0x2b, 'img_659' );

}

function getDasmEntries_bnk_2c( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x2c, 'pageMarker_bnk_2c', 1, 1 );
    dasmEntries.addImage( 0x4001, 0x2c, 'img_4E9' );
    dasmEntries.addImage( 0x40e5, 0x2c, 'img_4EB' );
    dasmEntries.addImage( 0x4065, 0x2c, 'img_4EC' );
    dasmEntries.addImage( 0x41db, 0x2c, 'img_4ED' );
    dasmEntries.addImage( 0x415a, 0x2c, 'img_4EE' );
    dasmEntries.addImage( 0x42d0, 0x2c, 'img_4EF' );
    dasmEntries.addImage( 0x424c, 0x2c, 'img_4F0' );
    dasmEntries.addImage( 0x43c6, 0x2c, 'img_4F1' );
    dasmEntries.addImage( 0x4344, 0x2c, 'img_4F2' );
    dasmEntries.addImage( 0x44c3, 0x2c, 'img_4F3' );
    dasmEntries.addImage( 0x443e, 0x2c, 'img_4F4' );
    dasmEntries.addImage( 0x45b7, 0x2c, 'img_4F5' );
    dasmEntries.addImage( 0x453b, 0x2c, 'img_4F6' );
    dasmEntries.addImage( 0x46a9, 0x2c, 'img_4F7' );
    dasmEntries.addImage( 0x462a, 0x2c, 'img_4F8' );
    dasmEntries.addImage( 0x4792, 0x2c, 'img_4F9' );
    dasmEntries.addImage( 0x471f, 0x2c, 'img_4FA' );
    dasmEntries.addImage( 0x4871, 0x2c, 'img_4FB' );
    dasmEntries.addImage( 0x47ee, 0x2c, 'img_4FC' );
    dasmEntries.addImage( 0x4972, 0x2c, 'img_4FD' );
    dasmEntries.addImage( 0x48eb, 0x2c, 'img_4FE' );
    dasmEntries.addImage( 0x4a69, 0x2c, 'img_4FF' );
    dasmEntries.addImage( 0x49ef, 0x2c, 'img_500' );
    dasmEntries.addImage( 0x4b5a, 0x2c, 'img_501' );
    dasmEntries.addImage( 0x4ad9, 0x2c, 'img_502' );
    dasmEntries.addImage( 0x4c4a, 0x2c, 'img_503' );
    dasmEntries.addImage( 0x4bcf, 0x2c, 'img_504' );
    dasmEntries.addImage( 0x4d24, 0x2c, 'img_505' );
    dasmEntries.addImage( 0x4ca9, 0x2c, 'img_506' );
    dasmEntries.addImage( 0x4e15, 0x2c, 'img_507' );
    dasmEntries.addImage( 0x4d97, 0x2c, 'img_508' );
    dasmEntries.addImage( 0x4ef2, 0x2c, 'img_509' );
    dasmEntries.addImage( 0x4e79, 0x2c, 'img_50A' );
    dasmEntries.addImage( 0x4fda, 0x2c, 'img_50B' );
    dasmEntries.addImage( 0x4f5e, 0x2c, 'img_50C' );
    dasmEntries.addImage( 0x50cc, 0x2c, 'img_50D' );
    dasmEntries.addImage( 0x5052, 0x2c, 'img_50E' );
    dasmEntries.addImage( 0x51bf, 0x2c, 'img_50F' );
    dasmEntries.addImage( 0x513b, 0x2c, 'img_510' );
    dasmEntries.addImage( 0x52b5, 0x2c, 'img_511' );
    dasmEntries.addImage( 0x5235, 0x2c, 'img_512' );
    dasmEntries.addImage( 0x53a8, 0x2c, 'img_513' );
    dasmEntries.addImage( 0x5328, 0x2c, 'img_514' );
    dasmEntries.addImage( 0x54a6, 0x2c, 'img_515' );
    dasmEntries.addImage( 0x5422, 0x2c, 'img_516' );
    dasmEntries.addImage( 0x5598, 0x2c, 'img_517' );
    dasmEntries.addImage( 0x5513, 0x2c, 'img_518' );
    dasmEntries.addImage( 0x5689, 0x2c, 'img_519' );
    dasmEntries.addImage( 0x560b, 0x2c, 'img_51A' );
    dasmEntries.addImage( 0x5780, 0x2c, 'img_51B' );
    dasmEntries.addImage( 0x56ff, 0x2c, 'img_51C' );
    dasmEntries.addImage( 0x5868, 0x2c, 'img_51D' );
    dasmEntries.addImage( 0x57ef, 0x2c, 'img_51E' );
    dasmEntries.addImage( 0x5949, 0x2c, 'img_51F' );
    dasmEntries.addImage( 0x58cf, 0x2c, 'img_520' );
    dasmEntries.addImage( 0x5a34, 0x2c, 'img_521' );
    dasmEntries.addImage( 0x59b5, 0x2c, 'img_522' );
    dasmEntries.addImage( 0x5b27, 0x2c, 'img_523' );
    dasmEntries.addImage( 0x5aaa, 0x2c, 'img_524' );
    dasmEntries.addImage( 0x5c1a, 0x2c, 'img_525' );
    dasmEntries.addImage( 0x5b9a, 0x2c, 'img_526' );
    dasmEntries.addImage( 0x5d19, 0x2c, 'img_527' );
    dasmEntries.addImage( 0x5c96, 0x2c, 'img_528' );
    dasmEntries.addImage( 0x5e15, 0x2c, 'img_529' );
    dasmEntries.addImage( 0x5d8f, 0x2c, 'img_52A' );
    dasmEntries.addImage( 0x5f08, 0x2c, 'img_52B' );
    dasmEntries.addImage( 0x5e84, 0x2c, 'img_52C' );
    dasmEntries.addImage( 0x5ffb, 0x2c, 'img_52D' );
    dasmEntries.addImage( 0x5f7b, 0x2c, 'img_52E' );
    dasmEntries.addImage( 0x60f1, 0x2c, 'img_52F' );
    dasmEntries.addImage( 0x6070, 0x2c, 'img_530' );
    dasmEntries.addImage( 0x61db, 0x2c, 'img_531' );
    dasmEntries.addImage( 0x615e, 0x2c, 'img_532' );
    dasmEntries.addImage( 0x62bf, 0x2c, 'img_533' );
    dasmEntries.addImage( 0x6244, 0x2c, 'img_534' );
    dasmEntries.addImage( 0x639a, 0x2c, 'img_535' );
    dasmEntries.addImage( 0x6327, 0x2c, 'img_536' );
    dasmEntries.addImage( 0x648a, 0x2c, 'img_537' );
    dasmEntries.addImage( 0x6409, 0x2c, 'img_538' );
    dasmEntries.addImage( 0x657f, 0x2c, 'img_539' );
    dasmEntries.addImage( 0x64fe, 0x2c, 'img_53A' );
    dasmEntries.addImage( 0x666a, 0x2c, 'img_53B' );
    dasmEntries.addImage( 0x65ed, 0x2c, 'img_53C' );
    dasmEntries.addImage( 0x6759, 0x2c, 'img_53D' );
    dasmEntries.addImage( 0x66da, 0x2c, 'img_53E' );
    dasmEntries.addImage( 0x684a, 0x2c, 'img_53F' );
    dasmEntries.addImage( 0x67d0, 0x2c, 'img_540' );
    dasmEntries.addImage( 0x693e, 0x2c, 'img_541' );
    dasmEntries.addImage( 0x68be, 0x2c, 'img_542' );
    dasmEntries.addImage( 0x6a37, 0x2c, 'img_543' );
    dasmEntries.addImage( 0x69b0, 0x2c, 'img_544' );
    dasmEntries.addImage( 0x6b2e, 0x2c, 'img_545' );
    dasmEntries.addImage( 0x6aaf, 0x2c, 'img_546' );
    dasmEntries.addImage( 0x6c1b, 0x2c, 'img_547' );
    dasmEntries.addImage( 0x6b9e, 0x2c, 'img_548' );
    dasmEntries.addImage( 0x6d06, 0x2c, 'img_549' );
    dasmEntries.addImage( 0x6c88, 0x2c, 'img_54A' );
    dasmEntries.addImage( 0x6dfd, 0x2c, 'img_54B' );
    dasmEntries.addImage( 0x6d77, 0x2c, 'img_54C' );
    dasmEntries.addImage( 0x6eec, 0x2c, 'img_54D' );
    dasmEntries.addImage( 0x6e77, 0x2c, 'img_54E' );
    dasmEntries.addImage( 0x6fc7, 0x2c, 'img_54F' );
    dasmEntries.addImage( 0x6f4a, 0x2c, 'img_550' );
    dasmEntries.addImage( 0x70bf, 0x2c, 'img_551' );
    dasmEntries.addImage( 0x703d, 0x2c, 'img_552' );
    dasmEntries.addImage( 0x71c1, 0x2c, 'img_553' );
    dasmEntries.addImage( 0x713f, 0x2c, 'img_554' );
    dasmEntries.addImage( 0x72b9, 0x2c, 'img_555' );
    dasmEntries.addImage( 0x723a, 0x2c, 'img_556' );
    dasmEntries.addImage( 0x73ab, 0x2c, 'img_557' );
    dasmEntries.addImage( 0x7327, 0x2c, 'img_558' );
    dasmEntries.addImage( 0x749d, 0x2c, 'img_559' );
    dasmEntries.addImage( 0x7417, 0x2c, 'img_55A' );
    dasmEntries.addImage( 0x758f, 0x2c, 'img_55B' );
    dasmEntries.addImage( 0x7513, 0x2c, 'img_55C' );
    dasmEntries.addImage( 0x767a, 0x2c, 'img_55D' );
    dasmEntries.addImage( 0x75fd, 0x2c, 'img_55E' );

    dasmEntries.addImage( 0x76e5, 0x2c, 'img_651' );
    dasmEntries.addImage( 0x770f, 0x2c, 'img_652' );
    dasmEntries.addImage( 0x7739, 0x2c, 'img_668' );
    dasmEntries.addImage( 0x7886, 0x2c, 'img_669' );
    dasmEntries.addImage( 0x79ac, 0x2c, 'img_66A' );
    dasmEntries.addImage( 0x7b10, 0x2c, 'img_66B' );
    dasmEntries.addImage( 0x7c17, 0x2c, 'img_66C' );
    dasmEntries.addImage( 0x7d3c, 0x2c, 'img_66D' );
    dasmEntries.addImage( 0x7ec5, 0x2c, 'img_66E' );
}

function getDasmEntries_bnk_2d( dasmEntries ) {

    dasmEntries.addTable( 0x4000, 0x2D, 'pageMarker_bnk_2D', 1, 1 );
    // dasmEntries.addTableWpc( 0x4001, 0x2D, 'tblwpc_bnk_2D_4001' );

    dasmEntries.addImage( 0x4077, 0x2d, 'img_55F' );
    dasmEntries.addImage( 0x4001, 0x2d, 'img_560' );
    dasmEntries.addImage( 0x4166, 0x2d, 'img_561' );
    dasmEntries.addImage( 0x40e4, 0x2d, 'img_562' );

    dasmEntries.addImage( 0x41d1, 0x2d, 'img_650' );
    dasmEntries.addImage( 0x41ff, 0x2d, 'img_653' );
    dasmEntries.addImage( 0x4232, 0x2d, 'img_655' );
    dasmEntries.addImage( 0x425f, 0x2d, 'img_656' );
    dasmEntries.addImage( 0x4299, 0x2d, 'img_657' );

    dasmEntries.addBankLabel( 0x4494, 0x2d );
    dasmEntries.addBankLabel( 0x449E, 0x2d, 'bnk_2d_449E' );
    dasmEntries.addBankLabel( 0x44D1, 0x2d, 'goalIsLit_IN_THE_PAINT' );

    dasmEntries.addBankLabel( 0x450F, 0x2d, 'bnk_2d_450F' );
    dasmEntries.addBankLabel( 0x4542, 0x2d, 'bnk_2d_4542' );
    dasmEntries.addBankLabel( 0x4571, 0x2d, 'bnk_2d_4571' );
    dasmEntries.addBankLabel( 0x45F4, 0x2d, 'bnk_2d_45F4' );

    dasmEntries.addBankLabel( 0x4612, 0x2d );
    dasmEntries.addBankLabel( 0x461C, 0x2d, 'bnk_2d_461C' );
    dasmEntries.addBankLabel( 0x464F, 0x2d, 'bnk_2d_464F' );
    dasmEntries.addBankLabel( 0x468D, 0x2d, 'bnk_2d_468D' );
    dasmEntries.addBankLabel( 0x46BE, 0x2d, 'bnk_2d_46BE' );
    dasmEntries.addBankLabel( 0x46E0, 0x2d, 'bnk_2d_46E0' );
    dasmEntries.addBankLabel( 0x47A3, 0x2d, 'bnk_2d_47A3' );
    dasmEntries.addBankLabel( 0x47C1, 0x2d, 'bnk_2d_47C1' );
    dasmEntries.addBankLabel( 0x47F9, 0x2d, 'bnk_2d_47F9' );
    dasmEntries.addBankLabel( 0x4833, 0x2d, 'bnk_2d_4833' );
    dasmEntries.addBankLabel( 0x4839, 0x2d, 'bnk_2d_4839' );
    dasmEntries.addBankLabel( 0x483F, 0x2d, 'bnk_2d_483F' );
    dasmEntries.addBankLabel( 0x4845, 0x2d, 'bnk_2d_4845' );
    dasmEntries.addBankLabel( 0x486C, 0x2d, 'bnk_2d_486C' );
    dasmEntries.addBankLabel( 0x48F2, 0x2d, 'bnk_2d_48F2' );
    dasmEntries.addBankLabel( 0x4910, 0x2d, 'bnk_2d_4910' );
    dasmEntries.addBankLabel( 0x492E, 0x2d, 'bnk_2d_492E' );
    dasmEntries.addBankLabel( 0x4954, 0x2d, 'bnk_2d_4954' );
    dasmEntries.addBankLabel( 0x49D6, 0x2d, 'bnk_2d_49D6' );
    dasmEntries.addBankLabel( 0x4A50, 0x2d, 'bnk_2d_4A50' );
    dasmEntries.addBankLabel( 0x4ACA, 0x2d, 'bnk_2d_4ACA' );
    dasmEntries.addBankLabel( 0x4B4C, 0x2d, 'bnk_2d_4B4C' );
    dasmEntries.addBankLabel( 0x4BC2, 0x2d, 'bnk_2d_4BC2' );
    dasmEntries.addBankLabel( 0x4C21, 0x2d, 'bnk_2d_4C21' );
    dasmEntries.addBankLabel( 0x4C80, 0x2d, 'bnk_2d_4C80' );
    dasmEntries.addBankLabel( 0x4CD3, 0x2d, 'bnk_2d_4CD3' );
    dasmEntries.addBankLabel( 0x4CF4, 0x2d, 'bnk_2d_4CF4' );
    dasmEntries.addBankLabel( 0x4CFF, 0x2d, 'bnk_2d_4CFF' );
    dasmEntries.addBankLabel( 0x4D34, 0x2d, 'bnk_2d_4D34' );
    dasmEntries.addBankLabel( 0x4D69, 0x2d, 'bnk_2d_4D69' );
    dasmEntries.addBankLabel( 0x4E09, 0x2d, 'bnk_2d_4E09' );
    dasmEntries.addBankLabel( 0x4E1E, 0x2d, 'bnk_2d_4E1E' );
    dasmEntries.addBankLabel( 0x4E3A, 0x2d, 'bnk_2d_4E3A' );
    dasmEntries.addBankLabel( 0x4E4A, 0x2d, 'bnk_2d_4E4A' );
    dasmEntries.addBankLabel( 0x4E63, 0x2d, 'bnk_2d_4E63' );
    dasmEntries.addBankLabel( 0x4E94, 0x2d, 'bnk_2d_4E94' );
    dasmEntries.addBankLabel( 0x4EC5, 0x2d, 'bnk_2d_4EC5' );
    dasmEntries.addBankLabel( 0x4ED8, 0x2d, 'bnk_2d_4ED8' );
    dasmEntries.addBankLabel( 0x4EE8, 0x2d, 'bnk_2d_4EE8' );
    dasmEntries.addBankLabel( 0x4F19, 0x2d, 'bnk_2d_4F19' );
    dasmEntries.addBankLabel( 0x4F2E, 0x2d, 'bnk_2d_4F2E' );
    dasmEntries.addBankLabel( 0x4F61, 0x2d, 'bnk_2d_4F61' );
    
    dasmEntries.addTable( 0x52ea, 0x2D, 'idxParameters', 4, 1 );
    dasmEntries.addBankLabel( 0x573b, 0x2d );
    dasmEntries.addBankLabel( 0x5a3c, 0x2d );
    dasmEntries.addBankLabel( 0x5cfe, 0x2d );
    dasmEntries.addBankLabel( 0x5fae, 0x2d );

    dasmEntries.addBankLabel( 0x5059, 0x2d, 'bnk_2d_5059' );
    dasmEntries.addBankLabel( 0x50BE, 0x2d, 'bnk_2d_50BE' );
    dasmEntries.addBankLabel( 0x50D0, 0x2d, 'bnk_2d_50D0' );
    dasmEntries.addBankLabel( 0x50F3, 0x2d, 'bnk_2d_50F3' );
    dasmEntries.addBankLabel( 0x5139, 0x2d, 'bnk_2d_5139' );
    dasmEntries.addBankLabel( 0x5183, 0x2d, 'bnk_2d_5183' );
    dasmEntries.addBankLabel( 0x5222, 0x2d, 'bnk_2d_5222' );
    dasmEntries.addBankLabel( 0x528B, 0x2d, 'bnk_2d_528B' );
    dasmEntries.addBankLabel( 0x52A8, 0x2d, 'bnk_2d_52A8' );
    dasmEntries.addBankLabel( 0x52BE, 0x2d, 'bnk_2d_52BE' );
    dasmEntries.addBankLabel( 0x52EE, 0x2d, 'bnk_2d_52EE' );
    dasmEntries.addBankLabel( 0x5303, 0x2d, 'bnk_2d_5303' );
    dasmEntries.addBankLabel( 0x531C, 0x2d, 'bnk_2d_531C' );
    dasmEntries.addBankLabel( 0x5331, 0x2d, 'bnk_2d_5331' );
    dasmEntries.addBankLabel( 0x5344, 0x2d, 'bnk_2d_5344' );
    dasmEntries.addBankLabel( 0x536B, 0x2d, 'bnk_2d_536B' );
    dasmEntries.addBankLabel( 0x537E, 0x2d, 'bnk_2d_537E' );
    dasmEntries.addBankLabel( 0x5393, 0x2d, 'bnk_2d_5393' );
    dasmEntries.addBankLabel( 0x53A6, 0x2d, 'bnk_2d_53A6' );
    dasmEntries.addBankLabel( 0x53CD, 0x2d, 'bnk_2d_53CD' );
    dasmEntries.addBankLabel( 0x53DB, 0x2d, 'bnk_2d_53DB' );
    dasmEntries.addBankLabel( 0x53F9, 0x2d, 'bnk_2d_53F9' );
    dasmEntries.addBankLabel( 0x541F, 0x2d, 'bnk_2d_541F' );
    dasmEntries.addBankLabel( 0x543C, 0x2d, 'bnk_2d_543C' );
    dasmEntries.addBankLabel( 0x5459, 0x2d, 'bnk_2d_5459' );
    dasmEntries.addBankLabel( 0x5465, 0x2d, 'bnk_2d_5465' );
    dasmEntries.addBankLabel( 0x54B0, 0x2d, 'bnk_2d_54B0' );
    dasmEntries.addBankLabel( 0x54FB, 0x2d, 'bnk_2d_54FB' );
    dasmEntries.addBankLabel( 0x5509, 0x2d, 'bnk_2d_5509' );
    dasmEntries.addBankLabel( 0x5516, 0x2d, 'bnk_2d_5516' );
    dasmEntries.addBankLabel( 0x552B, 0x2d, 'bnk_2d_552B' );
    dasmEntries.addBankLabel( 0x556F, 0x2d, 'bnk_2d_556F' );
    dasmEntries.addBankLabel( 0x5576, 0x2d, 'bnk_2d_5576' );
    dasmEntries.addBankLabel( 0x557D, 0x2d, 'bnk_2d_557D' );
    dasmEntries.addBankLabel( 0x5591, 0x2d, 'bnk_2d_5591' );
    dasmEntries.addBankLabel( 0x55A5, 0x2d, 'bnk_2d_55A5' );
    dasmEntries.addBankLabel( 0x55B0, 0x2d, 'bnk_2d_55B0' );
    dasmEntries.addBankLabel( 0x55C3, 0x2d, 'bnk_2d_55C3' );
    dasmEntries.addBankLabel( 0x55C7, 0x2d, 'bnk_2d_55C7' );
    dasmEntries.addBankLabel( 0x55D3, 0x2d, 'bnk_2d_55D3' );
    dasmEntries.addBankLabel( 0x55E0, 0x2d, 'bnk_2d_55E0' );
    dasmEntries.addBankLabel( 0x55F8, 0x2d, 'bnk_2d_55F8' );
    dasmEntries.addBankLabel( 0x560E, 0x2d, 'bnk_2d_560E' );
    dasmEntries.addBankLabel( 0x5623, 0x2d, 'bnk_2d_5623' );
    dasmEntries.addBankLabel( 0x5666, 0x2d, 'bnk_2d_5666' );
    dasmEntries.addBankLabel( 0x569C, 0x2d, 'bnk_2d_569C' );
    dasmEntries.addBankLabel( 0x56CB, 0x2d, 'bnk_2d_56CB' );
    dasmEntries.addBankLabel( 0x56DA, 0x2d, 'bnk_2d_56DA' );
    dasmEntries.addBankLabel( 0x5753, 0x2d, 'bnk_2d_5753' );
    dasmEntries.addBankLabel( 0x5757, 0x2d, 'bnk_2d_5757' );
    dasmEntries.addBankLabel( 0x57C9, 0x2d, 'bnk_2d_57C9' );
    dasmEntries.addBankLabel( 0x57DE, 0x2d, 'bnk_2d_57DE' );
    dasmEntries.addBankLabel( 0x580E, 0x2d, 'bnk_2d_580E' );
    dasmEntries.addBankLabel( 0x5810, 0x2d, 'bnk_2d_5810' );
    dasmEntries.addBankLabel( 0x5897, 0x2d, 'bnk_2d_5897' );
    dasmEntries.addBankLabel( 0x58CD, 0x2d, 'bnk_2d_58CD' );
    dasmEntries.addBankLabel( 0x595D, 0x2d, 'bnk_2d_595D' );
    dasmEntries.addBankLabel( 0x599F, 0x2d, 'bnk_2d_599F' );
    dasmEntries.addBankLabel( 0x59E4, 0x2d, 'bnk_2d_59E4' );
    dasmEntries.addBankLabel( 0x5A4B, 0x2d, 'bnk_2d_5A4B' );
    dasmEntries.addBankLabel( 0x5AC3, 0x2d, 'bnk_2d_5AC3' );
    dasmEntries.addBankLabel( 0x5AD8, 0x2d, 'bnk_2d_5AD8' );
    dasmEntries.addBankLabel( 0x5B08, 0x2d, 'bnk_2d_5B08' );
    dasmEntries.addBankLabel( 0x5B48, 0x2d, 'bnk_2d_5B48' );
    dasmEntries.addBankLabel( 0x5BAE, 0x2d, 'bnk_2d_5BAE' );
    dasmEntries.addBankLabel( 0x5BE4, 0x2d, 'bnk_2d_5BE4' );
    dasmEntries.addBankLabel( 0x5C4C, 0x2d, 'bnk_2d_5C4C' );
    dasmEntries.addBankLabel( 0x5C8B, 0x2d, 'bnk_2d_5C8B' );
    dasmEntries.addBankLabel( 0x5D11, 0x2d, 'bnk_2d_5D11' );
    dasmEntries.addBankLabel( 0x5D83, 0x2d, 'bnk_2d_5D83' );
    dasmEntries.addBankLabel( 0x5D98, 0x2d, 'bnk_2d_5D98' );
    dasmEntries.addBankLabel( 0x5DC8, 0x2d, 'bnk_2d_5DC8' );
    dasmEntries.addBankLabel( 0x5E08, 0x2d, 'bnk_2d_5E08' );
    dasmEntries.addBankLabel( 0x5E55, 0x2d, 'bnk_2d_5E55' );
    dasmEntries.addBankLabel( 0x5E8B, 0x2d, 'bnk_2d_5E8B' );
    dasmEntries.addBankLabel( 0x5F20, 0x2d, 'bnk_2d_5F20' );
    dasmEntries.addBankLabel( 0x5F52, 0x2d, 'bnk_2d_5F52' );
    dasmEntries.addBankLabel( 0x5FBD, 0x2d, 'bnk_2d_5FBD' );

    dasmEntries.addBankLabel( 0x601B, 0x2d, 'bnk_2d_601B' );
    dasmEntries.addBankLabel( 0x6030, 0x2d, 'bnk_2d_6030' );
    dasmEntries.addBankLabel( 0x6060, 0x2d, 'bnk_2d_6060' );
    dasmEntries.addBankLabel( 0x60A0, 0x2d, 'bnk_2d_60A0' );
    dasmEntries.addBankLabel( 0x610C, 0x2d, 'bnk_2d_610C' );
    dasmEntries.addBankLabel( 0x6142, 0x2d, 'bnk_2d_6142' );
    dasmEntries.addBankLabel( 0x6183, 0x2d, 'bnk_2d_6183' );
    dasmEntries.addBankLabel( 0x6197, 0x2d, 'bnk_2d_6197' );
    dasmEntries.addBankLabel( 0x61AB, 0x2d, 'bnk_2d_61AB' );
    dasmEntries.addBankLabel( 0x61BF, 0x2d, 'bnk_2d_61BF' );
    dasmEntries.addBankLabel( 0x621C, 0x2d, 'bnk_2d_621C' );
    dasmEntries.addBankLabel( 0x6260, 0x2d, 'bnk_2d_6260' );
    dasmEntries.addBankLabel( 0x62B0, 0x2d, 'bnk_2d_62B0' );
    dasmEntries.addBankLabel( 0x62F8, 0x2d, 'bnk_2d_62F8' );
    dasmEntries.addTableStrings( 0x634b, 0x2D, 'tblStrings-TeamsPlayers', 0x9d1 );

    dasmEntries.addTableWpc( 0x6d20, 0x2d, 'tblwpc_bnk_2d_6d20' );

    dasmEntries.addBankLabel( 0x71F6, 0x2d, 'bnk_2d_71F6' );
    dasmEntries.addBankLabel( 0x7238, 0x2d, 'bnk_2d_7238' );
    dasmEntries.addBankLabel( 0x7239, 0x2d, 'bnk_2d_7239' );
    dasmEntries.addBankLabel( 0x728D, 0x2d, 'bnk_2d_728D' );
    dasmEntries.addBankLabel( 0x72AC, 0x2d, 'bnk_2d_72AC' );

    dasmEntries.addBankLabel( 0x72F6, 0x2d, 'bnk_2d_72F6' );
    dasmEntries.addBankLabel( 0x731E, 0x2d, 'bnk_2d_731E' );
    dasmEntries.addBankLabel( 0x7342, 0x2d, 'bnk_2d_7342' );
    dasmEntries.addBankLabel( 0x736C, 0x2d, 'bnk_2d_736C' );
    dasmEntries.addBankLabel( 0x74FB, 0x2d, 'bnk_2d_74FB' );
    dasmEntries.addBankLabel( 0x751A, 0x2d, 'bnk_2d_751A' );
    dasmEntries.addBankLabel( 0x7529, 0x2d, 'bnk_2d_7529' );
    dasmEntries.addBankLabel( 0x7541, 0x2d, 'bnk_2d_7541' );
    dasmEntries.addBankLabel( 0x755E, 0x2d, 'bnk_2d_755E' );
    dasmEntries.addBankLabel( 0x7571, 0x2d, 'bnk_2d_7571' );
    dasmEntries.addBankLabel( 0x75CF, 0x2d, 'bnk_2d_75CF' );
    dasmEntries.addBankLabel( 0x766E, 0x2d, 'bnk_2d_766E' );
    dasmEntries.addBankLabel( 0x776F, 0x2d, 'bnk_2d_776F' );
    dasmEntries.addBankLabel( 0x7794, 0x2d, 'bnk_2d_7794' );
    dasmEntries.addBankLabel( 0x77B0, 0x2d, 'bnk_2d_77B0' );
    dasmEntries.addBankLabel( 0x77EB, 0x2d, 'bnk_2d_77EB' );
    dasmEntries.addBankLabel( 0x7841, 0x2d, 'bnk_2d_7841' );
    dasmEntries.addBankLabel( 0x7928, 0x2d, 'bnk_2d_7928' );
    dasmEntries.addBankLabel( 0x7A56, 0x2d, 'bnk_2d_7A56' );
    dasmEntries.addBankLabel( 0x7BFC, 0x2d, 'bnk_2d_7BFC' );
    dasmEntries.addBankLabel( 0x7C0B, 0x2d, 'bnk_2d_7C0B' );
    dasmEntries.addBankLabel( 0x7CAB, 0x2d, 'bnk_2d_7CAB' );
    dasmEntries.addBankLabel( 0x7CD4, 0x2d, 'bnk_2d_7CD4' );
    dasmEntries.addBankLabel( 0x7CED, 0x2d, 'bnk_2d_7CED' );
    dasmEntries.addBankLabel( 0x7D05, 0x2d, 'bnk_2d_7D05' );
    dasmEntries.addBankLabel( 0x7D17, 0x2d, 'bnk_2d_7D17' );
    dasmEntries.addBankLabel( 0x7D29, 0x2d, 'bnk_2d_7D29' );
    dasmEntries.addBankLabel( 0x7D46, 0x2d, 'bnk_2d_7D46' );
    dasmEntries.addBankLabel( 0x7D56, 0x2d, 'bnk_2d_7D56' );
    dasmEntries.addBankLabel( 0x7D66, 0x2d, 'bnk_2d_7D66' );
    dasmEntries.addBankLabel( 0x7D83, 0x2d, 'bnk_2d_7D83' );
    dasmEntries.addBankLabel( 0x7DA0, 0x2d, 'bnk_2d_7DA0' );
    dasmEntries.addBankLabel( 0x7DBA, 0x2d, 'bnk_2d_7DBA' );
    dasmEntries.addBankLabel( 0x7DDE, 0x2d, 'bnk_2d_7DDE' );
    dasmEntries.addBankLabel( 0x7DFC, 0x2d, 'bnk_2d_7DFC' );
    dasmEntries.addBankLabel( 0x7E12, 0x2d, 'bnk_2d_7E12' );
    dasmEntries.addBankLabel( 0x7E24, 0x2d, 'bnk_2d_7E24' );
    dasmEntries.addBankLabel( 0x7E3A, 0x2d, 'bnk_2d_7E3A' );
    dasmEntries.addBankLabel( 0x7E4A, 0x2d, 'bnk_2d_7E4A' );
    dasmEntries.addBankLabel( 0x7E5A, 0x2d, 'bnk_2d_7E5A' );
    dasmEntries.addBankLabel( 0x7E66, 0x2d, 'bnk_2d_7E66' );
    dasmEntries.addBankLabel( 0x7E88, 0x2d, 'bnk_2d_7E88' );
    dasmEntries.addBankLabel( 0x7EA6, 0x2d, 'bnk_2d_7EA6' );
    dasmEntries.addBankLabel( 0x7EB2, 0x2d, 'bnk_2d_7EB2' );
    dasmEntries.addBankLabel( 0x7EBF, 0x2d, 'bnk_2d_7EBF' );
    dasmEntries.addBankLabel( 0x7ECC, 0x2d, 'bnk_2d_7ECC' );
    dasmEntries.addBankLabel( 0x7ED9, 0x2d, 'bnk_2d_7ED9' );
    dasmEntries.addBankLabel( 0x7F09, 0x2d, 'bnk_2d_7F09' );
    dasmEntries.addBankLabel( 0x7F15, 0x2d, 'bnk_2d_7F15' );
    dasmEntries.addBankLabel( 0x7F21, 0x2d, 'bnk_2d_7F21' );
    dasmEntries.addBankLabel( 0x7F2D, 0x2d, 'bnk_2d_7F2D' );
    dasmEntries.addBankLabel( 0x7F39, 0x2d, 'bnk_2d_7F39' );
    dasmEntries.addBankLabel( 0x7F4F, 0x2d, 'bnk_2d_7F4F' );
    dasmEntries.addBankLabel( 0x7F5B, 0x2d, 'bnk_2d_7F5B' );
    dasmEntries.addBankLabel( 0x7F67, 0x2d, 'bnk_2d_7F67' );
    dasmEntries.addBankLabel( 0x7F73, 0x2d, 'bnk_2d_7F73' );
    dasmEntries.addBankLabel( 0x7F7F, 0x2d, 'bnk_2d_7F7F' );
    dasmEntries.addTable( 0x7FF8, 0x2d, 'filler', 1, 8 );

}

function getDasmEntries_bnk_2e( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x2E, 'pageMarker_bnk_2e', 1, 1 );
    dasmEntries.addTable( 0x4001, 0x2E, 'tblNumberOfEntries', 1, 2 );
    dasmEntries.addTable( 0x4003, 0x2E, 'tbl_4003_bnk_2e', 0x106, 4 );
    dasmEntries.addTable( 0x441B, 0x2E, 'tbl_441B_bnk_2e', 0x106, 4 );
    dasmEntries.addTable( 0x4833, 0x2E, 'tbl_4833_bnk_2e', 0x28, 4 );
    dasmEntries.addTable( 0x48D3, 0x2E, 'tbl_48D3_bnk_2e', 1, 5 );
    dasmEntries.addTable( 0x48D8, 0x2E, 'tbl_DMX_Images', 1647, 3 );

    dasmEntries.addTableWpc( 0x5c25, 0x2E, 'tblWpc2Byte' );
    dasmEntries.addTableWpc( 0x5c6a, 0x2E, 'tblWpc2Byte-another' );

    dasmEntries.addTableWpc( 0x5c7b, 0x2E, 'tblWpc3Byte' );
    dasmEntries.addTableWpc( 0x5cAE, 0x2E, 'tblWpc_TaskCallbacks_11byte' );
    dasmEntries.addTableWpc( 0x6084, 0x2E, 'tblWpc_TaskCallbacks_11byte_again' );
    dasmEntries.addTableWpc( 0x60EA, 0x2E, 'tblWpc1byte_again' );
    dasmEntries.addTableWpc( 0x612E, 0x2E, 'tblWpc1byte_another' );
    dasmEntries.addTableWpc( 0x6172, 0x2E, 'tblWpc5byte' );
    dasmEntries.addTableWpc( 0x617A, 0x2E, 'tblWpc2byte' );
    dasmEntries.addTableWpc( 0x61AF, 0x2E, 'tblWpc2byte-again' );
    dasmEntries.addTableWpc( 0x61C0, 0x2E, 'tblWpc4byte' );
    dasmEntries.addTableWpc( 0x62eb, 0x2E, 'SoundCallTable' );
    dasmEntries.addTable( 0x6588, 0x2E, 'tbl_6588_bnk_2e', 16, 7 );
    dasmEntries.addTable( 0x65F9, 0x2E, 'tbl_65F9_bnk_2e', 1, 3 );
    dasmEntries.addTable( 0x66C9, 0x2E, 'tbl_66C9_bnk_2e', 1, 3 );
    dasmEntries.addTable( 0x66D7, 0x2E, 'tbl_66D7_bnk_2e', 16, 3 );
    dasmEntries.addTable( 0x6710, 0x2E, 'tbl_66C9_bnk_2e-end', 1, 1 );
    dasmEntries.addTableWpc( 0x6767, 0x2E, 'tblWpc8Byte' );

    dasmEntries.addBankLabel( 0x678A, 0x2e, 'bnk_2e_678A' );
    dasmEntries.addBankLabel( 0x6799, 0x2e, 'bnk_2e_6799' );
    dasmEntries.addBankLabel( 0x67A8, 0x2e, 'bnk_2e_67A8' );
    dasmEntries.addBankLabel( 0x67B7, 0x2e, 'bnk_2e_67B7' );
    dasmEntries.addBankLabel( 0x6901, 0x2e, 'bnk_2e_6901' );
    dasmEntries.addBankLabel( 0x6943, 0x2e, 'bnk_2e_6943' );
    dasmEntries.addBankLabel( 0x6963, 0x2e, 'bnk_2e_6963' );
    dasmEntries.addBankLabel( 0x6970, 0x2e, 'bnk_2e_6970' );
    dasmEntries.addBankLabel( 0x6998, 0x2e, 'bnk_2e_6998' );
    dasmEntries.addBankLabel( 0x69C1, 0x2e, 'bnk_2e_69C1' );
    dasmEntries.addBankLabel( 0x69E8, 0x2e, 'bnk_2e_69E8' );
    dasmEntries.addBankLabel( 0x69FE, 0x2e, 'bnk_2e_69FE' );
    dasmEntries.addBankLabel( 0x6A23, 0x2e, 'bnk_2e_6A23' );
    dasmEntries.addBankLabel( 0x6A45, 0x2e, 'bnk_2e_6A45' );
    dasmEntries.addBankLabel( 0x6A5E, 0x2e, 'bnk_2e_6A5E' );
    dasmEntries.addBankLabel( 0x6A7C, 0x2e, 'bnk_2e_6A7C' );
    dasmEntries.addBankLabel( 0x6ACA, 0x2e, 'bnk_2e_6ACA' );
    dasmEntries.addBankLabel( 0x6AD0, 0x2e, 'bnk_2e_6AD0' );
    dasmEntries.addBankLabel( 0x6AF4, 0x2e, 'bnk_2e_6AF4' );
    dasmEntries.addBankLabel( 0x6B12, 0x2e, 'bnk_2e_6B12' );
    dasmEntries.addBankLabel( 0x6B3E, 0x2e, 'bnk_2e_6B3E' );
    dasmEntries.addBankLabel( 0x6B82, 0x2e, 'bnk_2e_6B82' );
    dasmEntries.addBankLabel( 0x6BA1, 0x2e, 'bnk_2e_6BA1' );
    dasmEntries.addBankLabel( 0x6BA5, 0x2e, 'bnk_2e_6BA5' );
    dasmEntries.addBankLabel( 0x6BB6, 0x2e, 'bnk_2e_6BB6' );
    dasmEntries.addBankLabel( 0x6BBF, 0x2e, 'bnk_2e_6BBF' );
    dasmEntries.addBankLabel( 0x6BD4, 0x2e, 'bnk_2e_6BD4' );
    dasmEntries.addBankLabel( 0x6BF8, 0x2e, 'bnk_2e_6BF8' );
    dasmEntries.addBankLabel( 0x6C0D, 0x2e, 'bnk_2e_6C0D' );
    dasmEntries.addBankLabel( 0x6C20, 0x2e, 'bnk_2e_6C20' );
    dasmEntries.addBankLabel( 0x6C56, 0x2e, 'bnk_2e_6C56' );
    dasmEntries.addBankLabel( 0x6C6C, 0x2e, 'bnk_2e_6C6C' );
    dasmEntries.addBankLabel( 0x6C94, 0x2e, 'bnk_2e_6C94' );
    dasmEntries.addBankLabel( 0x6CC6, 0x2e, 'bnk_2e_6CC6' );
    dasmEntries.addBankLabel( 0x6CD6, 0x2e, 'bnk_2e_6CD6' );
    dasmEntries.addBankLabel( 0x6CE6, 0x2e, 'bnk_2e_6CE6' );
    dasmEntries.addBankLabel( 0x6CEA, 0x2e, 'bnk_2e_6CEA' );
    dasmEntries.addBankLabel( 0x6CEE, 0x2e, 'bnk_2e_6CEE' );
    dasmEntries.addBankLabel( 0x6CFD, 0x2e, 'bnk_2e_6CFD' );

    dasmEntries.addTable( 0x76e1, 0x2E, 'tbl6Bytes', 1, 6 );
    dasmEntries.addTable( 0x7F1C, 0x2E, 'filler', 76, 3 );
}

function getDasmEntries_bnk_2f( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x2f, 'pageMarker_bnk_2f', 1, 1 );
    dasmEntries.addTable( 0x4001, 0x2f, 'tbl_FONTS', 47, 3 );
    dasmEntries.addTable( 0x408e, 0x2f, 'tbl_408e_bnk_2f', 11, 2 );
    dasmEntries.addTable( 0x40a4, 0x2f, 'tbl_40a4_bnk_2f', 1, 3 );
    dasmEntries.addTable( 0x40a7, 0x2f, 'tbl_40a7_bnk_2f', 57   , 2 );
    dasmEntries.addBankLabel( 0x7BAA, 0x2f, 'bnk_2f_7BAA' );
    dasmEntries.addBankLabel( 0x7BE1, 0x2f, 'bnk_2f_7BE1' );
    dasmEntries.addBankLabel( 0x7BF1, 0x2f, 'bnk_2f_7BF1' );
    dasmEntries.addBankLabel( 0x7C01, 0x2f, 'bnk_2f_7C01' );
    dasmEntries.addBankLabel( 0x7C13, 0x2f, 'bnk_2f_7C13' );
    dasmEntries.addBankLabel( 0x7C5C, 0x2f, 'bnk_2f_7C5C' );
    dasmEntries.addBankLabel( 0x7C90, 0x2f, 'bnk_2f_7C90' );
    dasmEntries.addBankLabel( 0x7CAF, 0x2f, 'bnk_2f_7CAF' );
    dasmEntries.addBankLabel( 0x7D14, 0x2f, 'bnk_2f_7D14' );
    dasmEntries.addBankLabel( 0x7D4D, 0x2f, 'bnk_2f_7D4D' );
    dasmEntries.addBankLabel( 0x7D86, 0x2f, 'bnk_2f_7D86' );
    dasmEntries.addBankLabel( 0x7DF2, 0x2f, 'bnk_2f_7DF2' );
    dasmEntries.addBankLabel( 0x7E1D, 0x2f, 'bnk_2f_7E1D' );
    dasmEntries.addBankLabel( 0x7E7D, 0x2f, 'bnk_2f_7E7D' );
    dasmEntries.addBankLabel( 0x7EC0, 0x2f, 'bnk_2f_7EC0' );
    dasmEntries.addBankLabel( 0x7EC9, 0x2f, 'bnk_2f_7EC9' );
    dasmEntries.addBankLabel( 0x7EDE, 0x2f, 'bnk_2f_7EDE' );
    dasmEntries.addBankLabel( 0x7F36, 0x2f, 'bnk_2f_7F36' );
    dasmEntries.addBankLabel( 0x7F54, 0x2f, 'bnk_2f_7F54' );
    // dasmEntries.addBankLabel( 0x7F7C, 0x2f, 'bnk_2f_7F7C' );
    dasmEntries.addTable( 0x7f7c, 0x2f, 'filler', 0x20, 4 );
    dasmEntries.addTable( 0x7ffd, 0x2f, 'filler', 1, 3 );
}

function getDasmEntries_bnk_30( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x30, 'pageMarker_bnk_30', 1, 1 );
    dasmEntries.addTable( 0x4001, 0x30, 'copyright', 20, 6  );
    dasmEntries.addTableWpc( 0x4079, 0x30, 'tblStrings-FR');

    dasmEntries.addTableStrings( 0x43fa, 0x30, 'tblStringsData-FR', 0x1411 );

    dasmEntries.addTable( 0x580b, 0x30, 'filler', 1, 1 );
    dasmEntries.addTableStrings( 0x580c, 0x30, 'tblStrings-Unknown', 10 );
    
    dasmEntries.addBankLabel( 0x5814, 0x30, 'bnk_30_5814' );
    dasmEntries.addBankLabel( 0x5824, 0x30, 'bnk_30_5824' );
    dasmEntries.addBankLabel( 0x5855, 0x30, 'bnk_30_5855' );
    dasmEntries.addBankLabel( 0x5875, 0x30, 'bnk_30_5875' );
    dasmEntries.addBankLabel( 0x5904, 0x30, 'bnk_30_5904' );
    dasmEntries.addBankLabel( 0x5914, 0x30, 'bnk_30_5914' );
    dasmEntries.addBankLabel( 0x5923, 0x30, 'bnk_30_5923' );
    dasmEntries.addBankLabel( 0x592D, 0x30, 'bnk_30_592D' );
    dasmEntries.addBankLabel( 0x5954, 0x30, 'bnk_30_5954' );
    dasmEntries.addBankLabel( 0x5965, 0x30, 'bnk_30_5965' );
    dasmEntries.addBankLabel( 0x5987, 0x30, 'bnk_30_5987' );
    dasmEntries.addBankLabel( 0x59B5, 0x30, 'bnk_30_59B5' );
    dasmEntries.addBankLabel( 0x59C5, 0x30, 'bnk_30_59C5' );
    dasmEntries.addBankLabel( 0x59F3, 0x30, 'bnk_30_59F3' );
    dasmEntries.addBankLabel( 0x5A0A, 0x30, 'bnk_30_5A0A' );
    dasmEntries.addBankLabel( 0x5A19, 0x30, 'bnk_30_5A19' );
    dasmEntries.addBankLabel( 0x5A2C, 0x30, 'bnk_30_5A2C' );
    dasmEntries.addBankLabel( 0x5A3E, 0x30, 'bnk_30_5A3E' );
    dasmEntries.addBankLabel( 0x5A4F, 0x30, 'bnk_30_5A4F' );
    dasmEntries.addBankLabel( 0x5A58, 0x30, 'bnk_30_5A58' );
    dasmEntries.addBankLabel( 0x5A6A, 0x30, 'bnk_30_5A6A' );
    dasmEntries.addBankLabel( 0x5A72, 0x30, 'bnk_30_5A72' );
    dasmEntries.addBankLabel( 0x5A7E, 0x30, 'bnk_30_5A7E' );
    dasmEntries.addBankLabel( 0x5A9F, 0x30, 'bnk_30_5A9F' );
    dasmEntries.addBankLabel( 0x5AC0, 0x30, 'bnk_30_5AC0' );
    dasmEntries.addBankLabel( 0x5ACD, 0x30, 'bnk_30_5ACD' );
    dasmEntries.addBankLabel( 0x5ADB, 0x30, 'bnk_30_5ADB' );
    dasmEntries.addBankLabel( 0x5AE9, 0x30, 'bnk_30_5AE9' );
    dasmEntries.addBankLabel( 0x5B0E, 0x30, 'bnk_30_5B0E' );
    dasmEntries.addBankLabel( 0x5B33, 0x30, 'bnk_30_5B33' );
    dasmEntries.addBankLabel( 0x5B4A, 0x30, 'bnk_30_5B4A' );
    dasmEntries.addBankLabel( 0x5B60, 0x30, 'bnk_30_5B60' );
    dasmEntries.addBankLabel( 0x5B76, 0x30, 'bnk_30_5B76' );
    dasmEntries.addBankLabel( 0x5B81, 0x30, 'bnk_30_5B81' );
    dasmEntries.addBankLabel( 0x5B8E, 0x30, 'bnk_30_5B8E' );
    dasmEntries.addBankLabel( 0x5B99, 0x30, 'bnk_30_5B99' );
    dasmEntries.addBankLabel( 0x5BA4, 0x30, 'bnk_30_5BA4' );
    dasmEntries.addBankLabel( 0x5BC3, 0x30, 'bnk_30_5BC3' );
    dasmEntries.addBankLabel( 0x5BD6, 0x30, 'bnk_30_5BD6' );
    dasmEntries.addBankLabel( 0x5C25, 0x30, 'bnk_30_5C25' );
    dasmEntries.addBankLabel( 0x5C56, 0x30, 'bnk_30_5C56' );
    dasmEntries.addBankLabel( 0x5C89, 0x30, 'bnk_30_5C89' );
    dasmEntries.addBankLabel( 0x5CA6, 0x30, 'bnk_30_5CA6' );
    dasmEntries.addBankLabel( 0x5CB1, 0x30, 'bnk_30_5CB1' );
    dasmEntries.addBankLabel( 0x5CC7, 0x30, 'bnk_30_5CC7' );
    dasmEntries.addBankLabel( 0x5CEC, 0x30, 'bnk_30_5CEC' );
    dasmEntries.addBankLabel( 0x5D00, 0x30, 'bnk_30_5D00' );
    dasmEntries.addBankLabel( 0x5D14, 0x30, 'bnk_30_5D14' );
    dasmEntries.addBankLabel( 0x5D2F, 0x30, 'bnk_30_5D2F' );
    dasmEntries.addBankLabel( 0x5D41, 0x30, 'bnk_30_5D41' );
    dasmEntries.addBankLabel( 0x5D4C, 0x30, 'bnk_30_5D4C' );
    dasmEntries.addBankLabel( 0x5D57, 0x30, 'bnk_30_5D57' );
    dasmEntries.addBankLabel( 0x5D66, 0x30, 'bnk_30_5D66' );
    dasmEntries.addBankLabel( 0x5DDA, 0x30, 'bnk_30_5DDA' );
    dasmEntries.addBankLabel( 0x5DEE, 0x30, 'bnk_30_5DEE' );
    dasmEntries.addBankLabel( 0x5E09, 0x30, 'bnk_30_5E09' );
    dasmEntries.addBankLabel( 0x5E22, 0x30, 'bnk_30_5E22' );
    dasmEntries.addBankLabel( 0x5E34, 0x30, 'bnk_30_5E34' );
    dasmEntries.addBankLabel( 0x5E61, 0x30, 'bnk_30_5E61' );
    dasmEntries.addBankLabel( 0x5EA3, 0x30, 'bnk_30_5EA3' );
    dasmEntries.addBankLabel( 0x5EF3, 0x30, 'bnk_30_5EF3' );
    dasmEntries.addBankLabel( 0x5EFE, 0x30, 'bnk_30_5EFE' );
    dasmEntries.addBankLabel( 0x5F07, 0x30, 'bnk_30_5F07' );
    dasmEntries.addBankLabel( 0x5F34, 0x30, 'bnk_30_5F34' );
    dasmEntries.addBankLabel( 0x5F61, 0x30, 'bnk_30_5F61' );
    dasmEntries.addBankLabel( 0x5F95, 0x30, 'bnk_30_5F95' );
    dasmEntries.addBankLabel( 0x5FBC, 0x30, 'bnk_30_5FBC' );
    dasmEntries.addBankLabel( 0x5FEE, 0x30, 'bnk_30_5FEE' );    
    
    dasmEntries.addTableWpc( 0x6032, 0x30, 'tblWpc-Unknown' );
    dasmEntries.addTableWpc( 0x6f2f, 0x30, 'tblWpcPointersToShortTables' );
    dasmEntries.addTable( 0x725c, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x725d, 0x30, 'tblTwoBytes', 4, 2 );
    dasmEntries.addTable( 0x7265, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x7266, 0x30, 'tblTwoBytes', 4, 2 );
    dasmEntries.addTable( 0x726e, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x726f, 0x30, 'tblTwoBytes', 4, 2 );
    dasmEntries.addTable( 0x7277, 0x30, 'tblUnknown', 1, 3 );
    dasmEntries.addTable( 0x727a, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x727b, 0x30, 'tblTwoBytes', 3, 2 );
    dasmEntries.addTable( 0x7281, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x7282, 0x30, 'tblTwoBytes', 3, 2 );
    dasmEntries.addTable( 0x7288, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x7289, 0x30, 'tblTwoBytes', 5, 2 );
    dasmEntries.addTable( 0x7293, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x7294, 0x30, 'tblTwoBytes', 5, 2 );
    dasmEntries.addTable( 0x729e, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x729f, 0x30, 'tblTwoBytes', 6, 2 );
    dasmEntries.addTable( 0x72ab, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x72ac, 0x30, 'tblTwoBytes', 7, 2 );
    dasmEntries.addTable( 0x72ba, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x72bb, 0x30, 'tblTwoBytes', 5, 2 );
    dasmEntries.addTable( 0x72c5, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x72c6, 0x30, 'tblTwoBytes', 6, 2 );
    dasmEntries.addTable( 0x72d2, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x72d3, 0x30, 'tblTwoBytes', 7, 2 );
    dasmEntries.addTable( 0x72e1, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x72e2, 0x30, 'tblTwoBytes', 7, 2 );
    dasmEntries.addTable( 0x72f0, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x72f1, 0x30, 'tblTwoBytes', 4, 2 );
    dasmEntries.addTable( 0x72f9, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x72fa, 0x30, 'tblTwoBytes', 4, 2 );
    dasmEntries.addTable( 0x7302, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x7303, 0x30, 'tblTwoBytes', 3, 2 );
    dasmEntries.addTable( 0x7309, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x730a, 0x30, 'tblTwoBytes', 3, 2 );
    dasmEntries.addTable( 0x7310, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x7311, 0x30, 'tblTwoBytes', 7, 2 );
    dasmEntries.addTable( 0x731f, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x7320, 0x30, 'tblTwoBytes', 7, 2 );
    dasmEntries.addTable( 0x732e, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x732f, 0x30, 'tblTwoBytes', 6, 2 );
    dasmEntries.addTable( 0x733b, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x733c, 0x30, 'tblTwoBytes', 6, 2 );
    dasmEntries.addTable( 0x7348, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x7349, 0x30, 'tblTwoBytes', 3, 2 );
    dasmEntries.addTable( 0x734f, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x7350, 0x30, 'tblTwoBytes', 4, 2 );
    dasmEntries.addTable( 0x7358, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x7359, 0x30, 'tblTwoBytes', 5, 2 );
    dasmEntries.addTable( 0x7363, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x7364, 0x30, 'tblTwoBytes', 4, 2 );
    dasmEntries.addTable( 0x736c, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x736d, 0x30, 'tblTwoBytes', 4, 2 );
    dasmEntries.addTable( 0x7375, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x7376, 0x30, 'tblTwoBytes', 4, 2 );
    dasmEntries.addTable( 0x737e, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x737f, 0x30, 'tblTwoBytes', 5, 2 );
    dasmEntries.addTable( 0x7389, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x738a, 0x30, 'tblTwoBytes', 4, 2 );
    dasmEntries.addTable( 0x7392, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x7393, 0x30, 'tblTwoBytes', 4, 2 );
    dasmEntries.addTable( 0x739b, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x739c, 0x30, 'tblTwoBytes', 7, 2 );
    dasmEntries.addTable( 0x73aa, 0x30, 'tblThreeBytes', 2, 3 );
    dasmEntries.addTable( 0x73b0, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x73b1, 0x30, 'tblTwoBytes', 4, 2 );
    dasmEntries.addTable( 0x73b9, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x73ba, 0x30, 'tblTwoBytes', 3, 2 );
    dasmEntries.addTable( 0x73c0, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x73c1, 0x30, 'tblTwoBytes', 7, 2 );
    dasmEntries.addTable( 0x73cf, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x73d0, 0x30, 'tblTwoBytes', 9, 2 );
    dasmEntries.addTable( 0x73e2, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x73e3, 0x30, 'tblTwoBytes', 6, 2 );
    dasmEntries.addTable( 0x73ef, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x73f0, 0x30, 'tblTwoBytes', 6, 2 );
    dasmEntries.addTable( 0x73fc, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x73fd, 0x30, 'tblTwoBytes', 3, 2 );
    dasmEntries.addTable( 0x7403, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x7404, 0x30, 'tblTwoBytes', 3, 2 );
    dasmEntries.addTable( 0x740a, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x740b, 0x30, 'tblTwoBytes', 4, 2 );
    dasmEntries.addTable( 0x7413, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x7414, 0x30, 'tblTwoBytes', 2, 2 );
    dasmEntries.addTable( 0x7418, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x7419, 0x30, 'tblTwoBytes', 2, 2 );
    dasmEntries.addTable( 0x741d, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x741e, 0x30, 'tblTwoBytes', 5, 2 );
    dasmEntries.addTable( 0x7428, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x7429, 0x30, 'tblTwoBytes', 2, 2 );
    dasmEntries.addTable( 0x742d, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x742e, 0x30, 'tblTwoBytes', 10, 2 );
    dasmEntries.addTable( 0x7442, 0x30, 'tblThreeBytes', 8, 3 );
    dasmEntries.addTable( 0x745a, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x745b, 0x30, 'tblTwoBytes', 3, 2 );
    dasmEntries.addTable( 0x7461, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x7462, 0x30, 'tblTwoBytes', 5, 2 );
    dasmEntries.addTable( 0x746c, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x746d, 0x30, 'tblTwoBytes', 3, 2 );
    dasmEntries.addTable( 0x7473, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x7474, 0x30, 'tblTwoBytes', 3, 2 );
    dasmEntries.addTable( 0x747a, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x747b, 0x30, 'tblTwoBytes', 3, 2 );
    dasmEntries.addTable( 0x7481, 0x30, 'tblThreeBytes', 15, 3 );
    dasmEntries.addTable( 0x74ae, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x74af, 0x30, 'tblTwoBytes', 2, 2 );
    dasmEntries.addTable( 0x74b3, 0x30, 'tblThreeBytes', 13, 3 );
    dasmEntries.addTable( 0x74da, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x74db, 0x30, 'tblTwoBytes', 14, 2 );
    dasmEntries.addTable( 0x74f7, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x74f8, 0x30, 'tblTwoBytes', 6, 2 );
    dasmEntries.addTable( 0x7504, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x7505, 0x30, 'tblTwoBytes', 2, 2 );
    dasmEntries.addTable( 0x7509, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x750a, 0x30, 'tblTwoBytes', 3, 2 );
    dasmEntries.addTable( 0x7510, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x7511, 0x30, 'tblTwoBytes', 1, 2 );
    dasmEntries.addTable( 0x7513, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x7514, 0x30, 'tblTwoBytes', 2, 2 );
    dasmEntries.addTable( 0x7518, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x7519, 0x30, 'tblTwoBytes', 1, 2 );
    dasmEntries.addTable( 0x751b, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x751c, 0x30, 'tblTwoBytes', 2, 2 );
    dasmEntries.addTable( 0x7520, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x7521, 0x30, 'tblTwoBytes', 1, 2 );
    dasmEntries.addTable( 0x7523, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x7524, 0x30, 'tblTwoBytes', 2, 2 );
    dasmEntries.addTable( 0x7528, 0x30, 'tblThreeBytes', 2, 3 );
    dasmEntries.addTable( 0x752e, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x752f, 0x30, 'tblTwoBytes', 2, 2 );
    dasmEntries.addTable( 0x7533, 0x30, 'tblThreeBytes', 1, 3 );
    dasmEntries.addTable( 0x7536, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x7537, 0x30, 'tblTwoBytes', 2, 2 );
    dasmEntries.addTable( 0x753b, 0x30, 'tblThreeBytes', 1, 3 );
    dasmEntries.addTable( 0x753e, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x753f, 0x30, 'tblTwoBytes', 2, 2 );
    dasmEntries.addTable( 0x7543, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x7544, 0x30, 'tblTwoBytes', 2, 2 );
    dasmEntries.addTable( 0x7548, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x7549, 0x30, 'tblTwoBytes', 2, 2 );
    dasmEntries.addTable( 0x754d, 0x30, 'tblThreeBytes', 1, 3 );
    dasmEntries.addTable( 0x7550, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x7551, 0x30, 'tblTwoBytes', 3, 2 );
    dasmEntries.addTable( 0x7557, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x7558, 0x30, 'tblTwoBytes', 4, 2 );
    dasmEntries.addTable( 0x7560, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x7561, 0x30, 'tblTwoBytes', 6, 2 );
    dasmEntries.addTable( 0x756d, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x756e, 0x30, 'tblTwoBytes', 3, 2 );
    dasmEntries.addTable( 0x7574, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x7575, 0x30, 'tblTwoBytes', 2, 2 );
    dasmEntries.addTable( 0x7579, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x757a, 0x30, 'tblTwoBytes', 2, 2 );
    dasmEntries.addTable( 0x757e, 0x30, 'tblThreeBytes', 1, 3 );
    dasmEntries.addTable( 0x7581, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x7582, 0x30, 'tblTwoBytes', 4, 2 );
    dasmEntries.addTable( 0x758a, 0x30, 'tblThreeBytes', 1, 3 );
    dasmEntries.addTable( 0x758d, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x758e, 0x30, 'tblTwoBytes', 2, 2 );
    dasmEntries.addTable( 0x7592, 0x30, 'tblThreeBytes', 1, 3 );
    dasmEntries.addTable( 0x7595, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x7596, 0x30, 'tblTwoBytes', 2, 2 );
    dasmEntries.addTable( 0x759a, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x759b, 0x30, 'tblTwoBytes', 2, 2 );
    dasmEntries.addTable( 0x759f, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x75a0, 0x30, 'tblTwoBytes', 2, 2 );
    dasmEntries.addTable( 0x75a4, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x75a5, 0x30, 'tblTwoBytes', 2, 2 );
    dasmEntries.addTable( 0x75a9, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x75aa, 0x30, 'tblTwoBytes', 2, 2 );
    dasmEntries.addTable( 0x75ae, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x75af, 0x30, 'tblTwoBytes', 2, 2 );
    dasmEntries.addTable( 0x75b3, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x75b4, 0x30, 'tblTwoBytes', 2, 2 );
    dasmEntries.addTable( 0x75b8, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x75b9, 0x30, 'tblTwoBytes', 5, 2 );
    dasmEntries.addTable( 0x75c3, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x75c4, 0x30, 'tblTwoBytes', 3, 2 );
    dasmEntries.addTable( 0x75ca, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x75cb, 0x30, 'tblTwoBytes', 6, 2 );
    dasmEntries.addTable( 0x75d7, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x75d8, 0x30, 'tblTwoBytes', 2, 2 );
    dasmEntries.addTable( 0x75dc, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x75dd, 0x30, 'tblTwoBytes', 2, 2 );
    dasmEntries.addTable( 0x75e1, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x75e2, 0x30, 'tblTwoBytes', 2, 2 );
    dasmEntries.addTable( 0x75e6, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x75e7, 0x30, 'tblTwoBytes', 2, 2 );
    dasmEntries.addTable( 0x75eb, 0x30, 'tblHdr', 1, 1 );
    dasmEntries.addTable( 0x75ec, 0x30, 'tblTwoBytes', 2, 2 );
    dasmEntries.addTable( 0x75f0, 0x30, 'tblThreeBytes', 10, 3 );

    dasmEntries.addTable( 0x760e, 0x30, 'tblFiller', 1, 4 );
    dasmEntries.addTableWpc( 0x7612, 0x30, 'tblBankAddressesLinkedGameEvents' );
    dasmEntries.addBankLabel( 0x76de, 0x30, "serialLink_clear_outputbuffers" );
    dasmEntries.addBankLabel( 0x76fe, 0x30, "serialLink_SetupAndStartPeriodicTask" );

    dasmEntries.addBankLabel( 0x773d, 0x30, "taskPeriodicCheckSerialLink" );
    dasmEntries.addBankLabel( 0x7748, 0x30, "CheckSerialLink"  );
    dasmEntries.addBankLabel( 0x774f, 0x30, "process_serialLinkTransmit"  );
    dasmEntries.addBankLabel( 0x7754, 0x30, "serialLink_7754"  );
    dasmEntries.addBankLabel( 0x77a8, 0x30, 'serialLink_transmit' );
    dasmEntries.addBankLabel( 0x77c7, 0x30, "serialLink_check_header_bytes"  );
    dasmEntries.addBankLabel( 0x77e3, 0x30, 'TryLinkedGameXMIT' );

    dasmEntries.addBankLabel( 0x7841, 0x30, 'SerialLink_cycle' );
    dasmEntries.addBankLabel( 0x78a4, 0x30, 'SerialPortDebug_Transmit_GOOD' );
    dasmEntries.addBankLabel( 0x78c5, 0x30, 'SerialPortDebug_UpdateCounts' );
    dasmEntries.addBankLabel( 0x78fe, 0x30, 'TryLinkedGameXMIT_b' );

    // dasmEntries.addBankLabel( 0x7937, 0x30, "linkedGameMatrix_FF_test_a" );
    dasmEntries.addBankLabel( 0x7937, 0x30, "linkedGameMatrix_FF_test_a" );
    dasmEntries.addBankLabel( 0x7955, 0x30, "SerialLink_cycle_B" );
    dasmEntries.addBankLabel( 0x7993, 0x30, "SerialLinkMatrixEntries_RESET" );
    dasmEntries.addBankLabel( 0x79b7, 0x30, "linkedGameMatrix_FF_test_b" );
    dasmEntries.addBankLabel( 0x79e8, 0x30, "linkedGameMatrix_FF_test_c" );

    dasmEntries.addBankLabel( 0x7a7f, 0x30, 'compare_lowernibble_B_to_Yplus6' );
    dasmEntries.addBankLabel( 0x7a91, 0x30, 'linkedGameMatrix_FF_test_d' );
    dasmEntries.addBankLabel( 0x7ab4, 0x30, 'checkForLinkedGameSerialActivity_A' );
    dasmEntries.addBankLabel( 0x7ae5, 0x30, 'checkForLinkedGameSerialActivity_B' );

    dasmEntries.addBankLabel( 0x7b19, 0x30 );
    dasmEntries.addBankLabel( 0x7b31, 0x30 );
    dasmEntries.addBankLabel( 0x7b6a, 0x30, 'serialLink_check_header_bytes_UPPER_NYBBLE' );
    dasmEntries.addBankLabel( 0x7b8f, 0x30 );
    dasmEntries.addBankLabel( 0x7bab, 0x30, "linkedGameMatrixAdjust" );
    dasmEntries.addBankLabel( 0x7bdb, 0x30, "getNextSerialLinkMatrixEntry" );

    dasmEntries.addBankLabel( 0x7c05, 0x30 , 'serialLink_Matrix_A');
    dasmEntries.addBankLabel( 0x7c58, 0x30, "resetLinkedGameMatrixEntry" );
    dasmEntries.addBankLabel( 0x7c6a, 0x30,  'serialLink_Matrix_B');
    dasmEntries.addBankLabel( 0x7c95, 0x30, 'serialLink_Matrix_C' );
    dasmEntries.addBankLabel( 0x7cc0, 0x30, 'serialLink_Matrix_D' );
    dasmEntries.addBankLabel( 0x7cf2, 0x30 );
    dasmEntries.addBankLabel( 0x7cf3, 0x30 );
    dasmEntries.addBankLabel( 0x7cfe, 0x30 );

    dasmEntries.addBankLabel( 0x7d46, 0x30 );
    dasmEntries.addBankLabel( 0x7d51, 0x30 );
    dasmEntries.addBankLabel( 0x7d66, 0x30 );
    dasmEntries.addBankLabel( 0x7d7a, 0x30 );
    dasmEntries.addBankLabel( 0x7d7e, 0x30 );
    dasmEntries.addBankLabel( 0x7d89, 0x30 );
    dasmEntries.addBankLabel( 0x7d94, 0x30 );
    dasmEntries.addBankLabel( 0x7d9f, 0x30 );
    dasmEntries.addBankLabel( 0x7daa, 0x30 );
    dasmEntries.addBankLabel( 0x7db9, 0x30 );
    dasmEntries.addBankLabel( 0x7DCE, 0x30, 'task98_SerialPortDebug_DMD' );

    dasmEntries.addTable( 0x7ebb, 0x30, 'filler', 108, 3 );
    dasmEntries.addTable( 0x7fff, 0x30, 'filler', 1, 1 );

 }

function getDasmEntries_bnk_31( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x31, 'pageMarker_bnk_31', 1, 1 );

    dasmEntries.addTableWpc( 0x4001, 0x31, 'tblStringPointersGameCalloutsOperatorMenu' );
    dasmEntries.addTableStrings( 0x4382, 0x31, 'tblStringsGameCalloutsOperatorMenu', 0x132d );
    dasmEntries.addTableWpc( 0x56af, 0x31, 'tblStringPointers' );
    dasmEntries.addTableStrings( 0x5a30, 0x31, 'tblStringsGameCalloutsOperatorMenu', 0xcad );
    dasmEntries.addTable( 0x66cc, 0x31, 'filler', 1, 1 );
    dasmEntries.addTableWpc( 0x66cd, 0x31, 'tblStringPointers' );
    dasmEntries.addTable( 0x66dd, 0x31, 'filler', 1, 1 );
    dasmEntries.addTableWpc( 0x66de, 0x31, 'tblStringPointers' );
    dasmEntries.addTableStrings( 0x6a5f, 0x31, 'tblStringsGameCalloutsOperatorMenu', 0xded );

    dasmEntries.addBankLabel( 0x784c, 0x31 );
    dasmEntries.addBankLabel( 0x7855, 0x31 );
    dasmEntries.addBankLabel( 0x7859, 0x31 );
    dasmEntries.addBankLabel( 0x786a, 0x31 );
    dasmEntries.addBankLabel( 0x7873, 0x31 );
    dasmEntries.addBankLabel( 0x7886, 0x31 );
    dasmEntries.addBankLabel( 0x7892, 0x31 );
    dasmEntries.addBankLabel( 0x78aa, 0x31 );
    dasmEntries.addBankLabel( 0x78bc, 0x31 );
    dasmEntries.addBankLabel( 0x78d6, 0x31 );
    dasmEntries.addBankLabel( 0x7928, 0x31 );
    dasmEntries.addBankLabel( 0x799f, 0x31 );
    dasmEntries.addBankLabel( 0x79b3, 0x31 );
    dasmEntries.addBankLabel( 0x79d0, 0x31 );
    dasmEntries.addBankLabel( 0x79ee, 0x31 );
    dasmEntries.addBankLabel( 0x7a1a, 0x31 );
    dasmEntries.addBankLabel( 0x7a3d, 0x31 );
    dasmEntries.addBankLabel( 0x7a60, 0x31 );
    dasmEntries.addBankLabel( 0x7a71, 0x31 );
    dasmEntries.addBankLabel( 0x7a7b, 0x31 );
    dasmEntries.addBankLabel( 0x7a90, 0x31 );
    dasmEntries.addBankLabel( 0x7ab0, 0x31 );
    dasmEntries.addBankLabel( 0x7acc, 0x31 );
    dasmEntries.addBankLabel( 0x7b09, 0x31 );
    dasmEntries.addBankLabel( 0x7b50, 0x31 );
    dasmEntries.addBankLabel( 0x7b72, 0x31 );
    dasmEntries.addBankLabel( 0x7b77, 0x31 );
    dasmEntries.addBankLabel( 0x7b91, 0x31 );
    dasmEntries.addBankLabel( 0x7bac, 0x31 );
    dasmEntries.addBankLabel( 0x7bd6, 0x31 );
    dasmEntries.addBankLabel( 0x7be4, 0x31 );
    dasmEntries.addBankLabel( 0x7c2e, 0x31 );
    dasmEntries.addBankLabel( 0x7c49, 0x31 );
    dasmEntries.addBankLabel( 0x7c5c, 0x31 );
    dasmEntries.addBankLabel( 0x7c5c, 0x31 );
    dasmEntries.addBankLabel( 0x7c65, 0x31 );
    dasmEntries.addBankLabel( 0x7cb4, 0x31 );
    dasmEntries.addBankLabel( 0x7ccc, 0x31 );
    dasmEntries.addBankLabel( 0x7d10, 0x31 );
    dasmEntries.addBankLabel( 0x7d4a, 0x31 );
    dasmEntries.addBankLabel( 0x7d6e, 0x31 );
    dasmEntries.addBankLabel( 0x7d84, 0x31 );
    dasmEntries.addBankLabel( 0x7da2, 0x31, "find_process_id_3843" );
    dasmEntries.addBankLabel( 0x7da8, 0x31 );
    dasmEntries.addBankLabel( 0x7dbc, 0x31 );
    dasmEntries.addBankLabel( 0x7e62, 0x31 );
    dasmEntries.addBankLabel( 0x7e81, 0x31 );
    dasmEntries.addBankLabel( 0x7e95, 0x31 );
    dasmEntries.addBankLabel( 0x7ebb, 0x31 );
    dasmEntries.addBankLabel( 0x7ec8, 0x31 );
    dasmEntries.addBankLabel( 0x7ed7, 0x31 );
    dasmEntries.addBankLabel( 0x7f78, 0x31 );
    dasmEntries.addBankLabel( 0x7fb6, 0x31 );

    dasmEntries.addTable( 0x7Ff4, 0x31, 'filler', 4, 3 );
}

function getDasmEntries_bnk_32( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x32, 'pageMarker_bnk_32', 1, 1 );
    dasmEntries.addTableStrings( 0x4001, 0x32, 'gameName', 14 );
    dasmEntries.addTable( 0x400f, 0x32, 'gameNumber', 1, 5 );
    dasmEntries.addTable( 0x4014, 0x32, 'gameDefaultHighScoresPlayerInitials', 5, 3 );

    dasmEntries.addBankLabel( 0x4027, 0x32, 'bnk_32_4027' );
    dasmEntries.addBankLabel( 0x4039, 0x32, 'bnk_32_4039' );
    dasmEntries.addBankLabel( 0x4087, 0x32, 'bnk_32_4087' );
    dasmEntries.addBankLabel( 0x4093, 0x32, 'bnk_32_4093' );
    dasmEntries.addBankLabel( 0x409F, 0x32, 'bnk_32_409F' );
    dasmEntries.addBankLabel( 0x40A7, 0x32, 'bnk_32_40A7' );
    dasmEntries.addBankLabel( 0x40C9, 0x32, 'bnk_32_40C9' );
    dasmEntries.addBankLabel( 0x40D7, 0x32, 'bnk_32_40D7' );
    dasmEntries.addBankLabel( 0x40E0, 0x32, 'bnk_32_40E0' );
    dasmEntries.addBankLabel( 0x40E6, 0x32, 'bnk_32_40E6' );
    dasmEntries.addBankLabel( 0x40EF, 0x32, 'bnk_32_40EF' );

    dasmEntries.addBankLabel( 0x4107, 0x32, 'bnk_32_4107' );
    dasmEntries.addBankLabel( 0x4113, 0x32, 'bnk_32_4113' );
    dasmEntries.addBankLabel( 0x4114, 0x32, 'bnk_32_4114' );
    dasmEntries.addBankLabel( 0x4125, 0x32, 'bnk_32_4125' );
    dasmEntries.addBankLabel( 0x412B, 0x32, 'bnk_32_412B' );
    dasmEntries.addBankLabel( 0x4146, 0x32, 'bnk_32_4146' );
    dasmEntries.addBankLabel( 0x4164, 0x32, 'bnk_32_4164' );
    dasmEntries.addBankLabel( 0x4165, 0x32, 'bnk_32_4165' );
    dasmEntries.addBankLabel( 0x416B, 0x32, 'bnk_32_416B' );
    dasmEntries.addBankLabel( 0x4177, 0x32, 'bnk_32_4177' );
    dasmEntries.addBankLabel( 0x4183, 0x32, 'bnk_32_4183' );
    dasmEntries.addBankLabel( 0x41B4, 0x32, 'bnk_32_41B4' );
    dasmEntries.addBankLabel( 0x41BD, 0x32, 'bnk_32_41BD' );
    dasmEntries.addBankLabel( 0x41C0, 0x32, 'bnk_32_41C0' );
    dasmEntries.addBankLabel( 0x41E1, 0x32, 'bnk_32_41E1' );
    dasmEntries.addBankLabel( 0x41F3, 0x32, 'bnk_32_41F3' );
    dasmEntries.addBankLabel( 0x420D, 0x32, 'bnk_32_420D' );
    dasmEntries.addBankLabel( 0x4210, 0x32, 'bnk_32_4210' );
    dasmEntries.addBankLabel( 0x424B, 0x32, 'bnk_32_424B' );
    dasmEntries.addBankLabel( 0x4251, 0x32, 'bnk_32_4251' );
    dasmEntries.addBankLabel( 0x4252, 0x32, 'bnk_32_4252' );
    dasmEntries.addBankLabel( 0x4259, 0x32, 'bnk_32_4259' );
    dasmEntries.addBankLabel( 0x4262, 0x32, 'bnk_32_4262' );
    dasmEntries.addBankLabel( 0x428B, 0x32, 'bnk_32_428B' );
    dasmEntries.addBankLabel( 0x4294, 0x32, 'bnk_32_4294' );
    dasmEntries.addBankLabel( 0x429B, 0x32, 'bnk_32_429B' );
    dasmEntries.addBankLabel( 0x42B8, 0x32, 'bnk_32_42B8' );
    dasmEntries.addBankLabel( 0x431C, 0x32, 'bnk_32_431C' );
    dasmEntries.addBankLabel( 0x4323, 0x32, 'bnk_32_4323' );
    dasmEntries.addBankLabel( 0x432A, 0x32, 'bnk_32_432A' );
    dasmEntries.addBankLabel( 0x4332, 0x32, 'bnk_32_4332' );
    dasmEntries.addBankLabel( 0x4339, 0x32, 'bnk_32_4339' );
    dasmEntries.addBankLabel( 0x434A, 0x32, 'bnk_32_434A' );
    dasmEntries.addBankLabel( 0x4353, 0x32, 'bnk_32_4353' );
    dasmEntries.addBankLabel( 0x4362, 0x32, 'bnk_32_4362' );
    dasmEntries.addBankLabel( 0x436B, 0x32, 'bnk_32_436B' );
    dasmEntries.addBankLabel( 0x436E, 0x32, 'bnk_32_436E' );
    dasmEntries.addBankLabel( 0x437A, 0x32, 'bnk_32_437A' );
    dasmEntries.addBankLabel( 0x4391, 0x32, 'bnk_32_4391' );
    dasmEntries.addBankLabel( 0x43DC, 0x32, 'bnk_32_43DC' );
    dasmEntries.addBankLabel( 0x43E1, 0x32, 'bnk_32_43E1' );
    dasmEntries.addBankLabel( 0x43E6, 0x32, 'bnk_32_43E6' );
    dasmEntries.addBankLabel( 0x43F5, 0x32, 'bnk_32_43F5' );
    dasmEntries.addBankLabel( 0x4438, 0x32, 'bnk_32_4438' );
    dasmEntries.addBankLabel( 0x4455, 0x32, 'bnk_32_4455' );
    dasmEntries.addBankLabel( 0x4497, 0x32, 'bnk_32_4497' );

    dasmEntries.addBankLabel( 0x449D, 0x32, 'bnk_32_449D' );
    dasmEntries.addBankLabel( 0x449F, 0x32, 'bnk_32_449F' );
    dasmEntries.addBankLabel( 0x44C1, 0x32, 'bnk_32_44C1' );
    dasmEntries.addBankLabel( 0x44C9, 0x32, 'bnk_32_44C9' );
    dasmEntries.addBankLabel( 0x44D6, 0x32, 'bnk_32_44D6' );
    dasmEntries.addBankLabel( 0x44DD, 0x32, 'bnk_32_44DD' );
    dasmEntries.addBankLabel( 0x44E4, 0x32, 'bnk_32_44E4' );
    dasmEntries.addBankLabel( 0x44ED, 0x32, 'bnk_32_44ED' );
    dasmEntries.addBankLabel( 0x4502, 0x32, 'bnk_32_4502' );

    dasmEntries.addBankLabel( 0x4518, 0x32, 'bnk_32_4518' );
    dasmEntries.addBankLabel( 0x452B, 0x32, 'bnk_32_452B' );
    dasmEntries.addBankLabel( 0x4553, 0x32, 'bnk_32_4553' );
    dasmEntries.addBankLabel( 0x455F, 0x32, 'bnk_32_455F' );
    dasmEntries.addBankLabel( 0x4572, 0x32, 'bnk_32_4572' );
    dasmEntries.addBankLabel( 0x4583, 0x32, 'bnk_32_4583' );
    dasmEntries.addBankLabel( 0x460C, 0x32, 'bnk_32_460C' );
    dasmEntries.addBankLabel( 0x461F, 0x32, 'bnk_32_461F' );
    dasmEntries.addBankLabel( 0x4665, 0x32, 'bnk_32_4665' );
    dasmEntries.addBankLabel( 0x4675, 0x32, 'bnk_32_4675' );
    dasmEntries.addBankLabel( 0x4711, 0x32, 'bnk_32_4711' );
    dasmEntries.addBankLabel( 0x474C, 0x32, 'bnk_32_474C' );
    dasmEntries.addBankLabel( 0x4753, 0x32, 'bnk_32_4753' );
    dasmEntries.addBankLabel( 0x475C, 0x32, 'bnk_32_475C' );
    dasmEntries.addBankLabel( 0x4797, 0x32, 'bnk_32_4797' );
    dasmEntries.addBankLabel( 0x479E, 0x32, 'bnk_32_479E' );
    dasmEntries.addBankLabel( 0x47A7, 0x32, 'bnk_32_47A7' );
    dasmEntries.addBankLabel( 0x47E2, 0x32, 'bnk_32_47E2' );
    dasmEntries.addBankLabel( 0x47E9, 0x32, 'bnk_32_47E9' );
    dasmEntries.addBankLabel( 0x47F2, 0x32, 'bnk_32_47F2' );
    dasmEntries.addBankLabel( 0x482D, 0x32, 'bnk_32_482D' );
    dasmEntries.addBankLabel( 0x4834, 0x32, 'bnk_32_4834' );
    dasmEntries.addBankLabel( 0x4848, 0x32, 'bnk_32_4848' );
    dasmEntries.addBankLabel( 0x4867, 0x32, 'bnk_32_4867' );
    dasmEntries.addBankLabel( 0x4879, 0x32, 'bnk_32_4879' );
    dasmEntries.addBankLabel( 0x488B, 0x32, 'bnk_32_488B' );
    dasmEntries.addBankLabel( 0x48C2, 0x32, 'bnk_32_48C2' );
    dasmEntries.addBankLabel( 0x496C, 0x32, 'bnk_32_496C' );
    dasmEntries.addBankLabel( 0x4995, 0x32, 'bnk_32_4995' );
    dasmEntries.addBankLabel( 0x499E, 0x32, 'bnk_32_499E' );
    dasmEntries.addBankLabel( 0x49B0, 0x32, 'bnk_32_49B0' );
    dasmEntries.addBankLabel( 0x49B3, 0x32, 'bnk_32_49B3' );
    dasmEntries.addBankLabel( 0x49B6, 0x32, 'bnk_32_49B6' );
    dasmEntries.addBankLabel( 0x49CD, 0x32, 'bnk_32_49CD' );
    dasmEntries.addBankLabel( 0x49D6, 0x32, 'bnk_32_49D6' );
    dasmEntries.addBankLabel( 0x49ED, 0x32, 'bnk_32_49ED' );
    dasmEntries.addBankLabel( 0x49FC, 0x32, 'bnk_32_49FC' );
    dasmEntries.addBankLabel( 0x4A13, 0x32, 'bnk_32_4A13' );
    dasmEntries.addBankLabel( 0x4A23, 0x32, 'bnk_32_4A23' );
    dasmEntries.addBankLabel( 0x4A30, 0x32, 'bnk_32_4A30' );
    dasmEntries.addBankLabel( 0x4B0C, 0x32, 'bnk_32_4B0C' );
    dasmEntries.addBankLabel( 0x4B18, 0x32, 'bnk_32_4B18' );
    dasmEntries.addBankLabel( 0x4B46, 0x32, 'setFlag_5B4' );
    dasmEntries.addBankLabel( 0x4B4F, 0x32, 'bnk_32_4B4F' );
    dasmEntries.addBankLabel( 0x4B70, 0x32, 'bnk_32_4B70' );
    dasmEntries.addBankLabel( 0x4BA0, 0x32, 'bnk_32_4BA0' );
    dasmEntries.addBankLabel( 0x4BA6, 0x32, 'bnk_32_4BA6' );
    dasmEntries.addBankLabel( 0x4BAC, 0x32, 'bnk_32_4BAC' );
    dasmEntries.addBankLabel( 0x4BBD, 0x32, 'bnk_32_4BBD' );
    dasmEntries.addBankLabel( 0x4C2A, 0x32, 'bnk_32_4C2A' );
    dasmEntries.addBankLabel( 0x4C3B, 0x32, 'bnk_32_4C3B' );
    dasmEntries.addBankLabel( 0x4C45, 0x32, 'bnk_32_4C45' );
    dasmEntries.addBankLabel( 0x4E0B, 0x32, 'bnk_32_4E0B' );
    dasmEntries.addBankLabel( 0x4E6F, 0x32, 'bnk_32_4E6F' );
    dasmEntries.addBankLabel( 0x4EA1, 0x32, 'bnk_32_4EA1' );
    dasmEntries.addBankLabel( 0x4ED3, 0x32, 'bnk_32_4ED3' );
    dasmEntries.addBankLabel( 0x4F0F, 0x32, 'bnk_32_4F0F' );
    dasmEntries.addBankLabel( 0x4F41, 0x32, 'bnk_32_4F41' );
    dasmEntries.addBankLabel( 0x4F73, 0x32, 'bnk_32_4F73' );
    dasmEntries.addBankLabel( 0x4FAF, 0x32, 'bnk_32_4FAF' );

    dasmEntries.addBankLabel( 0x5005, 0x32, 'bnk_32_5005' );
    dasmEntries.addBankLabel( 0x504B, 0x32, 'bnk_32_504B' );
    dasmEntries.addBankLabel( 0x50C0, 0x32, 'bnk_32_50C0' );
    dasmEntries.addBankLabel( 0x51CF, 0x32, 'bnk_32_51CF' );
    dasmEntries.addBankLabel( 0x51D5, 0x32, 'bnk_32_51D5' );
    dasmEntries.addBankLabel( 0x51ED, 0x32, 'bnk_32_51ED' );
    dasmEntries.addBankLabel( 0x5205, 0x32, 'bnk_32_5205' );
    dasmEntries.addBankLabel( 0x521D, 0x32, 'bnk_32_521D' );
    dasmEntries.addBankLabel( 0x5235, 0x32, 'bnk_32_5235' );
    dasmEntries.addBankLabel( 0x5250, 0x32, 'bnk_32_5250' );
    dasmEntries.addBankLabel( 0x5273, 0x32, 'bnk_32_5273' );
    dasmEntries.addBankLabel( 0x527C, 0x32, 'bnk_32_527C' );
    dasmEntries.addBankLabel( 0x528D, 0x32, 'bnk_32_528D' );
    dasmEntries.addBankLabel( 0x52B4, 0x32, 'bnk_32_52B4' );
    dasmEntries.addBankLabel( 0x52EE, 0x32, 'bnk_32_52EE' );
    dasmEntries.addBankLabel( 0x5306, 0x32, 'bnk_32_5306' );
    dasmEntries.addBankLabel( 0x5324, 0x32, 'bnk_32_5324' );
    dasmEntries.addBankLabel( 0x5331, 0x32, 'bnk_32_5331' );
    dasmEntries.addBankLabel( 0x5339, 0x32, 'bnk_32_5339' );
    dasmEntries.addBankLabel( 0x5342, 0x32, 'bnk_32_5342' );
    dasmEntries.addBankLabel( 0x534B, 0x32, 'bnk_32_534B' );
    dasmEntries.addBankLabel( 0x5354, 0x32, 'bnk_32_5354' );
    dasmEntries.addBankLabel( 0x535D, 0x32, 'bnk_32_535D' );
    dasmEntries.addBankLabel( 0x5366, 0x32, 'bnk_32_5366' );
    dasmEntries.addBankLabel( 0x536F, 0x32, 'bnk_32_536F' );
    dasmEntries.addBankLabel( 0x5378, 0x32, 'bnk_32_5378' );
    dasmEntries.addBankLabel( 0x53AE, 0x32, 'bnk_32_53AE' );
    dasmEntries.addBankLabel( 0x53B5, 0x32, 'bnk_32_53B5' );
    dasmEntries.addBankLabel( 0x53BD, 0x32, 'bnk_32_53BD' );
    dasmEntries.addBankLabel( 0x54E7, 0x32, 'bnk_32_54E7' );
    dasmEntries.addBankLabel( 0x54F5, 0x32, 'bnk_32_54F5' );
    dasmEntries.addBankLabel( 0x54FD, 0x32, 'bnk_32_54FD' );
    dasmEntries.addBankLabel( 0x550B, 0x32, 'bnk_32_550B' );
    dasmEntries.addBankLabel( 0x5594, 0x32, 'bnk_32_5594' );
    dasmEntries.addBankLabel( 0x561D, 0x32, 'bnk_32_561D' );
    dasmEntries.addBankLabel( 0x5628, 0x32, 'bnk_32_5628' );
    dasmEntries.addBankLabel( 0x5740, 0x32, 'bnk_32_5740' );

    dasmEntries.addTableWpc( 0x5765, 0x32, 'tblWpc_32_5765' );
    dasmEntries.addBankLabel( 0x579E, 0x32, 'bnk_32_579E' );

    dasmEntries.addBankLabel( 0x57A9, 0x32, 'bnk_32_57A9' );
    dasmEntries.addBankLabel( 0x58C1, 0x32, 'bnk_32_58C1' );
    dasmEntries.addBankLabel( 0x5977, 0x32, 'bnk_32_5977' );
    dasmEntries.addBankLabel( 0x597B, 0x32, 'bnk_32_597B' );
    dasmEntries.addBankLabel( 0x5A1B, 0x32, 'bnk_32_5A1B' );
    dasmEntries.addBankLabel( 0x5A8A, 0x32, 'bnk_32_5A8A' );
    dasmEntries.addBankLabel( 0x5ADB, 0x32, 'bnk_32_5ADB' );
    dasmEntries.addBankLabel( 0x5AF0, 0x32, 'bnk_32_5AF0' );
    dasmEntries.addBankLabel( 0x5B55, 0x32, 'bnk_32_5B55' );
    dasmEntries.addBankLabel( 0x5B67, 0x32, 'bnk_32_5B67' );
    dasmEntries.addBankLabel( 0x5B94, 0x32, 'bnk_32_5B94' );
    dasmEntries.addBankLabel( 0x5BA3, 0x32, 'bnk_32_5BA3' );
    dasmEntries.addBankLabel( 0x5BAC, 0x32, 'bnk_32_5BAC' );
    dasmEntries.addBankLabel( 0x5BB0, 0x32, 'bnk_32_5BB0' );
    dasmEntries.addBankLabel( 0x5BC4, 0x32, 'bnk_32_5BC4' );
    dasmEntries.addBankLabel( 0x5BD3, 0x32, 'bnk_32_5BD3' );
    dasmEntries.addBankLabel( 0x5C12, 0x32, 'bnk_32_5C12' );
    dasmEntries.addBankLabel( 0x5C18, 0x32, 'bnk_32_5C18' );
    dasmEntries.addBankLabel( 0x5CAB, 0x32, 'bnk_32_5CAB' );
    dasmEntries.addBankLabel( 0x5CC6, 0x32, 'bnk_32_5CC6' );
    dasmEntries.addBankLabel( 0x5CE1, 0x32, 'bnk_32_5CE1' );
    dasmEntries.addBankLabel( 0x5CFC, 0x32, 'bnk_32_5CFC' );
    dasmEntries.addBankLabel( 0x5D17, 0x32, 'bnk_32_5D17' );
    dasmEntries.addBankLabel( 0x5D4B, 0x32, 'bnk_32_5D4B' );
    dasmEntries.addBankLabel( 0x5DBB, 0x32, 'bnk_32_5DBB' );
    dasmEntries.addBankLabel( 0x5DCD, 0x32, 'bnk_32_5DCD' );
    dasmEntries.addBankLabel( 0x5DEB, 0x32, 'bnk_32_5DEB' );
    dasmEntries.addBankLabel( 0x5E3A, 0x32, 'bnk_32_5E3A' );
    dasmEntries.addBankLabel( 0x5E41, 0x32, 'bnk_32_5E41' );
    dasmEntries.addBankLabel( 0x5E44, 0x32, 'bnk_32_5E44' );
    dasmEntries.addBankLabel( 0x5E5B, 0x32, 'bnk_32_5E5B' );
    dasmEntries.addBankLabel( 0x5EC0, 0x32, 'bnk_32_5EC0' );
    dasmEntries.addBankLabel( 0x5ED6, 0x32, 'bnk_32_5ED6' );
    dasmEntries.addBankLabel( 0x5EEC, 0x32, 'bnk_32_5EEC' );
    dasmEntries.addBankLabel( 0x5EF7, 0x32, 'bnk_32_5EF7' );
    dasmEntries.addBankLabel( 0x5F5A, 0x32, 'bnk_32_5F5A' );
    dasmEntries.addBankLabel( 0x5F85, 0x32, 'bnk_32_5F85' );
    dasmEntries.addBankLabel( 0x5FE3, 0x32, 'bnk_32_5FE3' );
    dasmEntries.addBankLabel( 0x600E, 0x32, 'bnk_32_600E' );
    dasmEntries.addBankLabel( 0x605F, 0x32, 'bnk_32_605F' );
    dasmEntries.addBankLabel( 0x60BE, 0x32, 'bnk_32_60BE' );
    dasmEntries.addBankLabel( 0x60FF, 0x32, 'bnk_32_60FF' );
    dasmEntries.addBankLabel( 0x6118, 0x32, 'bnk_32_6118' );
    dasmEntries.addBankLabel( 0x612D, 0x32, 'bnk_32_612D' );
    dasmEntries.addBankLabel( 0x614B, 0x32, 'bnk_32_614B' );
    dasmEntries.addBankLabel( 0x6185, 0x32, 'bnk_32_6185' );
    dasmEntries.addBankLabel( 0x618B, 0x32, 'bnk_32_618B' );
    dasmEntries.addBankLabel( 0x61CE, 0x32, 'bnk_32_61CE' );
    dasmEntries.addBankLabel( 0x61D8, 0x32, 'bnk_32_61D8' );
    dasmEntries.addBankLabel( 0x61DE, 0x32, 'bnk_32_61DE' );
    dasmEntries.addBankLabel( 0x61E4, 0x32, 'bnk_32_61E4' );
    dasmEntries.addBankLabel( 0x6226, 0x32, 'bnk_32_6226' );
    dasmEntries.addBankLabel( 0x6241, 0x32, 'bnk_32_6241' );
    dasmEntries.addBankLabel( 0x625F, 0x32, 'bnk_32_625F' );
    dasmEntries.addBankLabel( 0x627D, 0x32, 'bnk_32_627D' );
    dasmEntries.addBankLabel( 0x62BD, 0x32, 'bnk_32_62BD' );
    dasmEntries.addBankLabel( 0x62C3, 0x32, 'bnk_32_62C3' );
    dasmEntries.addBankLabel( 0x62C9, 0x32, 'bnk_32_62C9' );
    dasmEntries.addBankLabel( 0x6312, 0x32, 'bnk_32_6312' );
    dasmEntries.addBankLabel( 0x632B, 0x32, 'bnk_32_632B' );
    dasmEntries.addBankLabel( 0x6349, 0x32, 'bnk_32_6349' );
    dasmEntries.addBankLabel( 0x6383, 0x32, 'bnk_32_6383' );
    dasmEntries.addBankLabel( 0x6389, 0x32, 'bnk_32_6389' );
    dasmEntries.addBankLabel( 0x638F, 0x32, 'bnk_32_638F' );
    dasmEntries.addBankLabel( 0x63D8, 0x32, 'bnk_32_63D8' );
    dasmEntries.addBankLabel( 0x63F2, 0x32, 'bnk_32_63F2' );
    dasmEntries.addBankLabel( 0x63FF, 0x32, 'bnk_32_63FF' );
    dasmEntries.addBankLabel( 0x641D, 0x32, 'bnk_32_641D' );
    dasmEntries.addBankLabel( 0x6430, 0x32, 'bnk_32_6430' );
    dasmEntries.addBankLabel( 0x6436, 0x32, 'bnk_32_6436' );
    dasmEntries.addBankLabel( 0x647F, 0x32, 'bnk_32_647F' );
    dasmEntries.addBankLabel( 0x6498, 0x32, 'bnk_32_6498' );
    dasmEntries.addBankLabel( 0x64B6, 0x32, 'bnk_32_64B6' );
    dasmEntries.addBankLabel( 0x6523, 0x32, 'bnk_32_6523' );
    dasmEntries.addBankLabel( 0x6526, 0x32, 'bnk_32_6526' );
    dasmEntries.addBankLabel( 0x652C, 0x32, 'bnk_32_652C' );
    dasmEntries.addBankLabel( 0x6532, 0x32, 'bnk_32_6532' );
    dasmEntries.addBankLabel( 0x657E, 0x32, 'bnk_32_657E' );
    dasmEntries.addBankLabel( 0x6581, 0x32, 'bnk_32_6581' );
    dasmEntries.addBankLabel( 0x65CD, 0x32, 'bnk_32_65CD' );
    dasmEntries.addBankLabel( 0x65D0, 0x32, 'bnk_32_65D0' );
    dasmEntries.addBankLabel( 0x65D6, 0x32, 'bnk_32_65D6' );
    dasmEntries.addBankLabel( 0x65DC, 0x32, 'bnk_32_65DC' );
    dasmEntries.addBankLabel( 0x65E2, 0x32, 'bnk_32_65E2' );
    dasmEntries.addBankLabel( 0x6642, 0x32, 'bnk_32_6642' );
    dasmEntries.addBankLabel( 0x666C, 0x32, 'bnk_32_666C' );
    dasmEntries.addBankLabel( 0x666E, 0x32, 'bnk_32_666E' );
    dasmEntries.addBankLabel( 0x66A3, 0x32, 'bnk_32_66A3' );
    dasmEntries.addBankLabel( 0x672E, 0x32, 'bnk_32_672E' );
    dasmEntries.addBankLabel( 0x6745, 0x32, 'bnk_32_6745' );
    dasmEntries.addBankLabel( 0x6775, 0x32, 'bnk_32_6775' );
    dasmEntries.addBankLabel( 0x67B0, 0x32, 'bnk_32_67B0' );
    dasmEntries.addBankLabel( 0x67D2, 0x32, 'bnk_32_67D2' );
    dasmEntries.addBankLabel( 0x67E5, 0x32, 'bnk_32_67E5' );
    dasmEntries.addBankLabel( 0x67F1, 0x32, 'bnk_32_67F1' );
    dasmEntries.addBankLabel( 0x6843, 0x32, 'bnk_32_6843' );
    dasmEntries.addBankLabel( 0x6849, 0x32, 'bnk_32_6849' );
    dasmEntries.addBankLabel( 0x684C, 0x32, 'bnk_32_684C' );
    dasmEntries.addBankLabel( 0x689E, 0x32, 'bnk_32_689E' );
    dasmEntries.addBankLabel( 0x68A4, 0x32, 'bnk_32_68A4' );
    dasmEntries.addBankLabel( 0x68A7, 0x32, 'bnk_32_68A7' );
    dasmEntries.addBankLabel( 0x68E5, 0x32, 'bnk_32_68E5' );
    dasmEntries.addBankLabel( 0x6907, 0x32, 'bnk_32_6907' );
    dasmEntries.addBankLabel( 0x6945, 0x32, 'bnk_32_6945' );
    dasmEntries.addBankLabel( 0x6966, 0x32, 'bnk_32_6966' );
    dasmEntries.addBankLabel( 0x69A4, 0x32, 'bnk_32_69A4' );
    dasmEntries.addBankLabel( 0x69C5, 0x32, 'bnk_32_69C5' );
    dasmEntries.addBankLabel( 0x6A14, 0x32, 'bnk_32_6A14' );
    dasmEntries.addBankLabel( 0x6A1F, 0x32, 'bnk_32_6A1F' );
    dasmEntries.addBankLabel( 0x6A22, 0x32, 'bnk_32_6A22' );
    dasmEntries.addBankLabel( 0x6A6F, 0x32, 'bnk_32_6A6F' );
    dasmEntries.addBankLabel( 0x6A7A, 0x32, 'bnk_32_6A7A' );
    dasmEntries.addBankLabel( 0x6B6A, 0x32, 'bnk_32_6B6A' );
    dasmEntries.addBankLabel( 0x6C5A, 0x32, 'bnk_32_6C5A' );
    dasmEntries.addBankLabel( 0x6C60, 0x32, 'bnk_32_6C60' );
    dasmEntries.addBankLabel( 0x6C69, 0x32, 'bnk_32_6C69' );
    dasmEntries.addBankLabel( 0x6C79, 0x32, 'bnk_32_6C79' );
    dasmEntries.addBankLabel( 0x6C9B, 0x32, 'bnk_32_6C9B' );
    dasmEntries.addBankLabel( 0x6CAB, 0x32, 'bnk_32_6CAB' );
    dasmEntries.addBankLabel( 0x6CCD, 0x32, 'bnk_32_6CCD' );
    dasmEntries.addBankLabel( 0x6D55, 0x32, 'bnk_32_6D55' );
    dasmEntries.addBankLabel( 0x6D77, 0x32, 'bnk_32_6D77' );
    dasmEntries.addBankLabel( 0x6D93, 0x32, 'bnk_32_6D93' );
    dasmEntries.addBankLabel( 0x6D9E, 0x32, 'bnk_32_6D9E' );
    dasmEntries.addBankLabel( 0x6DA9, 0x32, 'bnk_32_6DA9' );
    dasmEntries.addBankLabel( 0x6DB4, 0x32, 'bnk_32_6DB4' );
    dasmEntries.addBankLabel( 0x6DBF, 0x32, 'bnk_32_6DBF' );
    dasmEntries.addBankLabel( 0x6E1B, 0x32, 'bnk_32_6E1B' );
    dasmEntries.addBankLabel( 0x6E24, 0x32, 'bnk_32_6E24' );
    dasmEntries.addBankLabel( 0x6E26, 0x32, 'bnk_32_6E26' );
    dasmEntries.addBankLabel( 0x6E7B, 0x32, 'bnk_32_6E7B' );
    dasmEntries.addBankLabel( 0x6E91, 0x32, 'bnk_32_6E91' );
    dasmEntries.addBankLabel( 0x6EA2, 0x32, 'bnk_32_6EA2' );
    dasmEntries.addBankLabel( 0x6EB3, 0x32, 'bnk_32_6EB3' );
    dasmEntries.addBankLabel( 0x6ED0, 0x32, 'bnk_32_6ED0' );
    dasmEntries.addBankLabel( 0x6EE1, 0x32, 'bnk_32_6EE1' );
    dasmEntries.addBankLabel( 0x6EF2, 0x32, 'bnk_32_6EF2' );
    dasmEntries.addBankLabel( 0x6F0F, 0x32, 'bnk_32_6F0F' );
    dasmEntries.addBankLabel( 0x6F15, 0x32, 'bnk_32_6F15' );
    dasmEntries.addBankLabel( 0x6F35, 0x32, 'bnk_32_6F35' );
    dasmEntries.addBankLabel( 0x6F3B, 0x32, 'bnk_32_6F3B' );
    dasmEntries.addBankLabel( 0x6F58, 0x32, 'bnk_32_6F58' );
    dasmEntries.addBankLabel( 0x6F5E, 0x32, 'bnk_32_6F5E' );
    dasmEntries.addBankLabel( 0x6F89, 0x32, 'bnk_32_6F89' );
    dasmEntries.addBankLabel( 0x6F8F, 0x32, 'bnk_32_6F8F' );
    dasmEntries.addBankLabel( 0x6FB7, 0x32, 'bnk_32_6FB7' );
    dasmEntries.addBankLabel( 0x6FBD, 0x32, 'bnk_32_6FBD' );
    dasmEntries.addBankLabel( 0x6FEE, 0x32, 'bnk_32_6FEE' );
    dasmEntries.addBankLabel( 0x6FF4, 0x32, 'bnk_32_6FF4' );

    dasmEntries.addBankLabel( 0x7022, 0x32, 'bnk_32_7022' );
    dasmEntries.addBankLabel( 0x703F, 0x32, 'bnk_32_703F' );
    dasmEntries.addBankLabel( 0x705B, 0x32, 'bnk_32_705B' );
    dasmEntries.addBankLabel( 0x706C, 0x32, 'bnk_32_706C' );
    dasmEntries.addBankLabel( 0x709A, 0x32, 'bnk_32_709A' );
    dasmEntries.addBankLabel( 0x70C8, 0x32, 'bnk_32_70C8' );
    dasmEntries.addBankLabel( 0x70FA, 0x32, 'bnk_32_70FA' );
    dasmEntries.addBankLabel( 0x7127, 0x32, 'bnk_32_7127' );
    dasmEntries.addBankLabel( 0x71AA, 0x32, 'bnk_32_71AA' );
    dasmEntries.addBankLabel( 0x71DD, 0x32, 'bnk_32_71DD' );
    dasmEntries.addBankLabel( 0x720A, 0x32, 'bnk_32_720A' );
    dasmEntries.addBankLabel( 0x7293, 0x32, 'bnk_32_7293' );
    dasmEntries.addBankLabel( 0x731F, 0x32, 'bnk_32_731F' );
    dasmEntries.addBankLabel( 0x7320, 0x32, 'bnk_32_7320' );
    dasmEntries.addBankLabel( 0x7331, 0x32, 'bnk_32_7331' );
    dasmEntries.addBankLabel( 0x73A0, 0x32, 'bnk_32_73A0' );
    dasmEntries.addBankLabel( 0x73DE, 0x32, 'bnk_32_73DE' );
    dasmEntries.addBankLabel( 0x73E6, 0x32, 'bnk_32_73E6' );
    dasmEntries.addBankLabel( 0x74B0, 0x32, 'bnk_32_74B0' );
    dasmEntries.addBankLabel( 0x7517, 0x32, 'bnk_32_7517' );
    dasmEntries.addBankLabel( 0x7566, 0x32, 'bnk_32_7566' );
    dasmEntries.addBankLabel( 0x75B9, 0x32, 'bnk_32_75B9' );
    dasmEntries.addBankLabel( 0x7638, 0x32, 'bnk_32_7638' );
    dasmEntries.addBankLabel( 0x7651, 0x32, 'bnk_32_7651' );
    dasmEntries.addBankLabel( 0x7692, 0x32, 'bnk_32_7692' );
    dasmEntries.addBankLabel( 0x76EC, 0x32, 'bnk_32_76EC' );
    dasmEntries.addBankLabel( 0x7733, 0x32, 'bnk_32_7733' );
    dasmEntries.addBankLabel( 0x777A, 0x32, 'bnk_32_777A' );
    dasmEntries.addBankLabel( 0x77C1, 0x32, 'bnk_32_77C1' );
    dasmEntries.addBankLabel( 0x780E, 0x32, 'bnk_32_780E' );
    dasmEntries.addBankLabel( 0x782D, 0x32, 'bnk_32_782D' );
    dasmEntries.addBankLabel( 0x783C, 0x32, 'bnk_32_783C' );
    dasmEntries.addBankLabel( 0x78ED, 0x32, 'bnk_32_78ED' );
    dasmEntries.addBankLabel( 0x79CC, 0x32, 'bnk_32_79CC' );
    dasmEntries.addBankLabel( 0x7A10, 0x32, 'bnk_32_7A10' );
    dasmEntries.addBankLabel( 0x7A3F, 0x32, 'bnk_32_7A3F' );
    dasmEntries.addBankLabel( 0x7A7C, 0x32, 'bnk_32_7A7C' );
    dasmEntries.addBankLabel( 0x7B8F, 0x32, 'bnk_32_7B8F' );
    dasmEntries.addBankLabel( 0x7BD9, 0x32, 'bnk_32_7BD9' );
    dasmEntries.addBankLabel( 0x7C10, 0x32, 'bnk_32_7C10' );
    dasmEntries.addBankLabel( 0x7C22, 0x32, 'bnk_32_7C22' );
    dasmEntries.addBankLabel( 0x7C34, 0x32, 'bnk_32_7C34' );
    dasmEntries.addBankLabel( 0x7C70, 0x32, 'bnk_32_7C70' );
    dasmEntries.addBankLabel( 0x7C85, 0x32, 'bnk_32_7C85' );
    dasmEntries.addBankLabel( 0x7CA1, 0x32, 'bnk_32_7CA1' );
    dasmEntries.addBankLabel( 0x7CEB, 0x32, 'bnk_32_7CEB' );
    dasmEntries.addBankLabel( 0x7D2B, 0x32, 'bnk_32_7D2B' );
    dasmEntries.addBankLabel( 0x7D6B, 0x32, 'bnk_32_7D6B' );
    dasmEntries.addBankLabel( 0x7DA9, 0x32, 'bnk_32_7DA9' );
    dasmEntries.addBankLabel( 0x7DE9, 0x32, 'bnk_32_7DE9' );
    dasmEntries.addBankLabel( 0x7E29, 0x32, 'bnk_32_7E29' );
    dasmEntries.addBankLabel( 0x7E38, 0x32, 'bnk_32_7E38' );
    dasmEntries.addBankLabel( 0x7E59, 0x32, 'bnk_32_7E59' );
    dasmEntries.addBankLabel( 0x7E62, 0x32, 'bnk_32_7E62' );
    dasmEntries.addBankLabel( 0x7E83, 0x32, 'bnk_32_7E83' );
    dasmEntries.addBankLabel( 0x7E8C, 0x32, 'bnk_32_7E8C' );
    dasmEntries.addBankLabel( 0x7EA3, 0x32, 'bnk_32_7EA3' );
    dasmEntries.addBankLabel( 0x7EAC, 0x32, 'bnk_32_7EAC' );
    dasmEntries.addBankLabel( 0x7EC3, 0x32, 'bnk_32_7EC3' );
    dasmEntries.addBankLabel( 0x7ECF, 0x32, 'bnk_32_7ECF' );
    dasmEntries.addBankLabel( 0x7F09, 0x32, 'bnk_32_7F09' );
    dasmEntries.addBankLabel( 0x7F22, 0x32, 'bnk_32_7F22' );
    dasmEntries.addBankLabel( 0x7F3B, 0x32, 'bnk_32_7F3B' );
    dasmEntries.addBankLabel( 0x7F44, 0x32, 'bnk_32_7F44' );
    dasmEntries.addBankLabel( 0x7F5B, 0x32, 'bnk_32_7F5B' );
    dasmEntries.addBankLabel( 0x7F64, 0x32, 'bnk_32_7F64' );
    dasmEntries.addBankLabel( 0x7F79, 0x32, 'bnk_32_7F79' );    
    
}

function getDasmEntries_bnk_33( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x33, 'pageMarker_bnk_33', 1, 1 );
    dasmEntries.addTableWpc( 0x4029, 0x33, 'tblwpcSevenByte' );
    dasmEntries.addTable( 0x40fa, 0x33, 'tbl_33_40fa', 3, 2 );
    dasmEntries.addTableWpc( 0x5db1, 0x33, 'tblwpc_bnk33_FourByte' );
    dasmEntries.addTable( 0x5dd4, 0x33, 'tbl_33_5dd4', 0x08, 3 );
    dasmEntries.addBankLabel( 0x5dec, 0x33, 'bank_33_5dec' );
    dasmEntries.addBankLabel( 0x5e16, 0x33, 'bank_33_5e16' );
    dasmEntries.addBankLabel( 0x5edb, 0x33, 'bank_33_5edb' );
    dasmEntries.addBankLabel( 0x5f4f, 0x33, 'Start_SerialPortDebug_DMD_Task' );
    dasmEntries.addTableWpc( 0x5f54, 0x33, 'tblwpc_bnk33_SixteenByte' );
    dasmEntries.addBankLabel( 0x5fd7, 0x33, 'bank_33_5fd7' );
    dasmEntries.addBankLabel( 0x6119, 0x33, 'bank_33_6119' );
    dasmEntries.addBankLabel( 0x6121, 0x33, 'bank_33_6121' );
    dasmEntries.addBankLabel( 0x6197, 0x33, 'bank_33_6197' );
    dasmEntries.addTable( 0x61c0, 0x33, 'tbl_33_61c0', 0x11b, 1 );
    dasmEntries.addTableWpc( 0x642c, 0x33, 'tblwpc_bnk33_OneByte' );
    dasmEntries.addTable( 0x70f0, 0x33, 'tbl_33_70f0', 0x1, 5 );
    dasmEntries.addTable( 0x7253, 0x33, 'tbl_33_7253', 0x1, 5 );

    dasmEntries.addBankLabel( 0x4001, 0x33, 'bnk_33_4001' );
    dasmEntries.addBankLabel( 0x40F7, 0x33, 'bnk_33_40F7' );
    dasmEntries.addBankLabel( 0x4100, 0x33, 'bnk_33_4100' );
    dasmEntries.addBankLabel( 0x4180, 0x33, 'bnk_33_4180' );
    dasmEntries.addBankLabel( 0x4196, 0x33, 'bnk_33_4196' );
    dasmEntries.addBankLabel( 0x41AB, 0x33, 'bnk_33_41AB' );
    dasmEntries.addBankLabel( 0x41BA, 0x33, 'bnk_33_41BA' );
    dasmEntries.addBankLabel( 0x41C8, 0x33, 'bnk_33_41C8' );
    dasmEntries.addBankLabel( 0x41DB, 0x33, 'bnk_33_41DB' );
    dasmEntries.addBankLabel( 0x4366, 0x33, 'bnk_33_4366' );
    dasmEntries.addBankLabel( 0x4379, 0x33, 'bnk_33_4379' );
    dasmEntries.addBankLabel( 0x483B, 0x33, 'bnk_33_483B' );
    dasmEntries.addBankLabel( 0x4ACC, 0x33, 'bnk_33_4ACC' );
    dasmEntries.addBankLabel( 0x4AFC, 0x33, 'bnk_33_4AFC' );
    dasmEntries.addBankLabel( 0x4B96, 0x33, 'bnk_33_4B96' );
    dasmEntries.addBankLabel( 0x4BDB, 0x33, 'bnk_33_4BDB' );
    dasmEntries.addBankLabel( 0x4BF1, 0x33, 'bnk_33_4BF1' );
    dasmEntries.addBankLabel( 0x4C43, 0x33, 'bnk_33_4C43' );
    dasmEntries.addBankLabel( 0x4C59, 0x33, 'bnk_33_4C59' );
    dasmEntries.addBankLabel( 0x4C92, 0x33, 'bnk_33_4C92' );
    dasmEntries.addBankLabel( 0x4CA8, 0x33, 'bnk_33_4CA8' );
    dasmEntries.addBankLabel( 0x4D1E, 0x33, 'bnk_33_4D1E' );
    dasmEntries.addBankLabel( 0x4D48, 0x33, 'bnk_33_4D48' );
    dasmEntries.addBankLabel( 0x4D89, 0x33, 'bnk_33_4D89' );
    dasmEntries.addBankLabel( 0x4D9F, 0x33, 'bnk_33_4D9F' );
    dasmEntries.addBankLabel( 0x4E0D, 0x33, 'bnk_33_4E0D' );
    dasmEntries.addBankLabel( 0x4E2B, 0x33, 'bnk_33_4E2B' );
    dasmEntries.addBankLabel( 0x4E72, 0x33, 'bnk_33_4E72' );
    dasmEntries.addBankLabel( 0x4E76, 0x33, 'bnk_33_4E76' );
    dasmEntries.addBankLabel( 0x4EB3, 0x33, 'bnk_33_4EB3' );
    dasmEntries.addBankLabel( 0x4ED2, 0x33, 'bnk_33_4ED2' );
    dasmEntries.addBankLabel( 0x4F06, 0x33, 'bnk_33_4F06' );
    dasmEntries.addBankLabel( 0x4F1E, 0x33, 'bnk_33_4F1E' );
    dasmEntries.addBankLabel( 0x4F4E, 0x33, 'bnk_33_4F4E' );
    dasmEntries.addBankLabel( 0x4F82, 0x33, 'bnk_33_4F82' );
    dasmEntries.addBankLabel( 0x4F8C, 0x33, 'bnk_33_4F8C' );
    dasmEntries.addBankLabel( 0x4F99, 0x33, 'bnk_33_4F99' );
    dasmEntries.addBankLabel( 0x4FB9, 0x33, 'bnk_33_4FB9' );
    dasmEntries.addBankLabel( 0x4FC5, 0x33, 'bnk_33_4FC5' );
    dasmEntries.addBankLabel( 0x4FCA, 0x33, 'bnk_33_4FCA' );

    dasmEntries.addBankLabel( 0x5025, 0x33, 'bnk_33_5025' );
    dasmEntries.addBankLabel( 0x5031, 0x33, 'bnk_33_5031' );
    dasmEntries.addBankLabel( 0x504D, 0x33, 'bnk_33_504D' );
    dasmEntries.addBankLabel( 0x508F, 0x33, 'bnk_33_508F' );
    dasmEntries.addBankLabel( 0x509C, 0x33, 'bnk_33_509C' );
    dasmEntries.addBankLabel( 0x50B8, 0x33, 'bnk_33_50B8' );
    dasmEntries.addBankLabel( 0x511D, 0x33, 'bnk_33_511D' );
    dasmEntries.addBankLabel( 0x512A, 0x33, 'bnk_33_512A' );
    dasmEntries.addBankLabel( 0x518F, 0x33, 'bnk_33_518F' );
    dasmEntries.addBankLabel( 0x519C, 0x33, 'bnk_33_519C' );
    dasmEntries.addBankLabel( 0x51AB, 0x33, 'bnk_33_51AB' );
    dasmEntries.addBankLabel( 0x520A, 0x33, 'bnk_33_520A' );
    dasmEntries.addBankLabel( 0x5219, 0x33, 'bnk_33_5219' );
    dasmEntries.addBankLabel( 0x5234, 0x33, 'bnk_33_5234' );
    dasmEntries.addBankLabel( 0x52D7, 0x33, 'bnk_33_52D7' );
    dasmEntries.addBankLabel( 0x5376, 0x33, 'bnk_33_5376' );
    dasmEntries.addBankLabel( 0x5409, 0x33, 'bnk_33_5409' );
    dasmEntries.addBankLabel( 0x542A, 0x33, 'bnk_33_542A' );
    dasmEntries.addBankLabel( 0x5444, 0x33, 'bnk_33_5444' );
    dasmEntries.addBankLabel( 0x54D7, 0x33, 'bnk_33_54D7' );
    dasmEntries.addBankLabel( 0x54EA, 0x33, 'bnk_33_54EA' );
    dasmEntries.addBankLabel( 0x5530, 0x33, 'bnk_33_5530' );
    dasmEntries.addBankLabel( 0x5543, 0x33, 'bnk_33_5543' );
    dasmEntries.addBankLabel( 0x5580, 0x33, 'bnk_33_5580' );
    dasmEntries.addBankLabel( 0x5593, 0x33, 'bnk_33_5593' );
    dasmEntries.addBankLabel( 0x563F, 0x33, 'bnk_33_563F' );
    dasmEntries.addBankLabel( 0x565B, 0x33, 'bnk_33_565B' );
    dasmEntries.addBankLabel( 0x569B, 0x33, 'bnk_33_569B' );
    dasmEntries.addBankLabel( 0x56B1, 0x33, 'bnk_33_56B1' );
    dasmEntries.addBankLabel( 0x56B8, 0x33, 'bnk_33_56B8' );
    dasmEntries.addBankLabel( 0x56FB, 0x33, 'bnk_33_56FB' );
    dasmEntries.addBankLabel( 0x5704, 0x33, 'bnk_33_5704' );
    dasmEntries.addBankLabel( 0x5711, 0x33, 'bnk_33_5711' );
    dasmEntries.addBankLabel( 0x5727, 0x33, 'bnk_33_5727' );
    dasmEntries.addBankLabel( 0x5746, 0x33, 'bnk_33_5746' );
    dasmEntries.addBankLabel( 0x57A0, 0x33, 'bnk_33_57A0' );
    dasmEntries.addBankLabel( 0x57AB, 0x33, 'bnk_33_57AB' );
    dasmEntries.addBankLabel( 0x57BC, 0x33, 'bnk_33_57BC' );
    dasmEntries.addBankLabel( 0x57CF, 0x33, 'bnk_33_57CF' );
    dasmEntries.addBankLabel( 0x581D, 0x33, 'bnk_33_581D' );
    dasmEntries.addBankLabel( 0x585F, 0x33, 'bnk_33_585F' );
    dasmEntries.addBankLabel( 0x592B, 0x33, 'bnk_33_592B' );
    dasmEntries.addBankLabel( 0x5940, 0x33, 'bnk_33_5940' );
    dasmEntries.addBankLabel( 0x5949, 0x33, 'bnk_33_5949' );
    dasmEntries.addBankLabel( 0x595A, 0x33, 'bnk_33_595A' );
    dasmEntries.addBankLabel( 0x596C, 0x33, 'bnk_33_596C' );
    dasmEntries.addBankLabel( 0x599C, 0x33, 'bnk_33_599C' );
    dasmEntries.addBankLabel( 0x59B3, 0x33, 'bnk_33_59B3' );
    dasmEntries.addBankLabel( 0x59C7, 0x33, 'bnk_33_59C7' );
    dasmEntries.addBankLabel( 0x59E8, 0x33, 'bnk_33_59E8' );
    dasmEntries.addBankLabel( 0x59EF, 0x33, 'bnk_33_59EF' );
    dasmEntries.addBankLabel( 0x5A42, 0x33, 'bnk_33_5A42' );
    dasmEntries.addBankLabel( 0x5A4D, 0x33, 'bnk_33_5A4D' );
    dasmEntries.addBankLabel( 0x5A6A, 0x33, 'bnk_33_5A6A' );
    dasmEntries.addBankLabel( 0x5AA4, 0x33, 'bnk_33_5AA4' );
    dasmEntries.addBankLabel( 0x5AEB, 0x33, 'bnk_33_5AEB' );
    dasmEntries.addBankLabel( 0x5B03, 0x33, 'bnk_33_5B03' );
    dasmEntries.addBankLabel( 0x5B8F, 0x33, 'bnk_33_5B8F' );
    dasmEntries.addBankLabel( 0x5BCB, 0x33, 'bnk_33_5BCB' );
    dasmEntries.addBankLabel( 0x5BF5, 0x33, 'bnk_33_5BF5' );
    dasmEntries.addBankLabel( 0x5C03, 0x33, 'bnk_33_5C03' );
    dasmEntries.addBankLabel( 0x5C64, 0x33, 'bnk_33_5C64' );
    dasmEntries.addBankLabel( 0x5C9B, 0x33, 'bnk_33_5C9B' );
    dasmEntries.addBankLabel( 0x5CB7, 0x33, 'bnk_33_5CB7' );
    dasmEntries.addBankLabel( 0x5D0A, 0x33, 'bnk_33_5D0A' );
    dasmEntries.addBankLabel( 0x5D2A, 0x33, 'bnk_33_5D2A' );
    dasmEntries.addBankLabel( 0x5D56, 0x33, 'bnk_33_5D56' );
    dasmEntries.addBankLabel( 0x5D98, 0x33, 'bnk_33_5D98' );
    dasmEntries.addBankLabel( 0x5DFF, 0x33, 'bnk_33_5DFF' );
    dasmEntries.addBankLabel( 0x5E29, 0x33, 'bnk_33_5E29' );

    dasmEntries.addBankLabel( 0x6037, 0x33, 'bnk_33_6037' );
    dasmEntries.addBankLabel( 0x6046, 0x33, 'bnk_33_6046' );
    dasmEntries.addBankLabel( 0x60AE, 0x33, 'bnk_33_60AE' );
    dasmEntries.addBankLabel( 0x610D, 0x33, 'bnk_33_610D' );
    dasmEntries.addBankLabel( 0x6184, 0x33, 'bnk_33_6184' );
    dasmEntries.addBankLabel( 0x62DB, 0x33, 'bnk_33_62DB' );
    dasmEntries.addBankLabel( 0x62EB, 0x33, 'bnk_33_62EB' );
    dasmEntries.addBankLabel( 0x62F3, 0x33, 'bnk_33_62F3' );
    dasmEntries.addBankLabel( 0x6307, 0x33, 'bnk_33_6307' );
    dasmEntries.addTable( 0x631d, 0x33, 'tbl_33_631d', 8, 2 );
    dasmEntries.addBankLabel( 0x632d, 0x33, 'bnk_33_632d' );
    dasmEntries.addBankLabel( 0x6363, 0x33, 'bnk_33_6363' );
    dasmEntries.addBankLabel( 0x6391, 0x33, 'bnk_33_6391' );
    dasmEntries.addBankLabel( 0x6397, 0x33, 'bnk_33_6397' );
    dasmEntries.addBankLabel( 0x639D, 0x33, 'bnk_33_639D' );
    dasmEntries.addBankLabel( 0x63A3, 0x33, 'bnk_33_63A3' );
    dasmEntries.addBankLabel( 0x63B0, 0x33, 'bnk_33_63B0' );
    dasmEntries.addBankLabel( 0x63C4, 0x33, 'bnk_33_63C4' );
    dasmEntries.addBankLabel( 0x643B, 0x33, 'bnk_33_643B' );
    dasmEntries.addBankLabel( 0x6465, 0x33, 'bnk_33_6465' );
    dasmEntries.addBankLabel( 0x6477, 0x33, 'bnk_33_6477' );
    dasmEntries.addBankLabel( 0x648B, 0x33, 'bnk_33_648B' );
    dasmEntries.addBankLabel( 0x6498, 0x33, 'bnk_33_6498' );
    dasmEntries.addBankLabel( 0x64B3, 0x33, 'bnk_33_64B3' );
    dasmEntries.addBankLabel( 0x64C3, 0x33, 'bnk_33_64C3' );
    dasmEntries.addBankLabel( 0x64E4, 0x33, 'bnk_33_64E4' );
    dasmEntries.addBankLabel( 0x64F4, 0x33, 'bnk_33_64F4' );
    dasmEntries.addBankLabel( 0x651B, 0x33, 'bnk_33_651B' );
    dasmEntries.addBankLabel( 0x653F, 0x33, 'bnk_33_653F' );
    dasmEntries.addBankLabel( 0x6589, 0x33, 'bnk_33_6589' );
    dasmEntries.addBankLabel( 0x65DA, 0x33, 'bnk_33_65DA' );
    dasmEntries.addBankLabel( 0x65F5, 0x33, 'bnk_33_65F5' );
    dasmEntries.addBankLabel( 0x6605, 0x33, 'bnk_33_6605' );
    dasmEntries.addBankLabel( 0x6626, 0x33, 'bnk_33_6626' );
    dasmEntries.addBankLabel( 0x6636, 0x33, 'bnk_33_6636' );
    dasmEntries.addBankLabel( 0x665D, 0x33, 'bnk_33_665D' );
    dasmEntries.addBankLabel( 0x6681, 0x33, 'bnk_33_6681' );
    dasmEntries.addBankLabel( 0x66A9, 0x33, 'bnk_33_66A9' );
    dasmEntries.addBankLabel( 0x66BF, 0x33, 'bnk_33_66BF' );
    dasmEntries.addBankLabel( 0x66CF, 0x33, 'bnk_33_66CF' );
    dasmEntries.addBankLabel( 0x66F0, 0x33, 'bnk_33_66F0' );
    dasmEntries.addBankLabel( 0x6700, 0x33, 'bnk_33_6700' );
    dasmEntries.addBankLabel( 0x6727, 0x33, 'bnk_33_6727' );
    dasmEntries.addBankLabel( 0x674B, 0x33, 'bnk_33_674B' );
    dasmEntries.addBankLabel( 0x6777, 0x33, 'bnk_33_6777' );
    dasmEntries.addBankLabel( 0x6787, 0x33, 'bnk_33_6787' );
    dasmEntries.addBankLabel( 0x67A8, 0x33, 'bnk_33_67A8' );
    dasmEntries.addBankLabel( 0x67B8, 0x33, 'bnk_33_67B8' );
    dasmEntries.addBankLabel( 0x67DF, 0x33, 'bnk_33_67DF' );
    dasmEntries.addBankLabel( 0x6803, 0x33, 'bnk_33_6803' );
    dasmEntries.addBankLabel( 0x682F, 0x33, 'bnk_33_682F' );
    dasmEntries.addBankLabel( 0x683F, 0x33, 'bnk_33_683F' );
    dasmEntries.addBankLabel( 0x6860, 0x33, 'bnk_33_6860' );
    dasmEntries.addBankLabel( 0x6870, 0x33, 'bnk_33_6870' );
    dasmEntries.addBankLabel( 0x6897, 0x33, 'bnk_33_6897' );
    dasmEntries.addBankLabel( 0x68BB, 0x33, 'bnk_33_68BB' );
    dasmEntries.addBankLabel( 0x6930, 0x33, 'bnk_33_6930' );
    dasmEntries.addBankLabel( 0x695B, 0x33, 'bnk_33_695B' );
    dasmEntries.addBankLabel( 0x6986, 0x33, 'bnk_33_6986' );
    dasmEntries.addBankLabel( 0x69F8, 0x33, 'bnk_33_69F8' );
    dasmEntries.addBankLabel( 0x6A18, 0x33, 'bnk_33_6A18' );
    dasmEntries.addBankLabel( 0x6A32, 0x33, 'bnk_33_6A32' );
    dasmEntries.addBankLabel( 0x6A53, 0x33, 'bnk_33_6A53' );
    dasmEntries.addBankLabel( 0x6A81, 0x33, 'bnk_33_6A81' );
    dasmEntries.addBankLabel( 0x6AAF, 0x33, 'bnk_33_6AAF' );
    dasmEntries.addBankLabel( 0x6ADE, 0x33, 'bnk_33_6ADE' );
    dasmEntries.addBankLabel( 0x6B0C, 0x33, 'bnk_33_6B0C' );
    dasmEntries.addBankLabel( 0x6B3A, 0x33, 'bnk_33_6B3A' );
    dasmEntries.addBankLabel( 0x6B6B, 0x33, 'bnk_33_6B6B' );
    dasmEntries.addBankLabel( 0x6B8C, 0x33, 'bnk_33_6B8C' );
    dasmEntries.addBankLabel( 0x6BAA, 0x33, 'bnk_33_6BAA' );
    dasmEntries.addBankLabel( 0x6BEF, 0x33, 'bnk_33_6BEF' );
    dasmEntries.addBankLabel( 0x6C11, 0x33, 'bnk_33_6C11' );
    dasmEntries.addBankLabel( 0x6C3F, 0x33, 'bnk_33_6C3F' );
    dasmEntries.addBankLabel( 0x6C86, 0x33, 'bnk_33_6C86' );
    dasmEntries.addBankLabel( 0x6C88, 0x33, 'bnk_33_6C88' );
    dasmEntries.addBankLabel( 0x6CB5, 0x33, 'bnk_33_6CB5' );
    dasmEntries.addBankLabel( 0x6D08, 0x33, 'bnk_33_6D08' );
    dasmEntries.addBankLabel( 0x6D1A, 0x33, 'bnk_33_6D1A' );
    dasmEntries.addBankLabel( 0x6D4C, 0x33, 'bnk_33_6D4C' );
    dasmEntries.addBankLabel( 0x6D6D, 0x33, 'bnk_33_6D6D' );
    dasmEntries.addBankLabel( 0x6D94, 0x33, 'bnk_33_6D94' );
    dasmEntries.addBankLabel( 0x6DB8, 0x33, 'bnk_33_6DB8' );
    dasmEntries.addBankLabel( 0x6E06, 0x33, 'bnk_33_6E06' );
    dasmEntries.addBankLabel( 0x6E48, 0x33, 'bnk_33_6E48' );
    dasmEntries.addBankLabel( 0x6E69, 0x33, 'bnk_33_6E69' );
    dasmEntries.addBankLabel( 0x6E90, 0x33, 'bnk_33_6E90' );
    dasmEntries.addBankLabel( 0x6EB4, 0x33, 'bnk_33_6EB4' );
    dasmEntries.addBankLabel( 0x6EF3, 0x33, 'bnk_33_6EF3' );
    dasmEntries.addBankLabel( 0x6F1A, 0x33, 'bnk_33_6F1A' );
    dasmEntries.addBankLabel( 0x6F3E, 0x33, 'bnk_33_6F3E' );
    dasmEntries.addBankLabel( 0x6F7D, 0x33, 'bnk_33_6F7D' );
    dasmEntries.addBankLabel( 0x6FA4, 0x33, 'bnk_33_6FA4' );
    dasmEntries.addBankLabel( 0x6FC8, 0x33, 'bnk_33_6FC8' );

    dasmEntries.addBankLabel( 0x700B, 0x33, 'bnk_33_700B' );
    dasmEntries.addBankLabel( 0x7051, 0x33, 'bnk_33_7051' );
    dasmEntries.addBankLabel( 0x70F5, 0x33, 'bnk_33_70F5' );
    dasmEntries.addBankLabel( 0x710D, 0x33, 'bnk_33_710D' );
    dasmEntries.addBankLabel( 0x7135, 0x33, 'bnk_33_7135' );
    dasmEntries.addBankLabel( 0x7142, 0x33, 'bnk_33_7142' );
    dasmEntries.addBankLabel( 0x7175, 0x33, 'bnk_33_7175' );
    dasmEntries.addBankLabel( 0x7189, 0x33, 'bnk_33_7189' );
    dasmEntries.addBankLabel( 0x7215, 0x33, 'bnk_33_7215' );
    dasmEntries.addBankLabel( 0x7258, 0x33, 'bnk_33_7258' );
    dasmEntries.addBankLabel( 0x7279, 0x33, 'bnk_33_7279' );
    dasmEntries.addBankLabel( 0x72A8, 0x33, 'bnk_33_72A8' );
    dasmEntries.addBankLabel( 0x72F4, 0x33, 'bnk_33_72F4' );
    dasmEntries.addBankLabel( 0x7316, 0x33, 'bnk_33_7316' );
    dasmEntries.addTable( 0x7413, 0x33, 'tbl_33_7413', 3, 2 );
    dasmEntries.addBankLabel( 0x741F, 0x33, 'bnk_33_741F' );
    dasmEntries.addBankLabel( 0x7441, 0x33, 'bnk_33_7441' );
    dasmEntries.addBankLabel( 0x747A, 0x33, 'bnk_33_747A' );
    dasmEntries.addBankLabel( 0x747C, 0x33, 'bnk_33_747C' );
    dasmEntries.addBankLabel( 0x7000, 0x33, 'bnk_33_7000' );
    dasmEntries.addBankLabel( 0x7419, 0x33, 'bnk_33_7419' );
    dasmEntries.addBankLabel( 0x7419, 0x33, 'bnk_33_7419' );
    dasmEntries.addBankLabel( 0x74C4, 0x33, 'bnk_33_74C4' );
    dasmEntries.addBankLabel( 0x756D, 0x33, 'bnk_33_756D' );
    dasmEntries.addBankLabel( 0x7580, 0x33, 'bnk_33_7580' );
    dasmEntries.addBankLabel( 0x75A3, 0x33, 'bnk_33_75A3' );
    dasmEntries.addBankLabel( 0x75D6, 0x33, 'bnk_33_75D6' );
    dasmEntries.addBankLabel( 0x7604, 0x33, 'bnk_33_7604' );
    dasmEntries.addBankLabel( 0x7645, 0x33, 'bnk_33_7645' );
    dasmEntries.addBankLabel( 0x7664, 0x33, 'bnk_33_7664' );
    dasmEntries.addBankLabel( 0x7678, 0x33, 'bnk_33_7678' );
    dasmEntries.addBankLabel( 0x76B2, 0x33, 'bnk_33_76B2' );
    dasmEntries.addBankLabel( 0x7743, 0x33, 'bnk_33_7743' );
    dasmEntries.addBankLabel( 0x777D, 0x33, 'bnk_33_777D' );
    dasmEntries.addBankLabel( 0x77AB, 0x33, 'bnk_33_77AB' );
    dasmEntries.addBankLabel( 0x77BB, 0x33, 'dmd_func_mostcalls' );
    dasmEntries.addBankLabel( 0x7836, 0x33, 'bnk_33_7836' );
    dasmEntries.addBankLabel( 0x787F, 0x33, 'bnk_33_787F' );
    dasmEntries.addBankLabel( 0x78AB, 0x33, 'bnk_33_78AB' );
    dasmEntries.addTable( 0x78ca, 0x33, 'tbl_33_78ca', 23, 2 );
    dasmEntries.addBankLabel( 0x78F8, 0x33, 'bnk_33_78F8' );
    dasmEntries.addBankLabel( 0x7954, 0x33, 'bnk_33_7954' );
    dasmEntries.addBankLabel( 0x795A, 0x33, 'bnk_33_795A' );
    dasmEntries.addBankLabel( 0x798E, 0x33, 'bnk_33_798E' );
    dasmEntries.addBankLabel( 0x7993, 0x33, 'bnk_33_7993' );
    dasmEntries.addBankLabel( 0x79BE, 0x33, 'bnk_33_79BE' );
    dasmEntries.addBankLabel( 0x79C4, 0x33, 'bnk_33_79C4' );
    dasmEntries.addBankLabel( 0x7A0B, 0x33, 'bnk_33_7A0B' );
    dasmEntries.addBankLabel( 0x7A13, 0x33, 'bnk_33_7A13' );
    dasmEntries.addBankLabel( 0x7A5A, 0x33, 'bnk_33_7A5A' );
    dasmEntries.addBankLabel( 0x7A62, 0x33, 'bnk_33_7A62' );
    dasmEntries.addBankLabel( 0x7A81, 0x33, 'bnk_33_7A81' );
    dasmEntries.addBankLabel( 0x7A87, 0x33, 'bnk_33_7A87' );
    dasmEntries.addBankLabel( 0x7A97, 0x33, 'bnk_33_7A97' );
    dasmEntries.addBankLabel( 0x7A9D, 0x33, 'bnk_33_7A9D' );
    dasmEntries.addBankLabel( 0x7AD7, 0x33, 'bnk_33_7AD7' );
    dasmEntries.addBankLabel( 0x7ADD, 0x33, 'bnk_33_7ADD' );
    dasmEntries.addBankLabel( 0x7B21, 0x33, 'bnk_33_7B21' );
    dasmEntries.addBankLabel( 0x7B27, 0x33, 'bnk_33_7B27' );
    dasmEntries.addBankLabel( 0x7B67, 0x33, 'bnk_33_7B67' );
    dasmEntries.addBankLabel( 0x7BA7, 0x33, 'bnk_33_7BA7' );
    dasmEntries.addBankLabel( 0x7BEA, 0x33, 'bnk_33_7BEA' );
    dasmEntries.addBankLabel( 0x7C3C, 0x33, 'bnk_33_7C3C' );
    dasmEntries.addBankLabel( 0x7C82, 0x33, 'bnk_33_7C82' );
    dasmEntries.addBankLabel( 0x7CE0, 0x33, 'bnk_33_7CE0' );
    dasmEntries.addBankLabel( 0x7D3E, 0x33, 'bnk_33_7D3E' );
    dasmEntries.addBankLabel( 0x7D9C, 0x33, 'bnk_33_7D9C' );
    dasmEntries.addBankLabel( 0x7E14, 0x33, 'bnk_33_7E14' );
    dasmEntries.addBankLabel( 0x7E23, 0x33, 'bnk_33_7E23' );
    dasmEntries.addBankLabel( 0x7E4C, 0x33, 'bnk_33_7E4C' );
    dasmEntries.addBankLabel( 0x7E59, 0x33, 'bnk_33_7E59' );
    dasmEntries.addBankLabel( 0x7E9D, 0x33, 'bnk_33_7E9D' );
    dasmEntries.addBankLabel( 0x7EA3, 0x33, 'bnk_33_7EA3' );
    dasmEntries.addBankLabel( 0x7EF9, 0x33, 'bnk_33_7EF9' );
    dasmEntries.addBankLabel( 0x7EFF, 0x33, 'bnk_33_7EFF' );
    dasmEntries.addBankLabel( 0x7F07, 0x33, 'bnk_33_7F07' );
    dasmEntries.addBankLabel( 0x7F0F, 0x33, 'bnk_33_7F0F' );
    dasmEntries.addBankLabel( 0x7F86, 0x33, 'bnk_33_7F86' );
    dasmEntries.addBankLabel( 0x7F8C, 0x33, 'bnk_33_7F8C' );
    dasmEntries.addBankLabel( 0x7FF1, 0x33, 'bnk_33_7FF1' );
    dasmEntries.addTable( 0x7ff9, 0x33, 'filler', 2, 3 );

}

function getDasmEntries_bnk_34( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x34, 'pageMarker_bnk_34', 1, 1 );
    dasmEntries.addBankLabel( 0x4001, 0x34 );
    dasmEntries.addBankLabel( 0x401e, 0x34 );
    dasmEntries.addBankLabel( 0x402b, 0x34 );
    dasmEntries.addBankLabel( 0x405e, 0x34 );
    dasmEntries.addBankLabel( 0x40cc, 0x34 );
    dasmEntries.addBankLabel( 0x40e8, 0x34 );
    dasmEntries.addBankLabel( 0x410d, 0x34 );
    dasmEntries.addBankLabel( 0x416b, 0x34 );
    dasmEntries.addBankLabel( 0x4191, 0x34 );
    dasmEntries.addBankLabel( 0x41ad, 0x34 );
    dasmEntries.addBankLabel( 0x41d2, 0x34 );
    dasmEntries.addBankLabel( 0x4246, 0x34 );
    dasmEntries.addBankLabel( 0x426b, 0x34 );
    dasmEntries.addBankLabel( 0x42a0, 0x34 );
    dasmEntries.addBankLabel( 0x42c5, 0x34 );
    dasmEntries.addBankLabel( 0x431d, 0x34 );
    dasmEntries.addBankLabel( 0x4371, 0x34 );
    dasmEntries.addBankLabel( 0x43ba, 0x34 );
    dasmEntries.addBankLabel( 0x441e, 0x34 );
    dasmEntries.addBankLabel( 0x4441, 0x34 );
    dasmEntries.addBankLabel( 0x4483, 0x34 );
    dasmEntries.addBankLabel( 0x44ba, 0x34 );
    dasmEntries.addBankLabel( 0x455d, 0x34 );
    dasmEntries.addBankLabel( 0x4579, 0x34 );
    dasmEntries.addBankLabel( 0x4615, 0x34 );
    dasmEntries.addBankLabel( 0x462d, 0x34 );
    dasmEntries.addBankLabel( 0x4644, 0x34 );
    dasmEntries.addBankLabel( 0x467a, 0x34 );
    dasmEntries.addBankLabel( 0x46a2, 0x34 );
    dasmEntries.addBankLabel( 0x46f7, 0x34 );
    dasmEntries.addBankLabel( 0x473d, 0x34 );
    dasmEntries.addBankLabel( 0x475b, 0x34 );

    dasmEntries.addTable( 0x477c, 0x34, 'fnParmsUnknown', 3, 2 );
    dasmEntries.addBankLabel( 0x4782, 0x34 );
    dasmEntries.addBankLabel( 0x47df, 0x34 );
    dasmEntries.addBankLabel( 0x4820, 0x34 );
    dasmEntries.addBankLabel( 0x4832, 0x34 );
    dasmEntries.addBankLabel( 0x4855, 0x34 );
    dasmEntries.addBankLabel( 0x490d, 0x34 );
    dasmEntries.addBankLabel( 0x4a25, 0x34 );
    dasmEntries.addBankLabel( 0x4a3e, 0x34 );
    dasmEntries.addBankLabel( 0x4a76, 0x34 );
    dasmEntries.addBankLabel( 0x4a9c, 0x34 );
    dasmEntries.addBankLabel( 0x4aba, 0x34 );

    dasmEntries.addTable( 0x4b06, 0x34, 'fnParmsUnknown', 3, 2 );
    dasmEntries.addBankLabel( 0x4b0c, 0x34 );
    dasmEntries.addBankLabel( 0x4b3f, 0x34 );
    dasmEntries.addBankLabel( 0x4b69, 0x34 );
    dasmEntries.addBankLabel( 0x4bb9, 0x34 );
    dasmEntries.addBankLabel( 0x4bcb, 0x34 );
    dasmEntries.addTableStrings( 0x4bee, 0x34, 'stringTrivia', 0x159d );

    dasmEntries.addTableWpc( 0x618b, 0x34, 'tblWpcStringPointerTriviaQuestionsAnswers');
    // dasmEntries.addTable( 0x618c, 0x34, 'stringPointers', 50, 2 );

    dasmEntries.addBankLabel( 0x62f1, 0x34 );
    dasmEntries.addBankLabel( 0x62fe, 0x34 );
    dasmEntries.addBankLabel( 0x638b, 0x34 );
    dasmEntries.addBankLabel( 0x6413, 0x34 );
    dasmEntries.addBankLabel( 0x6454, 0x34 );
    dasmEntries.addBankLabel( 0x6473, 0x34 );
    dasmEntries.addBankLabel( 0x64a6, 0x34 );
    dasmEntries.addBankLabel( 0x64c4, 0x34 );
    dasmEntries.addBankLabel( 0x64f7, 0x34 );
    dasmEntries.addBankLabel( 0x650f, 0x34 );

    dasmEntries.addTable( 0x6530, 0x34, 'fnParmsUnknown', 3, 2 );
    dasmEntries.addBankLabel( 0x6538, 0x34 );
    dasmEntries.addBankLabel( 0x65c1, 0x34 );
    dasmEntries.addBankLabel( 0x65df, 0x34 );
    dasmEntries.addBankLabel( 0x6667, 0x34 );
    dasmEntries.addBankLabel( 0x66b2, 0x34 );
    dasmEntries.addBankLabel( 0x66fc, 0x34 );
    dasmEntries.addBankLabel( 0x67c4, 0x34 );
    dasmEntries.addBankLabel( 0x689b, 0x34 );
    dasmEntries.addBankLabel( 0x68b9, 0x34 );
    dasmEntries.addBankLabel( 0x68e8, 0x34 );
    dasmEntries.addBankLabel( 0x690e, 0x34 );
    dasmEntries.addBankLabel( 0x692c, 0x34 );

    dasmEntries.addTable( 0x6952, 0x34, 'fnParmsUnknown', 3, 2 );
    dasmEntries.addBankLabel( 0x6958, 0x34 );
    dasmEntries.addBankLabel( 0x69b9, 0x34 );
    dasmEntries.addBankLabel( 0x69eb, 0x34 );
    dasmEntries.addBankLabel( 0x69fd, 0x34 );
    dasmEntries.addBankLabel( 0x6a20, 0x34 );
    dasmEntries.addBankLabel( 0x6a32, 0x34 );
    dasmEntries.addBankLabel( 0x6a3f, 0x34 );
    dasmEntries.addBankLabel( 0x6a5b, 0x34 );
    dasmEntries.addBankLabel( 0x6a62, 0x34 );
    dasmEntries.addBankLabel( 0x6a8c, 0x34 );
    dasmEntries.addBankLabel( 0x6ae6, 0x34 );
    dasmEntries.addBankLabel( 0x6aee, 0x34 );
    dasmEntries.addBankLabel( 0x6b48, 0x34 );
    dasmEntries.addBankLabel( 0x6b50, 0x34 );
    dasmEntries.addBankLabel( 0x6baa, 0x34 );
    dasmEntries.addBankLabel( 0x6bb2, 0x34 );
    dasmEntries.addBankLabel( 0x6c3e, 0x34 );
    dasmEntries.addBankLabel( 0x6c8b, 0x34 );
    dasmEntries.addBankLabel( 0x6ce4, 0x34 );
    dasmEntries.addBankLabel( 0x6d1f, 0x34 );
    dasmEntries.addBankLabel( 0x6d59, 0x34 );
    dasmEntries.addBankLabel( 0x6d90, 0x34 );
    dasmEntries.addBankLabel( 0x6da5, 0x34 );
    dasmEntries.addBankLabel( 0x6e07, 0x34 );
    dasmEntries.addBankLabel( 0x6f02, 0x34 );
    dasmEntries.addBankLabel( 0x6f20, 0x34 );
    dasmEntries.addBankLabel( 0x6f4a, 0x34 );
    dasmEntries.addBankLabel( 0x6f75, 0x34 );
    dasmEntries.addBankLabel( 0x6f7a, 0x34 );
    dasmEntries.addBankLabel( 0x6f9a, 0x34 );

    dasmEntries.addTable( 0x6fe6, 0x34, 'fnParmsUnknown', 3, 2 );
    dasmEntries.addBankLabel( 0x6fec, 0x34 );
    dasmEntries.addBankLabel( 0x70bd, 0x34 );
    dasmEntries.addBankLabel( 0x70ea, 0x34 );
    dasmEntries.addBankLabel( 0x713a, 0x34 );
    dasmEntries.addBankLabel( 0x714c, 0x34 );
    dasmEntries.addBankLabel( 0x716f, 0x34 );
    dasmEntries.addBankLabel( 0x71d1, 0x34 );
    dasmEntries.addBankLabel( 0x72ea, 0x34 );
    dasmEntries.addBankLabel( 0x7323, 0x34 );
    dasmEntries.addBankLabel( 0x734e, 0x34 );
    dasmEntries.addBankLabel( 0x7354, 0x34 );
    dasmEntries.addTable( 0x73a0, 0x34, 'fnParmsUnknown', 3, 2 );
    dasmEntries.addBankLabel( 0x73a6, 0x34 );
    dasmEntries.addBankLabel( 0x7477, 0x34 );
    dasmEntries.addBankLabel( 0x74c7, 0x34 );
    dasmEntries.addBankLabel( 0x74d9, 0x34 );
    dasmEntries.addBankLabel( 0x74fc, 0x34 );
    dasmEntries.addBankLabel( 0x7561, 0x34 );
    dasmEntries.addBankLabel( 0x7569, 0x34 );
    dasmEntries.addBankLabel( 0x7580, 0x34 );
    dasmEntries.addBankLabel( 0x7585, 0x34 );
    dasmEntries.addBankLabel( 0x769e, 0x34 );
    dasmEntries.addBankLabel( 0x76e6, 0x34 );
    dasmEntries.addBankLabel( 0x7711, 0x34 );

    dasmEntries.addTable( 0x77d4, 0x34, 'fnParmsUnknown', 3, 2 );
    dasmEntries.addBankLabel( 0x77da, 0x34 );
    dasmEntries.addBankLabel( 0x78b4, 0x34 );
    dasmEntries.addBankLabel( 0x7926, 0x34 );
    dasmEntries.addBankLabel( 0x7954, 0x34 );
    dasmEntries.addBankLabel( 0x79d2, 0x34 );
    dasmEntries.addBankLabel( 0x7a38, 0x34 );
    dasmEntries.addBankLabel( 0x7a45, 0x34 );
    dasmEntries.addBankLabel( 0x7a5f, 0x34 );
    dasmEntries.addBankLabel( 0x7a73, 0x34 );
    dasmEntries.addBankLabel( 0x7aaa, 0x34 );
    dasmEntries.addBankLabel( 0x7b03, 0x34 );
    dasmEntries.addBankLabel( 0x7b25, 0x34 );

    dasmEntries.addTable( 0x7bd6, 0x34, 'fnParmsUnknown', 3, 2 );
    dasmEntries.addBankLabel( 0x7bdc, 0x34 );
    dasmEntries.addBankLabel( 0x7c6a, 0x34 );
    dasmEntries.addBankLabel( 0x7cd6, 0x34 );

    dasmEntries.addTable( 0x7d83, 0x34, 'filler', 106, 6 );
}

function getDasmEntries_bnk_35( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x35, 'pageMarker_bnk_35', 1, 1 );
    dasmEntries.addTableWpc( 0x4001, 0x35, 'tblwpc_4001_35' );
    dasmEntries.addTableWpc( 0x400C, 0x35, 'tblwpc_400C_35'  );
    dasmEntries.addTable( 0x4093, 0x35, 'test', 1, 12 );
    dasmEntries.addTable( 0x409F, 0x35, 'test', 270, 4 );
    dasmEntries.addTable( 0x44D7, 0x35, 'testEnd', 1, 10 );
    dasmEntries.addTableWpc( 0x44E1, 0x35, 'tblwpc_44E1_35');
    dasmEntries.addTableWpc( 0x44F9, 0x35, 'tblwpc_44F9_35');
    dasmEntries.addBankLabel( 0x451f, 0x35, 'bnk_35_451f' );
    dasmEntries.addTable( 0x453D, 0x35, 'tbl_453D_35', 55, 3 );

    dasmEntries.addBankLabel( 0x45E2, 0x35, 'bnk_35_45E2' );
    dasmEntries.addBankLabel( 0x45FE, 0x35, 'bnk_35_45FE' );

    dasmEntries.addTable( 0x4617, 0x35, 'tbl_4617_35', 13, 2 );
    dasmEntries.addBankLabel( 0x4631, 0x35, 'bnk_35_4631' );
    dasmEntries.addBankLabel( 0x4650, 0x35, 'bnk_35_4650' );
    dasmEntries.addTable( 0x4656, 0x35, 'tbl_4656_35', 13, 4 );
    dasmEntries.addTable( 0x468a, 0x35, 'tbl_end', 1, 2 );
    dasmEntries.addTableWpc( 0x468c, 0x35, 'tblwpc_468c_35');
    dasmEntries.addBankLabel( 0x46a4, 0x35, 'bnk_35_46a4' );
    dasmEntries.addBankLabel( 0x46EE, 0x35, 'bnk_35_46EE' );
    dasmEntries.addBankLabel( 0x46FF, 0x35, 'SetCarry' );
    dasmEntries.addBankLabel( 0x4702, 0x35, 'ClearCarry' );
    dasmEntries.addBankLabel( 0x4705, 0x35, 'Clear_flag_5b9' );
    dasmEntries.addBankLabel( 0x4709, 0x35, 'bnk_35_4709' );
    dasmEntries.addBankLabel( 0x4711, 0x35, 'bnk_35_4711' );
    dasmEntries.addBankLabel( 0x473B, 0x35, 'bnk_35_473B' );
    dasmEntries.addBankLabel( 0x4741, 0x35, 'bnk_35_4741' );
    dasmEntries.addBankLabel( 0x4749, 0x35, 'bnk_35_4749' );
    dasmEntries.addBankLabel( 0x4777, 0x35, 'bnk_35_4777' );
    dasmEntries.addBankLabel( 0x477D, 0x35, 'bnk_35_477D' );
    dasmEntries.addBankLabel( 0x4785, 0x35, 'bnk_35_4785' );
    dasmEntries.addBankLabel( 0x47BC, 0x35, 'bnk_35_47BC' );
    dasmEntries.addBankLabel( 0x47CB, 0x35, 'bnk_35_47CB' );
    dasmEntries.addBankLabel( 0x47E9, 0x35, 'bnk_35_47E9' );
    dasmEntries.addBankLabel( 0x47F5, 0x35, 'bnk_35_47F5' );
    dasmEntries.addBankLabel( 0x4805, 0x35, 'bnk_35_4805' );
    dasmEntries.addBankLabel( 0x4814, 0x35, 'bnk_35_4814' );
    dasmEntries.addBankLabel( 0x481E, 0x35, 'bnk_35_481E' );
    dasmEntries.addBankLabel( 0x486A, 0x35, 'bnk_35_486A' );
    dasmEntries.addBankLabel( 0x48C4, 0x35, 'bnk_35_48C4' );
    dasmEntries.addBankLabel( 0x48F5, 0x35, 'bnk_35_48F5' );
    dasmEntries.addBankLabel( 0x4904, 0x35, 'bnk_35_4904' );
    dasmEntries.addBankLabel( 0x490E, 0x35, 'bnk_35_490E' );
    dasmEntries.addBankLabel( 0x495A, 0x35, 'bnk_35_495A' );
    dasmEntries.addBankLabel( 0x49C0, 0x35, 'bnk_35_49C0' );
    dasmEntries.addBankLabel( 0x49C8, 0x35, 'bnk_35_49C8' );
    dasmEntries.addBankLabel( 0x49F9, 0x35, 'bnk_35_49F9' );
    dasmEntries.addBankLabel( 0x4A08, 0x35, 'bnk_35_4A08' );
    dasmEntries.addBankLabel( 0x4A12, 0x35, 'bnk_35_4A12' );
    dasmEntries.addBankLabel( 0x4A5E, 0x35, 'bnk_35_4A5E' );
    dasmEntries.addBankLabel( 0x4AB0, 0x35, 'bnk_35_4AB0' );
    dasmEntries.addBankLabel( 0x4AB8, 0x35, 'bnk_35_4AB8' );
    dasmEntries.addBankLabel( 0x4AE9, 0x35, 'bnk_35_4AE9' );
    dasmEntries.addBankLabel( 0x4AF8, 0x35, 'bnk_35_4AF8' );
    dasmEntries.addBankLabel( 0x4B02, 0x35, 'bnk_35_4B02' );
    dasmEntries.addBankLabel( 0x4B4E, 0x35, 'bnk_35_4B4E' );
    dasmEntries.addBankLabel( 0x4BA0, 0x35, 'bnk_35_4BA0' );
    dasmEntries.addBankLabel( 0x4BA8, 0x35, 'bnk_35_4BA8' );
    dasmEntries.addBankLabel( 0x4BD9, 0x35, 'bnk_35_4BD9' );
    dasmEntries.addBankLabel( 0x4BE8, 0x35, 'bnk_35_4BE8' );
    dasmEntries.addBankLabel( 0x4BF2, 0x35, 'bnk_35_4BF2' );
    dasmEntries.addBankLabel( 0x4C3E, 0x35, 'bnk_35_4C3E' );
    dasmEntries.addBankLabel( 0x4C90, 0x35, 'bnk_35_4C90' );
    dasmEntries.addBankLabel( 0x4C98, 0x35, 'bnk_35_4C98' );
    dasmEntries.addBankLabel( 0x4CC9, 0x35, 'bnk_35_4CC9' );
    dasmEntries.addBankLabel( 0x4CD0, 0x35, 'bnk_35_4CD0' );
    dasmEntries.addBankLabel( 0x4CD9, 0x35, 'bnk_35_4CD9' );
    dasmEntries.addBankLabel( 0x4CEA, 0x35, 'bnk_35_4CEA' );
    dasmEntries.addBankLabel( 0x4D03, 0x35, 'bnk_35_4D03' );
    dasmEntries.addBankLabel( 0x4D19, 0x35, 'bnk_35_4D19' );
    dasmEntries.addBankLabel( 0x4D22, 0x35, 'bnk_35_4D22' );
    dasmEntries.addBankLabel( 0x4D3B, 0x35, 'bnk_35_4D3B' );
    dasmEntries.addBankLabel( 0x4D53, 0x35, 'bnk_35_4D53' );
    dasmEntries.addBankLabel( 0x4D63, 0x35, 'bnk_35_4D63' );
    dasmEntries.addBankLabel( 0x4D6B, 0x35, 'bnk_35_4D6B' );
    dasmEntries.addBankLabel( 0x4D83, 0x35, 'bnk_35_4D83' );
    dasmEntries.addBankLabel( 0x4D93, 0x35, 'bnk_35_4D93' );
    dasmEntries.addBankLabel( 0x4D9B, 0x35, 'bnk_35_4D9B' );
    dasmEntries.addBankLabel( 0x4DB3, 0x35, 'bnk_35_4DB3' );
    dasmEntries.addBankLabel( 0x4DC3, 0x35, 'bnk_35_4DC3' );
    dasmEntries.addBankLabel( 0x4DCB, 0x35, 'bnk_35_4DCB' );
    dasmEntries.addBankLabel( 0x4DE3, 0x35, 'bnk_35_4DE3' );
    dasmEntries.addBankLabel( 0x4DF3, 0x35, 'bnk_35_4DF3' );
    dasmEntries.addBankLabel( 0x4DFB, 0x35, 'bnk_35_4DFB' );
    dasmEntries.addBankLabel( 0x4E13, 0x35, 'bnk_35_4E13' );
    dasmEntries.addBankLabel( 0x4E29, 0x35, 'bnk_35_4E29' );
    dasmEntries.addBankLabel( 0x4E37, 0x35, 'bnk_35_4E37' );
    dasmEntries.addBankLabel( 0x4E4F, 0x35, 'bnk_35_4E4F' );
    dasmEntries.addBankLabel( 0x4E65, 0x35, 'bnk_35_4E65' );
    dasmEntries.addBankLabel( 0x4E73, 0x35, 'bnk_35_4E73' );
    dasmEntries.addBankLabel( 0x4E8B, 0x35, 'bnk_35_4E8B' );
    dasmEntries.addBankLabel( 0x4EA1, 0x35, 'bnk_35_4EA1' );
    dasmEntries.addBankLabel( 0x4EAF, 0x35, 'bnk_35_4EAF' );
    dasmEntries.addBankLabel( 0x4EC7, 0x35, 'bnk_35_4EC7' );
    dasmEntries.addBankLabel( 0x4EDD, 0x35, 'bnk_35_4EDD' );
    dasmEntries.addBankLabel( 0x4EEB, 0x35, 'bnk_35_4EEB' );
    dasmEntries.addBankLabel( 0x4F05, 0x35, 'bnk_35_4F05' );
    dasmEntries.addBankLabel( 0x4F15, 0x35, 'bnk_35_4F15' );
    dasmEntries.addBankLabel( 0x4F36, 0x35, 'bnk_35_4F36' );
    dasmEntries.addBankLabel( 0x4F3F, 0x35, 'bnk_35_4F3F' );
    dasmEntries.addBankLabel( 0x4F59, 0x35, 'bnk_35_4F59' );
    dasmEntries.addBankLabel( 0x4F69, 0x35, 'bnk_35_4F69' );
    dasmEntries.addBankLabel( 0x4F8A, 0x35, 'bnk_35_4F8A' );
    dasmEntries.addBankLabel( 0x4F93, 0x35, 'bnk_35_4F93' );
    dasmEntries.addBankLabel( 0x4FAD, 0x35, 'bnk_35_4FAD' );
    dasmEntries.addBankLabel( 0x4FBD, 0x35, 'bnk_35_4FBD' );
    dasmEntries.addBankLabel( 0x4FDE, 0x35, 'bnk_35_4FDE' );
    dasmEntries.addBankLabel( 0x4FE7, 0x35, 'bnk_35_4FE7' );
    dasmEntries.addBankLabel( 0x5001, 0x35, 'bnk_35_5001' );
    dasmEntries.addBankLabel( 0x5011, 0x35, 'bnk_35_5011' );
    dasmEntries.addBankLabel( 0x5032, 0x35, 'bnk_35_5032' );
    dasmEntries.addBankLabel( 0x503B, 0x35, 'bnk_35_503B' );
    dasmEntries.addBankLabel( 0x5055, 0x35, 'bnk_35_5055' );
    dasmEntries.addBankLabel( 0x506B, 0x35, 'bnk_35_506B' );
    dasmEntries.addBankLabel( 0x5092, 0x35, 'bnk_35_5092' );
    dasmEntries.addBankLabel( 0x50A1, 0x35, 'bnk_35_50A1' );
    dasmEntries.addBankLabel( 0x50BB, 0x35, 'bnk_35_50BB' );
    dasmEntries.addBankLabel( 0x50D1, 0x35, 'bnk_35_50D1' );
    dasmEntries.addBankLabel( 0x50F8, 0x35, 'bnk_35_50F8' );
    dasmEntries.addBankLabel( 0x5107, 0x35, 'bnk_35_5107' );
    dasmEntries.addBankLabel( 0x5121, 0x35, 'bnk_35_5121' );
    dasmEntries.addBankLabel( 0x5137, 0x35, 'bnk_35_5137' );
    dasmEntries.addBankLabel( 0x515E, 0x35, 'bnk_35_515E' );
    dasmEntries.addBankLabel( 0x516D, 0x35, 'bnk_35_516D' );
    dasmEntries.addBankLabel( 0x5187, 0x35, 'bnk_35_5187' );
    dasmEntries.addBankLabel( 0x519D, 0x35, 'bnk_35_519D' );
    dasmEntries.addBankLabel( 0x51C4, 0x35, 'bnk_35_51C4' );
    dasmEntries.addBankLabel( 0x51D3, 0x35, 'bnk_35_51D3' );
    dasmEntries.addBankLabel( 0x51EB, 0x35, 'bnk_35_51EB' );
    dasmEntries.addBankLabel( 0x5201, 0x35, 'bnk_35_5201' );
    dasmEntries.addBankLabel( 0x520F, 0x35, 'bnk_35_520F' );
    dasmEntries.addBankLabel( 0x5227, 0x35, 'bnk_35_5227' );
    dasmEntries.addBankLabel( 0x5243, 0x35, 'bnk_35_5243' );
    dasmEntries.addBankLabel( 0x5257, 0x35, 'bnk_35_5257' );
    dasmEntries.addBankLabel( 0x5271, 0x35, 'bnk_35_5271' );
    dasmEntries.addBankLabel( 0x5287, 0x35, 'bnk_35_5287' );
    dasmEntries.addBankLabel( 0x52AE, 0x35, 'bnk_35_52AE' );
    dasmEntries.addBankLabel( 0x52BD, 0x35, 'bnk_35_52BD' );
    dasmEntries.addBankLabel( 0x52DF, 0x35, 'bnk_35_52DF' );
    dasmEntries.addBankLabel( 0x52EF, 0x35, 'bnk_35_52EF' );
    dasmEntries.addBankLabel( 0x5310, 0x35, 'bnk_35_5310' );
    dasmEntries.addBankLabel( 0x5319, 0x35, 'bnk_35_5319' );
    dasmEntries.addBankLabel( 0x5324, 0x35, 'bnk_35_5324' );
    dasmEntries.addBankLabel( 0x5332, 0x35, 'bnk_35_5332' );
    dasmEntries.addBankLabel( 0x533D, 0x35, 'bnk_35_533D' );
    dasmEntries.addBankLabel( 0x5351, 0x35, 'bnk_35_5351' );
    dasmEntries.addBankLabel( 0x535C, 0x35, 'bnk_35_535C' );
    dasmEntries.addBankLabel( 0x537A, 0x35, 'bnk_35_537A' );
    dasmEntries.addBankLabel( 0x538A, 0x35, 'bnk_35_538A' );
    dasmEntries.addBankLabel( 0x53A0, 0x35, 'bnk_35_53A0' );
    dasmEntries.addBankLabel( 0x53C2, 0x35, 'bnk_35_53C2' );
    dasmEntries.addBankLabel( 0x53D1, 0x35, 'bnk_35_53D1' );
    dasmEntries.addBankLabel( 0x53DF, 0x35, 'bnk_35_53DF' );
    dasmEntries.addBankLabel( 0x53E8, 0x35, 'bnk_35_53E8' );
    dasmEntries.addBankLabel( 0x5414, 0x35, 'bnk_35_5414' );
    dasmEntries.addBankLabel( 0x54CB, 0x35, 'bnk_35_54CB' );
    dasmEntries.addBankLabel( 0x5592, 0x35, 'bnk_35_5592' );
    dasmEntries.addBankLabel( 0x5679, 0x35, 'bnk_35_5679' );
    dasmEntries.addBankLabel( 0x5770, 0x35, 'bnk_35_5770' );
    dasmEntries.addBankLabel( 0x57BC, 0x35, 'bnk_35_57BC' );
    dasmEntries.addBankLabel( 0x57D6, 0x35, 'bnk_35_57D6' );
    dasmEntries.addBankLabel( 0x57E5, 0x35, 'bnk_35_57E5' );
    dasmEntries.addBankLabel( 0x581A, 0x35, 'bnk_35_581A' );
    dasmEntries.addBankLabel( 0x5836, 0x35, 'bnk_35_5836' );
    dasmEntries.addBankLabel( 0x5840, 0x35, 'bnk_35_5840' );
    dasmEntries.addBankLabel( 0x5866, 0x35, 'bnk_35_5866' );
    dasmEntries.addBankLabel( 0x588C, 0x35, 'bnk_35_588C' );
    dasmEntries.addBankLabel( 0x58A4, 0x35, 'bnk_35_58A4' );
    dasmEntries.addBankLabel( 0x58B4, 0x35, 'bnk_35_58B4' );
    dasmEntries.addBankLabel( 0x58CE, 0x35, 'bnk_35_58CE' );
    dasmEntries.addBankLabel( 0x58D5, 0x35, 'bnk_35_58D5' );
    dasmEntries.addBankLabel( 0x58F2, 0x35, 'bnk_35_58F2' );
    dasmEntries.addBankLabel( 0x58FB, 0x35, 'bnk_35_58FB' );
    dasmEntries.addBankLabel( 0x5904, 0x35, 'bnk_35_5904' );


    dasmEntries.addBankLabel( 0x5917, 0x35, 'bnk_35_5917' );
    dasmEntries.addBankLabel( 0x59AE, 0x35, 'bnk_35_59AE' );
    dasmEntries.addBankLabel( 0x59B7, 0x35, 'bnk_35_59B7' );
    dasmEntries.addBankLabel( 0x59C0, 0x35, 'bnk_35_59C0' );
    dasmEntries.addBankLabel( 0x5A09, 0x35, 'bnk_35_5A09' );
    dasmEntries.addBankLabel( 0x5A12, 0x35, 'bnk_35_5A12' );
    dasmEntries.addBankLabel( 0x5A1B, 0x35, 'bnk_35_5A1B' );
    dasmEntries.addBankLabel( 0x5A64, 0x35, 'bnk_35_5A64' );
    dasmEntries.addBankLabel( 0x5A7A, 0x35, 'bnk_35_5A7A' );
    dasmEntries.addBankLabel( 0x5A89, 0x35, 'bnk_35_5A89' );
    dasmEntries.addBankLabel( 0x5A9F, 0x35, 'bnk_35_5A9F' );
    dasmEntries.addBankLabel( 0x5ADD, 0x35, 'bnk_35_5ADD' );
    dasmEntries.addBankLabel( 0x5B59, 0x35, 'bnk_35_5B59' );
    dasmEntries.addBankLabel( 0x5B7B, 0x35, 'bnk_35_5B7B' );
    dasmEntries.addBankLabel( 0x5B85, 0x35, 'bnk_35_5B85' );
    dasmEntries.addBankLabel( 0x5B8F, 0x35, 'bnk_35_5B8F' );
    dasmEntries.addBankLabel( 0x5D01, 0x35, 'bnk_35_5D01' );
    dasmEntries.addBankLabel( 0x5D4D, 0x35, 'bnk_35_5D4D' );
    dasmEntries.addBankLabel( 0x5D56, 0x35, 'bnk_35_5D56' );
    dasmEntries.addBankLabel( 0x5D9E, 0x35, 'bnk_35_5D9E' );
    dasmEntries.addBankLabel( 0x5DA8, 0x35, 'bnk_35_5DA8' );
    dasmEntries.addBankLabel( 0x5DBB, 0x35, 'bnk_35_5DBB' );
    dasmEntries.addBankLabel( 0x5DC4, 0x35, 'bnk_35_5DC4' );
    dasmEntries.addBankLabel( 0x5DEB, 0x35, 'bnk_35_5DEB' );
    dasmEntries.addBankLabel( 0x5DF5, 0x35, 'bnk_35_5DF5' );
    dasmEntries.addBankLabel( 0x5E20, 0x35, 'bnk_35_5E20' );
    dasmEntries.addBankLabel( 0x5E5F, 0x35, 'bnk_35_5E5F' );
    dasmEntries.addBankLabel( 0x5EE9, 0x35, 'bnk_35_5EE9' );
    dasmEntries.addBankLabel( 0x5F58, 0x35, 'bnk_35_5F58' );
    dasmEntries.addBankLabel( 0x5F74, 0x35, 'bnk_35_5F74' );
    dasmEntries.addBankLabel( 0x5F91, 0x35, 'bnk_35_5F91' );
    dasmEntries.addBankLabel( 0x601A, 0x35, 'bnk_35_601A' );
    dasmEntries.addBankLabel( 0x603B, 0x35, 'bnk_35_603B' );
    dasmEntries.addBankLabel( 0x604F, 0x35, 'bnk_35_604F' );
    dasmEntries.addBankLabel( 0x6077, 0x35, 'bnk_35_6077' );
    dasmEntries.addBankLabel( 0x6090, 0x35, 'bnk_35_6090' );
    dasmEntries.addBankLabel( 0x60B3, 0x35, 'bnk_35_60B3' );
    dasmEntries.addBankLabel( 0x613A, 0x35, 'bnk_35_613A' );
    dasmEntries.addBankLabel( 0x615E, 0x35, 'bnk_35_615E' );
    dasmEntries.addBankLabel( 0x6166, 0x35, 'bnk_35_6166' );
    dasmEntries.addBankLabel( 0x6177, 0x35, 'bnk_35_6177' );
    dasmEntries.addBankLabel( 0x61D5, 0x35, 'bnk_35_61D5' );
    dasmEntries.addBankLabel( 0x61F2, 0x35, 'bnk_35_61F2' );
    dasmEntries.addBankLabel( 0x621D, 0x35, 'bnk_35_621D' );
    dasmEntries.addBankLabel( 0x6256, 0x35, 'bnk_35_6256' );
    dasmEntries.addBankLabel( 0x6280, 0x35, 'bnk_35_6280' );
    dasmEntries.addBankLabel( 0x62B9, 0x35, 'bnk_35_62B9' );
    dasmEntries.addBankLabel( 0x6321, 0x35, 'bnk_35_6321' );
    dasmEntries.addBankLabel( 0x633B, 0x35, 'bnk_35_633B' );
    dasmEntries.addBankLabel( 0x634D, 0x35, 'bnk_35_634D' );
    dasmEntries.addBankLabel( 0x636C, 0x35, 'bnk_35_636C' );
    dasmEntries.addBankLabel( 0x637F, 0x35, 'bnk_35_637F' );
    dasmEntries.addBankLabel( 0x6389, 0x35, 'bnk_35_6389' );
    dasmEntries.addBankLabel( 0x6396, 0x35, 'bnk_35_6396' );
    dasmEntries.addBankLabel( 0x63A6, 0x35, 'bnk_35_63A6' );
    dasmEntries.addBankLabel( 0x63B9, 0x35, 'bnk_35_63B9' );
    dasmEntries.addBankLabel( 0x63BF, 0x35, 'bnk_35_63BF' );
    dasmEntries.addBankLabel( 0x63CC, 0x35, 'bnk_35_63CC' );
    dasmEntries.addBankLabel( 0x63D2, 0x35, 'bnk_35_63D2' );
    dasmEntries.addBankLabel( 0x63D9, 0x35, 'bnk_35_63D9' );
    dasmEntries.addBankLabel( 0x63E2, 0x35, 'bnk_35_63E2' );
    dasmEntries.addBankLabel( 0x6408, 0x35, 'bnk_35_6408' );
    dasmEntries.addBankLabel( 0x640E, 0x35, 'bnk_35_640E' );
    dasmEntries.addBankLabel( 0x641F, 0x35, 'bnk_35_641F' );
    dasmEntries.addBankLabel( 0x6425, 0x35, 'bnk_35_6425' );
    dasmEntries.addBankLabel( 0x642C, 0x35, 'bnk_35_642C' );
    dasmEntries.addBankLabel( 0x645A, 0x35, 'bnk_35_645A' );
    dasmEntries.addBankLabel( 0x6487, 0x35, 'bnk_35_6487' );
    dasmEntries.addBankLabel( 0x64FA, 0x35, 'bnk_35_64FA' );
    dasmEntries.addBankLabel( 0x656D, 0x35, 'bnk_35_656D' );
    dasmEntries.addBankLabel( 0x65E0, 0x35, 'bnk_35_65E0' );
    dasmEntries.addBankLabel( 0x6641, 0x35, 'bnk_35_6641' );
    dasmEntries.addBankLabel( 0x6647, 0x35, 'bnk_35_6647' );
    dasmEntries.addBankLabel( 0x665F, 0x35, 'bnk_35_665F' );
    dasmEntries.addBankLabel( 0x6676, 0x35, 'bnk_35_6676' );
    dasmEntries.addBankLabel( 0x66E7, 0x35, 'bnk_35_66E7' );
    dasmEntries.addBankLabel( 0x6707, 0x35, 'bnk_35_6707' );
    dasmEntries.addBankLabel( 0x6747, 0x35, 'bnk_35_6747' );
    dasmEntries.addBankLabel( 0x675F, 0x35, 'bnk_35_675F' );
    dasmEntries.addBankLabel( 0x6785, 0x35, 'bnk_35_6785' );
    dasmEntries.addBankLabel( 0x679B, 0x35, 'bnk_35_679B' );
    dasmEntries.addBankLabel( 0x67A9, 0x35, 'bnk_35_67A9' );
    dasmEntries.addBankLabel( 0x67EB, 0x35, 'bnk_35_67EB' );
    dasmEntries.addBankLabel( 0x683C, 0x35, 'bnk_35_683C' );
    dasmEntries.addBankLabel( 0x6852, 0x35, 'bnk_35_6852' );
    dasmEntries.addBankLabel( 0x6856, 0x35, 'bnk_35_6856' );
    dasmEntries.addBankLabel( 0x685A, 0x35, 'bnk_35_685A' );
    dasmEntries.addBankLabel( 0x685E, 0x35, 'bnk_35_685E' );
    dasmEntries.addBankLabel( 0x6865, 0x35, 'bnk_35_6865' );
    dasmEntries.addBankLabel( 0x68F8, 0x35, 'bnk_35_68F8' );
    dasmEntries.addBankLabel( 0x6902, 0x35, 'bnk_35_6902' );
    dasmEntries.addBankLabel( 0x698E, 0x35, 'bnk_35_698E' );
    dasmEntries.addBankLabel( 0x6AFD, 0x35, 'bnk_35_6AFD' );
    dasmEntries.addBankLabel( 0x6BA3, 0x35, 'bnk_35_6BA3' );
    dasmEntries.addBankLabel( 0x6BE5, 0x35, 'bnk_35_6BE5' );
    dasmEntries.addBankLabel( 0x6C48, 0x35, 'bnk_35_6C48' );
    dasmEntries.addBankLabel( 0x6C93, 0x35, 'bnk_35_6C93' );
    dasmEntries.addBankLabel( 0x6CA8, 0x35, 'bnk_35_6CA8' );
    dasmEntries.addBankLabel( 0x6CB4, 0x35, 'bnk_35_6CB4' );
    dasmEntries.addBankLabel( 0x6CC7, 0x35, 'bnk_35_6CC7' );
    dasmEntries.addBankLabel( 0x6CE6, 0x35, 'bnk_35_6CE6' );
    dasmEntries.addBankLabel( 0x6D06, 0x35, 'bnk_35_6D06' );
    dasmEntries.addBankLabel( 0x6D17, 0x35, 'bnk_35_6D17' );
    dasmEntries.addBankLabel( 0x6D37, 0x35, 'bnk_35_6D37' );
    dasmEntries.addBankLabel( 0x6D48, 0x35, 'bnk_35_6D48' );
    dasmEntries.addBankLabel( 0x6D51, 0x35, 'bnk_35_6D51' );
    dasmEntries.addBankLabel( 0x6D6E, 0x35, 'bnk_35_6D6E' );
    dasmEntries.addBankLabel( 0x6D8A, 0x35, 'bnk_35_6D8A' );
    dasmEntries.addBankLabel( 0x6DEF, 0x35, 'bnk_35_6DEF' );
    dasmEntries.addBankLabel( 0x6E69, 0x35, 'bnk_35_6E69' );
    dasmEntries.addBankLabel( 0x6E72, 0x35, 'bnk_35_6E72' );
    dasmEntries.addBankLabel( 0x6EA2, 0x35, 'bnk_35_6EA2' );
    dasmEntries.addBankLabel( 0x6EDB, 0x35, 'bnk_35_6EDB' );
    dasmEntries.addBankLabel( 0x6F79, 0x35, 'bnk_35_6F79' );
    dasmEntries.addBankLabel( 0x6F91, 0x35, 'bnk_35_6F91' );
    dasmEntries.addBankLabel( 0x6FA9, 0x35, 'bnk_35_6FA9' );
    dasmEntries.addBankLabel( 0x6FC5, 0x35, 'bnk_35_6FC5' );
    dasmEntries.addBankLabel( 0x6FDD, 0x35, 'bnk_35_6FDD' );
    dasmEntries.addBankLabel( 0x6FF5, 0x35, 'bnk_35_6FF5' );

    dasmEntries.addBankLabel( 0x7011, 0x35, 'bnk_35_7011' );
    dasmEntries.addBankLabel( 0x7029, 0x35, 'bnk_35_7029' );
    dasmEntries.addBankLabel( 0x703E, 0x35, 'bnk_35_703E' );
    dasmEntries.addBankLabel( 0x70A9, 0x35, 'bnk_35_70A9' );
    dasmEntries.addBankLabel( 0x70D7, 0x35, 'bnk_35_70D7' );
    dasmEntries.addBankLabel( 0x7103, 0x35, 'bnk_35_7103' );
    dasmEntries.addBankLabel( 0x7147, 0x35, 'bnk_35_7147' );
    dasmEntries.addBankLabel( 0x7153, 0x35, 'bnk_35_7153' );
    dasmEntries.addBankLabel( 0x715B, 0x35, 'bnk_35_715B' );
    dasmEntries.addBankLabel( 0x7169, 0x35, 'bnk_35_7169' );
    dasmEntries.addBankLabel( 0x7188, 0x35, 'bnk_35_7188' );
    dasmEntries.addBankLabel( 0x719E, 0x35, 'bnk_35_719E' );
    dasmEntries.addBankLabel( 0x71BD, 0x35, 'bnk_35_71BD' );
    dasmEntries.addBankLabel( 0x71D8, 0x35, 'bnk_35_71D8' );
    dasmEntries.addBankLabel( 0x723F, 0x35, 'bnk_35_723F' );
    dasmEntries.addBankLabel( 0x725C, 0x35, 'bnk_35_725C' );
    dasmEntries.addBankLabel( 0x7275, 0x35, 'bnk_35_7275' );
    dasmEntries.addBankLabel( 0x7292, 0x35, 'bnk_35_7292' );
    dasmEntries.addBankLabel( 0x72A8, 0x35, 'bnk_35_72A8' );
    dasmEntries.addBankLabel( 0x72CA, 0x35, 'bnk_35_72CA' );
    dasmEntries.addBankLabel( 0x72EB, 0x35, 'bnk_35_72EB' );
    dasmEntries.addBankLabel( 0x730D, 0x35, 'bnk_35_730D' );
    dasmEntries.addBankLabel( 0x732E, 0x35, 'bnk_35_732E' );
    dasmEntries.addBankLabel( 0x7350, 0x35, 'bnk_35_7350' );
    dasmEntries.addBankLabel( 0x7371, 0x35, 'bnk_35_7371' );
    dasmEntries.addBankLabel( 0x7393, 0x35, 'bnk_35_7393' );
    dasmEntries.addBankLabel( 0x73B4, 0x35, 'bnk_35_73B4' );
    dasmEntries.addBankLabel( 0x73D6, 0x35, 'bnk_35_73D6' );
    dasmEntries.addBankLabel( 0x73F7, 0x35, 'bnk_35_73F7' );
    dasmEntries.addBankLabel( 0x7421, 0x35, 'bnk_35_7421' );
    dasmEntries.addBankLabel( 0x7447, 0x35, 'bnk_35_7447' );
    dasmEntries.addBankLabel( 0x7467, 0x35, 'bnk_35_7467' );
    dasmEntries.addBankLabel( 0x7483, 0x35, 'bnk_35_7483' );
    dasmEntries.addBankLabel( 0x74BE, 0x35, 'bnk_35_74BE' );
    dasmEntries.addBankLabel( 0x74D1, 0x35, 'bnk_35_74D1' );
    dasmEntries.addBankLabel( 0x74ED, 0x35, 'bnk_35_74ED' );
    dasmEntries.addBankLabel( 0x750E, 0x35, 'bnk_35_750E' );
    dasmEntries.addBankLabel( 0x752F, 0x35, 'bnk_35_752F' );
    dasmEntries.addBankLabel( 0x7554, 0x35, 'bnk_35_7554' );
    dasmEntries.addBankLabel( 0x7575, 0x35, 'bnk_35_7575' );
    dasmEntries.addBankLabel( 0x75A4, 0x35, 'bnk_35_75A4' );
    dasmEntries.addBankLabel( 0x75C3, 0x35, 'bnk_35_75C3' );
    dasmEntries.addBankLabel( 0x75D9, 0x35, 'bnk_35_75D9' );
    dasmEntries.addBankLabel( 0x75FD, 0x35, 'bnk_35_75FD' );
    dasmEntries.addBankLabel( 0x761A, 0x35, 'bnk_35_761A' );
    dasmEntries.addBankLabel( 0x763B, 0x35, 'bnk_35_763B' );
    dasmEntries.addBankLabel( 0x7662, 0x35, 'bnk_35_7662' );
    dasmEntries.addBankLabel( 0x768A, 0x35, 'bnk_35_768A' );
    dasmEntries.addBankLabel( 0x76C8, 0x35, 'bnk_35_76C8' );
    dasmEntries.addBankLabel( 0x76E9, 0x35, 'bnk_35_76E9' );
    dasmEntries.addBankLabel( 0x7718, 0x35, 'bnk_35_7718' );
    dasmEntries.addBankLabel( 0x7721, 0x35, 'bnk_35_7721' );
    dasmEntries.addBankLabel( 0x7772, 0x35, 'bnk_35_7772' );
    dasmEntries.addBankLabel( 0x77A0, 0x35, 'bnk_35_77A0' );
    dasmEntries.addBankLabel( 0x77D6, 0x35, 'bnk_35_77D6' );
    dasmEntries.addBankLabel( 0x77E4, 0x35, 'bnk_35_77E4' );
    dasmEntries.addBankLabel( 0x77F2, 0x35, 'bnk_35_77F2' );
    dasmEntries.addBankLabel( 0x7800, 0x35, 'bnk_35_7800' );
    dasmEntries.addBankLabel( 0x780E, 0x35, 'bnk_35_780E' );
    dasmEntries.addBankLabel( 0x781C, 0x35, 'bnk_35_781C' );
    dasmEntries.addBankLabel( 0x783D, 0x35, 'bnk_35_783D' );
    dasmEntries.addBankLabel( 0x78A7, 0x35, 'bnk_35_78A7' );
    dasmEntries.addBankLabel( 0x78B5, 0x35, 'bnk_35_78B5' );
    dasmEntries.addBankLabel( 0x78C3, 0x35, 'bnk_35_78C3' );
    dasmEntries.addBankLabel( 0x78D1, 0x35, 'bnk_35_78D1' );
    dasmEntries.addBankLabel( 0x78DF, 0x35, 'bnk_35_78DF' );
    dasmEntries.addBankLabel( 0x7900, 0x35, 'bnk_35_7900' );
    dasmEntries.addBankLabel( 0x795C, 0x35, 'bnk_35_795C' );
    dasmEntries.addBankLabel( 0x796A, 0x35, 'bnk_35_796A' );
    dasmEntries.addBankLabel( 0x7978, 0x35, 'bnk_35_7978' );
    dasmEntries.addBankLabel( 0x7986, 0x35, 'bnk_35_7986' );
    dasmEntries.addBankLabel( 0x7994, 0x35, 'bnk_35_7994' );
    dasmEntries.addBankLabel( 0x79B5, 0x35, 'bnk_35_79B5' );
    dasmEntries.addBankLabel( 0x7A11, 0x35, 'bnk_35_7A11' );
    dasmEntries.addBankLabel( 0x7A1F, 0x35, 'bnk_35_7A1F' );
    dasmEntries.addBankLabel( 0x7A2D, 0x35, 'bnk_35_7A2D' );
    dasmEntries.addBankLabel( 0x7A3B, 0x35, 'bnk_35_7A3B' );
    dasmEntries.addBankLabel( 0x7A49, 0x35, 'bnk_35_7A49' );
    dasmEntries.addBankLabel( 0x7A6A, 0x35, 'bnk_35_7A6A' );
    dasmEntries.addBankLabel( 0x7ADE, 0x35, 'bnk_35_7ADE' );
    dasmEntries.addBankLabel( 0x7AEC, 0x35, 'bnk_35_7AEC' );
    dasmEntries.addBankLabel( 0x7AFA, 0x35, 'bnk_35_7AFA' );
    dasmEntries.addBankLabel( 0x7B08, 0x35, 'bnk_35_7B08' );
    dasmEntries.addBankLabel( 0x7B16, 0x35, 'bnk_35_7B16' );
    dasmEntries.addBankLabel( 0x7B37, 0x35, 'bnk_35_7B37' );
    dasmEntries.addBankLabel( 0x7B93, 0x35, 'bnk_35_7B93' );
    dasmEntries.addBankLabel( 0x7BAD, 0x35, 'bnk_35_7BAD' );
    dasmEntries.addBankLabel( 0x7BBE, 0x35, 'bnk_35_7BBE' );
    dasmEntries.addBankLabel( 0x7BE3, 0x35, 'bnk_35_7BE3' );
    dasmEntries.addBankLabel( 0x7C48, 0x35, 'bnk_35_7C48' );
    dasmEntries.addBankLabel( 0x7D3E, 0x35, 'bnk_35_7D3E' );
    dasmEntries.addBankLabel( 0x7E0D, 0x35, 'bnk_35_7E0D' );
    dasmEntries.addBankLabel( 0x7E9D, 0x35, 'bnk_35_7E9D' );
    dasmEntries.addBankLabel( 0x7EC4, 0x35, 'bnk_35_7EC4' );
    dasmEntries.addBankLabel( 0x7ECE, 0x35, 'bnk_35_7ECE' );
    dasmEntries.addBankLabel( 0x7EDC, 0x35, 'bnk_35_7EDC' );
    dasmEntries.addBankLabel( 0x7F1D, 0x35, 'bnk_35_7F1D' );
    dasmEntries.addBankLabel( 0x7F28, 0x35, 'bnk_35_7F28' );
    dasmEntries.addBankLabel( 0x7F52, 0x35, 'bnk_35_7F52' );
    dasmEntries.addBankLabel( 0x7F62, 0x35, 'bnk_35_7F62' );
    dasmEntries.addBankLabel( 0x7F75, 0x35, 'bnk_35_7F75' );
    dasmEntries.addBankLabel( 0x7F7B, 0x35, 'bnk_35_7F7B' );
    dasmEntries.addBankLabel( 0x7F8C, 0x35, 'bnk_35_7F8C' );
    dasmEntries.addBankLabel( 0x7F92, 0x35, 'bnk_35_7F92' );
    dasmEntries.addBankLabel( 0x7F9C, 0x35, 'bnk_35_7F9C' );
    dasmEntries.addBankLabel( 0x7FA5, 0x35, 'bnk_35_7FA5' );
    dasmEntries.addBankLabel( 0x7FD5, 0x35, 'bnk_35_7FD5' );
    dasmEntries.addBankLabel( 0x7FEB, 0x35, 'bnk_35_7FEB' );

    dasmEntries.addBankLabel( 0x6869, 0x35, 'caller_of_task99_WAITING-FOR-LINK' );

    dasmEntries.addBankLabel( 0x6f02, 0x35, 'checkForLinkedGame' );
    dasmEntries.addBankLabel( 0x6f30, 0x35, 'checkForLinkedGame_MachineCount' );
    dasmEntries.addBankLabel( 0x6f48, 0x35, 'caller_of_task9B_WAITING-FOR-OPPONENT' );

    dasmEntries.addBankLabel( 0x7061, 0x35, 'caller_of_task9A_INSERT-COINS-FOR-LINKED-PLAY' );

    dasmEntries.addBankLabel( 0x7120, 0x35, 'possible_caller_of_task9A_task9B' );

    dasmEntries.addBankLabel( 0x7bf7, 0x35, 'task99_WAITING-FOR-LINK' );
    dasmEntries.addBankLabel( 0x7c1f, 0x35, 'task9A_INSERT-COINS-FOR-LINKED-PLAY' );
    dasmEntries.addBankLabel( 0x7cb9, 0x35, 'task9B_WAITING-FOR-OPPONENT' );

 }

function getDasmEntries_bnk_36( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x36, 'pageMarker_bnk_36', 1, 1 );
    dasmEntries.addTableWpc( 0x4001, 0x36, 'tblwpc_4001_36' );
    dasmEntries.addTableStrings( 0x403a, 0x36, 'tblStrings', 0x19b );
    dasmEntries.addTableWpc( 0x41d5, 0x36, 'tblwpc_41d5_36' );
    dasmEntries.addTableStrings( 0x4230, 0x36, 'tblStrings', 0x25b );
    dasmEntries.addTableWpc( 0x448b, 0x36, 'tblwpc_448b_36' );
    dasmEntries.addTableStrings( 0x44c4, 0x36, 'tblStrings', 0x19 );
    dasmEntries.addTableWpc( 0x44dd, 0x36, 'tblwpc_44dd_36' );
    dasmEntries.addTableStrings( 0x4538, 0x36, 'tblStrings', 0x0d );
    dasmEntries.addTableWpc( 0x4545, 0x36, 'tblwpc_4545_36' );
    dasmEntries.addTableStrings( 0x457e, 0x36, 'tblStrings', 0x0d );

    dasmEntries.addBankLabel( 0x721A, 0x36, 'bnk_36_721A' );
    dasmEntries.addBankLabel( 0x727C, 0x36, 'bnk_36_727C' );
    dasmEntries.addBankLabel( 0x729F, 0x36, 'bnk_36_729F' );
    dasmEntries.addBankLabel( 0x72F7, 0x36, 'bnk_36_72F7' );
    dasmEntries.addBankLabel( 0x7345, 0x36, 'bnk_36_7345' );
    dasmEntries.addBankLabel( 0x7370, 0x36, 'bnk_36_7370' );
    dasmEntries.addBankLabel( 0x737A, 0x36, 'bnk_36_737A' );
    dasmEntries.addBankLabel( 0x7381, 0x36, 'bnk_36_7381' );
    dasmEntries.addBankLabel( 0x73CA, 0x36, 'bnk_36_73CA' );
    dasmEntries.addBankLabel( 0x7410, 0x36, 'bnk_36_7410' );
    dasmEntries.addBankLabel( 0x74B3, 0x36, 'bnk_36_74B3' );
    dasmEntries.addBankLabel( 0x74C0, 0x36, 'bnk_36_74C0' );
    dasmEntries.addBankLabel( 0x74D6, 0x36, 'bnk_36_74D6' );
    dasmEntries.addBankLabel( 0x75F2, 0x36, 'bnk_36_75F2' );
    dasmEntries.addBankLabel( 0x7666, 0x36, 'bnk_36_7666' );
    dasmEntries.addBankLabel( 0x76B2, 0x36, 'bnk_36_76B2' );
    dasmEntries.addBankLabel( 0x76FC, 0x36, 'bnk_36_76FC' );
    dasmEntries.addBankLabel( 0x7741, 0x36, 'bnk_36_7741' );
    dasmEntries.addBankLabel( 0x77E7, 0x36, 'bnk_36_77E7' );
    dasmEntries.addBankLabel( 0x7803, 0x36, 'bnk_36_7803' );
    dasmEntries.addBankLabel( 0x7812, 0x36, 'bnk_36_7812' );
    dasmEntries.addBankLabel( 0x7854, 0x36, 'bnk_36_7854' );
    dasmEntries.addBankLabel( 0x788C, 0x36, 'bnk_36_788C' );
    dasmEntries.addBankLabel( 0x7938, 0x36, 'bnk_36_7938' );
    dasmEntries.addBankLabel( 0x7C0D, 0x36, 'bnk_36_7C0D' );
    dasmEntries.addBankLabel( 0x7C25, 0x36, 'bnk_36_7C25' );
    dasmEntries.addBankLabel( 0x7C3D, 0x36, 'bnk_36_7C3D' );
    dasmEntries.addBankLabel( 0x7C61, 0x36, 'bnk_36_7C61' );
    dasmEntries.addBankLabel( 0x7C71, 0x36, 'bnk_36_7C71' );
    dasmEntries.addBankLabel( 0x7C8B, 0x36, 'bnk_36_7C8B' );
    dasmEntries.addBankLabel( 0x7CA3, 0x36, 'bnk_36_7CA3' );
    dasmEntries.addBankLabel( 0x7CBB, 0x36, 'bnk_36_7CBB' );
    dasmEntries.addBankLabel( 0x7CD2, 0x36, 'bnk_36_7CD2' );
    dasmEntries.addBankLabel( 0x7CE9, 0x36, 'bnk_36_7CE9' );
    dasmEntries.addBankLabel( 0x7D00, 0x36, 'bnk_36_7D00' );
}

function getDasmEntries_bnk_37( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x37, 'pageMarker_bnk_37', 1, 1 );

    dasmEntries.addBankLabel( 0x4001, 0x37, 'bnk_37_4001' );
    dasmEntries.addBankLabel( 0x4011, 0x37, 'bnk_37_4011' );
    dasmEntries.addBankLabel( 0x4037, 0x37, 'bnk_37_4037' );
    dasmEntries.addBankLabel( 0x4044, 0x37, 'bnk_37_4044' );
    dasmEntries.addBankLabel( 0x4076, 0x37, 'bnk_37_4076' );
    dasmEntries.addBankLabel( 0x40DA, 0x37, 'bnk_37_40DA' );
    dasmEntries.addBankLabel( 0x40FD, 0x37, 'bnk_37_40FD' );
    dasmEntries.addBankLabel( 0x413E, 0x37, 'bnk_37_413E' );
    dasmEntries.addBankLabel( 0x41C1, 0x37, 'bnk_37_41C1' );
    dasmEntries.addBankLabel( 0x41D3, 0x37, 'bnk_37_41D3' );
    dasmEntries.addBankLabel( 0x41DC, 0x37, 'bnk_37_41DC' );
    dasmEntries.addBankLabel( 0x41E7, 0x37, 'bnk_37_41E7' );
    dasmEntries.addBankLabel( 0x422D, 0x37, 'bnk_37_422D' );
    dasmEntries.addBankLabel( 0x4276, 0x37, 'bnk_37_4276' );
    dasmEntries.addBankLabel( 0x4281, 0x37, 'bnk_37_4281' );
    dasmEntries.addBankLabel( 0x429F, 0x37, 'bnk_37_429F' );
    dasmEntries.addBankLabel( 0x42ED, 0x37, 'bnk_37_42ED' );
    dasmEntries.addBankLabel( 0x42F8, 0x37, 'bnk_37_42F8' );
    dasmEntries.addBankLabel( 0x4305, 0x37, 'bnk_37_4305' );
    dasmEntries.addBankLabel( 0x4392, 0x37, 'bnk_37_4392' );
    dasmEntries.addBankLabel( 0x43DB, 0x37, 'bnk_37_43DB' );
    dasmEntries.addBankLabel( 0x43F5, 0x37, 'bnk_37_43F5' );
    dasmEntries.addBankLabel( 0x44A9, 0x37, 'bnk_37_44A9' );
    dasmEntries.addBankLabel( 0x44BD, 0x37, 'bnk_37_44BD' );
    dasmEntries.addBankLabel( 0x44C6, 0x37, 'bnk_37_44C6' );
    dasmEntries.addBankLabel( 0x44ED, 0x37, 'bnk_37_44ED' );
    dasmEntries.addBankLabel( 0x4542, 0x37, 'bnk_37_4542' );
    dasmEntries.addBankLabel( 0x4548, 0x37, 'bnk_37_4548' );
    dasmEntries.addBankLabel( 0x456C, 0x37, 'bnk_37_456C' );
    dasmEntries.addBankLabel( 0x4584, 0x37, 'bnk_37_4584' );
    dasmEntries.addBankLabel( 0x4593, 0x37, 'bnk_37_4593' );
    dasmEntries.addBankLabel( 0x45D6, 0x37, 'bnk_37_45D6' );
    dasmEntries.addBankLabel( 0x45F5, 0x37, 'bnk_37_45F5' );
    dasmEntries.addBankLabel( 0x45F9, 0x37, 'bnk_37_45F9' );
    dasmEntries.addBankLabel( 0x4625, 0x37, 'bnk_37_4625' );
    dasmEntries.addBankLabel( 0x4636, 0x37, 'bnk_37_4636' );
    dasmEntries.addBankLabel( 0x46AE, 0x37, 'bnk_37_46AE' );
    dasmEntries.addBankLabel( 0x46CA, 0x37, 'bnk_37_46CA' );
    dasmEntries.addBankLabel( 0x46E0, 0x37, 'bnk_37_46E0' );
    dasmEntries.addBankLabel( 0x46EF, 0x37, 'bnk_37_46EF' );
    dasmEntries.addBankLabel( 0x4704, 0x37, 'bnk_37_4704' );
    dasmEntries.addBankLabel( 0x4710, 0x37, 'bnk_37_4710' );
    dasmEntries.addBankLabel( 0x4747, 0x37, 'bnk_37_4747' );
    dasmEntries.addBankLabel( 0x4760, 0x37, 'bnk_37_4760' );
    dasmEntries.addBankLabel( 0x4770, 0x37, 'bnk_37_4770' );
    dasmEntries.addBankLabel( 0x4785, 0x37, 'bnk_37_4785' );
    dasmEntries.addBankLabel( 0x4794, 0x37, 'bnk_37_4794' );
    dasmEntries.addBankLabel( 0x47A6, 0x37, 'bnk_37_47A6' );
    dasmEntries.addBankLabel( 0x47B4, 0x37, 'bnk_37_47B4' );
    dasmEntries.addBankLabel( 0x47BD, 0x37, 'bnk_37_47BD' );
    dasmEntries.addBankLabel( 0x47CA, 0x37, 'bnk_37_47CA' );
    dasmEntries.addBankLabel( 0x47DC, 0x37, 'bnk_37_47DC' );
    dasmEntries.addBankLabel( 0x47FB, 0x37, 'bnk_37_47FB' );
    dasmEntries.addBankLabel( 0x4813, 0x37, 'bnk_37_4813' );
    dasmEntries.addBankLabel( 0x482C, 0x37, 'bnk_37_482C' );
    dasmEntries.addBankLabel( 0x487D, 0x37, 'bnk_37_487D' );
    dasmEntries.addBankLabel( 0x4886, 0x37, 'bnk_37_4886' );
    dasmEntries.addBankLabel( 0x488A, 0x37, 'bnk_37_488A' );
    dasmEntries.addBankLabel( 0x4893, 0x37, 'bnk_37_4893' );
    dasmEntries.addBankLabel( 0x4899, 0x37, 'bnk_37_4899' );
    dasmEntries.addBankLabel( 0x48A2, 0x37, 'bnk_37_48A2' );
    dasmEntries.addBankLabel( 0x48AB, 0x37, 'bnk_37_48AB' );
    dasmEntries.addBankLabel( 0x48C2, 0x37, 'bnk_37_48C2' );
    dasmEntries.addBankLabel( 0x48CD, 0x37, 'bnk_37_48CD' );
    dasmEntries.addBankLabel( 0x48DE, 0x37, 'bnk_37_48DE' );
    dasmEntries.addBankLabel( 0x48E8, 0x37, 'bnk_37_48E8' );
    dasmEntries.addBankLabel( 0x48F5, 0x37, 'bnk_37_48F5' );
    dasmEntries.addBankLabel( 0x490F, 0x37, 'bnk_37_490F' );
    dasmEntries.addBankLabel( 0x4938, 0x37, 'bnk_37_4938' );
    dasmEntries.addBankLabel( 0x4953, 0x37, 'bnk_37_4953' );
    dasmEntries.addBankLabel( 0x495D, 0x37, 'bnk_37_495D' );
    dasmEntries.addBankLabel( 0x4961, 0x37, 'bnk_37_4961' );
    dasmEntries.addBankLabel( 0x4973, 0x37, 'bnk_37_4973' );
    dasmEntries.addBankLabel( 0x497E, 0x37, 'bnk_37_497E' );
    dasmEntries.addBankLabel( 0x4982, 0x37, 'bnk_37_4982' );
    dasmEntries.addBankLabel( 0x49C2, 0x37, 'bnk_37_49C2' );
    dasmEntries.addBankLabel( 0x49E3, 0x37, 'bnk_37_49E3' );
    dasmEntries.addBankLabel( 0x4A0E, 0x37, 'bnk_37_4A0E' );
    dasmEntries.addBankLabel( 0x4B80, 0x37, 'bnk_37_4B80' );
    dasmEntries.addBankLabel( 0x4B90, 0x37, 'bnk_37_4B90' );
    dasmEntries.addBankLabel( 0x4BC3, 0x37, 'bnk_37_4BC3' );
    dasmEntries.addBankLabel( 0x4BFB, 0x37, 'bnk_37_4BFB' );
    dasmEntries.addBankLabel( 0x4C6E, 0x37, 'bnk_37_4C6E' );
    dasmEntries.addBankLabel( 0x4CD5, 0x37, 'bnk_37_4CD5' );
    dasmEntries.addBankLabel( 0x4D1A, 0x37, 'bnk_37_4D1A' );
    dasmEntries.addBankLabel( 0x4D1D, 0x37, 'bnk_37_4D1D' );
    dasmEntries.addBankLabel( 0x678E, 0x37, 'bnk_37_678E' );
    dasmEntries.addBankLabel( 0x67F6, 0x37, 'bnk_37_67F6' );
    dasmEntries.addBankLabel( 0x682F, 0x37, 'bnk_37_682F' );
    dasmEntries.addBankLabel( 0x6848, 0x37, 'bnk_37_6848' );
    dasmEntries.addBankLabel( 0x68B0, 0x37, 'bnk_37_68B0' );
    dasmEntries.addBankLabel( 0x68C8, 0x37, 'bnk_37_68C8' );
    dasmEntries.addBankLabel( 0x68F8, 0x37, 'bnk_37_68F8' );
    dasmEntries.addBankLabel( 0x6938, 0x37, 'bnk_37_6938' );

    dasmEntries.addTable( 0x472D, 0x37, 'tbl_bnk37_472D', 13, 2 );
    dasmEntries.addTable( 0x4B99, 0x37, 'tbl_bnk37_4B99', 21, 2 );
    dasmEntries.addTable( 0x4BE3, 0x37, 'tbl_bnk37_4BE3', 12, 2 );

    dasmEntries.addBankLabel( 0x4D20, 0x37, 'SetRAMBankId_to_0' );
    dasmEntries.addBankLabel( 0x4D28, 0x37, 'LoadB_from_currentRAMBankId' );
    dasmEntries.addBankLabel( 0x4D2c, 0x37, 'setRAMBank_from_B' );

    dasmEntries.addTableWpc( 0x4d64, 0x37, 'tblStringAddrFrench' );

    dasmEntries.addTableStrings( 0x5159, 0x37, 'tblStringsFrench', 5685 );
    // dasmEntries.addTable( 0x5159, 0x37, 'tblStrings-FR', 355, 16 );
    dasmEntries.addTable( 0x6789, 0x37, 'tblStrings-French-End', 1, 5 );

    dasmEntries.addTableWpc( 0x6978, 0x37, 'tblWpcNineBytes-A' );
    // dasmEntries.add( 0x6B53, 0, 'callerOf_WAITINGFORLNK',  );
    dasmEntries.addBankLabel( 0x6B53, 0x37, 'caller_of_caller_Of_WAITING-FOR-LINK' );
    dasmEntries.addTableWpc( 0x784C, 0x37, 'tblWpcNineBytes-B', 3, 6 );
    dasmEntries.addTableWpc( 0x78BB, 0x37, 'tblWpcNineBytes-C', 3, 6 );
    dasmEntries.addTableWpc( 0x78EB, 0x37, 'tblWpcNineBytes-D', 3, 6 );
    dasmEntries.addTableWpc( 0x79FC, 0x37, 'tblWpcNineBytes-E', 3, 6 );
    dasmEntries.addTableWpc( 0x7A1A, 0x37, 'tblWpcNineBytes-F', 3, 6 );

    dasmEntries.addBankLabel( 0x69A8, 0x37, 'bnk_37_69A8' );
    dasmEntries.addBankLabel( 0x69B4, 0x37, 'bnk_37_69B4' );
    dasmEntries.addBankLabel( 0x6A86, 0x37, 'bnk_37_6A86' );
    dasmEntries.addBankLabel( 0x6A90, 0x37, 'bnk_37_6A90' );
    dasmEntries.addBankLabel( 0x6AA9, 0x37, 'bnk_37_6AA9' );
    dasmEntries.addBankLabel( 0x6ABF, 0x37, 'bnk_37_6ABF' );
    dasmEntries.addBankLabel( 0x6ACD, 0x37, 'bnk_37_6ACD' );
    dasmEntries.addBankLabel( 0x6BBB, 0x37, 'bnk_37_6BBB' );
    dasmEntries.addBankLabel( 0x6BDB, 0x37, 'bnk_37_6BDB' );
    dasmEntries.addBankLabel( 0x6BF3, 0x37, 'bnk_37_6BF3' );
    dasmEntries.addBankLabel( 0x6BF7, 0x37, 'bnk_37_6BF7' );
    dasmEntries.addBankLabel( 0x6C34, 0x37, 'bnk_37_6C34' );
    dasmEntries.addBankLabel( 0x6C50, 0x37, 'bnk_37_6C50' );
    dasmEntries.addBankLabel( 0x6C6C, 0x37, 'bnk_37_6C6C' );
    dasmEntries.addBankLabel( 0x6C7C, 0x37, 'bnk_37_6C7C' );
    dasmEntries.addBankLabel( 0x6C99, 0x37, 'bnk_37_6C99' );
    dasmEntries.addBankLabel( 0x6CB6, 0x37, 'bnk_37_6CB6' );
    dasmEntries.addBankLabel( 0x6CD8, 0x37, 'bnk_37_6CD8' );
    dasmEntries.addBankLabel( 0x6D1B, 0x37, 'bnk_37_6D1B' );
    dasmEntries.addBankLabel( 0x6D30, 0x37, 'bnk_37_6D30' );
    dasmEntries.addBankLabel( 0x6D39, 0x37, 'bnk_37_6D39' );
    dasmEntries.addBankLabel( 0x6D74, 0x37, 'bnk_37_6D74' );
    dasmEntries.addBankLabel( 0x6DCD, 0x37, 'bnk_37_6DCD' );
    dasmEntries.addBankLabel( 0x6E0C, 0x37, 'bnk_37_6E0C' );
    dasmEntries.addBankLabel( 0x6E27, 0x37, 'bnk_37_6E27' );
    dasmEntries.addBankLabel( 0x6E42, 0x37, 'bnk_37_6E42' );
    dasmEntries.addBankLabel( 0x6E5D, 0x37, 'bnk_37_6E5D' );
    dasmEntries.addBankLabel( 0x6E78, 0x37, 'bnk_37_6E78' );
    dasmEntries.addBankLabel( 0x6F2C, 0x37, 'bnk_37_6F2C' );
    dasmEntries.addBankLabel( 0x723E, 0x37, 'bnk_37_723E' );
    dasmEntries.addBankLabel( 0x72B9, 0x37, 'bnk_37_72B9' );
    dasmEntries.addBankLabel( 0x7364, 0x37, 'bnk_37_7364' );
    dasmEntries.addBankLabel( 0x7372, 0x37, 'bnk_37_7372' );
    dasmEntries.addBankLabel( 0x739F, 0x37, 'bnk_37_739F' );
    dasmEntries.addBankLabel( 0x73CA, 0x37, 'bnk_37_73CA' );
    dasmEntries.addBankLabel( 0x73DC, 0x37, 'bnk_37_73DC' );
    dasmEntries.addBankLabel( 0x7A2F, 0x37, 'bnk_37_7A2F' );
    dasmEntries.addBankLabel( 0x7AEB, 0x37, 'bnk_37_7AEB' );
    dasmEntries.addBankLabel( 0x7B49, 0x37, 'bnk_37_7B49' );
    dasmEntries.addBankLabel( 0x7BA7, 0x37, 'bnk_37_7BA7' );
    dasmEntries.addBankLabel( 0x7BCF, 0x37, 'bnk_37_7BCF' );
    dasmEntries.addBankLabel( 0x7BD0, 0x37, 'bnk_37_7BD0' );
    dasmEntries.addBankLabel( 0x7BE3, 0x37, 'bnk_37_7BE3' );
    dasmEntries.addBankLabel( 0x7BF6, 0x37, 'bnk_37_7BF6' );
    dasmEntries.addBankLabel( 0x7C09, 0x37, 'bnk_37_7C09' );
    dasmEntries.addBankLabel( 0x7C1C, 0x37, 'bnk_37_7C1C' );
    dasmEntries.addBankLabel( 0x7C3B, 0x37, 'bnk_37_7C3B' );
    dasmEntries.addBankLabel( 0x7C58, 0x37, 'bnk_37_7C58' );
    dasmEntries.addBankLabel( 0x7C6B, 0x37, 'bnk_37_7C6B' );
    dasmEntries.addBankLabel( 0x7C7E, 0x37, 'bnk_37_7C7E' );
    dasmEntries.addBankLabel( 0x7C96, 0x37, 'bnk_37_7C96' );
    dasmEntries.addBankLabel( 0x7CAE, 0x37, 'bnk_37_7CAE' );
    dasmEntries.addBankLabel( 0x7CCD, 0x37, 'bnk_37_7CCD' );
    dasmEntries.addBankLabel( 0x7CEA, 0x37, 'bnk_37_7CEA' );
    dasmEntries.addBankLabel( 0x7CFD, 0x37, 'bnk_37_7CFD' );
    dasmEntries.addBankLabel( 0x7D10, 0x37, 'bnk_37_7D10' );
    dasmEntries.addBankLabel( 0x7D28, 0x37, 'bnk_37_7D28' );
    dasmEntries.addBankLabel( 0x7D40, 0x37, 'bnk_37_7D40' );
    dasmEntries.addBankLabel( 0x7D5F, 0x37, 'bnk_37_7D5F' );
    dasmEntries.addBankLabel( 0x7D7C, 0x37, 'bnk_37_7D7C' );
    dasmEntries.addBankLabel( 0x7D8F, 0x37, 'bnk_37_7D8F' );
    dasmEntries.addBankLabel( 0x7DA2, 0x37, 'bnk_37_7DA2' );
    dasmEntries.addBankLabel( 0x7DBA, 0x37, 'bnk_37_7DBA' );
    dasmEntries.addBankLabel( 0x7DD2, 0x37, 'bnk_37_7DD2' );
    dasmEntries.addBankLabel( 0x7DD6, 0x37, 'bnk_37_7DD6' );
    dasmEntries.addBankLabel( 0x7DDA, 0x37, 'bnk_37_7DDA' );
    dasmEntries.addBankLabel( 0x7E09, 0x37, 'bnk_37_7E09' );
    dasmEntries.addBankLabel( 0x7E3C, 0x37, 'bnk_37_7E3C' );
    dasmEntries.addBankLabel( 0x7E75, 0x37, 'bnk_37_7E75' );
    dasmEntries.addBankLabel( 0x7EAE, 0x37, 'bnk_37_7EAE' );
    dasmEntries.addBankLabel( 0x7EC2, 0x37, 'bnk_37_7EC2' );
    dasmEntries.addBankLabel( 0x7ED6, 0x37, 'bnk_37_7ED6' );
    dasmEntries.addBankLabel( 0x7EEA, 0x37, 'bnk_37_7EEA' );
    dasmEntries.addBankLabel( 0x7EFE, 0x37, 'bnk_37_7EFE' );
    dasmEntries.addBankLabel( 0x7F02, 0x37, 'bnk_37_7F02' );
    dasmEntries.addBankLabel( 0x7F0B, 0x37, 'bnk_37_7F0B' );

    dasmEntries.addTable( 0x7F25, 0x37, 'filler', 73, 3 );
}

function getDasmEntries_bnk_38( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x38, 'pageMarker_bnk_38', 1, 1 );
    dasmEntries.addTable( 0x4ccf, 0x38, 'tblFiveBytes', 1, 5 );

    dasmEntries.addBankLabel( 0x407E, 0x38, 'bnk_38_407E' );
    dasmEntries.addBankLabel( 0x409C, 0x38, 'bnk_38_409C' );
    dasmEntries.addBankLabel( 0x40A9, 0x38, 'bnk_38_40A9' );
    dasmEntries.addBankLabel( 0x40CC, 0x38, 'bnk_38_40CC' );
    dasmEntries.addBankLabel( 0x40EA, 0x38, 'bnk_38_40EA' );
    dasmEntries.addBankLabel( 0x40F3, 0x38, 'bnk_38_40F3' );
    dasmEntries.addBankLabel( 0x40FF, 0x38, 'bnk_38_40FF' );
    dasmEntries.addBankLabel( 0x410B, 0x38, 'bnk_38_410B' );
    dasmEntries.addBankLabel( 0x4112, 0x38, 'bnk_38_4112' );
    dasmEntries.addBankLabel( 0x414C, 0x38, 'bnk_38_414C' );
    dasmEntries.addBankLabel( 0x4158, 0x38, 'bnk_38_4158' );
    dasmEntries.addBankLabel( 0x4178, 0x38, 'bnk_38_4178' );
    dasmEntries.addBankLabel( 0x417D, 0x38, 'bnk_38_417D' );
    dasmEntries.addBankLabel( 0x4208, 0x38, 'bnk_38_4208' );
    dasmEntries.addBankLabel( 0x421C, 0x38, 'bnk_38_421C' );
    dasmEntries.addBankLabel( 0x422A, 0x38, 'bnk_38_422A' );
    dasmEntries.addBankLabel( 0x423A, 0x38, 'bnk_38_423A' );
    dasmEntries.addBankLabel( 0x4258, 0x38, 'bnk_38_4258' );
    dasmEntries.addBankLabel( 0x425C, 0x38, 'bnk_38_425C' );
    dasmEntries.addBankLabel( 0x4282, 0x38, 'bnk_38_4282' );
    dasmEntries.addBankLabel( 0x428A, 0x38, 'bnk_38_428A' );
    dasmEntries.addBankLabel( 0x42A7, 0x38, 'bnk_38_42A7' );
    dasmEntries.addBankLabel( 0x42CD, 0x38, 'bnk_38_42CD' );
    dasmEntries.addBankLabel( 0x42F6, 0x38, 'bnk_38_42F6' );
    dasmEntries.addBankLabel( 0x4322, 0x38, 'bnk_38_4322' );
    dasmEntries.addBankLabel( 0x4347, 0x38, 'bnk_38_4347' );
    dasmEntries.addBankLabel( 0x4373, 0x38, 'bnk_38_4373' );
    dasmEntries.addBankLabel( 0x4390, 0x38, 'bnk_38_4390' );
    dasmEntries.addBankLabel( 0x439F, 0x38, 'bnk_38_439F' );
    dasmEntries.addBankLabel( 0x43C1, 0x38, 'bnk_38_43C1' );
    dasmEntries.addBankLabel( 0x43C8, 0x38, 'bnk_38_43C8' );
    dasmEntries.addBankLabel( 0x43CE, 0x38, 'bnk_38_43CE' );
    dasmEntries.addBankLabel( 0x43D7, 0x38, 'bnk_38_43D7' );
    dasmEntries.addBankLabel( 0x43E0, 0x38, 'bnk_38_43E0' );
    dasmEntries.addBankLabel( 0x43EE, 0x38, 'bnk_38_43EE' );
    dasmEntries.addBankLabel( 0x4407, 0x38, 'bnk_38_4407' );
    dasmEntries.addBankLabel( 0x4414, 0x38, 'bnk_38_4414' );
    dasmEntries.addBankLabel( 0x443C, 0x38, 'bnk_38_443C' );
    dasmEntries.addBankLabel( 0x4449, 0x38, 'bnk_38_4449' );
    dasmEntries.addBankLabel( 0x4450, 0x38, 'bnk_38_4450' );
    dasmEntries.addBankLabel( 0x445D, 0x38, 'bnk_38_445D' );
    dasmEntries.addBankLabel( 0x44BF, 0x38, 'bnk_38_44BF' );
    dasmEntries.addBankLabel( 0x44F8, 0x38, 'bnk_38_44F8' );
    dasmEntries.addBankLabel( 0x4505, 0x38, 'bnk_38_4505' );
    dasmEntries.addBankLabel( 0x4510, 0x38, 'bnk_38_4510' );
    dasmEntries.addBankLabel( 0x452B, 0x38, 'bnk_38_452B' );
    dasmEntries.addBankLabel( 0x457D, 0x38, 'bnk_38_457D' );
    dasmEntries.addBankLabel( 0x458A, 0x38, 'bnk_38_458A' );
    dasmEntries.addBankLabel( 0x459F, 0x38, 'bnk_38_459F' );
    dasmEntries.addBankLabel( 0x45AD, 0x38, 'bnk_38_45AD' );
    dasmEntries.addBankLabel( 0x45EB, 0x38, 'bnk_38_45EB' );
    dasmEntries.addBankLabel( 0x45F6, 0x38, 'bnk_38_45F6' );
    dasmEntries.addBankLabel( 0x45FD, 0x38, 'bnk_38_45FD' );
    dasmEntries.addBankLabel( 0x4604, 0x38, 'bnk_38_4604' );
    dasmEntries.addBankLabel( 0x4626, 0x38, 'bnk_38_4626' );
    dasmEntries.addBankLabel( 0x465A, 0x38, 'bnk_38_465A' );
    dasmEntries.addBankLabel( 0x4668, 0x38, 'bnk_38_4668' );
    dasmEntries.addBankLabel( 0x467B, 0x38, 'bnk_38_467B' );
    dasmEntries.addBankLabel( 0x4694, 0x38, 'bnk_38_4694' );
    dasmEntries.addBankLabel( 0x469F, 0x38, 'bnk_38_469F' );
    dasmEntries.addBankLabel( 0x46AB, 0x38, 'bnk_38_46AB' );
    dasmEntries.addBankLabel( 0x4711, 0x38, 'bnk_38_4711' );
    dasmEntries.addBankLabel( 0x474B, 0x38, 'bnk_38_474B' );
    dasmEntries.addBankLabel( 0x4788, 0x38, 'bnk_38_4788' );
    dasmEntries.addBankLabel( 0x4791, 0x38, 'bnk_38_4791' );
    dasmEntries.addBankLabel( 0x47B5, 0x38, 'bnk_38_47B5' );
    dasmEntries.addBankLabel( 0x47C4, 0x38, 'bnk_38_47C4' );
    dasmEntries.addBankLabel( 0x480D, 0x38, 'bnk_38_480D' );
    dasmEntries.addBankLabel( 0x488D, 0x38, 'bnk_38_488D' );
    dasmEntries.addBankLabel( 0x48A3, 0x38, 'bnk_38_48A3' );
    dasmEntries.addBankLabel( 0x48B2, 0x38, 'bnk_38_48B2' );
    dasmEntries.addBankLabel( 0x48C1, 0x38, 'bnk_38_48C1' );
    dasmEntries.addBankLabel( 0x491F, 0x38, 'bnk_38_491F' );
    dasmEntries.addBankLabel( 0x493D, 0x38, 'bnk_38_493D' );
    dasmEntries.addBankLabel( 0x4951, 0x38, 'bnk_38_4951' );
    dasmEntries.addBankLabel( 0x4977, 0x38, 'bnk_38_4977' );
    dasmEntries.addBankLabel( 0x4A31, 0x38, 'bnk_38_4A31' );
    dasmEntries.addBankLabel( 0x4A46, 0x38, 'bnk_38_4A46' );
    dasmEntries.addBankLabel( 0x4A61, 0x38, 'bnk_38_4A61' );
    dasmEntries.addBankLabel( 0x4A7F, 0x38, 'bnk_38_4A7F' );
    dasmEntries.addBankLabel( 0x4AD8, 0x38, 'bnk_38_4AD8' );
    dasmEntries.addBankLabel( 0x4ADB, 0x38, 'bnk_38_4ADB' );
    dasmEntries.addBankLabel( 0x4ADE, 0x38, 'bnk_38_4ADE' );
    dasmEntries.addBankLabel( 0x4B14, 0x38, 'bnk_38_4B14' );
    dasmEntries.addBankLabel( 0x4BDC, 0x38, 'bnk_38_4BDC' );
    dasmEntries.addBankLabel( 0x4BFE, 0x38, 'bnk_38_4BFE' );
    dasmEntries.addBankLabel( 0x4C04, 0x38, 'bnk_38_4C04' );
    dasmEntries.addBankLabel( 0x4C2E, 0x38, 'bnk_38_4C2E' );
    dasmEntries.addBankLabel( 0x4C44, 0x38, 'bnk_38_4C44' );
    dasmEntries.addBankLabel( 0x4C4C, 0x38, 'bnk_38_4C4C' );
    dasmEntries.addBankLabel( 0x4C5E, 0x38, 'bnk_38_4C5E' );
    dasmEntries.addBankLabel( 0x4C7D, 0x38, 'bnk_38_4C7D' );
    dasmEntries.addBankLabel( 0x4C8C, 0x38, 'bnk_38_4C8C' );
    dasmEntries.addBankLabel( 0x4CD4, 0x38, 'bnk_38_4CD4' );
    dasmEntries.addBankLabel( 0x4CE6, 0x38, 'bnk_38_4CE6' );
    dasmEntries.addBankLabel( 0x4DC9, 0x38, 'bnk_38_4DC9' );
    dasmEntries.addBankLabel( 0x4DDE, 0x38, 'bnk_38_4DDE' );
    dasmEntries.addBankLabel( 0x4E1E, 0x38, 'bnk_38_4E1E' );
    dasmEntries.addBankLabel( 0x4E56, 0x38, 'bnk_38_4E56' );
    dasmEntries.addBankLabel( 0x4E66, 0x38, 'bnk_38_4E66' );
    dasmEntries.addBankLabel( 0x4EAD, 0x38, 'bnk_38_4EAD' );
    dasmEntries.addBankLabel( 0x4F24, 0x38, 'bnk_38_4F24' );
    dasmEntries.addBankLabel( 0x4F2F, 0x38, 'bnk_38_4F2F' );
    dasmEntries.addBankLabel( 0x4F65, 0x38, 'bnk_38_4F65' );
    dasmEntries.addBankLabel( 0x4FF1, 0x38, 'bnk_38_4FF1' );

    dasmEntries.addBankLabel( 0x5070, 0x38, 'bnk_38_5070' );
    dasmEntries.addBankLabel( 0x50C4, 0x38, 'bnk_38_50C4' );
    dasmEntries.addBankLabel( 0x5130, 0x38, 'bnk_38_5130' );
    dasmEntries.addBankLabel( 0x516A, 0x38, 'bnk_38_516A' );
    dasmEntries.addBankLabel( 0x5176, 0x38, 'bnk_38_5176' );
    dasmEntries.addBankLabel( 0x5185, 0x38, 'bnk_38_5185' );
    dasmEntries.addBankLabel( 0x5187, 0x38, 'bnk_38_5187' );
    dasmEntries.addBankLabel( 0x5195, 0x38, 'bnk_38_5195' );
    dasmEntries.addBankLabel( 0x51A7, 0x38, 'bnk_38_51A7' );
    dasmEntries.addBankLabel( 0x51CA, 0x38, 'clear_88bytes_at_LampMatrix' );
    dasmEntries.addBankLabel( 0x51D3, 0x38, 'bnk_38_51D3' );
    dasmEntries.addBankLabel( 0x522C, 0x38, 'bnk_38_522C' );
    dasmEntries.addBankLabel( 0x523F, 0x38, 'bnk_38_523F' );
    dasmEntries.addBankLabel( 0x5274, 0x38, 'bnk_38_5274' );
    dasmEntries.addBankLabel( 0x5285, 0x38, 'bnk_38_5285' );
    dasmEntries.addBankLabel( 0x528E, 0x38, 'bnk_38_528E' );
    dasmEntries.addBankLabel( 0x529A, 0x38, 'bnk_38_529A' );
    dasmEntries.addBankLabel( 0x52A4, 0x38, 'bnk_38_52A4' );
    dasmEntries.addBankLabel( 0x52C5, 0x38, 'bnk_38_52C5' );
    dasmEntries.addBankLabel( 0x52CE, 0x38, 'bnk_38_52CE' );
    dasmEntries.addBankLabel( 0x52D7, 0x38, 'bnk_38_52D7' );
    dasmEntries.addBankLabel( 0x52E7, 0x38, 'bnk_38_52E7' );
    dasmEntries.addBankLabel( 0x52F0, 0x38, 'bnk_38_52F0' );
    dasmEntries.addBankLabel( 0x539A, 0x38, 'bnk_38_539A' );
    dasmEntries.addBankLabel( 0x53EB, 0x38, 'bnk_38_53EB' );
    dasmEntries.addBankLabel( 0x53FB, 0x38, 'bnk_38_53FB' );
    dasmEntries.addBankLabel( 0x5464, 0x38, 'bnk_38_5464' );
    dasmEntries.addBankLabel( 0x549A, 0x38, 'bnk_38_549A' );
    dasmEntries.addBankLabel( 0x54DA, 0x38, 'bnk_38_54DA' );
    dasmEntries.addBankLabel( 0x54E8, 0x38, 'bnk_38_54E8' );
    dasmEntries.addBankLabel( 0x54F1, 0x38, 'bnk_38_54F1' );
    dasmEntries.addBankLabel( 0x550E, 0x38, 'bnk_38_550E' );
    dasmEntries.addBankLabel( 0x5517, 0x38, 'bnk_38_5517' );
    dasmEntries.addBankLabel( 0x558A, 0x38, 'bnk_38_558A' );
    dasmEntries.addBankLabel( 0x55A5, 0x38, 'bnk_38_55A5' );
    dasmEntries.addBankLabel( 0x55EC, 0x38, 'bnk_38_55EC' );
    dasmEntries.addBankLabel( 0x55F5, 0x38, 'bnk_38_55F5' );
    dasmEntries.addBankLabel( 0x565A, 0x38, 'bnk_38_565A' );
    dasmEntries.addBankLabel( 0x566C, 0x38, 'bnk_38_566C' );
    dasmEntries.addBankLabel( 0x5683, 0x38, 'bnk_38_5683' );
    dasmEntries.addBankLabel( 0x56AB, 0x38, 'bnk_38_56AB' );
    dasmEntries.addBankLabel( 0x56BA, 0x38, 'bnk_38_56BA' );
    dasmEntries.addBankLabel( 0x56E1, 0x38, 'bnk_38_56E1' );
    dasmEntries.addBankLabel( 0x56EE, 0x38, 'bnk_38_56EE' );
    dasmEntries.addBankLabel( 0x571D, 0x38, 'bnk_38_571D' );
    dasmEntries.addBankLabel( 0x578F, 0x38, 'bnk_38_578F' );
    dasmEntries.addBankLabel( 0x57B9, 0x38, 'bnk_38_57B9' );
    dasmEntries.addBankLabel( 0x57D7, 0x38, 'bnk_38_57D7' );
    dasmEntries.addBankLabel( 0x5826, 0x38, 'bnk_38_5826' );
    dasmEntries.addBankLabel( 0x5839, 0x38, 'bnk_38_5839' );
    dasmEntries.addBankLabel( 0x58AE, 0x38, 'bnk_38_58AE' );
    dasmEntries.addBankLabel( 0x5956, 0x38, 'bnk_38_5956' );
    dasmEntries.addBankLabel( 0x59B5, 0x38, 'bnk_38_59B5' );
    dasmEntries.addBankLabel( 0x59C9, 0x38, 'bnk_38_59C9' );
    dasmEntries.addBankLabel( 0x59D8, 0x38, 'bnk_38_59D8' );

    dasmEntries.addTableWpc( 0x5a17, 0x38, 'tblWpcTwoBytes' );

    dasmEntries.addTableWpc( 0x6bbd, 0x38, 'tblWpcTwoBytes' );

    dasmEntries.addBankLabel( 0x7ED6, 0x38, 'bnk_38_7ED6' );
    dasmEntries.addBankLabel( 0x7EE1, 0x38, 'bnk_38_7EE1' );
    dasmEntries.addBankLabel( 0x7EFA, 0x38, 'bnk_38_7EFA' );
    dasmEntries.addBankLabel( 0x7F32, 0x38, 'bnk_38_7F32' );
    dasmEntries.addBankLabel( 0x7F57, 0x38, 'bnk_38_7F57' );
    dasmEntries.addBankLabel( 0x7F6C, 0x38, 'bnk_38_7F6C' );

    dasmEntries.addTable( 0x7F8c, 0x38, 'filler', 38, 3 );
    dasmEntries.addTable( 0x7FFE, 0x38, 'filler', 1, 2 );

}

function getDasmEntries_bnk_39( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x39, 'pageMarker_bnk_39', 1, 1 );
    dasmEntries.addBankLabel( 0x4001, 0x39, 'bnk_39_4001' );
    dasmEntries.addBankLabel( 0x4013, 0x39, 'bnk_39_4013' );
    dasmEntries.addBankLabel( 0x4027, 0x39, 'bnk_39_4027' );
    dasmEntries.addBankLabel( 0x4037, 0x39, 'processStringFormatted' );
    dasmEntries.addBankLabel( 0x402e, 0x39, 'bnk_39_402e' );
    dasmEntries.addBankLabel( 0x4037, 0x39, 'formatPrintfString' );
    dasmEntries.addBankLabel( 0x408d, 0x39, 'bnk_39_408d' );
    dasmEntries.addBankLabel( 0x40B9, 0x39, 'bnk_39_40B9' );
    dasmEntries.addBankLabel( 0x40D2, 0x39, 'bnk_39_40D2' );

    dasmEntries.addBankLabel( 0x4125, 0x39, 'bnk_39_4125' );
    dasmEntries.addBankLabel( 0x4155, 0x39, 'bnk_39_4155' );
    dasmEntries.addBankLabel( 0x4190, 0x39, 'bnk_39_4190' );
    dasmEntries.addBankLabel( 0x4199, 0x39, 'bnk_39_4199' );
    dasmEntries.addBankLabel( 0x41A4, 0x39, 'bnk_39_41A4' );
    dasmEntries.addBankLabel( 0x41E0, 0x39, 'bnk_39_41E0' );
    dasmEntries.addBankLabel( 0x41F2, 0x39, 'bnk_39_41F2' );

    dasmEntries.addBankLabel( 0x4201, 0x39, 'bnk_39_4201' );
    dasmEntries.addBankLabel( 0x42CD, 0x39, 'bnk_39_42CD' );

    dasmEntries.addBankLabel( 0x430C, 0x39, 'bnk_39_430C' );
    dasmEntries.addBankLabel( 0x4323, 0x39, 'bnk_39_4323' );
    dasmEntries.addBankLabel( 0x4398, 0x39, 'bnk_39_4398' );
    dasmEntries.addBankLabel( 0x43A6, 0x39, 'bnk_39_43A6' );
    dasmEntries.addBankLabel( 0x43AF, 0x39, 'bnk_39_43AF' );
    dasmEntries.addBankLabel( 0x43B5, 0x39, 'bnk_39_43B5' );
    dasmEntries.addBankLabel( 0x43BE, 0x39, 'bnk_39_43BE' );
    dasmEntries.addBankLabel( 0x43DB, 0x39, 'bnk_39_43DB' );
    dasmEntries.addBankLabel( 0x43E4, 0x39, 'bnk_39_43E4' );
    dasmEntries.addBankLabel( 0x43F1, 0x39, 'bnk_39_43F1' );

    dasmEntries.addTable( 0x44A2, 0x39, 'tblSixBytes', 18, 6 );

    dasmEntries.addTable( 0x450E, 0x39, 'tblSixBytes-end', 1, 1 );
    dasmEntries.addTable( 0x450f, 0x39, 'tblThreeBytes', 5, 3 );
    dasmEntries.addTable( 0x451E, 0x39, 'tblThreeBytes-end', 1, 1 );
    dasmEntries.addTableWpc( 0x451F, 0x39, 'tblWpcFiveBytes' );
    dasmEntries.addBankLabel( 0x4572, 0x39, 'bnk_39_4572' );
    dasmEntries.addBankLabel( 0x458A, 0x39, 'bnk_39_458A' );

    dasmEntries.addBankLabel( 0x4572, 0x39, 'bnk_39_4572' );
    dasmEntries.addBankLabel( 0x458A, 0x39, 'bnk_39_458A' );
    dasmEntries.addBankLabel( 0x45D7, 0x39, 'bnk_39_45D7' );
    dasmEntries.addBankLabel( 0x45E4, 0x39, 'bnk_39_45E4' );
    dasmEntries.addBankLabel( 0x4635, 0x39, 'bnk_39_4635' );
    dasmEntries.addTable( 0x468E, 0x39, 'tblSevenBytes', 1, 7 );
    dasmEntries.addBankLabel( 0x4695, 0x39, 'bnk_39_4695' );
    dasmEntries.addBankLabel( 0x46A6, 0x39, 'bnk_39_46A6' );
    dasmEntries.addBankLabel( 0x46C9, 0x39, 'bnk_39_46C9' );


    dasmEntries.addBankLabel( 0x4705, 0x39, 'bnk_39_4705' );
    dasmEntries.addBankLabel( 0x4733, 0x39, 'bnk_39_4733' );
    dasmEntries.addTable( 0x47A3, 0x39, 'tblTenBytes', 4, 10 );
    dasmEntries.addBankLabel( 0x473C, 0x39, 'bnk_39_473C' );
    dasmEntries.addBankLabel( 0x4750, 0x39, 'bnk_39_4750' );
    dasmEntries.addBankLabel( 0x475D, 0x39, 'bnk_39_475D' );
    dasmEntries.addBankLabel( 0x4760, 0x39, 'bnk_39_4760' );
    dasmEntries.addBankLabel( 0x47CB, 0x39, 'bnk_39_47CB' );
    dasmEntries.addBankLabel( 0x47D7, 0x39, 'bnk_39_47D7' );
    dasmEntries.addBankLabel( 0x47ED, 0x39, 'bnk_39_47ED' );

    dasmEntries.addTable( 0x48Ab, 0x39, 'tblThirteenBytes', 1, 13 );
    dasmEntries.addTable( 0x48b8, 0x39, 'tblSevenBytes-B', 1, 7 );
    dasmEntries.addBankLabel( 0x4800, 0x39, 'bnk_39_4800' );
    dasmEntries.addBankLabel( 0x483C, 0x39, 'bnk_39_483C' );
    dasmEntries.addBankLabel( 0x484F, 0x39, 'bnk_39_484F' );
    dasmEntries.addBankLabel( 0x4873, 0x39, 'bnk_39_4873' );
    dasmEntries.addBankLabel( 0x4875, 0x39, 'bnk_39_4875' );
    dasmEntries.addBankLabel( 0x487E, 0x39, 'bnk_39_487E' );
    dasmEntries.addBankLabel( 0x4887, 0x39, 'bnk_39_4887' );
    dasmEntries.addBankLabel( 0x4890, 0x39, 'bnk_39_4890' );
    dasmEntries.addBankLabel( 0x4899, 0x39, 'bnk_39_4899' );
    dasmEntries.addBankLabel( 0x48A2, 0x39, 'bnk_39_48A2' );
    dasmEntries.addBankLabel( 0x48BF, 0x39, 'bnk_39_48BF' );
    dasmEntries.addBankLabel( 0x48DB, 0x39, 'bnk_39_48DB' );

    dasmEntries.addTableWpc( 0x49BB, 0x39, 'tblWpcTwelveBytes' );
    dasmEntries.addBankLabel( 0x490A, 0x39, 'bnk_39_490A' );
    dasmEntries.addBankLabel( 0x492B, 0x39, 'bnk_39_492B' );
    dasmEntries.addBankLabel( 0x4942, 0x39, 'bnk_39_4942' );
    dasmEntries.addBankLabel( 0x495D, 0x39, 'bnk_39_495D' );
    dasmEntries.addBankLabel( 0x4980, 0x39, 'bnk_39_4980' );
    dasmEntries.addBankLabel( 0x49A8, 0x39, 'bnk_39_49A8' );
    dasmEntries.addBankLabel( 0x49B1, 0x39, 'bnk_39_49B1' );
    dasmEntries.addBankLabel( 0x492B, 0x39, 'bnk_39_492B' );
    dasmEntries.addBankLabel( 0x4942, 0x39, 'bnk_39_4942' );
    dasmEntries.addBankLabel( 0x495D, 0x39, 'bnk_39_495D' );
    dasmEntries.addBankLabel( 0x4980, 0x39, 'bnk_39_4980' );
    dasmEntries.addBankLabel( 0x49A8, 0x39, 'bnk_39_49A8' );
    dasmEntries.addBankLabel( 0x49B1, 0x39, 'bnk_39_49B1' );

    dasmEntries.addTableWpc( 0x4DDE, 0x39, 'tblWpcOneByte' );

    dasmEntries.addTableWpc( 0x4E36, 0x39, 'tblWpcThreeByte' );

    dasmEntries.addTable( 0x4FEF, 0x39, 'tblOneByte-fromptrs', 0x20D, 1 );
    dasmEntries.addTableWpc( 0x4f8C, 0x39, 'tblWpcTwoByte' );

    dasmEntries.addBankLabel( 0x51FC, 0x39, 'bnk_39_51FC' );

    dasmEntries.addBankLabel( 0x522A, 0x39, 'bnk_39_522A' );
    dasmEntries.addBankLabel( 0x5251, 0x39, 'bnk_39_5251' );
    dasmEntries.addBankLabel( 0x527C, 0x39, 'bnk_39_527C' );
    dasmEntries.addBankLabel( 0x52A1, 0x39, 'bnk_39_52A1' );
    dasmEntries.addBankLabel( 0x52C8, 0x39, 'bnk_39_52C8' );
    dasmEntries.addBankLabel( 0x52D5, 0x39, 'bnk_39_52D5' );
    dasmEntries.addBankLabel( 0x52E2, 0x39, 'bnk_39_52E2' );

    dasmEntries.addBankLabel( 0x530B, 0x39, 'bnk_39_530B' );
    dasmEntries.addBankLabel( 0x5334, 0x39, 'bnk_39_5334' );
    dasmEntries.addBankLabel( 0x533D, 0x39, 'bnk_39_533D' );
    dasmEntries.addBankLabel( 0x5346, 0x39, 'bnk_39_5346' );
    dasmEntries.addBankLabel( 0x5380, 0x39, 'bnk_39_5380' );
    dasmEntries.addBankLabel( 0x5393, 0x39, 'bnk_39_5393' );
    dasmEntries.addBankLabel( 0x53A5, 0x39, 'bnk_39_53A5' );
    dasmEntries.addBankLabel( 0x53C9, 0x39, 'bnk_39_53C9' );
    dasmEntries.addBankLabel( 0x53DA, 0x39, 'bnk_39_53DA' );

    dasmEntries.addBankLabel( 0x5414, 0x39, 'bnk_39_5414' );
    dasmEntries.addBankLabel( 0x5486, 0x39, 'bnk_39_5486' );
    dasmEntries.addBankLabel( 0x5495, 0x39, 'bnk_39_5495' );
    dasmEntries.addBankLabel( 0x54AE, 0x39, 'bnk_39_54AE' );
    dasmEntries.addBankLabel( 0x54C0, 0x39, 'bnk_39_54C0' );
    dasmEntries.addBankLabel( 0x54C8, 0x39, 'bnk_39_54C8' );
    dasmEntries.addBankLabel( 0x54D0, 0x39, 'bnk_39_54D0' );
    dasmEntries.addBankLabel( 0x54E0, 0x39, 'bnk_39_54E0' );
    dasmEntries.addBankLabel( 0x54EC, 0x39, 'bnk_39_54EC' );

    dasmEntries.addBankLabel( 0x5500, 0x39, 'bnk_39_5500' );
    dasmEntries.addBankLabel( 0x552A, 0x39, 'bnk_39_552A' );
    dasmEntries.addBankLabel( 0x552D, 0x39, 'bnk_39_552D' );
    dasmEntries.addBankLabel( 0x5564, 0x39, 'bnk_39_5564' );
    dasmEntries.addBankLabel( 0x5576, 0x39, 'bnk_39_5576' );
    dasmEntries.addBankLabel( 0x5585, 0x39, 'bnk_39_5585' );
    dasmEntries.addBankLabel( 0x55AF, 0x39, 'bnk_39_55AF' );
    dasmEntries.addBankLabel( 0x55B2, 0x39, 'bnk_39_55B2' );

    dasmEntries.addBankLabel( 0x5657, 0x39, 'bnk_39_5657' );
    dasmEntries.addBankLabel( 0x5665, 0x39, 'bnk_39_5665' );
    dasmEntries.addBankLabel( 0x5695, 0x39, 'bnk_39_5695' );
    dasmEntries.addBankLabel( 0x56AC, 0x39, 'bnk_39_56AC' );
    dasmEntries.addBankLabel( 0x56D0, 0x39, 'bnk_39_56D0' );
    dasmEntries.addBankLabel( 0x56EF, 0x39, 'bnk_39_56EF' );
    dasmEntries.addBankLabel( 0x56FA, 0x39, 'bnk_39_56FA' );

    dasmEntries.addBankLabel( 0x5709, 0x39, 'bnk_39_5709' );
    dasmEntries.addBankLabel( 0x5725, 0x39, 'bnk_39_5725' );
    dasmEntries.addBankLabel( 0x5730, 0x39, 'bnk_39_5730' );
    dasmEntries.addBankLabel( 0x574C, 0x39, 'bnk_39_574C' );
    dasmEntries.addBankLabel( 0x57C0, 0x39, 'bnk_39_57C0' );
    dasmEntries.addBankLabel( 0x57DA, 0x39, 'bnk_39_57DA' );
    dasmEntries.addBankLabel( 0x57FA, 0x39, 'bnk_39_57FA' );

    dasmEntries.addBankLabel( 0x5820, 0x39, 'bnk_39_5820' );
    dasmEntries.addBankLabel( 0x5846, 0x39, 'bnk_39_5846' );
    dasmEntries.addBankLabel( 0x5862, 0x39, 'bnk_39_5862' );
    dasmEntries.addBankLabel( 0x588E, 0x39, 'bnk_39_588E' );
    dasmEntries.addBankLabel( 0x58BA, 0x39, 'bnk_39_58BA' );
    dasmEntries.addBankLabel( 0x58C5, 0x39, 'bnk_39_58C5' );
    dasmEntries.addBankLabel( 0x58F5, 0x39, 'bnk_39_58F5' );

    dasmEntries.addBankLabel( 0x590A, 0x39, 'bnk_39_590A' );
    dasmEntries.addBankLabel( 0x5938, 0x39, 'bnk_39_5938' );
    dasmEntries.addBankLabel( 0x595D, 0x39, 'bnk_39_595D' );
    dasmEntries.addBankLabel( 0x598F, 0x39, 'bnk_39_598F' );

    dasmEntries.addBankLabel( 0x5A03, 0x39, 'bnk_39_5A03' );
    dasmEntries.addBankLabel( 0x5A4C, 0x39, 'bnk_39_5A4C' );
    dasmEntries.addBankLabel( 0x5A65, 0x39, 'bnk_39_5A65' );
    dasmEntries.addBankLabel( 0x5AFA, 0x39, 'bnk_39_5AFA' );
    dasmEntries.addTable( 0x5a1a, 0x39, 'tblOneByte-A', 10, 5 );

    dasmEntries.addBankLabel( 0x5B1A, 0x39, 'bnk_39_5B1A' );
    dasmEntries.addBankLabel( 0x5B40, 0x39, 'bnk_39_5B40' );
    dasmEntries.addBankLabel( 0x5B4C, 0x39, 'bnk_39_5B4C' );
    dasmEntries.addBankLabel( 0x5B56, 0x39, 'bnk_39_5B56' );
    dasmEntries.addBankLabel( 0x5B96, 0x39, 'bnk_39_5B96' );
    dasmEntries.addBankLabel( 0x5BB0, 0x39, 'bnk_39_5BB0' );
    dasmEntries.addBankLabel( 0x5BB1, 0x39, 'bnk_39_5BB1' );
    dasmEntries.addBankLabel( 0x5BCC, 0x39, 'bnk_39_5BCC' );
    dasmEntries.addBankLabel( 0x5BD0, 0x39, 'bnk_39_5BD0' );
    dasmEntries.addBankLabel( 0x5BD4, 0x39, 'bnk_39_5BD4' );

    dasmEntries.addBankLabel( 0x5C1A, 0x39, 'bnk_39_5C1A' );
    dasmEntries.addBankLabel( 0x5C21, 0x39, 'bnk_39_5C21' );
    dasmEntries.addBankLabel( 0x5C28, 0x39, 'bnk_39_5C28' );
    dasmEntries.addBankLabel( 0x5C40, 0x39, 'bnk_39_5C40' );
    dasmEntries.addBankLabel( 0x5C4E, 0x39, 'bnk_39_5C4E' );
    dasmEntries.addBankLabel( 0x5C93, 0x39, 'bnk_39_5C93' );
    dasmEntries.addBankLabel( 0x5CA6, 0x39, 'bnk_39_5CA6' );
    dasmEntries.addBankLabel( 0x5CB0, 0x39, 'bnk_39_5CB0' );
    dasmEntries.addBankLabel( 0x5CB6, 0x39, 'bnk_39_5CB6' );

    dasmEntries.addBankLabel( 0x5d2a, 0x39, 'PrinterReset' );
    dasmEntries.addBankLabel( 0x5d5c, 0x39, 'SerialReset' );
    dasmEntries.addBankLabel( 0x5DA2, 0x39, 'bnk_39_5DA2' );
    dasmEntries.addBankLabel( 0x5DB2, 0x39, 'bnk_39_5DB2' );
    dasmEntries.addBankLabel( 0x5DC8, 0x39, 'bnk_39_5DC8' );
    dasmEntries.addBankLabel( 0x5DD7, 0x39, 'bnk_39_5DD7' );
    dasmEntries.addBankLabel( 0x5DE1, 0x39, 'bnk_39_5DE1' );

    dasmEntries.addTable( 0x5E04, 0x39, 'tbl_WPC_Baudrates_A', 1, 6 );
    dasmEntries.addTable( 0x5E0A, 0x39, 'tbl_WPC_Baudrates_B', 6, 2 );
    dasmEntries.addBankLabel( 0x5E16, 0x39, 'bnk_39_5E16' );
    dasmEntries.addBankLabel( 0x5E3F, 0x39, 'bnk_39_5E3F' );
    dasmEntries.addBankLabel( 0x5E51, 0x39, 'bnk_39_5E51' );
    dasmEntries.addBankLabel( 0x5E62, 0x39, 'bnk_39_5E62' );
    dasmEntries.addBankLabel( 0x5EA7, 0x39, 'bnk_39_5EA7' );
    dasmEntries.addBankLabel( 0x5EC9, 0x39, 'bnk_39_5EC9' );

    dasmEntries.addBankLabel( 0x5F14, 0x39, 'bnk_39_5F14' );
    dasmEntries.addBankLabel( 0x5F29, 0x39, 'bnk_39_5F29' );
    dasmEntries.addBankLabel( 0x5F38, 0x39, 'bnk_39_5F38' );
    dasmEntries.addBankLabel( 0x5F43, 0x39, 'bnk_39_5F43' );
    dasmEntries.addBankLabel( 0x5F50, 0x39, 'bnk_39_5F50' );
    dasmEntries.addBankLabel( 0x5F6C, 0x39, 'bnk_39_5F6C' );
    dasmEntries.addBankLabel( 0x5F7B, 0x39, 'bnk_39_5F7B' );
    dasmEntries.addBankLabel( 0x5F88, 0x39, 'bnk_39_5F88' );
    dasmEntries.addBankLabel( 0x5F97, 0x39, 'bnk_39_5F97' );
    dasmEntries.addBankLabel( 0x5FA0, 0x39, 'bnk_39_5FA0' );
    dasmEntries.addBankLabel( 0x5FB2, 0x39, 'bnk_39_5FB2' );

    dasmEntries.addBankLabel( 0x6053, 0x39, 'bnk_39_6053' );
    dasmEntries.addBankLabel( 0x6070, 0x39, 'bnk_39_6070' );
    dasmEntries.addBankLabel( 0x60B7, 0x39, 'bnk_39_60B7' );
    dasmEntries.addBankLabel( 0x60D0, 0x39, 'bnk_39_60D0' );

    dasmEntries.addBankLabel( 0x6128, 0x39, 'bnk_39_6128' );
    dasmEntries.addBankLabel( 0x61D4, 0x39, 'bnk_39_61D4' );
    dasmEntries.addBankLabel( 0x61E6, 0x39, 'bnk_39_61E6' );
    dasmEntries.addBankLabel( 0x61F6, 0x39, 'bnk_39_61F6' );
    dasmEntries.addBankLabel( 0x6268, 0x39, 'bnk_39_6268' );
    dasmEntries.addBankLabel( 0x62A3, 0x39, 'bnk_39_62A3' );
    dasmEntries.addBankLabel( 0x62CF, 0x39, 'bnk_39_62CF' );
    dasmEntries.addBankLabel( 0x62E1, 0x39, 'bnk_39_62E1' );
    dasmEntries.addBankLabel( 0x6321, 0x39, 'bnk_39_6321' );
    dasmEntries.addBankLabel( 0x633F, 0x39, 'bnk_39_633F' );
    dasmEntries.addBankLabel( 0x635C, 0x39, 'bnk_39_635C' );
    dasmEntries.addBankLabel( 0x636C, 0x39, 'bnk_39_636C' );
    dasmEntries.addBankLabel( 0x637C, 0x39, 'bnk_39_637C' );
    dasmEntries.addBankLabel( 0x6391, 0x39, 'bnk_39_6391' );
    dasmEntries.addBankLabel( 0x6399, 0x39, 'bnk_39_6399' );
    dasmEntries.addBankLabel( 0x63AE, 0x39, 'bnk_39_63AE' );
    dasmEntries.addBankLabel( 0x63BE, 0x39, 'bnk_39_63BE' );
    dasmEntries.addBankLabel( 0x63D4, 0x39, 'bnk_39_63D4' );
    dasmEntries.addBankLabel( 0x63DC, 0x39, 'bnk_39_63DC' );
    dasmEntries.addBankLabel( 0x63EB, 0x39, 'bnk_39_63EB' );
    dasmEntries.addBankLabel( 0x6415, 0x39, 'bnk_39_6415' );
    dasmEntries.addBankLabel( 0x6421, 0x39, 'bnk_39_6421' );
    dasmEntries.addBankLabel( 0x642A, 0x39, 'bnk_39_642A' );
    dasmEntries.addBankLabel( 0x6433, 0x39, 'bnk_39_6433' );
    dasmEntries.addBankLabel( 0x6440, 0x39, 'bnk_39_6440' );
    dasmEntries.addBankLabel( 0x6445, 0x39, 'bnk_39_6445' );
    dasmEntries.addBankLabel( 0x6464, 0x39, 'bnk_39_6464' );
    dasmEntries.addBankLabel( 0x646D, 0x39, 'bnk_39_646D' );
    dasmEntries.addBankLabel( 0x649C, 0x39, 'bnk_39_649C' );
    dasmEntries.addBankLabel( 0x64B1, 0x39, 'bnk_39_64B1' );
    dasmEntries.addBankLabel( 0x64BE, 0x39, 'bnk_39_64BE' );
    dasmEntries.addBankLabel( 0x64C4, 0x39, 'bnk_39_64C4' );
    dasmEntries.addBankLabel( 0x64E0, 0x39, 'bnk_39_64E0' );
    dasmEntries.addBankLabel( 0x64F8, 0x39, 'bnk_39_64F8' );
    dasmEntries.addBankLabel( 0x6514, 0x39, 'bnk_39_6514' );
    dasmEntries.addBankLabel( 0x65BC, 0x39, 'bnk_39_65BC' );
    dasmEntries.addBankLabel( 0x65C4, 0x39, 'bnk_39_65C4' );
    dasmEntries.addBankLabel( 0x65D4, 0x39, 'bnk_39_65D4' );
    dasmEntries.addBankLabel( 0x65E9, 0x39, 'bnk_39_65E9' );
    dasmEntries.addBankLabel( 0x65F0, 0x39, 'bnk_39_65F0' );

    dasmEntries.addBankLabel( 0x6602, 0x39, 'debugProcessInput' );
    dasmEntries.addTable( 0x668f, 0x39, 'tblTwoBytes-NEW', 3, 2 );
    dasmEntries.addBankLabel( 0x6656, 0x39, 'bnk_39_6656' );
    dasmEntries.addBankLabel( 0x6695, 0x39, 'bnk_39_6695' );
    dasmEntries.addBankLabel( 0x66CA, 0x39, 'bnk_39_66CA' );
    dasmEntries.addBankLabel( 0x66E0, 0x39, 'bnk_39_66E0' );

    dasmEntries.addBankLabel( 0x6716, 0x39, 'bnk_39_6716' );
    dasmEntries.addBankLabel( 0x672B, 0x39, 'bnk_39_672B' );
    dasmEntries.addBankLabel( 0x673E, 0x39, 'bnk_39_673E' );
    dasmEntries.addBankLabel( 0x6772, 0x39, 'bnk_39_6772' );
    dasmEntries.addBankLabel( 0x6787, 0x39, 'bnk_39_6787' );
    dasmEntries.addBankLabel( 0x6798, 0x39, 'bnk_39_6798' );
    dasmEntries.addBankLabel( 0x679A, 0x39, 'bnk_39_679A' );
    dasmEntries.addBankLabel( 0x67D9, 0x39, 'bnk_39_67D9' );
    dasmEntries.addBankLabel( 0x67E4, 0x39, 'bnk_39_67E4' );

    dasmEntries.addTable( 0x688A, 0x39, 'tblTwoBytes-NEW', 4, 2 );
    dasmEntries.addBankLabel( 0x68ad, 0x39, 'ResetSerialRingBufferHeadAndTail' );
    dasmEntries.addBankLabel( 0x68ba, 0x39, 'ReadCharacterFromSerialRingBufferTail' );
    dasmEntries.addBankLabel( 0x68dc, 0x39, 'readSerialBufferCharacter_into_A' );
    dasmEntries.addBankLabel( 0x6802, 0x39, 'bnk_39_6802' );
    dasmEntries.addBankLabel( 0x6807, 0x39, 'bnk_39_6807' );
    dasmEntries.addBankLabel( 0x680E, 0x39, 'bnk_39_680E' );
    dasmEntries.addBankLabel( 0x6892, 0x39, 'bnk_39_6892' );
    dasmEntries.addBankLabel( 0x68FC, 0x39, 'bnk_39_68FC' );
    dasmEntries.addBankLabel( 0x68FF, 0x39, 'bnk_39_68FF' );
    dasmEntries.addBankLabel( 0x6908, 0x39, 'bnk_39_6908' );
    dasmEntries.addBankLabel( 0x690F, 0x39, 'bnk_39_690F' );
    dasmEntries.addBankLabel( 0x6928, 0x39, 'bnk_39_6928' );
    dasmEntries.addBankLabel( 0x6950, 0x39, 'bnk_39_6950' );
    dasmEntries.addBankLabel( 0x69A8, 0x39, 'bnk_39_69A8' );

    dasmEntries.addBankLabel( 0x6A11, 0x39, 'bnk_39_6A11' );
    dasmEntries.addBankLabel( 0x6A13, 0x39, 'bnk_39_6A13' );
    dasmEntries.addBankLabel( 0x6A4F, 0x39, 'bnk_39_6A4F' );
    dasmEntries.addBankLabel( 0x6A5D, 0x39, 'bnk_39_6A5D' );
    dasmEntries.addBankLabel( 0x6A9E, 0x39, 'bnk_39_6A9E' );
    dasmEntries.addBankLabel( 0x6ABC, 0x39, 'bnk_39_6ABC' );
    dasmEntries.addBankLabel( 0x6AC5, 0x39, 'bnk_39_6AC5' );
    dasmEntries.addBankLabel( 0x6AF3, 0x39, 'bnk_39_6AF3' );
    dasmEntries.addTableWpc( 0x6A80, 0x39, 'tblBankAddresses');

    dasmEntries.addBankLabel( 0x6B21, 0x39, 'bnk_39_6B21' );
    dasmEntries.addBankLabel( 0x6B44, 0x39, 'bnk_39_6B44' );
    dasmEntries.addBankLabel( 0x6B62, 0x39, 'bnk_39_6B62' );
    dasmEntries.addBankLabel( 0x6B8D, 0x39, 'bnk_39_6B8D' );
    dasmEntries.addBankLabel( 0x6BCE, 0x39, 'bnk_39_6BCE' );

    dasmEntries.addBankLabel( 0x6C5C, 0x39, 'bnk_39_6C5C' );
    dasmEntries.addBankLabel( 0x6CBA, 0x39, 'bnk_39_6CBA' );
    dasmEntries.addBankLabel( 0x6CD2, 0x39, 'bnk_39_6CD2' );
    dasmEntries.addBankLabel( 0x6CF3, 0x39, 'bnk_39_6CF3' );
    dasmEntries.addBankLabel( 0x6D5C, 0x39, 'bnk_39_6D5C' );
    dasmEntries.addBankLabel( 0x6DB2, 0x39, 'bnk_39_6DB2' );
    dasmEntries.addBankLabel( 0x6DC5, 0x39, 'bnk_39_6DC5' );
    dasmEntries.addBankLabel( 0x6DF4, 0x39, 'bnk_39_6DF4' );
    dasmEntries.addBankLabel( 0x6E40, 0x39, 'bnk_39_6E40' );
    dasmEntries.addBankLabel( 0x6E49, 0x39, 'bnk_39_6E49' );
    dasmEntries.addBankLabel( 0x6E51, 0x39, 'bnk_39_6E51' );
    dasmEntries.addBankLabel( 0x6EB8, 0x39, 'bnk_39_6EB8' );
    dasmEntries.addBankLabel( 0x6EE2, 0x39, 'bnk_39_6EE2' );
    dasmEntries.addBankLabel( 0x6EEC, 0x39, 'bnk_39_6EEC' );
    dasmEntries.addBankLabel( 0x6EFB, 0x39, 'bnk_39_6EFB' );
    dasmEntries.addBankLabel( 0x6F1A, 0x39, 'bnk_39_6F1A' );
    dasmEntries.addBankLabel( 0x6F40, 0x39, 'bnk_39_6F40' );
    dasmEntries.addBankLabel( 0x6F48, 0x39, 'bnk_39_6F48' );
    dasmEntries.addBankLabel( 0x6F50, 0x39, 'bnk_39_6F50' );
    dasmEntries.addBankLabel( 0x6F71, 0x39, 'bnk_39_6F71' );
    dasmEntries.addBankLabel( 0x6F9E, 0x39, 'bnk_39_6F9E' );
    dasmEntries.addBankLabel( 0x6FE6, 0x39, 'bnk_39_6FE6' );

    dasmEntries.addTable( 0x6ddc, 0x39, 'tblBankAddresses-NEW', 8, 3 );
    dasmEntries.addTable( 0x6f2c, 0x39, 'tblStringFormats', 10, 2 );


    dasmEntries.addBankLabel( 0x706E, 0x39, 'bnk_39_706E' );
    dasmEntries.addBankLabel( 0x7071, 0x39, 'bnk_39_7071' );
    dasmEntries.addBankLabel( 0x7090, 0x39, 'bnk_39_7090' );
    dasmEntries.addBankLabel( 0x70B3, 0x39, 'bnk_39_70B3' );
    dasmEntries.addBankLabel( 0x70BA, 0x39, 'bnk_39_70BA' );
    dasmEntries.addTable( 0x70E3, 0x39, 'tblFourBytes', 15, 4 );

    dasmEntries.addBankLabel( 0x711F, 0x39, 'bnk_39_711F' );
    dasmEntries.addBankLabel( 0x713E, 0x39, 'bnk_39_713E' );
    dasmEntries.addBankLabel( 0x7157, 0x39, 'bnk_39_7157' );
    dasmEntries.addBankLabel( 0x716D, 0x39, 'bnk_39_716D' );
    dasmEntries.addBankLabel( 0x719C, 0x39, 'bnk_39_719C' );
    dasmEntries.addBankLabel( 0x71A7, 0x39, 'bnk_39_71A7' );
    dasmEntries.addBankLabel( 0x71C0, 0x39, 'bnk_39_71C0' );
    dasmEntries.addBankLabel( 0x71DA, 0x39, 'bnk_39_71DA' );

    dasmEntries.addBankLabel( 0x722D, 0x39, 'bnk_39_722D' );
    dasmEntries.addBankLabel( 0x727B, 0x39, 'bnk_39_727B' );
    dasmEntries.addBankLabel( 0x72A2, 0x39, 'bnk_39_72A2' );
    dasmEntries.addBankLabel( 0x72E6, 0x39, 'bnk_39_72E6' );

    dasmEntries.addBankLabel( 0x7309, 0x39, 'bnk_39_7309' );
    dasmEntries.addTable( 0x732C, 0x39, 'tblTwoBytes-Ladder', 16, 2 );
    dasmEntries.addBankLabel( 0x734C, 0x39, 'bnk_39_734C' );
    dasmEntries.addBankLabel( 0x736C, 0x39, 'bnk_39_736C' );
    dasmEntries.addBankLabel( 0x737E, 0x39, 'bnk_39_737E' );
    dasmEntries.addBankLabel( 0x73C3, 0x39, 'bnk_39_73C3' );
    dasmEntries.addBankLabel( 0x73D1, 0x39, 'bnk_39_73D1' );

    dasmEntries.addBankLabel( 0x740A, 0x39, 'bnk_39_740A' );
    dasmEntries.addBankLabel( 0x7414, 0x39, 'bnk_39_7414' );
    dasmEntries.addBankLabel( 0x742D, 0x39, 'bnk_39_742D' );
    dasmEntries.addBankLabel( 0x7449, 0x39, 'bnk_39_7449' );
    dasmEntries.addBankLabel( 0x7461, 0x39, 'bnk_39_7461' );
    dasmEntries.addBankLabel( 0x74E6, 0x39, 'bnk_39_74E6' );
    dasmEntries.addBankLabel( 0x74F5, 0x39, 'bnk_39_74F5' );

    dasmEntries.addBankLabel( 0x750B, 0x39, 'bnk_39_750B' );
    dasmEntries.addBankLabel( 0x752F, 0x39, 'bnk_39_752F' );
    dasmEntries.addBankLabel( 0x7547, 0x39, 'bnk_39_7547' );
    dasmEntries.addBankLabel( 0x7555, 0x39, 'bnk_39_7555' );
    dasmEntries.addBankLabel( 0x7586, 0x39, 'bnk_39_7586' );
    dasmEntries.addBankLabel( 0x7592, 0x39, 'bnk_39_7592' );

    dasmEntries.addBankLabel( 0x7651, 0x39, 'bnk_39_7651' );
    dasmEntries.addBankLabel( 0x7662, 0x39, 'bnk_39_7662' );
    dasmEntries.addBankLabel( 0x76AE, 0x39, 'bnk_39_76AE' );
    dasmEntries.addBankLabel( 0x76F9, 0x39, 'bnk_39_76F9' );

    dasmEntries.addBankLabel( 0x771F, 0x39, 'bnk_39_771F' );
    dasmEntries.addBankLabel( 0x7751, 0x39, 'bnk_39_7751' );
    dasmEntries.addBankLabel( 0x7772, 0x39, 'bnk_39_7772' );
    dasmEntries.addBankLabel( 0x7785, 0x39, 'bnk_39_7785' );
    dasmEntries.addBankLabel( 0x7798, 0x39, 'bnk_39_7798' );
    dasmEntries.addBankLabel( 0x77A2, 0x39, 'bnk_39_77A2' );
    dasmEntries.addBankLabel( 0x77AF, 0x39, 'bnk_39_77AF' );
    dasmEntries.addBankLabel( 0x77CA, 0x39, 'bnk_39_77CA' );

    dasmEntries.addBankLabel( 0x7815, 0x39, 'bnk_39_7815' );
    dasmEntries.addBankLabel( 0x7817, 0x39, 'bnk_39_7817' );
    dasmEntries.addBankLabel( 0x7829, 0x39, 'bnk_39_7829' );
    dasmEntries.addBankLabel( 0x784B, 0x39, 'bnk_39_784B' );
    dasmEntries.addBankLabel( 0x78C6, 0x39, 'bnk_39_78C6' );
    dasmEntries.addBankLabel( 0x78CC, 0x39, 'bnk_39_78CC' );

    dasmEntries.addBankLabel( 0x7915, 0x39, 'bnk_39_7915' );
    dasmEntries.addBankLabel( 0x794E, 0x39, 'bnk_39_794E' );
    dasmEntries.addBankLabel( 0x7992, 0x39, 'bnk_39_7992' );
    dasmEntries.addBankLabel( 0x799E, 0x39, 'bnk_39_799E' );
    dasmEntries.addBankLabel( 0x79B6, 0x39, 'bnk_39_79B6' );
    dasmEntries.addBankLabel( 0x79CA, 0x39, 'bnk_39_79CA' );
    dasmEntries.addBankLabel( 0x79DE, 0x39, 'bnk_39_79DE' );
    dasmEntries.addBankLabel( 0x79FC, 0x39, 'bnk_39_79FC' );

    dasmEntries.addBankLabel( 0x7A07, 0x39, 'bnk_39_7A07' );
    dasmEntries.addBankLabel( 0x7A77, 0x39, 'bnk_39_7A77' );
    dasmEntries.addBankLabel( 0x7A9F, 0x39, 'bnk_39_7A9F' );
    dasmEntries.addBankLabel( 0x7AB5, 0x39, 'bnk_39_7AB5' );
    dasmEntries.addBankLabel( 0x7ABC, 0x39, 'bnk_39_7ABC' );
    dasmEntries.addBankLabel( 0x7AC3, 0x39, 'bnk_39_7AC3' );
    dasmEntries.addTable( 0x7ACF, 0x39, 'tblTwoBytes-Newer', 42, 2 );

    dasmEntries.addBankLabel( 0x7B23, 0x39, 'bnk_39_7B23' );
    dasmEntries.addBankLabel( 0x7B3B, 0x39, 'bnk_39_7B3B' );
    dasmEntries.addBankLabel( 0x7B53, 0x39, 'bnk_39_7B53' );
    dasmEntries.addBankLabel( 0x7B68, 0x39, 'bnk_39_7B68' );
    dasmEntries.addBankLabel( 0x7B72, 0x39, 'bnk_39_7B72' );
    dasmEntries.addBankLabel( 0x7C2F, 0x39, 'bnk_39_7C2F' );
    dasmEntries.addBankLabel( 0x7C48, 0x39, 'bnk_39_7C48' );

    dasmEntries.addTable( 0x7D30, 0x39, 'tblTwoBytes-Again', 97, 2 );
    dasmEntries.addTable( 0x7DF2, 0x39, 'filler', 65, 8 );

    dasmEntries.addTable( 0x7FFA, 0x39, 'filler', 1, 6 );

}

function getDasmEntries_bnk_3a( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x3a, 'pageMarker_bnk_3a', 1, 1 );
    dasmEntries.addBankLabel( 0x4001, 0x3a )
    dasmEntries.addBankLabel( 0x400d, 0x3a )
    dasmEntries.addBankLabel( 0x4018, 0x3a )
    dasmEntries.addBankLabel( 0x403d, 0x3a )
    dasmEntries.addBankLabel( 0x4070, 0x3a )
    dasmEntries.addBankLabel( 0x409c, 0x3a )
    dasmEntries.addBankLabel( 0x40a3, 0x3a )
    dasmEntries.addBankLabel( 0x40aa, 0x3a )
    dasmEntries.addBankLabel( 0x40b2, 0x3a )
    dasmEntries.addBankLabel( 0x40c8, 0x3a )

    dasmEntries.addBankLabel( 0x4109, 0x3a )
    dasmEntries.addBankLabel( 0x4112, 0x3a )
    dasmEntries.addBankLabel( 0x4147, 0x3a )
    dasmEntries.addBankLabel( 0x415a, 0x3a )
    dasmEntries.addBankLabel( 0x416e, 0x3a )
    dasmEntries.addBankLabel( 0x4178, 0x3a )
    dasmEntries.addBankLabel( 0x41d9, 0x3a )

    dasmEntries.addBankLabel( 0x422e, 0x3a )
    dasmEntries.addBankLabel( 0x423f, 0x3a )
    dasmEntries.addBankLabel( 0x424b, 0x3a )
    dasmEntries.addBankLabel( 0x4252, 0x3a )
    dasmEntries.addBankLabel( 0x4257, 0x3a )
    dasmEntries.addBankLabel( 0x426b, 0x3a )
    dasmEntries.addBankLabel( 0x42ae, 0x3a )
    dasmEntries.addBankLabel( 0x42e4, 0x3a )

    dasmEntries.addBankLabel( 0x4338, 0x3a )
    dasmEntries.addBankLabel( 0x439f, 0x3a )
    dasmEntries.addBankLabel( 0x43b1, 0x3a )
    dasmEntries.addBankLabel( 0x43d6, 0x3a )

    dasmEntries.addBankLabel( 0x4423, 0x3a )
    dasmEntries.addBankLabel( 0x4430, 0x3a )
    dasmEntries.addBankLabel( 0x4432, 0x3a )
    dasmEntries.addBankLabel( 0x443c, 0x3a )
    dasmEntries.addBankLabel( 0x446c, 0x3a )
    dasmEntries.addBankLabel( 0x4485, 0x3a )
    dasmEntries.addBankLabel( 0x44e3, 0x3a )

    dasmEntries.addBankLabel( 0x4508, 0x3a )
    dasmEntries.addBankLabel( 0x452e, 0x3a )
    dasmEntries.addBankLabel( 0x453f, 0x3a )
    dasmEntries.addBankLabel( 0x4553, 0x3a )
    dasmEntries.addBankLabel( 0x4562, 0x3a )
    dasmEntries.addBankLabel( 0x456e, 0x3a )
    dasmEntries.addBankLabel( 0x4576, 0x3a )
    dasmEntries.addBankLabel( 0x4580, 0x3a )
    dasmEntries.addBankLabel( 0x4588, 0x3a )
    dasmEntries.addTable( 0x45b2, 0x3a, 'tbl5times7', 5, 7 );
    dasmEntries.addBankLabel( 0x45d5, 0x3a )

    dasmEntries.addBankLabel( 0x4620, 0x3a )
    dasmEntries.addBankLabel( 0x4629, 0x3a )
    dasmEntries.addBankLabel( 0x4632, 0x3a )
    dasmEntries.addBankLabel( 0x463d, 0x3a )
    dasmEntries.addBankLabel( 0x4646, 0x3a )
    dasmEntries.addBankLabel( 0x4651, 0x3a )
    dasmEntries.addBankLabel( 0x465a, 0x3a )
    dasmEntries.addBankLabel( 0x4665, 0x3a )
    dasmEntries.addBankLabel( 0x466e, 0x3a )
    dasmEntries.addBankLabel( 0x4679, 0x3a )
    dasmEntries.addBankLabel( 0x46b1, 0x3a )
    dasmEntries.addBankLabel( 0x46ca, 0x3a )
    dasmEntries.addBankLabel( 0x46e0, 0x3a )
    dasmEntries.addBankLabel( 0x46f6, 0x3a )

    dasmEntries.addBankLabel( 0x470c, 0x3a )
    dasmEntries.addBankLabel( 0x4720, 0x3a )
    dasmEntries.addBankLabel( 0x473c, 0x3a )
    dasmEntries.addBankLabel( 0x47d7, 0x3a )
    dasmEntries.addBankLabel( 0x47e7, 0x3a )

    dasmEntries.addBankLabel( 0x4824, 0x3a )
    dasmEntries.addBankLabel( 0x4848, 0x3a )
    dasmEntries.addBankLabel( 0x4859, 0x3a )
    dasmEntries.addBankLabel( 0x4865, 0x3a )
    dasmEntries.addBankLabel( 0x486c, 0x3a )
    dasmEntries.addBankLabel( 0x48ae, 0x3a )
    dasmEntries.addBankLabel( 0x48c3, 0x3a )
    dasmEntries.addBankLabel( 0x48cc, 0x3a )
    dasmEntries.addBankLabel( 0x48d8, 0x3a )
    dasmEntries.addBankLabel( 0x492c, 0x3a )
    dasmEntries.addBankLabel( 0x4941, 0x3a )
    dasmEntries.addBankLabel( 0x498e, 0x3a )
    dasmEntries.addBankLabel( 0x49be, 0x3a )

    dasmEntries.addBankLabel( 0x4a05, 0x3a )
    dasmEntries.addBankLabel( 0x4a1b, 0x3a )
    dasmEntries.addBankLabel( 0x4a33, 0x3a )
    dasmEntries.addBankLabel( 0x4a3f, 0x3a )
    dasmEntries.addBankLabel( 0x4a62, 0x3a )
    dasmEntries.addBankLabel( 0x4a71, 0x3a )
    dasmEntries.addBankLabel( 0x4a80, 0x3a )
    dasmEntries.addBankLabel( 0x4a8a, 0x3a )
    dasmEntries.addBankLabel( 0x4aac, 0x3a )
    dasmEntries.addBankLabel( 0x4ad7, 0x3a )
    dasmEntries.addBankLabel( 0x4ae9, 0x3a )
    dasmEntries.addBankLabel( 0x4af8, 0x3a )

    dasmEntries.addBankLabel( 0x4b1d, 0x3a )
    dasmEntries.addBankLabel( 0x4b24, 0x3a )
    dasmEntries.addBankLabel( 0x4b30, 0x3a )
    dasmEntries.addBankLabel( 0x4b36, 0x3a )
    dasmEntries.addBankLabel( 0x4b48, 0x3a )
    dasmEntries.addBankLabel( 0x4b66, 0x3a )
    dasmEntries.addBankLabel( 0x4b6f, 0x3a )
    dasmEntries.addBankLabel( 0x4b98, 0x3a )
    dasmEntries.addBankLabel( 0x4ba1, 0x3a )
    dasmEntries.addBankLabel( 0x4bd8, 0x3a )
    dasmEntries.addBankLabel( 0x4be0, 0x3a )
    dasmEntries.addBankLabel( 0x4be8, 0x3a )

    dasmEntries.addBankLabel( 0x4c34, 0x3a )
    dasmEntries.addBankLabel( 0x4c51, 0x3a )
    dasmEntries.addBankLabel( 0x4c95, 0x3a )
    dasmEntries.addBankLabel( 0x4cab, 0x3a )
    dasmEntries.addBankLabel( 0x4cb2, 0x3a )
    dasmEntries.addBankLabel( 0x4cbb, 0x3a )
    dasmEntries.addBankLabel( 0x4cc4, 0x3a )
    dasmEntries.addBankLabel( 0x4cdb, 0x3a )
    dasmEntries.addBankLabel( 0x4d09, 0x3a )
    dasmEntries.addBankLabel( 0x4d0d, 0x3a )
    dasmEntries.addBankLabel( 0x4d2d, 0x3a )
    dasmEntries.addBankLabel( 0x4d3b, 0x3a )
    dasmEntries.addBankLabel( 0x4d52, 0x3a )
    dasmEntries.addBankLabel( 0x4d82, 0x3a )
    dasmEntries.addBankLabel( 0x4d9c, 0x3a )
    dasmEntries.addBankLabel( 0x4dae, 0x3a )
    dasmEntries.addBankLabel( 0x4dd2, 0x3a )
    dasmEntries.addBankLabel( 0x4ddf, 0x3a )
    dasmEntries.addBankLabel( 0x4df9, 0x3a )

    dasmEntries.addBankLabel( 0x4e06, 0x3a )
    dasmEntries.addBankLabel( 0x4e25, 0x3a )
    dasmEntries.addBankLabel( 0x4e30, 0x3a )
    dasmEntries.addBankLabel( 0x4e38, 0x3a )
    dasmEntries.addBankLabel( 0x4e48, 0x3a )
    dasmEntries.addBankLabel( 0x4e63, 0x3a )
    dasmEntries.addBankMacro( 0x4e73, 0x3a, 3, [2, 1] );
    dasmEntries.addBankLabel( 0x4e81, 0x3a )
    dasmEntries.addBankLabel( 0x4ea7, 0x3a )
    dasmEntries.addBankLabel( 0x4ed4, 0x3a )

    dasmEntries.addBankLabel( 0x4f16, 0x3a )
    dasmEntries.addBankLabel( 0x4f6c, 0x3a )
    dasmEntries.addBankLabel( 0x4f89, 0x3a )
    dasmEntries.addBankLabel( 0x4fa9, 0x3a )
    dasmEntries.addBankLabel( 0x4fae, 0x3a )
    dasmEntries.addBankLabel( 0x4fb3, 0x3a )
    dasmEntries.addBankLabel( 0x4fc4, 0x3a )
    dasmEntries.addBankLabel( 0x4fd5, 0x3a )
    dasmEntries.addBankLabel( 0x4fdd, 0x3a )
    dasmEntries.addBankLabel( 0x4ff0, 0x3a )

    dasmEntries.addBankLabel( 0x500a, 0x3a )
    dasmEntries.addBankLabel( 0x503c, 0x3a )
    dasmEntries.addBankLabel( 0x5073, 0x3a )
    dasmEntries.addBankLabel( 0x5074, 0x3a )
    dasmEntries.addBankLabel( 0x509b, 0x3a )
    dasmEntries.addBankLabel( 0x50ad, 0x3a )
    dasmEntries.addTable( 0x50bd, 0x3a, 'tblNineBytes', 33, 8 );

    dasmEntries.addTable( 0x51c5, 0x3a, 'tblSevenBytes', 1, 7 );
    dasmEntries.addBankLabel( 0x51cc, 0x3a )
    dasmEntries.addTable( 0x51f2, 0x3a, 'tblTwelveBytes', 32, 12 );

    dasmEntries.addTable( 0x5372, 0x3a, 'tblOneByteWhoops', 1, 1 );
    dasmEntries.addBankLabel( 0x5373, 0x3a )
    dasmEntries.addBankLabel( 0x53a6, 0x3a )
    dasmEntries.addBankLabel( 0x53c9, 0x3a )
    dasmEntries.addBankLabel( 0x53d8, 0x3a )
    dasmEntries.addBankLabel( 0x53e7, 0x3a )
    dasmEntries.addBankLabel( 0x53f6, 0x3a )

    dasmEntries.addBankLabel( 0x5405, 0x3a )
    dasmEntries.addBankLabel( 0x5410, 0x3a )
    dasmEntries.addBankLabel( 0x541f, 0x3a )
    dasmEntries.addBankLabel( 0x542e, 0x3a )
    dasmEntries.addBankLabel( 0x5437, 0x3a )
    dasmEntries.addBankLabel( 0x5448, 0x3a )
    dasmEntries.addBankLabel( 0x5451, 0x3a )
    dasmEntries.addTable( 0x5462, 0x3a, 'tblTenBytes', 13, 10 );
    dasmEntries.addTable( 0x54e4, 0x3a, 'tblTenBytes-end', 1, 1 );
    dasmEntries.addBankLabel( 0x54e5, 0x3a );
    dasmEntries.addBankLabel( 0x54ea, 0x3a );

    dasmEntries.addBankLabel( 0x5515, 0x3a );
    dasmEntries.addBankLabel( 0x5523, 0x3a );
    dasmEntries.addBankLabel( 0x5528, 0x3a );
    dasmEntries.addBankLabel( 0x5553, 0x3a );
    dasmEntries.addBankLabel( 0x556e, 0x3a );
    dasmEntries.addTable( 0x5574, 0x3a, 'tbl43times6', 43, 6 );

    dasmEntries.addTable( 0x5676, 0x3a, 'tbl43times6-end', 1, 1 );
    dasmEntries.addBankLabel( 0x5677, 0x3a )
    dasmEntries.addBankLabel( 0x56a8, 0x3a )
    dasmEntries.addBankLabel( 0x56d4, 0x3a )

    dasmEntries.addBankLabel( 0x5725, 0x3a )
    dasmEntries.addBankLabel( 0x5735, 0x3a )
    dasmEntries.addBankLabel( 0x5745, 0x3a )
    dasmEntries.addBankLabel( 0x5755, 0x3a )
    dasmEntries.addBankLabel( 0x5763, 0x3a )
    dasmEntries.addBankLabel( 0x5787, 0x3a )
    dasmEntries.addBankLabel( 0x5797, 0x3a )
    dasmEntries.addBankLabel( 0x57a7, 0x3a )
    dasmEntries.addBankLabel( 0x57a8, 0x3a )
    dasmEntries.addBankLabel( 0x57b5, 0x3a )
    dasmEntries.addBankLabel( 0x57dd, 0x3a )
    dasmEntries.addBankLabel( 0x57fa, 0x3a )

    dasmEntries.addBankLabel( 0x5816, 0x3a )
    dasmEntries.addBankLabel( 0x5848, 0x3a )
    dasmEntries.addBankLabel( 0x5885, 0x3a )
    dasmEntries.addBankLabel( 0x588d, 0x3a )
    dasmEntries.addBankLabel( 0x58b3, 0x3a )
    dasmEntries.addBankLabel( 0x58c0, 0x3a )
    dasmEntries.addBankLabel( 0x58d8, 0x3a )
    dasmEntries.addBankLabel( 0x58f1, 0x3a )
    dasmEntries.addBankLabel( 0x58f6, 0x3a )

    dasmEntries.addBankLabel( 0x5910, 0x3a )
    dasmEntries.addBankLabel( 0x591c, 0x3a )
    dasmEntries.addBankLabel( 0x5946, 0x3a )
    dasmEntries.addBankLabel( 0x595f, 0x3a )
    dasmEntries.addBankLabel( 0x596a, 0x3a )
    dasmEntries.addBankLabel( 0x5972, 0x3a )
    dasmEntries.addBankLabel( 0x5985, 0x3a )
    dasmEntries.addBankLabel( 0x59bc, 0x3a )
    dasmEntries.addTable( 0x59d3, 0x3a, 'tblTwoBytes', 10, 2 );
    dasmEntries.addBankLabel( 0x59e7, 0x3a )

    dasmEntries.addBankLabel( 0x5a05, 0x3a )
    dasmEntries.addBankLabel( 0x5a48, 0x3a )
    dasmEntries.addBankLabel( 0x5a5a, 0x3a )
    dasmEntries.addBankLabel( 0x5a86, 0x3a )
    dasmEntries.addBankLabel( 0x5a99, 0x3a )
    dasmEntries.addBankLabel( 0x5abf, 0x3a )
    dasmEntries.addBankLabel( 0x5adc, 0x3a )

    dasmEntries.addBankLabel( 0x5b2f, 0x3a )
    dasmEntries.addBankLabel( 0x5b64, 0x3a )
    dasmEntries.addBankLabel( 0x5b6d, 0x3a )
    dasmEntries.addBankLabel( 0x5bb8, 0x3a )
    dasmEntries.addBankLabel( 0x5bc9, 0x3a )
    dasmEntries.addBankLabel( 0x5bda, 0x3a )
    dasmEntries.addBankLabel( 0x5c4d, 0x3a )
    dasmEntries.addBankLabel( 0x5c59, 0x3a )
    dasmEntries.addBankLabel( 0x5c6c, 0x3a )
    dasmEntries.addBankLabel( 0x5c79, 0x3a )
    dasmEntries.addBankLabel( 0x5c89, 0x3a )
    dasmEntries.addBankLabel( 0x5c99, 0x3a )
    dasmEntries.addBankLabel( 0x5ca9, 0x3a )
    dasmEntries.addBankLabel( 0x5cb9, 0x3a )
    dasmEntries.addBankLabel( 0x5cdc, 0x3a )
    dasmEntries.addTable( 0x5cea, 0x3a, 'tblTwoBytes', 12, 2 );

    dasmEntries.addBankLabel( 0x5d02, 0x3a )
    dasmEntries.addBankLabel( 0x5d16, 0x3a )
    dasmEntries.addBankLabel( 0x5d18, 0x3a )
    dasmEntries.addBankLabel( 0x5d2c, 0x3a )
    dasmEntries.addBankLabel( 0x5d2e, 0x3a )
    dasmEntries.addBankLabel( 0x5d57, 0x3a )
    dasmEntries.addBankLabel( 0x5d6f, 0x3a )
    dasmEntries.addBankLabel( 0x5d9b, 0x3a )
    dasmEntries.addBankLabel( 0x5dbb, 0x3a )

    dasmEntries.addBankLabel( 0x5e18, 0x3a )
    dasmEntries.addBankLabel( 0x5e43, 0x3a )
    dasmEntries.addBankLabel( 0x5e7a, 0x3a )
    dasmEntries.addBankLabel( 0x5e87, 0x3a )
    dasmEntries.addBankLabel( 0x5ea3, 0x3a )
    dasmEntries.addBankLabel( 0x5ee5, 0x3a )
    dasmEntries.addBankLabel( 0x5ee8, 0x3a )
    dasmEntries.addBankLabel( 0x5ef1, 0x3a )
    dasmEntries.addBankLabel( 0x5efa, 0x3a )

    dasmEntries.addTable( 0x5f24, 0x3a, 'tblTwoBytes', 12, 2 );
    dasmEntries.addBankLabel( 0x5f3c, 0x3a )
    dasmEntries.addBankLabel( 0x5f5c, 0x3a )
    dasmEntries.addBankLabel( 0x5f73, 0x3a )
    dasmEntries.addBankLabel( 0x5f89, 0x3a )
    dasmEntries.addBankLabel( 0x5f9e, 0x3a )
    dasmEntries.addTable( 0x5fc3, 0x3a, 'tblTwoBytes', 32, 2 );

    dasmEntries.addTable( 0x6003, 0x3a, 'tblTwoBytes-end', 1, 1 );
    dasmEntries.addBankLabel( 0x6004, 0x3a )
    dasmEntries.addBankLabel( 0x6036, 0x3a )
    dasmEntries.addBankLabel( 0x6068, 0x3a )
    dasmEntries.addBankLabel( 0x6072, 0x3a )
    dasmEntries.addBankLabel( 0x60d3, 0x3a )
    dasmEntries.addBankLabel( 0x60f3, 0x3a )

    dasmEntries.addBankLabel( 0x612a, 0x3a )
    dasmEntries.addBankLabel( 0x6144, 0x3a )
    dasmEntries.addBankLabel( 0x6181, 0x3a )
    dasmEntries.addBankLabel( 0x619b, 0x3a )
    dasmEntries.addBankLabel( 0x61ba, 0x3a )
    dasmEntries.addBankLabel( 0x61f0, 0x3a )

    dasmEntries.addBankLabel( 0x6228, 0x3a )
    dasmEntries.addBankLabel( 0x623b, 0x3a )
    dasmEntries.addBankLabel( 0x627a, 0x3a )
    dasmEntries.addBankLabel( 0x629d, 0x3a )
    dasmEntries.addBankLabel( 0x62e5, 0x3a )
    dasmEntries.addBankLabel( 0x62ed, 0x3a )
    dasmEntries.addBankLabel( 0x62f5, 0x3a )
    dasmEntries.addBankLabel( 0x62fd, 0x3a )

    dasmEntries.addBankLabel( 0x6304, 0x3a )
    dasmEntries.addBankLabel( 0x6310, 0x3a )
    dasmEntries.addBankLabel( 0x6382, 0x3a )
    dasmEntries.addBankLabel( 0x63c7, 0x3a )
    dasmEntries.addBankLabel( 0x63f0, 0x3a )

    dasmEntries.addBankLabel( 0x6403, 0x3a )
    dasmEntries.addBankLabel( 0x6416, 0x3a )
    dasmEntries.addBankLabel( 0x6418, 0x3a )
    dasmEntries.addBankLabel( 0x642c, 0x3a )
    dasmEntries.addBankLabel( 0x642e, 0x3a )
    dasmEntries.addBankLabel( 0x6443, 0x3a )
    dasmEntries.addTable( 0x6445, 0x3a, 'tblTwoBytes', 12, 2 );
    dasmEntries.addBankLabel( 0x645d, 0x3a )
    dasmEntries.addBankLabel( 0x6463, 0x3a )
    dasmEntries.addBankLabel( 0x6464, 0x3a )
    dasmEntries.addBankLabel( 0x6482, 0x3a )
    dasmEntries.addBankLabel( 0x648a, 0x3a )
    dasmEntries.addBankLabel( 0x64ae, 0x3a )
    dasmEntries.addBankLabel( 0x64ed, 0x3a )
    dasmEntries.addBankLabel( 0x64fd, 0x3a )

    dasmEntries.addBankLabel( 0x6508, 0x3a )
    dasmEntries.addBankLabel( 0x6515, 0x3a )
    dasmEntries.addBankLabel( 0x6521, 0x3a )
    dasmEntries.addBankLabel( 0x653b, 0x3a )
    dasmEntries.addBankLabel( 0x6583, 0x3a )
    dasmEntries.addBankLabel( 0x65a3, 0x3a )
    dasmEntries.addBankLabel( 0x65d9, 0x3a )

    dasmEntries.addBankLabel( 0x6656, 0x3a )
    dasmEntries.addBankLabel( 0x6663, 0x3a )
    dasmEntries.addBankLabel( 0x666f, 0x3a )
    dasmEntries.addBankLabel( 0x6679, 0x3a )
    dasmEntries.addBankLabel( 0x6684, 0x3a )
    dasmEntries.addBankLabel( 0x6688, 0x3a )
    dasmEntries.addBankLabel( 0x66a0, 0x3a )
    dasmEntries.addBankLabel( 0x66bf, 0x3a )
    dasmEntries.addBankLabel( 0x66d3, 0x3a )

    dasmEntries.addBankLabel( 0x6702, 0x3a )
    dasmEntries.addBankLabel( 0x670e, 0x3a )
    dasmEntries.addBankLabel( 0x671a, 0x3a )
    dasmEntries.addBankLabel( 0x6726, 0x3a )
    dasmEntries.addBankLabel( 0x6732, 0x3a )
    dasmEntries.addBankLabel( 0x673e, 0x3a )
    dasmEntries.addBankLabel( 0x674a, 0x3a )
    dasmEntries.addBankLabel( 0x6756, 0x3a )
    dasmEntries.addBankLabel( 0x6762, 0x3a )
    dasmEntries.addBankLabel( 0x676e, 0x3a )
    dasmEntries.addBankLabel( 0x677b, 0x3a )
    dasmEntries.addBankLabel( 0x6788, 0x3a )
    dasmEntries.addBankLabel( 0x6793, 0x3a )
    dasmEntries.addBankLabel( 0x679e, 0x3a )
    dasmEntries.addBankLabel( 0x67a9, 0x3a )
    dasmEntries.addBankLabel( 0x67b4, 0x3a )
    dasmEntries.addBankLabel( 0x67bf, 0x3a )
    dasmEntries.addBankLabel( 0x67ca, 0x3a )
    dasmEntries.addBankLabel( 0x67d7, 0x3a )
    dasmEntries.addBankLabel( 0x67e4, 0x3a )
    dasmEntries.addBankLabel( 0x67ef, 0x3a )
    dasmEntries.addBankLabel( 0x67fa, 0x3a )

    dasmEntries.addBankLabel( 0x6805, 0x3a )
    dasmEntries.addBankLabel( 0x680c, 0x3a )
    dasmEntries.addBankLabel( 0x6815, 0x3a )
    dasmEntries.addBankLabel( 0x6817, 0x3a )
    dasmEntries.addBankLabel( 0x682b, 0x3a )
    dasmEntries.addBankLabel( 0x6851, 0x3a )
    dasmEntries.addBankLabel( 0x685d, 0x3a )
    dasmEntries.addBankLabel( 0x6865, 0x3a )
    dasmEntries.addBankLabel( 0x688a, 0x3a )
    dasmEntries.addBankLabel( 0x68a0, 0x3a )
    dasmEntries.addBankLabel( 0x68a2, 0x3a )
    dasmEntries.addBankLabel( 0x68be, 0x3a )
    dasmEntries.addTable( 0x68c9, 0x3a, 'tblAddr', 3, 2 );
    dasmEntries.addBankLabel( 0x68cf, 0x3a )
    dasmEntries.addBankLabel( 0x68eb, 0x3a )

    dasmEntries.addBankLabel( 0x6935, 0x3a )
    dasmEntries.addBankLabel( 0x696e, 0x3a )
    dasmEntries.addBankLabel( 0x69a7, 0x3a )
    dasmEntries.addBankLabel( 0x69e2, 0x3a )

    dasmEntries.addBankLabel( 0x6a03, 0x3a )
    dasmEntries.addBankLabel( 0x6a1e, 0x3a )
    dasmEntries.addBankLabel( 0x6a50, 0x3a )
    dasmEntries.addBankLabel( 0x6a57, 0x3a )
    dasmEntries.addBankLabel( 0x6a5d, 0x3a )
    dasmEntries.addBankLabel( 0x6a68, 0x3a )
    dasmEntries.addBankLabel( 0x6a7b, 0x3a )
    dasmEntries.addBankLabel( 0x6a8c, 0x3a )
    dasmEntries.addBankLabel( 0x6a94, 0x3a )
    dasmEntries.addBankLabel( 0x6aa4, 0x3a )
    dasmEntries.addBankLabel( 0x6ab0, 0x3a )
    dasmEntries.addBankLabel( 0x6aee, 0x3a )
    dasmEntries.addBankLabel( 0x6af2, 0x3a )

    dasmEntries.addTable( 0x6b1a, 0x3a, 'tblFourBytes', 4, 4 );
    dasmEntries.addBankLabel( 0x6b2a, 0x3a )
    dasmEntries.addBankLabel( 0x6b36, 0x3a )
    dasmEntries.addBankLabel( 0x6b50, 0x3a )
    dasmEntries.addBankLabel( 0x6b5b, 0x3a )
    dasmEntries.addBankLabel( 0x6b73, 0x3a )
    dasmEntries.addBankLabel( 0x6b84, 0x3a )
    dasmEntries.addBankLabel( 0x6b93, 0x3a )
    dasmEntries.addBankLabel( 0x6ba8, 0x3a )
    dasmEntries.addBankLabel( 0x6baa, 0x3a )
    dasmEntries.addBankLabel( 0x6bbc, 0x3a )
    dasmEntries.addBankLabel( 0x6bbf, 0x3a )
    dasmEntries.addTable( 0x6bca, 0x3a, 'tblTwoBytes', 4, 2 );
    dasmEntries.addBankLabel( 0x6bd2, 0x3a )

    dasmEntries.addBankLabel( 0x6c07, 0x3a )
    dasmEntries.addBankLabel( 0x6c2b, 0x3a )
    dasmEntries.addBankLabel( 0x6c54, 0x3a )
    dasmEntries.addBankLabel( 0x6c71, 0x3a )
    dasmEntries.addBankLabel( 0x6c7a, 0x3a )
    dasmEntries.addBankLabel( 0x6c97, 0x3a )
    dasmEntries.addBankLabel( 0x6cb0, 0x3a )
    dasmEntries.addTable( 0x6cbb, 0x3a, 'tblTwentyFourBytes', 41, 24 );

    dasmEntries.addBankLabel( 0x7093, 0x3a )
    dasmEntries.addBankLabel( 0x70b6, 0x3a )
    dasmEntries.addBankLabel( 0x70de, 0x3a )

    dasmEntries.addBankLabel( 0x710c, 0x3a )
    dasmEntries.addBankLabel( 0x7124, 0x3a )
    dasmEntries.addBankLabel( 0x7156, 0x3a )
    dasmEntries.addBankLabel( 0x717e, 0x3a )
    dasmEntries.addBankLabel( 0x718a, 0x3a )
    dasmEntries.addBankLabel( 0x719f, 0x3a )
    dasmEntries.addBankLabel( 0x71d7, 0x3a )

    dasmEntries.addBankLabel( 0x720b, 0x3a )
    dasmEntries.addBankLabel( 0x7213, 0x3a )
    dasmEntries.addBankLabel( 0x7219, 0x3a )
    dasmEntries.addBankLabel( 0x7224, 0x3a )
    dasmEntries.addBankLabel( 0x7238, 0x3a )
    dasmEntries.addBankLabel( 0x7246, 0x3a )
    dasmEntries.addBankLabel( 0x724e, 0x3a )
    dasmEntries.addBankLabel( 0x725b, 0x3a )
    dasmEntries.addBankLabel( 0x7267, 0x3a )
    dasmEntries.addBankLabel( 0x7284, 0x3a )
    dasmEntries.addBankLabel( 0x728b, 0x3a )
    dasmEntries.addBankLabel( 0x72ab, 0x3a )
    dasmEntries.addBankLabel( 0x72ad, 0x3a )
    dasmEntries.addTable( 0x72b8, 0x3a, 'tblTwoBytes', 5, 2 );
    dasmEntries.addBankLabel( 0x72c2, 0x3a )
    dasmEntries.addBankLabel( 0x72d7, 0x3a )
    dasmEntries.addBankLabel( 0x72e7, 0x3a )
    dasmEntries.addBankLabel( 0x72f7, 0x3a )

    dasmEntries.addBankLabel( 0x7307, 0x3a )
    dasmEntries.addBankLabel( 0x7323, 0x3a )
    dasmEntries.addTable( 0x7337, 0x3a, 'tblFiveBytes', 5, 5 );
    dasmEntries.addBankLabel( 0x7350, 0x3a )
    dasmEntries.addBankLabel( 0x7386, 0x3a )
    dasmEntries.addBankLabel( 0x7399, 0x3a )
    dasmEntries.addBankLabel( 0x73b5, 0x3a )
    dasmEntries.addBankLabel( 0x73e0, 0x3a )

    dasmEntries.addBankLabel( 0x7415, 0x3a )
    dasmEntries.addBankLabel( 0x743a, 0x3a )
    dasmEntries.addBankLabel( 0x744f, 0x3a )
    dasmEntries.addBankLabel( 0x747b, 0x3a )
    dasmEntries.addBankLabel( 0x7483, 0x3a )
    dasmEntries.addBankLabel( 0x7489, 0x3a )
    dasmEntries.addBankLabel( 0x7497, 0x3a )
    dasmEntries.addBankLabel( 0x74a9, 0x3a )
    dasmEntries.addBankLabel( 0x74c7, 0x3a )
    dasmEntries.addBankLabel( 0x74cf, 0x3a )
    dasmEntries.addBankLabel( 0x74ec, 0x3a )
    dasmEntries.addBankLabel( 0x74f8, 0x3a )

    dasmEntries.addBankLabel( 0x753f, 0x3a )
    dasmEntries.addBankLabel( 0x7545, 0x3a )
    dasmEntries.addBankLabel( 0x754b, 0x3a )
    dasmEntries.addBankLabel( 0x754c, 0x3a )
    dasmEntries.addBankLabel( 0x7562, 0x3a )
    dasmEntries.addBankLabel( 0x757c, 0x3a )
    dasmEntries.addBankLabel( 0x7586, 0x3a )
    dasmEntries.addBankLabel( 0x7597, 0x3a )
    dasmEntries.addBankLabel( 0x75ac, 0x3a )
    dasmEntries.addBankLabel( 0x75bf, 0x3a )
    dasmEntries.addBankLabel( 0x75cd, 0x3a )
    dasmEntries.addBankLabel( 0x75fd, 0x3a )

    dasmEntries.addBankLabel( 0x7608, 0x3a )
    dasmEntries.addBankLabel( 0x7612, 0x3a )
    dasmEntries.addBankLabel( 0x7644, 0x3a )
    dasmEntries.addBankLabel( 0x76ac, 0x3a )
    dasmEntries.addBankLabel( 0x76b4, 0x3a )
    dasmEntries.addBankLabel( 0x76ba, 0x3a )
    dasmEntries.addBankLabel( 0x76c5, 0x3a )
    dasmEntries.addBankLabel( 0x76d8, 0x3a )
    dasmEntries.addBankLabel( 0x76e9, 0x3a )
    dasmEntries.addBankLabel( 0x76f1, 0x3a )

    dasmEntries.addBankLabel( 0x7701, 0x3a )
    dasmEntries.addBankLabel( 0x770d, 0x3a )
    dasmEntries.addBankLabel( 0x775a, 0x3a )
    dasmEntries.addBankLabel( 0x7760, 0x3a )
    dasmEntries.addBankLabel( 0x778a, 0x3a )
    dasmEntries.addBankLabel( 0x77a6, 0x3a )
    dasmEntries.addBankLabel( 0x77a8, 0x3a )
    dasmEntries.addBankLabel( 0x77dd, 0x3a )
    dasmEntries.addBankLabel( 0x77ec, 0x3a )
    dasmEntries.addTable( 0x77f7, 0x3a, 'tblTwoBytes', 4, 2 );

    dasmEntries.addBankLabel( 0x7829, 0x3a )
    dasmEntries.addBankLabel( 0x783d, 0x3a )
    dasmEntries.addBankLabel( 0x784d, 0x3a )
    dasmEntries.addBankLabel( 0x786c, 0x3a )
    dasmEntries.addTable( 0x787f, 0x3a, 'tblNineBytes', 8, 9 )
    dasmEntries.addBankLabel( 0x78c7, 0x3a )
    dasmEntries.addTable( 0x78c6, 0x3a, 'tblSevenBytes', 10, 7 );
    dasmEntries.addBankLabel( 0x78e2, 0x3a )
    dasmEntries.addBankLabel( 0x78ed, 0x3a )

    dasmEntries.addBankLabel( 0x7905, 0x3a )
    // dasmEntries.addTable( 0x790c, 0x3a, 'tblSevenBytes-end', 1, 1 );
    dasmEntries.addBankLabel( 0x7912, 0x3a )
    dasmEntries.addBankLabel( 0x7934, 0x3a )
    dasmEntries.addBankLabel( 0x794c, 0x3a )
    dasmEntries.addBankLabel( 0x7964, 0x3a )
    dasmEntries.addBankLabel( 0x7979, 0x3a )
    dasmEntries.addBankLabel( 0x79c0, 0x3a )

    dasmEntries.addBankLabel( 0x7a93, 0x3a )
    dasmEntries.addBankLabel( 0x7ac5, 0x3a )
    dasmEntries.addBankLabel( 0x7add, 0x3a )
    dasmEntries.addBankLabel( 0x7afc, 0x3a )

    dasmEntries.addBankLabel( 0x7b0e, 0x3a )
    dasmEntries.addBankLabel( 0x7b29, 0x3a )
    dasmEntries.addBankLabel( 0x7b38, 0x3a )
    dasmEntries.addBankLabel( 0x7b3b, 0x3a )
    dasmEntries.addBankLabel( 0x7b3e, 0x3a )

    dasmEntries.addBankLabel( 0x7b4d, 0x3a )
    dasmEntries.addTableWpc( 0x7b7f, 0x3a, 'tblwpcTenByte' );

    dasmEntries.addBankLabel( 0x7b8c, 0x3a )
    dasmEntries.addBankLabel( 0x7b90, 0x3a )
    dasmEntries.addBankLabel( 0x7bc6, 0x3a )

    dasmEntries.addBankLabel( 0x7c09, 0x3a )
    dasmEntries.addBankLabel( 0x7c2a, 0x3a )
    dasmEntries.addBankLabel( 0x7c3f, 0x3a )
    dasmEntries.addBankLabel( 0x7c76, 0x3a )
    dasmEntries.addBankLabel( 0x7cc5, 0x3a )

    dasmEntries.addBankLabel( 0x7d10, 0x3a )
    dasmEntries.addBankLabel( 0x7d5b, 0x3a )

    dasmEntries.addBankLabel( 0x7e58, 0x3a )
    dasmEntries.addBankLabel( 0x7eef, 0x3a )

    dasmEntries.addBankLabel( 0x7f18, 0x3a )
    dasmEntries.addBankLabel( 0x7f35, 0x3a )
    dasmEntries.addBankLabel( 0x7f38, 0x3a )
    dasmEntries.addBankLabel( 0x7f3b, 0x3a )
    dasmEntries.addBankLabel( 0x7f3e, 0x3a )
    dasmEntries.addBankLabel( 0x7f4b, 0x3a )
    dasmEntries.addBankLabel( 0x7f57, 0x3a )
    dasmEntries.addBankLabel( 0x7f63, 0x3a )
    dasmEntries.addBankLabel( 0x7f75, 0x3a )
    dasmEntries.addTable( 0x7f81, 0x3a, 'tblwpc2Byte', 4, 2 );
    dasmEntries.addBankLabel( 0x7f89, 0x3a );
    dasmEntries.addBankLabel( 0x7f94, 0x3a )
    dasmEntries.addTableWpc( 0x7f98, 0x3a, 'tblwpc_bnk_3a_7f98' );

    dasmEntries.addTable( 0x7FA5, 0x3a, 'filler', 30, 3 );
    dasmEntries.addTable( 0x7FFF, 0x3a, 'filler', 1, 1 );
}

function getDasmEntries_bnk_3b( dasmEntries ) {

    dasmEntries.addTable(0x4000, 0x3b, 'pageMarker_bnk_3b', 1, 1);
    dasmEntries.addBankLabel(0x4001, 0x3b, 'bnk_3b_4001');
    dasmEntries.addBankLabel(0x4014, 0x3b, 'bnk_3b_4014');
    dasmEntries.addBankLabel(0x4032, 0x3b, 'bnk_3b_4032');
    dasmEntries.addBankLabel(0x4034, 0x3b, 'bnk_3b_4034');
    dasmEntries.addBankLabel(0x4090, 0x3b, 'bnk_3b_4090');
    dasmEntries.addBankLabel(0x40B0, 0x3b, 'bnk_3b_40B0');
    dasmEntries.addBankLabel(0x40EC, 0x3b, 'bnk_3b_40EC');
    dasmEntries.addBankLabel(0x40FB, 0x3b, 'bnk_3b_40FB');

    dasmEntries.addBankLabel(0x4148, 0x3b, 'bnk_3b_4148');
    dasmEntries.addBankLabel(0x4176, 0x3b, 'bnk_3b_4176');
    dasmEntries.addBankLabel(0x419E, 0x3b, 'bnk_3b_419E');
    dasmEntries.addBankLabel(0x41D8, 0x3b, 'bnk_3b_41D8');
    dasmEntries.addBankLabel(0x41EF, 0x3b, 'bnk_3b_41EF');

    dasmEntries.addBankLabel(0x4210, 0x3b, 'bnk_3b_4210');
    dasmEntries.addBankLabel(0x4281, 0x3b, 'bnk_3b_4281');
    dasmEntries.addBankLabel(0x4289, 0x3b, 'bnk_3b_4289');
    dasmEntries.addBankLabel(0x42AB, 0x3b, 'bnk_3b_42AB');
    dasmEntries.addBankLabel(0x42F7, 0x3b, 'bnk_3b_42F7');

    dasmEntries.addBankLabel(0x4300, 0x3b, 'bnk_3b_4300');
    dasmEntries.addBankLabel(0x4314, 0x3b, 'bnk_3b_4314');
    dasmEntries.addBankLabel(0x4322, 0x3b, 'bnk_3b_4322');
    dasmEntries.addBankLabel(0x4334, 0x3b, 'bnk_3b_4334');
    dasmEntries.addBankLabel(0x4342, 0x3b, 'bnk_3b_4342');
    dasmEntries.addBankLabel(0x4367, 0x3b, 'bnk_3b_4367');
    dasmEntries.addBankLabel(0x437A, 0x3b, 'bnk_3b_437A');
    dasmEntries.addBankLabel(0x4386, 0x3b, 'bnk_3b_4386');
    dasmEntries.addBankLabel(0x4394, 0x3b, 'bnk_3b_4394');
    dasmEntries.addBankLabel(0x43A2, 0x3b, 'bnk_3b_43A2');
    dasmEntries.addBankLabel(0x43B4, 0x3b, 'bnk_3b_43B4');
    dasmEntries.addBankLabel(0x43CC, 0x3b, 'bnk_3b_43CC');
    dasmEntries.addBankLabel(0x43E6, 0x3b, 'bnk_3b_43E6');
    dasmEntries.addBankLabel(0x43F3, 0x3b, 'bnk_3b_43F3');

    dasmEntries.addBankLabel(0x4405, 0x3b, 'bnk_3b_4405');
    dasmEntries.addBankLabel(0x440E, 0x3b, 'bnk_3b_440E');
    dasmEntries.addBankLabel(0x4417, 0x3b, 'bnk_3b_4417');
    dasmEntries.addBankLabel(0x4420, 0x3b, 'bnk_3b_4420');
    dasmEntries.addBankLabel(0x4444, 0x3b, 'bnk_3b_4444');
    dasmEntries.addBankLabel(0x4450, 0x3b, 'bnk_3b_4450');
    dasmEntries.addBankLabel(0x44DA, 0x3b, 'bnk_3b_44DA');

    dasmEntries.addBankLabel(0x4502, 0x3b, 'bnk_3b_4502');
    dasmEntries.addBankLabel(0x4565, 0x3b, 'bnk_3b_4565');
    dasmEntries.addBankLabel(0x457C, 0x3b, 'bnk_3b_457C');
    dasmEntries.addBankLabel(0x45BC, 0x3b, 'bnk_3b_45BC');
    dasmEntries.addBankLabel(0x45D2, 0x3b, 'bnk_3b_45D2');
    dasmEntries.addBankLabel(0x45EA, 0x3b, 'bnk_3b_45EA');
    dasmEntries.addBankLabel(0x45F7, 0x3b, 'bnk_3b_45F7');

    dasmEntries.addBankLabel(0x4604, 0x3b, 'bnk_3b_4604');
    dasmEntries.addBankLabel(0x4621, 0x3b, 'bnk_3b_4621');
    dasmEntries.addBankLabel(0x4659, 0x3b, 'bnk_3b_4659');
    dasmEntries.addTable(0x4666, 0x3b, 'tblTwoBytes', 63, 2);
    dasmEntries.addBankLabel(0x46E4, 0x3b, 'bnk_3b_46E4');


    dasmEntries.addBankLabel(0x4709, 0x3b, 'bnk_3b_4709');
    dasmEntries.addTable(0x4714, 0x3b, 'tblTwoBytes-again', 40, 2);
    dasmEntries.addTableWpc(0x4764, 0x3b, 'tblwpc23Byte');

    dasmEntries.addTable(0x4AFF, 0x3b, 'tblTwoBytes-another', 74, 2);

    dasmEntries.addTableWpc(0x4b93, 0x3b, 'tblwpc3Byte');

    dasmEntries.addTable(0x4c74, 0x3b, 'tblTwoBytes-another', 311, 4);

    dasmEntries.addBankLabel(0x5150, 0x3b, 'bnk_3b_5150');
    dasmEntries.addBankLabel(0x5174, 0x3b, 'bnk_3b_5174');
    dasmEntries.addBankLabel(0x518A, 0x3b, 'bnk_3b_518A');
    dasmEntries.addBankLabel(0x519A, 0x3b, 'bnk_3b_519A');
    dasmEntries.addBankLabel(0x51CA, 0x3b, 'bnk_3b_51CA');
    dasmEntries.addBankLabel(0x51D8, 0x3b, 'bnk_3b_51D8');
    dasmEntries.addBankLabel(0x51FD, 0x3b, 'bnk_3b_51FD');
    dasmEntries.addBankLabel(0x52AB, 0x3b, 'bnk_3b_52AB');
    dasmEntries.addBankLabel(0x52BA, 0x3b, 'bnk_3b_52BA');
    dasmEntries.addBankLabel(0x52D4, 0x3b, 'bnk_3b_52D4');
    dasmEntries.addBankLabel(0x52F2, 0x3b, 'bnk_3b_52F2');
    dasmEntries.addBankLabel(0x5306, 0x3b, 'bnk_3b_5306');
    dasmEntries.addBankLabel(0x5313, 0x3b, 'bnk_3b_5313');
    dasmEntries.addBankLabel(0x5347, 0x3b, 'bnk_3b_5347');
    dasmEntries.addBankLabel(0x5382, 0x3b, 'bnk_3b_5382');
    dasmEntries.addBankLabel(0x5391, 0x3b, 'bnk_3b_5391');
    dasmEntries.addBankLabel(0x53AD, 0x3b, 'bnk_3b_53AD');
    dasmEntries.addBankLabel(0x53F4, 0x3b, 'bnk_3b_53F4');
    dasmEntries.addBankLabel(0x5412, 0x3b, 'bnk_3b_5412');
    dasmEntries.addBankLabel(0x542F, 0x3b, 'bnk_3b_542F');
    dasmEntries.addBankLabel(0x5443, 0x3b, 'bnk_3b_5443');
    dasmEntries.addBankLabel(0x544C, 0x3b, 'bnk_3b_544C');
    dasmEntries.addBankLabel(0x545E, 0x3b, 'bnk_3b_545E');
    dasmEntries.addBankLabel(0x5470, 0x3b, 'bnk_3b_5470');
    dasmEntries.addBankLabel(0x5482, 0x3b, 'bnk_3b_5482');
    dasmEntries.addBankLabel(0x548C, 0x3b, 'bnk_3b_548C');
    dasmEntries.addBankLabel(0x54A2, 0x3b, 'bnk_3b_54A2');
    dasmEntries.addBankLabel(0x54C8, 0x3b, 'bnk_3b_54C8');
    dasmEntries.addBankLabel(0x54E9, 0x3b, 'bnk_3b_54E9');
    dasmEntries.addBankLabel(0x550E, 0x3b, 'bnk_3b_550E');
    dasmEntries.addBankLabel(0x5518, 0x3b, 'bnk_3b_5518');
    dasmEntries.addBankLabel(0x5527, 0x3b, 'bnk_3b_5527');
    dasmEntries.addBankLabel(0x5535, 0x3b, 'bnk_3b_5535');
    dasmEntries.addBankLabel(0x553F, 0x3b, 'bnk_3b_553F');
    dasmEntries.addBankLabel(0x554A, 0x3b, 'bnk_3b_554A');
    dasmEntries.addBankLabel(0x5561, 0x3b, 'bnk_3b_5561');
    dasmEntries.addBankLabel(0x5597, 0x3b, 'bnk_3b_5597');
    dasmEntries.addBankLabel(0x55BD, 0x3b, 'bnk_3b_55BD');
    dasmEntries.addBankLabel(0x55EA, 0x3b, 'bnk_3b_55EA');
    dasmEntries.addBankLabel(0x55FE, 0x3b, 'bnk_3b_55FE');
    dasmEntries.addBankLabel(0x5615, 0x3b, 'bnk_3b_5615');
    dasmEntries.addBankLabel(0x5622, 0x3b, 'bnk_3b_5622');
    dasmEntries.addBankLabel(0x5638, 0x3b, 'bnk_3b_5638');
    dasmEntries.addBankLabel(0x564B, 0x3b, 'bnk_3b_564B');
    dasmEntries.addBankLabel(0x5653, 0x3b, 'bnk_3b_5653');
    dasmEntries.addBankLabel(0x566F, 0x3b, 'bnk_3b_566F');
    dasmEntries.addBankLabel(0x5671, 0x3b, 'bnk_3b_5671');
    dasmEntries.addBankLabel(0x567B, 0x3b, 'bnk_3b_567B');
    dasmEntries.addBankLabel(0x5686, 0x3b, 'bnk_3b_5686');
    dasmEntries.addBankLabel(0x5690, 0x3b, 'bnk_3b_5690');
    dasmEntries.addBankLabel(0x56A9, 0x3b, 'bnk_3b_56A9');
    dasmEntries.addBankLabel(0x56B3, 0x3b, 'bnk_3b_56B3');
    dasmEntries.addBankLabel(0x56C1, 0x3b, 'bnk_3b_56C1');
    dasmEntries.addBankLabel(0x56C5, 0x3b, 'bnk_3b_56C5');
    dasmEntries.addBankLabel(0x56CE, 0x3b, 'bnk_3b_56CE');
    dasmEntries.addBankLabel(0x56FD, 0x3b, 'bnk_3b_56FD');
    dasmEntries.addBankLabel(0x571A, 0x3b, 'bnk_3b_571A');
    dasmEntries.addBankLabel(0x5728, 0x3b, 'bnk_3b_5728');
    dasmEntries.addBankLabel(0x5743, 0x3b, 'bnk_3b_5743');
    dasmEntries.addBankLabel(0x5755, 0x3b, 'bnk_3b_5755');
    dasmEntries.addBankLabel(0x5767, 0x3b, 'bnk_3b_5767');
    dasmEntries.addBankLabel(0x5779, 0x3b, 'bnk_3b_5779');
    dasmEntries.addBankLabel(0x578B, 0x3b, 'bnk_3b_578B');
    dasmEntries.addBankLabel(0x57A8, 0x3b, 'bnk_3b_57A8');
    dasmEntries.addBankLabel(0x57B2, 0x3b, 'bnk_3b_57B2');
    dasmEntries.addBankLabel(0x57E2, 0x3b, 'bnk_3b_57E2');
    dasmEntries.addBankLabel(0x57F7, 0x3b, 'bnk_3b_57F7');
    dasmEntries.addBankLabel(0x5814, 0x3b, 'bnk_3b_5814');
    dasmEntries.addBankLabel(0x5827, 0x3b, 'bnk_3b_5827');
    dasmEntries.addBankLabel(0x583B, 0x3b, 'bnk_3b_583B');
    dasmEntries.addBankLabel(0x5857, 0x3b, 'bnk_3b_5857');
    dasmEntries.addBankLabel(0x586A, 0x3b, 'bnk_3b_586A');
    dasmEntries.addBankLabel(0x58CB, 0x3b, 'bnk_3b_58CB');
    dasmEntries.addBankLabel(0x58D8, 0x3b, 'bnk_3b_58D8');
    dasmEntries.addBankLabel(0x591C, 0x3b, 'bnk_3b_591C');
    dasmEntries.addBankLabel(0x5927, 0x3b, 'bnk_3b_5927');
    dasmEntries.addBankLabel(0x594A, 0x3b, 'bnk_3b_594A');
    dasmEntries.addBankLabel(0x5963, 0x3b, 'bnk_3b_5963');
    dasmEntries.addBankLabel(0x5973, 0x3b, 'bnk_3b_5973');

    // dasmEntries.addBankLabel( 0x598B, 0x3b, 'bnk_3b_598B' );
    dasmEntries.addTable(0x598B, 0x3b, 'tblSevenBytes', 2, 7);

    dasmEntries.addBankLabel(0x5999, 0x3b, 'bnk_3b_5999');
    dasmEntries.addBankLabel(0x59C3, 0x3b, 'bnk_3b_59C3');
    dasmEntries.addBankLabel(0x59D8, 0x3b, 'bnk_3b_59D8');

    dasmEntries.addBankLabel(0x5A01, 0x3b, 'bnk_3b_5A01');
    dasmEntries.addBankLabel(0x5A0D, 0x3b, 'bnk_3b_5A0D');
    dasmEntries.addBankLabel(0x5A24, 0x3b, 'bnk_3b_5A24');
    dasmEntries.addBankLabel(0x5A85, 0x3b, 'bnk_3b_5A85');
    dasmEntries.addBankLabel(0x5AB3, 0x3b, 'bnk_3b_5AB3');
    dasmEntries.addBankLabel(0x5AD3, 0x3b, 'bnk_3b_5AD3');
    dasmEntries.addBankLabel(0x5AEE, 0x3b, 'bnk_3b_5AEE');
    dasmEntries.addBankLabel(0x5AFE, 0x3b, 'bnk_3b_5AFE');
    dasmEntries.addBankLabel(0x5B0A, 0x3b, 'bnk_3b_5B0A');
    dasmEntries.addBankLabel(0x5B16, 0x3b, 'bnk_3b_5B16');
    dasmEntries.addBankLabel(0x5B27, 0x3b, 'bnk_3b_5B27');
    dasmEntries.addBankLabel(0x5B36, 0x3b, 'bnk_3b_5B36');
    dasmEntries.addBankLabel(0x5B43, 0x3b, 'bnk_3b_5B43');
    dasmEntries.addBankLabel(0x5B4E, 0x3b, 'bnk_3b_5B4E');
    dasmEntries.addBankLabel(0x5B61, 0x3b, 'bnk_3b_5B61');
    dasmEntries.addBankLabel(0x5B78, 0x3b, 'bnk_3b_5B78');
    dasmEntries.addBankLabel(0x5B80, 0x3b, 'bnk_3b_5B80');
    dasmEntries.addBankLabel(0x5B98, 0x3b, 'bnk_3b_5B98');
    dasmEntries.addBankLabel(0x5B9C, 0x3b, 'bnk_3b_5B9C');
    dasmEntries.addBankLabel(0x5BA4, 0x3b, 'bnk_3b_5BA4');
    dasmEntries.addBankLabel(0x5BAA, 0x3b, 'bnk_3b_5BAA');
    dasmEntries.addBankLabel(0x5BBC, 0x3b, 'bnk_3b_5BBC');
    dasmEntries.addBankLabel(0x5BC4, 0x3b, 'bnk_3b_5BC4');
    dasmEntries.addBankLabel(0x5BF1, 0x3b, 'bnk_3b_5BF1');
    dasmEntries.addBankLabel(0x5C1E, 0x3b, 'bnk_3b_5C1E');
    dasmEntries.addBankLabel(0x5C39, 0x3b, 'bnk_3b_5C39');
    dasmEntries.addBankLabel(0x5C48, 0x3b, 'bnk_3b_5C48');
    dasmEntries.addBankLabel(0x5C6E, 0x3b, 'bnk_3b_5C6E');
    dasmEntries.addBankLabel(0x5CA2, 0x3b, 'bnk_3b_5CA2');
    dasmEntries.addBankLabel(0x5CC4, 0x3b, 'bnk_3b_5CC4');
    dasmEntries.addBankLabel(0x5CEF, 0x3b, 'bnk_3b_5CEF');
    dasmEntries.addBankLabel(0x5D2F, 0x3b, 'bnk_3b_5D2F');
    dasmEntries.addBankLabel(0x5D3A, 0x3b, 'bnk_3b_5D3A');
    dasmEntries.addBankLabel(0x5D41, 0x3b, 'bnk_3b_5D41');
    dasmEntries.addBankLabel(0x5D64, 0x3b, 'bnk_3b_5D64');
    dasmEntries.addBankLabel(0x5D79, 0x3b, 'bnk_3b_5D79');
    dasmEntries.addBankLabel(0x5D96, 0x3b, 'bnk_3b_5D96');
    dasmEntries.addBankLabel(0x5DCC, 0x3b, 'bnk_3b_5DCC');
    dasmEntries.addBankLabel(0x5E02, 0x3b, 'bnk_3b_5E02');
    dasmEntries.addBankLabel(0x5E26, 0x3b, 'bnk_3b_5E26');
    dasmEntries.addBankLabel(0x5E62, 0x3b, 'bnk_3b_5E62');
    dasmEntries.addBankLabel(0x5E6D, 0x3b, 'bnk_3b_5E6D');
    dasmEntries.addBankLabel(0x5E7D, 0x3b, 'bnk_3b_5E7D');
    dasmEntries.addBankLabel(0x5E8A, 0x3b, 'bnk_3b_5E8A');
    dasmEntries.addBankLabel(0x5E93, 0x3b, 'bnk_3b_5E93');
    dasmEntries.addBankLabel(0x5EAB, 0x3b, 'bnk_3b_5EAB');
    dasmEntries.addBankLabel(0x5EBD, 0x3b, 'bnk_3b_5EBD');
    dasmEntries.addBankLabel(0x5EC3, 0x3b, 'bnk_3b_5EC3');
    dasmEntries.addBankLabel(0x5EE0, 0x3b, 'bnk_3b_5EE0');
    dasmEntries.addBankLabel(0x5EE3, 0x3b, 'bnk_3b_5EE3');
    dasmEntries.addBankLabel(0x5F0B, 0x3b, 'bnk_3b_5F0B');
    dasmEntries.addBankLabel(0x5F0E, 0x3b, 'bnk_3b_5F0E');
    dasmEntries.addBankLabel(0x5F11, 0x3b, 'bnk_3b_5F11');
    dasmEntries.addBankLabel(0x5F36, 0x3b, 'bnk_3b_5F36');
    dasmEntries.addBankLabel(0x5F92, 0x3b, 'bnk_3b_5F92');

    dasmEntries.addBankLabel(0x600E, 0x3b, 'bnk_3b_600E');
    dasmEntries.addBankLabel(0x6019, 0x3b, 'bnk_3b_6019');
    dasmEntries.addBankLabel(0x6028, 0x3b, 'bnk_3b_6028');
    dasmEntries.addBankLabel(0x6057, 0x3b, 'bnk_3b_6057');
    dasmEntries.addBankLabel(0x6060, 0x3b, 'bnk_3b_6060');
    dasmEntries.addBankLabel(0x6065, 0x3b, 'bnk_3b_6065');

    dasmEntries.addTable(0x60b6, 0x3b, 'tblUnknown', 22, 2);
    dasmEntries.addTable(0x60e2, 0x3b, 'tblwpc_bnk_3b_60e2', 4, 2);
    dasmEntries.addBankLabel(0x60ea, 0x3b, 'bnk_3b_60ea');

    dasmEntries.addBankLabel( 0x6125, 0x3b, 'bnk_3b_6125' );
    dasmEntries.addBankLabel( 0x6136, 0x3b, 'bnk_3b_6136' );
    dasmEntries.addBankLabel( 0x613F, 0x3b, 'bnk_3b_613F' );
    dasmEntries.addBankLabel( 0x614A, 0x3b, 'bnk_3b_614A' );
    dasmEntries.addBankLabel( 0x614D, 0x3b, 'bnk_3b_614D' );
    dasmEntries.addBankLabel( 0x61B3, 0x3b, 'bnk_3b_61B3' );
    dasmEntries.addBankLabel( 0x61C3, 0x3b, 'bnk_3b_61C3' );
    dasmEntries.addBankLabel( 0x61CC, 0x3b, 'bnk_3b_61CC' );
    dasmEntries.addBankLabel( 0x6229, 0x3b, 'bnk_3b_6229' );
    
    dasmEntries.addTable(0x6291, 0x3b, 'tblUnknown', 19, 5);
    dasmEntries.addTable(0x62f0, 0x3b, 'tblHdrUnknown', 1, 1);
    dasmEntries.addTable(0x62f1, 0x3b, 'tblUnknown', 0x10, 2);

    dasmEntries.addBankLabel(0x6311, 0x3b, 'bnk_3b_6065');
    dasmEntries.addBankLabel(0x6318, 0x3b, 'bnk_3b_6318');
    dasmEntries.addBankLabel(0x6334, 0x3b, 'Process_SoundScript_CHAIN_Operator');
    dasmEntries.addTable(0x6364, 0x3b, 'tblJSRAddresses', 21, 2);
    dasmEntries.addBankLabel(0x638E, 0x3b, 'bnk_3b_638E');
    dasmEntries.addBankLabel(0x639C, 0x3b, 'bnk_3b_639C');
    dasmEntries.addBankLabel(0x63AA, 0x3b, 'bnk_3b_63AA');
    dasmEntries.addBankLabel(0x63B2, 0x3b, 'bnk_3b_63B2');
    dasmEntries.addBankLabel(0x63C2, 0x3b, 'bnk_3b_63C2');
    dasmEntries.addBankLabel(0x63D2, 0x3b, 'bnk_3b_63D2');
    dasmEntries.addBankLabel(0x63E2, 0x3b, 'bnk_3b_63E2');
    dasmEntries.addBankLabel(0x63F2, 0x3b, 'bnk_3b_63F2');
    dasmEntries.addBankLabel(0x6402, 0x3b, 'bnk_3b_6402');
    dasmEntries.addBankLabel(0x6412, 0x3b, 'bnk_3b_6412');
    dasmEntries.addBankLabel(0x641B, 0x3b, 'bnk_3b_641B');
    dasmEntries.addBankLabel(0x6428, 0x3b, 'bnk_3b_6428');
    dasmEntries.addBankLabel(0x6436, 0x3b, 'bnk_3b_6436');

    dasmEntries.addTable(0x6449, 0x3b, 'tblZeros', 12, 2);
    dasmEntries.addTableWpc(0x6461, 0x3b, 'tblwpc3Byte');

    dasmEntries.addBankLabel(0x6473, 0x3b, 'bnk_3b_6473');
    dasmEntries.addBankLabel(0x647F, 0x3b, 'bnk_3b_647F');
    dasmEntries.addBankLabel(0x64CB, 0x3b, 'bnk_3b_64CB');
    dasmEntries.addBankLabel(0x64E9, 0x3b, 'bnk_3b_64E9');
    dasmEntries.addBankLabel(0x64FB, 0x3b, 'bnk_3b_64FB');

    dasmEntries.addTable(0x6529, 0x3b, 'tblLampPatterns', 12, 8);

    dasmEntries.addBankLabel(0x6589, 0x3b, 'LoadLampPattern_B');

    dasmEntries.addBankLabel(0x65ab, 0x3b, 'bnk_3b_65ab');
    dasmEntries.addBankLabel(0x65bd, 0x3b, 'bnk_3b_65BD');
    dasmEntries.addBankLabel(0x65d5, 0x3b, 'bnk_3b_65D5');
    dasmEntries.addBankLabel(0x65f7, 0x3b, 'bnk_3b_65f7');
    dasmEntries.addBankLabel(0x6609, 0x3b, 'bnk_3b_6609');
    dasmEntries.addBankLabel(0x6618, 0x3b, 'bnk_3b_6618');
    dasmEntries.addBankLabel(0x662A, 0x3b, 'bnk_3b_662A');
    dasmEntries.addBankLabel(0x664C, 0x3b, 'bnk_3b_664C');
    dasmEntries.addBankLabel(0x665E, 0x3b, 'bnk_3b_665E');
    dasmEntries.addBankLabel(0x6680, 0x3b, 'bnk_3b_6680');
    dasmEntries.addBankLabel(0x6689, 0x3b, 'bnk_3b_6689');
    dasmEntries.addBankLabel(0x669E, 0x3b, 'bnk_3b_669E');
    dasmEntries.addBankLabel(0x66B3, 0x3b, 'bnk_3b_66B3');
    dasmEntries.addBankLabel(0x66CF, 0x3b, 'bnk_3b_66CF');

    dasmEntries.addBankLabel( 0x6609, 0x3b, 'bnk_3b_6609' );
    dasmEntries.addBankLabel( 0x6618, 0x3b, 'bnk_3b_6618' );
    dasmEntries.addBankLabel( 0x662A, 0x3b, 'bnk_3b_662A' );
    dasmEntries.addBankLabel( 0x664C, 0x3b, 'bnk_3b_664C' );
    dasmEntries.addBankLabel( 0x665E, 0x3b, 'bnk_3b_665E' );
    dasmEntries.addBankLabel( 0x6680, 0x3b, 'bnk_3b_6680' );
    dasmEntries.addBankLabel( 0x6689, 0x3b, 'bnk_3b_6689' );
    dasmEntries.addBankLabel( 0x669E, 0x3b, 'bnk_3b_669E' );
    dasmEntries.addBankLabel( 0x66B3, 0x3b, 'bnk_3b_66B3' );
    dasmEntries.addBankLabel( 0x66CF, 0x3b, 'bnk_3b_66CF' );
    dasmEntries.addBankLabel( 0x6704, 0x3b, 'bnk_3b_6704' );
    dasmEntries.addBankLabel( 0x678B, 0x3b, 'bnk_3b_678B' );
    dasmEntries.addBankLabel( 0x6793, 0x3b, 'bnk_3b_6793' );
    dasmEntries.addBankLabel( 0x679B, 0x3b, 'bnk_3b_679B' );
    dasmEntries.addBankLabel( 0x67A3, 0x3b, 'bnk_3b_67A3' );
    dasmEntries.addBankLabel( 0x67AB, 0x3b, 'bnk_3b_67AB' );
    dasmEntries.addBankLabel( 0x67D7, 0x3b, 'bnk_3b_67D7' );
    dasmEntries.addBankLabel( 0x6803, 0x3b, 'bnk_3b_6803' );
    dasmEntries.addBankLabel( 0x680B, 0x3b, 'bnk_3b_680B' );
    dasmEntries.addBankLabel( 0x6837, 0x3b, 'bnk_3b_6837' );
    dasmEntries.addBankLabel( 0x6853, 0x3b, 'bnk_3b_6853' );
    dasmEntries.addBankLabel( 0x6856, 0x3b, 'bnk_3b_6856' );
    dasmEntries.addBankLabel( 0x6859, 0x3b, 'bnk_3b_6859' );
    dasmEntries.addBankLabel( 0x686B, 0x3b, 'bnk_3b_686B' );
    dasmEntries.addBankLabel( 0x687D, 0x3b, 'bnk_3b_687D' );

    dasmEntries.addTable(0x6894, 0x3b, 'tbl100HexVals', 8, 2);

    dasmEntries.addBankLabel( 0x68a4, 0x3b, 'bnk_3b_68a4' );

    dasmEntries.addTable(0x68ea, 0x3b, 'tbl10000HexVals', 4, 4);

    dasmEntries.addBankLabel( 0x68fa, 0x3b, 'bnk_3b_68fa' );

    dasmEntries.addTable(0x6940, 0x3b, 'tbl1000000HexVals', 4, 4);

    dasmEntries.addBankLabel( 0x6950, 0x3b, 'bnk_3b_6950' );

    dasmEntries.addTable(0x6996, 0x3b, 'tblHexVals', 4, 4);

    dasmEntries.addBankLabel( 0x69a6, 0x3b, 'bnk_3b_69a6' );

    dasmEntries.addTable(0x69ec, 0x3b, 'tblHexVals', 4, 4);

    dasmEntries.addBankLabel( 0x69fc, 0x3b, 'bnk_3b_69fc' );

    dasmEntries.addTable(0x6a42, 0x3b, 'tblHexVals', 4, 4);

    dasmEntries.addBankLabel( 0x6a52, 0x3b, 'bnk_3b_6a52' );

    dasmEntries.addBankLabel( 0x6A8F, 0x3b, 'bnk_3b_6A8F' );

    dasmEntries.addBankLabel( 0x6A9B, 0x3b, 'bnk_3b_6A9B' );
    dasmEntries.addBankLabel( 0x6AC7, 0x3b, 'bnk_3b_6AC7' );
    dasmEntries.addBankLabel( 0x6AE2, 0x3b, 'bnk_3b_6AE2' );
    dasmEntries.addBankLabel( 0x6AF4, 0x3b, 'bnk_3b_6AF4' );
    dasmEntries.addBankLabel( 0x6B30, 0x3b, 'bnk_3b_6B30' );
    dasmEntries.addBankLabel( 0x6B61, 0x3b, 'bnk_3b_6B61' );
    dasmEntries.addBankLabel( 0x6BC6, 0x3b, 'bnk_3b_6BC6' );
    dasmEntries.addBankLabel( 0x6C00, 0x3b, 'bnk_3b_6C00' );
    dasmEntries.addBankLabel( 0x6CB0, 0x3b, 'bnk_3b_6CB0' );
    dasmEntries.addBankLabel( 0x6CC2, 0x3b, 'bnk_3b_6CC2' );
    dasmEntries.addBankLabel( 0x6CCE, 0x3b, 'bnk_3b_6CCE' );
    dasmEntries.addBankLabel( 0x6CE0, 0x3b, 'bnk_3b_6CE0' );
    dasmEntries.addBankLabel( 0x6CEC, 0x3b, 'bnk_3b_6CEC' );
    dasmEntries.addBankLabel( 0x6CFE, 0x3b, 'bnk_3b_6CFE' );
    dasmEntries.addBankLabel( 0x6D0A, 0x3b, 'bnk_3b_6D0A' );
    dasmEntries.addBankLabel( 0x6D47, 0x3b, 'bnk_3b_6D47' );
    dasmEntries.addBankLabel( 0x6D53, 0x3b, 'bnk_3b_6D53' );
    dasmEntries.addBankLabel( 0x6D92, 0x3b, 'bnk_3b_6D92' );
    dasmEntries.addBankLabel( 0x6DF3, 0x3b, 'bnk_3b_6DF3' );
    dasmEntries.addBankLabel( 0x6DFF, 0x3b, 'bnk_3b_6DFF' );
    dasmEntries.addBankLabel( 0x6E62, 0x3b, 'bnk_3b_6E62' );
    dasmEntries.addBankLabel( 0x6E6C, 0x3b, 'bnk_3b_6E6C' );

    dasmEntries.addBankLabel( 0x6E88, 0x3b, 'bnk_3b_6E88' );
    dasmEntries.addBankLabel( 0x6E92, 0x3b, 'bnk_3b_6E92' );
    dasmEntries.addBankLabel( 0x6EE0, 0x3b, 'bnk_3b_6EE0' );
    dasmEntries.addBankLabel( 0x6F0C, 0x3b, 'bnk_3b_6F0C' );
    dasmEntries.addBankLabel( 0x6F2F, 0x3b, 'bnk_3b_6F2F' );
    dasmEntries.addBankLabel( 0x6F66, 0x3b, 'bnk_3b_6F66' );
    dasmEntries.addBankLabel( 0x6F76, 0x3b, 'bnk_3b_6F76' );
    dasmEntries.addBankLabel( 0x6FC9, 0x3b, 'bnk_3b_6FC9' );
    dasmEntries.addBankLabel( 0x6FD4, 0x3b, 'bnk_3b_6FD4' );
    dasmEntries.addBankLabel( 0x6FE8, 0x3b, 'bnk_3b_6FE8' );
    dasmEntries.addBankLabel( 0x701E, 0x3b, 'bnk_3b_701E' );
    dasmEntries.addBankLabel( 0x70A8, 0x3b, 'bnk_3b_70A8' );
    dasmEntries.addBankLabel( 0x70DF, 0x3b, 'bnk_3b_70DF' );
    dasmEntries.addBankLabel( 0x70F8, 0x3b, 'bnk_3b_70F8' );
    dasmEntries.addBankLabel( 0x70FC, 0x3b, 'bnk_3b_70FC' );
    dasmEntries.addBankLabel( 0x7131, 0x3b, 'bnk_3b_7131' );
    dasmEntries.addBankLabel( 0x714A, 0x3b, 'bnk_3b_714A' );
    dasmEntries.addBankLabel( 0x714E, 0x3b, 'bnk_3b_714E' );
    dasmEntries.addBankLabel( 0x718D, 0x3b, 'bnk_3b_718D' );
    dasmEntries.addBankLabel( 0x71A6, 0x3b, 'bnk_3b_71A6' );
    dasmEntries.addBankLabel( 0x71AF, 0x3b, 'bnk_3b_71AF' );
    dasmEntries.addBankLabel( 0x71B3, 0x3b, 'bnk_3b_71B3' );
    dasmEntries.addBankLabel( 0x71F6, 0x3b, 'bnk_3b_71F6' );
    dasmEntries.addBankLabel( 0x7211, 0x3b, 'bnk_3b_7211' );
    dasmEntries.addBankLabel( 0x721E, 0x3b, 'bnk_3b_721E' );
    dasmEntries.addBankLabel( 0x7279, 0x3b, 'bnk_3b_7279' );

    dasmEntries.addBankLabel( 0x729B, 0x3b, 'bnk_3b_729B' );
    dasmEntries.addBankLabel( 0x72C5, 0x3b, 'bnk_3b_72C5' );
    dasmEntries.addBankLabel( 0x72CD, 0x3b, 'bnk_3b_72CD' );
    dasmEntries.addBankLabel( 0x72DC, 0x3b, 'bnk_3b_72DC' );
    dasmEntries.addTable(0x72fc, 0x3b, 'tblVals', 3, 2);
    dasmEntries.addBankLabel( 0x7302, 0x3b, 'bnk_3b_7302' );
    dasmEntries.addBankLabel( 0x7327, 0x3b, 'bnk_3b_7327' );
    dasmEntries.addBankLabel( 0x7360, 0x3b, 'bnk_3b_7360' );
    dasmEntries.addBankLabel( 0x7399, 0x3b, 'bnk_3b_7399' );
    dasmEntries.addBankLabel( 0x73E4, 0x3b, 'bnk_3b_73E4' );

    dasmEntries.addTable(0x73f2, 0x3b, 'tblHex1dVals', 20, 2);
    dasmEntries.addTable(0x741a, 0x3b, 'tblHex0dVals', 4, 2);
    // dasmEntries.addTable(0x7422, 0x3b, 'tblHex34Val', 1, 1);

    dasmEntries.addBankLabel( 0x7422, 0x3b, 'bnk_3b_7422' );
    dasmEntries.addBankLabel( 0x7460, 0x3b, 'bnk_3b_7460' );
    dasmEntries.addTable(0x74ab, 0x3b, 'tblHex1dVals', 11, 2);

    dasmEntries.addBankLabel( 0x74C1, 0x3b, 'bnk_3b_74C1' );
    dasmEntries.addBankLabel( 0x75CE, 0x3b, 'bnk_3b_75CE' );
    dasmEntries.addBankLabel( 0x75D5, 0x3b, 'bnk_3b_75D5' );
    dasmEntries.addBankLabel( 0x765C, 0x3b, 'bnk_3b_765C' );
    dasmEntries.addBankLabel( 0x7685, 0x3b, 'bnk_3b_7685' );
    dasmEntries.addBankLabel( 0x76D7, 0x3b, 'bnk_3b_76D7' );
    dasmEntries.addBankLabel( 0x76FF, 0x3b, 'bnk_3b_76FF' );
    dasmEntries.addBankLabel( 0x775F, 0x3b, 'bnk_3b_775F' );
    dasmEntries.addBankLabel( 0x77F0, 0x3b, 'bnk_3b_77F0' );
    dasmEntries.addBankLabel( 0x7830, 0x3b, 'bnk_3b_7830' );
    dasmEntries.addBankLabel( 0x789C, 0x3b, 'bnk_3b_789C' );
    dasmEntries.addBankLabel( 0x7986, 0x3b, 'bnk_3b_7986' );
    dasmEntries.addBankLabel( 0x7995, 0x3b, 'bnk_3b_7995' );
    dasmEntries.addBankLabel( 0x79A4, 0x3b, 'bnk_3b_79A4' );
    dasmEntries.addBankLabel( 0x79A5, 0x3b, 'bnk_3b_79A5' );
    dasmEntries.addBankLabel( 0x7A4D, 0x3b, 'bnk_3b_7A4D' );
    dasmEntries.addBankLabel( 0x7A62, 0x3b, 'bnk_3b_7A62' );
    dasmEntries.addBankLabel( 0x7A76, 0x3b, 'bnk_3b_7A76' );
    dasmEntries.addBankLabel( 0x7A8C, 0x3b, 'bnk_3b_7A8C' );
    dasmEntries.addBankLabel( 0x7B0E, 0x3b, 'bnk_3b_7B0E' );
    dasmEntries.addBankLabel( 0x7B15, 0x3b, 'bnk_3b_7B15' );
    dasmEntries.addBankLabel( 0x7B26, 0x3b, 'bnk_3b_7B26' );
    dasmEntries.addBankLabel( 0x7B4F, 0x3b, 'bnk_3b_7B4F' );
    dasmEntries.addBankLabel( 0x7B5A, 0x3b, 'bnk_3b_7B5A' );
    dasmEntries.addBankLabel( 0x7B65, 0x3b, 'bnk_3b_7B65' );

    dasmEntries.addTable(0x7b67, 0x3b, 'tblVals', 2, 2);

    dasmEntries.addBankLabel( 0x7B6b, 0x3b, 'bnk_3b_7B6b' );
    dasmEntries.addBankLabel( 0x7B9B, 0x3b, 'bnk_3b_7B9B' );
    dasmEntries.addBankLabel( 0x7BA8, 0x3b, 'bnk_3b_7BA8' );
    dasmEntries.addBankLabel( 0x7BC0, 0x3b, 'bnk_3b_7BC0' );
    dasmEntries.addBankLabel( 0x7C0E, 0x3b, 'bnk_3b_7C0E' );
    dasmEntries.addBankLabel( 0x7C20, 0x3b, 'bnk_3b_7C20' );
    dasmEntries.addBankLabel( 0x7C3B, 0x3b, 'bnk_3b_7C3B' );
    dasmEntries.addBankLabel( 0x7C58, 0x3b, 'bnk_3b_7C58' );
    dasmEntries.addBankLabel( 0x7B9B, 0x3b, 'bnk_3b_7B9B' );
    dasmEntries.addBankLabel( 0x7BA8, 0x3b, 'bnk_3b_7BA8' );
    dasmEntries.addBankLabel( 0x7BC0, 0x3b, 'bnk_3b_7BC0' );
    dasmEntries.addBankLabel( 0x7C0E, 0x3b, 'bnk_3b_7C0E' );
    dasmEntries.addBankLabel( 0x7C20, 0x3b, 'bnk_3b_7C20' );
    dasmEntries.addBankLabel( 0x7C3B, 0x3b, 'bnk_3b_7C3B' );
    dasmEntries.addBankLabel( 0x7C58, 0x3b, 'bnk_3b_7C58' );
    dasmEntries.addBankLabel( 0x7C83, 0x3b, 'bnk_3b_7C83' );
    dasmEntries.addBankLabel( 0x7C98, 0x3b, 'bnk_3b_7C98' );
    dasmEntries.addBankLabel( 0x7CAA, 0x3b, 'bnk_3b_7CAA' );
    dasmEntries.addBankLabel( 0x7CDE, 0x3b, 'bnk_3b_7CDE' );
    dasmEntries.addBankLabel( 0x7CF2, 0x3b, 'bnk_3b_7CF2' );
    dasmEntries.addBankLabel( 0x7CFE, 0x3b, 'bnk_3b_7CFE' );
    dasmEntries.addBankLabel( 0x7D10, 0x3b, 'bnk_3b_7D10' );
    dasmEntries.addBankLabel( 0x7D22, 0x3b, 'bnk_3b_7D22' );
    dasmEntries.addBankLabel( 0x7D28, 0x3b, 'bnk_3b_7D28' );
    dasmEntries.addBankLabel( 0x7D46, 0x3b, 'bnk_3b_7D46' );

    dasmEntries.addTableWpc( 0x7d9b, 0x3b, 'tblwpc_bnk_3b_7d9b' );
    dasmEntries.addTableWpc( 0x7db3, 0x3b, 'tblwpc_bnk_3b_7db3' );

    dasmEntries.addTable(0x7dda, 0x3b, 'tblVals', 3, 3);
    dasmEntries.addBankLabel( 0x7De3, 0x3b, 'bnk_3b_7De3' );

    dasmEntries.addTable(0x7e1a, 0x3b, 'tblVals', 3, 3);
    dasmEntries.addBankLabel( 0x7e23, 0x3b, 'bnk_3b_7e23' );
    dasmEntries.addBankLabel( 0x7e2d, 0x3b, 'bnk_3b_7e2d' );
    dasmEntries.addBankLabel( 0x7e31, 0x3b, 'bnk_3b_7e31' );
    dasmEntries.addBankLabel( 0x7E5C, 0x3b, 'bnk_3b_7E5C' );
    dasmEntries.addBankLabel( 0x7F08, 0x3b, 'bnk_3b_7F08' );
    dasmEntries.addBankLabel( 0x7F32, 0x3b, 'bnk_3b_7F32' );
    dasmEntries.addBankLabel( 0x7F3A, 0x3b, 'bnk_3b_7F3A' );
    dasmEntries.addBankLabel( 0x7F64, 0x3b, 'bnk_3b_7F64' );
    dasmEntries.addBankLabel( 0x7FA9, 0x3b, 'bnk_3b_7FA9' );
    dasmEntries.addBankLabel( 0x7FE8, 0x3b, 'bnk_3b_7FE8' );    
}

function getDasmEntries_bnk_3c( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x3C, 'pageMarker_bnk_3C', 1, 1 );
    dasmEntries.addTableWpc( 0x4001, 0x3C, 'tblStringAddrEnglish_3c_4001' );
    dasmEntries.addTableStrings( 0x43F6, 0x3C, 'tblStringsEnglish_3c_43F6', 0x14d2 );
    dasmEntries.addTableWpc( 0x58c8, 0x3C, 'tblStringAddrGerman_3C_58c8' );
    dasmEntries.addTableStrings( 0x5CBD, 0x3C, 'tblStringsGerman_3c_5CBD', 3298 );
    dasmEntries.addTable( 0x699F, 0x3C, 'tblStringsGerman_3c_5CBD-end', 1, 1 );
    dasmEntries.addTableWpc( 0x69A0, 0x3C, 'tblStringAddrSpanish_3c_69A0' );
    dasmEntries.addTableStrings( 0x6D95, 0x3C, 'tblStringsSpanish_3c_6d95', 124 );
    dasmEntries.addTable( 0x6E11, 0x3C, 'tblStringsSpanish_3c_6d95-end', 1, 1 );
    dasmEntries.addTableWpc( 0x6E12, 0x3C, 'tblElevenBytes_BankAddress-3c', 7 );

    dasmEntries.addTableWpc( 0x71F3, 0x3C, 'tblTasks_BankAddress-3c',  2);
    // dasmEntries.addTable( 0x74E4, 0x3C, 'tblTasks_LinkedGame_BankAddress-3c', 13, 5 );
    dasmEntries.addBankLabel( 0x7525, 0x3c );
    dasmEntries.addBankLabel( 0x754d, 0x3c );
    dasmEntries.addBankLabel( 0x7566, 0x3c );
    dasmEntries.addBankLabel( 0x758b, 0x3c );
    dasmEntries.addBankLabel( 0x7599, 0x3c );
    dasmEntries.addBankLabel( 0x75dc, 0x3c );
    dasmEntries.addBankLabel( 0x75fc, 0x3c );

    dasmEntries.addBankLabel( 0x7626, 0x3c );
    dasmEntries.addBankLabel( 0x7634, 0x3c );
    dasmEntries.addBankLabel( 0x763d, 0x3c );
    dasmEntries.addBankLabel( 0x7675, 0x3c );
    dasmEntries.addBankLabel( 0x7686, 0x3c );
    dasmEntries.addBankLabel( 0x76e1, 0x3c );

    dasmEntries.addBankLabel( 0x7740, 0x3c );
    dasmEntries.addBankLabel( 0x7752, 0x3c );
    dasmEntries.addBankLabel( 0x77fd, 0x3c );

    dasmEntries.addBankLabel( 0x7821, 0x3c );
    dasmEntries.addBankLabel( 0x7851, 0x3c );
    dasmEntries.addTable( 0x7889, 0x3C, 'tbl2Bytes', 3, 2 );
    dasmEntries.addBankLabel( 0x788f, 0x3c );
    dasmEntries.addBankLabel( 0x78cf, 0x3c );
    // dasmEntries.addBankLabel( 0x781f, 0x3c );
    dasmEntries.addBankLabel( 0x7831, 0x3c );

    dasmEntries.addBankLabel( 0x791f, 0x3c );
    dasmEntries.addBankLabel( 0x7931, 0x3c );
    dasmEntries.addBankLabel( 0x7954, 0x3c );
    dasmEntries.addBankLabel( 0x796c, 0x3c );
    dasmEntries.addBankLabel( 0x79d6, 0x3c );

    dasmEntries.addBankLabel( 0x7a75, 0x3c );
    dasmEntries.addBankLabel( 0x7a86, 0x3c );
    dasmEntries.addBankLabel( 0x7aca, 0x3c );
    dasmEntries.addBankLabel( 0x7ae8, 0x3c );

    dasmEntries.addBankLabel( 0x7b0e, 0x3c );
    dasmEntries.addBankLabel( 0x7b1f, 0x3c );
    dasmEntries.addBankLabel( 0x7b45, 0x3c );
    dasmEntries.addTable( 0x7b56, 0x3C, 'filler', 149, 8 );
    dasmEntries.addTable( 0x7FFE, 0x3C, 'filler', 1, 2 );
}

function getDasmEntries_bnk_3d( dasmEntries ) {

    dasmEntries.addTable( 0x4000, 0x3D, 'pageMarker_bnk_3D', 1, 1 );
    dasmEntries.addTableWpc( 0x4001, 0x3D, 'tblStringAddr_ENGLISH_3d_4001' );

    dasmEntries.addTableStrings( 0x421A, 0x3D, 'tblStrings_ENGLISH_3d_421A', 3212 );

    dasmEntries.addTable( 0x4EA6, 0x3D, 'tblStrings_ENGLISH_3d_421A-end', 1, 1 );
    dasmEntries.addTableWpc( 0x4EA7, 0x3D, 'tblStringAddr_GERMAN_3d_4EA7' );

    dasmEntries.addTableStrings( 0x50C0, 0x3D, 'tblStrings_GERMAN_3d_50C0', 792 );

    dasmEntries.addTable( 0x53D8, 0x3D, 'tblStrings_GERMAN_3d_50C0-end', 1, 1 );
    dasmEntries.addTableWpc( 0x53D9, 0x3D, 'tblStringAddr_FRENCH_3d_53D9' );

    dasmEntries.addTableStrings( 0x55F2, 0x3D, 'tblStrings_FRENCH_3d_55F2', 2089 );

    dasmEntries.addTable( 0x5E1B, 0x3D, 'tblStrings_FRENCH_3d_55F2-end', 1, 1 );
    dasmEntries.addTableWpc( 0x5E1C, 0x3D, 'tblStringAddr_SPANISH_3d_5E1C' );

    dasmEntries.addTableStrings( 0x6035, 0x3D, 'tblStrings_SPANISH_3d_6035', 49 );
    dasmEntries.addTable( 0x6066, 0x3D, 'tblStrings_SPANISH_3d_6035-end', 1, 1 );
    dasmEntries.addBankLabel( 0x6067, 0x3d );
    dasmEntries.addBankLabel( 0x6071, 0x3d );
    dasmEntries.addBankLabel( 0x6079, 0x3d );
    dasmEntries.addBankLabel( 0x60a1, 0x3d );
    dasmEntries.addBankLabel( 0x60d7, 0x3d );
    dasmEntries.addBankLabel( 0x60eb, 0x3d );
    dasmEntries.addBankLabel( 0x60f3, 0x3d );

    dasmEntries.addTable( 0x6107, 0x3D, 'tblAddresses', 3, 2 );
    dasmEntries.addBankLabel( 0x6110, 0x3d );
    dasmEntries.addBankLabel( 0x6136, 0x3d );
    dasmEntries.addBankLabel( 0x6150, 0x3d );
    dasmEntries.addBankLabel( 0x61d4, 0x3d );
    dasmEntries.addBankLabel( 0x61db, 0x3d );

    dasmEntries.addBankLabel( 0x6246, 0x3d );
    dasmEntries.addBankLabel( 0x62b6, 0x3d );
    dasmEntries.addBankLabel( 0x62e1, 0x3d );

    dasmEntries.addBankLabel( 0x6327, 0x3d );
    dasmEntries.addBankLabel( 0x6345, 0x3d );
    dasmEntries.addBankLabel( 0x63bc, 0x3d, 'DEBUG_test_Bank18_IsPresent' );
    dasmEntries.addBankLabel( 0x63dd, 0x3d );

    dasmEntries.addBankLabel( 0x6408, 0x3d );
    dasmEntries.addBankLabel( 0x6427, 0x3d );
    dasmEntries.addBankLabel( 0x6443, 0x3d );
    dasmEntries.addTable( 0x6458, 0x3D, 'tblSysHookAddressPointers', 47, 2 );
    dasmEntries.addBankLabel( 0x64b6, 0x3d );
    dasmEntries.addBankLabel( 0x64c3, 0x3d );
    dasmEntries.addBankLabel( 0x64d1, 0x3d );
    dasmEntries.addBankLabel( 0x64e1, 0x3d );
    dasmEntries.addBankLabel( 0x64f2, 0x3d, 'SetDMDActivePage_A' );
    dasmEntries.addBankLabel( 0x64f8, 0x3d, 'SetDMDActivePage_HighPage' );

    dasmEntries.addBankLabel( 0x6502, 0x3d, 'clear_ram_170E_thru_185E' );
    dasmEntries.addBankLabel( 0x653f, 0x3d, 'clear_ram_170E_thru_190E' );
    dasmEntries.addBankLabel( 0x657d, 0x3d );
    dasmEntries.addBankLabel( 0x6599, 0x3d, 'clear_ram_at_U_for_B_times_12bytes' );
    dasmEntries.addBankLabel( 0x65b3, 0x3d );
    dasmEntries.addBankLabel( 0x65c9, 0x3d );

    dasmEntries.addImage( 0x65e0, 0x3d, 'img_667' );
    dasmEntries.addImage( 0x673d, 0x3d, 'img_666' );

    dasmEntries.addBankLabel( 0x6df3, 0x3d );
    dasmEntries.addBankLabel( 0x6dff, 0x3d );
    dasmEntries.addBankLabel( 0x6e15, 0x3d );
    dasmEntries.addBankLabel( 0x6e25, 0x3d );
    dasmEntries.addBankLabel( 0x6e36, 0x3d );
    dasmEntries.addBankLabel( 0x6e55, 0x3d );
    dasmEntries.addBankLabel( 0x6e8a, 0x3d );
    dasmEntries.addBankLabel( 0x6ea2, 0x3d );
    dasmEntries.addBankLabel( 0x6eab, 0x3d );
    dasmEntries.addBankLabel( 0x6ec1, 0x3d );
    dasmEntries.addBankLabel( 0x6f47, 0x3d );
    dasmEntries.addBankLabel( 0x6f57, 0x3d );
    dasmEntries.addBankLabel( 0x6f62, 0x3d );
    dasmEntries.addBankLabel( 0x6f7e, 0x3d );
    dasmEntries.addBankLabel( 0x6f89, 0x3d );
    dasmEntries.addBankLabel( 0x6f97, 0x3d );
    dasmEntries.addBankLabel( 0x6fa8, 0x3d );
    dasmEntries.addBankLabel( 0x6fcf, 0x3d );
    dasmEntries.addBankLabel( 0x6fe6, 0x3d );
    dasmEntries.addBankLabel( 0x6ffe, 0x3d );

    dasmEntries.addBankLabel( 0x7045, 0x3d );
    dasmEntries.addBankLabel( 0x704c, 0x3d );
    dasmEntries.addBankLabel( 0x7090, 0x3d );
    dasmEntries.addBankLabel( 0x709b, 0x3d );

    dasmEntries.addBankLabel( 0x7105, 0x3d );
    dasmEntries.addBankLabel( 0x7125, 0x3d );
    dasmEntries.addBankLabel( 0x713d, 0x3d );
    dasmEntries.addBankLabel( 0x7170, 0x3d );
    dasmEntries.addBankLabel( 0x717e, 0x3d );
    dasmEntries.addBankLabel( 0x718a, 0x3d );
    dasmEntries.addBankLabel( 0x71c5, 0x3d );
    dasmEntries.addBankLabel( 0x71ce, 0x3d );
    dasmEntries.addBankLabel( 0x71e9, 0x3d );

    dasmEntries.addBankLabel( 0x7221, 0x3d );
    dasmEntries.addBankLabel( 0x7250, 0x3d );
    dasmEntries.addBankLabel( 0x72FF, 0x3d );

    dasmEntries.addBankLabel( 0x730d, 0x3d );
    dasmEntries.addBankLabel( 0x7383, 0x3d );
    dasmEntries.addBankLabel( 0x73a6, 0x3d );

    dasmEntries.addBankLabel( 0x7400, 0x3d );
    dasmEntries.addBankLabel( 0x74a7, 0x3d );
    dasmEntries.addBankLabel( 0x74c9, 0x3d );
    dasmEntries.addBankLabel( 0x74d2, 0x3d );
    dasmEntries.addBankLabel( 0x74e0, 0x3d );
    dasmEntries.addBankLabel( 0x74eb, 0x3d );
    dasmEntries.addBankLabel( 0x74f6, 0x3d );

    dasmEntries.addBankLabel( 0x751c, 0x3d );
    dasmEntries.addBankLabel( 0x752a, 0x3d );
    dasmEntries.addBankLabel( 0x759a, 0x3d );
    dasmEntries.addBankLabel( 0x75bd, 0x3d );
    dasmEntries.addBankLabel( 0x7605, 0x3d );
    dasmEntries.addBankLabel( 0x7680, 0x3d );
    dasmEntries.addBankLabel( 0x7684, 0x3d );
    dasmEntries.addBankLabel( 0x7692, 0x3d );
    dasmEntries.addBankLabel( 0x76bc, 0x3d );
    dasmEntries.addBankLabel( 0x76dd, 0x3d );

    dasmEntries.addBankLabel( 0x7703, 0x3d );
    dasmEntries.addBankLabel( 0x7710, 0x3d );
    dasmEntries.addTable( 0x771D, 0x3D, 'tblAddressPointers', 12, 2 );
    dasmEntries.addBankLabel( 0x7735, 0x3d );
    dasmEntries.addBankLabel( 0x7751, 0x3d );
    dasmEntries.addBankLabel( 0x7767, 0x3d );
    dasmEntries.addBankLabel( 0x7770, 0x3d );
    dasmEntries.addBankLabel( 0x7793, 0x3d );
    dasmEntries.addBankLabel( 0x7797, 0x3d );

    dasmEntries.addBankLabel( 0x7803, 0x3d );
    dasmEntries.addBankLabel( 0x780b, 0x3d );
    dasmEntries.addBankLabel( 0x7821, 0x3d );
    dasmEntries.addBankLabel( 0x7841, 0x3d );
    dasmEntries.addBankLabel( 0x7872, 0x3d );
    dasmEntries.addBankLabel( 0x7890, 0x3d );
    dasmEntries.addBankLabel( 0x78f3, 0x3d );

    dasmEntries.addBankLabel( 0x7911, 0x3d );
    dasmEntries.addBankLabel( 0x7949, 0x3d );
    dasmEntries.addBankLabel( 0x79ae, 0x3d );
    dasmEntries.addBankLabel( 0x79b2, 0x3d );
    dasmEntries.addBankLabel( 0x79c0, 0x3d );
    dasmEntries.addBankLabel( 0x79c7, 0x3d );
    dasmEntries.addBankLabel( 0x79d0, 0x3d );
    dasmEntries.addBankLabel( 0x79f0, 0x3d );
    dasmEntries.addBankLabel( 0x79f5, 0x3d );

    dasmEntries.addBankLabel( 0x7a50, 0x3d );
    dasmEntries.addBankLabel( 0x7a75, 0x3d );
    dasmEntries.addBankLabel( 0x7a96, 0x3d );
    dasmEntries.addBankLabel( 0x7aca, 0x3d );
    dasmEntries.addBankLabel( 0x7ae5, 0x3d );
    dasmEntries.addTableWpc( 0x7AF2, 0x3D, 'tblTransistors' );

    dasmEntries.addTableWpc( 0x7BC7, 0x3D, 'tblWpcFiveBytes-B' );

    dasmEntries.addBankLabel( 0x7d00, 0x3d, 'debugStub_7d00_3d');
    dasmEntries.addBankLabel( 0x7d01, 0x3d, 'debugStub_7d01_3d');
    dasmEntries.addBankLabel( 0x7d02, 0x3d, 'debugStub_7d02_3d');
    dasmEntries.addBankLabel( 0x7d03, 0x3d, 'debugStub_7d03_3d');
    dasmEntries.addTable( 0x7D04, 0x3D, 'tblElevenBytes', 2, 11);
    dasmEntries.addBankLabel( 0x7d1a, 0x3d, 'debugStub_7d1a_3d');
    dasmEntries.addBankLabel( 0x7d1b, 0x3d, 'debugStub_7d1b_3d');
    dasmEntries.addBankLabel( 0x7d1c, 0x3d, 'debugStub_7d1c_3d');
    dasmEntries.addBankLabel( 0x7d1d, 0x3d, 'debugStub_7d1d_3d');
    dasmEntries.addBankLabel( 0x7d1e, 0x3d, 'debugStub_7d1e_3d');
    dasmEntries.addBankLabel( 0x7d1f, 0x3d, 'debugStub_7d1f_3d');
    dasmEntries.addBankLabel( 0x7d20, 0x3d, 'debugStub_7d20_3d');
    dasmEntries.addBankLabel( 0x7d21, 0x3d, 'debugStub_7d21_3d');
    dasmEntries.addBankLabel( 0x7d22, 0x3d, 'debugStub_7d22_3d');
    dasmEntries.addBankLabel( 0x7d23, 0x3d, 'debugStub_7d23_3d');
    dasmEntries.addBankLabel( 0x7d24, 0x3d, 'debugStub_7d24_3d');
    dasmEntries.addBankLabel( 0x7d25, 0x3d, 'debugStub_7d25_3d');
    dasmEntries.addBankLabel( 0x7d26, 0x3d, 'debugStub_7d26_3d');
    dasmEntries.addBankLabel( 0x7d27, 0x3d, 'debugStub_7d27_3d');
    dasmEntries.addBankLabel( 0x7d28, 0x3d, 'debugStub_7d28_3d');

    dasmEntries.addTable( 0x7D29, 0x3D, 'tblElevenBytes-Another', 2, 11);
    dasmEntries.addBankLabel( 0x7d3f, 0x3d, 'debugStub_7d3f_3d');

    dasmEntries.addTable( 0x7D40, 0x3D, 'tblElevenBytes-Another', 1, 11 );
    dasmEntries.addBankLabel( 0x7d4b, 0x3d, 'debugStub_7d4b_3d');
    dasmEntries.addBankLabel( 0x7d4c, 0x3d, 'debugStub_7d4c_3d');
    dasmEntries.addBankLabel( 0x7d4d, 0x3d, 'debugStub_7d4d_3d');
    dasmEntries.addBankLabel( 0x7d4e, 0x3d, 'debugStub_7d4e_3d');
    dasmEntries.addBankLabel( 0x7d4f, 0x3d, 'debugStub_7d4f_3d');
    dasmEntries.addBankLabel( 0x7d50, 0x3d, 'debugStub_7d50_3d');
    dasmEntries.addBankLabel( 0x7d51, 0x3d, 'debugStub_7d51_3d');
    dasmEntries.addBankLabel( 0x7d52, 0x3d, 'debugStub_7d52_3d');
    dasmEntries.addBankLabel( 0x7d53, 0x3d, 'debugStub_7d53_3d');
    dasmEntries.addBankLabel( 0x7d54, 0x3d, 'debugStub_7d54_3d');
    dasmEntries.addBankLabel( 0x7d55, 0x3d, 'debugStub_7d55_3d');
    dasmEntries.addBankLabel( 0x7d56, 0x3d, 'debugStub_7d56_3d');
    dasmEntries.addBankLabel( 0x7d57, 0x3d, 'debugStub_7d57_3d');
    dasmEntries.addBankLabel( 0x7d58, 0x3d, 'debugStub_7d58_3d');
    dasmEntries.addBankLabel( 0x7d59, 0x3d, 'debugStub_7d59_3d');
    dasmEntries.addBankLabel( 0x7d5a, 0x3d, 'debugStub_7d5a_3d');
    dasmEntries.addBankLabel( 0x7d5b, 0x3d, 'debugStub_7d5b_3d');
    dasmEntries.addBankLabel( 0x7d5c, 0x3d, 'debugStub_7d5c_3d');
    dasmEntries.addBankLabel( 0x7d5d, 0x3d, 'debugStub_7d5d_3d');
    dasmEntries.addBankLabel( 0x7d5e, 0x3d, 'debugStub_7d5e_3d');
    dasmEntries.addBankLabel( 0x7d5f, 0x3d, 'debugStub_7d5f_3d');
    dasmEntries.addBankLabel( 0x7d60, 0x3d, 'debugStub_7d60_3d');
    dasmEntries.addBankLabel( 0x7d61, 0x3d, 'debugStub_7d61_3d');
    dasmEntries.addBankLabel( 0x7d62, 0x3d, 'debugStub_7d62_3d');
    dasmEntries.addBankLabel( 0x7d63, 0x3d, 'debugStub_7d63_3d');
    dasmEntries.addBankLabel( 0x7d64, 0x3d, 'debugStub_7d64_3d');
    dasmEntries.addBankLabel( 0x7d65, 0x3d, 'debugStub_7d65_3d');
    dasmEntries.addBankLabel( 0x7d66, 0x3d, 'debugStub_7d66_3d');
    dasmEntries.addBankLabel( 0x7d67, 0x3d, 'debugStub_7d67_3d');
    dasmEntries.addBankLabel( 0x7d68, 0x3d, 'debugStub_7d68_3d');
    dasmEntries.addBankLabel( 0x7d69, 0x3d, 'debugStub_7d69_3d');
    dasmEntries.addBankLabel( 0x7d6a, 0x3d, 'debugStub_7d6a_3d');
    dasmEntries.addBankLabel( 0x7d6b, 0x3d, 'debugStub_7d6b_3d');
    dasmEntries.addBankLabel( 0x7d6c, 0x3d, 'debugStub_7d6c_3d');
    dasmEntries.addBankLabel( 0x7d6d, 0x3d, 'debugStub_7d6d_3d');

    dasmEntries.addTable( 0x7D6E, 0x3D, 'filler', 82, 8 );
    dasmEntries.addTable( 0x7FFE, 0x3D, 'filler', 1, 2 );


}

function getDasmEntries_sys_8000( dasmEntries ) {

    dasmEntries.addTableSys( 0x8000, 'pageMarker_sys_3E', 1, 1 );

    dasmEntries.addTableSys( 0x8001, 'tblBankAddresses', 173, 3 );
    dasmEntries.add( 0x816c, 0, 'vec_ISR_SerialProcessing');
    dasmEntries.addTableSys( 0x8208, 'tbl8208', 1, 2 );
    dasmEntries.addTableSys( 0x820a, 'tblBankAddresses-B', 93, 3 );

    dasmEntries.add( 0x821f, 0, 'vec_tblTaskCallbacks_A');    // 821F: 5c ae 2e  ; entry 0x7 (dec: 7)
    dasmEntries.add( 0x822b, 0, 'vec_tblTasks');
    dasmEntries.add( 0x8276, 0, 'vec_tblTaskCallbacks_B');

    dasmEntries.add( 0x8237, 0, 'vec_tblSoundCalls');

    dasmEntries.addTableSys( 0x8246, 'vec_tblAdjStandard', 1, 3 );
    dasmEntries.addTableSys( 0x8249, 'vec_tblAdjFeatures', 1, 3 );

    dasmEntries.add( 0x8318, 0, 'vec_FontsTable');
    dasmEntries.add( 0x831a, 0, 'vec_FontsTable_Bank');
    dasmEntries.addTableSys( 0x831b, 'vec_ImgTable', 1, 3 );
    dasmEntries.add( 0x831d, 0, 'vec_ImgTable_Bank');

    dasmEntries.addTableSys( 0x8321, 'tblPointersToValues_2048_1024', 4, 2 );
    dasmEntries.addTableSys( 0x8329, 'tblBankAddresses', 2, 3 );
    dasmEntries.addTableSys( 0x832f, 'pointerProcessSpecial', 1, 2 );

    dasmEntries.add( 0x8331, 1, 'ErrorHandler', [ 1 ], dasm.getMacroInstruction_ERRORHANDLER );
    dasmEntries.add( 0x8359, 1, 'ThrowGenError', [ 1 ], dasm.getMacroInstruction_ERRORHANDLER );
    dasmEntries.add( 0x8384, 1, 'ThrowUserError_Fatal', [ 1 ], dasm.getMacroInstruction_ERRORHANDLER  );
    dasmEntries.add( 0x83A5, 1, 'ThrowUserError_NonFatal', [ 1 ], dasm.getMacroInstruction_ERRORHANDLER  );

    // dasmEntries.add( 0x83C6, 1, 'LoadYWithSettingValue' );
    dasmEntries.add( 0x83C6, 1, 'LoadYWithSettingValue', [ 1 ], dasm.getMacroInstruction_LOADYWITHSETTINGVALUE );

    // dasmEntries.addSysMacro( 0x83D3, 1, [1], 'LoadAWithSettingValue' );
    dasmEntries.add( 0x83D3, 1, 'LoadAWithSettingValue', [ 1 ], dasm.getMacroInstruction_LOADAWITHSETTINGVALUE );

    dasmEntries.add( 0x83E0, 1, 'LoadDWithSettingValue', [ 1 ], dasm.getMacroInstruction_LOADAWITHSETTINGVALUE );

    dasmEntries.addSysMacro( 0x83ed, 1, [1], 'shiftRam26' );
    dasmEntries.add( 0x83FD, 1, 'shiftRam1F' );
    dasmEntries.add( 0x840D, 1 );
    dasmEntries.add( 0x841a, 1, 'Sleep', [ 1 ], dasm.getMacroInstruction_OneByte );
    dasmEntries.add( 0x8431, 1, 'SleepBankAddress', [ 2, 1 ], dasm.getMacroInstruction_Any );
    dasmEntries.addSysMacro( 0x8445, 1, [1] );
    dasmEntries.addSysMacro( 0x8452, 1, [1] );
    dasmEntries.add( 0x845F, 1, 'StoreValue_B_to_Y_LENGTH', [1], dasm.getMacroInstruction_OneByte );
    dasmEntries.add( 0x846C, 1 );
    dasmEntries.addSysMacro( 0x8479, 1, [1] );

    dasmEntries.addSysMacro( 0x8486, 1, [1] );
    dasmEntries.addSysMacro( 0x8497, 1, [1] );
    dasmEntries.addSysMacro( 0x84A8, 1, [1] );
    dasmEntries.addSysMacro( 0x84B5, 1, [1] );
    dasmEntries.addSysMacro( 0x84C2, 1, [1] );
    dasmEntries.addSysMacro( 0x84CF, 1, [1] );
    dasmEntries.addSysMacro( 0x84DC, 1, [1] );
    dasmEntries.addSysMacro( 0x84E9, 1, [1] );
    dasmEntries.addSysMacro( 0x84F6, 1, [1] );
    dasmEntries.addSysMacro( 0x8503, 1, [1] );
    dasmEntries.addSysMacro( 0x8512, 1, [1] );
    dasmEntries.addSysMacro( 0x8521, 1, [1] );
    dasmEntries.addSysMacro( 0x8530, 1, [1] );
    dasmEntries.addSysMacro( 0x853F, 1, [1] );
    dasmEntries.addSysMacro( 0x8594, 1, [1] );
    dasmEntries.addSysMacro( 0x8553, 1, [1] );
    dasmEntries.addSysMacro( 0x8567, 1, [1] );
    dasmEntries.addSysMacro( 0x8576, 1, [1] );
    dasmEntries.addSysMacro( 0x8585, 1, [1] );
    dasmEntries.addSysMacro( 0x85A3, 1, [1] );
    dasmEntries.addSysMacro( 0x85B2, 1, [1] );
    dasmEntries.addSysMacro( 0x85C1, 1, [1] );
    dasmEntries.addSysMacro( 0x85D0, 1, [1] );
    dasmEntries.addSysMacro( 0x85DF, 1, [1] );
    dasmEntries.addSysMacro( 0x85ec, 1, [1] );
    dasmEntries.addSysMacro( 0x85f9, 1, [1], 'start_task' );
    dasmEntries.addSysMacro( 0x8606, 1, [1] );
    dasmEntries.addSysMacro( 0x8613, 1, [1] );
    dasmEntries.addSysMacro( 0x8620, 1, [1] );
    dasmEntries.addSysMacro( 0x862d, 1, [1], 'PlaySoundTableIndex' );
    // dasmEntries.add( 0x863a, 1, 'StartProcess_INDEX', [ 1 ], dasm.getMacroInstruction_OneByte );
    dasmEntries.add( 0x863a, 1, 'StartProcess_INDEX', [ 1 ], dasm.getMacroInstruction_StartProcess_INDEX );
    dasmEntries.addSysMacro( 0x8649, 1, [1] );

    dasmEntries.addSysMacro( 0x8659, 1, [1]  );
    dasmEntries.addSysMacro( 0x8669, 1, [1]  );
    dasmEntries.addSysMacro( 0x8679, 1, [1]  );
    dasmEntries.addSysMacro( 0x8689, 1, [1] );

    dasmEntries.addSysMacro( 0x8699, 1, [1]  );
    dasmEntries.addSysMacro( 0x86A8, 1, [1]  );
    dasmEntries.addSysMacro( 0x86B8, 1, [1]  );
    dasmEntries.addSysMacro( 0x86C8, 1, [1]  );
    dasmEntries.add( 0x86d8, 1, 'sys_86d8', [1], dasm.getMacroInstruction_Any );
    dasmEntries.addSysMacro( 0x86e8, 1, [1] );
    dasmEntries.addSysMacro( 0x86f8, 1, [1] );

    // dasmEntries.add( 0x8708, 2, 'JSR_BANK_ADDRESS_AT', [ 3 ], dasm.printMacroInstruction_JSR_BANK_ADDRESS_AT);
    dasmEntries.add( 0x8708, 3,
        'JSR_BANK_ADDRESS_AT',
        [ 2, 1 ],
        dasm.getMacroInstruction_JSR_BANK_ADDRESS_AT );

    dasmEntries.add( 0x8712, 0, 'JSR_BANKADDRESS_AT_X' );
    dasmEntries.add( 0x8718, 0, 'JSR_BANKADDRESS_IN_X_A' );

    dasmEntries.add( 0x8742, 2, 'compare_ADJ_VALUE', [1, 1], dasm.getMacroInstruction_COMPAREADJUSTMENTOVALUE );

    dasmEntries.add( 0x841a, 1, 'Sleep', [ 1 ], dasm.getMacroInstruction_OneByte );
    dasmEntries.add( 0x8760, 2, 'Sleep_long', [ 2 ], dasm.getMacroInstruction_Any );

    dasmEntries.add( 0x878a, 2, 'find_process_id', [ 2 ], dasm.getMacroInstruction_Any );

    dasmEntries.addSysMacro( 0x8798, 2, [2] );

    // dasmEntries.add( 0x87a6, 2, 'sys_87a6',  [ 2 ],  dasm.getMacroInstruction_sys_87a6);
    dasmEntries.add( 0x87a6, 2, 'sys_87a6',  [ 2 ],  dasm.getMacroInstruction_Any );

    dasmEntries.add( 0x87B4, 2 );
    dasmEntries.add( 0x87CA, 2 );
    dasmEntries.add( 0x87DB, 2 );
    dasmEntries.add( 0x87E8, 2 );
    dasmEntries.add( 0x87F5, 2 );
    dasmEntries.add( 0x8802, 2 );
    dasmEntries.add( 0x880F, 2 );
    dasmEntries.add( 0x881C, 2 );
    dasmEntries.add( 0x8829, 2 );
    dasmEntries.add( 0x8836, 2 );
    dasmEntries.add( 0x8843, 2 );
    dasmEntries.add( 0x8850, 2 );
    dasmEntries.add( 0x885D, 2 );
    dasmEntries.add( 0x886A, 2 );
    dasmEntries.add( 0x8877, 2 );
    dasmEntries.add( 0x8884, 2 );
    dasmEntries.add( 0x8891, 2 );
    dasmEntries.add( 0x889E, 2 );
    dasmEntries.add( 0x889E, 2 );
    dasmEntries.add( 0x88AB, 2 );
    dasmEntries.add( 0x88B8, 2 );

    dasmEntries.add( 0x88C5, 2 );
    dasmEntries.add( 0x88D2, 2 );
    dasmEntries.add( 0x88DF, 2 );
    dasmEntries.addSysMacro( 0x88ec, 2, [2] );
    dasmEntries.add( 0x88F9, 2, 'sys_88F9', [ 2 ], dasm.getMacroInstruction_Any );
    dasmEntries.add( 0x8906, 2, 'sys_8906', [ 2 ], dasm.getMacroInstruction_Any );
    dasmEntries.add( 0x8913, 2 );
    dasmEntries.add( 0x8920, 2 );
    dasmEntries.add( 0x892D, 2 );
    dasmEntries.add( 0x893A, 2 );
    dasmEntries.add( 0x8947, 2 );
    dasmEntries.add( 0x8957, 2 );
    dasmEntries.add( 0x8964, 2 );
    dasmEntries.add( 0x8971, 2, 'DoSoundTableParameter2Bytes' );
    dasmEntries.addSysMacro( 0x897f, 2, [2] );
    dasmEntries.addSysMacro( 0x898f, 2, [2] );

    dasmEntries.add( 0x899F, 2 );
    dasmEntries.addSysMacro( 0x89af, 2, [2] );
    dasmEntries.addSysMacro( 0x89bf, 2, [2] );
    dasmEntries.addSysMacro( 0x89cf, 2, [2] );
    dasmEntries.addSysMacro( 0x89df, 2, [2] );

    dasmEntries.addTableSys( 0x89EF, 'filler', 1, 1 );

    dasmEntries.add( 0x89F0, 3,
        'JSR_BANK',
        [ 2, 1 ],
        dasm.getMacroInstruction_JSR_BANK );         // printInstruction_JSR_BANK(pc, instr, line);

    dasmEntries.addSysMacro( 0x8a2a, 3, [2, 1] );

    // dasmEntries.add( 0x8A43, 3 );   // # of parm bytes unsure
    dasmEntries.addSysMacro( 0x8a43, 3, [2, 1] );

    dasmEntries.add( 0x8a7e, 0 );

    dasmEntries.addSysMacro( 0x8af3, 3, [2, 1] );

    dasmEntries.add( 0x8AB9, 3, "CopyXto_ADDR_FORBYTES" );
    dasmEntries.add( 0x8AC9, 3 );

    dasmEntries.addSysMacro( 0x8ad8, 3, [2, 1]  );

    dasmEntries.add( 0x8AF3, 3 );
    dasmEntries.add( 0x8B26, 3 );
    dasmEntries.add( 0x8B3A, 3 );
    dasmEntries.add( 0x8B49, 3 );
    dasmEntries.add( 0x8b5b, 3 );

    dasmEntries.addSysMacro( 0x8b6d, 3, [1, 2]  );

    dasmEntries.add( 0x8B84 );

    dasmEntries.add( 0x8B95, 4 );
    dasmEntries.add( 0x8BA5, 4 );

    dasmEntries.addSysMacro( 0x8BB5, 4, [2,2], 'Clear_ADDR_LENGTH' );
    dasmEntries.addSysMacro( 0x8BC5, 4, [2,1,1], 'Store_ADDR_LENGTH_VALUE' );

    dasmEntries.addSysMacro( 0x8bd5, 4, [2, 2]  );

    dasmEntries.add( 0x8BF0, 4 );
    dasmEntries.add( 0x8C02, 4 );
    dasmEntries.add( 0x8C14, 4 );
    dasmEntries.add( 0x8C26, 4 );
    dasmEntries.add( 0x8C38, 4 );
    // dasmEntries.add( 0x8C4B, 4 );
    dasmEntries.addSysMacro( 0x8c4b, 4, [2, 2] );
    dasmEntries.add( 0x8C5E, 4 );

    // dasmEntries.add( 0x8C71, 5 );
    dasmEntries.add( 0x8c71, 5,
        'sys_8c71',
        [ 2, 2, 1 ],
        dasm.getMacroInstruction_sys_8c71 );

    dasmEntries.addSysMacro( 0x8cab, 5, [2, 2, 1], "startTask_PARM_TASKADDR" );

    dasmEntries.add( 0x8C8E, 5, "sys_8c8e_2BYTES_BNKADDR" );
    dasmEntries.add( 0x8CD1, 5 );

    dasmEntries.addSysMacro( 0x8cf7, 5, [2, 2, 1]  );

    dasmEntries.add( 0x8D2B, 5 );
    // dasmEntries.add( 0x8D5F, 5, "Copy_ADDR_ADDR_FORBYTES" );
    dasmEntries.addSysMacro( 0x8D5F, 5, [2,2,1], "Copy_ADDR_ADDR_FORBYTES" );
    dasmEntries.add( 0x8D71, 2 );
    dasmEntries.add( 0x8D94, 6 );
    dasmEntries.add( 0x8DA6, 2 );
    dasmEntries.add( 0x8DBd, 0 );
    dasmEntries.add( 0x8DBF, 0, 'RESET' );

    dasmEntries.add( 0x8F04, 0, 'warmInit' );
    dasmEntries.add( 0x8F18, 0, 'warmInit-ClearLowRAM' );
    dasmEntries.add( 0x8F8F, 0 );
    dasmEntries.add( 0x8F98, 0 );
    dasmEntries.add( 0x8Fa5, 0 );
    dasmEntries.add( 0x8Fc0, 0 );
    dasmEntries.add( 0x8Fcd, 0 );
    dasmEntries.add( 0x8Fd8, 0 );
    dasmEntries.add( 0x8Ffd, 0 );
 }

function getDasmEntries_sys_9000( dasmEntries ) {

    dasmEntries.add( 0x9017, 0 );
    dasmEntries.add( 0x9018, 0, "SWI" );
    dasmEntries.add( 0x901E, 0, "FIRQ" );
    dasmEntries.add( 0x902E, 0, "RESERVED" );
    dasmEntries.add( 0x9035, 0, "SWI3" );
    dasmEntries.add( 0x903C, 0, "SWI2" );
    dasmEntries.add( 0x9048, 0, "NMI" );
    dasmEntries.add( 0x904F, 0, "DEBUG_OnError_test_DEBUG_ACTIVE" );
    dasmEntries.add( 0x9071, 0 );
    dasmEntries.add( 0x9085, 0 );
    dasmEntries.add( 0x908c, 0 );
    dasmEntries.add( 0x9093, 0 );
    dasmEntries.add( 0x90A6, 0, "SetRomBankTo3D" );
    dasmEntries.add( 0x90AE, 0, "SetRomBankFromB" );
    dasmEntries.add( 0x90B7, 0, "LoadBankAddressAtXIntoXB" );
    dasmEntries.add( 0x90bc, 0, 'SaveRegisters_JSR_BANKADDRESS_AT_X' );
    dasmEntries.add( 0x90c3, 0 );
    dasmEntries.add( 0x90cf, 0 );
    dasmEntries.add( 0x90D9, 0, "LoadAFromBankAddressXB_INCX" );
    dasmEntries.add( 0x90DE, 0, "LoadAFromBankAddressXB" );

    dasmEntries.add( 0x9100, 0, "LoadAFromBankAddressXB_X_plus2:" );
    dasmEntries.add( 0x9105, 0, "LoadYFromBankAddressXB" );
    dasmEntries.add( 0x9111, 0 );
    dasmEntries.add( 0x912b, 0 );
    dasmEntries.add( 0x9133, 0 );
    dasmEntries.add( 0x9153, 0 );
    dasmEntries.add( 0x9159, 0 );
    dasmEntries.add( 0x9199, 0 );
    dasmEntries.add( 0x91d3, 0 );
    dasmEntries.add( 0x91db, 0 );
    dasmEntries.add( 0x91f9, 0, "Store_A_to_WPC_PROTMEM" );

    dasmEntries.addTableSys( 0x9201, 'tbl_LOCKED_CMOS', 6, 3 );
    dasmEntries.addTableSys( 0x9213, 'tbl_LOCKED_CMOS_END', 1, 2 );
    dasmEntries.add( 0x9215, 0, "WPC_PROTMEM_Lock" );
    dasmEntries.add( 0x921e, 0, "WPC_PROTMEM_Unlock" );
    dasmEntries.add( 0x9227, 0 );
    dasmEntries.add( 0x922d, 0 );
    dasmEntries.add( 0x9244, 0 );
    dasmEntries.add( 0x9257, 0 );
    dasmEntries.add( 0x925d, 0 );
    dasmEntries.add( 0x927c, 0 );
    dasmEntries.add( 0x929a, 0 );
    dasmEntries.add( 0x92a2, 0 );
    dasmEntries.add( 0x92C6, 0, "Get16BitSettingIntoY" );
    dasmEntries.add( 0x92D0, 0, "Get8BitSettingIntoA" );
    dasmEntries.add( 0x92DE, 0, "Get16BitSettingIntoD" );
    dasmEntries.add( 0x92EA, 0, "GetAdjustmentIndexAIntoYandBoundsCheck" );

    dasmEntries.add( 0x9317, 0 );
    dasmEntries.add( 0x9337, 0 );
    dasmEntries.add( 0x9344, 0 );
    dasmEntries.add( 0x934b, 0 );
    dasmEntries.add( 0x9366, 0 );
    dasmEntries.add( 0x937f, 0, "Init_PTR_FeatureAdjustments" );
    dasmEntries.add( 0x93aa, 0 );
    dasmEntries.add( 0x93b1, 0 );
    dasmEntries.add( 0x93c2, 0, "shift_ram26_B_bits" );
    dasmEntries.add( 0x93cb, 0, "shift_ram1F_B_bits" );
    dasmEntries.add( 0x93d4, 0, "shiftAddressInX_B_bits" );

    dasmEntries.add( 0x940c, 0 );
    dasmEntries.add( 0x9417, 0 );
    dasmEntries.add( 0x9453, 0 );
    dasmEntries.add( 0x94d4, 0 );
    dasmEntries.add( 0x94e0, 0 );
    dasmEntries.add( 0x94f1, 0 );

    dasmEntries.add( 0x9509, 0 );
    dasmEntries.add( 0x950c, 0, 'SetInterrupt_sys_950c' );
    dasmEntries.add( 0x9527, 0, 'SetInterrupt_sys_9527' );
    dasmEntries.add( 0x9556, 0 );
    dasmEntries.add( 0x9586, 0, "get_switch_bit" );
    dasmEntries.add( 0x95a9, 0 );
    dasmEntries.add( 0x95ac, 0 );
    dasmEntries.add( 0x9609, 0 );
    dasmEntries.add( 0x9666, 0, "Load_Y_TaskCallbackTableEntry_Address_index_A" );
    dasmEntries.add( 0x9689, 0 );
    dasmEntries.add( 0x96b2, 0 );
    dasmEntries.add( 0x96c4, 0 );
    dasmEntries.add( 0x96da, 0 );
    dasmEntries.add( 0x96ff, 0 );

    dasmEntries.add( 0x9714, 0 );
    dasmEntries.add( 0x971b, 0 );
    dasmEntries.add( 0x9722, 0 );
    dasmEntries.add( 0x9729, 0, "InitializeProcessBlocksChain" );
    dasmEntries.add( 0x977E, 0, "mainGameLoop" );
    dasmEntries.add( 0x978E, 0, "tasksTop" );
    dasmEntries.add( 0x97B6, 0, "checkFirst8BytesOfRamAllZero" );
    dasmEntries.add( 0x97C4, 0, "clearFirst8BytesOfRam" );
    dasmEntries.add( 0x97D5, 0, "processNextTask" );
    dasmEntries.add( 0x97DA, 0, "processDispatch" );

    dasmEntries.add( 0x983E, 0 );
    dasmEntries.add( 0x984d, 0, "allocate_largeblock_type_Y_for_process" );
    dasmEntries.add( 0x985c, 0, "allocate_largeblock_type_Y_for_process_again" );
    dasmEntries.add( 0x98b3, 0, 'sleepJMP_A' );
    dasmEntries.add( 0x98b7, 0, 'sleepJMP_B' );
    dasmEntries.add( 0x98bb, 0, 'sleepJMP_D' );
    dasmEntries.add( 0x98D2, 0 );
    dasmEntries.add( 0x98DE, 0, 'sleepJMP' );

    dasmEntries.add( 0x99C5, 0, 'processRTS_jmp' );

    dasmEntries.add( 0x9A36, 0 );
    dasmEntries.add( 0x9A50, 0, "free_ram_block" );
    dasmEntries.add( 0x9A63, 0, "free_task_ram_blocks" );
    dasmEntries.add( 0x9A79, 0, "sys_get_block" );
    dasmEntries.add( 0x9AA7, 0, "StoreA_at_U_minusOne" );
    dasmEntries.add( 0x9AAA, 0 );
    dasmEntries.add( 0x9Ac7, 0 );
    dasmEntries.add( 0x9Ae4, 0 );
    dasmEntries.add( 0x9Af3, 0, "checkFreeBlocks_allocate_block_large_stack" );

    dasmEntries.add( 0x9B0F, 0, "allocate_block_large_stack" );
    dasmEntries.add( 0x9b31, 0, "free_blocks_in_chain_U");
    dasmEntries.add( 0x9B42, 0, "free_block" );
    dasmEntries.add( 0x9b65, 0 );
    dasmEntries.add( 0x9b6e, 0 );
    dasmEntries.add( 0x9b77, 0 );
    dasmEntries.add( 0x9b9e, 0 );
    dasmEntries.add( 0x9BB0, 0, "DEBUG_test_IsActive" );
    dasmEntries.add( 0x9bcb, 0, "find_process_id_Y" );
    dasmEntries.add( 0x9bd4, 0, "find_process_id_Y_mask_D" );
    dasmEntries.add( 0x9bec, 0, "find_process_on_chain_U" );

    dasmEntries.add( 0x9c1a, 0 );
    dasmEntries.add( 0x9c28, 0 );
    dasmEntries.add( 0x9c41, 0 );
    dasmEntries.add( 0x9c54, 0 );
    dasmEntries.add( 0x9c68, 0, 'Load_Y_current_TaskId' );
    dasmEntries.add( 0x9c7d, 0 );
    dasmEntries.add( 0x9c8f, 0 );
    dasmEntries.add( 0x9ca1, 0 );

    dasmEntries.add( 0x9CAC, 0, "LoadXOrkinBankAddressTable" );
    dasmEntries.addTableSys( 0x9CB0, 'tblBankAddressesOrkin', 15, 3 );
    dasmEntries.addTableSys( 0x9Cdd, 'filler', 1, 2 );
    dasmEntries.add( 0x9Cdf, 0 );
    dasmEntries.add( 0x9CE6, 0, "Set_WPC_WATCHDOG_To_06" );
    dasmEntries.add( 0x9Cec, 0 );
    dasmEntries.add( 0x9Cf3, 0 );
    dasmEntries.add( 0x9CFA, 0, "gameHousekeeping" );
    dasmEntries.add( 0x9dba, 0 );
    dasmEntries.add( 0x9dc8, 0 );
    dasmEntries.add( 0x9dd6, 0 );
    dasmEntries.add( 0x9df9, 0 );

    dasmEntries.add( 0x9e00, 0 );
    dasmEntries.add( 0x9e08, 0 );
    dasmEntries.add( 0x9e27, 0 );
    dasmEntries.add( 0x9e46, 0 );
    dasmEntries.add( 0x9e51, 0 );
    dasmEntries.add( 0x9e72, 0 );
    dasmEntries.add( 0x9e90, 0 );
    dasmEntries.add( 0x9eaf, 0 );
    dasmEntries.add( 0x9ecf, 0 );

    dasmEntries.add( 0x9F05, 0, 'lamp_routine_A' );
    dasmEntries.add( 0x9F32, 0, 'lamp_routine_B' );
    dasmEntries.add( 0x9F60, 0, 'lamp_routine_C' );
    dasmEntries.add( 0x9F8D, 0, 'SetRam64_65_to_5_and_Ram66_to_zero' );
    dasmEntries.add( 0x9F98, 0 );
    dasmEntries.add( 0x9Fb0, 0 );
    dasmEntries.add( 0x9FBF, 0, 'SetRam64_65FromA' );
    dasmEntries.add( 0x9FC4, 0, 'SetRam63FromB' );
    dasmEntries.add( 0x9FC7, 0, 'LoadAFromRam62' );
    dasmEntries.add( 0x9FCA, 0, 'SetRam62FromA' );
    dasmEntries.add( 0x9FCD, 0, 'IncrementRam63' );
    dasmEntries.add( 0x9FD0, 0, 'SetRam66ToOne' );
    dasmEntries.add( 0x9FD8, 0, 'SetRam66ToZero' );
    dasmEntries.add( 0x9FDB, 0 );
}

function getDasmEntries_sys_A000( dasmEntries ) {

    dasmEntries.add( 0xA002, 0 );
    dasmEntries.add( 0xA00b, 0 );
    dasmEntries.add( 0xA014, 0 );
    dasmEntries.add( 0xA01d, 0 );
    dasmEntries.add( 0xA02b, 0 );
    dasmEntries.add( 0xA039, 0 );
    dasmEntries.add( 0xA042, 0 );
    dasmEntries.add( 0xA04b, 0 );
    dasmEntries.add( 0xA054, 0 );
    dasmEntries.add( 0xA05d, 0 );
    dasmEntries.add( 0xA066, 0 );
    dasmEntries.add( 0xA06f, 0 );
    dasmEntries.add( 0xA078, 0 );
    dasmEntries.add( 0xA081, 0 );
    dasmEntries.add( 0xA08a, 0 );
    dasmEntries.add( 0xA0cd, 0 );
    dasmEntries.add( 0xA10a, 0 );
    dasmEntries.add( 0xA13e, 0 );
    dasmEntries.add( 0xA15d, 0 );
    dasmEntries.add( 0xA181, 0 );
    dasmEntries.add( 0xA1b3, 0 );
    dasmEntries.add( 0xA1d7, 0 );
    dasmEntries.add( 0xA1ff, 0 );

    dasmEntries.add( 0xA215, 0 );
    dasmEntries.add( 0xA225, 0 );
    dasmEntries.add( 0xA23B, 0, 'Load_tbl_sys_A248_Index_A_Into_Y' );
    dasmEntries.addTableSys( 0xA248, 'tbl_sys_A248', 16, 2 );
    dasmEntries.add( 0xA268, 0 );
    dasmEntries.add( 0xA28B, 0, 'GetLanguageSettingsFromJumper' );
    dasmEntries.add( 0xA2CF, 0, 'Load_A_with_Language_Setting_04' );
    dasmEntries.add( 0xA2D3, 0, 'Load_A_from_Ram1700' );
    dasmEntries.add( 0xA2D7, 0 );
    dasmEntries.add( 0xA2De, 0 );
    dasmEntries.add( 0xA2ee, 0 );
    dasmEntries.addTableSys( 0xA2FA, 'tblLanguageSettings', 16, 4 );

    dasmEntries.add( 0xA33a, 0 );
    dasmEntries.addTableSys( 0xA350, 'tblBankAddressForStringTableByLanguage', 8, 3 );
    dasmEntries.add( 0xA368, 0 );
    dasmEntries.add( 0xA3af, 0, 'Load_X_pointer_tblStrings_currentLanguage' );
    dasmEntries.add( 0xA3c0, 0 );
    dasmEntries.add( 0xA3c9, 0 );
    dasmEntries.add( 0xA3e8, 0 );
    dasmEntries.add( 0xA3ec, 0 );

    dasmEntries.add( 0xA401, 0);
    dasmEntries.add( 0xA40c, 0);
    dasmEntries.add( 0xA417, 0);
    dasmEntries.add( 0xA422, 0);
    dasmEntries.add( 0xA42d, 0);
    dasmEntries.add( 0xA431, 0);
    dasmEntries.add( 0xA43c, 0);
    dasmEntries.add( 0xA447, 0);
    dasmEntries.add( 0xA452, 0);
    dasmEntries.add( 0xA45d, 0);
    dasmEntries.add( 0xA468, 0);
    dasmEntries.add( 0xA473, 0, 'long_binary_to_bcd');
    dasmEntries.add( 0xA488, 0);

    dasmEntries.add( 0xA50d, 0);
    dasmEntries.add( 0xA5b8, 0);
    dasmEntries.add( 0xA5e5, 0);
    dasmEntries.add( 0xA5f4, 0);

    dasmEntries.add( 0xA61b, 0);
    dasmEntries.add( 0xA642, 0);
    dasmEntries.add( 0xA65e, 0);
    dasmEntries.add( 0xA671, 0);
    dasmEntries.add( 0xA684, 0);
    dasmEntries.add( 0xA6bc, 0);
    dasmEntries.add( 0xA6D6, 0, 'CopyXtoYForABytes');
    dasmEntries.add( 0xA6e1, 0);
    dasmEntries.add( 0xA6ee, 0, 'Clear_D_bytes_at_ADDR_Y');

    dasmEntries.add( 0xA700, 0, 'Store_B_at_Y_for_A_bytes');
    dasmEntries.add( 0xA709, 0);
    dasmEntries.add( 0xA728, 0);
    dasmEntries.add( 0xA730, 0);
    dasmEntries.add( 0xA742, 0);
    dasmEntries.add( 0xA778, 0);
    dasmEntries.add( 0xA781, 0);
    dasmEntries.add( 0xA78e, 0);
    dasmEntries.add( 0xA792, 0);
    dasmEntries.add( 0xA7b1, 0);
    dasmEntries.add( 0xA7b5, 0);
    dasmEntries.add( 0xA7bc, 0);
    dasmEntries.add( 0xA7c4, 0);
    dasmEntries.add( 0xA7F3, 0, 'InitializeTransistors');

    dasmEntries.add( 0xA868, 0, 'SetFlag_GAME_RUNNING');
    dasmEntries.add( 0xA870, 0, 'ClearFlag_GAME_RUNNING');
    dasmEntries.add( 0xA873, 0 );
    dasmEntries.add( 0xA87a, 0 );
    dasmEntries.add( 0xA890, 0 );
    dasmEntries.add( 0xA8bb, 0 );
    dasmEntries.add( 0xA8C1, 0, 'EnqueueSolenoidPulse');
    dasmEntries.add( 0xA8FE, 0, 'AdvanceCircularSolenoidQueueIndexX');

    dasmEntries.add( 0xA90F, 0, 'ProcessNextSolenoidTableEntry');
    dasmEntries.add( 0xA955, 0, 'CheckIfAnySolenoidPresentlyEnergized');
    dasmEntries.add( 0xA962, 0, 'WriteSolenoidTableEntryDataToRam81_8B');
    dasmEntries.add( 0xA9A5, 0, 'LoadSolenoidSpecialDelayTimeB');
    dasmEntries.add( 0xA9CD, 0, 'SolenoidEnergizeIndexDIfIdle');
    dasmEntries.add( 0xA9D6, 0, 'LoadDwithTransistorTableAddressIndexA');
    dasmEntries.add( 0xA9E0, 0, 'GetSolenoidIndexATableEntryValueIntoD');
    dasmEntries.add( 0xA9EF, 0 );

    dasmEntries.add( 0xAA12, 0 );
    dasmEntries.add( 0xAA1B, 0, 'flasher_routine');
    dasmEntries.add( 0xAAA6, 0, 'SetInterrupt_aaa6' );
    dasmEntries.add( 0xAAe8, 0 );

    dasmEntries.add( 0xAb0d, 0 );
    dasmEntries.add( 0xAb15, 0 );
    dasmEntries.add( 0xAb21, 0 );
    dasmEntries.add( 0xAb2d, 0 );
    dasmEntries.add( 0xAb55, 0 );
    dasmEntries.add( 0xAb5f, 0 );
    dasmEntries.add( 0xAb6d, 0 );
    dasmEntries.add( 0xAb75, 0 );
    dasmEntries.add( 0xAb7d, 0 );
    dasmEntries.add( 0xAb80, 0 );
    dasmEntries.add( 0xAb95, 0 );
    dasmEntries.add( 0xAbc0, 0 );
    dasmEntries.add( 0xAbd0, 0 );
    dasmEntries.add( 0xAbd8, 0, 'SetInterrupt_GI_abd8' );
    dasmEntries.add( 0xAbe5, 0, 'SetInterrupt_GI_abe5'  );
    dasmEntries.add( 0xAbf3, 0 );

    dasmEntries.add( 0xAc0a, 0 );
    dasmEntries.add( 0xAc68, 0 );
    dasmEntries.add( 0xAc71, 0 );
    dasmEntries.add( 0xAC7A, 0, 'LoadYWithValueFromBankAddressAtX' )
    dasmEntries.add( 0xAc84, 0 );
    dasmEntries.add( 0xAc88, 0 );
    dasmEntries.add( 0xAc94, 0 );
    dasmEntries.add( 0xAC9D, 0, 'GetPageAndLoadTableEntryPointerIndexAIntoXandY' )
    dasmEntries.add( 0xAca0, 0 );
    dasmEntries.add( 0xACCB, 0, 'GetXIndexIntoTable16bitIndexY' )

    dasmEntries.add( 0xAd03, 0 );
    dasmEntries.add( 0xAd0c, 0 );
    dasmEntries.add( 0xAd15, 0 );
    dasmEntries.add( 0xAd1e, 0 );
    dasmEntries.add( 0xAd27, 0 );
    dasmEntries.add( 0xAd38, 0 );
    dasmEntries.add( 0xAd42, 0 );
    dasmEntries.add( 0xAd4c, 0 );
    dasmEntries.add( 0xAd5b, 0 );
    dasmEntries.add( 0xAd6a, 0 );
    dasmEntries.add( 0xAd79, 0 );
    dasmEntries.add( 0xAd88, 0 );
    dasmEntries.add( 0xAd97, 0 );
    dasmEntries.add( 0xAda6, 0 );
    dasmEntries.add( 0xAdb6, 0 );
    dasmEntries.add( 0xAdc6, 0 );
    dasmEntries.add( 0xAdd7, 0 );
    dasmEntries.add( 0xAde7, 0 );
    dasmEntries.add( 0xAdf8, 0 );
    dasmEntries.add( 0xAe09, 0 );
    dasmEntries.add( 0xAe1a, 0 );
    dasmEntries.add( 0xAe2a, 0 );
    dasmEntries.add( 0xAe3b, 0 );
    dasmEntries.add( 0xAe4b, 0 );
    dasmEntries.add( 0xAe5b, 0 );
    dasmEntries.add( 0xAe6b, 0 );
    dasmEntries.add( 0xAe7b, 0 );
    dasmEntries.add( 0xAe88, 0 );
    dasmEntries.add( 0xAe95, 0 );
    dasmEntries.add( 0xAeb1, 0 );
    dasmEntries.add( 0xAeb6, 0 );

    dasmEntries.add( 0xAF46, 0, 'ProcessAttractModeLightShowData' )
    dasmEntries.add( 0xAFAF, 0 )
    dasmEntries.add( 0xAFDB, 0, 'LoadAttractModeLightShowDataIndexA' )
    dasmEntries.add( 0xAFF0, 0, 'AdvanceLightShowDataPointerXPastHeader' )
    dasmEntries.add( 0xAFFD, 0, 'checkLampStringOperator' )

}

function getDasmEntries_sys_B000( dasmEntries ) {

    dasmEntries.add( 0xB01d, 0 );
    dasmEntries.add( 0xB044, 0 );
    dasmEntries.add( 0xB0a0, 0 );
    dasmEntries.addTableSys( 0xB0A4, 'tbl_sys_B0A4', 5, 2 );
    dasmEntries.addTableSys( 0xB0AE, 'LampDataByteLookupTable', 10, 3 );
    dasmEntries.add( 0xB0CC, 0, 'LampDataByteLookupTable01' );
    dasmEntries.add( 0xB0CC, 0, 'LampDataByteLookupTable02' );
    dasmEntries.add( 0xB0d8, 0 );
    dasmEntries.add( 0xB0E9, 0, 'LampDataByteLookupTable03' );
    dasmEntries.add( 0xB117, 0 );
    dasmEntries.add( 0xB11c, 0 );
    dasmEntries.add( 0xB145, 0 );
    dasmEntries.add( 0xB16f, 0 );
    dasmEntries.add( 0xB17e, 0 );
    dasmEntries.add( 0xB187, 0 );
    dasmEntries.add( 0xB196, 0 );
    dasmEntries.add( 0xB1a5, 0 );
    dasmEntries.add( 0xB1bf, 0 );
    dasmEntries.add( 0xB1e1, 0 );
    dasmEntries.add( 0xB1ed, 0 );
    dasmEntries.add( 0xB1f1, 0 );
    dasmEntries.add( 0xB1fd, 0 );

    dasmEntries.add( 0xB20f, 0 );
    dasmEntries.add( 0xB213, 0 );
    dasmEntries.add( 0xB223, 0, 'GetBallInPlayCheckIfLastBall' );
    dasmEntries.add( 0xB239, 0 );
    dasmEntries.add( 0xB23f, 0 );
    dasmEntries.add( 0xB25c, 0 );
    dasmEntries.add( 0xB265, 0 );
    dasmEntries.add( 0xB26a, 0 );
    dasmEntries.add( 0xB276, 0 );
    dasmEntries.add( 0xB28a, 0 );
    dasmEntries.add( 0xB2a0, 0 );
    dasmEntries.add( 0xB2a9, 0 );
    dasmEntries.add( 0xB2f6, 0 );

    dasmEntries.add( 0xB328, 0 );
    dasmEntries.add( 0xB338, 0 );
    dasmEntries.add( 0xB340, 0 );
    dasmEntries.add( 0xB349, 0 );
    dasmEntries.add( 0xB352, 0 );
    dasmEntries.add( 0xB365, 0 );
    dasmEntries.add( 0xB37a, 0 );
    dasmEntries.add( 0xB3a8, 0 );
    dasmEntries.add( 0xB3b3, 0 );
    dasmEntries.add( 0xB3c8, 0 );
    dasmEntries.add( 0xB3d7, 0 );
    dasmEntries.add( 0xB3e4, 0 );

    dasmEntries.add( 0xB40d, 0, 'CheckMaxExtraBallSettings' );
    dasmEntries.add( 0xB42B, 0, 'LoadAFromRam3B2' );
    dasmEntries.add( 0xB42F, 0, 'LoadAFromRam3B1' );
    dasmEntries.add( 0xB433, 0, 'CompareRam3B3toOne' );
    dasmEntries.add( 0xB43c, 0 );
    dasmEntries.add( 0xB446, 0 );
    dasmEntries.add( 0xB455, 0 );
    dasmEntries.add( 0xB467, 0 );
    dasmEntries.add( 0xB46e, 0 );
    dasmEntries.add( 0xB475, 0 );
    dasmEntries.add( 0xB48b, 0 );
    dasmEntries.add( 0xB494, 0 );
    dasmEntries.add( 0xB4ff, 0 );

    dasmEntries.add( 0xB506, 0, 'start_task' );
    dasmEntries.add( 0xB544, 0 );
    dasmEntries.add( 0xB5BD, 0 );
    dasmEntries.add( 0xB5e8, 0 );
    dasmEntries.add( 0xB607, 0 );
    dasmEntries.add( 0xB68a, 0 );
    dasmEntries.add( 0xB6a2, 0 );
    dasmEntries.add( 0xB6b4, 0 );

    dasmEntries.add( 0xB739, 0 );
    dasmEntries.add( 0xB784, 0 );
    dasmEntries.add( 0xB79e, 0 );
    dasmEntries.add( 0xB7bf, 0 );
    dasmEntries.add( 0xB7cc, 0 );
    dasmEntries.add( 0xB7dd, 0 );
    dasmEntries.add( 0xB7e7, 0 );
    dasmEntries.add( 0xB7f1, 0 );
    dasmEntries.add( 0xB7fb, 0 );

    dasmEntries.add( 0xb839, 0 );
    dasmEntries.add( 0xb84b, 0 );
    dasmEntries.add( 0xb897, 0 );
    dasmEntries.add( 0xb8b7, 0 );
    dasmEntries.add( 0xb8c8, 0 );
    dasmEntries.add( 0xb8d1, 0 );
    dasmEntries.add( 0xb8db, 0 );

    dasmEntries.add( 0xB91A, 0, 'DoSoundTableIndexD' );
    dasmEntries.addTableSys( 0xB929, 'tblB929', 1, 2 );
    // dasmEntries.add( 0xb92b, 0 );
    dasmEntries.addSysMacro( 0xb92b, 7, [2, 2, 2, 1], "NoCallersFound"  );
    dasmEntries.addTableSys( 0xB942, 'tblB942', 1, 2 );
    // dasmEntries.add( 0xb944, 0 );
    dasmEntries.addSysMacro( 0xb944, 7, [2, 2, 2, 1] );
    dasmEntries.add( 0xb9bb, 0 );
    dasmEntries.add( 0xb9c0, 0 );
    dasmEntries.add( 0xb9d5, 0 );
    dasmEntries.add( 0xb9ea, 0 );

    dasmEntries.add( 0xba05, 0 );
    dasmEntries.add( 0xba0e, 0 );
    dasmEntries.add( 0xba2b, 0 );
    dasmEntries.add( 0xba34, 0 );
    dasmEntries.add( 0xba40, 0 );
    dasmEntries.add( 0xba4c, 0 );
    dasmEntries.add( 0xba5e, 0 );
    dasmEntries.add( 0xba81, 0 );
    dasmEntries.add( 0xba93, 0 );
    dasmEntries.add( 0xbaae, 0 );
    dasmEntries.add( 0xbaba, 0 );
    dasmEntries.add( 0xbaf2, 0 );

    dasmEntries.add( 0xbb00, 0 );
    dasmEntries.add( 0xbb0b, 0 );
    dasmEntries.add( 0xbb22, 0 );
    dasmEntries.add( 0xbb2c, 0 );
    dasmEntries.add( 0xbb34, 0 );
    dasmEntries.add( 0xbb51, 0 );
    dasmEntries.add( 0xbb5f, 0 );
    dasmEntries.add( 0xbb7d, 0 );
    dasmEntries.add( 0xbba1, 0 );
    dasmEntries.add( 0xbbaa, 0, 'GetPlayerScoreIndexAIntoU' );
    dasmEntries.add( 0xbbb7, 0 );
    dasmEntries.add( 0xbbfc, 0 );

    dasmEntries.add( 0xbc6d, 0 );
    dasmEntries.add( 0xbc7e, 0 );
    dasmEntries.add( 0xbc82, 0 );
    dasmEntries.add( 0xbc89, 0, 'SetInterrupt_bc89'  );
    dasmEntries.add( 0xbc93, 0 );
    dasmEntries.add( 0xbc9c, 0 );
    dasmEntries.add( 0xbca0, 0 );
    dasmEntries.add( 0xbca4, 0 );
    dasmEntries.add( 0xbca8, 0 );
    dasmEntries.add( 0xbcd2, 0 );
    dasmEntries.add( 0xbcf4, 0 );

    dasmEntries.add( 0xbd1c, 0 );
    dasmEntries.add( 0xbd2f, 0, 'process_SoundScript_CHAIN' );
    dasmEntries.add( 0xBD4E, 0, 'DoSoundTableIndexA' );
    dasmEntries.add( 0xBD5B, 0, 'DoSoundTableIndexY' );
    dasmEntries.add( 0xBD62, 0, 'DoSoundTableIndexYStackSet' );

    dasmEntries.add( 0xbe06, 0 );
    dasmEntries.add( 0xbe42, 0 );
    dasmEntries.add( 0xbe60, 0 );
    dasmEntries.add( 0xbe6f, 0 );
    dasmEntries.add( 0xbe7e, 0 );
    dasmEntries.add( 0xbe8d, 0, 'Process_SoundScript_CHAIN' );
    dasmEntries.add( 0xbebb, 0 );
    dasmEntries.add( 0xbee2, 0 );
    dasmEntries.add( 0xbef9, 0 );

    dasmEntries.add( 0xbf07, 0 );
    dasmEntries.add( 0xbf23, 0 );
    dasmEntries.add( 0xbf4d, 0 );
    dasmEntries.add( 0xbf65, 0 );
    dasmEntries.add( 0xbf7a, 0 );
    dasmEntries.add( 0xbf8f, 0 );
    dasmEntries.add( 0xbfa1, 0 );
    dasmEntries.add( 0xbfb6, 0 );
    dasmEntries.add( 0xbfc6, 0 );
    dasmEntries.add( 0xbfd0, 0 );
    dasmEntries.add( 0xbfde, 0 );
    dasmEntries.add( 0xBFE7, 0, 'StoreAatRam3E8' );
    dasmEntries.add( 0xBFEB, 0, 'LoadAFromRam3E8' );
    dasmEntries.add( 0xbfef, 0 );
    dasmEntries.add( 0xbffd, 0 );
}

function getDasmEntries_sys_C000( dasmEntries ) {

    dasmEntries.add( 0xC006, 0 );
    dasmEntries.add( 0xC019, 0 );
    dasmEntries.add( 0xC022, 0 );
    dasmEntries.add( 0xC02b, 0 );
    dasmEntries.add( 0xC041, 0 );
    dasmEntries.add( 0xC05b, 0 );
    dasmEntries.add( 0xC064, 0 );
    dasmEntries.add( 0xC077, 0 );
    dasmEntries.add( 0xC08d, 0 );
    dasmEntries.add( 0xC096, 0 );
    dasmEntries.add( 0xC0b3, 0 );
    dasmEntries.add( 0xC0BA, 0, 'Load_X_with_value_03F6' );
    dasmEntries.add( 0xC0BE, 0, 'Load_X_with_value_03EA' );
    dasmEntries.add( 0xC0C2, 0, 'Load_X_with_value_0402' );
    dasmEntries.add( 0xC0C6, 0, 'SetRam86_to_20' );
    dasmEntries.add( 0xC0ce, 0 );

    dasmEntries.add( 0xC13e, 0 );
    dasmEntries.add( 0xC19e, 0 );

    dasmEntries.add( 0xC20a, 0 );
    dasmEntries.add( 0xC22c, 0 );
    dasmEntries.add( 0xC24f, 0 );
    dasmEntries.add( 0xC2ca, 0 );

    dasmEntries.add( 0xC316, 0 );
    dasmEntries.add( 0xC336, 0 );
    dasmEntries.add( 0xC357, 0 );
    dasmEntries.add( 0xC385, 0 );
    dasmEntries.add( 0xC3cd, 0 );
    dasmEntries.add( 0xC3f5, 0 );

    dasmEntries.add( 0xC40e, 0 );
    dasmEntries.add( 0xC423, 0 );
    dasmEntries.add( 0xC43b, 0 );
    dasmEntries.add( 0xC453, 0 );
    dasmEntries.add( 0xC465, 0 );
    dasmEntries.add( 0xC48d, 0 );
    dasmEntries.add( 0xC4b5, 0 );
    dasmEntries.add( 0xC4c7, 0 );
    dasmEntries.add( 0xC4fb, 0 );

    dasmEntries.add( 0xC513, 0 );
    dasmEntries.add( 0xC59b, 0, 'checkDEBUGIsActive' );
    dasmEntries.add( 0xC5c5, 0 );

    dasmEntries.add( 0xC604, 0 );
    dasmEntries.add( 0xC61e, 0 );
    dasmEntries.add( 0xC635, 0 );
    dasmEntries.add( 0xC738, 0, 'start_task_indexA' );
    dasmEntries.add( 0xC666, 0 );
    dasmEntries.add( 0xC679, 0 );
    dasmEntries.add( 0xC685, 0 );
    dasmEntries.add( 0xC6ae, 0 );
    dasmEntries.add( 0xC6c9, 0 );
    dasmEntries.add( 0xC6d2, 0 );
    dasmEntries.add( 0xC6d8, 0 );
    dasmEntries.add( 0xC6e9, 0 );
    dasmEntries.add( 0xC6fc, 0 );
    dasmEntries.add( 0xC709, 0 );
    dasmEntries.add( 0xC748, 0 );
    dasmEntries.add( 0xC768, 0 );
    dasmEntries.add( 0xC7a5, 0 );

    dasmEntries.add( 0xC832, 0, 'start_task_FINISH_WITH_CARRY_SET' );
    dasmEntries.add( 0xC838, 0 );
    dasmEntries.add( 0xC855, 0 );
    dasmEntries.add( 0xC869, 0 );
    dasmEntries.add( 0xC885, 0 );
    dasmEntries.add( 0xC8CB, 0, 'sys_deff_check' );
    dasmEntries.addTableSys( 0xC8E0, 'tbl_sys_C8E0', 1, 2 );
    dasmEntries.add( 0xC8E2, 1 );

    dasmEntries.add( 0xC916, 0 );
    dasmEntries.add( 0xC920, 0, 'sys_deff_exit' );
    dasmEntries.add( 0xC934, 0 );
    dasmEntries.add( 0xC954, 0 );
    dasmEntries.add( 0xC96c, 0 );
    dasmEntries.add( 0xC9bc, 0 );
    dasmEntries.add( 0xC9c2, 0 );
    dasmEntries.add( 0xC9dd, 0 );
    dasmEntries.add( 0xC9f3, 0 );

    dasmEntries.add( 0xCa05, 0 );
    dasmEntries.add( 0xCa0e, 0 );
    dasmEntries.add( 0xCa1e, 0 );
    dasmEntries.add( 0xCa2c, 0 );
    dasmEntries.add( 0xCa45, 0 );
    dasmEntries.add( 0xCA5B, 0, 'LoadAFromRam440' );
    dasmEntries.add( 0xCA5F, 0, 'LoadAFromRam441' );
    dasmEntries.add( 0xCA63, 0, 'LoadAFromRam442' );
    dasmEntries.add( 0xCA67, 0, 'LoadAFromRam43D' );
    dasmEntries.add( 0xCA6B, 0, 'LoadAFromRam43F' );
    dasmEntries.add( 0xCA6F, 0, 'StoreAToRam43D' );
    dasmEntries.add( 0xCA73, 0, 'set_bit20_ram43E' );
    dasmEntries.add( 0xCA7F, 0, 'clr_bit20_ram43E' );
    dasmEntries.add( 0xCA8B, 0, 'StoreAToRam43F' );
    dasmEntries.add( 0xCA8f, 0 );
    dasmEntries.add( 0xCA98, 0 );
    dasmEntries.add( 0xCAC5, 0, 'LoadAFromRam443' );
    dasmEntries.add( 0xCAc9, 0 );
    dasmEntries.add( 0xCAd3, 0 );
    dasmEntries.add( 0xCAec, 0 );
    dasmEntries.add( 0xCAf7, 0 );
    dasmEntries.add( 0xCAfe, 0 );
    dasmEntries.add( 0xCAff, 0 );

    dasmEntries.add( 0xCb00, 0 );
    dasmEntries.add( 0xCb01, 0 );
    dasmEntries.add( 0xCb06, 0 );
    dasmEntries.add( 0xCb10, 0 );
    dasmEntries.add( 0xCb1d, 0 );
    dasmEntries.addTableSys( 0xCB2B, 'tbl_sys_cb2b', 3, 2 );
    dasmEntries.add( 0xCB31, 0 );
    dasmEntries.add( 0xCb3f, 0 );
    dasmEntries.add( 0xCb46, 0 );
    dasmEntries.add( 0xCb4d, 0 );
    dasmEntries.add( 0xCb54, 0 );
    dasmEntries.add( 0xCB61, 0 );
    dasmEntries.add( 0xCB6B, 0 );
    dasmEntries.add( 0xCb7d, 0 );

    dasmEntries.add( 0xCC2D, 0, 'GetNextTask_BankAddressIntoXB_U' );
    dasmEntries.add( 0xCc34, 0 );
    dasmEntries.add( 0xCc44, 0 );
    dasmEntries.add( 0xCc53, 0 );
    dasmEntries.add( 0xCc94, 0 );
    dasmEntries.add( 0xCce2, 0 );

    dasmEntries.add( 0xCd3c, 0 );
    dasmEntries.add( 0xCd64, 0 );
    dasmEntries.add( 0xCd88, 0 );
    dasmEntries.add( 0xCdbf, 0 );
    dasmEntries.add( 0xCdd9, 0 );
    dasmEntries.add( 0xCdf3, 0 );

    dasmEntries.add( 0xCe0e, 0 );
    dasmEntries.add( 0xCe29, 0 );
    dasmEntries.add( 0xCe2c, 0 );
    dasmEntries.add( 0xCe4d, 0 );
    dasmEntries.add( 0xCe51, 0 );
    dasmEntries.add( 0xCe79, 0 );
    dasmEntries.add( 0xCe92, 0 );
    dasmEntries.add( 0xCe9b, 0 );
    dasmEntries.add( 0xCead, 0 );
    dasmEntries.add( 0xCebb, 0 );
    dasmEntries.add( 0xCec4, 0 );
    dasmEntries.add( 0xCec8, 0 );
    dasmEntries.add( 0xCedf, 0 );
    dasmEntries.add( 0xCee8, 0 );
    dasmEntries.add( 0xCeec, 0 );
    dasmEntries.add( 0xCefc, 0 );

    dasmEntries.add( 0xCf0c, 0 );
    dasmEntries.add( 0xCf40, 0 );
    dasmEntries.add( 0xCf65, 0 );
    dasmEntries.add( 0xCf80, 0 );
    dasmEntries.add( 0xCf90, 0 );
    dasmEntries.add( 0xCfaa, 0 );
    dasmEntries.add( 0xCfb0, 0 );
    dasmEntries.add( 0xCfe8, 0 );
 }

function getDasmEntries_sys_D000( dasmEntries ) {

    dasmEntries.add( 0xD04D, 0, 'sys_D04D' );
    dasmEntries.add( 0xD05D, 0, 'sys_D05D' );
    dasmEntries.add( 0xD06C, 0, 'sys_D06C' );
    dasmEntries.add( 0xD08F, 0, 'sys_D08F' );
    dasmEntries.add( 0xD123, 0, 'sys_D123' );
    dasmEntries.add( 0xD13F, 0, 'sys_D13F' );
    dasmEntries.add( 0xD153, 0, 'sys_D153' );
    dasmEntries.add( 0xD17B, 0, 'sys_D17B' );
    dasmEntries.add( 0xD190, 0, 'sys_D190' );
    dasmEntries.add( 0xD1E0, 0, 'sys_D1E0' );
    dasmEntries.add( 0xD1EB, 0, 'sys_D1EB' );
    dasmEntries.add( 0xD265, 0, 'sys_D265' );
    dasmEntries.add( 0xD26D, 0, 'sys_D26D' );
    dasmEntries.add( 0xD285, 0, 'sys_D285' );

    dasmEntries.add( 0xD2BB, 0, 'SetDMDLowPageFromA' );
    dasmEntries.add( 0xD2C2, 0, 'SetDMDHighPageFromA' );
    dasmEntries.add( 0xD2C9, 0, 'SetDMDToPageOne' );
    dasmEntries.add( 0xD2D3, 0, 'SetDMDToPageTwo' );
    dasmEntries.add( 0xD2DD, 0, 'ClearDMDPageCurrent' );
    dasmEntries.add( 0xD2E6, 0, 'ClearDMDPageAtU' );
    dasmEntries.add( 0xD334, 0, 'CopyDMDPage1ToPage2' );
    dasmEntries.add( 0xD341, 0, 'Copy512BytesAtU_to_Y' );
    dasmEntries.add( 0xD349, 0, 'Copy_B_times_16BytesAtU_to_Y' );
    dasmEntries.addTableSys( 0xD37f, 'tblJSRAddresses', 8, 2 );
    dasmEntries.add( 0xD38f, 0, 'tblJSRAddresses_00' );
    dasmEntries.add( 0xD3a8, 0, 'tblJSRAddresses_01' );
    dasmEntries.add( 0xD3d4, 0, 'tblJSRAddresses_02' );

    dasmEntries.add( 0xD36E, 0, 'sys_D36E' );

    dasmEntries.add( 0xd402, 0, 'tblJSRAddresses_03' );
    dasmEntries.add( 0xd431, 0, 'tblJSRAddresses_04' );
    dasmEntries.add( 0xd460, 0, 'tblJSRAddresses_05' );
    dasmEntries.add( 0xd48f, 0, 'tblJSRAddresses_06' );
    dasmEntries.add( 0xd4bd, 0, 'tblJSRAddresses_07' );
    dasmEntries.add( 0xD4E9, 0, 'sys_D4E9' );
    dasmEntries.add( 0xD4EF, 0, 'sys_D4EF' );
    dasmEntries.add( 0xD4FC, 0, 'sys_D4FC' );

    dasmEntries.add( 0xD55B, 0, 'sys_D55B' );
    dasmEntries.add( 0xD589, 0, 'sys_D589' );
    dasmEntries.add( 0xD5C6, 0, 'sys_D5C6' );

    dasmEntries.add( 0xD603, 0, 'sys_D603' );
    dasmEntries.addTableSys( 0xD637, 'tblD637', 1, 2 );
    dasmEntries.add( 0xD639, 0, 'sys_D639' );
    dasmEntries.add( 0xD65A, 0, 'sys_D65A' );
    dasmEntries.add( 0xD678, 0, 'sys_D678' );
    dasmEntries.add( 0xD68E, 0, 'Load_XB_with_bankaddress_FONT_B'  );
    dasmEntries.addTableSys( 0xD6B1, 'tblD6B1', 1, 2 );
    dasmEntries.add( 0xD6B3, 0, 'Load_XB_with_bankaddress_FONT_B' );
    dasmEntries.add( 0xD6E4, 0, 'Load_XB_with_bankaddress_FONT_B' );

    dasmEntries.add( 0xD75E, 0, 'sys_D75E' );
    dasmEntries.add( 0xD76C, 0, 'sys_D76C' );
    dasmEntries.add( 0xD77A, 0, 'sys_D77A' );
    dasmEntries.add( 0xD788, 0, 'sys_D788' );
    dasmEntries.add( 0xD7BA, 0, 'sys_D7BA' );
    dasmEntries.add( 0xD7E2, 0, 'sys_D7E2' );
    dasmEntries.addTableSys( 0xD70C, 'tblD70C', 1, 2 );
    dasmEntries.addSysMacro( 0xd70e, 5, [2, 1, 2], "writeString_INDEX_FONT_POS"  );
    dasmEntries.addTableSys( 0xD728, 'tblD728', 1, 2 );

    dasmEntries.addSysMacro( 0xd72a, 5, [2, 1, 2]  );

    dasmEntries.addTableSys( 0xD743, 'tblD743', 1, 2 );

    dasmEntries.addSysMacro( 0xd745, 5, [2, 1, 2]  );

    dasmEntries.addTableSys( 0xD7E0, 'tblD7E0', 1, 2 );
    dasmEntries.add( 0xD833, 0, '' );
    dasmEntries.addTableSys( 0xD858, 'tblD858', 32, 2 );
    dasmEntries.add( 0xD80F, 0, 'sys_D80F' );
    dasmEntries.add( 0xD83F, 0, 'sys_D83F' );
    dasmEntries.add( 0xD898, 0, 'sys_D898' );
    dasmEntries.add( 0xD8FE, 0, 'sys_D8FE' );

    dasmEntries.add( 0xD98D, 0, 'sys_D98D' );
    dasmEntries.add( 0xD999, 0, 'sys_D999' );
    dasmEntries.add( 0xD9A7, 0, 'sys_D9A7' );
    dasmEntries.add( 0xD9C2, 0, 'sys_D9C2' );
    dasmEntries.add( 0xD9CB, 0, 'sys_D9CB' );

    dasmEntries.add( 0xDA5B, 0, 'FIRQ_MINUS');
    dasmEntries.add( 0xDA5F, 0, 'FIRQ_2');
    dasmEntries.add( 0xDA69, 0, 'IRQ');
    dasmEntries.add( 0xDA2F, 0, 'sys_DA2F' );
    dasmEntries.add( 0xDA3C, 0, 'sys_DA3C' );
    dasmEntries.add( 0xDA4C, 0, 'sys_DA4C' );
    dasmEntries.add( 0xDA8E, 0, 'sys_DA8E' );
    dasmEntries.add( 0xDDDB, 0, 'sys_DDDB' );
    dasmEntries.add( 0xDF9A, 0, 'sys_DF9A' );
 }

function getDasmEntries_sys_E000( dasmEntries ) {

    dasmEntries.add( 0xE03D, 0, 'sys_E03D' );
    dasmEntries.add( 0xE14C, 0, 'sys_E14C' );
    dasmEntries.add( 0xE165, 0, 'sys_E165' );
    dasmEntries.add( 0xE210, 0, 'sys_E210' );
    dasmEntries.add( 0xE229, 0, 'sys_E229' );
    dasmEntries.add( 0xE2A5, 0, 'sys_E2A5' );
    dasmEntries.add( 0xE2AE, 0, 'sys_E2AE' );
    dasmEntries.add( 0xE2E2, 0, 'sys_E2E2' );
    dasmEntries.add( 0xE2FD, 0, 'sys_E2FD' );
    dasmEntries.add( 0xE30D, 0, 'sys_E30D' );
    dasmEntries.add( 0xE31F, 0, 'sys_E31F' );
    dasmEntries.add( 0xE326, 0, 'sys_E326' );
    dasmEntries.add( 0xE33A, 0, 'sys_E33A' );
    dasmEntries.add( 0xE348, 0, 'sys_E348' );
    dasmEntries.add( 0xE34E, 0, 'sys_E34E' );
    dasmEntries.add( 0xE380, 0, 'sys_E380' );
    dasmEntries.add( 0xE38F, 0, 'sys_E38F' );
    dasmEntries.add( 0xE3B3, 0, 'sys_E3B3' );
    dasmEntries.add( 0xE3D1, 0, 'sys_E3D1' );
    dasmEntries.add( 0xE3D4, 0, 'sys_E3D4' );
    dasmEntries.add( 0xE3ED, 0, 'sys_E3ED' );
    dasmEntries.add( 0xE3FA, 0, 'sys_E3FA' );
    dasmEntries.add( 0xE407, 0, 'sys_E407' );
    dasmEntries.add( 0xE411, 0, 'sys_E411' );
    dasmEntries.add( 0xE417, 0, 'sys_E417' );
    dasmEntries.add( 0xE41D, 0, 'sys_E41D' );
    dasmEntries.add( 0xE423, 0, 'sys_E423' );
    dasmEntries.add( 0xE43A, 0, 'sys_E43A' );
    dasmEntries.add( 0xE440, 0, 'sys_E440' );
    dasmEntries.add( 0xE454, 0, 'sys_E454' );
    dasmEntries.add( 0xE462, 0, 'sys_E462' );
    dasmEntries.add( 0xE6DD, 0, 'sys_E6DD' );

    dasmEntries.add( 0xE2BF, 0, 'FIRQ_DMD' );
    dasmEntries.add( 0xE386, 0 );
    dasmEntries.add( 0xE371, 0 );
    dasmEntries.add( 0xE3E1, 0, 'setDMDLowPage_A_DMDHighPage_B');

    dasmEntries.addTableSys( 0xE42C, 'tblE42C', 1, 2 );
    dasmEntries.addSysMacro( 0xE42E, 1, [1] );
    dasmEntries.addSysMacro( 0xE42E, 1, [1] );
    dasmEntries.addTableSys( 0xE446, 'tblE446', 1, 2 );
    dasmEntries.addSysMacro( 0xE448, 1, [1] );
    dasmEntries.addTableSys( 0xE468, 'tblE468', 1, 2 );
    dasmEntries.addSysMacro( 0xE46A, 1, [1] );
    dasmEntries.addTableSys( 0xE476, 'tblE476', 26, 4 );

    dasmEntries.add( 0xe49c, 0, 'SysHook_2d');
    dasmEntries.add( 0xe4de, 0, 'SysHook_03');
    dasmEntries.add( 0xe4f8, 0, 'SysHook_02');
    dasmEntries.add( 0xe58c, 0, 'SysHook_01');

    dasmEntries.addTableSys( 0xE67B, 'tblE67B', 4, 2 );

    dasmEntries.add( 0xe683, 0, 'SysHook_22' );

    dasmEntries.addTableSys( 0xE7BA, 'tblE7BA', 5, 2 );

    dasmEntries.add( 0xe7ba, 0, 'SysHook_1f' );
    dasmEntries.add( 0xe7bc, 0, 'SysHook_1e' );
    dasmEntries.add( 0xe7be, 0, 'SysHook_0d' );
    dasmEntries.add( 0xe7bf, 0, 'SysHook_0c' );
    dasmEntries.add( 0xe7c0, 0, 'SysHook_2e' );
    dasmEntries.add( 0xe7c2, 0, 'SysHook_0a' );
    dasmEntries.add( 0xe7c3, 0, 'SysHook_1b' );

    // dasmEntries.add( 0xe7c4, 0, 'SysHook_0b' );
    dasmEntries.addTableSys( 0xE7C4, 'SysHook_0b', 1, 1 );
    dasmEntries.add( 0xE7C5, 0, 'ISR_SerialProcessing' );
    dasmEntries.add( 0xe854, 0, 'SysHook_04' );

    dasmEntries.addTableSys( 0xEA30, 'tblEA30', 43, 2 );

    dasmEntries.add( 0xea30, 0, 'SysHook_27' );
    dasmEntries.add( 0xea5c, 0, 'SysHook_26' );

    dasmEntries.addTableSys( 0xEA86, 'tblEA86', 1, 1 );
    dasmEntries.addTableSys( 0xEA97, 'tblEA97', 3, 2 );

    dasmEntries.add( 0xea97, 0, 'SysHook_19' );
    dasmEntries.add( 0xea99, 0, 'SysHook_18' );

    dasmEntries.addTableSys( 0xEAB6, 'tblEBA6', 1, 2 );
    dasmEntries.add( 0xEAB8, 2 );
    dasmEntries.addTableSys( 0xEAFD, 'tblEAFD', 1, 2 );
    dasmEntries.add( 0xEAFF, 1 );
    dasmEntries.addTableSys( 0xEB0C, 'tblEB0C', 1, 2 );
    dasmEntries.addTableSys( 0xEB48, 'tblEB48', 1, 2 );

    dasmEntries.addSysMacro( 0xEB4A, 6, [2, 1, 2, 1], 'writeString_INDEX_FONT_POS_STYLE');

    dasmEntries.addTableSys( 0xEB63, 'tblEB63', 1, 2 );
    dasmEntries.addSysMacro( 0xeb65, 6, [2,1,2,1], 'writeStringFormatted_INDEX_FONT_POS_STYLE' );

    dasmEntries.addTableSys( 0xEBA6, 'tblEBA6', 1, 2 );
    dasmEntries.addSysMacro( 0xEBA8, 6, [2,1,2,1], 'writeStringNEWER_INDEX_FONT_POS_STYLE' );

    dasmEntries.addTableSys( 0xEBC1, 'tblEBC1', 1, 2 );
    dasmEntries.add( 0xEBC3, 6 );
    dasmEntries.addTableSys( 0xEC04, 'tblEC04', 1, 2 );
    dasmEntries.add( 0xEC06, 6 );
    dasmEntries.addTableSys( 0xEC1F, 'tblEC1F', 1, 2 );
    dasmEntries.addSysMacro( 0xEc21, 6, [2, 1, 2, 1] );

    dasmEntries.addTableSys( 0xEC75, 'tblEC75', 1, 2 );
    dasmEntries.addTableSys( 0xECC4, 'tbl_ImageType_Processor', 12, 2 );
    dasmEntries.addTableSys( 0xECED, 'tblECED', 8, 2 );
    dasmEntries.add( 0xECFD, 0 );
    dasmEntries.add( 0xED22, 0 );
    dasmEntries.add( 0xED69, 0 );
    dasmEntries.add( 0xEDB3, 0 );
    dasmEntries.add( 0xEDFE, 0 );
    dasmEntries.add( 0xEE48, 0 );
    dasmEntries.add( 0xEE91, 0 );
    dasmEntries.add( 0xEED8, 0 );
    dasmEntries.addTableSys( 0xEFE1, 'tblEFE1', 8, 2 );
    dasmEntries.add( 0xEFF1, 0 );

    dasmEntries.add( 0xEAD7, 0, 'sys_EAD7' );
    dasmEntries.add( 0xEB0E, 0, 'sys_EB0E' );
    dasmEntries.add( 0xEB1A, 0, 'sys_EB1A' );
    dasmEntries.add( 0xEC62, 0, 'sys_EC62' );
    dasmEntries.add( 0xEC77, 0, 'sys_EC77' );
    dasmEntries.add( 0xEC89, 0, 'sys_EC89' );
    dasmEntries.add( 0xEC93, 0, 'sys_EC93' );
    dasmEntries.add( 0xECDC, 0, 'sys_ECDC' );
    dasmEntries.add( 0xEF1C, 0, 'sys_EF1C' );
    dasmEntries.add( 0xEFD0, 0, 'sys_EFD0' );
}

function getDasmEntries_sys_F000( dasmEntries ) {

    dasmEntries.add( 0xF017, 0 );
    dasmEntries.add( 0xF060, 0 );
    dasmEntries.add( 0xF0ac, 0 );
    dasmEntries.add( 0xF0F9, 0 );
    dasmEntries.add( 0xF145, 0 );
    dasmEntries.add( 0xF190, 0 );
    dasmEntries.add( 0xF1D9, 0 );
    dasmEntries.add( 0xF21f, 0,'Load_XB_with_bankaddress_FONT_B_STYLE_Y' );
    dasmEntries.add( 0xF257, 0 );
    dasmEntries.add( 0xF266, 0,'FontProcessing' );

    dasmEntries.add( 0xf332, 0, 'SysHook_28');
    dasmEntries.add( 0xf387, 0, 'SysHook_29');
    dasmEntries.add( 0xf38a, 0, 'ramCode_func_0');    // +0
    dasmEntries.add( 0xf38e, 0, 'ramCode_func_1');    // +4
    dasmEntries.add( 0xf392, 0, 'ramCode_func_2');    // +8
    dasmEntries.add( 0xf396, 0, 'ramCode_func_3');    // +C

    dasmEntries.add( 0xF39A, 0, 'copyCodeToRam_func_A' );
    dasmEntries.add( 0xf3b2, 0, 'copyCodeToRam_func_0');    // +C

    dasmEntries.addTableSys( 0xF3D8, 'tblF3D8', 8, 2 );
    dasmEntries.add( 0xF3E8, 0 );
    dasmEntries.add( 0xF402, 0 );
    dasmEntries.add( 0xF430, 0 );
    dasmEntries.add( 0xF460, 0 );
    dasmEntries.add( 0xF491, 0 );
    dasmEntries.add( 0xF4C2, 0 );
    dasmEntries.add( 0xF4F3, 0 );
    dasmEntries.add( 0xF523, 0 );
    dasmEntries.add( 0xF60a, 1 );
    dasmEntries.add( 0xF619, 1 );
    dasmEntries.addSysMacro( 0xF628, 1, [1] );
    dasmEntries.addTableSys( 0xF637, 'tblF637', 1, 2 );
    dasmEntries.add( 0xF639, 1 );
    dasmEntries.addTableSys( 0xF64B, 'tblF64B', 1, 2 );
    dasmEntries.add( 0xF64d, 1 );
    dasmEntries.addTableSys( 0xF65F, 'tblF65F', 1, 2 );
    dasmEntries.add( 0xF661, 1 );
    dasmEntries.addTableSys( 0xF66E, 'tblF66E', 8, 2 );
    dasmEntries.addTableSys( 0xF6C2, 'tblF6C2', 1, 2 );
    dasmEntries.add( 0xF6c4, 1 );
    dasmEntries.addTableSys( 0xF6E0, 'tblF6E0', 1, 2 );
    dasmEntries.add( 0xF6E2, 1 );
    dasmEntries.addTableSys( 0xF708, 'tblF708', 1, 2 );
    dasmEntries.add( 0xF70A, 1 );
    dasmEntries.addTableSys( 0xF77A, 'tblF77A', 1, 2 );
    dasmEntries.addSysMacro( 0xF77c, 1, [1] );
    dasmEntries.addTableSys( 0xF789, 'tblF789', 1, 2 );
    dasmEntries.add( 0xF78B, 2 );
    dasmEntries.addTableSys( 0xF798, 'tblF798', 1, 2 );
    // dasmEntries.add( 0xF79A, 1 );
    dasmEntries.addSysMacro( 0xF79A, 1, [1],'bnk_30_774f' );
    dasmEntries.addTableSys( 0xF7AA, 'tblF7AA', 1, 2 );
    dasmEntries.add( 0xF7AC, 2 );
    dasmEntries.addTableSys( 0xF7BD, 'tblF7BD', 1, 2 );
    dasmEntries.add( 0xF7BF, 2 );
    dasmEntries.addTableSys( 0xF7E3, 'tblF7E3', 1, 2 );
    dasmEntries.add( 0xF7E5, 2 );
    dasmEntries.addTableSys( 0xF7d0, 'tblF7D0', 1, 2 );
    dasmEntries.add( 0xF7D2, 2 );
    dasmEntries.addTableSys( 0xF7F6, 'tblF7F6', 1, 2 );
    dasmEntries.add( 0xF7F8, 2 );
    dasmEntries.addTableSys( 0xF809, 'tblF809', 1, 2 );
    dasmEntries.addTableSys( 0xF81C, 'tblF81C', 1, 2 );
    dasmEntries.add( 0xF81E, 1 );
    dasmEntries.addTableSys( 0xF830, 'tblF830', 1, 2 );
    dasmEntries.addSysMacro( 0xF832, 1, [1] );
    dasmEntries.addTableSys( 0xF844, 'tblF844', 1, 2 );
    dasmEntries.addSysMacro( 0xF846, 1, [1] );
    dasmEntries.addTableSys( 0xF858, 'tblF858', 1, 2 );
    dasmEntries.add( 0xF85a, 2 );
    dasmEntries.addTableSys( 0xF86A, 'tblF86A', 1, 2 );
    dasmEntries.add( 0xF86C, 2 );
    dasmEntries.addTableSys( 0xF87c, 'tblF87c', 1, 2 );
    dasmEntries.addSysMacro( 0xF87E, 2, [2] );
    dasmEntries.addTableSys( 0xF88e, 'tblF88e', 1, 2 );
    dasmEntries.add( 0xF890, 2 );
    dasmEntries.addTableSys( 0xf8a0, 'tblF8A0', 1, 2 );
    dasmEntries.addSysMacro( 0xF8A2, 2, [2] );
    dasmEntries.addTableSys( 0xf8b2, 'tblf8b2', 1, 2 );
    dasmEntries.add( 0xF8B4, 2 );
    dasmEntries.addTableSys( 0xf8c4, 'tblf8c4', 1, 2 );
    dasmEntries.add( 0xF8C6, 2 );
    dasmEntries.addTableSys( 0xf8d6, 'tblF8d6', 1, 2 );
    dasmEntries.add( 0xF8D8, 1 );
    dasmEntries.addTableSys( 0xf916, 'tblf916', 1, 2 );
    dasmEntries.addSysMacro( 0xF918, 1, [1], "taskCallback_INDEX" );
    dasmEntries.addTableSys( 0xf925, 'tblf925', 1, 2 );
    dasmEntries.addSysMacro( 0xf927, 2, [2] , 'LoadGraphicsTable_INDEX' );
    dasmEntries.addTableSys( 0xf936, 'tblf936', 1, 2 );
    dasmEntries.add( 0xF938, 2 );
    dasmEntries.addTableSys( 0xf947, 'tblf947', 1, 2 );
    dasmEntries.add( 0xF949, 2 );
    dasmEntries.addTableSys( 0xf958, 'tblf958', 1, 2 );
    dasmEntries.addSysMacro( 0xf95a, 2, [2] , 'LoadGraphicsTableEntry_FullScreen' );
    dasmEntries.add( 0xF995, 0, 'LoadGraphicsTable_index_Y' );
    dasmEntries.add( 0xF9dc, 0, 'ThrowError_UnsupportedPictureFormat' );
    dasmEntries.add( 0xF9e1, 0, 'LoadGraphic_currentDmdGraphicIndex' );
    dasmEntries.add( 0xFA96, 0, 'LoadFixedImgType0_to_DMD' );
    dasmEntries.add( 0xFa9c, 0, 'Copy512BytesAtX_to_Y' );
    dasmEntries.add( 0xFaa2, 0, 'LoadFixedImgType1_to_DMD' );
    dasmEntries.add( 0xFaa8, 0, 'copyImageBytesToDmd' );
    dasmEntries.add( 0xFb27, 0, 'LoadFixedImgType2_to_DMD' );
    dasmEntries.add( 0xFbb1, 0, 'LoadFixedImgType8_to_DMD' );
    dasmEntries.add( 0xFb86, 0, 'LoadFixedImgType9_to_DMD' );

    dasmEntries.add( 0xfc0c, 0, 'SysHook_05' );
    dasmEntries.add( 0xfc0d, 0, 'SysHook_06' );
    dasmEntries.add( 0xfc0f, 0, 'SysHook_07' );
    dasmEntries.add( 0xfc17, 0, 'SysHook_08' );
    dasmEntries.add( 0xfc19, 0, 'SysHook_09' );
    dasmEntries.add( 0xfc1a, 0, 'SysHook_20' );
    dasmEntries.add( 0xfc1b, 0, 'SysHook_0e' );
    dasmEntries.add( 0xfc1d, 0, 'SysHook_0f' );
    dasmEntries.add( 0xfc1f, 0, 'SysHook_10' );
    dasmEntries.add( 0xfc21, 0, 'SysHook_11' );
    dasmEntries.add( 0xfc23, 0, 'SysHook_12' );
    dasmEntries.add( 0xfc25, 0, 'SysHook_13' );
    dasmEntries.add( 0xfc27, 0, 'SysHook_14' );
    dasmEntries.add( 0xfc29, 0, 'SysHook_15' );
    dasmEntries.add( 0xfc2b, 0, 'SysHook_16' );
    dasmEntries.add( 0xfc2d, 0, 'SysHook_17' );
    dasmEntries.add( 0xfc2f, 0, 'SysHook_1c' );
    dasmEntries.add( 0xfc31 , 0, 'SysHook_1d' );
    dasmEntries.add( 0xfc33 , 0, 'SysHook_1a' );
    dasmEntries.add( 0xfc37 , 0, 'SysHook_21' );
    dasmEntries.add( 0xfc38 , 0, 'SysHook_23' );
    dasmEntries.add( 0xfc39 , 0, 'SysHook_24' );
    dasmEntries.add( 0xfc3b , 0, 'SysHook_25' );
    dasmEntries.add( 0xfc3c , 0, 'SysHook_2a' );
    dasmEntries.add( 0xfc3d , 0, 'SysHook_2b' );
    dasmEntries.add( 0xfc3e , 0, 'SysHook_2c' );

    dasmEntries.addTableSys( 0xFC0D, 'twobytes', 25, 2 );
    dasmEntries.addTableSys( 0xFC3F, 'filler', 47, 15);
    dasmEntries.addTableSys( 0xFF00, 'copyright', 10, 12);
    dasmEntries.addTableSys( 0xFF78, 'filler', 7, 10);
    dasmEntries.addTableSys( 0xFFBE, 'vectors', 33, 2);
    dasmEntries.addTableSys( 0xFFEC, 'romChecksumCorrection', 1, 2);
    dasmEntries.addTableSys( 0xFFEE, 'romChecksum', 1, 2);


    dasmEntries.add( 0xF551, 0, 'sys_F551' );
    dasmEntries.add( 0xF575, 0, 'sys_F575' );
    dasmEntries.add( 0xF592, 0, 'sys_F592' );
    dasmEntries.add( 0xF5AF, 0, 'sys_F5AF' );
    dasmEntries.add( 0xF5F3, 0, 'sys_F5F3' );
    dasmEntries.add( 0xF600, 0, 'sys_F600' );
    dasmEntries.add( 0xF67E, 0, 'sys_F67E' );
    dasmEntries.add( 0xF68F, 0, 'sys_F68F' );
    dasmEntries.add( 0xF6A2, 0, 'sys_F6A2' );
    dasmEntries.add( 0xF6B2, 0, 'sys_F6B2' );
    dasmEntries.add( 0xF6B8, 0, 'sys_F6B8' );
    dasmEntries.add( 0xF6D2, 0, 'sys_F6D2' );
    dasmEntries.add( 0xF6D4, 0, 'sys_F6D4' );
    dasmEntries.add( 0xF6DA, 0, 'sys_F6DA' );
    dasmEntries.add( 0xF6EE, 0, 'sys_F6EE' );
    dasmEntries.add( 0xF702, 0, 'sys_F702' );
    dasmEntries.add( 0xF716, 0, 'sys_F716' );
    dasmEntries.add( 0xF73C, 0, 'sys_F73C' );
    dasmEntries.add( 0xF8E9, 0, 'taskCallback_INDEX_B' );
    dasmEntries.add( 0xF976, 0, 'sys_F976' );
    dasmEntries.add( 0xF97F, 0, 'sys_F97F' );
    dasmEntries.add( 0xF9DC, 0, 'sys_F9DC' );
    dasmEntries.add( 0xF9E1, 0, 'sys_F9E1' );
    dasmEntries.add( 0xFA10, 0, 'sys_FA10' );
    dasmEntries.add( 0xFA4C, 0, 'sys_FA4C' );
    dasmEntries.add( 0xFAED, 0, 'sys_FAED' );
    dasmEntries.add( 0xFB2D, 0, 'sys_FB2D' );
    dasmEntries.add( 0xFB5D, 0, 'sys_FB5D' );
    dasmEntries.add( 0xFB8C, 0, 'sys_FB8C' );
    dasmEntries.add( 0xFBB7, 0, 'sys_FBB7' );

}