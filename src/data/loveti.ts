export interface LovetiQuestion {
  id: number;
  dim: string;
  text: string;
  options: { label: string; value: number }[];
}

export interface LovetiPersonality {
  id: string;
  name: string;
  description: string;
  dimensions: string[];
}

export const LOVETI_DIMENSIONS = [
  { id: 'brain', name: '恋爱脑指数', description: '恋爱在你生命中占多大比重' },
  { id: 'player', name: '海王潜质', description: '你是不是那个养鱼的人' },
  { id: 'simp', name: '舔狗指数', description: '你能为喜欢的人卑微到什么程度' },
  { id: 'cheat', name: '渣属性', description: '你有多容易伤害别人' },
  { id: 'wood', name: '木头程度', description: '你能读懂异性的暗示吗' },
  { id: 'coldwar', name: '冷战倾向', description: '吵架后你能撑多久不理人' },
  { id: 'waste', name: '恋爱废物', description: '你是不是那个永远单身的人' },
  { id: '吸渣', name: '吸渣体质', description: '你是不是特别吸引渣男渣女' },
];

export const LOVETI_QUESTIONS: LovetiQuestion[] = [
  { id: 1, dim: 'brain', text: '你现在的状态是？', options: [
    { label: '恋爱中，每天想他/她八百遍', value: 3 },
    { label: '空窗期，偶尔想谈恋爱', value: 2 },
    { label: '单身贵族，一个人也挺香', value: 1 },
  ]},
  { id: 2, dim: 'brain', text: '你刷朋友圈看到别人秀恩爱，你的反应是？', options: [
    { label: '柠檬精上身，为什么我没有', value: 3 },
    { label: '祝福点赞，假装不在乎', value: 2 },
    { label: '关我什么事，继续刷', value: 1 },
  ]},
  { id: 3, dim: 'player', text: '同时有几个人在追你/和你聊得火热？', options: [
    { label: '三个以上，这叫货比三家', value: 3 },
    { label: '一两个，刚刚好', value: 2 },
    { label: '零个，我专一的', value: 1 },
  ]},
  { id: 4, dim: 'player', text: '你会不会同时和多个相亲对象吃饭？', options: [
    { label: '会的，约会也是面试', value: 3 },
    { label: '不会，那样太累了', value: 2 },
    { label: '我一个都约不出来', value: 1 },
  ]},
  { id: 5, dim: 'simp', text: '你追人的时候能有多卑微？', options: [
    { label: '随叫随到，买单不含糊，24小时在线', value: 3 },
    { label: '主动出击几次，不行就撤', value: 2 },
    { label: '追我的人都不理，我为什么要追人', value: 1 },
  ]},
  { id: 6, dim: 'simp', text: '对方三个小时没回你消息，你会？', options: [
    { label: '连发十条，问发生了什么事', value: 3 },
    { label: '等一会再发一条', value: 2 },
    { label: '等他/她回我再回', value: 1 },
  ]},
  { id: 7, dim: 'cheat', text: '你有脚踩两条船的经历吗？', options: [
    { label: '有过，我控制不住我自己', value: 3 },
    { label: '没有，但我理解那种感觉', value: 2 },
    { label: '绝对没有，我的人品不允许', value: 1 },
  ]},
  { id: 8, dim: 'cheat', text: '分手后你会删掉前任的联系方式吗？', options: [
    { label: '删，然后发朋友圈宣告单身', value: 3 },
    { label: '留着，但不联系', value: 2 },
    { label: '留着，当朋友也行', value: 1 },
  ]},
  { id: 9, dim: 'wood', text: '有人说你"对感情迟钝"，你会？', options: [
    { label: '我就是迟钝，我不知道他/她喜欢我', value: 3 },
    { label: '不可能，我情商很高的', value: 2 },
    { label: '我比谁都敏感，只是不想承认', value: 1 },
  ]},
  { id: 10, dim: 'wood', text: '对方说"我们还是做朋友吧"，你的理解是？', options: [
    { label: '真的只是做朋友，伤心了', value: 3 },
    { label: '先做朋友，以后有机会', value: 2 },
    { label: '这是婉拒，给彼此台阶下', value: 1 },
  ]},
  { id: 11, dim: 'coldwar', text: '吵架后你能坚持多久不理对方？', options: [
    { label: '一周以上，我绝对不会先低头', value: 3 },
    { label: '一两天，看谁先忍不住', value: 2 },
    { label: '当天就和好，我受不了冷战', value: 1 },
  ]},
  { id: 12, dim: 'coldwar', text: '冷战时对方发消息说"你想多了"，你会？', options: [
    { label: '委屈到哭，但嘴上不认输', value: 3 },
    { label: '冷静分析，把话说清楚', value: 2 },
    { label: '认错撒娇，只要能和好', value: 1 },
  ]},
  { id: 13, dim: 'waste', text: '你上次谈恋爱是什么时候？', options: [
    { label: '从来没有，我与恋爱无缘', value: 3 },
    { label: '大学/高中，现在工作忙', value: 2 },
    { label: '最近，刚分手不久', value: 1 },
  ]},
  { id: 14, dim: 'waste', text: '你表白被拒的次数是？', options: [
    { label: '三次以上，我是恋爱绝缘体', value: 3 },
    { label: '一两次，正常范围', value: 2 },
    { label: '零次，追我的人更多', value: 1 },
  ]},
  { id: 15, dim: '吸渣', text: '你谈过的对象里，有没有被渣过？', options: [
    { label: '有，而且不止一次', value: 3 },
    { label: '好像有一次，但不确定', value: 2 },
    { label: '没有，我眼光很好的', value: 1 },
  ]},
  { id: 16, dim: '吸渣', text: '你的恋爱经验主要来自？', options: [
    { label: '电视剧和小说，理论经验丰富的', value: 3 },
    { label: '朋友的故事，吃瓜为主', value: 2 },
    { label: '亲身经历，吃一堑长一智', value: 1 },
  ]},
];

export const LOVETI_PERSONALITIES: LovetiPersonality[] = [
  { id: 'lianaibrain', name: '恋爱脑晚期', description: '你是一个无可救药的恋爱脑。恋爱在你生命中的占比超过事业、友情、甚至亲情。你的喜怒哀乐完全被对方支配，一天不见就想念，三天不见就崩溃。你的生活就是围绕着他/她转，你是那种为爱可以放弃一切的人。', dimensions: ['brain', 'simp', '吸渣'] },
  { id: 'haiwang', name: '海王/海后', description: '你是那个养着一池子鱼的人。你的微信里有无数个"好朋友"，你能在多个暧昧对象之间游刃有余。你是时间管理大师，你的座右铭是：我不渣，我只是想让更多人幸福。', dimensions: ['player', 'brain', 'cheat'] },
  { id: 'tiangou', name: '终极舔狗', description: '你是那个卑微到尘埃里的人。你对喜欢的人无条件好，随叫随到，买单不含糊，被已读了还坚持发消息。你觉得你的真诚一定能感动对方，但往往感动的是你自己。', dimensions: ['simp', 'brain', 'coldwar'] },
  { id: 'zhanv', name: '时间管理大师', description: '你是那个同时谈着恋爱还能出去撩的人。你精力旺盛、魅力四射，你的日程比公司CEO还满。你能一边和这个发"晚安"，一边和那个说"在干嘛"。你是情场高手，但也是危险人物。', dimensions: ['player', 'cheat', 'wood'] },
  { id: 'mutou', name: '木头人', description: '你是那个永远读不懂暗示的人。有人对你好，你觉得是正常社交。有人约你，你以为是普通朋友。你在感情上是绝缘体，等你反应过来，人家早就放弃了。你是那个让追求者绝望的存在。', dimensions: ['wood', 'waste', 'brain'] },
  { id: 'lengzhan', name: '冷战大师', description: '你是那个吵架后能坚持一个月不理人的人。你觉得低头就是认输，宁可失去这段关系也不愿意先开口。你是冷战王者，你用冷暴力打败了无数前任。你的感情死于冷暴力，但你永远不觉得自己有错。', dimensions: ['coldwar', 'cheat', '吸渣'] },
  { id: 'lianaifeiwu', name: '恋爱废物', description: '你是那个永远无法脱单的人。你的恋爱经验为零，你的感情生活是一片荒原。你不是不想谈恋爱，你是不知道怎么谈。你是那种嘴上说单身挺好，其实连暧昧都没有过的人。', dimensions: ['waste', 'wood', 'brain'] },
  { id: 'xizha', name: '吸渣体质', description: '你是那个特别容易吸引渣男渣女的人。你遇到的每一任都有问题，你的感情史就是一部血泪史。你总是在问"为什么我遇到的总是这种人"，但从来不反思自己的问题。', dimensions: ['吸渣', 'brain', 'simp'] },
  { id: 'lianaijun', name: '恋爱军师', description: '你是一个理论经验丰富的恋爱大师。你没谈过几次恋爱，但你看过的小说和电视剧能写一本百科全书。你是朋友们的恋爱顾问，什么问题都能分析得头头是道，但轮到自己就歇菜。', dimensions: ['brain', 'wood', '吸渣'] },
  { id: 'gubeiai', name: '错过党领袖', description: '你是那个永远在错过的人。你喜欢的人不喜欢你，喜欢你的人你不喜欢。你总是在错的时间遇到对的人，或者对的时间遇到错的人。你的感情就是一部错过史。', dimensions: ['wood', 'waste', 'brain'] },
  { id: 'anman', name: '暗恋高手', description: '你是那个默默喜欢一个人好几年都不敢表白的人。你能为了一个人换一座城市，你能在人群里一眼找到他/她，但你永远站在原地不敢靠近。你是胆小鬼，你的爱只感动了你自己。', dimensions: ['simp', 'wood', 'coldwar'] },
  { id: 'shuangzi', name: '人间清醒', description: '你是那个看透了爱情本质的人。你不是不想谈恋爱，你是觉得一个人也挺好。你见过太多分分合合，你选择保护自己。你是那种最酷的单身贵族，没人能撩动你的心。', dimensions: ['brain', 'waste', 'coldwar'] },
];

export function findLovetiBest(answers: Record<number, number>): { personality: LovetiPersonality; similarity: number } {
  const dimScores: Record<string, number> = {};
  
  LOVETI_QUESTIONS.forEach(q => {
    const val = answers[q.id] || 0;
    dimScores[q.dim] = (dimScores[q.dim] || 0) + val;
  });
  
  let best = LOVETI_PERSONALITIES[0];
  let bestSim = 0;
  
  for (const p of LOVETI_PERSONALITIES) {
    let score = 0;
    p.dimensions.forEach(d => {
      const ds = dimScores[d] || 2;
      if (d === 'brain' && ds >= 5) score += 4;
      else if (d === 'player' && ds >= 5) score += 4;
      else if (d === 'simp' && ds >= 5) score += 4;
      else if (d === 'cheat' && ds >= 5) score += 4;
      else if (d === 'wood' && ds >= 5) score += 4;
      else if (d === 'coldwar' && ds >= 5) score += 4;
      else if (d === 'waste' && ds >= 5) score += 4;
      else if (d === '吸渣' && ds >= 5) score += 4;
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
