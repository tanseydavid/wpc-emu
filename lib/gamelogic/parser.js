'use strict';

module.exports = {
  readGameConfiguration,
};

function readGameConfiguration(configurationArray) {
  if (!Array.isArray(configurationArray)) {
    throw new Error('INVALID_PARAMETER_NOT_ARRAY');
  }

  const stateByName = configurationArray.reduce((accumulator, currentValue) => {
    const stateName = currentValue.name;
    accumulator[stateName] = currentValue;
    return accumulator;
  }, []);

  const stateBySwitchId = configurationArray.reduce((accumulator, currentValue) => {
    const switchIdToTrigger = currentValue.switchIdToTrigger;
    if (switchIdToTrigger) {
      accumulator[switchIdToTrigger] = currentValue;
    }
    return accumulator;
  }, []);

  _validateNextState(stateByName);

  return { stateByName, stateBySwitchId };
}

function _validateNextState(stateByName) {
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

/*
class Parser() {

  constructor(cpuBoard, gamelogic) {
    this.cpuBoard = cpuBoard;
    //setSwitch
    //registerSolenoidChange
    this.gamelogic = gamelogic;
    this.currentState = STATE_INITIAL;
  }
}*/

/*
{
  name: 'Right Trough',
  switchDownTimeMs: 1,
  switchIdToTrigger: 17,
  solenoidIdToLeaveState: 4,
  nextState: 'Shooter'
  transitionTimeMs: 5,
},
{
  name: 'Center Trough',
  switchDownTimeMs: 1,
  switchIdToTrigger: 16,
  nextState: 'Right Trough'
  transitionTimeMs: 1,
  options: 'INSTANT_LEAVE_STATE',
},
{
  name: 'Left Trough',
  switchDownTimeMs: 1,
  switchIdToTrigger: 15,
  nextState: 'Center Trough'
  transitionTimeMs: 1,
  options: 'INSTANT_LEAVE_STATE',
},
{
  name: 'Outhole',
  switchDownTimeMs: 5,
  switchIdToTrigger: 18,
  solenoidIdToLeaveState: 4,
  nextState: 'Left Trough'
  transitionTimeMs: 5,
},
{
  name: 'Drain',
  switchDownTimeMs: 1,
  nextState: 'Outhole'
  transitionTimeMs: 0,
  options: 'INSTANT_LEAVE_STATE',
},
{
  name: 'Shooter',
  switchDownTimeMs: 1,
  switchIdToTrigger: 78,
  solenoidIdToLeaveState: 9,
  //nextState: 'Ball Lane'
  transitionTimeMs: 1,
},
*/
