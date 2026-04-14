export interface KpitiQuestion {
  id: number;
  dim: string;
  text: string;
  options: { label: string; value: number }[];
}

export interface KpitiPersonality {
  id: string;
  name: string;
  description: string;
  dimensions: string[];
}

export const KPITI_DIMENSIONS = [
  { id: 'slave', name: '奴性强度', description: '被PUA时你能忍几分钟' },
  { id: 'overtime', name: '加班意愿', description: '下班了你会主动留下吗' },
  { id: 'complaint', name: '抱怨等级', description: '你在茶水间的吐槽段位' },
  { id: 'meeting', name: '开会忍耐', description: '你能忍受多长的无效会议' },
  { id: 'salary', name: '薪资感知', description: '你知道自己值多少钱吗' },
  { id: 'leader', name: '向上管理', description: '让领导觉得你在干活的能力' },
  { id: 'escape', name: '跑路指数', description: '你有多想离开现在的公司' },
  { id: 'cover', name: '甩锅能力', description: '出了问题你能全身而退吗' },
];

export const KPITI_QUESTIONS: KpitiQuestion[] = [
  { id: 1, dim: 'slave', text: '领导在晚上10点给你发消息，你会？', options: [
    { label: '秒回，这是对领导的尊重', value: 3 },
    { label: '过几分钟再回，假装在看剧', value: 2 },
    { label: '第二天再回，上班时间才处理工作', value: 1 },
  ]},
  { id: 2, dim: 'slave', text: '领导说"这个需求很简单，今天能搞定吧？"，你会？', options: [
    { label: '没问题！就算通宵也要搞定', value: 3 },
    { label: '如实说需要多久，但会尽量赶', value: 2 },
    { label: '这需求一点都不简单，我要argue', value: 1 },
  ]},
  { id: 3, dim: 'overtime', text: '下午6点了，手头工作差不多做完了，你会？', options: [
    { label: '再待一会，等领导先走', value: 3 },
    { label: '收拾东西，到点就下班', value: 2 },
    { label: '已经在电梯里了', value: 1 },
  ]},
  { id: 4, dim: 'overtime', text: '周末公司临时有事，你会？', options: [
    { label: '立刻回复，我来处理', value: 3 },
    { label: '考虑一下，有借口就推掉', value: 2 },
    { label: '假装没看到，周末不工作', value: 1 },
  ]},
  { id: 5, dim: 'complaint', text: '你在茶水间和同事吐槽，最常说的一句话是？', options: [
    { label: '"干完这个月老子不干了"', value: 3 },
    { label: '"最近确实有点累"', value: 2 },
    { label: '我不吐槽，我热爱工作', value: 1 },
  ]},
  { id: 6, dim: 'complaint', text: '年终奖发了一个月，你的反应是？', options: [
    { label: '感恩公司，来年继续努力', value: 1 },
    { label: '还行，勉强接受', value: 2 },
    { label: '就这？我值这个价吗？', value: 3 },
  ]},
  { id: 7, dim: 'meeting', text: '会议通知写"预计30分钟"，结果开了2小时，你会？', options: [
    { label: '全程专注，时不时点头', value: 3 },
    { label: '偷偷看手机，装作在记笔记', value: 2 },
    { label: '找个理由提前溜', value: 1 },
  ]},
  { id: 8, dim: 'meeting', text: '你在会议上发表意见的频率是？', options: [
    { label: '每次都积极发言，这是我的舞台', value: 3 },
    { label: '被点名了就说几句', value: 2 },
    { label: '开会就是去当背景板', value: 1 },
  ]},
  { id: 9, dim: 'salary', text: '你知道自己上个月的工资条明细吗？', options: [
    { label: '清清楚楚，精确到小数点后两位', value: 1 },
    { label: '大概知道，具体项懒得看', value: 2 },
    { label: '从不看，反正就这么点', value: 3 },
  ]},
  { id: 10, dim: 'salary', text: '朋友说刚跳槽工资翻倍了，你的反应是？', options: [
    { label: '恭喜他，然后默默更新简历', value: 3 },
    { label: '问问是做什么的，考虑一下', value: 2 },
    { label: '无所谓，钱不是最重要的', value: 1 },
  ]},
  { id: 11, dim: 'leader', text: '你实际工作5小时，但想让领导觉得你工作10小时，你会？', options: [
    { label: '下班后在工位多待一会，发加班朋友圈', value: 3 },
    { label: '偶尔汇报进展，让领导知道我在干活', value: 2 },
    { label: '我凭本事高效，为什么要装忙', value: 1 },
  ]},
  { id: 12, dim: 'leader', text: '领导问"这个项目进展怎么样了"，你会？', options: [
    { label: '报喜不报忧，好消息优先说', value: 3 },
    { label: '如实说，但已经准备好了解决方案', value: 2 },
    { label: '把问题和盘托出，让领导做决策', value: 1 },
  ]},
  { id: 13, dim: 'escape', text: '你在招聘软件上活跃度是？', options: [
    { label: '每天刷，看到合适的就投', value: 3 },
    { label: '偶尔看看，好机会不放过', value: 2 },
    { label: '从来不刷，我很满意现在的工作', value: 1 },
  ]},
  { id: 14, dim: 'escape', text: '你提过离职吗？', options: [
    { label: '提过，但被加薪留下来了', value: 3 },
    { label: '在脑子里提过一百遍了', value: 2 },
    { label: '没提过，我很忠诚', value: 1 },
  ]},
  { id: 15, dim: 'cover', text: '项目出了大问题，领导问责，你会？', options: [
    { label: '这不是我的问题，我尽职了', value: 3 },
    { label: '承认部分责任，但会强调客观原因', value: 2 },
    { label: '是我的问题，我承担责任', value: 1 },
  ]},
  { id: 16, dim: 'cover', text: '同事甩了个锅给你，你会？', options: [
    { label: '当场怼回去，证据说话', value: 3 },
    { label: '私下沟通，不撕破脸', value: 2 },
    { label: '算了，多一事不如少一事', value: 1 },
  ]},
];

export const KPITI_PERSONALITIES: KpitiPersonality[] = [
  { id: 'juwang', name: '卷王之王', description: '你是那个每天第一个到公司最后一个走的人。你把加班当修行，把KPI当信仰。你的工位上永远有喝不完的咖啡，你的电脑永远有关不完的文档。你的人生格言是：今天不努力，明天垃圾堆。', dimensions: ['slave', 'overtime', 'leader'] },
  { id: 'beiping', name: '背锅侠', description: '你是公司里最好说话的人。出了问题大家第一时间想到你，不是因为你做得多，是因为你不会拒绝。你背着锅走在职场路上，回头一看，身后空无一人。', dimensions: ['slave', 'complaint', 'cover'] },
  { id: 'chaoyuan', name: '职业跑路师', description: '你的简历比你的工牌还新。你在这家公司的时间从没超过6个月，每次离职理由都是"个人发展"。你的领英动态就是一部跳槽编年史。', dimensions: ['escape', 'complaint', 'salary'] },
  { id: 'huaqian', name: '画饼大师', description: '你是汇报的艺术大师。一个简单的周报你能写出论文的深度，一个普通的需求你能吹成战略级项目。你的PPT是全公司最好看的，因为上面全是未来的承诺。', dimensions: ['leader', 'meeting', 'slave'] },
  { id: 'shuini', name: '水牛型员工', description: '你是那个从不抱怨、从不请假、从不突出的人。你像水牛一样默默耕地，不问收获，只问耕耘。你的存在感和你的工位号一样——没人记得住。', dimensions: ['slave', 'overtime', 'complaint'] },
  { id: 'xiaoheisan', name: '摸鱼带师', description: '你是带薪摸鱼的专业选手。你能在开会时神游物外，能在上班时刷完一整部剧，你的时间管理精确到秒。你的工作质量和你的出勤率一样——刚好及格。', dimensions: ['overtime', 'escape', 'meeting'] },
  { id: 'xinforma', name: '职场情报员', description: '你对公司八卦的掌握程度超过你对业务的了解。你知道谁要离职了，谁和谁有矛盾，谁在背后说谁坏话。茶水间是你的主场，钉钉群是你的情报网。', dimensions: ['complaint', 'leader', 'salary'] },
  { id: 'jixiao', name: '表演型员工', description: '你是职场影帝。每次开会你都第一个发言，每次加班你都第一个发朋友圈。你的工作成果可能一般，但你的演出功底绝对一流。领导觉得你很拼，同事觉得你很卷。', dimensions: ['leader', 'overtime', 'meeting'] },
  { id: 'chuilian', name: '垂怜天使', description: '你对领导和同事的态度是：只要我不尴尬，尴尬的就是别人。你能屈尊降贵帮任何人做脏活累活，只为了换取一点点好评。你觉得自己在积累人脉，其实大家只是在利用你。', dimensions: ['slave', 'cover', 'leader'] },
  { id: 'duncsu', name: '钝感超人', description: '你是那个被骂了还能笑着说"好的领导"的人。你的情绪稳定到可以当定海神针，什么PUA、甩锅、KPI压顶，在你面前都是浮云。你的哲学是：只要工资发到手，别的都是浮云。', dimensions: ['slave', 'overtime', 'salary'] },
  { id: 'ganga', name: '社恐战士', description: '你是那个在会议室里永远坐最后一排、在群里永远不发言、在茶水间遇到领导会假装看手机的人。你的工作能力不差，但你就是没法在职场社交中如鱼得水。', dimensions: ['meeting', 'leader', 'complaint'] },
  { id: 'tiandun', name: '天选打工人', description: '你是那个工资不高不低、职位不高不低、表现不高不低的人。你在公司待了5年，没有升职也没有被开除。你是职场的气氛组，也是公司最稳定的存在——因为走了还得重新招人。', dimensions: ['slave', 'salary', 'escape'] },
];

export function findKpitiBest(answers: Record<number, number>): { personality: KpitiPersonality; similarity: number } {
  const dimScores: Record<string, number> = {};
  
  KPITI_QUESTIONS.forEach(q => {
    const val = answers[q.id] || 0;
    dimScores[q.dim] = (dimScores[q.dim] || 0) + val;
  });
  
  let best = KPITI_PERSONALITIES[0];
  let bestSim = 0;
  
  for (const p of KPITI_PERSONALITIES) {
    let score = 0;
    p.dimensions.forEach(d => {
      const ds = dimScores[d] || 2;
      if (d === 'slave' && ds >= 5) score += 4;
      else if (d === 'overtime' && ds >= 5) score += 4;
      else if (d === 'complaint' && ds >= 5) score += 4;
      else if (d === 'meeting' && ds <= 3) score += 4;
      else if (d === 'salary' && ds <= 3) score += 3;
      else if (d === 'leader' && ds >= 5) score += 4;
      else if (d === 'escape' && ds >= 5) score += 4;
      else if (d === 'cover' && ds >= 5) score += 4;
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
