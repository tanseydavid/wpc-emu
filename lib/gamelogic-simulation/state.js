'use strict';

const debug = require('debug')('wpcemu:gamelogic:state');

module.exports = {
  buildGameState,
};

function buildGameState(configurationArray, triggerSwitchFunction) {
  if (!Array.isArray(configurationArray)) {
    throw new Error('MISSING_CONFIGURATION_ARRAY');
  }
  if (typeof triggerSwitchFunction !== 'function') {
    throw new Error('TRIGGER_SWITCH_FUNCTION_INVALID');
  }
  return new GameState(configurationArray, triggerSwitchFunction);
}

const INSTANT_LEAVE_STATE = 'INSTANT_LEAVE_STATE';
const INITIAL_STATE = 'Initial State';

class GameState {
  constructor(configurationArray, triggerSwitchFunction) {
    debug('init');
    this.configurationArray = configurationArray;
    this.triggerSwitchFunction = triggerSwitchFunction;
    this._validateNextState();

    this.reset();
  }

  reset() {
    console.log('RESET_GAMELOGIC_SIMULATION');
    this.currentState = this._getStateByName(INITIAL_STATE);
    if (!this.currentState) {
      throw new Error('MISSING_INITIAL_STATE');
    }
  }

  _getStateByName(name) {
    return this.configurationArray.find((config) => {
      return config.name === name;
    });
  }

  _validateNextState() {
    const stateByName = this.configurationArray
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
          throw new Error('MISSING_STATE_' + nextState);
        }
      }
    });

  }

  _selectNextState() {
    if (this.currentState.nextState) {
      const nextStateName = this.currentState.nextState;
      debug('next state', nextStateName);
      console.log('XXX next state', nextStateName);
      this.currentState = this._getStateByName(nextStateName);
      const switchIdToTrigger = this.currentState.switchIdToTrigger;
      if (switchIdToTrigger) {
        console.log('trigger switch', switchIdToTrigger);
        debug('XXX trigger switch', switchIdToTrigger);
        this.triggerSwitchFunction(switchIdToTrigger, true);
      }
    }
  }

  updateSolenoidState(solenoidState) {
    //TODO cache solenoid state?
    const solenoidActive = solenoidState[this.currentState.solenoidIdToLeaveState] > 0;
    if (solenoidActive) {
      debug('leave state');
      console.log('XXX leave state');
      this._selectNextState();
    }
  }

  executeCycle() {
    const hasOptions = Array.isArray(this.currentState.options);
    if (hasOptions && this.currentState.options.includes(INSTANT_LEAVE_STATE)) {
      this._selectNextState();
    }
  }

}
