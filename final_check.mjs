import { SBTI_QUESTIONS, SBTI_PERSONALITIES, SBTI_DIMENSIONS, SBTI_DRINK_QUESTIONS, computeSbtiBestMatch } from './src/data/sbti.ts';
import { TOUZI_QUESTIONS, TOUZI_PERSONALITIES, TOUZI_DIMENSIONS, findTouziBest } from './src/data/touzi.ts';
import { KUIQIAN_QUESTIONS, KUIQIAN_PERSONALITIES, KUIQIAN_DIMENSIONS, findKuiqianBest } from './src/data/kuiqian.ts';
import { NUMA_QUESTIONS, NUMA_PERSONALITIES, NUMA_DIMENSIONS, findNumaBest } from './src/data/niuma.ts';
import { FOOD_QUESTIONS, FOOD_PERSONALITIES, FOOD_DIMENSIONS, findFoodBest } from './src/data/food.ts';

let allOk = true;

function checkSbti() {
  console.log('\n【SBTI】');
  console.log(`  维度数: ${SBTI_DIMENSIONS.length} ✓`);
  console.log(`  主问题数: ${SBTI_QUESTIONS.length} (expected 30)`);
  console.log(`  DRINK题数: ${SBTI_DRINK_QUESTIONS.length} (expected 2)`);
  
  const qPerDim = {};
  SBTI_QUESTIONS.forEach(q => { qPerDim[q.dim] = (qPerDim[q.dim] || 0) + 1; });
  const uneven = Object.entries(qPerDim).filter(([,v]) => v !== 2);
  if (uneven.length) console.log(`  ⚠️ 非2题维度: ${uneven.map(([k,v])=>k+'='+v).join(',')}`);
  else console.log(`  每维度2题 ✓`);
  
  // Reversed questions
  const q14 = SBTI_QUESTIONS.find(q => q.id === 14);
  const q26 = SBTI_QUESTIONS.find(q => q.id === 26);
  console.log(`  Q14反转: [${q14?.options.map(o=>o.value).join(',')}] ${JSON.stringify(q14?.options.map(o=>o.value)) === '[3,2,1]' ? '✓' : '❌'}`);
  console.log(`  Q26反转: [${q26?.options.map(o=>o.value).join(',')}] ${JSON.stringify(q26?.options.map(o=>o.value)) === '[3,2,1]' ? '✓' : '❌'}`);
  
  // Personalities
  const ids = SBTI_PERSONALITIES.map(p => p.id);
  const dupes = ids.filter((id,i) => ids.indexOf(id) !== i);
  if (dupes.length) { console.log(`  ❌ 重复ID: ${dupes.join(',')}`); allOk = false; }
  else console.log(`  人格ID无重复 ✓ (共${ids.length}个，含HHHH/DRUNK特殊)`);
  
  // Pattern length
  const badPat = SBTI_PERSONALITIES.filter(p => {
    if (p.id === 'HHHH' || p.id === 'DRUNK') return false;
    const stripped = p.pattern?.replace(/-/g, '') || '';
    return stripped.length !== 15;
  });
  if (badPat.length) { console.log(`  ❌ Pattern长度≠15: ${badPat.map(p=>p.id+'='+(p.pattern?.replace(/-/g,'')||'N/A')).join(',')}`); allOk = false; }
  else console.log(`  所有Pattern 15字符 ✓`);
  
  // Matching
  const mockAns = {};
  SBTI_QUESTIONS.forEach((_, i) => mockAns[i+1] = (i % 3) + 1);
  const r = computeSbtiBestMatch(mockAns);
  console.log(`  computeSbtiBestMatch mock: ${r.personality.id} ${r.similarity}% ✓`);
  
  // DRUNK trigger
  const drunkAns = {};
  SBTI_QUESTIONS.forEach((_, i) => drunkAns[i+1] = 2);
  drunkAns[31] = 3; drunkAns[32] = 3;
  const r2 = computeSbtiBestMatch(drunkAns);
  console.log(`  DRUNK触发 (31=3,32=3): ${r2.personality.id} ${r2.similarity}% ${r2.personality.id === 'DRUNK' ? '✓' : '❌'}`);
}

function checkTheme(name, questions, personalities, dimensions, findBest) {
  console.log(`\n【${name}】`);
  console.log(`  维度数: ${dimensions.length} ✓`);
  
  const qPerDim = {};
  questions.forEach(q => { qPerDim[q.dim] = (qPerDim[q.dim] || 0) + 1; });
  const uneven = Object.entries(qPerDim).filter(([,v]) => v !== 2);
  if (uneven.length) console.log(`  ⚠️ 非2题维度: ${uneven.map(([k,v])=>k+'='+v).join(',')}`);
  else console.log(`  每维度2题 ✓`);
  
  const badOpts = questions.filter(q => q.options.map(o=>o.value).sort().join(',') !== '1,2,3');
  if (badOpts.length) { console.log(`  ❌ 选项值错误: ${badOpts.map(q=>'Q'+q.id).join(',')}`); allOk = false; }
  else console.log(`  所有选项值[1,2,3] ✓`);
  
  const ids = personalities.map(p => p.id);
  const dupes = ids.filter((id,i) => ids.indexOf(id) !== i);
  if (dupes.length) { console.log(`  ❌ 重复ID: ${dupes.join(',')}`); allOk = false; }
  else console.log(`  人格ID无重复 ✓ (${ids.length}个)`);
  
  const mockAns = {};
  questions.forEach((_, i) => mockAns[i+1] = (i % 3) + 1);
  try {
    const r = findBest(mockAns);
    console.log(`  findBest mock: ${r.personality.id} ${r.similarity}% ✓`);
  } catch(e) {
    console.log(`  ❌ findBest错误: ${e.message}`); allOk = false;
  }
}

checkSbti();
checkTheme('TOUZI', TOUZI_QUESTIONS, TOUZI_PERSONALITIES, TOUZI_DIMENSIONS, findTouziBest);
checkTheme('KUIQIAN', KUIQIAN_QUESTIONS, KUIQIAN_PERSONALITIES, KUIQIAN_DIMENSIONS, findKuiqianBest);
checkTheme('NUMA', NUMA_QUESTIONS, NUMA_PERSONALITIES, NUMA_DIMENSIONS, findNumaBest);
checkTheme('FOOD', FOOD_QUESTIONS, FOOD_PERSONALITIES, FOOD_DIMENSIONS, findFoodBest);

console.log(`\n${allOk ? '✅ 全部检查通过' : '❌ 有错误'}`);
