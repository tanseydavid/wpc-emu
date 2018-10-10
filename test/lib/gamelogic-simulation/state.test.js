'use strict';

import test from 'ava';
import State from '../../../lib/gamelogic-simulation/state';
const rules = require('./_rules.js');

test('GamelogicSimulation State, should select initial state', (t) => {
  const state = State.buildGameState(rules.RULESET, () => {});
  t.is(state.currentState.name, 'Initial State');
});

test('GamelogicSimulation State, should select next state', (t) => {
  let calledId = 0;
  function fakeTriggerFunction(id) {
    calledId = id;
  }
  const state = State.buildGameState(rules.RULESET, fakeTriggerFunction);
  state.executeCycle();
  t.is(state.currentState.name, 'Drain');
});

test('GamelogicSimulation State, should leave state', (t) => {
  let calledId = 0;
  function fakeTriggerFunction(id) {
    calledId = id;
  }
  const state = State.buildGameState(rules.RULESET, fakeTriggerFunction);
  state.executeCycle();
  state.executeCycle();
  t.is(state.currentState.name, 'Outhole');
  const solenoidState = new Uint8Array(64).fill(0);
  solenoidState[4] = 0xFF;

  state.updateSolenoidState(solenoidState);

  t.is(state.currentState.name, 'Left Trough');
  t.is(calledId, state.currentState.switchIdToTrigger);
});
