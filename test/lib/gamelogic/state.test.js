'use strict';

import test from 'ava';
import State from '../../../lib/gamelogic/state';
const rules = require('./_rules.js');

test('Gamestate, should select state', (t) => {
  const state = State.buildGameState(rules.RULESET, () => {});
  state.processSwitch(18);
  t.deepEqual(state.currentState, rules.RULE_OUTHOLE);
});

test('Gamestate, should replace state', (t) => {
  let calledId = 0;
  function fakeTriggerFunction(id) {
    calledId = id;
  }
  const state = State.buildGameState(rules.RULESET, fakeTriggerFunction);
  state.processSwitch(18);
  t.is(state.currentState.name, rules.RULE_OUTHOLE.name);
  state.processSwitch(17);
  t.is(state.currentState.name, 'Right Trough');
  t.is(calledId, 0);
});

test('Gamestate, should leave state', (t) => {
  let calledId = 0;
  function fakeTriggerFunction(id) {
    calledId = id;
  }
  const state = State.buildGameState(rules.RULESET, fakeTriggerFunction);
  state.processSwitch(17);
  state.processSolenoid(4);
  t.is(state.currentState.name, 'Shooter');
  t.is(calledId, state.currentState.switchIdToTrigger);
});

test('Gamestate, should select next state', (t) => {
  let calledId = 0;
  function fakeTriggerFunction(id) {
    calledId = id;
  }
  const state = State.buildGameState(rules.RULESET, fakeTriggerFunction);
  state.processSwitch(16);
  state.executeCycle();
  t.is(state.currentState.name, 'Right Trough');
  t.is(calledId, state.currentState.switchIdToTrigger);
});
