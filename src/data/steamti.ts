export interface SteamtiQuestion {
  id: number;
  dim: string;
  text: string;
  options: { label: string; value: number }[];
}

export interface SteamtiPersonality {
  id: string;
  name: string;
  description: string;
  dimensions: string[];
}

export const STEAMTI_DIMENSIONS = [
  { id: 'gan', name: '肝帝指数', description: '你能为游戏通宵几晚' },
  { id: 'kira', name: '氪金指数', description: '你愿意为游戏花多少钱' },
  { id: 'saltfish', name: '咸鱼程度', description: '你是肝帝还是咸鱼' },
  { id: 'luck', name: '欧皇指数', description: '你是欧皇还是非酋' },
  { id: 'social', name: '社交模式', description: '你玩游戏喜欢组队还是单刷' },
  { id: 'xianzhi', name: '现充属性', description: '你在游戏外的生活有多丰富' },
  { id: 'erciyuan', name: '二次元浓度', description: '你有多宅' },
  { id: 'gamefan', name: '游戏狂热', description: '游戏在你生命中占多大比重' },
];

export const STEAMTI_QUESTIONS: SteamtiQuestion[] = [
  { id: 1, dim: 'gan', text: '你上次通宵打游戏是什么时候？', options: [
    { label: '上周，这周还在熬夜', value: 3 },
    { label: '偶尔，大学时候有过', value: 2 },
    { label: '从不，我作息规律', value: 1 },
  ]},
  { id: 2, dim: 'gan', text: '你玩游戏的时候会在意活动截止时间吗？', options: [
    { label: '必须全勤，一天都不能落', value: 3 },
    { label: '尽量参与，不强求', value: 2 },
    { label: '什么活动？不存在的', value: 1 },
  ]},
  { id: 3, dim: 'kira', text: '你在游戏里充过的钱总共大概多少？', options: [
    { label: '五位数以上，我是氪佬', value: 3 },
    { label: '三位数以内，微氪', value: 2 },
    { label: '零，我白嫖到底', value: 1 },
  ]},
  { id: 4, dim: 'kira', text: '看到想要的皮肤/角色，你会？', options: [
    { label: '立刻下单，不犹豫', value: 3 },
    { label: '等打折，等保底', value: 2 },
    { label: '看看就行，绝对不充', value: 1 },
  ]},
  { id: 5, dim: 'saltfish', text: '你的steam游戏库里有几成是下载后没玩过的？', options: [
    { label: '九成，我是喜加一选手', value: 3 },
    { label: '五成，有在玩一些', value: 2 },
    { label: '全部都玩过，我是肝帝', value: 1 },
  ]},
  { id: 6, dim: 'saltfish', text: '你的游戏状态通常是？', options: [
    { label: '下载了=玩过了', value: 3 },
    { label: '偶尔玩玩，不上瘾', value: 2 },
    { label: '每天都在肝，停不下来', value: 1 },
  ]},
  { id: 7, dim: 'luck', text: '你抽卡的最长记录是？', options: [
    { label: '吃井（90/180抽）以上，我是非酋本酋', value: 3 },
    { label: '保底出货，正常运气', value: 2 },
    { label: '经常一抽就中，我是天选之人', value: 1 },
  ]},
  { id: 8, dim: 'luck', text: '你开出过稀有物品/SSR吗？', options: [
    { label: '经常，我是欧皇', value: 1 },
    { label: '偶尔，运气还行', value: 2 },
    { label: '几乎没有，我怀疑自己被针对了', value: 3 },
  ]},
  { id: 9, dim: 'social', text: '你玩游戏一般？', options: [
    { label: '单刷，一个人静静享受', value: 3 },
    { label: '看情况，有的游戏单刷有的组队', value: 2 },
    { label: '组队开黑，语音不能断', value: 1 },
  ]},
  { id: 10, dim: 'social', text: '你会和游戏里的陌生人聊天吗？', options: [
    { label: '经常加好友，一起组队', value: 1 },
    { label: '偶尔，但不会深入', value: 2 },
    { label: '从不，游戏是我一个人的世界', value: 3 },
  ]},
  { id: 11, dim: 'xianzhi', text: '你周末一般怎么过？', options: [
    { label: '打游戏，一打就是一整天', value: 3 },
    { label: '偶尔游戏，主要在外面浪', value: 2 },
    { label: '不打游戏，户外活动爱好者', value: 1 },
  ]},
  { id: 12, dim: 'xianzhi', text: '你交新朋友的主要渠道是？', options: [
    { label: '游戏里认识的战友', value: 3 },
    { label: '工作/学习/朋友介绍', value: 2 },
    { label: '社交app、聚会、俱乐部', value: 1 },
  ]},
  { id: 13, dim: 'erciyuan', text: '你的房间里有什么？', options: [
    { label: '手办、挂画、周边堆满', value: 3 },
    { label: '有一些，不算多', value: 2 },
    { label: '没有，我对二次元没兴趣', value: 1 },
  ]},
  { id: 14, dim: 'erciyuan', text: '你在B站关注的UP主类型主要是？', options: [
    { label: '游戏、番剧、二次元相关', value: 3 },
    { label: '各种都有，不专一', value: 2 },
    { label: '知识区、生活区，不看二次元', value: 1 },
  ]},
  { id: 15, dim: 'gamefan', text: '你给游戏评分的主要标准是？', options: [
    { label: '肝度肝不肝，氪金贵不贵', value: 3 },
    { label: '剧情、玩法、人物设计', value: 2 },
    { label: '这游戏能不能让我社交到人', value: 1 },
  ]},
  { id: 16, dim: 'gamefan', text: '你觉得自己是"玩家"还是"游戏里的人在玩我"？', options: [
    { label: '游戏是我人生的一部分，我是真正的玩家', value: 1 },
    { label: '偶尔上瘾，但大部分时间控制得住', value: 2 },
    { label: '我是那个被游戏玩的人，戒不掉', value: 3 },
  ]},
];

export const STEAMTI_PERSONALITIES: SteamtiPersonality[] = [
  { id: 'gandi', name: '终极肝帝', description: '你是那个为游戏可以通宵达旦的人。别人睡觉你在刷副本，别人上班你在做日常，你的肝是游戏公司送的。你的人生信条是：只要肝不死，就往死里肝。你的成就是用时间和黑眼圈换来的。', dimensions: ['gan', 'kira', 'gamefan'] },
  { id: 'kirajo', name: '氪金大佬', description: '你是那个一掷千金的氪佬。你的付款记录是游戏公司的财报支柱，你的信用卡账单让家人目瞪口呆。你觉得钱能解决的事情都不叫事情，你的人生哲学是：能用钱解决的，都是小事。', dimensions: ['kira', 'luck', 'saltfish'] },
  { id: 'xianyu', name: '咸鱼玩家', description: '你是那个下载了游戏就算玩过的人。你的steam库是游戏博物馆，你的在线时长是0。你的游戏状态是：用 Steam 启动游戏，然后关闭Steam。你是那种"佛系"玩家，输赢不重要，开心就好。', dimensions: ['saltfish', 'xianzhi', 'gamefan'] },
  { id: 'ouhuang', name: '天选欧皇', description: '你是那个运气逆天的人。别人吃井你一抽就中，别人刷一周不出货你十分钟就满级。你的运气好到你怀疑人生，你觉得这世界上有bug就因为你。你是众非酋羡慕嫉妒恨的对象。', dimensions: ['luck', 'kira', 'saltfish'] },
  { id: 'feiqiu', name: '非酋本酋', description: '你是那个被游戏针对的人。你的保底记录是传奇，你的抽卡运气是反向的。你刷副本掉落的永远是狗粮，你抽到的永远是仓管。你怀疑游戏对你有偏见，但事实是你就是天选倒霉蛋。', dimensions: ['luck', 'gan', 'gamefan'] },
  { id: 'siketame', name: '社恐死宅', description: '你是那个在游戏里都社恐的人。你组队都要犹豫半天，你进语音浑身不自在，你和陌生人说话会紧张。你是那种在游戏里也喜欢一个人待着的人，你的世界不需要别人参与。', dimensions: ['social', 'erciyuan', 'xianzhi'] },
  { id: 'xianchong', name: '现充玩家', description: '你是那个既能玩游戏又能出门浪的人。你白天现充，晚上开黑，周末户外活动照常进行。你的生活丰富多彩，你的游戏技术也不差。你是人生赢家，游戏只是你生活的一小部分。', dimensions: ['xianzhi', 'social', 'gamefan'] },
  { id: 'erciyuann', name: '二次元死忠', description: '你是那个二次元浓度超标的人。你的房间是手办柜，你的衣柜是痛衣，你的手机壳是动漫角色。你只玩二次元游戏，只看二次元番剧，你的世界就是2D的。你觉得现实世界无聊，只有二次元才有纯粹的美。', dimensions: ['erciyuan', 'gamefan', 'saltfish'] },
  { id: 'wanmeitian', name: '完美主义者', description: '你是那个全图鉴、全成就、全收集的人。你不能容忍任何遗漏，你的游戏必须是100%完成度。你为了一点小小的成就愿意肝上一周，你的人生不允许遗憾。你的存档是完美的，你不是。', dimensions: ['gan', 'gamefan', 'kira'] },
  { id: 'liulanyouxi', name: '跟风玩家', description: '你是那个什么火玩什么的人。别人玩什么你就玩什么，热门游戏一个不落。你的游戏品味由算法决定，你永远在追潮流。但也因此你玩过很多游戏，却很少深入任何一个。', dimensions: ['saltfish', 'social', 'xianzhi'] },
  { id: 'zhubo', name: '云玩家/云观众', description: '你是那个看别人玩游戏比自己玩更开心的人。你的steam库是空的，但你的B站游戏视频收藏夹是满的。你对游戏的了解全靠视频通关，你是游戏界的评论大师——从未上场，却指点江山。', dimensions: ['saltfish', 'erciyuan', 'gamefan'] },
  { id: 'shengou', name: '神仙玩家', description: '你是那个技术和运气都在线的人。你不仅玩得好，还愿意花时间和金钱，你对游戏的热爱是全方位的。你是朋友眼中的游戏大神，是各种榜单上的常客。你的人生因游戏而精彩。', dimensions: ['gan', 'kira', 'gamefan'] },
];

export function findSteamtiBest(answers: Record<number, number>): { personality: SteamtiPersonality; similarity: number } {
  const dimScores: Record<string, number> = {};
  
  STEAMTI_QUESTIONS.forEach(q => {
    const val = answers[q.id] || 0;
    dimScores[q.dim] = (dimScores[q.dim] || 0) + val;
  });
  
  let best = STEAMTI_PERSONALITIES[0];
  let bestSim = 0;
  
  for (const p of STEAMTI_PERSONALITIES) {
    let score = 0;
    p.dimensions.forEach(d => {
      const ds = dimScores[d] || 2;
      if (d === 'gan' && ds >= 5) score += 4;
      else if (d === 'kira' && ds >= 5) score += 4;
      else if (d === 'saltfish' && ds >= 5) score += 4;
      else if (d === 'luck' && ds <= 3) score += 4;
      else if (d === 'luck' && ds >= 5) score += 3;
      else if (d === 'social' && ds >= 5) score += 4;
      else if (d === 'xianzhi' && ds <= 3) score += 4;
      else if (d === 'erciyuan' && ds >= 5) score += 4;
      else if (d === 'gamefan' && ds <= 3) score += 3;
      else if (d === 'gamefan' && ds >= 5) score += 4;
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
