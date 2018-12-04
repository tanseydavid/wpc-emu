'use strict';

export { build };

function build(canvas, colorSet, optionalPlayfieldData) {
  return new UiElements(canvas, colorSet, optionalPlayfieldData);
}

const BIT_ARRAY = [1, 2, 4, 8, 16, 32, 64, 128];

const colorLut = new Map();
colorLut.set('YELLOW', 'rgba(255,255,0,');
colorLut.set('ORANGE', 'rgba(255,165,0,');
colorLut.set('RED', 'rgba(255,0,0,');
colorLut.set('LBLUE', 'rgba(173,216,230,');
colorLut.set('LPURPLE', 'rgba(218,112,214,');
colorLut.set('WHITE', 'rgba(255,255,255,');
colorLut.set('GREEN', 'rgba(0,255,0,');
colorLut.set('BLACK', 'rgba(0,0,0,0)');

class UiElements {

  constructor(canvas, colorSet, optionalPlayfieldData) {
    this.canvas = canvas;
    this.colorSet = colorSet;
    this.playfieldData = optionalPlayfieldData;
  }

  drawMemRegion(data, x, y, width) {
    this.canvas.fillStyle = this.colorSet[0];
    this.canvas.fillRect(x, y, width, 70);

    let offsetX = 0;
    let offsetY = 0;
    let color = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i] > 0) {
        if (color !== data[i]) {
          color = data[i].toString(16);
          this.canvas.fillStyle = '#' + color + color + color;
        }
        this.canvas.fillRect(x + offsetX, y + offsetY, 1, 1);
      }
      if (++offsetX === width) {
        offsetX = 0;
        offsetY++;
      }
    }
  }

  drawDmdShaded(data, x, y, width, SCALE_FACTOR = 1) {
    const MARGIN = 2;
    this.canvas.fillStyle = this.colorSet[0];
    this.canvas.fillRect(x, y, width * SCALE_FACTOR, 32 * SCALE_FACTOR);

    let offsetX = 0;
    let offsetY = 0;
    let color = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i] > 0) {
        if (color !== data[i]) {
          color = data[i];
          this.canvas.fillStyle = this.colorSet[color];
        }
        this.canvas.fillRect(MARGIN + x + offsetX * SCALE_FACTOR, MARGIN + y + offsetY * SCALE_FACTOR,
          SCALE_FACTOR - MARGIN, SCALE_FACTOR - MARGIN);
      }
      if (++offsetX === width) {
        offsetX = 0;
        offsetY++;
      }
    }
  }

  drawDmd(data, x, y, width) {
    this.canvas.fillStyle = this.colorSet[0];
    this.canvas.fillRect(x, y, width, 32);
    this.canvas.fillStyle = this.colorSet[3];

    let offsetX = 0;
    let offsetY = 0;
    for (let i = 0; i < data.length; i++) {
      const packedByte = data[i];
      for (let j = 0; j < BIT_ARRAY.length; j++) {
        //NOTE: important speed optimize here...
        if (packedByte > 0) {
          const mask = BIT_ARRAY[j];
          if (mask & packedByte) {
            this.canvas.fillRect(x + offsetX, y + offsetY, 1, 1);
          }
        }
        if (++offsetX === width) {
          offsetX = 0;
          offsetY++;
        }
      }
    }
  }

  drawMatrix8x8(data, x, y, GRIDSIZE = 15) {
    data.forEach((lamp, index) => {
      this.canvas.fillStyle = lamp & 0x80 ? this.colorSet[3] :
        lamp & 0x70 ? this.colorSet[1] : this.colorSet[0];
      const i = x + (index % 8) * GRIDSIZE;
      const j = y + parseInt(index / 8, 10) * GRIDSIZE;
      this.canvas.fillRect(i, j, GRIDSIZE, GRIDSIZE);
    });
  }

  drawInputStateMatrix(data, x, y) {
    const dataUnpacked = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 8; j++) {
        const entry = data[i] & BIT_ARRAY[j];
        dataUnpacked.push(entry > 0 ? 255 : 0);
      }
    }
    this.drawMatrix8x8(dataUnpacked, x, y);
  }

  drawLampPositions(lampState, x, y) {
    const LAMP_SIZE = 6;
    const LAMP_SIZE2 = LAMP_SIZE / 2;

    if (!this.playfieldData || !lampState || !Array.isArray(this.playfieldData.lamps)) {
      return;
    }

    lampState.forEach((lamp, index) => {
      if (index >= this.playfieldData.lamps.length) {
        return;
      }
      const lampObjects = this.playfieldData.lamps[index];
      if (!lampObjects) {
        return;
      }

      const alpha = (lamp / 512).toFixed(2);
      const isOn = lamp > 0;
      lampObjects.forEach((lampObject) => {
        if (isOn) {
          this.canvas.fillStyle = colorLut.get(lampObject.color) + alpha + ')';
        } else {
          this.canvas.fillStyle = 'black';
        }
        this.canvas.fillRect(x + lampObject.x - LAMP_SIZE2, y + lampObject.y - LAMP_SIZE2, LAMP_SIZE, LAMP_SIZE);
      });
    });
  }


}
