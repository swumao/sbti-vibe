export interface TouziQuestion {
  id: number;
  dim: string;
  text: string;
  options: { label: string; value: number }[];
}

export interface TouziPersonality {
  id: string;
  name: string;
  description: string;
  dimensions: string[];
}

export const TOUZI_DIMENSIONS = [
  { id: 'risk', name: '风险承受', description: '亏损多少你能面不改色' },
  { id: 'info', name: '信息处理', description: '面对利好利空消息的反应速度' },
  { id: 'emo', name: '情绪稳定', description: '账户翻绿时你的心理状态' },
  { id: 'herd', name: '从众程度', description: '听说大家都在买时你的选择' },
  { id: 'learn', name: '学习能力', description: '愿意花多少时间研究一只股票' },
  { id: 'expect', name: '收益预期', description: '你觉得自己能年化多少' },
  { id: 'patience', name: '持仓耐心', description: '持有一只套牢股你能撑多久' },
  { id: 'loss', name: '亏损应对', description: '腰斩之后你的第一反应' },
];

export const TOUZI_QUESTIONS: TouziQuestion[] = [
  { id: 1, dim: 'risk', text: '你现在有10万，以下哪种场景你更接受？', options: [
    { label: '50%概率翻倍，50%概率归零', value: 3 },
    { label: '80%概率赚20%，20%概率亏10%', value: 2 },
    { label: '100%赚5%，没有任何风险', value: 1 },
  ]},
  { id: 2, dim: 'risk', text: '你的朋友圈在讨论某只"必涨股"，你会？', options: [
    { label: '立刻all in，这是财富自由的机会', value: 3 },
    { label: '先观望，小仓位试试水', value: 2 },
    { label: '呵呵，这种消息听听就行了', value: 1 },
  ]},
  { id: 3, dim: 'info', text: '你通常通过什么渠道做投资决策？', options: [
    { label: '自己研究财报、行业数据、技术指标', value: 1 },
    { label: '看大V分析，再自己判断', value: 2 },
    { label: '哪个涨买哪个，跟着感觉走', value: 3 },
  ]},
  { id: 4, dim: 'info', text: '持有的股票突然连续跌停，你会？', options: [
    { label: '连夜研究为什么跌，寻找加仓机会', value: 1 },
    { label: '等反弹到成本价再说', value: 2 },
    { label: '算了不看了，删软件等牛市', value: 3 },
  ]},
  { id: 5, dim: 'emo', text: '账户当天盈利10万，你的反应是？', options: [
    { label: '淡定，这只是今天的正常波动', value: 1 },
    { label: '晚上加个菜，今晚吃牛排', value: 2 },
    { label: '一把梭哈！牛市来了！', value: 3 },
  ]},
  { id: 6, dim: 'emo', text: '持仓股闪崩，账户一天亏了3个月工资，你会？', options: [
    { label: '平静抄底，越跌越买', value: 1 },
    { label: '先关软件，冷静一下再说', value: 2 },
    { label: '爆哭，给妈妈打电话', value: 3 },
  ]},
  { id: 7, dim: 'herd', text: '所有人都说A股要破1万点，你会？', options: [
    { label: '保持怀疑，分批减仓', value: 1 },
    { label: '跟随主流，但仓位控制住', value: 2 },
    { label: '冲冲冲！买房钱都拿出来炒', value: 3 },
  ]},
  { id: 8, dim: 'herd', text: '同事都在讨论自己的基金赚了钱，你会？', options: [
    { label: '深入研究他们买的什么，分析逻辑', value: 1 },
    { label: '问问情况，但不一定买', value: 2 },
    { label: '不能落后，立刻买同款', value: 3 },
  ]},
  { id: 9, dim: 'learn', text: '你会花多长时间研究一只股票？', options: [
    { label: '至少一周，要看完年报、行业报告、竞争对手', value: 1 },
    { label: '看几篇研报，差不多就行', value: 2 },
    { label: '研究个屁，看代码帅不帅就完了', value: 3 },
  ]},
  { id: 10, dim: 'learn', text: '你对一级市场、二级市场、北向资金这些概念？', options: [
    { label: '门清，能讲一小时不带喘的', value: 1 },
    { label: '大概知道，不深入', value: 2 },
    { label: '不知道，也不想知道', value: 3 },
  ]},
  { id: 11, dim: 'expect', text: '你觉得自己能达到的年化收益是？', options: [
    { label: '15%以上，我有这个能力', value: 3 },
    { label: '8%-15%，跑赢通胀就行', value: 2 },
    { label: '5%就不错了，保本第一', value: 1 },
  ]},
  { id: 12, dim: 'expect', text: '听到"价值投资"这个词，你的反应是？', options: [
    { label: '深表认同，时间是的朋友', value: 1 },
    { label: '听起来有道理，但我没那个耐心', value: 2 },
    { label: '割韭菜的借口罢了', value: 3 },
  ]},
  { id: 13, dim: 'patience', text: '你持有的股票被套了20%，你会？', options: [
    { label: '这是加仓的好机会，继续买入', value: 1 },
    { label: '放着吧，反正早晚会回来的', value: 2 },
    { label: '受不了了，割肉离场', value: 3 },
  ]},
  { id: 14, dim: 'patience', text: '你持仓时间最长的一只是多久？', options: [
    { label: '持有超过3年，穿越牛熊', value: 1 },
    { label: '几个月到一年之间', value: 2 },
    { label: '从来没有超过一个月', value: 3 },
  ]},
  { id: 15, dim: 'loss', text: '如果你的投资组合腰斩了，你会？', options: [
    { label: '这是市场给的礼物，继续加仓', value: 1 },
    { label: '躺平，等牛市解套', value: 2 },
    { label: '彻底销户，发誓再也不碰股市', value: 3 },
  ]},
  { id: 16, dim: 'loss', text: '你在社交媒体上看到"股市有风险"，你的感受是？', options: [
    { label: '说得对，要敬畏市场', value: 1 },
    { label: '知道，但觉得自己能跑赢', value: 2 },
    { label: '那是别人，我不一样', value: 3 },
  ]},
];

export const TOUZI_PERSONALITIES: TouziPersonality[] = [
  { id: 'caiqi', name: '韭菜', description: '你是A股的活雷锋，庄家的提款机。每次你买入就是最高点，每次卖出就是最低点。你的口号是：亏了我跑得快！但你从来没跑掉过。', dimensions: ['risk', 'herd', 'loss'] },
  { id: 'zhuangjia', name: '庄家', description: '别人恐慌时你贪婪，别人贪婪时你收割。你认识上市公司董事长，知道内幕消息，能操纵股价走势。虽然这在法律上不太好，但你这辈子没缺过钱。', dimensions: ['risk', 'info', 'emo'] },
  { id: 'changxi', name: '长期主义者', description: '你相信时间是价值的朋友。每个月定投指数基金，买入沪深300，然后忘记密码。你很少看账户，因为你知道20年后你会很有钱。', dimensions: ['patience', 'expect', 'loss'] },
  { id: 'duanxian', name: '短线操盘手', description: '你每天进出市场，追涨杀跌，日内交易。你把K线图当女朋友，把MACD当备忘录。虽然手续费交了不少，但你乐在其中。', dimensions: ['info', 'herd', 'patience'] },
  { id: 'jiazhi', name: '价值投资信徒', description: '你读完了巴菲特所有书籍，知道护城河、安全边际、能力圈。你的持仓里有一只股票叫"等待"。别人觉得你过时了，你觉得他们不懂。', dimensions: ['learn', 'patience', 'expect'] },
  { id: 'bicquan', name: '币圈神话', description: '币圈一日，人间一年。你见证过各种币的暴涨暴跌，从10万本金到资产过亿，也从过亿到归零。你的人生比过山车还刺激。', dimensions: ['risk', 'expect', 'loss'] },
  { id: 'dingtou', name: '基金定投党', description: '每个月固定一天，你会拿出工资的20%买入指数基金。你不择时，不判断市场，只是傻傻地买。你相信平均成本法能战胜一切。', dimensions: ['patience', 'expect', 'risk'] },
  { id: 'hongguan', name: '宏观分析师', description: '你关注美联储加息、俄乌战争、全球供应链。你能通过分析PMI预判股市走势。你聊天时总说"流动性陷阱"和"滞胀风险"。', dimensions: ['learn', 'info', 'expect'] },
  { id: 'foxue', name: '佛系理财人', description: '你对收益率没有任何要求，只求本金安全。你把大部分钱存银行，少部分买国债。你的理财观念是：不亏就是赢。', dimensions: ['risk', 'expect', 'loss'] },
  { id: 'ganggan', name: '杠杆赌徒', description: '你把杠杆当作财富加速器。10万本金你能借90万，满仓干。你的人生信条是：搏一搏，单车变摩托。你知道自己在刀尖上跳舞，但你不在乎。', dimensions: ['risk', 'expect', 'loss'] },
  { id: 'taodian', name: '逃顶大师', description: '你是技术分析的狂热爱好者，能看懂各种形态。你总能在最高点精准跑路，在最低点精准抄底。大家都叫你"股神"，虽然他们不知道你是模拟盘。', dimensions: ['info', 'patience', 'herd'] },
  { id: 'chaodi', name: '抄底狂魔', description: '市场跌的时候你在兴奋，因为"钻石坑"来了。你越跌越买，直到子弹打光。你觉得自己在捡便宜货，其实你在接下落的飞刀。', dimensions: ['risk', 'loss', 'expect'] },
];

// Scoring: each dim has 2 questions, each option value 1-3
// dim score 2-3=L, 4=M, 5-6=H
export function touziScoreToLevel(score: number): 'L' | 'M' | 'H' {
  if (score <= 3) return 'L';
  if (score <= 4) return 'M';
  return 'H';
}

export function findTouziBest(answers: Record<number, number>): { personality: TouziPersonality; similarity: number } {
  const dimScores: Record<string, number> = {};
  const dimOrder = TOUZI_DIMENSIONS.map(d => d.id);
  
  TOUZI_QUESTIONS.forEach(q => {
    const val = answers[q.id] || 0;
    dimScores[q.dim] = (dimScores[q.dim] || 0) + val;
  });
  
  const userPattern = dimOrder.map(d => touziScoreToLevel(dimScores[d] || 2)).join('');
  
  // Normalize to 8 chars
  const levelNum = (l: string) => l === 'L' ? 1 : l === 'M' ? 2 : 3;
  
  let best = TOUZI_PERSONALITIES[0];
  let bestSim = 0;
  
  for (const p of TOUZI_PERSONALITIES) {
    const pPattern = p.dimensions.map((d, i) => {
      const levels = ['L', 'M', 'H'];
      const baseScore = (i * 2 + 1); // roughly H for key dims
      return levels[Math.min(2, Math.floor(baseScore / 3))];
    }).join('').substring(0, 8);
    
    // Simple scoring: count matching key dimensions
    let matches = 0;
    p.dimensions.forEach((d, i) => {
      if (i < userPattern.length && userPattern[i] === (pPattern[i] || 'M')) matches++;
    });
    
    // Use dimension scores directly for matching
    let score = 0;
    p.dimensions.forEach(d => {
      const ds = dimScores[d] || 2;
      if (d === 'risk' && ds >= 5) score += 3;
      else if (d === 'patience' && ds <= 3) score += 3;
      else if (d === 'herd' && ds >= 5) score += 3;
      else if (d === 'loss' && ds >= 5) score += 3;
      else if (d === 'expect' && ds >= 5) score += 2;
      else score += (5 - Math.abs((dimScores[d] || 3) - 4));
    });
    
    const sim = Math.min(99, 60 + score);
    if (sim > bestSim) {
      bestSim = sim;
      best = p;
    }
  }
  
  return { personality: best, similarity: bestSim };
}
