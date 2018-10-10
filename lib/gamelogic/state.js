'use strict';

const debug = require('debug')('wpcemu:gamelogic:state');

module.exports = {
  buildGameState,
};

function buildGameState(configurationArray, triggerSwitchFunction) {
  if (typeof triggerSwitchFunction !== 'function') {
    throw new Error('TRIGGER_SWITCH_FUNCTION_INVALID');
  }
  return new GameState(configurationArray, triggerSwitchFunction);
}

const INSTANT_LEAVE_STATE = 'INSTANT_LEAVE_STATE';

class GameState {
  constructor(configurationArray, triggerSwitchFunction) {
    this.configurationArray = configurationArray;
    this.triggerSwitchFunction = triggerSwitchFunction;
    this.currentState = null;
    debug('init');
  }

  _getStateBySwitchId(switchIdToTrigger) {
    return this.configurationArray.find((config) => {
      return config.switchIdToTrigger === switchIdToTrigger;
    });
  }

  _getStateBySolenoidId(solenoidId) {
    return this.configurationArray.find((config) => {
      return config.solenoidIdToLeaveState === solenoidId;
    });
  }

  _getStateByName(name) {
    return this.configurationArray.find((config) => {
      return config.name === name;
    });
  }

  _selectNextState() {
    if (this.currentState && this.currentState.nextState) {
      const nextStateName = this.currentState.nextState;
      debug('next state', nextStateName);
      this.currentState = this._getStateByName(nextStateName);
      const switchIdToTrigger = this.currentState.switchIdToTrigger;
      if (switchIdToTrigger) {
        debug('trigger switch', switchIdToTrigger);
        this.triggerSwitchFunction(switchIdToTrigger);
      }
    }
  }

  processSwitch(id) {
    const newState = this._getStateBySwitchId(id);
    if (newState) {
      debug('select state', newState.name);
      this.currentState = newState;
    }
  }

  processSolenoid(id) {
    if (this.currentState && this.currentState.solenoidIdToLeaveState === id) {
      debug('leave state');
      this.currentState = this._getStateBySolenoidId(id);
      this._selectNextState();
    }
  }

  executeCycle() {
    if (this.currentState && this.currentState.options.includes(INSTANT_LEAVE_STATE)) {
      this._selectNextState();
    }
  }

}
