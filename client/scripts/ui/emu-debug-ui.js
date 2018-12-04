'use strict';

// HINT enable debug in the browser by entering "localStorage.debug = '*'" in the browser

import { replaceNode } from './htmlselector';
import { build as debugLayout } from './widgets/debugLayout';

export { initialise, updateCanvas };

/*jshint bitwise: false*/

const CANVAS_WIDTH = 1015;
const CANVAS_HEIGHT = 560;

let canvasOverlay;
let uiElement;

function updateCanvas(emuState, cpuState) {
  if (!emuState) {
    return;
  }

  uiElement.updateMainEmuView(emuState, cpuState);

  if (emuState.asic.wpc.solenoidState) {
    canvasOverlay.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    drawFlashlamps(emuState.asic.wpc.solenoidState, 800, 15);
  }
}

function drawFlashlamps(lampState, x, y) {
  if (!uiElement.playfieldData || !lampState || !Array.isArray(uiElement.playfieldData.flashlamps)) {
    return;
  }

  uiElement.playfieldData.flashlamps.forEach((lamp) => {
    const selectedLamp = lampState[lamp.id - 1];
    if (!selectedLamp) {
      return;
    }
    const alpha = (selectedLamp / 255).toFixed(2);
    canvasOverlay.beginPath();
    canvasOverlay.fillStyle = 'rgba(255,255,255,' + alpha + ')';
    canvasOverlay.arc(x + lamp.x, y + lamp.y, 24, 0, 2 * Math.PI);
    canvasOverlay.fill();
  });
}

function initialise(gameEntry) {
  console.log('initialise');

  // prepare view
  const canvasRootElement = document.createElement('canvas');
  canvasRootElement.width = CANVAS_WIDTH;
  canvasRootElement.height = CANVAS_HEIGHT;
  let canvas = canvasRootElement.getContext('2d', { alpha: false });
  replaceNode('canvasNode', canvasRootElement);

  //TODO make canvas smaller
  const canvasOverlayElement = document.createElement('canvas');
  canvasOverlayElement.width = CANVAS_WIDTH;
  canvasOverlayElement.height = CANVAS_HEIGHT;
  canvasOverlay = canvasOverlayElement.getContext('2d', { alpha: true });
  replaceNode('canvasOverlayNode', canvasOverlayElement);

  // preload data
  const playfieldData = gameEntry.playfield;
  uiElement = debugLayout(canvas, playfieldData);
}
