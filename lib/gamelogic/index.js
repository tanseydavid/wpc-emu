'use strict';

/*
  the game needs to execute certain functions to work properly in the simulation.
  this code is only needed if no real hardware is present
*/

module.exports = {
  initialiseGameLogic,
};

function initialiseGameLogic(cpuBoard, gamelogic) {
  return new GameLogic(cpuBoard, gamelogic);
}

const STATE_INITIAL = 'INITIAL';

class GameLogic {

  constructor(cpuBoard, gamelogic) {
    this.cpuBoard = cpuBoard;
    //setSwitch
    //registerSolenoidChange
    this.gamelogic = gamelogic;
    this.currentState = STATE_INITIAL;
  }
}
