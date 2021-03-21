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
    dasmEntries.addTable( 0x4001, 0x20, 'copyright', 29, 7 );
    dasmEntries.addBankLabel( 0x40cc, 0x20, 'CheckOrkinTerminalConnected' );

    dasmEntries.addBankLabel( 0x410a, 0x20, 'OrkinError' );
    dasmEntries.addBankLabel( 0x414A, 0x20, 'LogToDebugOut_sys_suicide_call' );
    dasmEntries.addBankLabel( 0x415B, 0x20, 'LogToDebugOut_process_killed' );
    dasmEntries.addBankLabel( 0x416c, 0x20, 'USER_DEFINED_ERROR_FATAL' );
    dasmEntries.addBankLabel( 0x4178, 0x20, 'APPLE_ERROR_FATAL' );
    dasmEntries.addBankLabel( 0x417F, 0x20, 'APPLE_ERROR_NON_FATAL' );
    dasmEntries.addBankLabel( 0x4186, 0x20, 'USER_DEFINED_ERROR_NON_FATAL' );
    dasmEntries.addBankLabel( 0x4192, 0x20, 'APPLE_UNIMPLEMENTED_CODE' );
    dasmEntries.addBankLabel( 0x4199, 0x20, 'SetRamFlag17A8_to_TRUE' );
    dasmEntries.addBankLabel( 0x419f, 0x20, 'SetRamFlag17A8_to_FALSE' );
    dasmEntries.addBankLabel( 0x41a3, 0x20, 'SetRam179F_to_FF' );
    dasmEntries.addBankLabel( 0x41a9, 0x20, 'SetRam179F_to_BF' );
    dasmEntries.addBankLabel( 0x41af, 0x20, 'SetRam179F_to_DF' );
    dasmEntries.addBankLabel( 0x41B5, 0x20, 'SetRam179F_to_7F' );
    dasmEntries.addBankLabel( 0x41bb, 0x20, 'SetRam179F_to_ZERO' );
    dasmEntries.addBankLabel( 0x41BF, 0x20, 'bnk_20_41BF' );
    dasmEntries.addBankLabel( 0x41DB, 0x20, 'getSysCallTypeForRoutine_at_X' );

    dasmEntries.addTable( 0x420e, 0x20, 'tblOrkinSysCallTypes', 6, 5 );
    dasmEntries.addBankLabel( 0x422c, 0x20, 'GetBankCallTypeForRoutine_at_X' );
    dasmEntries.addBankLabel( 0x4243, 0x20, 'bnk_20_4243' );
    dasmEntries.addBankLabel( 0x4282, 0x20, 'bnk_20_4282' );
    dasmEntries.addBankLabel( 0x4299, 0x20, 'bnk_20_4299' );
    dasmEntries.addTable( 0x42e2, 0x20, 'tblSixBytes', 9, 6 );

    dasmEntries.addBankLabel( 0x4318, 0x20, 'bnk_20_4318' );
    dasmEntries.addBankLabel( 0x433B, 0x20, 'bnk_20_433B' );
    dasmEntries.addBankLabel( 0x436B, 0x20, 'bnk_20_436B' );
    dasmEntries.addBankLabel( 0x4387, 0x20, 'WriteToDebugOut_Process_FreeList' );
    dasmEntries.addTableStrings( 0x439f, 0x20, 'strHdr_FreeList', 0x0e );
    dasmEntries.addBankLabel( 0x43ad, 0x20, 'bnk_20_43ad' );
    dasmEntries.addBankLabel( 0x43C2, 0x20, 'bnk_20_43C2' );
    dasmEntries.addBankLabel( 0x43D6, 0x20, 'bnk_20_43D6' );
    dasmEntries.addBankLabel( 0x43F6, 0x20, 'bnk_20_43F6' );

    dasmEntries.addBankLabel( 0x4417, 0x20, 'bnk_20_4417' );
    dasmEntries.addBankLabel( 0x4435, 0x20, 'TestAddressInXIsTaskBlock' );
    dasmEntries.addBankLabel( 0x4457, 0x20, 'bnk_20_4457' );
    dasmEntries.addBankLabel( 0x447A, 0x20, 'bnk_20_447A' );
    dasmEntries.addBankLabel( 0x44A5, 0x20, 'bnk_20_44A5' );
    dasmEntries.addBankLabel( 0x44B3, 0x20, 'bnk_20_44B3' );
    dasmEntries.addBankLabel( 0x44D3, 0x20, 'bnk_20_44D3' );
    dasmEntries.addBankLabel( 0x44E1, 0x20, 'bnk_20_44E1' );

    dasmEntries.addBankLabel( 0x4509, 0x20, 'bnk_20_4509' );
    dasmEntries.addBankLabel( 0x4512, 0x20, 'bnk_20_4512' );
    dasmEntries.addBankLabel( 0x4525, 0x20, 'bnk_20_4525' );
    dasmEntries.addBankLabel( 0x4534, 0x20, 'bnk_20_4534' );
    dasmEntries.addBankLabel( 0x4557, 0x20, 'bnk_20_4557' );
    dasmEntries.addBankLabel( 0x4590, 0x20, 'bnk_20_4590' );
    dasmEntries.addBankLabel( 0x45A1, 0x20, 'bnk_20_45A1' );
    dasmEntries.addBankLabel( 0x45C0, 0x20, 'bnk_20_45C0' );
    dasmEntries.addBankLabel( 0x45CB, 0x20, 'bnk_20_45CB' );
    dasmEntries.addBankLabel( 0x45D6, 0x20, 'bnk_20_45D6' );
    dasmEntries.addBankLabel( 0x45E2, 0x20, 'bnk_20_45E2' );
    dasmEntries.addBankLabel( 0x45EE, 0x20, 'bnk_20_45EE' );
    dasmEntries.addBankLabel( 0x45FC, 0x20, 'bnk_20_45FC' );

    dasmEntries.addBankLabel( 0x460A, 0x20, 'bnk_20_460A' );
    dasmEntries.addBankLabel( 0x4616, 0x20, 'bnk_20_4616' );
    dasmEntries.addBankLabel( 0x462C, 0x20, 'bnk_20_462C' );
    dasmEntries.addBankLabel( 0x4642, 0x20, 'OrkinLampDisplay' );
    dasmEntries.addBankLabel( 0x468D, 0x20, 'bnk_20_468D' );
    dasmEntries.addBankLabel( 0x46B0, 0x20, 'bnk_20_46B0' );
    dasmEntries.addBankLabel( 0x46D4, 0x20, 'bnk_20_46D4' );
    dasmEntries.addBankLabel( 0x46EA, 0x20, 'bnk_20_46EA' );

    dasmEntries.addBankLabel( 0x4714, 0x20, 'bnk_20_4714' );
    dasmEntries.addBankLabel( 0x4736, 0x20, 'bnk_20_4736' );
    dasmEntries.addBankLabel( 0x473F, 0x20, 'bnk_20_473F' );
    dasmEntries.addBankLabel( 0x4767, 0x20, 'bnk_20_4767' );
    dasmEntries.addBankLabel( 0x4779, 0x20, 'bnk_20_4779' );
    dasmEntries.addBankLabel( 0x47B4, 0x20, 'bnk_20_47B4' );
    dasmEntries.addBankLabel( 0x47DB, 0x20, 'bnk_20_47DB' );

    dasmEntries.addBankLabel( 0x4808, 0x20, 'bnk_20_4808' );
    dasmEntries.addBankLabel( 0x4817, 0x20, 'bnk_20_4817' );
    dasmEntries.addBankLabel( 0x4828, 0x20, 'bnk_20_4828' );
    dasmEntries.addBankLabel( 0x4835, 0x20, 'bnk_20_4835' );
    dasmEntries.addTable( 0x485d, 0x20, 'tbl4Bytes', 16, 4 );
    dasmEntries.addBankLabel( 0x489D, 0x20, 'bnk_20_489D' );

    dasmEntries.addBankLabel( 0x491C, 0x20, 'bnk_20_491C' );
    dasmEntries.addBankLabel( 0x4924, 0x20, 'bnk_20_4924' );
    dasmEntries.addBankLabel( 0x492C, 0x20, 'bnk_20_492C' );
    dasmEntries.addBankLabel( 0x4934, 0x20, 'bnk_20_4934' );
    dasmEntries.addBankLabel( 0x493C, 0x20, 'bnk_20_493C' );
    dasmEntries.addBankLabel( 0x4944, 0x20, 'bnk_20_4944' );
    dasmEntries.addBankLabel( 0x494C, 0x20, 'bnk_20_494C' );
    dasmEntries.addBankLabel( 0x4954, 0x20, 'bnk_20_4954' );
    dasmEntries.addBankLabel( 0x495C, 0x20, 'bnk_20_495C' );
    dasmEntries.addBankLabel( 0x4964, 0x20, 'bnk_20_4964' );
    dasmEntries.addBankLabel( 0x4980, 0x20, 'bnk_20_4980' );
    dasmEntries.addBankLabel( 0x4991, 0x20, 'bnk_20_4991' );
    dasmEntries.addBankLabel( 0x49be, 0x20, 'WaitForKeypress' );
    dasmEntries.addBankLabel( 0x49DD, 0x20, 'bnk_20_49DD' );
    dasmEntries.addBankLabel( 0x49E6, 0x20, 'bnk_20_49E6' );
    dasmEntries.addBankLabel( 0x49EF, 0x20, 'bnk_20_49EF' );
    dasmEntries.addBankLabel( 0x49F8, 0x20, 'bnk_20_49F8' );

    dasmEntries.addBankLabel( 0x4A01, 0x20, 'bnk_20_4A01' );
    dasmEntries.addTableStrings( 0x4a26, 0x20, 'tblStrings-Orkin-A', 0x2c6 );

    dasmEntries.addTable( 0x4cec, 0x20, 'tbl2Bytes', 47, 2 );

    dasmEntries.addBankLabel( 0x4D4A, 0x20, 'bnk_20_4D4A' );
    dasmEntries.addBankLabel( 0x4D5A, 0x20, 'bnk_20_4D5A' );
    dasmEntries.addBankLabel( 0x4D63, 0x20, 'bnk_20_4D63' );
    dasmEntries.addBankLabel( 0x4D75, 0x20, 'bnk_20_4D75' );
    dasmEntries.addBankLabel( 0x4DD0, 0x20, 'bnk_20_4DD0' );
    dasmEntries.addBankLabel( 0x4dee, 0x20, 'WriteToDebugOut_StrInBuffer' );

    dasmEntries.addBankLabel( 0x4e03, 0x20, 'WriteToDebugOut_Str_at_X' );
    dasmEntries.addBankLabel( 0x4E0F, 0x20, 'bnk_20_4E0F' );
    dasmEntries.addBankLabel( 0x4e1f, 0x20, 'WriteToDebugOut_Chr_in_A' );
    dasmEntries.addBankLabel( 0x4e5e, 0x20, 'CheckForUserBreak' );
    dasmEntries.addBankLabel( 0x4e72, 0x20, 'WriteToDebugOut_NewLine' );
    dasmEntries.addBankLabel( 0x4E7B, 0x20, 'bnk_20_4E7B' );
    dasmEntries.addBankLabel( 0x4e85, 0x20, 'WriteToDebugOut_Y_Formatted' );
    dasmEntries.addBankLabel( 0x4E8F, 0x20, 'bnk_20_4E8F' );
    dasmEntries.addBankLabel( 0x4e99, 0x20, 'WriteToDebugOut_A_Formatted' );
    dasmEntries.addBankLabel( 0x4EA3, 0x20, 'bnk_20_4EA3' );
    dasmEntries.addBankLabel( 0x4EAE, 0x20, 'bnk_20_4EAE' );
    dasmEntries.addBankLabel( 0x4EB6, 0x20, 'WriteToDebugOut_A_Spaces' );
    dasmEntries.addBankLabel( 0x4ec2, 0x20, 'WriteToDebugOut_Space' );
    dasmEntries.addBankLabel( 0x4ECB, 0x20, 'bnk_20_4ECB' );
    dasmEntries.addBankLabel( 0x4ED6, 0x20, 'bnk_20_4ED6' );
    dasmEntries.addBankLabel( 0x4EDF, 0x20, 'bnk_20_4EDF' );
    dasmEntries.addBankLabel( 0x4EE8, 0x20, 'bnk_20_4EE8' );
    dasmEntries.addBankLabel( 0x4EF1, 0x20, 'bnk_20_4EF1' );
    dasmEntries.addBankLabel( 0x4EFA, 0x20, 'bnk_20_4EFA' );

    dasmEntries.addBankLabel( 0x4F1F, 0x20, 'bnk_20_4F1F' );
    dasmEntries.addTable( 0x4f33, 0x20, 'tblOrkinFunctionCalls', 0x2d, 2 );
    dasmEntries.addBankLabel( 0x4fcd, 0x20, 'strErrMsg_LampEffectList' );
    dasmEntries.addBankLabel( 0x4fe0, 0x20, 'strErrMsg_PriorityProcessList' );
    dasmEntries.addBankLabel( 0x4ff0, 0x20, 'strErrMsg_RegularProcessList' );

    dasmEntries.addTableStrings( 0x4f8d, 0x20, 'tblStrings-Orkin-B', 0x76f );
    dasmEntries.addBankLabel( 0x4fe0, 0x20, 'strOrkin_PriorityList' );
    dasmEntries.addBankLabel( 0x4ff0, 0x20, 'strOrkin_RegularProcessList' );

    dasmEntries.addBankLabel( 0x5007, 0x20, 'strHdr_ProcessBlock' );
    dasmEntries.addBankLabel( 0x5051, 0x20, 'strErr_InvalidEntryInList' );
    dasmEntries.addBankLabel( 0x506f, 0x20, 'strErr_NotAProcessBlockAddress' );
    dasmEntries.addBankLabel( 0x5093, 0x20, 'strErr_SystemNotInitialized' );
    dasmEntries.addBankLabel( 0x50ac, 0x20, 'str_space_space' );
    dasmEntries.addBankLabel( 0x50af, 0x20, 'str_asterisk_space' );
    dasmEntries.addBankLabel( 0x50b2, 0x20, 'str_L' );
    dasmEntries.addBankLabel( 0x50b5, 0x20, 'strErr_None' );
    dasmEntries.addBankLabel( 0x50bc, 0x20, 'strErr_AppleUnimplementedCode' );
    dasmEntries.addBankLabel( 0x50da, 0x20, 'strErr_AppleInvalidCodeFromOrkin' );
    dasmEntries.addBankLabel( 0x50fe, 0x20, 'strErr_ProcessCalled_sys_suicide' );
    dasmEntries.addBankLabel( 0x511f, 0x20, 'strErr_ProcessKilled' );
    dasmEntries.addBankLabel( 0x5149, 0x20, 'strFmt_izpxy' );
    dasmEntries.addBankLabel( 0x5150, 0x20, 'strFmt_iy' );
    dasmEntries.addBankLabel( 0x5196, 0x20, 'strHdr_BlockType' );
    dasmEntries.addBankLabel( 0x52b8, 0x20, 'strHdr_SoftwareDefinedFields' );
    dasmEntries.addBankLabel( 0x52e9, 0x20, 'strHdr_Hex' );
    dasmEntries.addBankLabel( 0x5361, 0x20, 'strHdr_PhysicalLamps' );
    dasmEntries.addBankLabel( 0x5371, 0x20, 'strHdr_LogicalLamps' );
    dasmEntries.addBankLabel( 0x53b8, 0x20, 'str_Unused' );
    dasmEntries.addBankLabel( 0x53E2, 0x20, 'strMsg_MatrixInLampsPressAnyKey' );
    dasmEntries.addBankLabel( 0x5415, 0x20, 'stMsg_SegmentAreaInDisplays' );
    dasmEntries.addBankLabel( 0x5455, 0x20, 'str_df_soft' );
    dasmEntries.addBankLabel( 0x547b, 0x20, 'strFmt_0x_pxy' );
    dasmEntries.addBankLabel( 0x5518, 0x20, 'strErr_UnknownSegAddress' );
    dasmEntries.addBankLabel( 0x5567, 0x20, 'str_ProcessOnFreeList' );
    dasmEntries.addBankLabel( 0x5593, 0x20, 'str_PhysicalStateOfSwitches' );
    dasmEntries.addBankLabel( 0x55b1, 0x20, 'str_LogicalStateOfSwitches' );
    dasmEntries.addBankLabel( 0x55ce, 0x20, 'strErr_UserDefinedErrorFatal' );
    dasmEntries.addBankLabel( 0x55f9, 0x20, 'strErr_UserDefinedErrorNonFatal' );

    dasmEntries.addBankLabel( 0x5628, 0x20, 'str_BlocksTotalFree' );
    dasmEntries.addBankLabel( 0x5647, 0x20, 'str_BlocksMinFree' );
    dasmEntries.addBankLabel( 0x5656, 0x20, 'str_CountsUntilBadMax' );
    dasmEntries.addBankLabel( 0x568d, 0x20, 'strFmt_0x_pxy_pxy' );
    dasmEntries.addBankLabel( 0x569f, 0x20, 'strHdr_D1_C1' );
    dasmEntries.addBankLabel( 0x56db, 0x20, 'strFmt_R_U' );
    dasmEntries.addBankLabel( 0x56e2, 0x20, 'strFmt_R2pxu_r2pxy' );
    dasmEntries.addBankLabel( 0x56fc, 0x20, 'bnk_20_56fc_APPLE_ERROR_FATAL' );

    dasmEntries.addBankLabel( 0x5705, 0x20, 'bnk_20_5705' );
    dasmEntries.addBankLabel( 0x570E, 0x20, 'bnk_20_570E' );
    dasmEntries.addTableStrings( 0x5749, 0x20, 'tblStrings-ErrorMessage-Types', 0x7d );
    dasmEntries.addBankLabel( 0x57c6, 0x20, 'bnk_20_57c6' );
    dasmEntries.addTableWpc( 0x57db, 0x20, 'tblStrPtrs-ErrorMessages' );

    dasmEntries.addTableStrings( 0x58d0, 0x20, 'tblStrings-ErrorMessages', 0x139a );
    dasmEntries.addBankLabel( 0x58d9, 0x20, 'strErrMsg_UserBreak' );

    dasmEntries.addBankLabel( 0x6c6a, 0x20, 'bnk_20_6c6a' );
    dasmEntries.addBankLabel( 0x6C6E, 0x20, 'bnk_20_6C6E' );
    dasmEntries.addBankLabel( 0x6C7A, 0x20, 'bnk_20_6C7A' );
    dasmEntries.addBankLabel( 0x6C85, 0x20, 'bnk_20_6C85' );
    dasmEntries.addBankLabel( 0x6C8E, 0x20, 'bnk_20_6C8E' );
    dasmEntries.addBankLabel( 0x6CB1, 0x20, 'bnk_20_6CB1' );
    dasmEntries.addBankLabel( 0x6CC6, 0x20, 'bnk_20_6CC6' );
    dasmEntries.addBankLabel( 0x6CCA, 0x20, 'bnk_20_6CCA' );
    dasmEntries.addBankLabel( 0x6CD6, 0x20, 'bnk_20_6CD6' );

    dasmEntries.addTable( 0x6d51, 0x20, 'tbl3Bytes', 0x6, 3 );
    dasmEntries.addBankLabel( 0x6D63, 0x20, 'bnk_20_6D63' );
    dasmEntries.addBankLabel( 0x6D7C, 0x20, 'bnk_20_6D7C' );
    dasmEntries.addBankLabel( 0x6D92, 0x20, 'bnk_20_6D92' );
    dasmEntries.addBankLabel( 0x6DA8, 0x20, 'bnk_20_6DA8' );

    dasmEntries.addBankLabel( 0x6E22, 0x20, 'bnk_20_6E22' );
    dasmEntries.addBankLabel( 0x6E2C, 0x20, 'bnk_20_6E2C' );
    dasmEntries.addBankLabel( 0x6E38, 0x20, 'bnk_20_6E38' );
    dasmEntries.addBankLabel( 0x6E59, 0x20, 'bnk_20_6E59' );
    dasmEntries.addTable( 0x6e99, 0x20, 'tblBaudSettings', 0x6, 1 );
    dasmEntries.addBankLabel( 0x6E9F, 0x20, 'bnk_20_6E9F' );
    dasmEntries.addBankLabel( 0x6EBB, 0x20, 'bnk_20_6EBB' );
    dasmEntries.addBankLabel( 0x6ECD, 0x20, 'bnk_20_6ECD' );

    dasmEntries.addBankLabel( 0x6FA0, 0x20, 'bnk_20_6FA0' );
    dasmEntries.addBankLabel( 0x6FFE, 0x20, 'bnk_20_6FFE' );

    dasmEntries.addBankLabel( 0x7926, 0x20, 'bnk_20_7926');
    dasmEntries.addBankLabel( 0x79bc, 0x20, 'bnk_20_79BC');
    dasmEntries.addTable( 0x79d4, 0x20, 'filler', 263, 6 );
    dasmEntries.addTable( 0x7ffe, 0x20, 'filler', 1, 2 );


    dasmEntries.addBankLabel( 0x702B, 0x20, 'bnk_20_702B' );
    dasmEntries.addBankLabel( 0x7034, 0x20, 'bnk_20_7034' );
    dasmEntries.addBankLabel( 0x7062, 0x20, 'bnk_20_7062' );
    dasmEntries.addBankLabel( 0x707F, 0x20, 'bnk_20_707F' );
    dasmEntries.addBankLabel( 0x70F1, 0x20, 'bnk_20_70F1' );
    dasmEntries.addBankLabel( 0x7136, 0x20, 'bnk_20_7136' );
    dasmEntries.addBankLabel( 0x7141, 0x20, 'bnk_20_7141' );
    dasmEntries.addBankLabel( 0x7189, 0x20, 'bnk_20_7189' );
    dasmEntries.addBankLabel( 0x720E, 0x20, 'bnk_20_720E' );
    dasmEntries.addBankLabel( 0x7279, 0x20, 'bnk_20_7279' );
    dasmEntries.addTable( 0x734c, 0x20, 'tbl6Bytes', 0x8, 6 );
    dasmEntries.addBankLabel( 0x737C, 0x20, 'bnk_20_737C' );
    dasmEntries.addTable( 0x746e, 0x20, 'tbl5Bytes', 0x8, 5 );
    dasmEntries.addBankLabel( 0x7496, 0x20, 'bnk_20_7496' );
    dasmEntries.addBankLabel( 0x7563, 0x20, 'bnk_20_7563' );
    dasmEntries.addBankLabel( 0x7585, 0x20, 'bnk_20_7585' );
    dasmEntries.addBankLabel( 0x75BC, 0x20, 'bnk_20_75BC' );

    dasmEntries.addTableStrings( 0x7679, 0x20, 'tblStrings-GameDetails', 0x35 );
    dasmEntries.addBankLabel( 0x76ae, 0x20, 'bnk_20_76ae' );
    dasmEntries.addBankLabel( 0x76D9, 0x20, 'bnk_20_76D9' );

    dasmEntries.addTable( 0x772B, 0x20, 'tbl2Bytes', 0x8, 2 );
    dasmEntries.addBankLabel( 0x773B, 0x20, 'bnk_20_773B' );
    dasmEntries.addBankLabel( 0x7771, 0x20, 'bnk_20_7771' );
    dasmEntries.addBankLabel( 0x777A, 0x20, 'bnk_20_777A' );
    dasmEntries.addBankLabel( 0x7787, 0x20, 'bnk_20_7787' );
    dasmEntries.addBankLabel( 0x7790, 0x20, 'bnk_20_7790' );
    dasmEntries.addBankLabel( 0x77A4, 0x20, 'bnk_20_77A4' );
    dasmEntries.addBankLabel( 0x77AC, 0x20, 'bnk_20_77AC' );
    dasmEntries.addBankLabel( 0x77B4, 0x20, 'bnk_20_77B4' );
    dasmEntries.addBankLabel( 0x77BC, 0x20, 'bnk_20_77BC' );
    dasmEntries.addBankLabel( 0x77C4, 0x20, 'bnk_20_77C4' );
    dasmEntries.addBankLabel( 0x77CC, 0x20, 'bnk_20_77CC' );
    dasmEntries.addBankLabel( 0x77EA, 0x20, 'bnk_20_77EA' );
    dasmEntries.addBankLabel( 0x7803, 0x20, 'bnk_20_7803' );
    dasmEntries.addBankLabel( 0x7883, 0x20, 'bnk_20_7883' );
    dasmEntries.addBankLabel( 0x788A, 0x20, 'bnk_20_788A' );
    dasmEntries.addBankLabel( 0x7897, 0x20, 'bnk_20_7897' );
    dasmEntries.addBankLabel( 0x78AF, 0x20, 'bnk_20_78AF' );
    dasmEntries.addBankLabel( 0x78f0, 0x20, 'bnk_20_78f0');
}

function getDasmEntries_bnk_21( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x21, 'pageMarker_bnk_21', 1, 1 );
    dasmEntries.addTableWpc( 0x4001, 0x21, 'tblwpc_bnk_21_4001' );
    dasmEntries.addTableStrings( 0x402a, 0x21, 'strtbl_GameSpecific', 0x122 );
    dasmEntries.addTable( 0x414c, 0x21, 'tbl_endofString', 1, 1 );
    dasmEntries.addTableWpc( 0x414d, 0x21, 'tblwpc_bnk_21_414d' );
    dasmEntries.addTableStrings( 0x41a4, 0x21, 'strtbl_GameSpecific_B', 0x26b );
    dasmEntries.addTable( 0x440f, 0x21, 'tbl_endofString', 1, 1 );
    dasmEntries.addTableWpc( 0x4410, 0x21, 'tblwpc_bnk_21_4410' );
    dasmEntries.addTableStrings( 0x4439, 0x21, 'strtbl_GameSpecific_C', 0x67);
    dasmEntries.addTable( 0x44a0, 0x21, 'tbl_endofString', 1, 1 );
    dasmEntries.addTableWpc( 0x44a1, 0x21, 'tblwpc_bnk_21_44a1' );
    dasmEntries.addTableWpc( 0x44f8, 0x21, 'tblwpc_bnk_21_44f8' );
    dasmEntries.addTableStrings( 0x4521, 0x21, 'strtbl_GameSpecific_D', 0x100);
    dasmEntries.addTable( 0x4621, 0x21, 'tbl_bnk_21_4621', 43, 2 );
    dasmEntries.addTableStrings( 0x4677, 0x21, 'strtbl_GameSpecific_E', 0x298);
    dasmEntries.addTableWpc( 0x490f, 0x21, 'tblwpc_bnk_21_490f' );
    dasmEntries.addTableStrings( 0x4b00, 0x21, 'strtbl_GameSpecific_F', 0xa8b);
    dasmEntries.addTable( 0x558c, 0x21, 'tbl_bnk_21_558c', 247, 2 );
    dasmEntries.addTableStrings( 0x577a, 0x21, 'strtbl_GameSpecific_g', 0x61b);
    dasmEntries.addTableWpc( 0x5d95, 0x21, 'tblwpc_bnk_21_5d95' );
    dasmEntries.addTableStrings( 0x5f86, 0x21, 'strtbl_GameSpecific_h', 0x960);
    dasmEntries.addTableWpc( 0x68e6, 0x21, 'tblwpc_bnk_21_68e6' );
    dasmEntries.addTableStrings( 0x697b, 0x21, 'strtbl_GameSpecific_I', 0x34e);
    dasmEntries.addTableWpc( 0x6cc9, 0x21, 'tblwpc_bnk_21_6cc9' );
    dasmEntries.addTableStrings( 0x6d4e, 0x21, 'strtbl_GameSpecific_J', 0x2a3);
    dasmEntries.addTableWpc( 0x6ff1, 0x21, 'tblwpc_bnk_21_6ff1' );
    dasmEntries.addTableWpc( 0x701e, 0x21, 'tblwpc_bnk_21_701e' );
    dasmEntries.addTableWpc( 0x7033, 0x21, 'tblwpc_bnk_21_7033' );
    dasmEntries.addTableStrings( 0x7044, 0x21, 'strtbl_GameSpecific_K', 0x44);
    dasmEntries.addTableWpc( 0x7088, 0x21, 'tblwpc_bnk_21_7088' );
    dasmEntries.addTableWpc( 0x709f, 0x21, 'tblwpc_bnk_21_709f' );
    dasmEntries.addTableWpc( 0x7134, 0x21, 'tblwpc_bnk_21_7134' );
    dasmEntries.addTableWpc( 0x71b9, 0x21, 'tblwpc_bnk_21_71b9' );
    dasmEntries.addTableStrings( 0x71e6, 0x21, 'strtbl_GameSpecific_L', 0x141);
    dasmEntries.addTableWpc( 0x7327, 0x21, 'tblwpc_bnk_21_7327' );
    dasmEntries.addTableStrings( 0x733c, 0x21, 'strtbl_GameSpecific_L', 0x8d);
    dasmEntries.addTableWpc( 0x73c9, 0x21, 'tblwpc_bnk_21_73c9' );
    dasmEntries.addTableStrings( 0x73da, 0x21, 'strtbl_GameSpecific_M', 0x1f);
    dasmEntries.addTableWpc( 0x73f9, 0x21, 'tblwpc_bnk_21_73f9' );
    dasmEntries.addTableStrings( 0x7410, 0x21, 'strtbl_GameSpecific_N', 0x49);
    dasmEntries.addTableWpc( 0x745b, 0x21, 'tblwpc_bnk_21_745b' );
    dasmEntries.addTableStrings( 0x74f0, 0x21, 'strtbl_GameSpecific_O', 0x426);
    dasmEntries.addTableWpc( 0x7916, 0x21, 'tblwpc_bnk_21_7916ZZZ' );
    dasmEntries.addTableStrings( 0x799b, 0x21, 'strtbl_GameSpecific_P', 0x382);
    dasmEntries.addTable( 0x7d1d, 0x21, 'filler', 23, 32 );
    dasmEntries.addTable( 0x7ffd, 0x21, 'filler', 1, 3 );
}

function getDasmEntries_bnk_22( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x22, 'pageMarker_bnk_22', 1, 1 );
    dasmEntries.addTableWpc( 0x4001, 0x22, 'tblwpc_bnk_22_4001' );
    dasmEntries.addTable( 0x4208, 0x22, 'tbl_Unkown', 1, 2 );
    dasmEntries.addTableWpc( 0x420a, 0x22, 'tblwpc_bnk_22_420a' );
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
    dasmEntries.addTableWpc( 0x4001, 0x39, 'tblwpc_bnk_39_4001' );
    dasmEntries.addBankLabel( 0x404F, 0x39, 'bnk_39_404F' );
    dasmEntries.addBankLabel( 0x405B, 0x39, 'bnk_39_405B' );
    dasmEntries.addBankLabel( 0x40AC, 0x39, 'bnk_39_40AC' );

    dasmEntries.addTable( 0x4100, 0x39, 'tblwpc_bnk_39_4100', 1, 7 );
    dasmEntries.addBankLabel( 0x4107, 0x39, 'bnk_39_4107' );
    dasmEntries.addBankLabel( 0x4118, 0x39, 'bnk_39_4118' );
    dasmEntries.addBankLabel( 0x413B, 0x39, 'bnk_39_413B' );
    dasmEntries.addBankLabel( 0x4177, 0x39, 'bnk_39_4177' );
    dasmEntries.addBankLabel( 0x41A5, 0x39, 'bnk_39_41A5' );
    dasmEntries.addBankLabel( 0x41AE, 0x39, 'bnk_39_41AE' );
    dasmEntries.addBankLabel( 0x41C2, 0x39, 'bnk_39_41C2' );
    dasmEntries.addBankLabel( 0x41D2, 0x39, 'bnk_39_41D2' );

    dasmEntries.addTableWpc( 0x4215, 0x39, 'tblwpc_bnk_39_4215' );
    dasmEntries.addTable( 0x4221, 0x39, 'tblwpc_bnk_39_4221', 4, 7 );
    dasmEntries.addBankLabel( 0x423d, 0x39, 'bnk_39_423d' );
    dasmEntries.addBankLabel( 0x4254, 0x39, 'bnk_39_4254' );
    dasmEntries.addBankLabel( 0x4267, 0x39, 'bnk_39_4267' );
    dasmEntries.addBankLabel( 0x428C, 0x39, 'bnk_39_428C' );
    dasmEntries.addBankLabel( 0x42A3, 0x39, 'bnk_39_42A3' );
    dasmEntries.addBankLabel( 0x42B6, 0x39, 'bnk_39_42B6' );
    dasmEntries.addBankLabel( 0x42DC, 0x39, 'bnk_39_42DC' );
    dasmEntries.addBankLabel( 0x42E5, 0x39, 'bnk_39_42E5' );
    dasmEntries.addBankLabel( 0x42EE, 0x39, 'bnk_39_42EE' );
    dasmEntries.addBankLabel( 0x42F7, 0x39, 'bnk_39_42F7' );

    dasmEntries.addBankLabel( 0x4300, 0x39, 'bnk_39_4300' );
    dasmEntries.addBankLabel( 0x4309, 0x39, 'bnk_39_4309' );
    dasmEntries.addTable( 0x4312, 0x39, 'bnk_39_4312', 20, 1 );
    dasmEntries.addBankLabel( 0x4326, 0x39, 'bnk_39_4326' );
    dasmEntries.addBankLabel( 0x4342, 0x39, 'bnk_39_4342' );
    dasmEntries.addBankLabel( 0x4371, 0x39, 'bnk_39_4371' );
    dasmEntries.addBankLabel( 0x4385, 0x39, 'bnk_39_4385' );
    dasmEntries.addBankLabel( 0x4392, 0x39, 'bnk_39_4392' );
    dasmEntries.addBankLabel( 0x43A9, 0x39, 'bnk_39_43A9' );
    dasmEntries.addBankLabel( 0x43C4, 0x39, 'bnk_39_43C4' );
    dasmEntries.addBankLabel( 0x43E7, 0x39, 'bnk_39_43E7' );

    dasmEntries.addBankLabel( 0x440F, 0x39, 'bnk_39_440F' );
    dasmEntries.addBankLabel( 0x4418, 0x39, 'bnk_39_4418' );
    dasmEntries.addTableWpc( 0x4422, 0x39, 'tblwpc_bnk_39_4422' );

    dasmEntries.addTableWpc( 0x479D, 0x39, 'tblwpc_bnk_39_479D' );
    dasmEntries.addTableWpc( 0x47EC, 0x39, 'tblwpc_bnk_39_47EC' );

    dasmEntries.addTableWpc( 0x4915, 0x39, 'tblwpc_bnk_39_4915' );

    dasmEntries.addBankLabel( 0x4B6E, 0x39, 'bnk_39_4B6E' );
    dasmEntries.addBankLabel( 0x4B76, 0x39, 'bnk_39_4B76' );
    dasmEntries.addBankLabel( 0x4B9E, 0x39, 'bnk_39_4B9E' );
    dasmEntries.addBankLabel( 0x4BC9, 0x39, 'bnk_39_4BC9' );
    dasmEntries.addBankLabel( 0x4BE4, 0x39, 'bnk_39_4BE4' );
    dasmEntries.addBankLabel( 0x4BF6, 0x39, 'bnk_39_4BF6' );

    dasmEntries.addBankLabel( 0x4C08, 0x39, 'bnk_39_4C08' );
    dasmEntries.addBankLabel( 0x4C1A, 0x39, 'bnk_39_4C1A' );
    dasmEntries.addBankLabel( 0x4C2C, 0x39, 'bnk_39_4C2C' );
    dasmEntries.addBankLabel( 0x4C49, 0x39, 'bnk_39_4C49' );
    dasmEntries.addBankLabel( 0x4C53, 0x39, 'bnk_39_4C53' );
    dasmEntries.addBankLabel( 0x4C82, 0x39, 'bnk_39_4C82' );
    dasmEntries.addBankLabel( 0x4C97, 0x39, 'bnk_39_4C97' );
    dasmEntries.addBankLabel( 0x4CB4, 0x39, 'bnk_39_4CB4' );
    dasmEntries.addBankLabel( 0x4CC7, 0x39, 'bnk_39_4CC7' );
    dasmEntries.addBankLabel( 0x4CD2, 0x39, 'bnk_39_4CD2' );
    dasmEntries.addBankLabel( 0x4CEE, 0x39, 'bnk_39_4CEE' );

    dasmEntries.addBankLabel( 0x4D01, 0x39, 'bnk_39_4D01' );
    dasmEntries.addBankLabel( 0x4D62, 0x39, 'bnk_39_4D62' );
    dasmEntries.addBankLabel( 0x4D6F, 0x39, 'bnk_39_4D6F' );
    dasmEntries.addBankLabel( 0x4DB3, 0x39, 'bnk_39_4DB3' );
    dasmEntries.addBankLabel( 0x4DBE, 0x39, 'bnk_39_4DBE' );
    dasmEntries.addBankLabel( 0x4DE1, 0x39, 'bnk_39_4DE1' );
    dasmEntries.addBankLabel( 0x4DFA, 0x39, 'bnk_39_4DFA' );

    dasmEntries.addBankLabel( 0x4E0A, 0x39, 'bnk_39_4E0A' );
    dasmEntries.addTable( 0x4E22, 0x39, 'tbl_39_4E22', 3, 6 );

    dasmEntries.addBankLabel( 0x4E34, 0x39, 'bnk_39_4E34' );
    dasmEntries.addBankLabel( 0x4E5A, 0x39, 'bnk_39_4E5A' );
    dasmEntries.addBankLabel( 0x4E6F, 0x39, 'bnk_39_4E6F' );
    dasmEntries.addBankLabel( 0x4E98, 0x39, 'bnk_39_4E98' );
    dasmEntries.addBankLabel( 0x4EA4, 0x39, 'bnk_39_4EA4' );
    dasmEntries.addBankLabel( 0x4EBB, 0x39, 'bnk_39_4EBB' );
    dasmEntries.addBankLabel( 0x4ED7, 0x39, 'bnk_39_4ED7' );

    dasmEntries.addBankLabel( 0x4F4B, 0x39, 'bnk_39_4F4B' );
    dasmEntries.addBankLabel( 0x4F65, 0x39, 'bnk_39_4F65' );
    dasmEntries.addBankLabel( 0x4F85, 0x39, 'bnk_39_4F85' );
    dasmEntries.addBankLabel( 0x4FAB, 0x39, 'bnk_39_4FAB' );
    dasmEntries.addBankLabel( 0x4FD1, 0x39, 'bnk_39_4FD1' );
    dasmEntries.addBankLabel( 0x4FED, 0x39, 'bnk_39_4FED' );

    dasmEntries.addBankLabel( 0x5019, 0x39, 'bnk_39_5019' );
    dasmEntries.addBankLabel( 0x5045, 0x39, 'bnk_39_5045' );
    dasmEntries.addBankLabel( 0x5050, 0x39, 'bnk_39_5050' );
    dasmEntries.addBankLabel( 0x5080, 0x39, 'bnk_39_5080' );
    dasmEntries.addBankLabel( 0x5095, 0x39, 'bnk_39_5095' );
    dasmEntries.addBankLabel( 0x50C3, 0x39, 'bnk_39_50C3' );
    dasmEntries.addBankLabel( 0x50E8, 0x39, 'bnk_39_50E8' );

    dasmEntries.addBankLabel( 0x511A, 0x39, 'bnk_39_511A' );
    dasmEntries.addBankLabel( 0x518E, 0x39, 'bnk_39_518E' );
    dasmEntries.addBankLabel( 0x51D7, 0x39, 'bnk_39_51D7' );
    dasmEntries.addBankLabel( 0x51F0, 0x39, 'bnk_39_51F0' );

    dasmEntries.addBankLabel( 0x5285, 0x39, 'bnk_39_5285' );
    dasmEntries.addBankLabel( 0x529B, 0x39, 'bnk_39_529B' );
    dasmEntries.addBankLabel( 0x52C1, 0x39, 'bnk_39_52C1' );
    dasmEntries.addBankLabel( 0x52CD, 0x39, 'bnk_39_52CD' );
    dasmEntries.addBankLabel( 0x52D7, 0x39, 'bnk_39_52D7' );

    dasmEntries.addBankLabel( 0x5316, 0x39, 'bnk_39_5316' );
    dasmEntries.addBankLabel( 0x5330, 0x39, 'bnk_39_5330' );
    dasmEntries.addBankLabel( 0x534B, 0x39, 'bnk_39_534B' );
    dasmEntries.addBankLabel( 0x534F, 0x39, 'bnk_39_534F' );
    dasmEntries.addBankLabel( 0x5353, 0x39, 'bnk_39_5353' );
    dasmEntries.addBankLabel( 0x5399, 0x39, 'bnk_39_5399' );
    dasmEntries.addBankLabel( 0x53A0, 0x39, 'bnk_39_53A0' );
    dasmEntries.addBankLabel( 0x53A7, 0x39, 'bnk_39_53A7' );
    dasmEntries.addBankLabel( 0x53BF, 0x39, 'bnk_39_53BF' );
    dasmEntries.addBankLabel( 0x53CD, 0x39, 'bnk_39_53CD' );

    dasmEntries.addBankLabel( 0x5412, 0x39, 'bnk_39_5412' );
    dasmEntries.addBankLabel( 0x5442, 0x39, 'bnk_39_5442' );
    dasmEntries.addBankLabel( 0x5480, 0x39, 'bnk_39_5480' );
    dasmEntries.addBankLabel( 0x548C, 0x39, 'bnk_39_548C' );
    dasmEntries.addBankLabel( 0x5498, 0x39, 'bnk_39_5498' );
    dasmEntries.addBankLabel( 0x549F, 0x39, 'bnk_39_549F' );
    dasmEntries.addBankLabel( 0x54D5, 0x39, 'bnk_39_54D5' );
    dasmEntries.addBankLabel( 0x54F5, 0x39, 'bnk_39_54F5' );
    dasmEntries.addBankLabel( 0x54FA, 0x39, 'bnk_39_54FA' );

    dasmEntries.addBankLabel( 0x5585, 0x39, 'bnk_39_5585' );
    dasmEntries.addBankLabel( 0x55A7, 0x39, 'bnk_39_55A7' );
    dasmEntries.addBankLabel( 0x55B7, 0x39, 'bnk_39_55B7' );
    dasmEntries.addBankLabel( 0x55D5, 0x39, 'bnk_39_55D5' );
    dasmEntries.addBankLabel( 0x55D9, 0x39, 'bnk_39_55D9' );
    dasmEntries.addBankLabel( 0x55FA, 0x39, 'bnk_39_55FA' );

    dasmEntries.addBankLabel( 0x5602, 0x39, 'bnk_39_5602' );
    dasmEntries.addBankLabel( 0x561F, 0x39, 'bnk_39_561F' );
    dasmEntries.addBankLabel( 0x5648, 0x39, 'bnk_39_5648' );
    dasmEntries.addBankLabel( 0x5674, 0x39, 'bnk_39_5674' );
    dasmEntries.addBankLabel( 0x56C5, 0x39, 'bnk_39_56C5' );

    dasmEntries.addBankLabel( 0x5713, 0x39, 'bnk_39_5713' );
    dasmEntries.addBankLabel( 0x571A, 0x39, 'bnk_39_571A' );
    dasmEntries.addBankLabel( 0x5720, 0x39, 'bnk_39_5720' );
    dasmEntries.addBankLabel( 0x5729, 0x39, 'bnk_39_5729' );
    dasmEntries.addBankLabel( 0x5732, 0x39, 'bnk_39_5732' );
    dasmEntries.addBankLabel( 0x5740, 0x39, 'bnk_39_5740' );
    dasmEntries.addBankLabel( 0x5759, 0x39, 'bnk_39_5759' );
    dasmEntries.addBankLabel( 0x5766, 0x39, 'bnk_39_5766' );
    dasmEntries.addBankLabel( 0x578E, 0x39, 'bnk_39_578E' );
    dasmEntries.addBankLabel( 0x579B, 0x39, 'bnk_39_579B' );
    dasmEntries.addBankLabel( 0x57A2, 0x39, 'bnk_39_57A2' );
    dasmEntries.addBankLabel( 0x57AF, 0x39, 'bnk_39_57AF' );

    dasmEntries.addBankLabel( 0x5811, 0x39, 'bnk_39_5811' );
    dasmEntries.addBankLabel( 0x5845, 0x39, 'bnk_39_5845' );
    dasmEntries.addBankLabel( 0x5850, 0x39, 'bnk_39_5850' );
    dasmEntries.addBankLabel( 0x5869, 0x39, 'bnk_39_5869' );
    dasmEntries.addBankLabel( 0x5876, 0x39, 'bnk_39_5876' );
    dasmEntries.addBankLabel( 0x588B, 0x39, 'bnk_39_588B' );
    dasmEntries.addBankLabel( 0x5899, 0x39, 'bnk_39_5899' );
    dasmEntries.addBankLabel( 0x58CE, 0x39, 'bnk_39_58CE' );
    dasmEntries.addBankLabel( 0x58DD, 0x39, 'bnk_39_58DD' );
    dasmEntries.addBankLabel( 0x58E4, 0x39, 'bnk_39_58E4' );
    dasmEntries.addBankLabel( 0x58F2, 0x39, 'bnk_39_58F2' );

    dasmEntries.addBankLabel( 0x5903, 0x39, 'bnk_39_5903' );
    dasmEntries.addBankLabel( 0x591E, 0x39, 'bnk_39_591E' );
    dasmEntries.addBankLabel( 0x5933, 0x39, 'bnk_39_5933' );
    dasmEntries.addBankLabel( 0x5970, 0x39, 'bnk_39_5970' );
    dasmEntries.addBankLabel( 0x597C, 0x39, 'bnk_39_597C' );
    dasmEntries.addBankLabel( 0x5A15, 0x39, 'bnk_39_5A15' );
    dasmEntries.addBankLabel( 0x5A4F, 0x39, 'bnk_39_5A4F' );
    dasmEntries.addBankLabel( 0x5A95, 0x39, 'bnk_39_5A95' );

    dasmEntries.addBankLabel( 0x5B32, 0x39, 'bnk_39_5B32' );
    dasmEntries.addBankLabel( 0x5B56, 0x39, 'bnk_39_5B56' );
    dasmEntries.addBankLabel( 0x5B65, 0x39, 'bnk_39_5B65' );
    dasmEntries.addBankLabel( 0x5B99, 0x39, 'bnk_39_5B99' );
    dasmEntries.addBankLabel( 0x5BB1, 0x39, 'bnk_39_5BB1' );

    dasmEntries.addBankLabel( 0x5C09, 0x39, 'bnk_39_5C09' );
    dasmEntries.addBankLabel( 0x5C55, 0x39, 'bnk_39_5C55' );
    dasmEntries.addBankLabel( 0x5CB3, 0x39, 'bnk_39_5CB3' );
    dasmEntries.addBankLabel( 0x5CC7, 0x39, 'bnk_39_5CC7' );
    dasmEntries.addBankLabel( 0x5CD6, 0x39, 'bnk_39_5CD6' );

    dasmEntries.addBankLabel( 0x5D34, 0x39, 'bnk_39_5D34' );
    dasmEntries.addBankLabel( 0x5D52, 0x39, 'bnk_39_5D52' );
    dasmEntries.addBankLabel( 0x5D66, 0x39, 'bnk_39_5D66' );
    dasmEntries.addBankLabel( 0x5D94, 0x39, 'bnk_39_5D94' );
    dasmEntries.addBankLabel( 0x5DB4, 0x39, 'bnk_39_5DB4' );
    dasmEntries.addBankLabel( 0x5DDF, 0x39, 'bnk_39_5DDF' );
    dasmEntries.addBankLabel( 0x5DEB, 0x39, 'bnk_39_5DEB' );

    dasmEntries.addBankLabel( 0x5E06, 0x39, 'bnk_39_5E06' );
    dasmEntries.addBankLabel( 0x5E15, 0x39, 'bnk_39_5E15' );
    dasmEntries.addBankLabel( 0x5E5B, 0x39, 'bnk_39_5E5B' );
    dasmEntries.addBankLabel( 0x5E7D, 0x39, 'bnk_39_5E7D' );
    dasmEntries.addBankLabel( 0x5EA8, 0x39, 'bnk_39_5EA8' );
    dasmEntries.addBankLabel( 0x5EE8, 0x39, 'bnk_39_5EE8' );
    dasmEntries.addBankLabel( 0x5EF3, 0x39, 'bnk_39_5EF3' );
    dasmEntries.addBankLabel( 0x5EFA, 0x39, 'bnk_39_5EFA' );

    dasmEntries.addBankLabel( 0x5F2B, 0x39, 'bnk_39_5F2B' );
    dasmEntries.addBankLabel( 0x5F48, 0x39, 'bnk_39_5F48' );
    dasmEntries.addBankLabel( 0x5F7E, 0x39, 'bnk_39_5F7E' );
    dasmEntries.addBankLabel( 0x5FB4, 0x39, 'bnk_39_5FB4' );
    dasmEntries.addBankLabel( 0x5FD1, 0x39, 'bnk_39_5FD1' );

    dasmEntries.addBankLabel( 0x600D, 0x39, 'bnk_39_600D' );
    dasmEntries.addBankLabel( 0x6018, 0x39, 'bnk_39_6018' );
    dasmEntries.addBankLabel( 0x6028, 0x39, 'bnk_39_6028' );
    dasmEntries.addBankLabel( 0x6035, 0x39, 'bnk_39_6035' );
    dasmEntries.addBankLabel( 0x603E, 0x39, 'bnk_39_603E' );
    dasmEntries.addBankLabel( 0x604B, 0x39, 'bnk_39_604B' );
    dasmEntries.addBankLabel( 0x6063, 0x39, 'bnk_39_6063' );
    dasmEntries.addBankLabel( 0x6075, 0x39, 'bnk_39_6075' );
    dasmEntries.addBankLabel( 0x607B, 0x39, 'bnk_39_607B' );
    dasmEntries.addBankLabel( 0x6098, 0x39, 'bnk_39_6098' );
    dasmEntries.addBankLabel( 0x609B, 0x39, 'bnk_39_609B' );
    dasmEntries.addBankLabel( 0x60C3, 0x39, 'bnk_39_60C3' );
    dasmEntries.addBankLabel( 0x60C6, 0x39, 'bnk_39_60C6' );
    dasmEntries.addBankLabel( 0x60C9, 0x39, 'bnk_39_60C9' );
    dasmEntries.addBankLabel( 0x60EE, 0x39, 'bnk_39_60EE' );
    dasmEntries.addBankLabel( 0x614B, 0x39, 'bnk_39_614B' );
    dasmEntries.addBankLabel( 0x615F, 0x39, 'bnk_39_615F' );
    dasmEntries.addBankLabel( 0x6167, 0x39, 'bnk_39_6167' );
    dasmEntries.addBankLabel( 0x617B, 0x39, 'bnk_39_617B' );
    dasmEntries.addBankLabel( 0x617E, 0x39, 'bnk_39_617E' );
    dasmEntries.addBankLabel( 0x6184, 0x39, 'bnk_39_6184' );
    dasmEntries.addBankLabel( 0x61EF, 0x39, 'bnk_39_61EF' );
    dasmEntries.addBankLabel( 0x61FF, 0x39, 'bnk_39_61FF' );
    dasmEntries.addBankLabel( 0x6221, 0x39, 'bnk_39_6221' );
    dasmEntries.addBankLabel( 0x622B, 0x39, 'bnk_39_622B' );
    dasmEntries.addTable(  0x624e, 0x39, 'tblBaudSetting', 1, 6 );
    dasmEntries.addBankLabel( 0x6254, 0x39, 'bnk_39_6254' );
    dasmEntries.addBankLabel( 0x626C, 0x39, 'bnk_39_626C' );
    dasmEntries.addBankLabel( 0x632B, 0x39, 'bnk_39_632B' );
    dasmEntries.addBankLabel( 0x6336, 0x39, 'bnk_39_6336' );
    dasmEntries.addBankLabel( 0x6343, 0x39, 'bnk_39_6343' );
    dasmEntries.addBankLabel( 0x635F, 0x39, 'bnk_39_635F' );
    dasmEntries.addBankLabel( 0x636E, 0x39, 'bnk_39_636E' );
    dasmEntries.addBankLabel( 0x637B, 0x39, 'bnk_39_637B' );
    dasmEntries.addBankLabel( 0x638A, 0x39, 'bnk_39_638A' );
    dasmEntries.addBankLabel( 0x6393, 0x39, 'bnk_39_6393' );
    dasmEntries.addBankLabel( 0x642A, 0x39, 'bnk_39_642A_Process_ESC_OrkinTerminal' );
    dasmEntries.addBankLabel( 0x6442, 0x39, 'bnk_39_6442' );
    dasmEntries.addBankLabel( 0x648E, 0x39, 'bnk_39_648E' );
    dasmEntries.addBankLabel( 0x64A7, 0x39, 'bnk_39_64A7' );
    dasmEntries.addBankLabel( 0x64D6, 0x39, 'bnk_39_64D6' );
    dasmEntries.addBankLabel( 0x6590, 0x39, 'bnk_39_6590' );
    dasmEntries.addBankLabel( 0x65A2, 0x39, 'bnk_39_65A2' );
    dasmEntries.addBankLabel( 0x6625, 0x39, 'bnk_39_6625' );
    dasmEntries.addBankLabel( 0x6660, 0x39, 'bnk_39_6660' );
    dasmEntries.addBankLabel( 0x668C, 0x39, 'bnk_39_668C' );
    dasmEntries.addBankLabel( 0x669E, 0x39, 'bnk_39_669E' );
    dasmEntries.addBankLabel( 0x6756, 0x39, 'bnk_39_6756' );
    dasmEntries.addBankLabel( 0x676B, 0x39, 'bnk_39_676B' );
    dasmEntries.addBankLabel( 0x677B, 0x39, 'bnk_39_677B' );
    dasmEntries.addBankLabel( 0x6791, 0x39, 'bnk_39_6791' );
    dasmEntries.addBankLabel( 0x6799, 0x39, 'bnk_39_6799' );
    dasmEntries.addBankLabel( 0x67A8, 0x39, 'bnk_39_67A8' );
    dasmEntries.addBankLabel( 0x67D2, 0x39, 'bnk_39_67D2' );
    dasmEntries.addBankLabel( 0x67DE, 0x39, 'bnk_39_67DE' );
    dasmEntries.addBankLabel( 0x67E7, 0x39, 'bnk_39_67E7' );
    dasmEntries.addBankLabel( 0x67F0, 0x39, 'bnk_39_67F0' );
    dasmEntries.addBankLabel( 0x67FD, 0x39, 'bnk_39_67FD' );
    dasmEntries.addBankLabel( 0x681E, 0x39, 'bnk_39_681E' );
    dasmEntries.addBankLabel( 0x6827, 0x39, 'bnk_39_6827' );
    dasmEntries.addBankLabel( 0x6856, 0x39, 'bnk_39_6856' );
    dasmEntries.addBankLabel( 0x686B, 0x39, 'bnk_39_686B' );
    dasmEntries.addBankLabel( 0x6878, 0x39, 'bnk_39_6878' );
    dasmEntries.addBankLabel( 0x687E, 0x39, 'bnk_39_687E' );
    dasmEntries.addBankLabel( 0x689A, 0x39, 'bnk_39_689A' );
    dasmEntries.addBankLabel( 0x68B1, 0x39, 'bnk_39_68B1' );
    dasmEntries.addBankLabel( 0x68CD, 0x39, 'bnk_39_68CD' );
    dasmEntries.addBankLabel( 0x693C, 0x39, 'bnk_39_693C' );
    dasmEntries.addBankLabel( 0x6944, 0x39, 'bnk_39_6944' );
    dasmEntries.addBankLabel( 0x6954, 0x39, 'bnk_39_6954' );
    dasmEntries.addBankLabel( 0x6969, 0x39, 'bnk_39_6969' );
    dasmEntries.addBankLabel( 0x6970, 0x39, 'bnk_39_6970' );
    dasmEntries.addBankLabel( 0x6982, 0x39, 'bnk_39_6982' );
    dasmEntries.addBankLabel( 0x69FD, 0x39, 'bnk_39_69FD' );
    dasmEntries.addBankLabel( 0x6A12, 0x39, 'bnk_39_6A12' );
    dasmEntries.addBankLabel( 0x6A2D, 0x39, 'bnk_39_6A2D' );
    dasmEntries.addBankLabel( 0x6A61, 0x39, 'bnk_39_6A61' );
    dasmEntries.addBankLabel( 0x6A76, 0x39, 'bnk_39_6A76' );
    dasmEntries.addBankLabel( 0x6A87, 0x39, 'bnk_39_6A87' );
    dasmEntries.addBankLabel( 0x6A89, 0x39, 'bnk_39_6A89' );
    dasmEntries.addBankLabel( 0x6AC8, 0x39, 'bnk_39_6AC8' );
    dasmEntries.addBankLabel( 0x6AE6, 0x39, 'bnk_39_6AE6' );
    dasmEntries.addBankLabel( 0x6AEB, 0x39, 'bnk_39_6AEB' );
    dasmEntries.addBankLabel( 0x6AF2, 0x39, 'bnk_39_6AF2' );
    dasmEntries.addBankLabel( 0x6B09, 0x39, 'bnk_39_6B09' );
    dasmEntries.addBankLabel( 0x6B12, 0x39, 'bnk_39_6B12' );
    dasmEntries.addBankLabel( 0x6B40, 0x39, 'bnk_39_6B40' );
    dasmEntries.addBankLabel( 0x6B6E, 0x39, 'bnk_39_6B6E' );
    dasmEntries.addBankLabel( 0x6B91, 0x39, 'bnk_39_6B91' );
    dasmEntries.addBankLabel( 0x6BAF, 0x39, 'bnk_39_6BAF' );
    dasmEntries.addBankLabel( 0x6BD1, 0x39, 'bnk_39_6BD1' );
    dasmEntries.addBankLabel( 0x6C12, 0x39, 'bnk_39_6C12' );
    dasmEntries.addBankLabel( 0x6CA0, 0x39, 'bnk_39_6CA0' );
    dasmEntries.addBankLabel( 0x6CFE, 0x39, 'bnk_39_6CFE' );
    dasmEntries.addBankLabel( 0x6D16, 0x39, 'bnk_39_6D16' );
    dasmEntries.addBankLabel( 0x6D37, 0x39, 'bnk_39_6D37' );
    dasmEntries.addBankLabel( 0x6DA0, 0x39, 'bnk_39_6DA0' );
    dasmEntries.addBankLabel( 0x6DF9, 0x39, 'bnk_39_6DF9' );
    dasmEntries.addBankLabel( 0x6E0C, 0x39, 'bnk_39_6E0C' );
    dasmEntries.addBankLabel( 0x6E24, 0x39, 'bnk_39_6E24' );
    dasmEntries.addBankLabel( 0x6E8A, 0x39, 'bnk_39_6E8A' );
    dasmEntries.addBankLabel( 0x6EE3, 0x39, 'bnk_39_6EE3' );
    dasmEntries.addBankLabel( 0x6F0D, 0x39, 'bnk_39_6F0D' );
    dasmEntries.addBankLabel( 0x6F26, 0x39, 'bnk_39_6F26' );
    dasmEntries.addBankLabel( 0x6F5D, 0x39, 'bnk_39_6F5D' );
    dasmEntries.addBankLabel( 0x6F65, 0x39, 'bnk_39_6F65' );
    dasmEntries.addBankLabel( 0x6F6D, 0x39, 'bnk_39_6F6D' );
    dasmEntries.addBankLabel( 0x6F8C, 0x39, 'bnk_39_6F8C' );
    dasmEntries.addBankLabel( 0x6FB2, 0x39, 'bnk_39_6FB2' );
    dasmEntries.addBankLabel( 0x6FCC, 0x39, 'bnk_39_6FCC' );

    dasmEntries.addBankLabel( 0x6FFF, 0x39, 'bnk_39_6FFF' );

    dasmEntries.addBankLabel( 0x7087, 0x39, 'bnk_39_7087' );
    dasmEntries.addBankLabel( 0x70C6, 0x39, 'bnk_39_70C6' );
    dasmEntries.addBankLabel( 0x70CD, 0x39, 'bnk_39_70CD' );
    dasmEntries.addTable( 0x70f3, 0x39, 'bnk_39_70f3', 26, 2 );

    dasmEntries.addBankLabel( 0x7127, 0x39, 'bnk_39_7127' );
    dasmEntries.addBankLabel( 0x712F, 0x39, 'bnk_39_712F' );
    dasmEntries.addBankLabel( 0x714E, 0x39, 'bnk_39_714E' );
    dasmEntries.addBankLabel( 0x7167, 0x39, 'bnk_39_7167' );
    dasmEntries.addBankLabel( 0x717D, 0x39, 'bnk_39_717D' );
    dasmEntries.addBankLabel( 0x71AC, 0x39, 'bnk_39_71AC' );
    dasmEntries.addBankLabel( 0x71B7, 0x39, 'bnk_39_71B7' );
    dasmEntries.addBankLabel( 0x71D0, 0x39, 'bnk_39_71D0' );
    dasmEntries.addBankLabel( 0x71EA, 0x39, 'bnk_39_71EA' );

    dasmEntries.addBankLabel( 0x723D, 0x39, 'bnk_39_723D' );
    dasmEntries.addBankLabel( 0x7285, 0x39, 'bnk_39_7285' );
    dasmEntries.addBankLabel( 0x72A6, 0x39, 'bnk_39_72A6' );
    dasmEntries.addBankLabel( 0x72E2, 0x39, 'bnk_39_72E2' );

    dasmEntries.addBankLabel( 0x7305, 0x39, 'bnk_39_7305' );
    dasmEntries.addBankLabel( 0x7328, 0x39, 'bnk_39_7328' );
    dasmEntries.addBankLabel( 0x7348, 0x39, 'bnk_39_7348' );
    dasmEntries.addBankLabel( 0x7368, 0x39, 'bnk_39_7368' );
    dasmEntries.addBankLabel( 0x737A, 0x39, 'bnk_39_737A' );
    dasmEntries.addBankLabel( 0x73B4, 0x39, 'bnk_39_73B4' );
    dasmEntries.addBankLabel( 0x73C2, 0x39, 'bnk_39_73C2' );
    dasmEntries.addBankLabel( 0x73F8, 0x39, 'bnk_39_73F8' );

    dasmEntries.addBankLabel( 0x7421, 0x39, 'bnk_39_7421' );
    dasmEntries.addBankLabel( 0x7439, 0x39, 'bnk_39_7439' );
    dasmEntries.addBankLabel( 0x74CD, 0x39, 'bnk_39_74CD' );
    dasmEntries.addBankLabel( 0x74E3, 0x39, 'bnk_39_74E3' );

    dasmEntries.addBankLabel( 0x7507, 0x39, 'bnk_39_7507' );
    dasmEntries.addBankLabel( 0x751F, 0x39, 'bnk_39_751F' );
    dasmEntries.addBankLabel( 0x752D, 0x39, 'bnk_39_752D' );
    dasmEntries.addBankLabel( 0x753D, 0x39, 'bnk_39_753D' );
    dasmEntries.addBankLabel( 0x7548, 0x39, 'bnk_39_7548' );

    dasmEntries.addBankLabel( 0x7600, 0x39, 'bnk_39_7600' );
    dasmEntries.addBankLabel( 0x762D, 0x39, 'bnk_39_762D' );
    dasmEntries.addBankLabel( 0x7668, 0x39, 'bnk_39_7668' );
    dasmEntries.addBankLabel( 0x768E, 0x39, 'bnk_39_768E' );
    dasmEntries.addBankLabel( 0x76CC, 0x39, 'bnk_39_76CC' );
    dasmEntries.addBankLabel( 0x76ED, 0x39, 'bnk_39_76ED' );

    dasmEntries.addBankLabel( 0x7700, 0x39, 'bnk_39_7700' );
    dasmEntries.addBankLabel( 0x770A, 0x39, 'bnk_39_770A' );
    dasmEntries.addBankLabel( 0x7717, 0x39, 'bnk_39_7717' );
    dasmEntries.addBankLabel( 0x7732, 0x39, 'bnk_39_7732' );
    dasmEntries.addBankLabel( 0x7772, 0x39, 'bnk_39_7772' );
    dasmEntries.addBankLabel( 0x7784, 0x39, 'bnk_39_7784' );
    dasmEntries.addBankLabel( 0x77AD, 0x39, 'bnk_39_77AD' );

    dasmEntries.addBankLabel( 0x7828, 0x39, 'bnk_39_7828' );
    dasmEntries.addBankLabel( 0x782E, 0x39, 'bnk_39_782E' );
    dasmEntries.addBankLabel( 0x7877, 0x39, 'bnk_39_7877' );
    dasmEntries.addBankLabel( 0x78A9, 0x39, 'bnk_39_78A9' );
    dasmEntries.addBankLabel( 0x78F5, 0x39, 'bnk_39_78F5' );

    dasmEntries.addBankLabel( 0x790D, 0x39, 'bnk_39_790D' );
    dasmEntries.addBankLabel( 0x791F, 0x39, 'bnk_39_791F' );
    dasmEntries.addBankLabel( 0x7931, 0x39, 'bnk_39_7931' );
    dasmEntries.addBankLabel( 0x794F, 0x39, 'bnk_39_794F' );
    dasmEntries.addBankLabel( 0x795A, 0x39, 'bnk_39_795A' );
    dasmEntries.addBankLabel( 0x79AC, 0x39, 'bnk_39_79AC' );
    dasmEntries.addBankLabel( 0x79EA, 0x39, 'bnk_39_79EA' );
    dasmEntries.addBankLabel( 0x79F1, 0x39, 'bnk_39_79F1' );
    dasmEntries.addBankLabel( 0x79F8, 0x39, 'bnk_39_79F8' );

    dasmEntries.addBankLabel( 0x7A58, 0x39, 'bnk_39_7A58' );
    dasmEntries.addBankLabel( 0x7A70, 0x39, 'bnk_39_7A70' );
    dasmEntries.addBankLabel( 0x7A93, 0x39, 'bnk_39_7A93' );
    dasmEntries.addBankLabel( 0x7AA8, 0x39, 'bnk_39_7AA8' );

    dasmEntries.addBankLabel( 0x7B19, 0x39, 'bnk_39_7B19' );

    dasmEntries.addTable( 0x7cbb, 0x39, 'filler', 139, 6 );
    dasmEntries.addTable( 0x7ffd, 0x39, 'filler', 1, 3 );

}

function getDasmEntries_bnk_3a( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x3a, 'pageMarker_bnk_3a', 1, 1 );
    dasmEntries.addBankLabel( 0x4001, 0x3a, 'bnk_3a_4001' );
    dasmEntries.addBankLabel( 0x403D, 0x3a, 'bnk_3a_403D' );
    dasmEntries.addBankLabel( 0x4070, 0x3a, 'bnk_3a_4070' );
    dasmEntries.addBankLabel( 0x409C, 0x3a, 'bnk_3a_409C' );
    dasmEntries.addBankLabel( 0x40A3, 0x3a, 'bnk_3a_40A3' );
    dasmEntries.addBankLabel( 0x40AA, 0x3a, 'bnk_3a_40AA' );
    dasmEntries.addBankLabel( 0x4106, 0x3a, 'bnk_3a_4106' );
    dasmEntries.addBankLabel( 0x4144, 0x3a, 'bnk_3a_4144' );
    dasmEntries.addBankLabel( 0x4157, 0x3a, 'bnk_3a_4157' );
    dasmEntries.addBankLabel( 0x416B, 0x3a, 'bnk_3a_416B' );
    dasmEntries.addBankLabel( 0x41CE, 0x3a, 'bnk_3a_41CE' );
    dasmEntries.addBankLabel( 0x4223, 0x3a, 'bnk_3a_4223' );
    dasmEntries.addBankLabel( 0x4234, 0x3a, 'bnk_3a_4234' );
    dasmEntries.addBankLabel( 0x4240, 0x3a, 'bnk_3a_4240' );
    dasmEntries.addBankLabel( 0x4247, 0x3a, 'bnk_3a_4247' );
    dasmEntries.addBankLabel( 0x424C, 0x3a, 'bnk_3a_424C' );
    dasmEntries.addBankLabel( 0x4260, 0x3a, 'bnk_3a_4260' );
    dasmEntries.addBankLabel( 0x4285, 0x3a, 'bnk_3a_4285' );
    dasmEntries.addBankLabel( 0x42A3, 0x3a, 'bnk_3a_42A3' );
    dasmEntries.addBankLabel( 0x42EC, 0x3a, 'bnk_3a_42EC' );
    dasmEntries.addBankLabel( 0x42F6, 0x3a, 'bnk_3a_42F6' );
    dasmEntries.addBankLabel( 0x4305, 0x3a, 'bnk_3a_4305' );
    dasmEntries.addBankLabel( 0x430F, 0x3a, 'bnk_3a_430F' );
    dasmEntries.addBankLabel( 0x4358, 0x3a, 'bnk_3a_4358' );
    dasmEntries.addBankLabel( 0x43B6, 0x3a, 'bnk_3a_43B6' );
    dasmEntries.addBankLabel( 0x43DB, 0x3a, 'bnk_3a_43DB' );
    dasmEntries.addBankLabel( 0x4401, 0x3a, 'bnk_3a_4401' );
    dasmEntries.addBankLabel( 0x4412, 0x3a, 'bnk_3a_4412' );
    dasmEntries.addBankLabel( 0x4426, 0x3a, 'bnk_3a_4426' );
    dasmEntries.addBankLabel( 0x4435, 0x3a, 'bnk_3a_4435' );
    dasmEntries.addBankLabel( 0x445B, 0x3a, 'bnk_3a_445B' );
    dasmEntries.addTable( 0x4485, 0x3a, 'tbl_3a_4485', 1, 7 );
    dasmEntries.addTable( 0x448C, 0x3a, 'tbl_3a_448C', 1, 7 );
    dasmEntries.addTable( 0x4493, 0x3a, 'tbl_3a_4493', 1, 7 );
    dasmEntries.addTable( 0x449a, 0x3a, 'tbl_3a_449a', 1, 7 );
    dasmEntries.addTable( 0x44a1, 0x3a, 'tbl_3a_44a1', 1, 7 );
    dasmEntries.addBankLabel( 0x44A8, 0x3a, 'bnk_3a_44A8' );
    dasmEntries.addBankLabel( 0x44F3, 0x3a, 'bnk_3a_44F3' );
    dasmEntries.addBankLabel( 0x44FC, 0x3a, 'bnk_3a_44FC' );
    dasmEntries.addBankLabel( 0x4510, 0x3a, 'bnk_3a_4510' );
    dasmEntries.addBankLabel( 0x4524, 0x3a, 'bnk_3a_4524' );
    dasmEntries.addBankLabel( 0x4538, 0x3a, 'bnk_3a_4538' );
    dasmEntries.addBankLabel( 0x454C, 0x3a, 'bnk_3a_454C' );
    dasmEntries.addBankLabel( 0x4584, 0x3a, 'bnk_3a_4584' );
    dasmEntries.addBankLabel( 0x459D, 0x3a, 'bnk_3a_459D' );
    dasmEntries.addBankLabel( 0x45B3, 0x3a, 'bnk_3a_45B3' );
    dasmEntries.addBankLabel( 0x45C9, 0x3a, 'bnk_3a_45C9' );
    dasmEntries.addBankLabel( 0x45DF, 0x3a, 'bnk_3a_45DF' );
    dasmEntries.addBankLabel( 0x45F3, 0x3a, 'bnk_3a_45F3' );
    dasmEntries.addBankLabel( 0x460F, 0x3a, 'bnk_3a_460F' );
    dasmEntries.addBankLabel( 0x46AA, 0x3a, 'bnk_3a_46AA' );
    dasmEntries.addBankLabel( 0x46BA, 0x3a, 'bnk_3a_46BA' );
    dasmEntries.addBankLabel( 0x471A, 0x3a, 'bnk_3a_471A' );
    dasmEntries.addBankLabel( 0x472B, 0x3a, 'bnk_3a_472B' );
    dasmEntries.addBankLabel( 0x4737, 0x3a, 'bnk_3a_4737' );
    dasmEntries.addBankLabel( 0x473E, 0x3a, 'bnk_3a_473E' );
    dasmEntries.addBankLabel( 0x4780, 0x3a, 'bnk_3a_4780' );
    dasmEntries.addBankLabel( 0x479E, 0x3a, 'bnk_3a_479E' );
    dasmEntries.addBankLabel( 0x47A9, 0x3a, 'bnk_3a_47A9' );
    dasmEntries.addBankLabel( 0x47FB, 0x3a, 'bnk_3a_47FB' );
    dasmEntries.addBankLabel( 0x4875, 0x3a, 'bnk_3a_4875' );
    dasmEntries.addBankLabel( 0x488d, 0x3a, 'bnk_3a_488d' );
    dasmEntries.addBankLabel( 0x4899, 0x3a, 'bnk_3a_4899' );
    dasmEntries.addBankLabel( 0x48C1, 0x3a, 'bnk_3a_48C1' );
    dasmEntries.addBankLabel( 0x48D0, 0x3a, 'bnk_3a_48D0' );
    dasmEntries.addBankLabel( 0x48DF, 0x3a, 'bnk_3a_48DF' );
    dasmEntries.addBankLabel( 0x48E9, 0x3a, 'bnk_3a_48E9' );
    dasmEntries.addBankLabel( 0x490B, 0x3a, 'bnk_3a_490B' );
    dasmEntries.addBankLabel( 0x497C, 0x3a, 'bnk_3a_497C' );
    dasmEntries.addBankLabel( 0x4983, 0x3a, 'bnk_3a_4983' );
    dasmEntries.addBankLabel( 0x498F, 0x3a, 'bnk_3a_498F' );
    dasmEntries.addBankLabel( 0x4995, 0x3a, 'bnk_3a_4995' );
    dasmEntries.addBankLabel( 0x49A7, 0x3a, 'bnk_3a_49A7' );
    dasmEntries.addBankLabel( 0x49C5, 0x3a, 'bnk_3a_49C5' );
    dasmEntries.addBankLabel( 0x49CE, 0x3a, 'bnk_3a_49CE' );
    dasmEntries.addBankLabel( 0x49F7, 0x3a, 'bnk_3a_49F7' );
    dasmEntries.addBankLabel( 0x4A00, 0x3a, 'bnk_3a_4A00' );
    dasmEntries.addBankLabel( 0x4A37, 0x3a, 'bnk_3a_4A37' );
    dasmEntries.addBankLabel( 0x4A3F, 0x3a, 'bnk_3a_4A3F' );
    dasmEntries.addBankLabel( 0x4A47, 0x3a, 'bnk_3a_4A47' );
    dasmEntries.addBankLabel( 0x4A93, 0x3a, 'bnk_3a_4A93' );
    dasmEntries.addBankLabel( 0x4AB0, 0x3a, 'bnk_3a_4AB0' );
    dasmEntries.addBankLabel( 0x4AF4, 0x3a, 'bnk_3a_4AF4' );
    dasmEntries.addBankLabel( 0x4B0A, 0x3a, 'bnk_3a_4B0A' );
    dasmEntries.addBankLabel( 0x4B11, 0x3a, 'bnk_3a_4B11' );
    dasmEntries.addBankLabel( 0x4B1A, 0x3a, 'bnk_3a_4B1A' );
    dasmEntries.addBankLabel( 0x4B23, 0x3a, 'bnk_3a_4B23' );
    dasmEntries.addBankLabel( 0x4B3A, 0x3a, 'bnk_3a_4B3A' );
    dasmEntries.addBankLabel( 0x4B68, 0x3a, 'bnk_3a_4B68' );
    dasmEntries.addBankLabel( 0x4B95, 0x3a, 'bnk_3a_4B95' );
    dasmEntries.addBankLabel( 0x4BAB, 0x3a, 'bnk_3a_4BAB' );
    dasmEntries.addBankLabel( 0x4BDB, 0x3a, 'bnk_3a_4BDB' );
    dasmEntries.addBankLabel( 0x4C06, 0x3a, 'bnk_3a_4C06' );
    dasmEntries.addBankLabel( 0x4C36, 0x3a, 'bnk_3a_4C36' );
    dasmEntries.addBankLabel( 0x4C5C, 0x3a, 'bnk_3a_4C5C' );
    dasmEntries.addBankLabel( 0x4C7E, 0x3a, 'bnk_3a_4C7E' );
    dasmEntries.addBankLabel( 0x4C89, 0x3a, 'bnk_3a_4C89' );
    dasmEntries.addBankLabel( 0x4C91, 0x3a, 'bnk_3a_4C91' );
    dasmEntries.addBankLabel( 0x4C98, 0x3a, 'bnk_3a_4C98' );
    dasmEntries.addBankLabel( 0x4CA7, 0x3a, 'bnk_3a_4CA7' );
    dasmEntries.addBankLabel( 0x4CBC, 0x3a, 'bnk_3a_4CBC' );

    dasmEntries.addBankMacro( 0x4CCC, 0x3a, 3, [1, 2] );

    dasmEntries.addBankLabel( 0x4CDA, 0x3a, 'bnk_3a_4CDA' );
    dasmEntries.addBankLabel( 0x4D00, 0x3a, 'bnk_3a_4D00' );
    dasmEntries.addBankLabel( 0x4D2D, 0x3a, 'bnk_3a_4D2D' );
    dasmEntries.addBankLabel( 0x4D6E, 0x3a, 'bnk_3a_4D6E' );
    dasmEntries.addBankLabel( 0x4DAD, 0x3a, 'bnk_3a_4DAD' );
    dasmEntries.addBankLabel( 0x4DCD, 0x3a, 'bnk_3a_4DCD' );
    dasmEntries.addBankLabel( 0x4DD2, 0x3a, 'bnk_3a_4DD2' );
    dasmEntries.addBankLabel( 0x4DD7, 0x3a, 'bnk_3a_4DD7' );
    dasmEntries.addBankLabel( 0x4DE8, 0x3a, 'bnk_3a_4DE8' );
    dasmEntries.addBankLabel( 0x4DF9, 0x3a, 'bnk_3a_4DF9' );
    dasmEntries.addBankLabel( 0x4E01, 0x3a, 'bnk_3a_4E01' );
    dasmEntries.addBankLabel( 0x4E14, 0x3a, 'bnk_3a_4E14' );
    dasmEntries.addBankLabel( 0x4E2E, 0x3a, 'bnk_3a_4E2E' );
    dasmEntries.addBankLabel( 0x4E60, 0x3a, 'bnk_3a_4E60' );
    dasmEntries.addBankLabel( 0x4E8F, 0x3a, 'bnk_3a_4E8F' );
    dasmEntries.addBankLabel( 0x4EB6, 0x3a, 'bnk_3a_4EB6' );
    dasmEntries.addBankLabel( 0x4EC8, 0x3a, 'bnk_3a_4EC8' );
    dasmEntries.addTable( 0x4ED8, 0x3a, 'tbl_3a_4ED8', 160, 4 );
    // dasmEntries.addBankLabel( 0x4F58, 0x3a, 'bnk_3a_4F58' );
    dasmEntries.addTable( 0x5158, 0x3a, 'tbl_3a_5158', 1, 3 );
    dasmEntries.addBankLabel( 0x515b, 0x3a, 'bnk_3a_515b' );

    dasmEntries.addBankLabel( 0x5184, 0x3a, 'bnk_3a_5184' );
    dasmEntries.addBankLabel( 0x51A7, 0x3a, 'bnk_3a_51A7' );
    dasmEntries.addBankLabel( 0x51B6, 0x3a, 'bnk_3a_51B6' );
    dasmEntries.addBankLabel( 0x51C5, 0x3a, 'bnk_3a_51C5' );
    dasmEntries.addBankLabel( 0x51D4, 0x3a, 'bnk_3a_51D4' );
    dasmEntries.addBankLabel( 0x51E3, 0x3a, 'bnk_3a_51E3' );
    dasmEntries.addBankLabel( 0x51F2, 0x3a, 'bnk_3a_51F2' );
    dasmEntries.addBankLabel( 0x51FB, 0x3a, 'bnk_3a_51FB' );
    dasmEntries.addBankLabel( 0x520C, 0x3a, 'bnk_3a_520C' );
    dasmEntries.addBankLabel( 0x5215, 0x3a, 'bnk_3a_5215' );
    dasmEntries.addBankLabel( 0x5226, 0x3a, 'bnk_3a_5226' );
    dasmEntries.addBankLabel( 0x52A9, 0x3a, 'bnk_3a_52A9' );
    dasmEntries.addBankLabel( 0x52AE, 0x3a, 'bnk_3a_52AE' );
    dasmEntries.addBankLabel( 0x52D9, 0x3a, 'bnk_3a_52D9' );
    dasmEntries.addBankLabel( 0x52E7, 0x3a, 'bnk_3a_52E7' );
    dasmEntries.addBankLabel( 0x52EC, 0x3a, 'bnk_3a_52EC' );
    dasmEntries.addBankLabel( 0x5317, 0x3a, 'bnk_3a_5317' );
    dasmEntries.addBankLabel( 0x5332, 0x3a, 'bnk_3a_5332' );
    dasmEntries.addBankLabel( 0x5338, 0x3a, 'bnk_3a_5338' );
    dasmEntries.addBankLabel( 0x543B, 0x3a, 'bnk_3a_543B' );
    dasmEntries.addBankLabel( 0x546C, 0x3a, 'bnk_3a_546C' );
    dasmEntries.addBankLabel( 0x5498, 0x3a, 'bnk_3a_5498' );
    dasmEntries.addBankLabel( 0x54E9, 0x3a, 'bnk_3a_54E9' );
    dasmEntries.addBankLabel( 0x54F9, 0x3a, 'bnk_3a_54F9' );
    dasmEntries.addBankLabel( 0x5509, 0x3a, 'bnk_3a_5509' );
    dasmEntries.addBankLabel( 0x5519, 0x3a, 'bnk_3a_5519' );
    dasmEntries.addBankLabel( 0x5527, 0x3a, 'bnk_3a_5527' );
    dasmEntries.addBankLabel( 0x554B, 0x3a, 'bnk_3a_554B' );
    dasmEntries.addBankLabel( 0x555C, 0x3a, 'bnk_3a_555C' );
    dasmEntries.addBankLabel( 0x5569, 0x3a, 'bnk_3a_5569' );
    dasmEntries.addBankLabel( 0x5591, 0x3a, 'bnk_3a_5591' );
    dasmEntries.addBankLabel( 0x55A9, 0x3a, 'bnk_3a_55A9' );
    dasmEntries.addBankLabel( 0x55C5, 0x3a, 'bnk_3a_55C5' );
    dasmEntries.addBankLabel( 0x55F7, 0x3a, 'bnk_3a_55F7' );
    dasmEntries.addBankLabel( 0x563C, 0x3a, 'bnk_3a_563C' );
    dasmEntries.addBankLabel( 0x5662, 0x3a, 'bnk_3a_5662' );
    dasmEntries.addBankLabel( 0x566F, 0x3a, 'bnk_3a_566F' );
    dasmEntries.addBankLabel( 0x5687, 0x3a, 'bnk_3a_5687' );
    dasmEntries.addBankLabel( 0x56A0, 0x3a, 'bnk_3a_56A0' );
    dasmEntries.addBankLabel( 0x56A5, 0x3a, 'bnk_3a_56A5' );
    dasmEntries.addBankLabel( 0x56BF, 0x3a, 'bnk_3a_56BF' );
    dasmEntries.addBankLabel( 0x56CB, 0x3a, 'bnk_3a_56CB' );
    dasmEntries.addBankLabel( 0x56F5, 0x3a, 'bnk_3a_56F5' );

    dasmEntries.addBankLabel( 0x5634, 0x3a, 'bnk_3a_5634' );
    dasmEntries.addBankLabel( 0x5EDC, 0x3a, 'bnk_3a_5EDC' );
    dasmEntries.addBankLabel( 0x570E, 0x3a, 'bnk_3a_570E' );
    dasmEntries.addBankLabel( 0x5719, 0x3a, 'bnk_3a_5719' );
    dasmEntries.addBankLabel( 0x5721, 0x3a, 'bnk_3a_5721' );
    dasmEntries.addBankLabel( 0x5734, 0x3a, 'bnk_3a_5734' );
    dasmEntries.addBankLabel( 0x576B, 0x3a, 'bnk_3a_576B' );
    dasmEntries.addTable( 0x5782, 0x3a, 'tbl_3a_5782', 10, 2 );
    dasmEntries.addBankLabel( 0x5796, 0x3a, 'bnk_3a_5796' );
    dasmEntries.addBankLabel( 0x57B4, 0x3a, 'bnk_3a_57B4' );
    dasmEntries.addBankLabel( 0x57F7, 0x3a, 'bnk_3a_57F7' );
    dasmEntries.addBankLabel( 0x5809, 0x3a, 'bnk_3a_5809' );
    dasmEntries.addBankLabel( 0x5835, 0x3a, 'bnk_3a_5835' );
    dasmEntries.addBankLabel( 0x5848, 0x3a, 'bnk_3a_5848' );
    dasmEntries.addBankLabel( 0x586A, 0x3a, 'bnk_3a_586A' );
    dasmEntries.addBankLabel( 0x58CA, 0x3a, 'bnk_3a_58CA' );
    dasmEntries.addBankLabel( 0x58FF, 0x3a, 'bnk_3a_58FF' );
    dasmEntries.addBankLabel( 0x5908, 0x3a, 'bnk_3a_5908' );
    dasmEntries.addBankLabel( 0x5953, 0x3a, 'bnk_3a_5953' );
    dasmEntries.addBankLabel( 0x5964, 0x3a, 'bnk_3a_5964' );
    dasmEntries.addBankLabel( 0x5975, 0x3a, 'bnk_3a_5975' );
    dasmEntries.addBankLabel( 0x59DF, 0x3a, 'bnk_3a_59DF' );
    dasmEntries.addBankLabel( 0x59EB, 0x3a, 'bnk_3a_59EB' );
    dasmEntries.addBankLabel( 0x59FE, 0x3a, 'bnk_3a_59FE' );
    dasmEntries.addBankLabel( 0x5A0B, 0x3a, 'bnk_3a_5A0B' );
    dasmEntries.addBankLabel( 0x5A1B, 0x3a, 'bnk_3a_5A1B' );
    dasmEntries.addBankLabel( 0x5A2B, 0x3a, 'bnk_3a_5A2B' );
    dasmEntries.addBankLabel( 0x5A3B, 0x3a, 'bnk_3a_5A3B' );
    dasmEntries.addBankLabel( 0x5A4B, 0x3a, 'bnk_3a_5A4B' );
    dasmEntries.addBankLabel( 0x5A6E, 0x3a, 'bnk_3a_5A6E' );
    dasmEntries.addBankLabel( 0x5AAA, 0x3a, 'bnk_3a_5AAA' );
    dasmEntries.addBankLabel( 0x5AC0, 0x3a, 'bnk_3a_5AC0' );
    dasmEntries.addBankLabel( 0x5AE9, 0x3a, 'bnk_3a_5AE9' );
    dasmEntries.addBankLabel( 0x5B01, 0x3a, 'bnk_3a_5B01' );
    dasmEntries.addBankLabel( 0x5B27, 0x3a, 'bnk_3a_5B27' );
    dasmEntries.addBankLabel( 0x5B47, 0x3a, 'bnk_3a_5B47' );
    dasmEntries.addBankLabel( 0x5B9A, 0x3a, 'bnk_3a_5B9A' );
    dasmEntries.addBankLabel( 0x5BC5, 0x3a, 'bnk_3a_5BC5' );
    dasmEntries.addBankLabel( 0x5BFC, 0x3a, 'bnk_3a_5BFC' );
    dasmEntries.addBankLabel( 0x5C09, 0x3a, 'bnk_3a_5C09' );
    dasmEntries.addBankLabel( 0x5C25, 0x3a, 'bnk_3a_5C25' );
    dasmEntries.addBankLabel( 0x5C50, 0x3a, 'bnk_3a_5C50' );
    dasmEntries.addBankLabel( 0x5C59, 0x3a, 'bnk_3a_5C59' );
    dasmEntries.addBankLabel( 0x5C62, 0x3a, 'bnk_3a_5C62' );
    dasmEntries.addBankLabel( 0x5CA4, 0x3a, 'bnk_3a_5CA4' );
    dasmEntries.addBankLabel( 0x5CB7, 0x3a, 'bnk_3a_5CB7' );
    dasmEntries.addBankLabel( 0x5CCD, 0x3a, 'bnk_3a_5CCD' );
    dasmEntries.addBankLabel( 0x5CE2, 0x3a, 'bnk_3a_5CE2' );
    dasmEntries.addBankLabel( 0x5D7D, 0x3a, 'bnk_3a_5D7D' );
    dasmEntries.addBankLabel( 0x5DB2, 0x3a, 'bnk_3a_5DB2' );
    dasmEntries.addBankLabel( 0x5DE8, 0x3a, 'bnk_3a_5DE8' );
    dasmEntries.addBankLabel( 0x5E20, 0x3a, 'bnk_3a_5E20' );
    dasmEntries.addBankLabel( 0x5E33, 0x3a, 'bnk_3a_5E33' );
    dasmEntries.addBankLabel( 0x5E72, 0x3a, 'bnk_3a_5E72' );
    dasmEntries.addBankLabel( 0x5E94, 0x3a, 'bnk_3a_5E94' );
    dasmEntries.addBankLabel( 0x5EE4, 0x3a, 'bnk_3a_5EE4' );
    dasmEntries.addBankLabel( 0x5EEC, 0x3a, 'bnk_3a_5EEC' );
    dasmEntries.addBankLabel( 0x5EF4, 0x3a, 'bnk_3a_5EF4' );
    dasmEntries.addBankLabel( 0x5F4B, 0x3a, 'bnk_3a_5F4B' );
    dasmEntries.addBankLabel( 0x5F56, 0x3a, 'bnk_3a_5F56' );
    dasmEntries.addBankLabel( 0x5F69, 0x3a, 'bnk_3a_5F69' );
    dasmEntries.addBankLabel( 0x5F7E, 0x3a, 'bnk_3a_5F7E' );
    dasmEntries.addBankLabel( 0x5F94, 0x3a, 'bnk_3a_5F94' );
    dasmEntries.addBankLabel( 0x5FCA, 0x3a, 'bnk_3a_5FCA' );
    dasmEntries.addBankLabel( 0x5FE8, 0x3a, 'bnk_3a_5FE8' );

    dasmEntries.addBankLabel( 0x6032, 0x3a, 'bnk_3a_6032' );
    dasmEntries.addBankLabel( 0x604D, 0x3a, 'bnk_3a_604D' );
    dasmEntries.addBankLabel( 0x6066, 0x3a, 'bnk_3a_6066' );
    dasmEntries.addBankLabel( 0x6084, 0x3a, 'bnk_3a_6084' );
    dasmEntries.addBankLabel( 0x609C, 0x3a, 'bnk_3a_609C' );
    dasmEntries.addBankLabel( 0x60BB, 0x3a, 'bnk_3a_60BB' );
    dasmEntries.addBankLabel( 0x60CF, 0x3a, 'bnk_3a_60CF' );
    dasmEntries.addBankLabel( 0x60FE, 0x3a, 'bnk_3a_60FE' );
    dasmEntries.addBankLabel( 0x610A, 0x3a, 'bnk_3a_610A' );
    dasmEntries.addBankLabel( 0x6116, 0x3a, 'bnk_3a_6116' );
    dasmEntries.addBankLabel( 0x6122, 0x3a, 'bnk_3a_6122' );
    dasmEntries.addBankLabel( 0x612E, 0x3a, 'bnk_3a_612E' );
    dasmEntries.addBankLabel( 0x613A, 0x3a, 'bnk_3a_613A' );
    dasmEntries.addBankLabel( 0x6146, 0x3a, 'bnk_3a_6146' );
    dasmEntries.addBankLabel( 0x6152, 0x3a, 'bnk_3a_6152' );
    dasmEntries.addBankLabel( 0x615E, 0x3a, 'bnk_3a_615E' );
    dasmEntries.addBankLabel( 0x6169, 0x3a, 'bnk_3a_6169' );
    dasmEntries.addBankLabel( 0x6174, 0x3a, 'bnk_3a_6174' );
    dasmEntries.addBankLabel( 0x617F, 0x3a, 'bnk_3a_617F' );
    dasmEntries.addBankLabel( 0x618A, 0x3a, 'bnk_3a_618A' );
    dasmEntries.addBankLabel( 0x6195, 0x3a, 'bnk_3a_6195' );
    dasmEntries.addBankLabel( 0x61A0, 0x3a, 'bnk_3a_61A0' );
    dasmEntries.addBankLabel( 0x61AB, 0x3a, 'bnk_3a_61AB' );
    dasmEntries.addBankLabel( 0x61B8, 0x3a, 'bnk_3a_61B8' );
    dasmEntries.addBankLabel( 0x61C5, 0x3a, 'bnk_3a_61C5' );
    dasmEntries.addBankLabel( 0x61D0, 0x3a, 'bnk_3a_61D0' );
    dasmEntries.addBankLabel( 0x61DB, 0x3a, 'bnk_3a_61DB' );
    dasmEntries.addBankLabel( 0x61E6, 0x3a, 'bnk_3a_61E6' );
    dasmEntries.addBankLabel( 0x61ED, 0x3a, 'bnk_3a_61ED' );
    dasmEntries.addBankLabel( 0x61F8, 0x3a, 'bnk_3a_61F8' );
    dasmEntries.addBankLabel( 0x6200, 0x3a, 'bnk_3a_6200' );
    dasmEntries.addBankLabel( 0x6225, 0x3a, 'bnk_3a_6225' );
    dasmEntries.addBankLabel( 0x623D, 0x3a, 'bnk_3a_623D' );
    dasmEntries.addBankLabel( 0x6255, 0x3a, 'bnk_3a_6255' );
    dasmEntries.addBankLabel( 0x6280, 0x3a, 'bnk_3a_6280' );
    dasmEntries.addBankLabel( 0x62A5, 0x3a, 'bnk_3a_62A5' );
    dasmEntries.addBankLabel( 0x631A, 0x3a, 'bnk_3a_631A' );
    dasmEntries.addBankLabel( 0x63B8, 0x3a, 'bnk_3a_63B8' );
    dasmEntries.addBankLabel( 0x63BC, 0x3a, 'bnk_3a_63BC' );

    dasmEntries.addTable( 0x63e4, 0x3a, 'tbl_3a_63e4', 4, 4)
    dasmEntries.addBankLabel( 0x63F4, 0x3a, 'bnk_3a_63F4' );
    dasmEntries.addBankLabel( 0x6400, 0x3a, 'bnk_3a_6400' );
    dasmEntries.addBankLabel( 0x641E, 0x3a, 'bnk_3a_641E' );
    dasmEntries.addBankLabel( 0x6436, 0x3a, 'bnk_3a_6436' );
    dasmEntries.addBankLabel( 0x6447, 0x3a, 'bnk_3a_6447' );
    dasmEntries.addBankLabel( 0x6456, 0x3a, 'bnk_3a_6456' );
    dasmEntries.addBankLabel( 0x646D, 0x3a, 'bnk_3a_646D' );
    dasmEntries.addBankLabel( 0x648D, 0x3a, 'bnk_3a_648D' );
    dasmEntries.addBankLabel( 0x64BF, 0x3a, 'bnk_3a_64BF' );
    dasmEntries.addBankLabel( 0x64D4, 0x3a, 'bnk_3a_64D4' );
    dasmEntries.addBankLabel( 0x64F1, 0x3a, 'bnk_3a_64F1' );
    dasmEntries.addBankLabel( 0x6502, 0x3a, 'bnk_3a_6502' );
    dasmEntries.addBankLabel( 0x66DB, 0x3a, 'bnk_3a_66DB' );
    dasmEntries.addBankLabel( 0x66FE, 0x3a, 'bnk_3a_66FE' );
    dasmEntries.addBankLabel( 0x6716, 0x3a, 'bnk_3a_6716' );
    dasmEntries.addBankLabel( 0x6739, 0x3a, 'bnk_3a_6739' );
    dasmEntries.addBankLabel( 0x6751, 0x3a, 'bnk_3a_6751' );
    dasmEntries.addBankLabel( 0x6783, 0x3a, 'bnk_3a_6783' );
    dasmEntries.addBankLabel( 0x67B3, 0x3a, 'bnk_3a_67B3' );
    dasmEntries.addBankLabel( 0x67C8, 0x3a, 'bnk_3a_67C8' );
    dasmEntries.addBankLabel( 0x6800, 0x3a, 'bnk_3a_6800' );
    dasmEntries.addBankLabel( 0x683E, 0x3a, 'bnk_3a_683E' );
    dasmEntries.addBankLabel( 0x68BF, 0x3a, 'bnk_3a_68BF' );
    dasmEntries.addBankLabel( 0x68E8, 0x3a, 'bnk_3a_68E8' );
    dasmEntries.addTable( 0x68f3, 0x3a, 'tbl_3a_68f3', 5, 2 );
    dasmEntries.addBankLabel( 0x68FD, 0x3a, 'bnk_3a_68FD' );
    dasmEntries.addBankLabel( 0x6912, 0x3a, 'bnk_3a_6912' );
    dasmEntries.addBankLabel( 0x6922, 0x3a, 'bnk_3a_6922' );
    dasmEntries.addBankLabel( 0x6932, 0x3a, 'bnk_3a_6932' );
    dasmEntries.addBankLabel( 0x6942, 0x3a, 'bnk_3a_6942' );
    dasmEntries.addBankLabel( 0x6952, 0x3a, 'bnk_3a_6952' );
    dasmEntries.addTable( 0x6966, 0x3a, 'tbl_3a_6966', 5, 5 );

    dasmEntries.addBankLabel( 0x697F, 0x3a, 'bnk_3a_697F' );
    dasmEntries.addBankLabel( 0x69B4, 0x3a, 'bnk_3a_69B4' );
    dasmEntries.addBankLabel( 0x69D0, 0x3a, 'bnk_3a_69D0' );
    dasmEntries.addBankLabel( 0x69F7, 0x3a, 'bnk_3a_69F7' );
    dasmEntries.addBankLabel( 0x6A20, 0x3a, 'bnk_3a_6A20' );
    dasmEntries.addBankLabel( 0x6A39, 0x3a, 'bnk_3a_6A39' );
    dasmEntries.addBankLabel( 0x6A4E, 0x3a, 'bnk_3a_6A4E' );
    dasmEntries.addBankLabel( 0x6A7D, 0x3a, 'bnk_3a_6A7D' );
    dasmEntries.addBankLabel( 0x6B43, 0x3a, 'bnk_3a_6B43' );
    dasmEntries.addBankLabel( 0x6B49, 0x3a, 'bnk_3a_6B49' );
    dasmEntries.addBankLabel( 0x6B50, 0x3a, 'bnk_3a_6B50' );
    dasmEntries.addBankLabel( 0x6B66, 0x3a, 'bnk_3a_6B66' );
    dasmEntries.addBankLabel( 0x6B85, 0x3a, 'bnk_3a_6B85' );
    dasmEntries.addBankLabel( 0x6B96, 0x3a, 'bnk_3a_6B96' );
    dasmEntries.addBankLabel( 0x6BAB, 0x3a, 'bnk_3a_6BAB' );
    dasmEntries.addBankLabel( 0x6BBE, 0x3a, 'bnk_3a_6BBE' );
    dasmEntries.addBankLabel( 0x6BCC, 0x3a, 'bnk_3a_6BCC' );

    dasmEntries.addBankLabel( 0x6C02, 0x3a, 'bnk_3a_6C02' );
    dasmEntries.addBankLabel( 0x6C0D, 0x3a, 'bnk_3a_6C0D' );
    dasmEntries.addBankLabel( 0x6C17, 0x3a, 'bnk_3a_6C17' );
    dasmEntries.addBankLabel( 0x6C82, 0x3a, 'bnk_3a_6C82' );
    dasmEntries.addBankLabel( 0x6CDA, 0x3a, 'bnk_3a_6CDA' );
    dasmEntries.addBankLabel( 0x6CFA, 0x3a, 'bnk_3a_6CFA' );
    dasmEntries.addBankLabel( 0x6D36, 0x3a, 'bnk_3a_6D36' );
    dasmEntries.addBankLabel( 0x6D53, 0x3a, 'bnk_3a_6D53' );
    dasmEntries.addBankLabel( 0x6D7D, 0x3a, 'bnk_3a_6D7D' );
    dasmEntries.addBankLabel( 0x6D94, 0x3a, 'bnk_3a_6D94' );
    dasmEntries.addBankLabel( 0x6DB5, 0x3a, 'bnk_3a_6DB5' );
    dasmEntries.addBankLabel( 0x6DE3, 0x3a, 'bnk_3a_6DE3' );
    dasmEntries.addBankLabel( 0x6DEB, 0x3a, 'bnk_3a_6DEB' );

    dasmEntries.addBankLabel( 0x6E0D, 0x3a, 'bnk_3a_6E0D' );
    dasmEntries.addBankLabel( 0x6E45, 0x3a, 'bnk_3a_6E45' );
    dasmEntries.addBankLabel( 0x6E53, 0x3a, 'bnk_3a_6E53' );
    dasmEntries.addBankLabel( 0x6E65, 0x3a, 'bnk_3a_6E65' );
    dasmEntries.addBankLabel( 0x6E73, 0x3a, 'bnk_3a_6E73' );
    dasmEntries.addBankLabel( 0x6E94, 0x3a, 'bnk_3a_6E94' );
    dasmEntries.addBankLabel( 0x6EA0, 0x3a, 'bnk_3a_6EA0' );
    dasmEntries.addBankLabel( 0x6EAE, 0x3a, 'bnk_3a_6EAE' );
    dasmEntries.addBankLabel( 0x6EBC, 0x3a, 'bnk_3a_6EBC' );
    dasmEntries.addBankLabel( 0x6ECE, 0x3a, 'bnk_3a_6ECE' );
    dasmEntries.addBankLabel( 0x6EE6, 0x3a, 'bnk_3a_6EE6' );

    dasmEntries.addBankLabel( 0x6F00, 0x3a, 'bnk_3a_6F00' );
    dasmEntries.addBankLabel( 0x6F0D, 0x3a, 'bnk_3a_6F0D' );
    dasmEntries.addBankLabel( 0x6F1F, 0x3a, 'bnk_3a_6F1F' );
    dasmEntries.addBankLabel( 0x6F28, 0x3a, 'bnk_3a_6F28' );
    dasmEntries.addBankLabel( 0x6F31, 0x3a, 'bnk_3a_6F31' );
    dasmEntries.addBankLabel( 0x6F3A, 0x3a, 'bnk_3a_6F3A' );
    dasmEntries.addBankLabel( 0x6F5E, 0x3a, 'bnk_3a_6F5E' );
    dasmEntries.addBankLabel( 0x6FAE, 0x3a, 'bnk_3a_6FAE' );
    dasmEntries.addBankLabel( 0x6FC4, 0x3a, 'bnk_3a_6FC4' );
    dasmEntries.addBankLabel( 0x6FDC, 0x3a, 'bnk_3a_6FDC' );
    dasmEntries.addBankLabel( 0x6FE9, 0x3a, 'bnk_3a_6FE9' );
    dasmEntries.addBankLabel( 0x6FF6, 0x3a, 'bnk_3a_6FF6' );
    dasmEntries.addBankLabel( 0x7013, 0x3a, 'bnk_3a_7013' );
    dasmEntries.addBankLabel( 0x704B, 0x3a, 'bnk_3a_704B' );
    dasmEntries.addBankLabel( 0x7058, 0x3a, 'bnk_3a_7058' );
    dasmEntries.addBankLabel( 0x70A0, 0x3a, 'bnk_3a_70A0' );
    dasmEntries.addTable( 0x70C5, 0x3a, 'tbl_3a_70C5', 80, 4 );
    dasmEntries.addTable( 0x76ea, 0x3a, 'tbl_3a_76ea', 7, 3 );

    dasmEntries.addBankLabel( 0x75B7, 0x3a, 'bnk_3a_75B7' );
    dasmEntries.addBankLabel( 0x75C2, 0x3a, 'bnk_3a_75C2' );
    dasmEntries.addBankLabel( 0x75E9, 0x3a, 'bnk_3a_75E9' );
    dasmEntries.addBankLabel( 0x7602, 0x3a, 'bnk_3a_7602' );
    dasmEntries.addBankLabel( 0x761B, 0x3a, 'bnk_3a_761B' );
    dasmEntries.addBankLabel( 0x7634, 0x3a, 'bnk_3a_7634' );
    dasmEntries.addBankLabel( 0x764D, 0x3a, 'bnk_3a_764D' );
    dasmEntries.addBankLabel( 0x7666, 0x3a, 'bnk_3a_7666' );
    dasmEntries.addBankLabel( 0x767F, 0x3a, 'bnk_3a_767F' );
    dasmEntries.addBankLabel( 0x76AC, 0x3a, 'bnk_3a_76AC' );
    dasmEntries.addBankLabel( 0x76FF, 0x3a, 'bnk_3a_76FF' );
    dasmEntries.addBankLabel( 0x779B, 0x3a, 'bnk_3a_779B' );
    dasmEntries.addBankLabel( 0x77D5, 0x3a, 'bnk_3a_77D5' );
    dasmEntries.addBankLabel( 0x77F9, 0x3a, 'bnk_3a_77F9' );
    dasmEntries.addBankLabel( 0x782C, 0x3a, 'bnk_3a_782C' );
    dasmEntries.addBankLabel( 0x7848, 0x3a, 'bnk_3a_7848' );
    dasmEntries.addBankLabel( 0x787F, 0x3a, 'bnk_3a_787F' );
    dasmEntries.addBankLabel( 0x7894, 0x3a, 'bnk_3a_7894' );
    dasmEntries.addBankLabel( 0x78BB, 0x3a, 'bnk_3a_78BB' );
    dasmEntries.addBankLabel( 0x78CB, 0x3a, 'bnk_3a_78CB' );
    dasmEntries.addBankLabel( 0x792D, 0x3a, 'bnk_3a_792D' );
    dasmEntries.addBankLabel( 0x7981, 0x3a, 'bnk_3a_7981' );
    dasmEntries.addBankLabel( 0x7AA1, 0x3a, 'bnk_3a_7AA1' );
    dasmEntries.addBankLabel( 0x7AB1, 0x3a, 'bnk_3a_7AB1' );
    dasmEntries.addBankLabel( 0x7AB4, 0x3a, 'bnk_3a_7AB4' );
    dasmEntries.addBankLabel( 0x7AC4, 0x3a, 'bnk_3a_7AC4' );
    dasmEntries.addBankLabel( 0x7AF5, 0x3a, 'bnk_3a_7AF5' );
    dasmEntries.addBankLabel( 0x7B1E, 0x3a, 'bnk_3a_7B1E' );
    dasmEntries.addBankLabel( 0x7B2E, 0x3a, 'bnk_3a_7B2E' );
    dasmEntries.addBankLabel( 0x7BB2, 0x3a, 'bnk_3a_7BB2' );
}

function getDasmEntries_bnk_3b( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x3b, 'pageMarker_bnk_3b', 1, 1 );
    dasmEntries.addTableWpc( 0x4001, 0x3b, 'tblwpc_bnk_3b_4001' );
    dasmEntries.addTable( 0x4208, 0x3b, 'tbl_3b_4208', 110, 32 );
    dasmEntries.addBankLabel( 0x5004, 0x3b, 'bnk_3b_5004' );
    dasmEntries.addBankLabel( 0x5015, 0x3b, 'bnk_3b_5015' );
    dasmEntries.addBankLabel( 0x5026, 0x3b, 'bnk_3b_5026' );
    dasmEntries.addBankLabel( 0x506A, 0x3b, 'bnk_3b_506A' );
    dasmEntries.addBankLabel( 0x5088, 0x3b, 'bnk_3b_5088' );
    dasmEntries.addBankLabel( 0x5090, 0x3b, 'bnk_3b_5090' );
    dasmEntries.addBankLabel( 0x50AE, 0x3b, 'bnk_3b_50AE' );
    dasmEntries.addBankLabel( 0x50BF, 0x3b, 'bnk_3b_50BF' );
    dasmEntries.addBankLabel( 0x50E5, 0x3b, 'bnk_3b_50E5' );
    dasmEntries.addBankLabel( 0x50F6, 0x3b, 'bnk_3b_50F6' );
    dasmEntries.addBankLabel( 0x5165, 0x3b, 'bnk_3b_5165' );
    dasmEntries.addBankLabel( 0x5186, 0x3b, 'bnk_3b_5186' );
    dasmEntries.addTable( 0x51fe, 0x3b, 'tbl_3b_51fe', 1, 9 );
    dasmEntries.addBankLabel( 0x5207, 0x3b, 'bnk_3b_5207' );
    dasmEntries.addBankLabel( 0x5211, 0x3b, 'bnk_3b_5211' );
    dasmEntries.addBankLabel( 0x5232, 0x3b, 'bnk_3b_5232' );
    dasmEntries.addBankLabel( 0x5259, 0x3b, 'bnk_3b_5259' );
    dasmEntries.addBankLabel( 0x534E, 0x3b, 'bnk_3b_534E' );
    dasmEntries.addBankLabel( 0x5361, 0x3b, 'bnk_3b_5361' );
    dasmEntries.addBankLabel( 0x536D, 0x3b, 'bnk_3b_536D' );
    dasmEntries.addTable( 0x53c0, 0x3b, 'tbl_3b_53c0', 30, 2 );
    dasmEntries.addBankLabel( 0x53FC, 0x3b, 'bnk_3b_53FC' );
    dasmEntries.addBankLabel( 0x5410, 0x3b, 'bnk_3b_5410' );
    dasmEntries.addBankLabel( 0x5436, 0x3b, 'bnk_3b_5436' );
    dasmEntries.addBankLabel( 0x544C, 0x3b, 'bnk_3b_544C' );
    dasmEntries.addBankLabel( 0x5461, 0x3b, 'bnk_3b_5461' );
    dasmEntries.addBankLabel( 0x54A4, 0x3b, 'bnk_3b_54A4' );
    dasmEntries.addBankLabel( 0x54DB, 0x3b, 'bnk_3b_54DB' );
    dasmEntries.addBankLabel( 0x54DD, 0x3b, 'bnk_3b_54DD' );
    dasmEntries.addBankLabel( 0x5512, 0x3b, 'bnk_3b_5512' );

    dasmEntries.addTable( 0x5f2e, 0x3b, 'filler', 262, 32 );
    dasmEntries.addTable( 0x7fee, 0x3b, 'filler', 1, 18 );
}

function getDasmEntries_bnk_3c( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x3C, 'pageMarker_bnk_3C', 1, 1 );
}

function getDasmEntries_bnk_3d( dasmEntries ) {
    dasmEntries.addTable( 0x4000, 0x3D, 'pageMarker_bnk_3D', 1, 1 );
    dasmEntries.addTable( 0x4001, 0x3D, 'tbl_3D_4001', 80, 32 );

    dasmEntries.addBankLabel( 0x4694, 0x3d, 'bnk_3d_4694' );
    dasmEntries.addBankLabel( 0x46b5, 0x3d, 'bnk_3d_46b5' );

    dasmEntries.addBankLabel( 0x49db, 0x3d, 'bnk_3d_49db' );
    dasmEntries.addBankLabel( 0x4915, 0x39, 'bnk_3d_4915' );

    dasmEntries.addTable( 0x4a01, 0x3D, 'tbl_3d_4a01', 1, 0x1e);
    dasmEntries.addTableWpc( 0x4a1f, 0x3d, 'tblwpc_bnk_3d_4a1f' );
    dasmEntries.addTableWpc( 0x4a63, 0x3d, 'tblwpc_bnk_3d_4a63' );
    dasmEntries.addTableWpc( 0x4a6b, 0x3d, 'tblwpc_bnk_3d_4a6b' );
    dasmEntries.addTableWpc( 0x4a9a, 0x3d, 'tblwpc_bnk_3d_4a9a' );
    dasmEntries.addTableWpc( 0x4aef, 0x3d, 'tblwpc_bnk_3d_4aef' );
    dasmEntries.addTableWpc( 0x4c5a, 0x3d, 'tblwpc_bnk_3d_4c5a' );
    // dasmEntries.addBankLabel( 0x4c5a, 0x3d, 'bnk_3d_4c5a' );

    dasmEntries.addTable( 0x5153, 0x3d, 'tbl_bnk_3d_5153', 105, 2 );
    dasmEntries.addTableWpc( 0x5225, 0x3d, 'tblwpc_bnk_3d_5225' );

    // ptrs to LightShowData
    dasmEntries.addTableWpc( 0x524a, 0x3d, 'tblwpc_LightShowDataPtrs' );

    dasmEntries.addTable( 0x52cf, 0x3d, 'tbl_bnk_3d_52cf', 10, 2 );
    dasmEntries.addTable( 0x52e3, 0x3d, 'tbl_bnk_3d_52e3', 14, 2 );
    dasmEntries.addTable( 0x52ff, 0x3d, 'tbl_bnk_3d_52ff', 1, 1 );
    dasmEntries.addTable( 0x5300, 0x3d, 'tbl_bnk_3d_5300', 3, 2 );
    dasmEntries.addTable( 0x5306, 0x3d, 'tbl_bnk_3d_5306', 1, 1 );
    dasmEntries.addTable( 0x5307, 0x3d, 'tbl_bnk_3d_5307', 8, 2 );
    dasmEntries.addTable( 0x5317, 0x3d, 'tbl_bnk_3d_5317', 1, 1 );
    dasmEntries.addTable( 0x5318, 0x3d, 'tbl_bnk_3d_5318', 8, 2 );
    dasmEntries.addTable( 0x5328, 0x3d, 'tbl_bnk_3d_5328', 1, 1 );
    dasmEntries.addTable( 0x5329, 0x3d, 'tbl_bnk_3d_5329', 8, 2 );
    dasmEntries.addTable( 0x5339, 0x3d, 'tbl_bnk_3d_5339', 1, 1 );
    dasmEntries.addTable( 0x533a, 0x3d, 'tbl_bnk_3d_533a', 8, 2 );
    dasmEntries.addTable( 0x534a, 0x3d, 'tbl_bnk_3d_534a', 1, 1 );
    dasmEntries.addTable( 0x534b, 0x3d, 'tbl_bnk_3d_534b', 8, 2 );
    dasmEntries.addTable( 0x535b, 0x3d, 'tbl_bnk_3d_535b', 1, 9 );

    dasmEntries.addTable( 0x5364, 0x3d, 'AttractModeLightShowData00', 1, 4 );
    dasmEntries.addTable( 0x5368, 0x3d, 'AttractModeLightShowData01', 1, 8 );
    dasmEntries.addTable( 0x5370, 0x3d, 'AttractModeLightShowData02', 1, 4 );
    dasmEntries.addTable( 0x5374, 0x3d, 'AttractModeLightShowData03', 1, 8 );
    dasmEntries.addTable( 0x537c, 0x3d, 'AttractModeLightShowData04', 1, 6 );
    dasmEntries.addTable( 0x5382, 0x3d, 'AttractModeLightShowData05', 1, 8 );
    dasmEntries.addTable( 0x538a, 0x3d, 'AttractModeLightShowData06', 1, 8 );
    dasmEntries.addTable( 0x5392, 0x3d, 'AttractModeLightShowData07', 1, 8 );
    dasmEntries.addTable( 0x539a, 0x3d, 'AttractModeLightShowData08', 1, 8 );
    dasmEntries.addTable( 0x53a2, 0x3d, 'AttractModeLightShowData09', 1, 7 );
    dasmEntries.addTable( 0x53a9, 0x3d, 'AttractModeLightShowData0a', 1, 7 );
    dasmEntries.addTable( 0x53b0, 0x3d, 'AttractModeLightShowData0b', 1, 7 );
    dasmEntries.addTable( 0x53b7, 0x3d, 'AttractModeLightShowData0c', 1, 8 );
    dasmEntries.addTable( 0x53bf, 0x3d, 'AttractModeLightShowData0d', 1, 8 );
    dasmEntries.addTable( 0x53c7, 0x3d, 'AttractModeLightShowData0e', 1, 8 );
    dasmEntries.addTable( 0x53cf, 0x3d, 'AttractModeLightShowData0f', 1, 8 );
    dasmEntries.addTable( 0x53d7, 0x3d, 'AttractModeLightShowData10', 1, 8 );
    dasmEntries.addTable( 0x53df, 0x3d, 'AttractModeLightShowData11', 1, 8 );
    dasmEntries.addTable( 0x53e7, 0x3d, 'AttractModeLightShowData12', 1, 8 );
    dasmEntries.addTable( 0x53ef, 0x3d, 'AttractModeLightShowData13', 1, 3 );

    dasmEntries.addTable( 0x53eb, 0x3d, 'tbl_bnk_3d_53eb', 1, 7 );
    dasmEntries.addTable( 0x53f2, 0x3d, 'tbl_bnk_3d_53f2', 16, 3 );
    dasmEntries.addTable( 0x5422, 0x3d, 'tbl_bnk_3d_5422', 32, 5 );

    dasmEntries.addBankLabel( 0x56c3, 0x3d, 'bnk_3d_56c3' );
    dasmEntries.addBankLabel( 0x56d5, 0x3d, 'bnk_3d_56d5' );
    dasmEntries.addBankLabel( 0x56dd, 0x3d, 'bnk_3d_56dd' );
    dasmEntries.addBankLabel( 0x57c4, 0x3d, 'bnk_3d_57c4' );
    dasmEntries.addBankLabel( 0x57f0, 0x3d, 'bnk_3d_57f0' );
    dasmEntries.addBankLabel( 0x5871, 0x3d, 'bnk_3d_5871' );
    dasmEntries.addBankLabel( 0x5871, 0x3d, 'bnk_3d_5871' );
    dasmEntries.addBankLabel( 0x5a9f, 0x3d, 'bnk_3d_5a9f' );
    dasmEntries.addBankLabel( 0x5e75, 0x3d, 'bnk_3d_5e75' );

    dasmEntries.addBankLabel( 0x73f1, 0x3d, 'bnk_3d_73f1' );
    dasmEntries.addBankLabel( 0x7531, 0x3d, 'bnk_3d_7531' );
    dasmEntries.addBankLabel( 0x753c, 0x3d, 'bnk_3d_753c' );
    dasmEntries.addBankLabel( 0x7547, 0x3d, 'bnk_3d_7547' );
    dasmEntries.addBankLabel( 0x7563, 0x3d, 'bnk_3d_7563' );
    dasmEntries.addBankLabel( 0x7572, 0x3d, 'bnk_3d_7572' );
    dasmEntries.addBankLabel( 0x757d, 0x3d, 'bnk_3d_757d' );
    dasmEntries.addBankLabel( 0x7589, 0x3d, 'bnk_3d_7589' );
}

function getDasmEntries_sys_8000( dasmEntries ) {
    dasmEntries.addTableSys( 0x8000, 'pageMarker_sys_3E', 1, 1 );
    dasmEntries.addTableSys( 0x8001, 'tblBankAddresses', 136, 3 );
    dasmEntries.addTableSys( 0x8115, 'vecIrqTailHook', 1, 2 );
    dasmEntries.addTableSys( 0x8117, 'vecIrqTailHook_BankId', 1, 1 );
    dasmEntries.addTableSys( 0x8199, 'tblBankAddressesHdr', 1, 2 );
    dasmEntries.addTableSys( 0x819b, 'tblBankAddresses', 0x43, 3 );

    dasmEntries.add( 0x826c, 1, 'ErrorHandler', [ 1 ], dasm.getMacroInstruction_OneByte );
    dasmEntries.add( 0x8283, 1, 'ThrowGenError', [ 1 ], dasm.getMacroInstruction_OneByte );

    dasmEntries.add( 0x82f2, 1, 'shiftRam2B', [ 1 ], dasm.getMacroInstruction_OneByte );
    dasmEntries.add( 0x8302, 1, 'shiftRam22', [ 1 ], dasm.getMacroInstruction_OneByte );

    dasmEntries.add( 0x829F, 1, 'ThrowUserError_Fatal' );
    dasmEntries.add( 0x82B5, 1, 'ThrowUserError_NonFatal' );

    dasmEntries.add( 0x82CB, 1, 'LoadYWithSettingValue', [ 1 ], dasm.getMacroInstruction_OneByte );
    dasmEntries.add( 0x82D8, 1, 'LoadAWithSettingValue', [ 1 ], dasm.getMacroInstruction_OneByte );
    dasmEntries.add( 0x82e5, 1, 'LoadDWithSettingValue', [ 1 ], dasm.getMacroInstruction_OneByte );
    dasmEntries.add( 0x8312, 1 );
    dasmEntries.add( 0x831F, 1, 'Sleep', [ 1 ], dasm.getMacroInstruction_OneByte );
    dasmEntries.addSysMacro( 0x8337, 1, [1] );
    dasmEntries.addSysMacro( 0x8344, 1 ,[1] );
    dasmEntries.addSysMacro( 0x8351, 1, [1] );
    dasmEntries.addSysMacro( 0x835e, 1, [1] );
    dasmEntries.addSysMacro( 0x836b, 1, [1] );
    dasmEntries.addSysMacro( 0x8378, 1, [1] );
    dasmEntries.addSysMacro( 0x8389, 1, [1] );
    dasmEntries.addSysMacro( 0x839a, 1, [1] );
    dasmEntries.addSysMacro( 0x83a7, 1, [1] );
    dasmEntries.addSysMacro( 0x83b4, 1 , [1] );
    dasmEntries.addSysMacro( 0x83c1, 1 , [1] );
    dasmEntries.addSysMacro( 0x83ce, 1 , [1] );
    dasmEntries.addSysMacro( 0x83db, 1 , [1] );
    dasmEntries.addSysMacro( 0x83e8, 1 , [1] );
    dasmEntries.addSysMacro( 0x83f5, 1 , [1] );
    dasmEntries.addSysMacro( 0x8404, 1 , [1] );
    dasmEntries.addSysMacro( 0x8413, 1 , [1] );
    dasmEntries.addSysMacro( 0x8422, 1 , [1] );
    dasmEntries.addSysMacro( 0x8431, 1 , [1] );
    dasmEntries.addSysMacro( 0x8445, 1 , [1] );
    dasmEntries.addSysMacro( 0x8459, 1 , [1] );
    dasmEntries.addSysMacro( 0x8468, 1 , [1] );
    dasmEntries.addSysMacro( 0x8477, 1 , [1] );
    dasmEntries.addSysMacro( 0x8486, 1 , [1] );
    dasmEntries.addSysMacro( 0x8495, 1 , [1] );
    dasmEntries.addSysMacro( 0x84a4, 1 , [1] );
    dasmEntries.addSysMacro( 0x84b3, 1 , [1] );
    dasmEntries.addSysMacro( 0x84c2, 1, [1] );
    dasmEntries.addSysMacro( 0x84d1, 1 , [1] );
    dasmEntries.addSysMacro( 0x84de, 1 , [1] );
    dasmEntries.addSysMacro( 0x84eb, 1 , [1] );
    dasmEntries.addSysMacro( 0x84f8, 1 , [1] );
    dasmEntries.addSysMacro( 0x8505, 1 , [1] );
    dasmEntries.addSysMacro( 0x8505, 1 , [1] );
    dasmEntries.addSysMacro( 0x8512, 1 , [1] );
    dasmEntries.addSysMacro( 0x851f, 1, [1] );
    dasmEntries.addSysMacro( 0x852c, 1 , [1] );
    dasmEntries.addSysMacro( 0x8538, 1 , [1] );
    dasmEntries.addSysMacro( 0x853b, 1 , [1] );
    dasmEntries.addSysMacro( 0x854b, 1 , [1] );
    dasmEntries.addSysMacro( 0x855b, 1 , [1] );
    dasmEntries.addSysMacro( 0x856b, 1 , [1] );
    dasmEntries.addSysMacro( 0x857b, 1 , [1] );
    dasmEntries.addSysMacro( 0x858b, 1 , [1] );
    dasmEntries.addSysMacro( 0x859a, 1 , [1] );
    dasmEntries.addSysMacro( 0x85AA, 1 , [1] );
    dasmEntries.addSysMacro( 0x85BA, 1 , [1] );
    dasmEntries.addSysMacro( 0x85CA, 1 , [1] );
    dasmEntries.addSysMacro( 0x85DA, 1 , [1] );
    dasmEntries.addSysMacro( 0x85EA, 1 , [1] );

    dasmEntries.add( 0x85fa, 2, 'JSR_BANK_ADDRESS_AT', [ 3 ], dasm.printMacroInstruction_JSR_BANK_ADDRESS_AT);
    dasmEntries.add( 0x8604, 0, 'JSR_BANKADDRESS_AT_X' );
    dasmEntries.addSysMacro( 0x8635, 2, [2] );
    dasmEntries.addSysMacro( 0x8653, 2, [2] );
    dasmEntries.addSysMacro( 0x866A, 2, [2] );
    dasmEntries.addSysMacro( 0x8678, 2, [2] );
    dasmEntries.addSysMacro( 0x8686, 2, [2] );
    dasmEntries.addSysMacro( 0x8694, 2, [2] );
    dasmEntries.addSysMacro( 0x86AA, 2, [2] );
    dasmEntries.addSysMacro( 0x86BB, 2, [2] );
    dasmEntries.addSysMacro( 0x86C8, 2, [2] );
    dasmEntries.addSysMacro( 0x86d5, 2, [2] );
    dasmEntries.addSysMacro( 0x86e2, 2, [2] );
    dasmEntries.addSysMacro( 0x86ef, 2, [2] );
    dasmEntries.addSysMacro( 0x86fc, 2, [2] );
    dasmEntries.addSysMacro( 0x8709, 2, [2] );
    dasmEntries.addSysMacro( 0x8716, 2, [2] );
    dasmEntries.addSysMacro( 0x8723, 2, [2] );
    dasmEntries.addSysMacro( 0x8730, 2, [2] );
    dasmEntries.addSysMacro( 0x873d, 2, [2] );
    dasmEntries.addSysMacro( 0x874a, 2, [2] );
    dasmEntries.addSysMacro( 0x8757, 2, [2] );
    dasmEntries.addSysMacro( 0x8764, 2, [2] );
    dasmEntries.addSysMacro( 0x8771, 2, [2] );
    dasmEntries.addSysMacro( 0x877e, 2, [2] );
    dasmEntries.addSysMacro( 0x878b, 2, [2] );
    dasmEntries.addSysMacro( 0x8798, 2, [2] );
    dasmEntries.addSysMacro( 0x87a5, 2, [2] );
    dasmEntries.addSysMacro( 0x87b2, 2, [2] );
    dasmEntries.addSysMacro( 0x87bf, 2, [2] );
    dasmEntries.addSysMacro( 0x87cc, 2, [2] );
    dasmEntries.addSysMacro( 0x87d9, 2, [2] );
    dasmEntries.addSysMacro( 0x87e6, 2, [2] );
    dasmEntries.addSysMacro( 0x87f3, 2, [2] );
    dasmEntries.addSysMacro( 0x8800, 2, [2] );
    dasmEntries.addSysMacro( 0x880D, 2, [2] );
    dasmEntries.addSysMacro( 0x881A, 2, [2] );
    dasmEntries.addSysMacro( 0x8827, 2, [2] );
    dasmEntries.addSysMacro( 0x8837, 2, [2] );
    dasmEntries.addSysMacro( 0x8844, 2, [2] );
    dasmEntries.addSysMacro( 0x8851, 2, [2] );
    dasmEntries.addSysMacro( 0x885F, 2, [2] );
    dasmEntries.addSysMacro( 0x886F, 2, [2] );
    dasmEntries.addSysMacro( 0x887F, 2, [2] );
    dasmEntries.addSysMacro( 0x888F, 2, [2] );
    dasmEntries.addSysMacro( 0x889F, 2, [2] );
    dasmEntries.addSysMacro( 0x88AF, 2, [2] );
    dasmEntries.addSysMacro( 0x88BF, 2, [2] );

    dasmEntries.add( 0x88CF, 3,
        'JSR_BANK',
        [ 2, 1 ],
        dasm.getMacroInstruction_JSR_BANK );

    dasmEntries.addSysMacro( 0x8999, 3, [2, 1], 'copyBytesAtX_targetAddress_size' );

    dasmEntries.add( 0x890a, 3,
        'JMP_BANK',
        [ 2, 1 ],
        dasm.getMacroInstruction_JMP_BANK );

    dasmEntries.addSysMacro( 0x89A9, 3, [2, 1] );
    dasmEntries.addSysMacro( 0x89B8, 3, [2, 1] );
    dasmEntries.addSysMacro( 0x89d3, 3, [2, 1] );

    dasmEntries.addSysMacro( 0x8a06, 3, [1, 2] );
    dasmEntries.addSysMacro( 0x8a1a, 3, [1, 2] );
    dasmEntries.addSysMacro( 0x8a29, 3, [2, 1] );
    dasmEntries.addSysMacro( 0x8a3b, 3, [2, 1] );
    dasmEntries.addSysMacro( 0x8a4d, 3, [1, 2] );

    dasmEntries.addSysMacro( 0x8A75, 4, [2, 2] );
    dasmEntries.addSysMacro( 0x8A85, 4, [2, 2] );
    dasmEntries.addSysMacro( 0x8A95, 4, [2, 2] );
    dasmEntries.addSysMacro( 0x8AA5, 4, [2, 2] );
    dasmEntries.addSysMacro( 0x8AB5, 4, [2, 2] );
    dasmEntries.addSysMacro( 0x8Ad0, 4, [2, 2] );
    dasmEntries.addSysMacro( 0x8Ae2, 4, [2, 2] );
    dasmEntries.addSysMacro( 0x8Af4, 4, [2, 2] );


    dasmEntries.addSysMacro( 0x8b06, 4, [2, 2] );
    dasmEntries.addSysMacro( 0x8b18, 5, [2, 2, 1] );
    dasmEntries.addSysMacro( 0x8b35, 5, [2, 2, 1] );
    dasmEntries.addSysMacro( 0x8b52, 5, [2, 2, 1] );
    dasmEntries.addSysMacro( 0x8b78, 5, [2, 2, 1] );
    dasmEntries.addSysMacro( 0x8b9e, 5, [2, 2, 1] );
    dasmEntries.addSysMacro( 0x8bd2, 5, [2, 2, 1] );

    dasmEntries.addSysMacro( 0x8c06, 5, [2, 2, 1] );
    dasmEntries.addSysMacro( 0x8c18, 6, [1, 2, 1, 1, 1] );
    dasmEntries.addSysMacro( 0x8c3b, 6, [2, 2, 2] );
    dasmEntries.addSysMacro( 0x8c4d, 6, [2, 2, 2] );

    dasmEntries.addTableSys( 0x8c64, 'tbl_2', 1, 2 );
    dasmEntries.add( 0x8c66, 0, 'reset_routine');
    dasmEntries.add( 0x8df7, 0, 'sys_8df7');
    dasmEntries.add( 0x8df7, 0, 'sys_8df7');
    dasmEntries.add( 0x8e98, 0, 'swi_routine');
    dasmEntries.add( 0x8e9b, 0, 'firq_routine');

    dasmEntries.add( 0x8EA8, 0, 'reserved_routine');
    dasmEntries.add( 0x8eac, 0, 'swi3_routine');
    dasmEntries.add( 0x8EB0, 0, 'swi2_routine');
    dasmEntries.add( 0x8eb4, 0, 'nmi_routine');
    // dasmEntries.add( 0x8EB8, 0, 'sys_8eb8');
    dasmEntries.add( 0x8EB8, 0, 'OrkinCall_index_in_A');

    dasmEntries.add( 0x8923, 0, 'sys_8923' );
    dasmEntries.add( 0x895E, 0, 'sys_895E' );
    dasmEntries.add( 0x8E0F, 0, 'sys_8E0F' );
    dasmEntries.add( 0x8E18, 0, 'sys_8E18' );
    dasmEntries.add( 0x8E25, 0, 'sys_8E25' );
    dasmEntries.add( 0x8E40, 0, 'sys_8E40' );
    dasmEntries.add( 0x8E58, 0, 'sys_8E58' );
    dasmEntries.add( 0x8EF5, 0, 'sys_8EF5' );
    dasmEntries.add( 0x8F22, 0, 'sys_8F22' );
    dasmEntries.add( 0x8F81, 0, 'sys_8F81' );
    dasmEntries.add( 0x8F8A, 0, 'sys_8F8A' );
    dasmEntries.add( 0x8FD2, 0, 'sys_8FD2' );
}

function getDasmEntries_sys_9000( dasmEntries ) {
    dasmEntries.addTableSys( 0x9034, 'tbl_4', 43, 2 );
    dasmEntries.addTableSys( 0x908B, 'tbl_5', 21, 2 );
    dasmEntries.addTableSys( 0x90B5, 'tbl_6', 1, 3 );
    dasmEntries.add( 0x90B8, 0, 'sys_90b8' );
    dasmEntries.add( 0x90c2, 0, 'irq_routine' );
    dasmEntries.add( 0x912f, 0, 'irq_routine_lamps_bypass' );
    dasmEntries.add( 0x9138, 0, 'SetRomBankTo3D' );
    dasmEntries.add( 0x9140, 0, 'SetRomBankFromB');
    dasmEntries.add( 0x9149, 0, 'LoadBankAddressAtXIntoXB');
    dasmEntries.add( 0x9170, 0, 'LoadBankAddressValueAtXBIntoA');
    dasmEntries.add( 0x9197, 0, 'LoadBankAddressValueAtXBIntoY');
    dasmEntries.add( 0x928b, 0, 'store_A_in_ProtectedRam');
    dasmEntries.addTableSys( 0x9293, 'tbl_LOCKED_CMOS:', 10, 2 );
    dasmEntries.add( 0x92a7, 0, 'WPC_PROTMEM_Unlock');
    dasmEntries.add( 0x92b0, 0, 'WPC_PROTMEM_Lock');
    dasmEntries.add( 0x9358, 0, "Get16BitSettingIntoY" );
    dasmEntries.add( 0x9362, 0, "Get8BitSettingIntoA" );
    dasmEntries.add( 0x9370, 0, "Get16BitSettingIntoD" );
    dasmEntries.add( 0x93d8, 0, "GetSettingDefinition_A_AddressInto_XB" );
    dasmEntries.add( 0x93f3, 0, "GetSetting_A_AddressInto_X" );

    dasmEntries.add( 0x9407, 0, "initializeAdjustmentsPointers" );
    dasmEntries.add( 0x947b, 0, "shiftAddressInX_B_bits" );

    dasmEntries.add( 0x95a0, 0, "LoadAFromRam20" );
    dasmEntries.add( 0x9959, 0, "InitializeProcessBlocksChain" );
    dasmEntries.add( 0x99ae, 0, "mainGameLoop" );
    dasmEntries.add( 0x99BE, 0, "tasksTop" );
    dasmEntries.add( 0x99e6, 0, "checkFirst8BytesOfRamAllZero" );
    dasmEntries.add( 0x99f4, 0, "clearFirst8BytesOfRam" );
    dasmEntries.add( 0x9A05, 0, "processNextTask" );
    dasmEntries.add( 0x9A0A, 0, "processDispatch" );
    dasmEntries.add( 0x9b00, 0, 'sleepJMP' );
    dasmEntries.add( 0x9b93, 0, 'sys_suicide');
    dasmEntries.add( 0x9cc0, 0, 'free_block');
    dasmEntries.add( 0x9cc0, 0, 'task_9f6b');
    dasmEntries.add( 0x9f27, 0, 'sys_watchdog_pet');
    dasmEntries.add( 0x9ffc, 0, 'checkAllIrqTailHooksInSysRegion');

    dasmEntries.add( 0x91E5, 0, 'sys_91E5' );
    dasmEntries.add( 0x91EB, 0, 'sys_91EB' );
    dasmEntries.add( 0x922B, 0, 'sys_922B' );
    dasmEntries.add( 0x9265, 0, 'sys_9265' );
    dasmEntries.add( 0x926D, 0, 'sys_926D' );
    dasmEntries.add( 0x92B9, 0, 'sys_92B9' );
    dasmEntries.add( 0x92BF, 0, 'sys_92BF' );
    dasmEntries.add( 0x92D6, 0, 'sys_92D6' );
    dasmEntries.add( 0x92E9, 0, 'sys_92E9' );
    dasmEntries.add( 0x92EF, 0, 'sys_92EF' );
    dasmEntries.add( 0x930E, 0, 'sys_930E' );
    dasmEntries.add( 0x932C, 0, 'sys_932C' );
    dasmEntries.add( 0x9334, 0, 'sys_9334' );
    dasmEntries.add( 0x937C, 0, 'sys_937C' );
    dasmEntries.add( 0x93A4, 0, 'sys_93A4' );
    dasmEntries.add( 0x93C4, 0, 'sys_93C4' );
    dasmEntries.add( 0x93D1, 0, 'sys_93D1' );
    dasmEntries.add( 0x9432, 0, 'sys_9432' );
    dasmEntries.add( 0x9458, 0, 'sys_9458' );
    dasmEntries.add( 0x9469, 0, 'sys_9469' );
    dasmEntries.add( 0x9472, 0, 'sys_9472' );
    dasmEntries.add( 0x956B, 0, 'sys_956B' );
    dasmEntries.add( 0x9577, 0, 'sys_9577' );
    dasmEntries.add( 0x95A3, 0, 'sys_95A3' );
    dasmEntries.add( 0x95BE, 0, 'sys_95BE' );
    dasmEntries.add( 0x95ED, 0, 'sys_95ED' );
    dasmEntries.add( 0x961D, 0, 'sys_961D' );
    dasmEntries.add( 0x9643, 0, 'sys_9643' );
    dasmEntries.add( 0x96A0, 0, 'sys_96A0' );
    dasmEntries.add( 0x9700, 0, 'sys_9700' );
    dasmEntries.add( 0x9717, 0, 'sys_9717' );
    dasmEntries.add( 0x9740, 0, 'sys_9740' );
    dasmEntries.add( 0x9752, 0, 'sys_9752' );
    dasmEntries.add( 0x976A, 0, 'sys_976A' );
    dasmEntries.add( 0x977E, 0, 'sys_977E' );
    dasmEntries.add( 0x979A, 0, 'sys_979A' );
    dasmEntries.add( 0x97BD, 0, 'sys_97BD' );
    dasmEntries.add( 0x97CA, 0, 'sys_97CA' );
    dasmEntries.add( 0x97EE, 0, 'sys_97EE' );
    dasmEntries.add( 0x9837, 0, 'sys_9837' );

    dasmEntries.add( 0x9BEF, 0, 'sys_9BEF' );
    dasmEntries.add( 0x9C10, 0, 'sys_9C10' );
    dasmEntries.add( 0x9C3E, 0, 'sys_9C3E' );
    dasmEntries.add( 0x9C41, 0, 'sys_9C41' );
    dasmEntries.add( 0x9C5E, 0, 'sys_9C5E' );
    dasmEntries.add( 0x9C7B, 0, 'sys_9C7B' );
    dasmEntries.add( 0x9C8A, 0, 'sys_9C8A' );
    dasmEntries.add( 0x9C9E, 0, 'sys_9C9E' );

    dasmEntries.add( 0x9CE3, 0, 'sys_9CE3' );
    dasmEntries.add( 0x9CEC, 0, 'sys_9CEC' );
    dasmEntries.add( 0x9CF5, 0, 'sys_9CF5' );
    dasmEntries.add( 0x9D1C, 0, 'sys_9D1C' );
    dasmEntries.add( 0x9D2E, 0, 'sys_9D2E' );
    dasmEntries.add( 0x9D49, 0, 'sys_9D49' );
    dasmEntries.add( 0x9D52, 0, 'sys_9D52' );
    dasmEntries.add( 0x9D6A, 0, 'sys_9D6A' );
    dasmEntries.add( 0x9D98, 0, 'sys_9D98' );
    dasmEntries.add( 0x9DA6, 0, 'sys_9DA6' );
    dasmEntries.add( 0x9DBF, 0, 'sys_9DBF' );
    dasmEntries.add( 0x9DD2, 0, 'sys_9DD2' );
    dasmEntries.add( 0x9DE6, 0, 'sys_9DE6' );
    dasmEntries.add( 0x9DFB, 0, 'sys_9DFB' );
    dasmEntries.add( 0x9E0D, 0, 'sys_9E0D' );
    dasmEntries.add( 0x9E1F, 0, 'sys_9E1F' );
    dasmEntries.addTableSys( 0x9e2e, 'tbl_zeros', 2, 23 );
    dasmEntries.addTableSys( 0x9e5c, 'tbl_zeros', 1, 1 );
    dasmEntries.add( 0x9E5D, 0, 'sys_9E5D' );
    dasmEntries.add( 0x9F2D, 0, 'sys_9F2D' );
    dasmEntries.add( 0x9F4C, 0, 'sys_9F4C' );
    dasmEntries.add( 0x9F6B, 0, 'sys_9F6B' );
    dasmEntries.add( 0x9F8A, 0, 'sys_9F8A' );
    dasmEntries.add( 0xA5C3, 0, 'sys_A5C3' );
    dasmEntries.add( 0xA5C7, 0, 'sys_A5C7' );
    dasmEntries.add( 0xA5CB, 0, 'sys_A5CB' );
    dasmEntries.add( 0xA5D2, 0, 'sys_A5D2' );
    dasmEntries.add( 0xA5E2, 0, 'sys_A5E2' );
    dasmEntries.add( 0xA6AE, 0, 'sys_A6AE' );
    dasmEntries.add( 0xA6B7, 0, 'sys_A6B7' );
    dasmEntries.add( 0xA6D6, 0, 'sys_A6D6' );
    dasmEntries.add( 0xA6DA, 0, 'sys_A6DA' );
    dasmEntries.add( 0xA6EF, 0, 'sys_A6EF' );
    dasmEntries.add( 0xA6FA, 0, 'sys_A6FA' );
    dasmEntries.add( 0xA705, 0, 'sys_A705' );
    dasmEntries.add( 0xA710, 0, 'sys_A710' );
    dasmEntries.add( 0xA714, 0, 'sys_A714' );
    dasmEntries.add( 0xA71F, 0, 'sys_A71F' );
    dasmEntries.add( 0xA72A, 0, 'sys_A72A' );
    dasmEntries.add( 0xA735, 0, 'sys_A735' );
    dasmEntries.add( 0xA740, 0, 'sys_A740' );
    dasmEntries.add( 0xA755, 0, 'sys_A755' );
    dasmEntries.add( 0xA7DA, 0, 'sys_A7DA' );
    dasmEntries.add( 0xA847, 0, 'sys_A847' );
    dasmEntries.add( 0xA85A, 0, 'sys_A85A' );
    dasmEntries.add( 0xA885, 0, 'sys_A885' );
    dasmEntries.add( 0xA8B2, 0, 'sys_A8B2' );
    dasmEntries.add( 0xA8C1, 0, 'sys_A8C1' );
    dasmEntries.add( 0xA8E8, 0, 'sys_A8E8' );
    dasmEntries.add( 0xA90F, 0, 'sys_A90F' );
    dasmEntries.add( 0xA92B, 0, 'sys_A92B' );
    dasmEntries.add( 0xA93E, 0, 'sys_A93E' );
    dasmEntries.add( 0xA976, 0, 'sys_A976' );
    dasmEntries.add( 0xA990, 0, 'sys_A990' );
    dasmEntries.add( 0xA99B, 0, 'sys_A99B' );
    dasmEntries.add( 0xA9A5, 0, 'sys_A9A5' );
    dasmEntries.add( 0xA9B2, 0, 'sys_A9B2' );
    dasmEntries.add( 0xA9BB, 0, 'sys_A9BB' );
    dasmEntries.add( 0xA9DA, 0, 'sys_A9DA' );
    dasmEntries.add( 0xA9E2, 0, 'sys_A9E2' );
    dasmEntries.add( 0xA9F4, 0, 'sys_A9F4' );
    dasmEntries.add( 0xAA2A, 0, 'sys_AA2A' );
    dasmEntries.add( 0xAA33, 0, 'sys_AA33' );
    dasmEntries.add( 0xAA40, 0, 'sys_AA40' );
    dasmEntries.add( 0xAA44, 0, 'sys_AA44' );
    dasmEntries.add( 0xAA63, 0, 'sys_AA63' );
    dasmEntries.add( 0xAA67, 0, 'sys_AA67' );
    dasmEntries.add( 0xAA6E, 0, 'sys_AA6E' );
    dasmEntries.add( 0xAAEA, 0, 'sys_AAEA' );
    dasmEntries.add( 0xAAF2, 0, 'sys_AAF2' );
    dasmEntries.add( 0xAAF5, 0, 'sys_AAF5' );
    dasmEntries.add( 0xAAFC, 0, 'sys_AAFC' );
    dasmEntries.add( 0xAB12, 0, 'sys_AB12' );
    dasmEntries.add( 0xAB91, 0, 'sys_AB91' );
    dasmEntries.add( 0xABD3, 0, 'sys_ABD3' );
    dasmEntries.add( 0xABE0, 0, 'sys_ABE0' );
    dasmEntries.add( 0xAC15, 0, 'sys_AC15' );
    dasmEntries.add( 0xAC1E, 0, 'sys_AC1E' );
    dasmEntries.add( 0xAC25, 0, 'sys_AC25' );
    dasmEntries.add( 0xAC34, 0, 'sys_AC34' );
    dasmEntries.add( 0xAC57, 0, 'sys_AC57' );
    dasmEntries.add( 0xAC60, 0, 'sys_AC60' );
    dasmEntries.add( 0xACEC, 0, 'sys_ACEC' );
    dasmEntries.add( 0xAD35, 0, 'sys_AD35' );
    dasmEntries.add( 0xAD5A, 0, 'sys_AD5A' );
    dasmEntries.add( 0xAD62, 0, 'sys_AD62' );
    dasmEntries.add( 0xAD6E, 0, 'sys_AD6E' );
    dasmEntries.add( 0xAD7A, 0, 'sys_AD7A' );
    dasmEntries.add( 0xADA2, 0, 'sys_ADA2' );
    dasmEntries.add( 0xADAC, 0, 'sys_ADAC' );
    dasmEntries.add( 0xADBA, 0, 'sys_ADBA' );
    dasmEntries.add( 0xADC2, 0, 'sys_ADC2' );
    dasmEntries.add( 0xADCA, 0, 'sys_ADCA' );
    dasmEntries.add( 0xADCD, 0, 'sys_ADCD' );
    dasmEntries.add( 0xADE2, 0, 'sys_ADE2' );
    dasmEntries.add( 0xAE0D, 0, 'sys_AE0D' );
    dasmEntries.add( 0xAE1F, 0, 'sys_AE1F' );
    dasmEntries.add( 0xAE29, 0, 'sys_AE29' );
    dasmEntries.add( 0xAE34, 0, 'sys_AE34' );
    dasmEntries.add( 0xAE40, 0, 'sys_AE40' );
    dasmEntries.add( 0xAE57, 0, 'sys_AE57' );
    dasmEntries.add( 0xAEB5, 0, 'sys_AEB5' );
    dasmEntries.add( 0xAF27, 0, 'sys_AF27' );
    dasmEntries.add( 0xAF5A, 0, 'sys_AF5A' );
    dasmEntries.add( 0xAFC0, 0, 'sys_AFC0' );
    dasmEntries.add( 0xAFCF, 0, 'sys_AFCF' );
    dasmEntries.add( 0xAFE1, 0, 'sys_AFE1' );
    dasmEntries.add( 0xAFF0, 0, 'sys_AFF0' );
    dasmEntries.add( 0xAFF7, 0, 'sys_AFF7' );
 }

function getDasmEntries_sys_A000( dasmEntries ) {
    dasmEntries.addTableSys( 0xa018, 'tbl_SysAddresses', 38, 2 );
    dasmEntries.add( 0xa064, 0, 'sys_a064');
    dasmEntries.add( 0xa072, 0, 'sys_a072');
    dasmEntries.add( 0xa095, 0, 'sys_a095');
    dasmEntries.add( 0xA0C4, 0, 'sys_A0C4');
    dasmEntries.add( 0xA0D1, 0, 'sys_A0D1');
    dasmEntries.add( 0xA0D9, 0, 'sys_A0D9');
    dasmEntries.add( 0xA0F0, 0, 'sys_A0F0');
    dasmEntries.add( 0xA107, 0, 'sys_A107');
    dasmEntries.add( 0xA122, 0, 'sys_A122');
    dasmEntries.add( 0xA139, 0, 'sys_A139');
    dasmEntries.add( 0xA151, 0, 'sys_A151');
    dasmEntries.add( 0xA171, 0, 'sys_A171');
    dasmEntries.add( 0xA1A7, 0, 'sys_A1A7');
    dasmEntries.add( 0xA1D3, 0, 'sys_A1D3');
    dasmEntries.add( 0xA200, 0, 'sys_A200');
    dasmEntries.add( 0xA22C, 0, 'sys_A22C');
    dasmEntries.add( 0xA237, 0, 'sys_A237');
    dasmEntries.add( 0xA24F, 0, 'sys_A24F');
    dasmEntries.add( 0xA25E, 0, 'sys_A25E');
    dasmEntries.add( 0xA263, 0, 'sys_A263');
    dasmEntries.add( 0xA266, 0, 'sys_A266');
    dasmEntries.add( 0xA269, 0, 'sys_A269');
    dasmEntries.add( 0xA26C, 0, 'sys_A26C');
    dasmEntries.add( 0xA26F, 0, 'sys_A26F');
    dasmEntries.add( 0xA277, 0, 'sys_A277');
    dasmEntries.add( 0xA27A, 0, 'sys_A27A');
    dasmEntries.add( 0xA29A, 0, 'sys_A29A');
    dasmEntries.add( 0xA2A3, 0, 'sys_A2A3');
    dasmEntries.add( 0xA2AC, 0, 'sys_A2AC');
    dasmEntries.add( 0xA2B5, 0, 'sys_A2B5');
    dasmEntries.add( 0xA2C3, 0, 'sys_A2C3');
    dasmEntries.add( 0xA2D1, 0, 'sys_A2D1');
    dasmEntries.add( 0xA2DA, 0, 'sys_A2DA');
    dasmEntries.add( 0xA2E3, 0, 'sys_A2E3');
    dasmEntries.add( 0xA2EC, 0, 'sys_A2EC');
    dasmEntries.add( 0xA2F5, 0, 'sys_A2F5');
    dasmEntries.add( 0xA2FE, 0, 'sys_A2FE');
    dasmEntries.add( 0xA307, 0, 'sys_A307');
    dasmEntries.add( 0xA310, 0, 'sys_A310');
    dasmEntries.add( 0xA319, 0, 'sys_A319');
    dasmEntries.add( 0xA322, 0, 'sys_A322');
    dasmEntries.add( 0xA367, 0, 'sys_A367');
    dasmEntries.add( 0xA3A6, 0, 'sys_A3A6');
    dasmEntries.add( 0xA3CB, 0, 'sys_A3CB');
    dasmEntries.add( 0xA3EA, 0, 'sys_A3EA');
    dasmEntries.add( 0xA40E, 0, 'sys_A40E');
    dasmEntries.add( 0xA440, 0, 'sys_A440');
    dasmEntries.add( 0xA464, 0, 'sys_A464');
    dasmEntries.add( 0xA48C, 0, 'sys_A48C');
    dasmEntries.add( 0xA4A2, 0, 'sys_A4A2');
    dasmEntries.add( 0xA4B2, 0, 'sys_A4B2');
    dasmEntries.add( 0xa4c8, 0, 'irq_routine_lamps');

    dasmEntries.add( 0xA52F, 0, 'sys_A52F');
    dasmEntries.add( 0xA55c, 0, 'sys_A55c');
    dasmEntries.add( 0xA57f, 0, 'sys_A57f');

    dasmEntries.addTableSys( 0xa53c, 'tbl_TwoBytes', 16, 2 );
    dasmEntries.addTableSys( 0xa5ee, 'tbl_FourBytes', 16, 4 );

    dasmEntries.add( 0xA62e, 0, 'sys_A62e');

    dasmEntries.addTableSys( 0xa644, 'tbl_BankAddresses', 6, 3 );
    dasmEntries.add( 0xA656, 0, 'sys_A656');
    dasmEntries.add( 0xA69d, 0, 'sys_A69d');

    dasmEntries.add( 0xaa76, 0, 'sys_aa76');
    dasmEntries.add( 0xaaa5, 0, 'sys_aaa5');

    dasmEntries.add( 0xAB3D, 0, 'EnergizeSolenoidAEnqueueOnly');
    dasmEntries.add( 0xAB43, 0, 'EnqueueSolenoidPulse');
    dasmEntries.add( 0xAB80, 0, 'AdvanceCircularSolenoidQueueIndexX');
}

function getDasmEntries_sys_B000( dasmEntries ) {
    dasmEntries.add( 0xB0AC, 0, 'LoadYFromBankAddressValueAtX');
    dasmEntries.add( 0xb26d, 0, 'sys_b26d');
    dasmEntries.add( 0xb27d, 0, 'sys_b27d');
    dasmEntries.add( 0xB645, 0, 'CheckBallInPlayIsLastBall');
    dasmEntries.addTableSys( 0xB4d1, 'tbl_twoByte', 5, 2);
    dasmEntries.addTableSys( 0xB4db, 'LampDataByteLookupTable', 10, 3);
    dasmEntries.add( 0xB645, 0, 'CheckBallInPlayIsLastBall');
    dasmEntries.addTableSys( 0xBd2e, 'tbl_callType', 1, 2);
    dasmEntries.addSysMacro( 0xBd30, 5, [2,2,2,1] );
    dasmEntries.addTableSys( 0xBd47, 'tbl_callType', 1, 2);
    dasmEntries.addSysMacro( 0xBd49, 5, [2,2,2,1] );
}

function getDasmEntries_sys_D000( dasmEntries ) {
    dasmEntries.addTableSys( 0xDE6D, 'tbl_TwoBytes', 32, 2 );
    dasmEntries.addSysMacro( 0xDD3a, 5, [2,1,2]);
    dasmEntries.addTableSys( 0xDD54, 'tbl_Unknown', 1, 2 );
    dasmEntries.addSysMacro( 0xDD56, 5, [2, 1, 2] );
    dasmEntries.addTableSys( 0xDD6f, 'tbl_Unknown', 1, 2 );
    dasmEntries.addSysMacro( 0xDD71, 5, [2, 1, 2] );
    dasmEntries.addTableSys( 0xDDfb, 'tbl_Unknown', 1, 2 );
    dasmEntries.addSysMacro( 0xDDfd, 5, [2, 1, 2] );

}

function getDasmEntries_sys_E000( dasmEntries ) {
    dasmEntries.addTableSys( 0xE0B2, 'tbl_TwoBytes', 8, 2 );
    dasmEntries.addTableSys( 0xE0C2, 'tbl_BankAddresses', 470, 3 );
    dasmEntries.addTableSys( 0xE644, 'tbl_Unknown', 32, 2 );
    dasmEntries.addTableSys( 0xEa1c, 'tbl_Unknown', 3, 1 );

    dasmEntries.addTableSys( 0xF888, 'tbl_Unknown', 1, 2 );
    dasmEntries.addSysMacro( 0xf88a, 3, [2, 1] );
    dasmEntries.addSysMacro( 0xfdf4, 2, [2] );
    dasmEntries.addSysMacro( 0xfe06, 2, [2] );
    dasmEntries.addSysMacro( 0xfe18, 2, [2] );
    dasmEntries.addSysMacro( 0xfe2a, 2, [2] );
    dasmEntries.addSysMacro( 0xfe3c, 2, [2] );
    dasmEntries.addSysMacro( 0xfe4e, 2, [2] );
    dasmEntries.addSysMacro( 0xfe60, 2, [2] );
    dasmEntries.addSysMacro( 0xfe72, 1, [1] );
    dasmEntries.addTableSys( 0xFFBE, 'vectors', 33, 2);
}