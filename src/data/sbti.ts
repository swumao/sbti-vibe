export interface SbtiQuestion {
  id: number;
  dim: string;
  text: string;
  options: { label: string; value: number }[];
}

export interface SbtiPersonality {
  id: string;
  name: string;
  pattern: string; // L/M/H pattern like "HHM-HMH-MHH-..."
  description: string;
  dimensions: string[];
}

export interface SbtiDimension {
  id: string;
  name: string;
  description: string;
}

// 15 dimensions: S1-S3自我, E1-E3情感, A1-A3态度, Ac1-Ac3行动驱力, So1-So3社交
export const SBTI_DIMENSIONS: SbtiDimension[] = [
  { id: 'S1', name: '自我认知', description: '对自身能力的认知程度' },
  { id: 'S2', name: '自我表达', description: '表达自我的欲望强度' },
  { id: 'S3', name: '自我防御', description: '面对批评时的反应' },
  { id: 'E1', name: '情感敏感', description: '对他人情绪的感知力' },
  { id: 'E2', name: '情感控制', description: '管理情绪的能力' },
  { id: 'E3', name: '情感依赖', description: '对他人情感的依赖程度' },
  { id: 'A1', name: '态度乐观', description: '看待事物的积极程度' },
  { id: 'A2', name: '态度固执', description: '坚持自己观点的程度' },
  { id: 'A3', name: '态度开放', description: '接受新事物的程度' },
  { id: 'Ac1', name: '行动冲动', description: '做决定的快慢程度' },
  { id: 'Ac2', name: '行动坚持', description: '完成任务的能力' },
  { id: 'Ac3', name: '行动规划', description: '计划性和条理性' },
  { id: 'So1', name: '社交主动', description: '主动社交的意愿' },
  { id: 'So2', name: '社交伪装', description: '在社交中的表演程度' },
  { id: 'So3', name: '社交享受', description: '从社交中获得能量' },
];

// Questions with valueMap: most [1,2,3], Q14 and Q26 are reversed [3,2,1]
export const SBTI_QUESTIONS: SbtiQuestion[] = [
  // S1-S3 自我
  { id: 1, dim: 'S1', text: '当你搞砸一件事时，你的第一反应是？', options: [{ label: '承认错误，总结教训', value: 1 }, { label: '先甩锅，再补救', value: 2 }, { label: '假装什么都没发生', value: 3 }] },
  { id: 2, dim: 'S1', text: '你觉得自己是个聪明人吗？', options: [{ label: '不是，我知道自己几斤几两', value: 1 }, { label: '在某些方面还行吧', value: 2 }, { label: '废话，我当然聪明', value: 3 }] },
  { id: 3, dim: 'S2', text: '在朋友圈里，你通常扮演什么角色？', options: [{ label: '默默点赞的工具人', value: 1 }, { label: '偶尔冒泡的潜水者', value: 2 }, { label: '掌控话题的气氛组长', value: 3 }] },
  { id: 4, dim: 'S2', text: '被人夸奖时，你会？', options: [{ label: '谦虚一下：没有没有', value: 1 }, { label: '心里暗爽但表面淡定', value: 2 }, { label: '必须的，继续夸', value: 3 }] },
  { id: 5, dim: 'S3', text: '有人当面指出你的错误，你会？', options: [{ label: '虚心接受，有则改之', value: 1 }, { label: '表面接受，内心记仇', value: 2 }, { label: '当场反驳：你懂个屁', value: 3 }] },
  { id: 6, dim: 'S3', text: '你会不会偷偷搜索自己的名字？', options: [{ label: '从不，我觉得很无聊', value: 1 }, { label: '偶尔，好奇而已', value: 2 }, { label: '经常，我要看看谁在说我好话', value: 3 }] },
  // E1-E3 情感
  { id: 7, dim: 'E1', text: '看到流浪猫你会？', options: [{ label: '心软，想带回家养', value: 1 }, { label: '拍张照发社交媒体', value: 2 }, { label: '关我屁事，赶路要紧', value: 3 }] },
  { id: 8, dim: 'E1', text: '朋友失恋了找你哭诉，你会？', options: [{ label: '陪着她一起骂对方', value: 1 }, { label: '理性分析，帮她冷静', value: 2 }, { label: '这有什么好哭的，删了下一个', value: 3 }] },
  { id: 9, dim: 'E2', text: '你上一次哭是什么时候？', options: [{ label: '最近一周', value: 1 }, { label: '最近一个月', value: 2 }, { label: '我不记得了，我很少哭', value: 3 }] },
  { id: 10, dim: 'E2', text: '看悲剧电影你会？', options: [{ label: '哭成泪人，停不下来', value: 1 }, { label: '眼眶湿润，但能忍住', value: 2 }, { label: '看完了：就这？', value: 3 }] },
  { id: 11, dim: 'E3', text: '一个人独处时你会？', options: [{ label: '焦虑，必须找人聊天', value: 1 }, { label: '偶尔无聊，但能享受', value: 2 }, { label: '爽爆，终于有自己的时间', value: 3 }] },
  { id: 12, dim: 'E3', text: '如果三天没人联系你，你会？', options: [{ label: '开始自我怀疑：我做错什么了？', value: 1 }, { label: '无所谓，我也没空理别人', value: 2 }, { label: '清净，完美', value: 3 }] },
  // A1-A3 态度
  { id: 13, dim: 'A1', text: '闹钟响了，你的反应是？', options: [{ label: '充满期待：今天要干大事！', value: 1 }, { label: '再睡五分钟...', value: 2 }, { label: '不想上班，不想起床，人生好累', value: 3 }] },
  { id: 14, dim: 'A1', text: '对未来的态度是？', options: [{ label: '充满信心，一切都会好的', value: 3 }, { label: '走一步看一步', value: 2 }, { label: '不敢想，想多了都是泪', value: 1 }] }, // reversed
  { id: 15, dim: 'A2', text: '和朋友吵架时，你会？', options: [{ label: '先道歉，关系最重要', value: 1 }, { label: '冷战，等对方先道歉', value: 2 }, { label: '凭什么我道歉？他错了就是错了', value: 3 }] },
  { id: 16, dim: 'A2', text: '别人说你穿衣服难看，你会？', options: [{ label: '虚心接受，改变风格', value: 1 }, { label: '考虑一下，但不一定会改', value: 2 }, { label: '我的审美不需要你指点', value: 3 }] },
  { id: 17, dim: 'A3', text: '让你尝试完全陌生的领域，你会？', options: [{ label: '兴奋，新的挑战！', value: 1 }, { label: '有点紧张，但愿意试试', value: 2 }, { label: '算了吧，我只做我擅长的事', value: 3 }] },
  { id: 18, dim: 'A3', text: '你会主动学与工作无关的新技能吗？', options: [{ label: '经常学，技多不压身', value: 1 }, { label: '偶尔，看心情', value: 2 }, { label: '学那玩意干嘛，又不加工资', value: 3 }] },
  // Ac1-Ac3 行动驱力
  { id: 19, dim: 'Ac1', text: '做重大决定时，你需要多久？', options: [{ label: '想清楚再决定，三思而后行', value: 1 }, { label: '几分钟，最多一小时', value: 2 }, { label: '看感觉，感觉对了就干', value: 3 }] },
  { id: 20, dim: 'Ac1', text: '购物时你看中一样东西会？', options: [{ label: '货比三家，研究参数', value: 1 }, { label: '差不多就买，不纠结', value: 2 }, { label: '喜欢就买，想那么多干嘛', value: 3 }] },
  { id: 21, dim: 'Ac2', text: '你立下的flag通常结局是？', options: [{ label: '一定要完成，做不到不睡觉', value: 1 }, { label: '看情况，完成一半吧', value: 2 }, { label: '第二天就忘了', value: 3 }] },
  { id: 22, dim: 'Ac2', text: '面对一个月的Deadline，你会？', options: [{ label: '第一天就开始做，从容不迫', value: 1 }, { label: '最后一周开始肝', value: 2 }, { label: '最后一天直接通宵', value: 3 }] },
  { id: 23, dim: 'Ac3', text: '你的房间/桌面通常？', options: [{ label: '井井有条，什么在哪里都知道', value: 1 }, { label: '勉强能找东西，不算太乱', value: 2 }, { label: '乱到我都不知道有什么', value: 3 }] },
  { id: 24, dim: 'Ac3', text: '你出门前会提前规划吗？', options: [{ label: '会提前查好路线、天气、时间', value: 1 }, { label: '大概想一下', value: 2 }, { label: '走到哪算哪，随性', value: 3 }] },
  // So1-So3 社交
  { id: 25, dim: 'So1', text: '在一个陌生人局里，你会？', options: [{ label: '主动搭话，这人看起来有趣', value: 1 }, { label: '等别人来找我', value: 2 }, { label: '找个角落玩手机，等聚会结束', value: 3 }] },
  { id: 26, dim: 'So1', text: '你会主动联系老朋友吗？', options: [{ label: '会的，经常主动问候', value: 3 }, { label: '偶尔想起来就联系', value: 2 }, { label: '不会，都是他们联系我', value: 1 }] }, // reversed
  { id: 27, dim: 'So2', text: '在社交媒体上，你发的内容？', options: [{ label: '真实记录，想发什么发什么', value: 1 }, { label: '精心挑选，只展示最好的一面', value: 2 }, { label: '大部分是工作需要，私人很少', value: 3 }] },
  { id: 28, dim: 'So2', text: '在群里聊天时，你会？', options: [{ label: '想说什么就说什么，真实表达', value: 1 }, { label: '看情况，有时候会委婉一点', value: 2 }, { label: '说话之前会反复斟酌，怕得罪人', value: 3 }] },
  { id: 29, dim: 'So3', text: '社交对你来说是？', options: [{ label: '充电宝，跟人聊天让我满血复活', value: 1 }, { label: '中性吧，有时享受有时累', value: 2 }, { label: '耗电池，社交完需要独处恢复', value: 3 }] },
  { id: 30, dim: 'So3', text: '周末你更喜欢？', options: [{ label: '约朋友出去玩', value: 1 }, { label: '看情况，有时候想出去有时候想宅', value: 2 }, { label: '在家躺着，谁也别叫我', value: 3 }] },
];

// Hidden drink gate questions (2 special questions after Q30)
export const SBTI_DRINK_QUESTIONS: SbtiQuestion[] = [
  { id: 31, dim: 'DRINK', text: '你酒量怎么样？', options: [{ label: '千杯不醉，来者不拒', value: 3 }, { label: '适量饮酒，偶尔小酌', value: 2 }, { label: '滴酒不沾，一口就倒', value: 1 }] },
  { id: 32, dim: 'DRINK', text: '朋友聚会一定要喝酒吗？', options: [{ label: '无酒不欢，没有酒的聚会没有灵魂', value: 3 }, { label: '有的话可以，没有也无所谓', value: 2 }, { label: '讨厌喝酒，觉得很无聊', value: 1 }] },
];

// 25 personality types with L/M/H patterns + DRUNK (special, not in main 25)
// Score mapping: 2-3→L(1), 4→M(2), 5-6→H(3)
// Pattern grouped: S1-S3-E1-E3-A1-A3-Ac1-Ac3-So1-So3 (15 chars)
// HHHH = special fallback (similarity < 60), not a real type
export const SBTI_PERSONALITIES: SbtiPersonality[] = [
  { id: 'CTRL',   name: 'CTRL',   pattern: 'LLL-LLL-LLL-LLL-LLL', description: '你是一个极度谨慎的人，做事三思而后行，从不冒险。你的人生哲学是：不作死就不会死。', dimensions: ['S1', 'A2', 'Ac1'] },
  { id: 'ATM',    name: 'ATM-er', pattern: 'HHH-HHH-HHH-HHH-HHH', description: '你是个狠人，对自己要求极高，追求完美。你的人生信条是：要么不做，要么做到极致。', dimensions: ['S1', 'S2', 'Ac2'] },
  { id: 'DIOR',   name: 'Dior-s', pattern: 'HMM-HMM-HMM-HMM-HMM', description: '你是个外表光鲜亮丽的社交达人，走到哪里都是焦点。但夜深人静时，你也会问自己：这是真实的我吗？', dimensions: ['S2', 'So1', 'So2'] },
  { id: 'BOSS',   name: 'BOSS',   pattern: 'HHM-HHM-HHM-HHM-HHM', description: '天生的领导者，有主见有魄力。你不是针对谁，而是在座的各位都是...好吧你是最强的。', dimensions: ['S2', 'A2', 'So1'] },
  { id: 'THANK',  name: 'THAN-K', pattern: 'MMM-MMM-MMM-MMM-MMM', description: '你是个知足常乐的人，不卷不躺，平平淡淡才是真。你的人生目标是：保持中等就行。', dimensions: ['A1', 'Ac2', 'So3'] },
  { id: 'OHNO',   name: 'OH-NO', pattern: 'LLL-LLL-HHH-HHH-HHH', description: '表面上唯唯诺诺，实际上心里门清。你是那种表面说好其实内心在骂的人。', dimensions: ['S3', 'E2', 'So2'] },
  { id: 'GOGO',   name: 'GOGO',   pattern: 'HHH-HHH-LLL-LLL-LLL', description: '冲动派代表，想一出是一出。你的人生是速朽的浪漫，反正明天的事明天再说。', dimensions: ['Ac1', 'A1', 'So3'] },
  { id: 'SEXY',   name: 'SEXY',   pattern: 'HHL-HHL-HHL-HHL-HHL', description: '迷之自信者，你觉得自己魅力四射，走路带风。别人怎么看你？无所谓，你只在乎自己的感受。', dimensions: ['S2', 'A2', 'So1'] },
  { id: 'LOVER',  name: 'LOVE-R', pattern: 'LLL-HHH-LLL-HHH-LLL', description: '情感丰富且敏感，你是个纯粹的浪漫主义者。为爱生为爱死，为爱半夜哭成狗。', dimensions: ['E1', 'E3', 'A1'] },
  { id: 'MUM',     name: 'MUM',    pattern: 'HHH-LLL-HHH-LLL-HHH', description: '操心命，闲不住。你是那种自己都一堆破事还要管别人的劳碌命。', dimensions: ['E1', 'Ac2', 'So1'] },
  { id: 'FAKE',   name: 'FAKE',   pattern: 'MMM-MMM-LLL-MMM-MMM', description: '伪装大师，你的社交面具比脸还多。在不同人面前你是不同的人，但你自己都不知道哪个是真的。', dimensions: ['So2', 'E2', 'A3'] },
  { id: 'OJBK',   name: 'OJBK',   pattern: 'LLL-LLL-LLL-MMM-HHH', description: '无所谓先生/小姐，什么都行，都可以，没问题。你是职场和生活中最好相处的那种人。', dimensions: ['A2', 'A3', 'So3'] },
  { id: 'MALO',   name: 'MALO',   pattern: 'LLL-MMM-MMM-MMM-MMM', description: '悲观主义者，凡事往坏处想。你的人生字典里没有"顺利"这个词，只有"祸不单行"。', dimensions: ['A1', 'E1', 'E3'] },
  { id: 'JOKER',  name: 'JOKE-R', pattern: 'HHH-HHH-MMM-MMM-MMM', description: '你是人群中的开心果，但夜深人静时，谁来逗你笑呢？幽默是你保护自己的盔甲。', dimensions: ['So1', 'E2', 'A1'] },
  { id: 'WOC',    name: 'WOC!',   pattern: 'HHH-LHH-LHH-LHH-LHH', description: '震惊党，什么事都能让你大惊小怪。你是朋友圈里转发谣言最快的那个人。', dimensions: ['E1', 'A3', 'So2'] },
  { id: 'THINK',  name: 'THIN-K', pattern: 'MMM-MMM-HHH-MMM-MMM', description: '想太多先生/小姐，一个决定能想三天。你是那种上厕所没带纸都能想到人生意义的人。', dimensions: ['Ac1', 'Ac3', 'S1'] },
  { id: 'SHIT',   name: 'SHIT',   pattern: 'LLL-LLL-LLL-LLL-HHH', description: '丧系代表，人生就是一场修行，修行就是受苦。你不是不开心，只是觉得开心很肤浅。', dimensions: ['A1', 'E1', 'So3'] },
  { id: 'ZZZZ',   name: 'ZZZZ',   pattern: 'MMM-MMM-MMM-MMM-LLL', description: '躺平达人，能躺着绝不坐着。你的人生目标就是：饿不死就行，别的都是浮云。', dimensions: ['Ac1', 'Ac2', 'A1'] },
  { id: 'POOR',   name: 'POOR',   pattern: 'HHH-LLL-LLL-LLL-LLL', description: '心比天高，命比纸薄。你有远大的理想但缺乏行动力，是空想家的典型代表。', dimensions: ['S2', 'A1', 'Ac1'] },
  { id: 'MONK',   name: 'MONK',   pattern: 'LLL-HHH-HHH-HHH-HHH', description: '佛系本佛，与世无争。你觉得一切都是最好的安排，执念是什么，能吃吗？', dimensions: ['E2', 'E3', 'So3'] },
  { id: 'IMSB',   name: 'IMSB',   pattern: 'HLL-HLL-HLL-HLL-HLL', description: '我是谁？我在哪？我要干什么？人生三问你是真的不知道。', dimensions: ['S1', 'S3', 'Ac3'] },
  { id: 'SOLO',   name: 'SOLO',   pattern: 'LLL-LLL-MMM-LLL-LLL', description: '独行侠，一个人吃饭一个人看电影一个人搬家。你不是没有朋友，只是觉得一个人更自在。', dimensions: ['So1', 'So3', 'E3'] },
  { id: 'FUCK',   name: 'FUCK',   pattern: 'HHH-HHH-HHH-MMM-LLL', description: '怼天怼地怼空气，你的人生哲学是：忍一时卵巢囊肿，退一步乳腺增生。', dimensions: ['S3', 'A2', 'E2'] },
  { id: 'DEAD',   name: 'DEAD',   pattern: 'LLL-LLL-LLL-MMM-MMM', description: '行尸走肉，早就放弃了治疗。你对生活的态度是：就这样吧，还能咋的。', dimensions: ['A1', 'Ac2', 'So1'] },
  { id: 'IMFW',   name: 'IMFW',   pattern: 'HMM-HMM-LLL-MMM-MMM', description: '我是废物，但我是快乐的废物。你的人生哲学是：既然摆烂，那就烂得彻底。', dimensions: ['A1', 'So3', 'E2'] },
  // HHHH and DRUNK are special types - kept in the array for fallback/special matching
  { id: 'HHHH',   name: 'HHHH',   pattern: 'HHH-HHH-HHH-HHH-HHH', description: '傻乐傻乐的，天塌下来当被盖。你是那种半夜被偷了钱包还能笑呵呵说"就当消灾"的人。', dimensions: ['A1', 'E2', 'So3'] },
  { id: 'DRUNK',  name: 'DRUNK',  pattern: 'HHH-HHH-HHH-HHH-HHH', description: '你是那种酒过三巡就开始讲人生真理的人。醒着的时候是普通人，喝多了就变成了哲学家兼话痨。', dimensions: ['DRINK', 'E1', 'So2'] },
];

// Helper: convert score (2-6 per dimension) to L/M/H level
export function scoreToLevel(score: number): 'L' | 'M' | 'H' {
  if (score <= 3) return 'L';
  if (score <= 4) return 'M';
  return 'H';
}

// Helper: calculate similarity between two patterns
export function calculateSimilarity(pattern1: string, pattern2: string): number {
  if (pattern1.includes('DRUNK') || pattern2.includes('DRUNK')) {
    // DRUNK type needs special handling
    return pattern1 === pattern2 ? 95 : 0;
  }
  
  const p1 = pattern1.split('-').join('');
  const p2 = pattern2.split('-').join('');
  
  let distance = 0;
  for (let i = 0; i < Math.min(p1.length, p2.length); i++) {
    const v1 = p1[i] === 'L' ? 1 : p1[i] === 'M' ? 2 : 3;
    const v2 = p2[i] === 'L' ? 1 : p2[i] === 'M' ? 2 : 3;
    distance += Math.abs(v1 - v2);
  }
  
  // Max distance is 30 (15 dimensions * 2)
  return Math.max(0, Math.round((1 - distance / 30) * 100));
}

// Helper: find best matching personality (uses pre-computed dimension scores)
export function findBestMatch(dimensionScores: Record<string, number>): { personality: SbtiPersonality; similarity: number } {
  const dimensionOrder = ['S1', 'S2', 'S3', 'E1', 'E2', 'E3', 'A1', 'A2', 'A3', 'Ac1', 'Ac2', 'Ac3', 'So1', 'So2', 'So3'];
  const patternParts: string[] = [];

  for (let i = 0; i < dimensionOrder.length; i += 3) {
    const part = dimensionOrder.slice(i, i + 3).map(d => scoreToLevel(dimensionScores[d] || 2)).join('');
    patternParts.push(part);
  }
  const userPattern = patternParts.join('-');

  // Check for DRUNK type first (if drink gate is passed)
  const drinkScore = dimensionScores['DRINK'] || 0;
  if (drinkScore >= 5) {
    const drunkPersonality = SBTI_PERSONALITIES.find(p => p.id === 'DRUNK');
    if (drunkPersonality) {
      return { personality: drunkPersonality, similarity: 95 };
    }
  }

  // Find best match
  let bestMatch = SBTI_PERSONALITIES.find(p => p.id === 'HHHH')!;
  let bestSimilarity = 0;

  for (const personality of SBTI_PERSONALITIES) {
    if (personality.id === 'DRUNK') continue;
    const similarity = calculateSimilarity(userPattern, personality.pattern);
    if (similarity > bestSimilarity) {
      bestSimilarity = similarity;
      bestMatch = personality;
    }
  }

  if (bestSimilarity < 60) {
    bestMatch = SBTI_PERSONALITIES.find(p => p.id === 'HHHH')!;
  }

  return { personality: bestMatch, similarity: bestSimilarity };
}

// Compute dimension scores from raw quiz answers and find best match
// This is the function passed to QuizEngine (matches signature of findTouziBest etc.)
export function computeSbtiBestMatch(answers: Record<number, number>): { personality: SbtiPersonality; similarity: number } {
  const dimScores: Record<string, number> = {};

  // Accumulate main 30 questions into dimension scores
  SBTI_QUESTIONS.forEach(q => {
    const val = answers[q.id];
    if (val !== undefined) {
      dimScores[q.dim] = (dimScores[q.dim] || 0) + val;
    }
  });

  // Add drink gate questions (only if present in answers)
  SBTI_DRINK_QUESTIONS.forEach(q => {
    const val = answers[q.id];
    if (val !== undefined) {
      dimScores[q.dim] = (dimScores[q.dim] || 0) + val;
    }
  });

  return findBestMatch(dimScores);
}
