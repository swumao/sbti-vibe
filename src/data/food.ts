export interface FoodQuestion {
  id: number;
  dim: string;
  text: string;
  options: { label: string; value: number }[];
}

export interface FoodPersonality {
  id: string;
  name: string;
  description: string;
  dimensions: string[];
}

export const FOOD_DIMENSIONS = [
  { id: 'sweet', name: '甜度偏好', description: '你对甜食的抵抗能力' },
  { id: 'spicy', name: '辣度耐受', description: '吃辣能承受几级辣' },
  { id: 'adventurous', name: '猎奇程度', description: '敢不敢尝试奇怪的食物' },
  { id: 'share', name: '分享欲', description: '吃东西喜欢独享还是分享' },
  { id: 'weight', name: '体重焦虑', description: '吃了之后会不会有罪恶感' },
  { id: 'cook', name: '烹饪意愿', description: '愿意花多少时间在厨房' },
  { id: 'explore', name: '探店热情', description: '愿意跑多远去吃一家店' },
  { id: 'save', name: '省钱能力', description: '吃的方面会不会精打细算' },
];

export const FOOD_QUESTIONS: FoodQuestion[] = [
  { id: 1, dim: 'sweet', text: '路过奶茶店，你的反应是？', options: [
    { label: '必须买一杯，不喝会死', value: 3 },
    { label: '偶尔想喝了才买', value: 2 },
    { label: '奶茶是什么，我不吃甜的', value: 1 },
  ]},
  { id: 2, dim: 'sweet', text: '你对"三分糖"的定义是？', options: [
    { label: '三分糖就是全糖，少放等于没放', value: 3 },
    { label: '正常冰大杯，全糖加奶盖', value: 2 },
    { label: '我喝茶不加糖', value: 1 },
  ]},
  { id: 3, dim: 'spicy', text: '你吃辣的能力是？', options: [
    { label: '麻辣火锅特辣，辣到流汗才爽', value: 3 },
    { label: '微辣中辣都行，看菜决定', value: 2 },
    { label: '一点点辣都不行，会被辣哭', value: 1 },
  ]},
  { id: 4, dim: 'spicy', text: '朋友说"这家川菜特别辣"，你会？', options: [
    { label: '太好了！越辣越过瘾', value: 3 },
    { label: '没问题，微辣就行', value: 2 },
    { label: '能不能换一家不辣的', value: 1 },
  ]},
  { id: 5, dim: 'adventurous', text: '你吃过最奇怪的食物是？', options: [
    { label: '虫子、牛瘪、活珠子、滴血脑花...都试过', value: 3 },
    { label: '吃过毛鸡蛋和血蛤', value: 2 },
    { label: '没有，我吃饭很保守', value: 1 },
  ]},
  { id: 6, dim: 'adventurous', text: '刷到博主吃一整只烤骆驼，你的反应是？', options: [
    { label: '哪个城市的？我要去吃！', value: 3 },
    { label: '看看就好，不一定真的想吃', value: 2 },
    { label: '恶心，这种东西怎么能吃', value: 1 },
  ]},
  { id: 7, dim: 'share', text: '你吃到一个超级好吃的东西，会？', options: [
    { label: '立刻拍照发朋友圈/群，强烈推荐', value: 3 },
    { label: '好吃，但懒得发，自己知道就行', value: 2 },
    { label: '为什么要分享，我自己吃不行吗', value: 1 },
  ]},
  { id: 8, dim: 'share', text: '点外卖分量很大，你会？', options: [
    { label: '分给室友/同事，独乐乐不如众乐乐', value: 3 },
    { label: '留一半下一顿吃', value: 2 },
    { label: '自己全部干完，这是我的', value: 1 },
  ]},
  { id: 9, dim: 'weight', text: '吃完一顿大餐后，你会？', options: [
    { label: '没事，明天多跑两圈就行了', value: 3 },
    { label: '有点罪恶感，晚上不吃了', value: 2 },
    { label: '吃完就后悔，想把刚才的吐出来', value: 1 },
  ]},
  { id: 10, dim: 'weight', text: '站在体重秤上看到数字增加了，你会？', options: [
    { label: '无所谓，今天吃到的值得', value: 3 },
    { label: '下周少吃点就行', value: 2 },
    { label: '立刻反思刚才吃了什么，以后不吃了', value: 1 },
  ]},
  { id: 11, dim: 'cook', text: '你做饭的频率是？', options: [
    { label: '每天做饭，这是我的主场', value: 1 },
    { label: '偶尔心血来潮做一次', value: 2 },
    { label: '做饭？我只负责吃', value: 3 },
  ]},
  { id: 12, dim: 'cook', text: '你厨艺的水平是？', options: [
    { label: '米其林大厨水平，朋友圈美食常客', value: 1 },
    { label: '能炒几个家常菜，不至于饿死', value: 2 },
    { label: '只会泡泡面和热剩饭', value: 3 },
  ]},
  { id: 13, dim: 'explore', text: '有人推荐一家50公里外的网红店，你会？', options: [
    { label: '说走就走，为了吃跑100公里也值', value: 3 },
    { label: '看情况，周末有空就去', value: 2 },
    { label: '脑子有病吧，为了一口吃的跑这么远', value: 1 },
  ]},
  { id: 14, dim: 'explore', text: '你去一个陌生城市玩，最看重什么？', options: [
    { label: '美食！攻略全做的是吃的', value: 3 },
    { label: '风景和美食都要有', value: 2 },
    { label: '随便吃吃就行，我不在乎吃的', value: 1 },
  ]},
  { id: 15, dim: 'save', text: '你每个月在吃上的花费大概是？', options: [
    { label: '赚多少花多少，吃不能省', value: 3 },
    { label: '正常花销，不特别节省也不挥霍', value: 2 },
    { label: '能自己做就自己做，尽量省', value: 1 },
  ]},
  { id: 16, dim: 'save', text: '看到人均500的餐厅，你的想法是？', options: [
    { label: '有机会一定要试试，不贵', value: 3 },
    { label: '偶尔庆祝可以接受', value: 2 },
    { label: '疯了，我自己做饭只要5块钱', value: 1 },
  ]},
];

export const FOOD_PERSONALITIES: FoodPersonality[] = [
  { id: 'tiankuang', name: '甜食党', description: '你的血液里流淌着奶茶和蛋糕。你看到甜食就走不动路，糖分是你生命的源泉。你收藏夹里全是甜品店，朋友圈全是蛋糕照。你的人生信条是：不吃甜食，和咸鱼有什么区别。', dimensions: ['sweet', 'weight', 'share'] },
  { id: 'lashang', name: '无辣不欢', description: '你是一台行走辣椒识别器。微辣对你来说是侮辱，中辣是入门变态辣才是精髓。你吃火锅从不蘸料碟，因为油碟会掩盖辣味。你的择偶标准里有一条是：能陪我吃辣。', dimensions: ['spicy', 'adventurous', 'share'] },
  { id: 'tanlu', name: '探店博主', description: '别人周末去旅游，你周末去探店。你去过这座城市200家餐厅，知道每家店的招牌菜。你的朋友圈就是一张美食地图。你的梦想是吃遍全世界米其林，虽然钱包不允许。', dimensions: ['explore', 'adventurous', 'share'] },
  { id: 'reliaodan', name: '热量炸弹', description: '你是那个吃薯片要从底部倒、吃炸鸡要配可乐的人。你的饮食哲学是：既然要吃，就吃最胖的。你对热量有天然的免疫，健身对你来说是消耗昨天那顿火锅的方式。', dimensions: ['sweet', 'weight', 'adventurous'] },
  { id: 'qiutiao', name: '厨房杀手', description: '你能用微波炉热一切食物，但做饭这件事对你来说是玄学。你炒过土豆炖焦了，你煮过面条煮糊了，你蒸过鸡蛋羹蒸成了布丁。你对厨房最大的贡献是：叫外卖。', dimensions: ['cook', 'save', 'weight'] },
  { id: 'shengqian', name: '省钱美食家', description: '你是那个能用100块钱活一周的生存大师。你知道哪个超市晚上打折，你知道怎么用优惠券，你知道怎么用10块钱炒三个菜。你的人生哲学是：穷有穷的吃法。', dimensions: ['save', 'cook', 'explore'] },
  { id: 'shenyecan', name: '深夜食堂', description: '你是一个只在深夜11点后出没的幽灵食客。别人睡觉的时候你开始觅食，泡面、烧烤、麻辣烫都是你的深夜食堂。你觉得真正的美食都藏在夜晚的烟火里。', dimensions: ['adventurous', 'sweet', 'weight'] },
  { id: 'wanghong', name: '网红追随者', description: '你永远在排队打卡网红店。别人发什么你就吃什么，你的胃被算法支配。你能为了一个舒芙蕾排队3小时，你觉得值得。你的朋友圈永远在「正在吃」。', dimensions: ['explore', 'share', 'weight'] },
  { id: 'jianzhi', name: '减脂餐选手', description: '你是那个每天吃鸡胸肉西兰花的人。你对碳水有深深的罪恶感，你的厨房里有量筒和食物秤。你的朋友圈里全是健身餐自拍，但大家都怀疑你晚上会不会偷吃泡面。', dimensions: ['weight', 'cook', 'save'] },
  { id: 'lingshi', name: '零食大王', description: '你家的零食柜比冰箱还丰富。你的工位抽屉里永远有存货，你的嘴巴永远在嚼东西。你的人生理想是：零食自由。你觉得你吃的不是零食，是快乐。', dimensions: ['sweet', 'weight', 'share'] },
  { id: 'liaoli', name: '料理达人', description: '你把做饭当艺术，把厨房当实验室。你能为了做一道菜研究三天，你的摆盘比餐厅还精致。你发明的黑暗料理让朋友闻风丧胆，但你乐在其中。', dimensions: ['cook', 'adventurous', 'explore'] },
  { id: 'pinglun', name: '美食评论家', description: '你吃过的餐厅比大部分人多，你对食物的品鉴能力堪比食神。你写的大众点评比专业食评还好看，你的嘴比美食家还刁。你觉得大部分餐厅都配不上你的胃。', dimensions: ['explore', 'adventurous', 'spicy'] },
];

export function findFoodBest(answers: Record<number, number>): { personality: FoodPersonality; similarity: number } {
  const dimScores: Record<string, number> = {};
  
  FOOD_QUESTIONS.forEach(q => {
    const val = answers[q.id] || 0;
    dimScores[q.dim] = (dimScores[q.dim] || 0) + val;
  });
  
  let best = FOOD_PERSONALITIES[0];
  let bestSim = 0;
  
  for (const p of FOOD_PERSONALITIES) {
    let score = 0;
    p.dimensions.forEach(d => {
      const ds = dimScores[d] || 2;
      if (d === 'sweet' && ds >= 5) score += 4;
      else if (d === 'spicy' && ds >= 5) score += 4;
      else if (d === 'adventurous' && ds >= 5) score += 4;
      else if (d === 'share' && ds >= 5) score += 3;
      else if (d === 'weight' && ds >= 5) score += 3;
      else if (d === 'cook' && ds <= 3) score += 4;
      else if (d === 'explore' && ds >= 5) score += 4;
      else if (d === 'save' && ds <= 3) score += 3;
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
