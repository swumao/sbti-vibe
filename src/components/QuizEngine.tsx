import { useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowLeft, Zap, CheckCircle2 } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { ThemeConfig } from '../themes';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface Question {
  id: number;
  dim: string;
  text: string;
  options: { label: string; value: number }[];
}

interface Personality {
  id: string;
  name: string;
  description: string;
  dimensions: string[];
}

interface QuizEngineProps {
  questions: Question[];
  personalities: Personality[];
  dimensions: { id: string; name: string; description: string }[];
  theme: ThemeConfig;
  onResult: (personality: Personality, answers: Record<number, number>, similarity: number) => void;
  computeBestMatch: (answers: Record<number, number>) => { personality: Personality; similarity: number };
}

const ProgressBar = ({ current, total, theme }: { current: number; total: number; theme: ThemeConfig }) => {
  const progress = (current / total) * 100;
  return (
    <div className="w-full h-4 bg-zinc-200 border-2 border-black overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        className="h-full border-r-2 border-black"
        style={{ background: theme.accent }}
      />
    </div>
  );
};

export default function QuizEngine({
  questions,
  personalities,
  dimensions,
  theme,
  onResult,
  computeBestMatch,
}: QuizEngineProps) {
  const [step, setStep] = useState<'idle' | 'quiz' | 'result'>('idle');
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [direction, setDirection] = useState<'next' | 'prev' | null>(null);
  const [submitted, setSubmitted] = useState(false);

  // Use ref to avoid stale closure in setTimeout callbacks
  const answersRef = useRef<Record<number, number>>({});

  const handleStart = () => setStep('quiz');

  const handleAnswer = useCallback((qid: number, value: number) => {
    answersRef.current = { ...answersRef.current, [qid]: value };
    setAnswers(prev => ({ ...prev, [qid]: value }));
  }, []);

  const goNext = useCallback(() => {
    setDirection('next');
    setCurrent(prev => Math.min(prev + 1, questions.length - 1));
  }, [questions.length]);

  const goPrev = useCallback(() => {
    setDirection('prev');
    setCurrent(prev => Math.max(prev - 1, 0));
  }, []);

  const handleNextAuto = useCallback((qid: number) => {
    if (answersRef.current[qid] !== undefined) {
      setTimeout(() => {
        setDirection('next');
        setCurrent(prev => Math.min(prev + 1, questions.length - 1));
      }, 350);
    }
  }, [questions.length]);

  const handleSubmit = useCallback(() => {
    if (Object.keys(answers).length < questions.length) return;
    setSubmitted(true);
    const { personality, similarity } = computeBestMatch(answers);
    setTimeout(() => {
      onResult(personality, answers, similarity);
      setStep('result');
    }, 400);
  }, [answers, questions.length, computeBestMatch, onResult]);

  const answeredCount = Object.keys(answers).length;
  const progress = (answeredCount / questions.length) * 100;
  const allAnswered = answeredCount === questions.length;
  const q = questions[current];
  const currentAnswered = answers[q.id] !== undefined;

  // ── Idle / Landing ─────────────────────────────────────────
  if (step === 'idle') {
    return (
      <div className="min-h-screen bg-zinc-50 flex flex-col items-center justify-center p-6 font-sans selection:bg-lime-400 relative overflow-hidden">
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border-4 border-black rounded-full opacity-10 animate-pulse" />
        <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-black rotate-45 opacity-10" />
        <div className="absolute top-1/4 right-10 w-4 h-4 bg-black rounded-full opacity-10" />
        <div className="absolute bottom-1/4 left-10 w-6 h-6 bg-black rotate-45 opacity-10" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl w-full text-center space-y-8 relative z-10"
        >
          <div className="space-y-2">
            {/* Emoji */}
            <motion.div
              className="text-8xl mb-4 inline-block"
              style={{ filter: `drop-shadow(0 0 30px ${theme.accent}60)` }}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              {theme.emoji}
            </motion.div>

            {/* Main title with brutalist style */}
            <motion.h1
              className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none font-display"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              {theme.title}
            </motion.h1>
            
            {/* Accent bar */}
            <div
              className="inline-block px-6 py-2 mt-4 transform -rotate-2 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              style={{ background: theme.accent }}
            >
              <p className="text-xl md:text-2xl font-black uppercase tracking-tight" style={{ color: '#000' }}>
                {theme.subtitle}
              </p>
            </div>
          </div>

          {/* Question/personality count */}
          <div className="flex justify-center gap-8 py-6 border-y-4 border-black">
            <div className="space-y-1">
              <span className="text-sm font-bold text-zinc-400 uppercase tracking-widest">题目</span>
              <div className="text-3xl font-black">{questions.length}</div>
            </div>
            <div className="space-y-1">
              <span className="text-sm font-bold text-zinc-400 uppercase tracking-widest">人格</span>
              <div className="text-3xl font-black">{personalities.length}</div>
            </div>
          </div>

          {/* Start button */}
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={handleStart}
              className="relative px-12 py-5 text-xl font-black uppercase tracking-widest transition-all active:scale-95 bg-lime-400 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              style={{ color: '#000' }}
            >
              开始测试 →
            </button>
            <p className="text-xs opacity-40 font-bold uppercase tracking-widest">
              预计耗时 3-5 分钟
            </p>
          </div>
        </motion.div>

        {/* Bottom branding */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-6 text-xs opacity-20 font-black tracking-widest uppercase"
        >
          VIBE LAB · SUPER BRAIN TEST INVENTORY
        </motion.p>
      </div>
    );
  }

  // ── Quiz ───────────────────────────────────────────────────
  if (step === 'quiz') {
    const selectedValue = answers[q.id];

    return (
      <div className="min-h-screen bg-zinc-50 flex flex-col p-4 md:p-8 font-sans selection:bg-lime-400">
        <div className="max-w-3xl w-full mx-auto flex-1 flex flex-col gap-8">

          {/* Header */}
          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <span
                className="text-4xl font-black italic"
                style={{ color: theme.accent }}
              >
                Q.{current + 1}
              </span>
              <span className="text-sm font-bold text-zinc-400 uppercase tracking-widest">
                {current + 1} / {questions.length}
              </span>
            </div>
            <ProgressBar current={current + 1} total={questions.length} theme={theme} />
          </div>

          {/* Question Content */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={q.id}
              custom={direction}
              initial={{ opacity: 0, x: direction === 'next' ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction === 'next' ? -20 : 20 }}
              className="flex-1 flex flex-col justify-center gap-8"
            >
              {/* Question text */}
              <h2 className="text-3xl md:text-4xl font-black leading-tight">
                {q.text}
              </h2>

              {/* Options */}
              <div className="grid gap-4">
                {q.options.map((opt, i) => {
                  const isSelected = selectedValue === opt.value;
                  return (
                    <button
                      key={i}
                      onClick={() => {
                        handleAnswer(q.id, opt.value);
                        handleNextAuto(q.id);
                      }}
                      className={cn(
                        "group relative w-full text-left p-6 border-4 border-black transition-all",
                        isSelected
                          ? "bg-lime-400 translate-x-1 translate-y-1 shadow-none"
                          : "bg-white hover:bg-zinc-50 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]"
                      )}
                    >
                      <div className="flex items-center gap-4">
                        <div className={cn(
                          "w-6 h-6 border-2 border-black flex items-center justify-center",
                          isSelected ? "bg-black" : "bg-white"
                        )}>
                          {isSelected && <CheckCircle2 className="w-4 h-4" style={{ color: theme.accent }} />}
                        </div>
                        <span className="text-xl font-bold">{opt.label}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Footer Controls */}
          <div className="flex justify-between items-center py-8 border-t-4 border-black mt-auto">
            <button
              onClick={goPrev}
              disabled={current === 0}
              className="px-6 py-3 font-bold uppercase tracking-tight transition-all disabled:opacity-30 disabled:cursor-not-allowed border-4 border-black bg-white hover:bg-zinc-50 flex items-center gap-2"
              style={{ boxShadow: '4px 4px 0 #000' }}
            >
              <ArrowLeft className="w-5 h-5" /> 上一题
            </button>

            {current < questions.length - 1 ? (
              <button
                onClick={goNext}
                disabled={!currentAnswered}
                className="px-6 py-3 font-bold uppercase tracking-tight transition-all disabled:opacity-30 disabled:cursor-not-allowed border-4 border-black bg-white hover:bg-zinc-50 flex items-center gap-2"
                style={{ boxShadow: '4px 4px 0 #000' }}
              >
                下一题 <ArrowRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!allAnswered}
                className="px-6 py-3 font-bold uppercase tracking-tight transition-all border-4 border-black flex items-center gap-2 disabled:opacity-30"
                style={{
                  background: allAnswered ? theme.accent : '#fff',
                  color: '#000',
                  boxShadow: allAnswered ? `4px 4px 0 ${theme.accent}` : '4px 4px 0 #000',
                }}
              >
                提交并查看结果 <Zap className="w-5 h-5 fill-current" />
              </button>
            )}
          </div>

          {!allAnswered && (
            <p className="text-center text-xs opacity-40">
              请回答所有题目
            </p>
          )}
        </div>
      </div>
    );
  }

  return null;
}
