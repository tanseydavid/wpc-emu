'use strict';

import { build as uiElementFactory } from './uiElements';

export { build };

function build(canvas, optionalPlayfieldData) {
  return new DebugLayout(canvas, optionalPlayfieldData);
}

const LEFT_X_OFFSET = 15;
const MIDDLE_X_OFFSET = 250 + LEFT_X_OFFSET;
const MIDDLE_PLUS_X_OFFSET = 125 + MIDDLE_X_OFFSET;
const RIGHT_X_OFFSET = 250 + MIDDLE_X_OFFSET;
const RIGHT_PLUS_X_OFFSET = 125 + RIGHT_X_OFFSET;
const YPOS_DMD_MAIN_VIEW = 15;
const YPOS_GENERIC_DATA = 225;
const YPOS_DMD_DATA = 415;
const YPOS_MEM_DATA = YPOS_DMD_DATA + 65;

class DebugLayout {

  constructor(canvas, optionalPlayfieldData) {
    this.colorSet = [
      'rgb(50,20,20)',
      'rgb(164,82,0)',
      'rgb(255,128,0)',
      'rgb(255,198,0)',
    ];
    this.canvas = canvas;
    this.width = canvas.width;
    this.height = canvas.height;
    if (optionalPlayfieldData) {
      this.loadOptionalPlayfield(optionalPlayfieldData);
    }
    this.uiLibrary = uiElementFactory(canvas, this.colorSet, optionalPlayfieldData);
    this.videoRam = undefined;
    this.frame = 0;
    this.initCanvas();
  }

  loadOptionalPlayfield(playfieldData) {
    const playfieldImage = new Image();
    playfieldImage.onload = () => {
      this.canvas.drawImage(playfieldImage, 800, YPOS_DMD_MAIN_VIEW);
    };
    console.log('FETCHURL',FETCHURL)
    playfieldImage.src = FETCHURL + playfieldData.image;
  }

  initCanvas() {
    this.canvas.fillStyle = '#000';
    this.canvas.fillRect(0, 0, this.width, this.height);

    this.canvas.font = '10px Monaco';
    this.canvas.fillStyle = this.colorSet[3];
    this.canvas.fillText('# DEBUG DATA:', LEFT_X_OFFSET, YPOS_GENERIC_DATA);
    this.canvas.fillText('# DMD BOARD DATA:', LEFT_X_OFFSET, YPOS_DMD_DATA);

    this.canvas.fillStyle = this.colorSet[2];
    this.canvas.fillText('SOLENOID OUT MATRIX', MIDDLE_X_OFFSET, YPOS_GENERIC_DATA + 10);
    this.canvas.fillText('ILLUM. OUT MATRIX', MIDDLE_PLUS_X_OFFSET, YPOS_GENERIC_DATA + 10);
    this.canvas.fillText('LAMP OUT MATRIX', RIGHT_X_OFFSET, YPOS_GENERIC_DATA + 10);
    this.canvas.fillText('SWITCH IN MATRIX', RIGHT_PLUS_X_OFFSET, YPOS_GENERIC_DATA + 10);
    this.canvas.fillText('DMD PAGE RAM:', MIDDLE_X_OFFSET, YPOS_DMD_DATA + 10);
    this.canvas.fillText('WPC CPU RAM:', LEFT_X_OFFSET, YPOS_MEM_DATA - 10);
    this.canvas.fillText('SOUND CPU RAM:', LEFT_X_OFFSET + 125, YPOS_MEM_DATA - 10);
  }

  updateMainEmuView(emuState, cpuState) {
    this.canvas.fillStyle = '#000';
    this.canvas.fillRect(LEFT_X_OFFSET, YPOS_GENERIC_DATA, 245, 165);
    this.canvas.fillRect(LEFT_X_OFFSET, YPOS_DMD_DATA, 150, 40);

    this.canvas.fillStyle = this.colorSet[2];
    this.canvas.fillText('ROM: ' + emuState.romFileName, LEFT_X_OFFSET, YPOS_GENERIC_DATA + 10);
    this.canvas.fillText('CPU TICKS: ' + emuState.ticks, LEFT_X_OFFSET, YPOS_GENERIC_DATA + 20);
    this.canvas.fillText('CPU TICKS/ms: ' + emuState.opsMs, LEFT_X_OFFSET, YPOS_GENERIC_DATA + 30);
    this.canvas.fillText('CPU STATE: ' + cpuState, LEFT_X_OFFSET, YPOS_GENERIC_DATA + 40);
    this.canvas.fillText('IRQ CALLS/MISSED: ' + emuState.irqCount + '/' + emuState.missedIrqCall,
      LEFT_X_OFFSET, YPOS_GENERIC_DATA + 50);
    this.canvas.fillText('FIRQ CALLS/MISSED: ' + emuState.firqCount + '/' + emuState.missedFirqCall,
      LEFT_X_OFFSET, YPOS_GENERIC_DATA + 60);
    this.canvas.fillText('NMI CALLS: ' + emuState.nmiCount, LEFT_X_OFFSET, YPOS_GENERIC_DATA + 70);

    const diagnosticLed = emuState.asic.wpc.diagnosticLed ? 1 : 0;
    const activePage = emuState.asic.dmd.activepage;
    this.canvas.fillText('DIAGLED STATE: ' + diagnosticLed, LEFT_X_OFFSET, YPOS_GENERIC_DATA + 80);
    this.canvas.fillText('DIAGLED TOGGLE COUNT: ' + emuState.asic.wpc.diagnosticLedToggleCount, LEFT_X_OFFSET, YPOS_GENERIC_DATA + 90);
    this.canvas.fillText('ACTIVE ROM BANK: ' + emuState.asic.wpc.activeRomBank, LEFT_X_OFFSET, YPOS_GENERIC_DATA + 100);
    this.canvas.fillText('WRITE TO LOCKED MEM: ' + emuState.protectedMemoryWriteAttempts, LEFT_X_OFFSET, YPOS_GENERIC_DATA + 110);

    this.canvas.fillText('SND CPU TICK: ' + emuState.asic.sound.ticks, LEFT_X_OFFSET, YPOS_GENERIC_DATA + 120);
    this.canvas.fillText('SND IRQ CALLS/MISSED: ' + emuState.asic.sound.irqCount + '/' + emuState.asic.sound.missedIrqCall,
      LEFT_X_OFFSET, YPOS_GENERIC_DATA + 130);
    this.canvas.fillText('SND FIRQ CALLS/MISSED: ' + emuState.asic.sound.firqCount + '/' + emuState.asic.sound.missedFirqCall,
      LEFT_X_OFFSET, YPOS_GENERIC_DATA + 140);
    this.canvas.fillText('SND NMI CALLS: ' + emuState.asic.sound.nmiCount,
      LEFT_X_OFFSET, YPOS_GENERIC_DATA + 150);
    this.canvas.fillText('SND VOLUME: ' + emuState.asic.sound.volume, LEFT_X_OFFSET, YPOS_GENERIC_DATA + 160);

    this.canvas.fillText('DMD LOW PAGE: ' + emuState.asic.dmd.lowpage, LEFT_X_OFFSET, YPOS_DMD_DATA + 10);
    this.canvas.fillText('DMD HIGH PAGE: ' + emuState.asic.dmd.highpage, LEFT_X_OFFSET, YPOS_DMD_DATA + 20);
    this.canvas.fillText('DMD ACTIVE PAGE: ' + activePage, LEFT_X_OFFSET, YPOS_DMD_DATA + 30);

    if (emuState.asic.sound.ram) {
      this.uiLibrary.drawMemRegion(emuState.asic.sound.ram, LEFT_X_OFFSET + 125, YPOS_MEM_DATA, 120);
    }

    if (emuState.asic.dmd.dmdShadedBuffer) {
      this.uiLibrary.drawDmdShaded(emuState.asic.dmd.dmdShadedBuffer, LEFT_X_OFFSET, YPOS_DMD_MAIN_VIEW, 128, 6);
    }

    if (emuState.asic.ram) {
      this.uiLibrary.drawMemRegion(emuState.asic.ram, LEFT_X_OFFSET, YPOS_MEM_DATA, 120);
    }

    if (emuState.asic.wpc.lampState) {
      this.uiLibrary.drawMatrix8x8(emuState.asic.wpc.lampState, RIGHT_X_OFFSET, YPOS_GENERIC_DATA + 20);
      this.uiLibrary.drawLampPositions(emuState.asic.wpc.lampState, 800, YPOS_DMD_MAIN_VIEW);
    }

    if (emuState.asic.wpc.solenoidState) {
      this.uiLibrary.drawMatrix8x8(emuState.asic.wpc.solenoidState, MIDDLE_X_OFFSET, YPOS_GENERIC_DATA + 20);
    }

    if (emuState.asic.wpc.inputState) {
      this.uiLibrary.drawInputStateMatrix(emuState.asic.wpc.inputState, RIGHT_PLUS_X_OFFSET, YPOS_GENERIC_DATA + 20);
    }

    this.uiLibrary.drawMatrix8x8(emuState.asic.wpc.generalIlluminationState, MIDDLE_PLUS_X_OFFSET, YPOS_GENERIC_DATA + 20);

    //dmd pages - 8 pixel (on/off) per byte, display is 128x32 pixels
    if (emuState.asic.dmd.videoRam) {
      this.videoRam = emuState.asic.dmd.videoRam;
    }
    this.frame++;
    const dmdRow = this.frame % 4;
    // draw only 4 dmd frames to avoid dropping fps
    if (Array.isArray(this.videoRam)) {
      let xpos = MIDDLE_X_OFFSET;
      let ypos = YPOS_DMD_DATA;
      for (let i = 0; i < dmdRow * 4; i++) {
        xpos += 130;
        if (xpos > (800 - 130)) {
          xpos = MIDDLE_X_OFFSET;
          ypos += 35;
        }
      }
      for (let i = 0; i < 4; i++) {
        this.uiLibrary.drawDmd(this.videoRam[dmdRow * 4 + i], xpos, ypos, 128);
        xpos += 130;
        if (xpos > (800 - 130)) {
          xpos = MIDDLE_X_OFFSET;
          ypos += 35;
        }
      }
    }

  }

}
