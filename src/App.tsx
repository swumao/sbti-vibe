import { useState } from 'react';
import { RouterProvider, createBrowserRouter, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, AlertCircle } from 'lucide-react';
import QuizEngine from './components/QuizEngine';
import ResultCard from './components/ResultCard';
import { THEMES, type ThemeConfig } from './themes';
import { SBTI_QUESTIONS, SBTI_PERSONALITIES, SBTI_DIMENSIONS, computeSbtiBestMatch } from './data/sbti';
import { TOUZI_QUESTIONS, TOUZI_PERSONALITIES, TOUZI_DIMENSIONS, findTouziBest } from './data/touzi';
import { KUIQIAN_QUESTIONS, KUIQIAN_PERSONALITIES, KUIQIAN_DIMENSIONS, findKuiqianBest } from './data/kuiqian';
import { NUMA_QUESTIONS, NUMA_PERSONALITIES, NUMA_DIMENSIONS, findNumaBest } from './data/niuma';
import { FOOD_QUESTIONS, FOOD_PERSONALITIES, FOOD_DIMENSIONS, findFoodBest } from './data/food';
import { KPITI_QUESTIONS, KPITI_PERSONALITIES, KPITI_DIMENSIONS, findKpitiBest } from './data/kpiti';
import { WUXING_QUESTIONS, WUXING_PERSONALITIES, WUXING_DIMENSIONS, findWuxingBest } from './data/wuxing';
import { LOVETI_QUESTIONS, LOVETI_PERSONALITIES, LOVETI_DIMENSIONS, findLovetiBest } from './data/loveti';
import { STEAMTI_QUESTIONS, STEAMTI_PERSONALITIES, STEAMTI_DIMENSIONS, findSteamtiBest } from './data/steamti';

// ── Button ─────────────────────────────────────────────────

const Button = ({
  children,
  onClick,
  variant = 'primary',
  className = '',
  disabled = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  disabled?: boolean;
}) => {
  const variants = {
    primary: 'bg-black text-white hover:bg-zinc-800 border-2 border-black',
    secondary: 'bg-lime-400 text-black hover:bg-lime-300 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]',
    outline: 'bg-transparent border-2 border-black text-black hover:bg-zinc-100',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        px-6 py-3 font-bold uppercase tracking-tight
        transition-all disabled:opacity-50 disabled:cursor-not-allowed
        flex items-center justify-center gap-2
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

// ── Themed Landing Page ─────────────────────────────────────

function ThemedLandingPage({ theme, quizPath }: { theme: ThemeConfig; quizPath: string }) {
  const accentStyle = {
    backgroundColor: theme.accent + '30',
    borderColor: theme.accent,
  };

  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col items-center justify-center p-6 font-sans selection:bg-lime-400">

      {/* Decorative elements */}
      <div
        className="absolute top-10 left-10 w-20 h-20 border-4 border-black rounded-full opacity-10 animate-pulse"
        style={{ borderColor: theme.accent }}
      />
      <div
        className="absolute bottom-10 right-10 w-32 h-32 border-4 border-black rotate-45 opacity-10"
        style={{ borderColor: theme.accent }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl w-full text-center space-y-8"
      >
        <div className="space-y-2">
          <motion.h1
            className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none font-display"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <span style={{ color: theme.accent }}>{theme.emoji}</span>
            <br />
            <span
              className="px-4 inline-block transform -rotate-2 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              style={{ backgroundColor: theme.accent + '60' }}
            >
              {theme.subtitle}
            </span>
          </motion.h1>
          <p className="text-xl md:text-2xl font-bold mt-8 text-zinc-600">
            {theme.description}
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <Link to={quizPath}>
            <Button onClick={() => {}} variant="secondary" className="text-2xl px-12 py-6">
              开始测试 <ArrowRight className="w-8 h-8" />
            </Button>
          </Link>

          <div className="flex items-center gap-2 text-zinc-400 text-sm font-medium uppercase tracking-widest">
            <AlertCircle className="w-4 h-4" />
            免责声明: 仅供娱乐 请勿当真
          </div>
        </div>

        {/* Back to home */}
        <Link to="/" className="inline-block mt-4 text-sm text-zinc-400 hover:text-black transition-colors">
          ← 返回首页
        </Link>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-12 text-xs opacity-20 font-black tracking-widest"
      >
        VIBE LAB · {theme.name.toUpperCase()}
      </motion.p>
    </div>
  );
}

// ── Theme Pages ─────────────────────────────────────────────

function ThemePage({ theme, questions, personalities, dimensions, computeBestMatch }: {
  theme: ThemeConfig;
  questions: any[];
  personalities: any[];
  dimensions: any[];
  computeBestMatch: (answers: Record<number, number>) => { personality: any; similarity: number };
}) {
  const [result, setResult] = useState<{ personality: any; answers: Record<number, number>; similarity: number } | null>(null);

  const handleResult = (personality: any, answers: Record<number, number>, similarity: number) => {
    setResult({ personality, answers, similarity });
  };

  if (result) {
    // Aggregate answers into dimension scores
    const dimScores: Record<string, number> = {};
    questions.forEach((q: any) => {
      const val = result.answers[q.id] ?? 0;
      if (!dimScores[q.dim]) dimScores[q.dim] = 0;
      dimScores[q.dim] += val;
    });

    return (
      <ResultCard
        personality={result.personality}
        similarity={result.similarity}
        theme={theme}
        onRestart={() => setResult(null)}
        dimensionScores={dimScores}
        dimensions={dimensions}
      />
    );
  }

  return (
    <QuizEngine
      questions={questions}
      personalities={personalities}
      dimensions={dimensions}
      theme={theme}
      onResult={handleResult}
      computeBestMatch={computeBestMatch}
    />
  );
}

// ── Home Page ──────────────────────────────────────────────

function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col items-center justify-center p-6 font-sans selection:bg-lime-400">

      {/* Decorative elements like reference */}
      <div className="absolute top-10 left-10 w-20 h-20 border-4 border-black rounded-full opacity-10 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-black rotate-45 opacity-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl w-full text-center space-y-8"
      >
        <div className="space-y-2">
          <motion.h1
            className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none font-display"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            MBTI <span className="text-zinc-400 line-through decoration-black decoration-4">已经过时</span>
            <br />
            <span className="bg-lime-400 px-4 inline-block transform -rotate-2 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">SBTI 来了</span>
          </motion.h1>
          <p className="text-xl md:text-2xl font-bold mt-8 text-zinc-600">
            15维度精准扫描 / 25种辛辣人格 / 1个隐藏关卡
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <Link to="/sbti">
            <Button onClick={() => {}} variant="secondary" className="text-2xl px-12 py-6">
              开始测试 <ArrowRight className="w-8 h-8" />
            </Button>
          </Link>

          <div className="flex items-center gap-2 text-zinc-400 text-sm font-medium uppercase tracking-widest">
            <AlertCircle className="w-4 h-4" />
            免责声明: 仅供娱乐 请勿当真
          </div>
        </div>
      </motion.div>

      {/* Test card list */}
      <div className="mt-12 w-full max-w-4xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {THEMES.map((theme, i) => (
            <motion.div
              key={theme.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08 }}
            >
              <Link to={theme.path} className="block group">
                <div
                  className="relative border-4 border-black p-6 transition-all active:scale-[0.98] bg-white"
                  style={{ boxShadow: '6px 6px 0 #000' }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.transform = 'translate(-2px,-2px)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '8px 8px 0 #000';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.transform = 'none';
                    (e.currentTarget as HTMLElement).style.boxShadow = '6px 6px 0 #000';
                  }}
                >
                  <div className="absolute top-0 left-0 right-0 h-1" style={{ background: theme.accent + '30' }} />
                  <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: theme.accent + '30' }} />
                  <div className="text-4xl mb-3">{theme.emoji}</div>
                  <h2 className="text-xl font-black tracking-tight mb-1">
                    {theme.title}
                  </h2>
                  <p className="text-xs font-bold opacity-50 mb-1">{theme.path}</p>
                  <p className="text-sm opacity-60 leading-relaxed">{theme.description}</p>
                  <div
                    className="mt-4 text-xs font-black tracking-widest uppercase opacity-40 group-hover:opacity-100 transition-opacity"
                    style={{ color: theme.accent }}
                  >
                    开始测试 →
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-12 text-xs opacity-20 font-black tracking-widest"
      >
        VIBE LAB · SUPER BRAIN TEST INVENTORY
      </motion.p>
    </div>
  );
}

// ── Router ─────────────────────────────────────────────────

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  {
    path: '/sbti',
    element: (
      <ThemedLandingPage
        theme={THEMES.find(t => t.id === 'sbti')!}
        quizPath="/sbti/quiz"
      />
    ),
  },
  {
    path: '/sbti/quiz',
    element: (
      <ThemePage
        theme={THEMES.find(t => t.id === 'sbti')!}
        questions={SBTI_QUESTIONS}
        personalities={SBTI_PERSONALITIES}
        dimensions={SBTI_DIMENSIONS}
        computeBestMatch={computeSbtiBestMatch}
      />
    ),
  },
  {
    path: '/touzi',
    element: (
      <ThemedLandingPage
        theme={THEMES.find(t => t.id === 'touzi')!}
        quizPath="/touzi/quiz"
      />
    ),
  },
  {
    path: '/touzi/quiz',
    element: (
      <ThemePage
        theme={THEMES.find(t => t.id === 'touzi')!}
        questions={TOUZI_QUESTIONS}
        personalities={TOUZI_PERSONALITIES}
        dimensions={TOUZI_DIMENSIONS}
        computeBestMatch={findTouziBest}
      />
    ),
  },
  {
    path: '/kuiqian',
    element: (
      <ThemedLandingPage
        theme={THEMES.find(t => t.id === 'kuiqian')!}
        quizPath="/kuiqian/quiz"
      />
    ),
  },
  {
    path: '/kuiqian/quiz',
    element: (
      <ThemePage
        theme={THEMES.find(t => t.id === 'kuiqian')!}
        questions={KUIQIAN_QUESTIONS}
        personalities={KUIQIAN_PERSONALITIES}
        dimensions={KUIQIAN_DIMENSIONS}
        computeBestMatch={findKuiqianBest}
      />
    ),
  },
  {
    path: '/niuma',
    element: (
      <ThemedLandingPage
        theme={THEMES.find(t => t.id === 'niuma')!}
        quizPath="/niuma/quiz"
      />
    ),
  },
  {
    path: '/niuma/quiz',
    element: (
      <ThemePage
        theme={THEMES.find(t => t.id === 'niuma')!}
        questions={NUMA_QUESTIONS}
        personalities={NUMA_PERSONALITIES}
        dimensions={NUMA_DIMENSIONS}
        computeBestMatch={findNumaBest}
      />
    ),
  },
  {
    path: '/food',
    element: (
      <ThemedLandingPage
        theme={THEMES.find(t => t.id === 'food')!}
        quizPath="/food/quiz"
      />
    ),
  },
  {
    path: '/food/quiz',
    element: (
      <ThemePage
        theme={THEMES.find(t => t.id === 'food')!}
        questions={FOOD_QUESTIONS}
        personalities={FOOD_PERSONALITIES}
        dimensions={FOOD_DIMENSIONS}
        computeBestMatch={findFoodBest}
      />
    ),
  },
  {
    path: '/kpiti',
    element: (
      <ThemedLandingPage
        theme={THEMES.find(t => t.id === 'kpiti')!}
        quizPath="/kpiti/quiz"
      />
    ),
  },
  {
    path: '/kpiti/quiz',
    element: (
      <ThemePage
        theme={THEMES.find(t => t.id === 'kpiti')!}
        questions={KPITI_QUESTIONS}
        personalities={KPITI_PERSONALITIES}
        dimensions={KPITI_DIMENSIONS}
        computeBestMatch={findKpitiBest}
      />
    ),
  },
  {
    path: '/wuxing',
    element: (
      <ThemedLandingPage
        theme={THEMES.find(t => t.id === 'wuxing')!}
        quizPath="/wuxing/quiz"
      />
    ),
  },
  {
    path: '/wuxing/quiz',
    element: (
      <ThemePage
        theme={THEMES.find(t => t.id === 'wuxing')!}
        questions={WUXING_QUESTIONS}
        personalities={WUXING_PERSONALITIES}
        dimensions={WUXING_DIMENSIONS}
        computeBestMatch={findWuxingBest}
      />
    ),
  },
  {
    path: '/loveti',
    element: (
      <ThemedLandingPage
        theme={THEMES.find(t => t.id === 'loveti')!}
        quizPath="/loveti/quiz"
      />
    ),
  },
  {
    path: '/loveti/quiz',
    element: (
      <ThemePage
        theme={THEMES.find(t => t.id === 'loveti')!}
        questions={LOVETI_QUESTIONS}
        personalities={LOVETI_PERSONALITIES}
        dimensions={LOVETI_DIMENSIONS}
        computeBestMatch={findLovetiBest}
      />
    ),
  },
  {
    path: '/steamti',
    element: (
      <ThemedLandingPage
        theme={THEMES.find(t => t.id === 'steamti')!}
        quizPath="/steamti/quiz"
      />
    ),
  },
  {
    path: '/steamti/quiz',
    element: (
      <ThemePage
        theme={THEMES.find(t => t.id === 'steamti')!}
        questions={STEAMTI_QUESTIONS}
        personalities={STEAMTI_PERSONALITIES}
        dimensions={STEAMTI_DIMENSIONS}
        computeBestMatch={findSteamtiBest}
      />
    ),
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
