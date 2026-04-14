export interface Dimension {
  id: string;
  name: string;
  description: string;
}

export interface Option {
  id: string;
  text: string;
  scores: Record<string, number>; // dimensionId -> score
}

export interface Question {
  id: number;
  text: string;
  type: 'single' | 'multiple';
  options: Option[];
}

export interface PersonalityType {
  id: string;
  name: string;
  englishName: string;
  description: string;
  dimensions: string[]; // Key dimensions this type is known for
}

export const DIMENSIONS: Dimension[] = [
  { id: 'chaos', name: '混沌度', description: '生活秩序的崩坏程度' },
  { id: 'logic', name: '逻辑力', description: '脑回路的直线程度' },
  { id: 'empathy', name: '共情力', description: '对他人痛苦的感知力' },
  { id: 'greed', name: '贪婪值', description: '对物质与权力的渴望' },
  { id: 'lazy', name: '懒惰指数', description: '能躺着绝不坐着的决心' },
  { id: 'arrogance', name: '傲慢度', description: '看谁都像NPC的程度' },
  { id: 'creative', name: '创造力', description: '不按套路出牌的能力' },
  { id: 'social', name: '社交电量', description: '人群中能撑多久不爆炸' },
  { id: 'risk', name: '冒险精神', description: '作死边缘试探的频率' },
  { id: 'detail', name: '细节控', description: '对像素级错误的容忍度' },
  { id: 'ambition', name: '野心值', description: '统治世界的潜意识' },
  { id: 'resilience', name: '抗压性', description: '被生活毒打后的回弹力' },
  { id: 'honesty', name: '诚实度', description: '说真话时的心虚程度' },
  { id: 'humor', name: '幽默感', description: '冷笑话的杀伤力' },
  { id: 'spicy', name: '辛辣度', description: '毒舌与吐槽的精准度' },
];

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "当你发现朋友穿了一件极其难看的衣服，你会？",
    type: 'single',
    options: [
      { id: '1a', text: "直接说：这衣服真丑，快脱了", scores: { spicy: 10, honesty: 10, empathy: -5 } },
      { id: '1b', text: "委婉暗示：这颜色挺特别的...", scores: { empathy: 5, honesty: -2, spicy: 2 } },
      { id: '1c', text: "假装没看见，保持沉默", scores: { social: -5, lazy: 5 } },
      { id: '1d', text: "拍照发朋友圈（不屏蔽他）", scores: { chaos: 10, spicy: 5, risk: 5 } },
    ]
  },
  {
    id: 2,
    text: "面对一个无法解决的逻辑悖论，你的反应是？",
    type: 'single',
    options: [
      { id: '2a', text: "死磕到底，直到CPU烧毁", scores: { logic: 10, detail: 5 } },
      { id: '2b', text: "这就是玄学，不解释", scores: { chaos: 5, logic: -5 } },
      { id: '2c', text: "关我屁事，去吃火锅", scores: { lazy: 10, social: 5 } },
      { id: '2d', text: "写篇论文反驳出题人", scores: { arrogance: 10, ambition: 5 } },
    ]
  },
  {
    id: 3,
    text: "如果世界末日明天就到，你今天会做什么？（多选）",
    type: 'multiple',
    options: [
      { id: '3a', text: "把存款全部花光", scores: { greed: 5, risk: 10 } },
      { id: '3b', text: "找前任复合再分手", scores: { chaos: 10, spicy: 5 } },
      { id: '3c', text: "在被窝里睡到最后一刻", scores: { lazy: 10, resilience: 5 } },
      { id: '3d', text: "整理房间，把书按颜色排好", scores: { detail: 10, logic: 5 } },
    ]
  },
  {
    id: 4,
    text: "在社交场合，你通常是？",
    type: 'single',
    options: [
      { id: '4a', text: "气氛组组长，全场焦点", scores: { social: 10, humor: 5 } },
      { id: '4b', text: "角落里的透明人，只想回家", scores: { social: -10, lazy: 5 } },
      { id: '4c', text: "冷眼旁观，内心疯狂吐槽", scores: { spicy: 10, arrogance: 5 } },
      { id: '4d', text: "那个一直在吃东西的人", scores: { greed: 5, lazy: 5 } },
    ]
  },
  {
    id: 5,
    text: "看到路边流浪猫，你会？",
    type: 'single',
    options: [
      { id: '5a', text: "心碎一地，立刻买猫粮", scores: { empathy: 10, greed: -2 } },
      { id: '5b', text: "拍张照发小红书求赞", scores: { social: 5, ambition: 2 } },
      { id: '5c', text: "思考它在生态链中的位置", scores: { logic: 10, arrogance: 2 } },
      { id: '5d', text: "绕路走，怕被抓伤", scores: { risk: -10, resilience: -2 } },
    ]
  },
  {
    id: 6,
    text: "老板让你周末加班，你的第一反应？",
    type: 'single',
    options: [
      { id: '6a', text: "好的老板，没问题老板", scores: { ambition: 5, resilience: 5, honesty: -5 } },
      { id: '6b', text: "立刻开始搜索劳动法", scores: { logic: 10, risk: 5 } },
      { id: '6c', text: "假装没看到消息，周一再说", scores: { lazy: 10, chaos: 5 } },
      { id: '6d', text: "直接辞职，顺便带走客户", scores: { risk: 10, ambition: 10, chaos: 10 } },
    ]
  },
  {
    id: 7,
    text: "你如何看待“成功”？",
    type: 'single',
    options: [
      { id: '7a', text: "银行卡余额后面的零", scores: { greed: 10, ambition: 5 } },
      { id: '7b', text: "能随心所欲地做个废物", scores: { lazy: 10, creative: 5 } },
      { id: '7c', text: "被所有人仰望和嫉妒", scores: { arrogance: 10, ambition: 10 } },
      { id: '7d', text: "内心平静，无欲无求", scores: { empathy: 5, resilience: 10 } },
    ]
  },
  {
    id: 8,
    text: "你的房间通常是什么样子的？",
    type: 'single',
    options: [
      { id: '8a', text: "样板间级别，一尘不染", scores: { detail: 10, logic: 5 } },
      { id: '8b', text: "乱中有序，只有我找得到", scores: { creative: 5, chaos: 5 } },
      { id: '8c', text: "垃圾场，进门需要考古", scores: { lazy: 10, chaos: 10 } },
      { id: '8d', text: "极简主义，只有一张床", scores: { logic: 5, resilience: 5 } },
    ]
  },
  {
    id: 9,
    text: "有人当众让你难堪，你会？",
    type: 'single',
    options: [
      { id: '9a', text: "当场开大，让他下不来台", scores: { spicy: 10, risk: 5 } },
      { id: '9b', text: "默默记在小本本上，等机会报复", scores: { ambition: 5, detail: 5, chaos: 2 } },
      { id: '9c', text: "尴尬一笑，内心已经想好遗言", scores: { resilience: -5, empathy: 5 } },
      { id: '9d', text: "反思自己是不是真的错了", scores: { honesty: 10, arrogance: -5 } },
    ]
  },
  {
    id: 10,
    text: "你最喜欢的电影类型是？",
    type: 'single',
    options: [
      { id: '10a', text: "烧脑悬疑，寻找漏洞", scores: { logic: 10, detail: 5 } },
      { id: '10b', text: "无脑喜剧，哈哈哈哈", scores: { humor: 10, lazy: 5 } },
      { id: '10c', text: "暗黑悲剧，体验毁灭", scores: { chaos: 5, creative: 5 } },
      { id: '10d', text: "励志大片，我命由我", scores: { ambition: 10, resilience: 5 } },
    ]
  }
];

export const PERSONALITIES: PersonalityType[] = [
  {
    id: 'chaos_master',
    name: '混沌主宰',
    englishName: 'The Chaos Master',
    description: '你的生活是一场精心策划的灾难。规则对你来说只是建议，而混乱才是你唯一的舒适区。',
    dimensions: ['chaos', 'creative', 'risk']
  },
  {
    id: 'logical_robot',
    name: '逻辑机器',
    englishName: 'The Logical Robot',
    description: '你怀疑自己其实是一段代码。情感对你来说是多余的噪音，数据和因果才是宇宙的真理。',
    dimensions: ['logic', 'detail', 'arrogance']
  },
  {
    id: 'spicy_critic',
    name: '辛辣毒评人',
    englishName: 'The Spicy Critic',
    description: '你的舌头比手术刀还精准。你不是在吐槽，你是在为这个平庸的世界进行必要的修剪。',
    dimensions: ['spicy', 'honesty', 'arrogance']
  },
  {
    id: 'lazy_philosopher',
    name: '懒惰哲学家',
    englishName: 'The Lazy Philosopher',
    description: '你深刻理解“无为而治”。如果努力不能让你立刻躺下，那努力还有什么意义？',
    dimensions: ['lazy', 'humor', 'resilience']
  },
  {
    id: 'ambitious_villain',
    name: '优雅的反派',
    englishName: 'The Elegant Villain',
    description: '你并不邪恶，你只是觉得这个世界在你的统治下会运行得更好。野心是你最好的配饰。',
    dimensions: ['ambition', 'greed', 'logic']
  },
  {
    id: 'empathy_angel',
    name: '共情天使',
    englishName: 'The Empathy Angel',
    description: '你是一块巨大的情感海绵。你甚至会为路边的一块石头感到难过，这个世界对你来说太沉重了。',
    dimensions: ['empathy', 'honesty', 'resilience']
  },
  {
    id: 'social_butterfly',
    name: '社交花蝴蝶',
    englishName: 'The Social Butterfly',
    description: '你的人脉网比互联网还复杂。你能在葬礼上交到新朋友，在超市排队时谈成一笔生意。',
    dimensions: ['social', 'humor', 'ambition']
  },
  {
    id: 'detail_obsessive',
    name: '细节偏执狂',
    englishName: 'The Detail Obsessive',
    description: '你眼中的世界是由像素和分号组成的。一个错别字就能让你整晚失眠，你是秩序的最后防线。',
    dimensions: ['detail', 'logic', 'arrogance']
  },
  {
    id: 'risk_junkie',
    name: '风险瘾君子',
    englishName: 'The Risk Junkie',
    description: '安稳的生活会让你窒息。你总是在悬崖边跳舞，因为只有在那一刻，你才觉得自己真正活着。',
    dimensions: ['risk', 'chaos', 'creative']
  },
  {
    id: 'hidden_boss',
    name: '隐藏关卡BOSS',
    englishName: 'The Hidden Boss',
    description: '你是那个在角落里微笑的人。没人知道你在想什么，但当结果揭晓时，一切都在你的掌握之中。',
    dimensions: ['ambition', 'logic', 'spicy']
  }
];
