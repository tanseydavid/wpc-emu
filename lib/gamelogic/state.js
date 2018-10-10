'use strict';

module.exports = {
  buildGameState,
};

function buildGameState(config) {
  return new GameState(config);
}

class GameState {
  constructor(config) {
    this.stateByName = config.stateByName;
    this.stateBySwitchId = config.stateBySwitchId;
    this.currentState = null;
  }

  processSwitch(id) {
    this.currentState = this.stateBySwitchId[id];
  }

  processSolenoid(id) {
    this.currentState = this.stateBySwitchId[id];
  }
  solenoidIdToLeaveState
}
