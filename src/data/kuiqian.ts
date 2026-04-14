export interface KuiqianQuestion {
  id: number;
  dim: string;
  text: string;
  options: { label: string; value: number }[];
}

export interface KuiqianPersonality {
  id: string;
  name: string;
  description: string;
  dimensions: string[];
}

export const KUIQIAN_DIMENSIONS = [
  { id: 'adventurous', name: '冒险精神', description: '愿意为创业承担多大风险' },
  { id: 'execute', name: '执行力', description: '从想法到落地的速度' },
  { id: 'cashflow', name: '现金流意识', description: '对钱的态度和周转能力' },
  { id: 'resilient', name: '抗压能力', description: '连续失败后还能爬起来吗' },
  { id: 'social', name: '社交能力', description: '拉融资讲故事的能力' },
  { id: 'innovate', name: '创新偏好', description: '喜欢微创新还是颠覆式创业' },
  { id: 'scale', name: '规模野心', description: '想开个小店还是改变世界' },
  { id: 'family', name: '家庭权衡', description: '创业和家庭怎么平衡' },
];

export const KUIQIAN_QUESTIONS: KuiqianQuestion[] = [
  { id: 1, dim: 'adventurous', text: '你愿意拿出多少积蓄去创业？', options: [
    { label: '全部身家，搏一搏单车变摩托', value: 3 },
    { label: '50%，亏了不影响生活', value: 2 },
    { label: '只投一点点，试试水', value: 1 },
  ]},
  { id: 2, dim: 'adventurous', text: '如果创业失败欠了100万，你会？', options: [
    { label: '继续借，继续干，不成功便成仁', value: 3 },
    { label: '回去上班还债，但还会再创业', value: 2 },
    { label: '算了，老老实实打工', value: 1 },
  ]},
  { id: 3, dim: 'execute', text: '你有一个商业想法，你会怎么做？', options: [
    { label: '先想清楚再动手，三思而后行', value: 1 },
    { label: '边想边干，在迭代中完善', value: 2 },
    { label: '先干再说，想法不值钱，执行才值钱', value: 3 },
  ]},
  { id: 4, dim: 'execute', text: '你的产品需要3个月上线，你会？', options: [
    { label: '详细规划，每天对照甘特图', value: 1 },
    { label: '有大致计划，灵活调整', value: 2 },
    { label: '不需要计划，干就完了', value: 3 },
  ]},
  { id: 5, dim: 'cashflow', text: '账上只剩够活3个月的钱，你会？', options: [
    { label: '省着花，拼命找融资', value: 1 },
    { label: '先跑收入，哪怕不择手段', value: 2 },
    { label: '无所谓，反正下个月就有钱了', value: 3 },
  ]},
  { id: 6, dim: 'cashflow', text: '有人想免费占你公司10%股份，你会？', options: [
    { label: '不给，股份比命还重要', value: 1 },
    { label: '可以谈，但要明确贡献', value: 2 },
    { label: '给！资源比股份值钱', value: 3 },
  ]},
  { id: 7, dim: 'resilient', text: '你的第三个项目又失败了，你会？', options: [
    { label: '休息一下，分析失败原因再出发', value: 1 },
    { label: '擦干眼泪，继续第四个', value: 2 },
    { label: '创业不适合我，我还是打工吧', value: 3 },
  ]},
  { id: 8, dim: 'resilient', text: '员工当着所有人提了反对意见，你会？', options: [
    { label: '虚心接受，当场表扬', value: 1 },
    { label: '表面接受，私下沟通', value: 2 },
    { label: '我是老板，我说了算', value: 3 },
  ]},
  { id: 9, dim: 'social', text: '你在投资人面前介绍项目时，你更像？', options: [
    { label: '讲故事，谈愿景，画大饼', value: 3 },
    { label: '讲数据，摆事实，给信心', value: 2 },
    { label: '实事求是，不会的就说不会', value: 1 },
  ]},
  { id: 10, dim: 'social', text: '你需要找一个合伙人，你会通过什么方式？', options: [
    { label: '在朋友圈子里找认识多年的老友', value: 1 },
    { label: '在创业者社群/活动中认识', value: 2 },
    { label: '随便找个能出钱的就行', value: 3 },
  ]},
  { id: 11, dim: 'innovate', text: '你更想做什么类型的创业？', options: [
    { label: '原创技术/产品，从0到1', value: 3 },
    { label: '在已有模式上做改进优化', value: 2 },
    { label: '直接复制成熟模式，本地化运营', value: 1 },
  ]},
  { id: 12, dim: 'innovate', text: '你喜欢看哪种创业故事？', options: [
    { label: '乔布斯式，改变世界那种', value: 3 },
    { label: '稻盛和夫式，匠人精神那种', value: 2 },
    { label: '隔壁老王开包子铺赚钱那种', value: 1 },
  ]},
  { id: 13, dim: 'scale', text: '你创业的最终目标是？', options: [
    { label: '上市敲钟，走向全球', value: 3 },
    { label: '被大厂收购，实现财务自由', value: 2 },
    { label: '开个稳定赚钱的小店/工作室', value: 1 },
  ]},
  { id: 14, dim: 'scale', text: '有人出1000万买你的公司，你会卖吗？', options: [
    { label: '不卖，这是我的孩子', value: 3 },
    { label: '看心情和估值，价钱合适再说', value: 2 },
    { label: '卖！落袋为安，实现小目标', value: 1 },
  ]},
  { id: 15, dim: 'family', text: '老婆说：你再创业我们就离婚，你会？', options: [
    { label: '创业要紧，家庭以后再说', value: 3 },
    { label: '沟通妥协，找个折中方案', value: 2 },
    { label: '听老婆的，先不创了', value: 1 },
  ]},
  { id: 16, dim: 'family', text: '你已经连续6个月没给家里拿过钱，你会？', options: [
    { label: '一定会焦虑，要想办法改善', value: 1 },
    { label: '跟家人解释，他们能理解', value: 2 },
    { label: '这是创业的正常代价，家人应该支持', value: 3 },
  ]},
];

export const KUIQIAN_PERSONALITIES: KuiqianPersonality[] = [
  { id: 'serial', name: '连续创业者', description: '创业是一种生活方式，不创会死。你创过一次、两次、三次...每一次都在迭代升级。你的人生不是在创业，就是在准备创业。', dimensions: ['adventurous', 'execute', 'resilient'] },
  { id: 'angel', name: '天使投资人', description: '你用自己的钱和资源支持别人的梦想。你相信授人以鱼不如授人以渔，虽然你自己也是个连续创业者。', dimensions: ['social', 'cashflow', 'scale'] },
  { id: 'parttime', name: '兼职创业者', description: '白天搬砖，晚上追梦。你是那个一边上班一边偷偷运营自己副业的人。公司上市那天你才敢告诉老板：其实我一直有自己的公司。', dimensions: ['family', 'execute', 'cashflow'] },
  { id: 'dreamer', name: '梦想家', description: '你的PPT比任何人都精美，你的愿景比任何人都宏大。只是...产品还没做出来，投资人的钱已经花光了。', dimensions: ['innovate', 'scale', 'social'] },
  { id: 'cashflow', name: '现金流猎人', description: '你不管什么愿景使命，你就管一件事：这个月能不能赚钱。你的商业逻辑简单粗暴：收到钱就是大爷。', dimensions: ['cashflow', 'execute', 'adventurous'] },
  { id: 'family', name: '家族企业继承者', description: '你爸说：接班吧，儿子。你说：我要自己创业。然后你拿了家里的钱去创了业，失败了，回来接班了。', dimensions: ['family', 'scale', 'resilient'] },
  { id: 'haigui', name: '海归创业者', description: '你在硅谷待过两年，你喜欢说"我在斯坦福的时候"。你把硅谷精神带回中国，但发现...中国市场的玩法不太一样。', dimensions: ['innovate', 'social', 'scale'] },
  { id: 'wanghong', name: '网红创业者', description: '你用粉丝创业，带货、私域、品牌联名。你的公司没有CTO，但有MCN运营。你的估值逻辑是：粉丝即资产。', dimensions: ['social', 'scale', 'cashflow'] },
  { id: 'coder', name: '程序员创业者', description: '你相信产品为王，技术碾压一切。然后发现，营销和销售比代码重要一百倍。你的合伙人应该是CEO而不是CTO。', dimensions: ['execute', 'innovate', 'adventurous'] },
  { id: 'sales', name: '销售型创始人', description: '你能把梳子卖给和尚。你不关心产品技术细节，只关心能不能卖掉。你的团队都知道：搞定客户是第一位。', dimensions: ['social', 'cashflow', 'execute'] },
  { id: 'foxiao', name: '佛系小老板', description: '你不想上市，不想融资，只想安安静静做个赚钱的小生意。你雇佣3个员工，每月流水30万，日子过得美滋滋。', dimensions: ['family', 'cashflow', 'scale'] },
  { id: 'bubble', name: '泡沫吹哨人', description: '你总是在警告别人泡沫要破了，但每次泡沫破的时候你也赔了钱。你是那个看空一切但执行力一般的悲观主义者。', dimensions: ['resilient', 'innovate', 'adventurous'] },
];

export function kuiqianScoreToLevel(score: number): 'L' | 'M' | 'H' {
  if (score <= 3) return 'L';
  if (score <= 4) return 'M';
  return 'H';
}

export function findKuiqianBest(answers: Record<number, number>): { personality: KuiqianPersonality; similarity: number } {
  const dimScores: Record<string, number> = {};
  
  KUIQIAN_QUESTIONS.forEach(q => {
    const val = answers[q.id] || 0;
    dimScores[q.dim] = (dimScores[q.dim] || 0) + val;
  });
  
  let best = KUIQIAN_PERSONALITIES[0];
  let bestSim = 0;
  
  for (const p of KUIQIAN_PERSONALITIES) {
    let score = 0;
    p.dimensions.forEach(d => {
      const ds = dimScores[d] || 2;
      if (d === 'adventurous' && ds >= 5) score += 4;
      else if (d === 'execute' && ds >= 5) score += 3;
      else if (d === 'cashflow' && ds <= 3) score += 3;
      else if (d === 'resilient' && ds <= 3) score += 3;
      else if (d === 'social' && ds >= 5) score += 3;
      else if (d === 'scale' && ds >= 5) score += 3;
      else if (d === 'family' && ds <= 3) score += 4;
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
