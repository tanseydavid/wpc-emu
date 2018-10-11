'use strict';

/* global WpcEmu */

export { initialiseEmulator };

function initialiseEmulator(romData, gameEntry) {
  const fileName = gameEntry.rom.u06;
  const romObject = {
    fileName,
    skipWmcRomCheck: gameEntry.skipWmcRomCheck,
    features: gameEntry.features,
    gameLogic: gameEntry.gameLogic,
  };
  return WpcEmu.initVMwithRom(romData, romObject);
}
