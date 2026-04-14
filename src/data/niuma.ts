export interface NiumaQuestion {
  id: number;
  dim: string;
  text: string;
  options: { label: string; value: number }[];
}

export interface NiumaPersonality {
  id: string;
  name: string;
  description: string;
  dimensions: string[];
}

export const NUMA_DIMENSIONS = [
  { id: 'obedient', name: '服从性', description: '领导说的话你信几分' },
  { id: 'fish', name: '摸鱼能力', description: '带薪wc的时间和频次' },
  { id: 'manageup', name: '向上管理', description: '让老板觉得你很忙的能力' },
  { id: 'tech', name: '技术深度', description: '技术栈的广度和深度' },
  { id: 'social', name: '社交活跃', description: '茶水间聊八卦的参与度' },
  { id: 'pressure', name: '抗压能力', description: '被KPI追杀时的状态' },
  { id: 'promo', name: '晋升欲望', description: '想不想当领导' },
  { id: 'lieflat', name: '躺平意愿', description: '想不想努力工作' },
];

export const NUMA_QUESTIONS: NiumaQuestion[] = [
  { id: 1, dim: 'obedient', text: '领导在群里发了一条你觉得很傻的决定，你会？', options: [
    { label: '立刻执行，并回复"收到，马上处理"', value: 3 },
    { label: '执行，但内心有疑虑', value: 2 },
    { label: '在群里提出反对意见', value: 1 },
  ]},
  { id: 2, dim: 'obedient', text: '领导说"这个需求很简单，今天能搞定吧"，你会？', options: [
    { label: '没问题！就算加班到凌晨也要搞定', value: 3 },
    { label: '看一下工作量，如实说需要多久', value: 2 },
    { label: '这需求一点都不简单，我要argue一下', value: 1 },
  ]},
  { id: 3, dim: 'fish', text: '上午10点和下午4点，你的状态是？', options: [
    { label: '这两个时间我分别在wc刷手机', value: 3 },
    { label: '偶尔刷一下，但大部分时间在工作', value: 2 },
    { label: '我在认真工作，从不摸鱼', value: 1 },
  ]},
  { id: 4, dim: 'fish', text: '周五下午4点30，你还有个大任务没完成，你会？', options: [
    { label: '反正没人看，周一再说', value: 3 },
    { label: '快速收尾，做个大概', value: 2 },
    { label: '认认真真完成，周末安心休息', value: 1 },
  ]},
  { id: 5, dim: 'manageup', text: '你实际工作5小时，但想让领导觉得你工作10小时，你会？', options: [
    { label: '下班后在工位多待一会再走，发个加班朋友圈', value: 3 },
    { label: '偶尔汇报进展，让领导知道我在干活', value: 2 },
    { label: '我凭本事高效，为什么要装忙', value: 1 },
  ]},
  { id: 6, dim: 'manageup', text: '领导问"这个项目进展怎么样了"，你会？', options: [
    { label: '报喜不报忧，好消息优先说', value: 3 },
    { label: '如实说，但已经准备好了解决方案', value: 2 },
    { label: '把问题和盘托出，让领导做决策', value: 1 },
  ]},
  { id: 7, dim: 'tech', text: '你对自己技术栈的了解程度是？', options: [
    { label: '我会"面向搜索引擎编程"，不懂就搜', value: 3 },
    { label: '核心领域精通，其他会用就行', value: 2 },
    { label: '每个知识点都要搞清楚底层原理', value: 1 },
  ]},
  { id: 8, dim: 'tech', text: '同事问了一个你不懂的技术问题，你会？', options: [
    { label: '不懂装懂，说个大概方向', value: 3 },
    { label: '一起研究，共同成长', value: 2 },
    { label: '直接说不懂，然后去学习', value: 1 },
  ]},
  { id: 9, dim: 'social', text: '茶水间有人在吐槽公司，你会？', options: [
    { label: '积极参与，贡献最新八卦', value: 3 },
    { label: '旁听，偶尔插嘴', value: 2 },
    { label: '假装没听到，低头走开', value: 1 },
  ]},
  { id: 10, dim: 'social', text: '公司有同事离职，你会？', options: [
    { label: '主动请吃饭，送别祝福，收集离职八卦', value: 3 },
    { label: '在群里发个祝福表情包', value: 2 },
    { label: '跟我有什么关系，继续干活', value: 1 },
  ]},
  { id: 11, dim: 'pressure', text: '季度KPI没完成，领导要你写复盘，你会？', options: [
    { label: '复盘个屁，老子不干了', value: 3 },
    { label: '应付了事，写个形式主义的文档', value: 2 },
    { label: '认真分析，找出问题根因', value: 1 },
  ]},
  { id: 12, dim: 'pressure', text: ' deadline就是明天，但进度才一半，你会？', options: [
    { label: '无所谓，跟领导说来不及了', value: 3 },
    { label: '熬夜肝，尽量搞定', value: 2 },
    { label: '提前沟通，争取延期', value: 1 },
  ]},
  { id: 13, dim: 'promo', text: '有机会竞聘管理岗，你会？', options: [
    { label: '我要当领导了！终于有权力了', value: 3 },
    { label: '看情况，晋升加薪谁不想要', value: 2 },
    { label: '不要，我就想安安静静写代码', value: 1 },
  ]},
  { id: 14, dim: 'promo', text: '你更认同以下哪种工作观？', options: [
    { label: '不想当将军的士兵不是好士兵', value: 3 },
    { label: '把手头的事做到极致，其他的随缘', value: 2 },
    { label: '工作只是生活的一部分，不要影响我享受人生', value: 1 },
  ]},
  { id: 15, dim: 'lieflat', text: '周末突然被拉去公司加班，你会？', options: [
    { label: '去nm的，周末是我的人权', value: 3 },
    { label: '去，但内心有一万只草泥马', value: 2 },
    { label: '没问题，工作需要嘛', value: 1 },
  ]},
  { id: 16, dim: 'lieflat', text: '你给自己的工作态度打分（1-10），你会打几分？', options: [
    { label: '6分，及格就行', value: 3 },
    { label: '7-8分，我还是有追求的', value: 2 },
    { label: '9-10分，我要卷死他们', value: 1 },
  ]},
];

export const NUMA_PERSONALITIES: NiumaPersonality[] = [
  { id: 'juanwang', name: '卷王', description: '你是那个每天第一个到公司、最后一个离开的人。你把加班当呼吸，把KPI当信仰。你的同事叫你"卷王"，你的老板叫你"榜样"。只是你深夜回家的时候，也会问自己：这么拼是为了什么？', dimensions: ['pressure', 'promo', 'lieflat'] },
  { id: 'fishking', name: '摸鱼达人', description: '你是时间管理大师，带薪wc的艺术家。你能用2小时完成8小时的工作量，剩下的时间都在摸鱼。你的座右铭是：工作是为了更好的摸鱼。', dimensions: ['fish', 'lieflat', 'obedient'] },
  { id: 'laoyoutiao', name: '职场老油条', description: '你在这个公司待了8年，什么妖魔鬼怪都见过。领导换了几茬，你雷打不动。你知道哪条规则是纸老虎，哪个同事是绿茶。你的工牌都比别人的厚。', dimensions: ['social', 'manageup', 'obedient'] },
  { id: 'danu', name: '技术大牛', description: '你是那个能徒手写操作系统的神人。你的代码是艺术品，你的架构是教科书。只是你不太会表达，导致每次晋升都轮不到你。', dimensions: ['tech', 'lieflat', 'social'] },
  { id: 'huiyuan', name: '会议演员', description: '你的演技可以拿奥斯卡。每次开会你都在认真记笔记，实际上你在神游太虚。你对着PPT点头的时机精准到毫秒。你的人生就是一场接一场的会议。', dimensions: ['social', 'manageup', 'fish'] },
  { id: 'beiguo', name: '背锅侠', description: '你是团队的守护神，每当出了事故，你总是第一个冲上去承担责任。虽然不是你干的，但你不愿看到同事被责骂。你的工位上贴着一张纸：吃亏是福。', dimensions: ['pressure', 'obedient', 'lieflat'] },
  { id: 'jingzhi', name: '升职加薪精', description: '你是那个每次调薪都有你名字的人。你知道怎么让老板看到你的价值，你知道什么项目能出成绩，你知道什么时候该冒头。你的人生规划精确到每一年的级别。', dimensions: ['promo', 'manageup', 'tech'] },
  { id: 'huashui', name: '划水冠军', description: '你是那个能用最小存在干完活的鬼才。你的技能树全点在"看起来很忙"上了。你的邮件永远是最长最详细的那个，虽然没几句是有用的。', dimensions: ['fish', 'manageup', 'lieflat'] },
  { id: 'lizhi', name: '离职博主', description: '你嘴上说着"干完这个月就走"，但你已经在这个公司待了3年。你每年都要发一次"裸辞倒计时"，但每次都没走。你是那个永远在准备离职的人。', dimensions: ['lieflat', 'pressure', 'social'] },
  { id: 'toolman', name: '工具人', description: '你是那个被叫去修电脑、装软件、调投影仪的前端程序员。你帮全公司解决各种杂事，但评优的时候没人想到你。你是那个默默付出不被看见的人。', dimensions: ['obedient', 'tech', 'pressure'] },
  { id: 'lvcha', name: '职场绿茶', description: '你是那个表面甜美、背地捅刀的的高手。你在领导面前永远是乖巧小绵羊，在同事面前是情报贩子。你的人脉广到你都不知道自己认识谁。', dimensions: ['social', 'manageup', 'lieflat'] },
  { id: 'xinfu', name: '老板心腹', description: '你是老板的自己人，你知道公司的所有内幕。你和老板吃饭的次数比任何人都多。你不是靠能力上去的，你是靠忠诚度上去的。', dimensions: ['manageup', 'social', 'promo'] },
];

export function findNumaBest(answers: Record<number, number>): { personality: NiumaPersonality; similarity: number } {
  const dimScores: Record<string, number> = {};
  
  NUMA_QUESTIONS.forEach(q => {
    const val = answers[q.id] || 0;
    dimScores[q.dim] = (dimScores[q.dim] || 0) + val;
  });
  
  let best = NUMA_PERSONALITIES[0];
  let bestSim = 0;
  
  for (const p of NUMA_PERSONALITIES) {
    let score = 0;
    p.dimensions.forEach(d => {
      const ds = dimScores[d] || 2;
      if (d === 'fish' && ds >= 5) score += 4;
      else if (d === 'lieflat' && ds >= 5) score += 4;
      else if (d === 'promo' && ds <= 3) score += 3;
      else if (d === 'manageup' && ds >= 5) score += 3;
      else if (d === 'social' && ds >= 5) score += 3;
      else if (d === 'pressure' && ds >= 5) score += 3;
      else if (d === 'obedient' && ds >= 5) score += 3;
      else if (d === 'tech' && ds <= 3) score += 3;
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
