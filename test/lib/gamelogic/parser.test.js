'use strict';

import test from 'ava';
import Parser from '../../../lib/gamelogic/parser';
const rules = require('./_rules.js');

test('Gamelogic, parser', (t) => {
  const result = Parser.readGameConfiguration(rules.RULESET);
  const stateByName = result.stateByName;
  const stateBySwitchId = result.stateBySwitchId;

  console.log('stateBySwitchId', stateBySwitchId);
  console.log('stateByName', stateByName);
  t.deepEqual(stateByName.Outhole, rules.RULE_OUTLANE);
  t.deepEqual(stateBySwitchId[18], rules.RULE_OUTLANE);
});

test('Gamelogic, invalid next state', (t) => {
  t.throws(() => Parser.readGameConfiguration(INVALID_RULESET), 'MISSING_STATE_Shooter');
});

const INVALID_RULESET = [
  {
    name: 'Right Trough',
    switchDownTimeMs: 1,
    switchIdToTrigger: 17,
    solenoidIdToLeaveState: 4,
    nextState: 'Shooter',
    transitionTimeMs: 5,
  },
];
