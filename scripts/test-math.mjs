import { MATH } from '../lib/runRateMath.ts';
import assert from 'assert';

console.log('--- Running MATH Verification Suite ---\n');

// 1. Annualize
console.log('Testing MATH.annualize...');
const a1 = MATH.annualize(58000, 45, 'days');
const a2 = MATH.annualize(1000, 1, 'months');
const a3 = MATH.annualize(1000, 1, 'quarters');
console.log('annualize(58000, 45, "days"):', a1);
console.log('annualize(1000, 1, "months"):', a2);
console.log('annualize(1000, 1, "quarters"):', a3);
assert(Math.abs(a1 - 470444.4444) < 0.01, 'a1 should be ~470444.44');
assert.strictEqual(a2, 12000, 'a2 should be 12000');
assert.strictEqual(a3, 4000, 'a3 should be 4000');
console.log('✓ MATH.annualize passed\n');

// 2. ParseOvers
console.log('Testing MATH.parseOvers...');
const pValid1 = MATH.parseOvers('12.3');
const pValid2 = MATH.parseOvers('20');
const pValid3 = MATH.parseOvers('0.5');
const pInvalid1 = MATH.parseOvers('15.7');
const pInvalid2 = MATH.parseOvers('12.7');
const pInvalid3 = MATH.parseOvers('abc');

console.log("parseOvers('12.3'):", pValid1, '(expected: 75)');
console.log("parseOvers('20'):", pValid2, '(expected: 120)');
console.log("parseOvers('0.5'):", pValid3, '(expected: 5)');
console.log("parseOvers('15.7'):", pInvalid1, '(expected: NaN)');
console.log("parseOvers('12.7'):", pInvalid2, '(expected: NaN)');
console.log("parseOvers('abc'):", pInvalid3, '(expected: NaN)');

assert.strictEqual(pValid1, 75, "'12.3' should equal 75 balls");
assert.strictEqual(pValid2, 120, "'20' should equal 120 balls");
assert.strictEqual(pValid3, 5, "'0.5' should equal 5 balls");
assert(Number.isNaN(pInvalid1), "'15.7' should be NaN");
assert(Number.isNaN(pInvalid2), "'12.7' should be NaN");
assert(Number.isNaN(pInvalid3), "'abc' should be NaN");
console.log('✓ MATH.parseOvers passed\n');

// 3. Chase
console.log('Testing MATH.chase...');
const balls75 = MATH.parseOvers('12.3');
const c = MATH.chase({ overs: 20, balls: balls75, runs: 98, target: 176, wkts: 4 });
console.log('chase result -> crr:', c.crr, 'left:', c.left, 'rrr:', c.rrr, 'needed:', c.needed);
assert.strictEqual(c.crr, 7.84, 'CRR should be 7.84');
assert.strictEqual(c.left, 45, 'Balls left should be 45');
assert.strictEqual(c.rrr, 10.4, 'RRR should be 10.4');
assert.strictEqual(c.needed, 78, 'Needed should be 78');
console.log('✓ MATH.chase passed\n');

// 4. NRR
console.log('Testing MATH.nrr...');
const matchData = [
  { rf: 182, bf: 120, ra: 165, bb: 112 },
  { rf: 148, bf: 105, ra: 147, bb: 120 },
  { rf: 119, bf: 120, ra: 124, bb: 91 },
];
const nrrRes = MATH.nrr(matchData);
console.log('NRR result -> nrr:', nrrRes.nrr, 'formatted:', nrrRes.formattedNrr);
assert.strictEqual(nrrRes.nrr, -0.29, 'NRR should be -0.29');
assert.strictEqual(nrrRes.formattedNrr, '-0.290', 'Formatted NRR should be -0.290');
console.log('✓ MATH.nrr passed\n');

console.log('=== ALL TESTS PASSED SUCCESSFULLY ===');
