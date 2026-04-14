export interface WuxingQuestion {
  id: number;
  dim: string;
  text: string;
  options: { label: string; value: number }[];
}

export interface WuxingPersonality {
  id: string;
  name: string;
  description: string;
  dimensions: string[];
}

export const WUXING_DIMENSIONS = [
  { id: 'wood', name: '木性', description: '生长、仁慈、创意的能量' },
  { id: 'fire', name: '火性', description: '热情、冲动、领导力' },
  { id: 'earth', name: '土性', description: '稳定、保守、诚信' },
  { id: 'metal', name: '金性', description: '决断、刚毅、原则性' },
  { id: 'water', name: '水性', description: '智慧、流动、适应力' },
  { id: 'yang', name: '阳性能量', description: '外向、主动、攻击性' },
  { id: 'yin', name: '阴性能量', description: '内敛、被动、包容性' },
  { id: 'balance', name: '五行平衡', description: '你的五行偏性程度' },
];

export const WUXING_QUESTIONS: WuxingQuestion[] = [
  { id: 1, dim: 'wood', text: '看到不平事，你会？', options: [
    { label: '路见不平一声吼，该出手时就出手', value: 3 },
    { label: '看情况，能帮就帮一把', value: 2 },
    { label: '装作没看见，不关我事', value: 1 },
  ]},
  { id: 2, dim: 'wood', text: '你更喜欢什么样的朋友？', options: [
    { label: '有理想、有追求的创业者', value: 3 },
    { label: '踏踏实实过日子的普通人', value: 2 },
    { label: '不求上进但相处轻松的', value: 1 },
  ]},
  { id: 3, dim: 'fire', text: 'team building要选活动，你会？', options: [
    { label: '密室逃脱、蹦床、KTV，要热闹', value: 3 },
    { label: '聚餐吃饭就行', value: 2 },
    { label: '能不能不去，我想回家躺着', value: 1 },
  ]},
  { id: 4, dim: 'fire', text: '和朋友吵架了，你会？', options: [
    { label: '当场吵清楚，绝不冷战', value: 3 },
    { label: '先冷静，过两天再谈', value: 2 },
    { label: '等对方来道歉', value: 1 },
  ]},
  { id: 5, dim: 'earth', text: '你对"稳定"的理解是？', options: [
    { label: '体制内、公务员、铁饭碗', value: 3 },
    { label: '有一技之长，到哪都能吃饭', value: 2 },
    { label: '稳定什么，人生就是要闯', value: 1 },
  ]},
  { id: 6, dim: 'earth', text: '你更愿意住在哪里？', options: [
    { label: '老家、故乡、有根的地方', value: 3 },
    { label: '大城市机会多，但偶尔想家', value: 2 },
    { label: '世界那么大，我想去哪去哪', value: 1 },
  ]},
  { id: 7, dim: 'metal', text: '同事找你借200块钱，你会？', options: [
    { label: '不借，我的是我的，亲兄弟明算账', value: 3 },
    { label: '问一下原因，再决定借不借', value: 2 },
    { label: '直接给，不用还了', value: 1 },
  ]},
  { id: 8, dim: 'metal', text: '你觉得诚信有多重要？', options: [
    { label: '比命还重要，说到做到', value: 3 },
    { label: '大多数时候重要，看情况', value: 2 },
    { label: '灵活一点又怎样，现实点', value: 1 },
  ]},
  { id: 9, dim: 'water', text: '你更喜欢什么天气？', options: [
    { label: '雨天，窝在家里听雨声', value: 3 },
    { label: '晴天，适合出去玩', value: 2 },
    { label: '无所谓，天气预报说啥就是啥', value: 1 },
  ]},
  { id: 10, dim: 'water', text: '遇到一个大难题，你会？', options: [
    { label: '多方打听，收集信息，想清楚再行动', value: 3 },
    { label: '凭感觉选一个方向，先干再说', value: 2 },
    { label: '走一步看一步，车到山前必有路', value: 1 },
  ]},
  { id: 11, dim: 'yang', text: '你在社交场合是？', options: [
    { label: '绝对的主角，气氛组组长', value: 3 },
    { label: '偶尔插话，不抢风头', value: 2 },
    { label: '角落里的透明人', value: 1 },
  ]},
  { id: 12, dim: 'yang', text: '你做决定的速度是？', options: [
    { label: '秒下单，从不纠结', value: 3 },
    { label: '货比三家，差不多就行', value: 2 },
    { label: '纠结三天，最后随便选一个', value: 1 },
  ]},
  { id: 13, dim: 'yin', text: '你在人群中的状态是？', options: [
    { label: '充电宝，跟人聊天让我满血复活', value: 1 },
    { label: '中性吧，有时享受有时累', value: 2 },
    { label: '耗电池，社交完需要独处恢复', value: 3 },
  ]},
  { id: 14, dim: 'yin', text: '你更喜欢？', options: [
    { label: '一个人旅行，自由自在', value: 3 },
    { label: '有人陪最好，一个人也行', value: 2 },
    { label: '必须有人陪，一个人太无聊', value: 1 },
  ]},
  { id: 15, dim: 'balance', text: '你觉得自己的人生是？', options: [
    { label: '起起落落，大起大落才精彩', value: 3 },
    { label: '平稳向上，小步快跑', value: 2 },
    { label: '平平淡淡才是真', value: 1 },
  ]},
  { id: 16, dim: 'balance', text: '你对命运的看法是？', options: [
    { label: '我命由我不由天', value: 3 },
    { label: '七分靠打拼，三分天注定', value: 2 },
    { label: '命中注定，认命吧', value: 1 },
  ]},
];

export const WUXING_PERSONALITIES: WuxingPersonality[] = [
  { id: 'mu', name: '木行人', description: '你是一个充满生机的木行人。你积极向上、爱学习、有主见，像一棵挺拔的树，不断向着阳光生长。你有很强的创造力和正义感，看不惯歪门邪道。但有时候你太固执，爱钻牛角尖，不懂得变通。', dimensions: ['wood', 'yang', 'yin'] },
  { id: 'huo', name: '火行人', description: '你是一个热情似火的火行人。你精力充沛、行动力强、敢于冒险，像一团火焰走到哪里都是焦点。你是天生的领导者，有感染力，能带动周围人的情绪。但火行人脾气也大，容易冲动，三分钟热度。', dimensions: ['fire', 'yang', 'balance'] },
  { id: 'tu', name: '土行人', description: '你是一个厚重稳定的土行人。你忠诚可靠、有责任心、注重承诺，像大地一样承载万物。你是朋友中最靠谱的那个，有事找你准没错。但土行人有时候太保守，不愿冒险，对新事物接受慢。', dimensions: ['earth', 'yin', 'yin'] },
  { id: 'jin', name: '金行人', description: '你是一个刚毅决断的金行人。你做事干脆、有原则、爱憎分明，像金属一样坚硬锋利。你是团队中的硬骨头，关键时刻能顶上去。但金行人有时候太刚，不懂柔软，容易得罪人。', dimensions: ['metal', 'yang', 'balance'] },
  { id: 'shui', name: '水行人', description: '你是一个智慧灵动的水行人。你聪明机智、适应力强、善于变通，像水一样能适应任何容器。你情商高，会说话，懂人情世故。但水行人有时候太精明，让人觉得不够真诚。', dimensions: ['water', 'yin', 'yin'] },
  { id: 'muhuo', name: '木火双行', description: '你是木与火的结合，既有木的仁慈创造，又有火的热情行动。你是一个有理想又有执行力的理想主义者。你的人生是不断向上生长的旅程，热情与坚持是你最大的武器。', dimensions: ['wood', 'fire', 'yang'] },
  { id: 'tujin', name: '土金双行', description: '你是土与金的结合，既有土的稳重厚重，又有金的决断刚毅。你是那种默默扛事儿的人，靠谱到你托付的事情绝不会有差错。但你也因为太稳重有时候缺乏情趣。', dimensions: ['earth', 'metal', 'yin'] },
  { id: 'shuimu', name: '水木双行', description: '你是水与木的结合，既有水的灵动智慧，又有木的生长创造。你是典型的智者型人格，爱学习、爱思考、爱钻研。你的脑子里永远有奇奇怪怪的想法，但往往很有道理。', dimensions: ['water', 'wood', 'yin'] },
  { id: 'huotu', name: '火土双行', description: '你是火与土的结合，既有火的热情行动，又有土的稳重踏实。你不是那种空想家，而是脚踏实地的行动派。你的座右铭是：想干就干，但干就干好。', dimensions: ['fire', 'earth', 'balance'] },
  { id: 'jinshui', name: '金水双行', description: '你是金与水的结合，既有金的刚毅决断，又有水的灵动变通。你是那种外表强硬内心柔软的人。你有很强的原则，但懂得变通，是职场和情场的老手。', dimensions: ['metal', 'water', 'balance'] },
  { id: 'wuxing', name: '五行均衡', description: '你的五行相对均衡，没有明显的偏性。这意味着你是一个全面发展的多面手，能刚能柔，能静能动。你的适应能力极强，无论在什么环境都能如鱼得水。', dimensions: ['balance', 'yin', 'yang'] },
  { id: 'pangmen', name: '旁门左道', description: '你的五行偏性非常极端，既不太阴也不太阳，走的是非主流路线。你是那种不走寻常路的人，有自己独特的人生哲学和生活方式。别人觉得你怪，但你乐在其中。', dimensions: ['balance', 'wood', 'water'] },
];

export function findWuxingBest(answers: Record<number, number>): { personality: WuxingPersonality; similarity: number } {
  const dimScores: Record<string, number> = {};
  
  WUXING_QUESTIONS.forEach(q => {
    const val = answers[q.id] || 0;
    dimScores[q.dim] = (dimScores[q.dim] || 0) + val;
  });
  
  let best = WUXING_PERSONALITIES[0];
  let bestSim = 0;
  
  for (const p of WUXING_PERSONALITIES) {
    let score = 0;
    p.dimensions.forEach(d => {
      const ds = dimScores[d] || 2;
      if (d === 'wood' && ds >= 5) score += 4;
      else if (d === 'fire' && ds >= 5) score += 4;
      else if (d === 'earth' && ds >= 5) score += 4;
      else if (d === 'metal' && ds >= 5) score += 4;
      else if (d === 'water' && ds >= 5) score += 4;
      else if (d === 'yang' && ds >= 5) score += 4;
      else if (d === 'yin' && ds >= 5) score += 4;
      else if (d === 'balance' && ds <= 3) score += 4;
      else if (d === 'balance' && ds >= 5) score += 4;
      else score += 2;
    });
    const sim = Math.min(98, 50 + score);
    if (sim > bestSim) {
      bestSim = sim;
      best = p;
    }
  }
  
  return { personality: best, similarity: bestSim };
}
