'use strict';

const debug = require('debug')('pinmame:convert');

module.exports = {
  convertState,
};

const GAME_PLAYING = 'Playfield State';

function convertState(state) {
  const result = _convertState(state);
  validateNextState(result);
  return result;
}

function _convertDefines(data) {
  const cleanArray = data.map((_switch) => {
    return _switch
      .split(/\s/)
      .filter((e) => e)
      .map((entry) => entry.trim());
  });
  const result = [];
  cleanArray.forEach((entry) => {
    const id = parseInt(entry[2], 10);
    const name = entry[1];
    result[name] = id;
  });
  return result;
}

function _convertStateOffset(state) {
  if (state.includes('=')) {
    throw new Error('STATEDEFINITION_MUST NOT CONTAIN ASSIGNMENTS! ( XX=SIM... )');
  }
  return state
    .trim()
    .substr(1, state.length - 2)
    .split(',')
    .filter((e) => e)
    .map((e) => e.trim());
}

function _convertState(_state) {
  const stateOffset = _convertStateOffset(_state.STATEDEFINITION);
  if (_state.STATE.length - 3 !== stateOffset.length) {
    debug('_state.STATE.length', _state.STATE.length);
    debug('_state.STATEDEFINITION.length', stateOffset.length);
    throw new Error('STATE and STATEDEFINITION MUST HAVE THE SAME AMOUNT OF ELEMENTS!');
  }

  const switches = _convertDefines(_state.SWITCHES);
  const solenoids = _convertDefines(_state.SOLENOIDS);

  const state = _state.STATE;
  const step1 = state.map((entry, index) => {
    if (index < 3) {
      debug('!! SKIP:', entry);
      return;
    }

    const entryWithoutBrackets = entry
      .trim()
      .substr(1, entry.length - 2)
      .replace(/\"/g, '');

    const stateArray = entryWithoutBrackets
      .split(',')
      .map((element) => element.trim());

    if (stateArray.length < 4) {
      debug('!! INVALID ENTRY:', entry);
      //return;
    }

    const switchName = stateArray[2];
    const solenoidName = stateArray[3];
    const result = {
      name: stateArray[0],
      switchDownTimeMs: parseInt(stateArray[1], 10),
      switchIdToTrigger: switches[switchName],
      solenoidIdToLeaveState: solenoids[solenoidName] - 1 || 0,
      nextState: stateArray[4],
      transitionTimeMs: parseInt(stateArray[5], 10),
    };

    if (!result.switchIdToTrigger) {
      delete result.switchIdToTrigger;
    }
    if (result.solenoidIdToLeaveState === 0) {
      delete result.solenoidIdToLeaveState;
      result.options = ['INSTANT_LEAVE_STATE'];
    }
    return result;
  }).filter((element) => element);

  checkUniqueName(step1);

  //Replace next step with actual name
  const step2 = step1.map((entry) => {
    const index = stateOffset.indexOf(entry.nextState);
    if (index !== -1) {
      entry.nextState = step1[index].name;
    } else {
      if (entry.nextState === 'stFree') {
        entry.nextState = GAME_PLAYING;
      } else {
        debug('!! UNKNOWN STATE:', entry.nextState);
        debug('   -> MODIFY:', entry.name);
        entry.nextState = GAME_PLAYING;
        entry.options = ['INSTANT_LEAVE_STATE'];
        delete entry.switchDownTimeMs;
      }
    }
    return entry;
  }).filter((element) => element);

  const stFree = {
    name: GAME_PLAYING,
  };

  const initialState = {
    name: 'Initial State',
    switchDownTimeMs: 0,
    nextState: step2[0].name,
    transitionTimeMs: 0,
    options: ['INSTANT_LEAVE_STATE'],
  };

  return [ initialState, stFree ].concat(step2);
}

function checkUniqueName(data) {
  const names = data.map((entry) => {
    return entry.name;
  });
  const uniqueNames = [...new Set(names)];
  if (names.length !== uniqueNames.length) {
    debug('NON UNIQUE NAMES DETECTED %o', names);
    debug('NON UNIQUE NAMES DETECTED %o', uniqueNames);
    throw new Error('NON_UNIQUE_NAMES_DETECTED');
  }
}

function validateNextState(data) {
  const stateByName = data
    .reduce((accumulator, currentValue) => {
      const stateName = currentValue.name;
      accumulator[stateName] = currentValue;
      return accumulator;
    }, []);
  const availableStates = Object.keys(stateByName);

  availableStates.forEach((state) => {
    const entry = stateByName[state];
    const nextState = entry.nextState;
    if (nextState) {
      if (!availableStates.includes(nextState)) {
        debug('STATE: %O', data);
        throw new Error('MISSING_STATE_' + nextState);
      }
    }
  });
}
