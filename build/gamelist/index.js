'use strict';

import * as gamelist from '../../client/scripts/db/gamelist';

const gameNames = gamelist.getAllNames();
const gameSummary = gameNames
  .filter(name => !name.startsWith('UPLOAD'))
  .map((name) => {
    const gameEntry = gamelist.getByName(name);
    return {
      name: gameEntry.name,
      switchMapping: gameEntry.switchMapping ? true : false,
      playfield: gameEntry.playfield ? true : false,
      playfieldLamps: gameEntry.playfield && gameEntry.playfield.lamps ? true : false,
      playfieldFlashLamps: gameEntry.playfield && gameEntry.playfield.flashlamps ? true : false,
      audio: gameEntry.audio ? true : false,
      memoryPosition: gameEntry.memoryPosition,
    }
  });

const FIELDS_NR = 6;
const OK = '✅';
const NOK = '❌';

console.error('| Game | Summary | Switch Mapping | Playfield Image | Playfield Lamps | Playfield Flashlamps | Audio Support | Memory Position |');
console.error('| --- | --- | --- | --- | --- | --- | --- | --- |');

let overallSupportLevel = 0;

gameSummary.forEach((entry) => {
  let supportLevel = 0;

  const memoryPosition = entry.memoryPosition && entry.memoryPosition.length;

  if (entry.switchMapping) {
    supportLevel++;
  }
  if (entry.playfield) {
    supportLevel++;
  }
  if (entry.playfieldLamps) {
    supportLevel++;
  }
  if (entry.playfieldFlashLamps) {
    supportLevel++;
  }
  if (entry.audio) {
    supportLevel++;
  }
  if (memoryPosition) {
    supportLevel++;
  }

  overallSupportLevel += supportLevel;

  console.error(
    '|',
    entry.name,
    '|',
    supportLevel,
    '|',
    entry.switchMapping ? OK : NOK,
    '|',
    entry.playfield ? OK : NOK,
    '|',
    entry.playfieldLamps ? OK : NOK,
    '|',
    entry.playfieldFlashLamps ? OK : NOK,
    '|',
    entry.audio ? OK : NOK,
    '|',
    memoryPosition ? OK + ' (' + entry.memoryPosition.length + ')' : NOK,
    '|',
  );
});
console.error();
const percentageSupport = parseInt((100 / (gameSummary.length * FIELDS_NR)) * overallSupportLevel + 0.5);
console.error('Overall Support Level', overallSupportLevel, '(' + percentageSupport + '%)' );
console.error();
