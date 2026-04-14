export interface ThemeConfig {
  id: string;
  name: string;
  title: string;       // display name for result card
  subtitle: string;    // short tagline
  description: string;
  path: string;
  accent: string;      // hex color e.g. '#a3e635'
  emoji: string;
  accentColor: string; // tailwind class e.g. 'bg-lime-400'
  bgGradient: string;
  borderColor: string;
}

export const THEMES: ThemeConfig[] = [
  {
    id: 'sbti',
    name: 'SBTI人格测试',
    title: 'SBTI',
    subtitle: '15维度精准扫描 · 25种辛辣人格',
    description: '15维度精准扫描 / 25种辛辣人格 / 30题 + 隐藏关卡',
    path: '/sbti',
    accent: '#a3e635',
    emoji: '🧠',
    accentColor: 'bg-lime-400',
    bgGradient: 'from-lime-400 to-lime-500',
    borderColor: 'border-lime-400',
  },
  {
    id: 'touzi',
    name: '投资人格点评',
    title: '投资人格',
    subtitle: '你是韭菜还是庄家？',
    description: '12维度扫描 / 12种投资人格 / 测出你是韭菜还是庄家',
    path: '/touzi',
    accent: '#fbbf24',
    emoji: '📈',
    accentColor: 'bg-amber-400',
    bgGradient: 'from-amber-400 to-yellow-500',
    borderColor: 'border-amber-400',
  },
  {
    id: 'kuiqian',
    name: '创业人格点评',
    title: '创业人格',
    subtitle: '看看你是不是当老板的料',
    description: '12维度扫描 / 12种创业人格 / 看看你是不是当老板的料',
    path: '/kuiqian',
    accent: '#f87171',
    emoji: '💼',
    accentColor: 'bg-red-500',
    bgGradient: 'from-red-500 to-rose-600',
    borderColor: 'border-red-500',
  },
  {
    id: 'niuma',
    name: '打工人人格点评',
    title: '打工人人格',
    subtitle: '测测你是卷王还是摸鱼王',
    description: '12维度扫描 / 12种打工人格 / 测测你是卷王还是摸鱼王',
    path: '/niuma',
    accent: '#60a5fa',
    emoji: '💼',
    accentColor: 'bg-blue-500',
    bgGradient: 'from-blue-500 to-sky-600',
    borderColor: 'border-blue-500',
  },
  {
    id: 'food',
    name: '吃货人格点评',
    title: '吃货人格',
    subtitle: '看看你是美食家还是体重焦虑者',
    description: '12维度扫描 / 12种吃货人格 / 看看你是美食家还是体重焦虑者',
    path: '/food',
    accent: '#fb923c',
    emoji: '🍜',
    accentColor: 'bg-orange-500',
    bgGradient: 'from-orange-500 to-orange-600',
    borderColor: 'border-orange-500',
  },
  {
    id: 'kpiti',
    name: 'KPITI职场人格',
    title: 'KPITI',
    subtitle: '打工人属性分析 · 职场人性鉴定',
    description: '8维度扫描 / 12种打工人格 / 测出你是卷王还是摸鱼王',
    path: '/kpiti',
    accent: '#a78bfa',
    emoji: '💼',
    accentColor: 'bg-violet-400',
    bgGradient: 'from-violet-400 to-purple-500',
    borderColor: 'border-violet-400',
  },
  {
    id: 'wuxing',
    name: '五行人格',
    title: '五行MBTI',
    subtitle: '金木水火土 · 命中注定的人格',
    description: '8维度扫描 / 12种五行人格 / 中式玄学人格测试',
    path: '/wuxing',
    accent: '#fbbf24',
    emoji: '☯️',
    accentColor: 'bg-amber-400',
    bgGradient: 'from-amber-400 to-yellow-500',
    borderColor: 'border-amber-400',
  },
  {
    id: 'loveti',
    name: '恋爱人格',
    title: 'LOVETI',
    subtitle: '恋爱脑还是人间清醒',
    description: '8维度扫描 / 12种恋爱人格 / 测出你的吸渣指数',
    path: '/loveti',
    accent: '#f472b6',
    emoji: '💕',
    accentColor: 'bg-pink-400',
    bgGradient: 'from-pink-400 to-rose-500',
    borderColor: 'border-pink-400',
  },
  {
    id: 'steamti',
    name: '游戏人格',
    title: 'STEAMTI',
    subtitle: '肝帝还是欧皇 · 游戏人性鉴定',
    description: '8维度扫描 / 12种游戏人格 / 测出你是氪佬还是咸鱼',
    path: '/steamti',
    accent: '#34d399',
    emoji: '🎮',
    accentColor: 'bg-emerald-400',
    bgGradient: 'from-emerald-400 to-teal-500',
    borderColor: 'border-emerald-400',
  },
];

export const getTheme = (path: string): ThemeConfig => {
  return THEMES.find(t => t.path === path) || THEMES[0];
};
