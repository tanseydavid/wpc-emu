'use strict';

const dasm = require('../../test/tracer/dasm-entry');

module.exports = {
   getDasmEntriesWpc
}

function getDasmEntriesWpc() {
   let dasmEntries = new dasm.DasmEntryList();

    // getDasmEntries_RAM_GW( dasmEntries );
    getDasmEntries_RAM( dasmEntries );
    getDasmEntries_WPC( dasmEntries );
    return dasmEntries;
}

function getDasmEntries_RAM( dasmEntries ) {

    dasmEntries.add( 0x08, 0, 'vec_FIRQ_MINUS' );
    dasmEntries.add( 0x0A, 0, 'vec_FIRQ_DMD' );

    dasmEntries.add( 0x11, 0, 'currentBankId' );
    dasmEntries.add( 0x12, 0, 'currentBankAddress' );

    dasmEntries.add( 0x49, 0, 'currentTicks_H' );
    dasmEntries.add( 0x4A, 0, 'currentTicks_L' );
    dasmEntries.add( 0x4d, 0, 'ProcessChain' );
    dasmEntries.add( 0x51, 0, 'currentExecutingProcess' );

    dasmEntries.add( 0x007a, 0, 'GAME_RUNNING' );
    dasmEntries.add( 0x0084, 0, 'ram_84_SEI_protected' );
    dasmEntries.add( 0x0085, 0, 'ram_85_SEI_protected' );
    dasmEntries.add( 0x0087, 0, 'printerAttachedSerialOrParallel' );
    dasmEntries.add( 0x0088, 0, 'printerDataPortAddress' );
    dasmEntries.add( 0x8e, 0, 'DMD_ACTIVE_PAGE' );
    dasmEntries.add( 0x8f, 0, 'index_ClearRam_generic' );

    dasmEntries.add( 0xBF, 0, 'currentSerialCTRLFlags' );

    dasmEntries.add( 0xC0, 0, 'currentSerialData' );
    dasmEntries.add( 0xC1, 0, 'currentRAMBankId' );
    dasmEntries.add( 0xC2, 0, 'DMD_LOW_PAGE' );
    dasmEntries.add( 0xC3, 0, 'DMD_HIGH_PAGE' );
    dasmEntries.add( 0xC4, 0, 'DMD_SCANLINE' );

    dasmEntries.add( 0xCD, 0, 'currentSerial_counter_00_3b' );

    dasmEntries.add( 0x0280, 0, 'LampMatrix' );

    dasmEntries.add( 0x02D9, 0, 'PTR_FeatureAdjustments' );

    dasmEntries.add( 0x306, 0, 'Free_Blocks_CHAIN' );
    dasmEntries.add( 0x30A, 0, 'Priority_Blocks_CHAIN' );
    dasmEntries.add( 0x30c, 0, 'Free_Blocks_Count' );
    dasmEntries.add( 0x30d, 0, 'Priority_Blocks_Count' );
    dasmEntries.add( 0x30e, 0, 'Normal_Blocks_Count' );
    dasmEntries.add( 0x30f, 0, 'Process_Normal_Chain_Count' );

    dasmEntries.add( 0x311, 0, 'Normal_Blocks_CHAIN' );
    dasmEntries.add( 0x319, 0, 'found_process_pointer' );
    dasmEntries.add( 0x31F, 0, 'DEBUG_ACTIVE' );

    dasmEntries.add( 0x368, 0, 'JUMPER_SETTING' );
    dasmEntries.add( 0x369, 0, 'Language_Setting_01' );
    dasmEntries.add( 0x36A, 0, 'Language_Setting_03' );
    dasmEntries.add( 0x36B, 0, 'Language_Setting_02' );
    dasmEntries.add( 0x36C, 0, 'Language_Setting_04' );

    dasmEntries.add( 0x3B0, 0, 'BallInPlay' );
    dasmEntries.add( 0x3B1, 0, 'extraBallsAwarded' );
    dasmEntries.add( 0x3B2, 0, 'extraBallsAwardedBIP' );

    dasmEntries.add( 0x3E8, 0, 'ram_3E8' );

    dasmEntries.add( 0x3EA, 0, 'SoundScript_CHAIN_A' );
    dasmEntries.add( 0x3F6, 0, 'SoundScript_CHAIN_B' );
    dasmEntries.add( 0x402, 0, 'SoundScript_CHAIN_C' );

    dasmEntries.add( 0x43d, 0, 'GAME_CURRENT_SCREEN' );
    dasmEntries.add( 0x43e, 0, 'GAME_CURRENT_SCREEN_hi_unknown' );
    dasmEntries.add( 0x43f, 0, 'GAME_CURRENT_SCREEN_lo_unknown' );

    dasmEntries.add( 0x4d2, 0, 'serialOutputRingBuffer' );

    dasmEntries.add( 0x4e7, 0, 'serialInput_XOFF' );

    dasmEntries.add( 0x4F0, 0, 'serialRingBufferHead' );
    dasmEntries.add( 0x4F1, 0, 'serialRingBufferTail' );
    dasmEntries.add( 0x4F2, 0, 'serialRingBuffer' );

    dasmEntries.add( 0x546, 0, 'currentFontStyle' );

    dasmEntries.add( 0x548, 0, 'DMD_LOW_PAGE' );
    dasmEntries.add( 0x549, 0, 'DMD_HIGH_PAGE' );
    dasmEntries.add( 0x556, 0, 'serialInput_XON_ENQ_CR' );

    dasmEntries.add( 0x5ac, 0, 'GAME_ATTRACTMODE_SEQ' );
    dasmEntries.add( 0x5B4, 0, 'flag_5B4' );
    dasmEntries.add( 0x5B9, 0, 'flag_5b9' );

    dasmEntries.add( 0x647, 0, 'ramCode_current_func' );
    dasmEntries.add( 0x663, 0, 'serialLink_663' );

    dasmEntries.add( 0x773, 0, 'serialLink_773' );

    dasmEntries.add( 0x784, 0, 'serialLink_784' );
    dasmEntries.add( 0x78b, 0, 'serialLink_78b' );

    dasmEntries.add( 0x7e1, 0, 'serialLink_header_bytes' );
    dasmEntries.add( 0x7e2, 0, 'serialLink_7e2' );
    dasmEntries.add( 0x7e3, 0, 'serialLink_7e3' );
    dasmEntries.add( 0x7e4, 0, 'serialLink_7e4' );

    dasmEntries.add( 0x7e5, 0, 'serialLink_7e5' );

    dasmEntries.add( 0x7e8, 0, 'serialDebug_Count_FULL' );
    dasmEntries.add( 0x7e9, 0, 'serialDebug_Count_TOUT' );
    dasmEntries.add( 0x7ea, 0, 'serialDebug_Count_OVFL' );
    dasmEntries.add( 0x7eb, 0, 'serialDebug_Count_CKSM' );
    dasmEntries.add( 0x7ec, 0, 'serialDebug_Count_MGET' );
    dasmEntries.add( 0x7ed, 0, 'serialDebug_Count_RBAD' );
    dasmEntries.add( 0x7ee, 0, 'serialDebug_Count_RGOOD' );
    dasmEntries.add( 0x7ef, 0, 'serialDebug_Count_BAD_Total' );
    dasmEntries.add( 0x7f0, 0, 'serialDebug_Count_XBAD' );
    dasmEntries.add( 0x7f1, 0, 'serialDebug_Count_XGOOD' );

    dasmEntries.add( 0x7f2, 0, 'serialLink_next_buffer' );
    dasmEntries.add( 0x7f4, 0, 'serialLink_7f4' );
    dasmEntries.add( 0x7f6, 0, 'serialLink_7f6' );
    dasmEntries.add( 0x7f8, 0, 'serialLink_7f8' );

    dasmEntries.add( 0x7f9, 0, 'serialLink_counter_0f_00' );

    dasmEntries.add( 0x7fa, 0, 'serialLink_outputbuffer_chain' );
    dasmEntries.add( 0x7fc, 0, 'serialLink_outputbuffer_index' );
    dasmEntries.add( 0x7fd, 0, 'serialLink_outputbuffers' );

    dasmEntries.add( 0x08b5, 0, 'serialLink_Matrix' );

    dasmEntries.add( 0x99C, 0, 'serialLink_Matrix_HEAD' );
    dasmEntries.add( 0x99D, 0, 'serialLink_Matrix_Entry_INDEX' );
    dasmEntries.add( 0x99E, 0, 'adjLinkedGameID_LINKEDPLAY' );
    dasmEntries.add( 0x99F, 0, 'serialLink_CommCount_LINKEDPLAY' );

    dasmEntries.add( 0x9A0, 0, 'serialLink_MachineCount_LINKEDPLAY' );
    dasmEntries.add( 0x9a5, 0, 'ram_9a5_LINKEDPLAY' );
    dasmEntries.add( 0x9AD, 0, 'COUNTDOWN_LINKEDPLAY' );
    dasmEntries.add( 0x9AE, 0, 'ram_9Ae_LINKEDPLAY' );

    dasmEntries.add( 0x9B0, 0, 'ram_9b0_LINKEDPLAY' );
    dasmEntries.add( 0x9B1, 0, 'ram_9b1_LINKEDPLAY' );
    dasmEntries.add( 0x9B2, 0, 'ram_9b2_LINKEDPLAY' );

    dasmEntries.add( 0x9c0, 0, 'currentDmdGraphicIndex' );

    dasmEntries.add( 0xa48, 0, 'gameLastScoreP1' );
    dasmEntries.add( 0xa92, 0, 'gameLastScoreP2' );
    dasmEntries.add( 0xadc, 0, 'gameLastScoreP3' );
    dasmEntries.add( 0xb26, 0, 'gameLastScoreP4' );

    dasmEntries.add( 0x16a0, 0, 'scorePlayer1' );
    dasmEntries.add( 0x16a6, 0, 'scorePlayer2' );
    dasmEntries.add( 0x16ac, 0, 'scorePlayer3' );
    dasmEntries.add( 0x1702, 0, 'scorePlayer3' );

    dasmEntries.add( 0x1B17, 0, 'StandardAdjustments' );
    dasmEntries.addTable( 0x1BF3, 0, 'adjLinkedGameID', 1, 2 );
    dasmEntries.addTable( 0x1BF5, 0, 'adjLinkedGameTime', 1, 2 );

}

function getDasmEntries_RAM_GW( dasmEntries ) {

    dasmEntries.add( 0x0014, 0, 'currentBankId' );
    dasmEntries.add( 0x0015, 0, 'currentBankAddress' );
    dasmEntries.add( 0x0020, 0, 'ram_0020' );

    dasmEntries.add( 0x58, 0, 'currentTicks_H' );
    dasmEntries.add( 0x59, 0, 'currentTicks_L' );
    dasmEntries.add( 0x5C, 0, 'currentProcessBlockPtr' );

    dasmEntries.add( 0x62, 0, 'ram_saveProcessBlockPtr' );

    dasmEntries.add( 0x75, 0, 'ram_0075_lamps' );
    dasmEntries.add( 0x76, 0, 'ram_0076_lamps' );
    dasmEntries.add( 0x78, 0, 'ram_0078_lamps' );
    dasmEntries.add( 0x7d, 0, 'ram_007d_lamps' );
    dasmEntries.add( 0x7e, 0, 'ram_007e_lamps' );
    dasmEntries.add( 0x7f, 0, 'ram_007f_lamps' );

    dasmEntries.add( 0xC0, 0, 'currentSerialData' );
    dasmEntries.add( 0xC4, 0, 'ram_DMD_SCANLINE' );

    dasmEntries.add( 0x02E0, 0, 'ram_LampMatrix' );

    dasmEntries.add( 0x31F, 0, 'ram_DEBUG_ACTIVE' );
    dasmEntries.add( 0x0339, 0, 'ram_PTR_FeatureAdjustments' );
    dasmEntries.add( 0x366, 0, 'priorityProcess_Blocks_Chain' );
    dasmEntries.add( 0x3c5, 0, 'ram_JUMPER_SETTING' );
    dasmEntries.add( 0x3c6, 0, 'ram_3c6' );
    dasmEntries.add( 0x3c7, 0, 'ram_3c7' );
    dasmEntries.add( 0x3c8, 0, 'ram_3c8' );
    dasmEntries.add( 0x3c9, 0, 'ram_3c9' );

    // dasmEntries.add( 0x369, 0, 'ram_Language_Setting_01' );
    dasmEntries.add( 0x36A, 0, 'ram_Blocks_Free_Chain' );
    // dasmEntries.add( 0x36B, 0, 'ram_Language_Setting_02' );

    dasmEntries.add( 0x36c, 0, 'ram_Blocks_Free_Count' );
    dasmEntries.add( 0x36d, 0, 'ram_Blocks_Free_Minimum' );
    dasmEntries.add( 0x36e, 0, 'ram_Blocks_Count' );

    dasmEntries.add( 0x371, 0, 'regularProcess_Blocks_Chain' );
    dasmEntries.add( 0x37B, 0, 'ram_ORKIN_TERMINAL_PRESENT' );
    dasmEntries.add( 0x37C, 0, 'ram_DEBUG_ACTIVE_FLAG_B' );

    dasmEntries.add( 0x383, 0, 'ram_StringBuffer' );

    dasmEntries.add( 0x3E8, 0, 'ram_3E8' );

    dasmEntries.add( 0x40D, 0, 'ram_BallInPlay' );
    dasmEntries.add( 0x46e, 0, 'ram_OrkinSaveGameStack' );

    dasmEntries.add( 0x4F0, 0, 'serialRingBufferHead' );
    dasmEntries.add( 0x4F1, 0, 'serialRingBufferTail' );
    dasmEntries.add( 0x4F2, 0, 'serialRingBuffer' );
    dasmEntries.add( 0x548, 0, 'ram_DMD_LOW_PAGE' );
    dasmEntries.add( 0x549, 0, 'ram_DMD_HIGH_PAGE' );
    dasmEntries.add( 0x556, 0, 'ram_LastSerialData_CtrlCharacter' );
    dasmEntries.add( 0x647, 0, 'OR_A_with_value_in_addr_X' );

    dasmEntries.add( 0x0726, 0, 'ram_0726' );
    dasmEntries.add( 0x0728, 0, 'ram_0728' );

    dasmEntries.add( 0x99E, 0, 'ram_adjLinkedGameID_hi_LINKEDPLAY' );
    dasmEntries.add( 0x99F, 0, 'ram_adjLinkedGameID_lo_LINKEDPLAY' );
    dasmEntries.add( 0x9A0, 0, 'ram_MachineCount_LINKEDPLAY' );
    dasmEntries.add( 0x9B0, 0, 'ram_9b0_LINKEDPLAY' );
    dasmEntries.add( 0x9B1, 0, 'ram_9b1_LINKEDPLAY' );
    dasmEntries.add( 0x9B2, 0, 'ram_9b2_LINKEDPLAY' );

    dasmEntries.add( 0xa48, 0, 'gameLastScoreP1' );
    dasmEntries.add( 0xa92, 0, 'gameLastScoreP2' );
    dasmEntries.add( 0xadc, 0, 'gameLastScoreP3' );
    dasmEntries.add( 0xb26, 0, 'gameLastScoreP4' );

    dasmEntries.add( 0x17a0, 0, 'ram_rtcHour' );
    dasmEntries.add( 0x17a1, 0, 'ram_rtcMin' );
    dasmEntries.add( 0x17a2, 0, 'ram_rtcHour_B' );
    dasmEntries.add( 0x17a8, 0, 'ram_flag_17a8' );

    dasmEntries.add( 0x1B1D, 0, 'adjustmentsStandard' );
    dasmEntries.addTable( 0x1BF3, 0, 'adjLinkedGameID', 1, 2 );
    dasmEntries.addTable( 0x1BF5, 0, 'adjLinkedGameTime', 1, 2 );
}

function getDasmEntries_WPC( dasmEntries ) {

    dasmEntries.add( 0x3800, 0, 'DMD_PAGE_1' );
    dasmEntries.add( 0x3a00, 0, 'DMD_PAGE_2' );

    dasmEntries.add( 0x3d60, 0, 'WPC_DEBUG_DATA_PORT' );
    dasmEntries.add( 0x3d61, 0, 'WPC_DEBUG_CONTROL_PORT' );

    dasmEntries.add( 0x3e66, 0, 'WPC_SERIAL_CONTROL_PORT' );
    dasmEntries.add( 0x3e67, 0, 'WPC_SERIAL_DATA_PORT' );

    dasmEntries.add( 0x3fb0, 0, 'WPC95_PRINTER_DATA' );
    dasmEntries.add( 0x3fb1, 0, 'WPC95_PRINTER_BAUD' );
    dasmEntries.add( 0x3fb3, 0, 'WPC95_PRINTER_ADDR' );
    dasmEntries.add( 0x3fb5, 0, 'WPC95_PRINTER_BAUD' );
    dasmEntries.add( 0x3fb6, 0, 'WPC_UNKNOWN_3fb6' );
    dasmEntries.add( 0x3fb7, 0, 'WPC95_PRINTER_PRESENCE' );

    dasmEntries.add( 0x3fb8, 0, 'WPC_DMD_3200_PAGE' );
    dasmEntries.add( 0x3fb9, 0, 'WPC_DMD_3000_PAGE' );
    dasmEntries.add( 0x3fba, 0, 'WPC_DMD_3600_PAGE' );
    dasmEntries.add( 0x3fbb, 0, 'WPC_DMD_3400_PAGE ' );

    dasmEntries.add( 0x3fbc, 0, 'WPC_DMD_HIGH_PAGE' );
    dasmEntries.add( 0x3fbd, 0, 'WPC_DMD_SCANLINE' );
    dasmEntries.add( 0x3fbe, 0, 'WPC_DMD_LOW_PAGE' );
    dasmEntries.add( 0x3fbf, 0, 'WPC_DMD_ACTIVE_PAGE' );

    dasmEntries.add( 0x3FC0, 0, 'WPC_PARALLEL_STATUS_PORT' );
    dasmEntries.add( 0x3FC1, 0, 'WPC_PARALLEL_DATA_PORT' );
    dasmEntries.add( 0x3FC2, 0, 'WPC_PARALLEL_STROBE_PORT' );

    dasmEntries.add( 0x3FC3, 0, 'WPC_SERIAL_DATA' );
    dasmEntries.add( 0x3FC4, 0, 'WPC_SERIAL_CTRL' );
    dasmEntries.add( 0x3FC5, 0, 'WPC_SERIAL_BAUD' );

    dasmEntries.add( 0x3FC5, 0, 'WPC_TICKET_DISPENSE' );

    dasmEntries.add( 0x3FD4, 0, 'WPC_FLIPTRONIC_PORT_A' );
    dasmEntries.add( 0x3FD6, 0, 'WPC_FLIPTRONIC_PORT_B' );

    dasmEntries.add( 0x3FDC, 0, 'WPC_SOUND_DATA' );
    dasmEntries.add( 0x3FDD, 0, 'WPC_SOUND_CONTROL_STATUS' );

    dasmEntries.add( 0x3FE0, 0, 'WPC_SOL_GEN_OUTPUT' );
    dasmEntries.add( 0x3FE1, 0, 'WPC_SOL_HIGHPOWER_OUTPUT' );
    dasmEntries.add( 0x3FE2, 0, 'WPC_SOL_FLASH1_OUTPUT' );
    dasmEntries.add( 0x3FE3, 0, 'WPC_SOLENOID_LOWPOWER_OUTPUT' );

    dasmEntries.add( 0x3FE4, 0, 'WPC_LAMP_ROW_OUTPUT' );
    dasmEntries.add( 0x3FE5, 0, 'WPC_LAMP_COL_STROBE' );
    dasmEntries.add( 0x3FE6, 0, 'WPC_GI_TRIAC' );

    dasmEntries.add( 0x3FE7, 0, 'WPC_SW_JUMPER_INPUT' );
    dasmEntries.add( 0x3FE8, 0, 'WPC_SW_CABINET_INPUT' );
    dasmEntries.add( 0x3FE9, 0, 'WPC_SWITCH_ROW_SELECT' );
    dasmEntries.add( 0x3FEA, 0, 'WPC_SWITCH_COL_SELECT' );

    dasmEntries.add( 0x3FEB, 0, 'WPC_EXTBOARD1' );
    dasmEntries.add( 0x3FEc, 0, 'WPC_EXTBOARD2' );
    dasmEntries.add( 0x3FEd, 0, 'WPC_EXTBOARD3' );
    dasmEntries.add( 0x3FEE, 0, 'WPC_ALPHA_ROW2' );

    dasmEntries.add( 0x3FEF, 0, 'WPC95_FLIPPER_SWITCH_INPUT' );

    dasmEntries.add( 0x3FF0, 0, 'WPC_UNKNOWN_3ff0' );
    dasmEntries.add( 0x3FF1, 0, 'WPC_UNKNOWN_3ff1' );

    dasmEntries.add( 0x3FF2, 0, 'WPC_LEDS' );
    // dasmEntries.add( 0x3FF3, 0, 'WPC_IRQACK' );
    dasmEntries.add( 0x3FF3, 0, 'WPC_RAM_BANK' );

    dasmEntries.addWPC( 0x3FF4, 'WPC_SHIFTADDRH' );
    dasmEntries.add( 0x3FF5, 0, 'WPC_SHIFTADDRL' );
    dasmEntries.add( 0x3FF6, 0, 'WPC_SHIFTBIT' );
    dasmEntries.add( 0x3FF7, 0, 'WPC_SHIFTBIT2' );
    dasmEntries.add( 0x3FF8, 0, 'WPC_FIRQSRC' );
    dasmEntries.add( 0x3FF8, 0, 'WPC_PERIPHERAL_TIMER_FIRQ_CLEAR' );

    dasmEntries.add( 0x3FF9, 0, 'WPC_ROM_LOCK' );
    dasmEntries.add( 0x3FFA, 0, 'WPC_RTCHOUR' );
    dasmEntries.add( 0x3FFB, 0, 'WPC_RTCMIN' );
    dasmEntries.add( 0x3FFC, 0, 'WPC_ROM_BANK' );
    dasmEntries.add( 0x3FFD, 0, 'WPC_RAM_LOCK' );
    dasmEntries.add( 0x3FFE, 0, 'WPC_RAM_LOCKSIZE' );

    dasmEntries.add( 0x3FFF, 0, 'WPC_WATCHDOG' );
    // dasmEntries.add( 0x3FFF, 0, 'WPC_ZEROCROSS_IRQ_CLEAR' );  //WPC_WATCHDOG

}