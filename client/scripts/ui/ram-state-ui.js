'use strict';

import { replaceNode } from './htmlselector';

export { initialise, updateCanvas };

const LAMP_DISPLAY_WIDTH = 200;

const CANVAS_WIDTH = 815 + LAMP_DISPLAY_WIDTH;
const CANVAS_HEIGHT = 560;

const COLOR_DMD = [
  'rgb(50,20,20)',
  'rgb(164,82,0)',
  'rgb(255,128,0)',
  'rgb(255,198,0)',
];

let canvas;
let canvasOverlay;

let lastShadedBuffer;

function updateCanvas(emuState) {
  if (!emuState) {
    return;
  }
  canvas.fillStyle = '#000';

  if (emuState.asic.ram) {
    canvas.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    const a = Uint8Array.of([
      emuState.asic.wpc.activeRomBank << 2,
      emuState.asic.wpc.diagnosticLed,
      emuState.asic.dmd.scanline << 3,
    ]);
//      .concat(emuState.asic.ram);

    var data = new Uint8Array(3 + emuState.asic.ram.length);
    data.set(new Uint8Array(a), 0);
    data.set(new Uint8Array(emuState.asic.ram.length), a.byteLength);

      console.log(data)
    drawRamState(data, 10, 40);
  }

  if (emuState.asic.dmd.dmdShadedBuffer) {
    lastShadedBuffer = emuState.asic.dmd.dmdShadedBuffer;
    drawDmdShaded(emuState.asic.dmd.dmdShadedBuffer, 0, 0, 128, 1);
  } else {
    drawDmdShaded(lastShadedBuffer, 0, 0, 128, 1);
  }
}

const ELEMENTS_PER_SLOT = 232/2;
const MAX_TRACKING_ENTRIES = 2048*7;
const ramFrames = new Array(MAX_TRACKING_ENTRIES);
for (let i = 0; i < MAX_TRACKING_ENTRIES; i++) {
  ramFrames[i] = new Array(ELEMENTS_PER_SLOT).fill(0);
}

function drawRamState(data, x, y) {

  for (let i = 0; i < MAX_TRACKING_ENTRIES; i++) {
    ramFrames[i].shift();
    ramFrames[i].push(data[i]);
  }

  const config2 = {
    diagramValueMaxHeight: 64,
    shr: 4,
    widthScaleFactor: 1,
    lineWidth: 1,
    strokeStyle: '#ffffff',
    fontFillStyle: '#f0f',
    lineJoin: 'round',

    diagramHeight: 20,
    borderSize: 8,
    imageWidth: CANVAS_WIDTH,
    imageHeight: CANVAS_HEIGHT,
  };
  const config = {
    diagramValueMaxHeight: 64*2,
    shr: 3,
    widthScaleFactor: 2,
    lineWidth: 2,
    strokeStyle: '#ff00ff',
    fontFillStyle: '#f0f',
    lineJoin: 'round',

    diagramHeight: 40,
    borderSize: 10,
    imageWidth: CANVAS_WIDTH,
    imageHeight: CANVAS_HEIGHT,
  };

  canvas.lineWidth = config.lineWidth;
  canvas.strokeStyle = config.strokeStyle;
  canvas.lineJoin = config.lineJoin;

  const initialYPos = y;
  let done = false;
  let tmp = [];

  ramFrames
    .forEach((frame) => {
      if (done) {
        return;
      }

      if (!frame.find((ramValue) => (ramValue >> 4) > 0)) {
        return;
      }

      const reducedFrameMemory = frame.map((val) => val >> 4);
      const hash = hashCode(reducedFrameMemory.toString());
      if (tmp.includes(hash)) {
        return;
      }
      tmp.push(hash);

      canvas.beginPath();
      canvas.moveTo(x, y + (config.diagramValueMaxHeight - frame[0] >> config.shr));
      for (let i=0; i<frame.length; i++) {
        const x1 = x + i * config.widthScaleFactor;
        const y1 = y + (config.diagramValueMaxHeight - frame[i] >> config.shr);
        canvas.lineTo(x1, y1);
        canvas.moveTo(x1, y1);
      }
      canvas.stroke();

      y += config.diagramHeight;
      if (y >= (config.imageHeight - config.borderSize)) {
        y = initialYPos;
        x += frame.length * config.widthScaleFactor + config.borderSize;
        if (x >= (config.imageWidth - ELEMENTS_PER_SLOT)) {
          done = true;
        }
      }
    });
}

function hashCode(str = '') {
  return str.split('').reduce((prevHash, currVal) =>
    (((prevHash << 5) - prevHash) + currVal.charCodeAt(0))|0, 0);
}

function drawDmdShaded(data, x, y, width, SCALE_FACTOR = 1) {
  const MARGIN = 0;
  canvas.fillStyle = COLOR_DMD[0];
  canvas.fillRect(x, y, width * SCALE_FACTOR, 32 * SCALE_FACTOR);

  let offsetX = 0;
  let offsetY = 0;
  let color = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] > 0) {
      if (color !== data[i]) {
        color = data[i];
        canvas.fillStyle = COLOR_DMD[color];
      }
      canvas.fillRect(MARGIN + x + offsetX * SCALE_FACTOR, MARGIN + y + offsetY * SCALE_FACTOR,
        SCALE_FACTOR - MARGIN, SCALE_FACTOR - MARGIN);
    }
    offsetX++;
    if (offsetX === width) {
      offsetX = 0;
      offsetY++;
    }
  }
}

function initCanvas() {
  canvas.fillStyle = '#f00';
  canvas.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  canvas.font = '10px Monaco';
}

function initialise() {
  console.log('initialise');

  // prepare view
  const canvasRootElement = document.createElement('canvas');
  canvasRootElement.width = CANVAS_WIDTH;
  canvasRootElement.height = CANVAS_HEIGHT;
  canvas = canvasRootElement.getContext('2d', { alpha: false });
  replaceNode('canvasNode', canvasRootElement);

  //TODO make canvas smaller
  const canvasOverlayElement = document.createElement('canvas');
  canvasOverlayElement.width = CANVAS_WIDTH;
  canvasOverlayElement.height = CANVAS_HEIGHT;
  canvasOverlay = canvasOverlayElement.getContext('2d', { alpha: true });
  replaceNode('canvasOverlayNode', canvasOverlayElement);

  initCanvas();
}
