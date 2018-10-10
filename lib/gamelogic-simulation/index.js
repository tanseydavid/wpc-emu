'use strict';

const State = require('./state.js');

/*
  the game needs to execute certain functions to work properly in the simulation.
  this code is only needed if no real hardware is present
*/

module.exports = {
  initialiseGameLogic,
};

function initialiseGameLogic(cpuBoard) {
  return new GameLogic(cpuBoard);
}

class GameLogic {

  constructor(triggerSwitchFunction) {
    this.state = State.buildGameState(RULESET, triggerSwitchFunction);
  }

  updateSolenoidState(solenoidState) {
    this.state.updateSolenoidState(solenoidState);
  }

  reset() {
    this.state.reset();
  }

  executeCycle() {
    this.state.executeCycle();
  }
}

const RULESET = [
  {
    name: 'Initial State',
    switchDownTimeMs: 0,
    nextState: 'Drain',
    transitionTimeMs: 0,
    options: ['INSTANT_LEAVE_STATE'],
  },
  {
    name: 'Right Trough',
    switchDownTimeMs: 1,
    switchIdToTrigger: 17,
    solenoidIdToLeaveState: 4,
    nextState: 'Shooter',
    transitionTimeMs: 5,
  },
  {
    name: 'Center Trough',
    switchDownTimeMs: 1,
    switchIdToTrigger: 16,
    nextState: 'Right Trough',
    transitionTimeMs: 1,
    options: ['INSTANT_LEAVE_STATE'],
  },
  {
    name: 'Left Trough',
    switchDownTimeMs: 1,
    switchIdToTrigger: 15,
    nextState: 'Center Trough',
    transitionTimeMs: 1,
    options: ['INSTANT_LEAVE_STATE'],
  },
  {
    name: 'Outhole',
    switchDownTimeMs: 5,
    switchIdToTrigger: 18,
    solenoidIdToLeaveState: 4,
    nextState: 'Left Trough',
    transitionTimeMs: 5,
  },
  {
    name: 'Drain',
    switchDownTimeMs: 1,
    nextState: 'Outhole',
    transitionTimeMs: 0,
    options: ['INSTANT_LEAVE_STATE'],
  },
  {
    name: 'Shooter',
    switchDownTimeMs: 1,
    switchIdToTrigger: 78,
    solenoidIdToLeaveState: 9,
    nextState: 'Ball Lane',
    transitionTimeMs: 1,
  },
  {
    name: 'Ball Lane',
    switchDownTimeMs: 1,
    nextState: 'Orbit Target 2',
    transitionTimeMs: 1,
    options: ['INSTANT_LEAVE_STATE'],
  },

  {
    name: 'Orbit Target 2',
    switchDownTimeMs: 1,
    switchIdToTrigger: 72,
//    nextState: 'Playfield',
    transitionTimeMs: 1,
    options: ['INSTANT_LEAVE_STATE'],
  },
];
