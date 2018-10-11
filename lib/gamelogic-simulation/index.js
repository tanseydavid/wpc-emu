'use strict';

const State = require('./state.js');

/*
  the game needs to execute certain functions to work properly in the simulation.
  this code is only needed if no real hardware is present
*/

module.exports = {
  initialiseGameLogic,
};

function initialiseGameLogic(triggerSwitchFunction, gameLogic) {
  return new GameLogic(triggerSwitchFunction, gameLogic);
}

class GameLogic {
  constructor(triggerSwitchFunction, gameLogic) {
    this.state = State.buildGameState(gameLogic, triggerSwitchFunction);
  }

  triggerInputSwitch(id) {
    this.state.triggerInputSwitch(id);
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
