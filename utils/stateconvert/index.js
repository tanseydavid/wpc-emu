'use strict';

const convert = require('./convert');

const t2 = require('./t2');
const hurricane = require('./hurricane');
const mm = require('./mm');

console.log('## T2');
console.log(convert.convertState(t2));

console.log('\n## HURRICANE');
console.log(convert.convertState(hurricane));

console.log('\n## MM');
console.log(convert.convertState(mm));
