import { computeSbtiBestMatch } from './src/data/sbti.ts';

// Test: normal answer (no drink trigger) - should NOT get DRUNK
const normalAnswers = {};
for (let i = 1; i <= 30; i++) normalAnswers[i] = 1; // all answered with 1 (L for most dims)
const r1 = computeSbtiBestMatch(normalAnswers);
console.log('All L (1):', r1.personality.id, r1.similarity + '%', r1.personality.id === 'CTRL' ? '✓' : '✗');

// Test: DRUNK trigger (both drink Q31, Q32 = 3)
const drunkAnswers = {};
for (let i = 1; i <= 30; i++) drunkAnswers[i] = 2; // all M
drunkAnswers[31] = 3; // drink Q1 = high
drunkAnswers[32] = 3; // drink Q2 = high → score = 6 >= 5 → DRUNK
const r2 = computeSbtiBestMatch(drunkAnswers);
console.log('With DRINK trigger:', r2.personality.id, r2.similarity + '%', r2.personality.id === 'DRUNK' ? '✓' : '✗');

// Test: normal high scores (all 3 = H) without drink trigger
const highAnswers = {};
for (let i = 1; i <= 30; i++) highAnswers[i] = 3; // all H
const r3 = computeSbtiBestMatch(highAnswers);
console.log('All H (3):', r3.personality.id, r3.similarity + '%', r3.personality.id === 'HHHH' ? '✓' : '✗');

// Test: mixed - should get some interesting type
const mixed = { 1:3,2:3,3:1,4:2,5:3,6:1,7:2,8:3,9:1,10:2,11:3,12:1,13:2,14:1,15:3,16:2,17:1,18:3,19:2,20:1,21:3,22:2,23:1,24:3,25:2,26:1,27:3,28:2,29:1,30:3 };
const r4 = computeSbtiBestMatch(mixed);
console.log('Mixed:', r4.personality.id, r4.similarity + '%');

// Verify DRUNK is in the list
import { SBTI_PERSONALITIES } from './src/data/sbti.ts';
console.log('DRUNK in list:', SBTI_PERSONALITIES.find(p => p.id === 'DRUNK') ? '✓' : '✗');
console.log('Total personalities:', SBTI_PERSONALITIES.length, SBTI_PERSONALITIES.length === 25 ? '✓' : '✗ (expected 25)');
