'use strict';

const RULE_OUTHOLE = {
  name: 'Outhole',
  switchDownTimeMs: 5,
  switchIdToTrigger: 18,
  solenoidIdToLeaveState: 4,
  nextState: 'Left Trough',
  transitionTimeMs: 5,
};

const RULESET = [
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
  RULE_OUTHOLE,
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
    //nextState: 'Ball Lane'
    transitionTimeMs: 1,
  },
];

module.exports = {
  RULESET,
  RULE_OUTHOLE,
};
