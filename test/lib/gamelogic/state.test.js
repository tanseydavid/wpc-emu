'use strict';

import test from 'ava';
import Parser from '../../../lib/gamelogic/parser';
import State from '../../../lib/gamelogic/state';
const rules = require('./_rules.js');

test('Gamestate, should initialse', (t) => {
  const config = Parser.readGameConfiguration(rules.RULESET);
  const state = State.buildGameState(config);
  state.processSwitch(18);
  t.deepEqual(state.currentState, rules.RULE_OUTLANE);
});
