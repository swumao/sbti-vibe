import { useState } from 'react';
import { motion } from 'motion/react';
import { RotateCcw, Share2, Target, Flame } from 'lucide-react';
import type { ThemeConfig } from '../themes';

interface Personality {
  id: string;
  name: string;
  englishName?: string;
  description: string;
  dimensions: string[];
}

interface ResultCardProps {
  personality: Personality;
  similarity: number;
  theme: ThemeConfig;
  onRestart: () => void;
  dimensionScores?: Record<string, number>;
  dimensions?: { id: string; name: string; description: string }[];
}

export default function ResultCard({
  personality,
  similarity,
  theme,
  onRestart,
  dimensionScores = {},
  dimensions = [],
}: ResultCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = `${theme.title} 测试结果：我是「${personality.name}」！${personality.description} #${theme.title}人格测试`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${theme.title} 人格测试结果`,
        text: `我是 ${theme.title} 中的 ${personality.name}！${personality.description}`,
        url: window.location.href,
      }).catch(console.error);
    } else {
      handleCopy();
    }
  };

  const matchPercentage = Math.min(99, 80 + Math.floor(Math.random() * 20));
  const hitDimensionsCount = personality.dimensions.length;

  return (
    <div className="min-h-screen bg-zinc-50 p-4 md:p-8 font-sans selection:bg-lime-400">
      <div className="max-w-4xl w-full mx-auto space-y-12">

        {/* Personality Header Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white border-8 border-black p-8 md:p-12 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden"
          style={{ boxShadow: `16px 16px 0 ${theme.accent}` }}
        >
          {/* UNLOCKED badge for hidden boss */}
          {personality.id === 'hidden_boss' && (
            <motion.div
              initial={{ rotate: -10, scale: 0 }}
              animate={{ rotate: -5, scale: 1 }}
              className="absolute -top-4 -left-4 bg-red-600 text-white font-black px-4 py-2 border-4 border-black z-20 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              UNLOCKED: HIDDEN LEVEL
            </motion.div>
          )}

          {/* Corner SBTI RESULT label */}
          <div
            className="absolute top-0 right-0 p-4 font-black text-xl transform rotate-12 translate-x-4 -translate-y-2 border-4 border-black"
            style={{ background: theme.accent, color: '#000', boxShadow: '4px 4px 0 #000' }}
          >
            {theme.title} RESULT
          </div>

          <div className="space-y-6 relative z-10">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-zinc-400 uppercase tracking-[0.2em]">
                {theme.emoji} {personality.englishName || theme.title}
              </h3>
              <h1
                className="text-6xl md:text-8xl font-black font-display"
                style={{ color: theme.accent }}
              >
                {personality.name}
              </h1>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 py-6 border-y-4 border-black">
              <div className="space-y-1">
                <span className="text-sm font-bold text-zinc-400 uppercase tracking-widest">匹配度</span>
                <div className="text-4xl font-black" style={{ color: theme.accent }}>{matchPercentage}%</div>
              </div>
              <div className="space-y-1">
                <span className="text-sm font-bold text-zinc-400 uppercase tracking-widest">精准命中维度</span>
                <div className="text-4xl font-black">
                  {hitDimensionsCount} <span className="text-xl" style={{ color: theme.accent }}>DIMENSIONS</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <div
                className="flex items-center gap-2 font-black uppercase tracking-widest"
                style={{ color: theme.accent }}
              >
                <Flame className="w-5 h-5 fill-current" /> 人格解读
              </div>
              <p className="text-xl md:text-2xl font-bold leading-relaxed">
                {personality.description}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Dimensions Breakdown */}
        {dimensions.length > 0 && (
          <div className="space-y-8">
            <h2 className="text-4xl font-black uppercase tracking-tighter flex items-center gap-4">
              <Target className="w-10 h-10" style={{ color: theme.accent }} />
              {dimensions.length}维度深度扫描
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dimensions.map((dim, idx) => {
                const score = dimensionScores[dim.id] || 0;
                // Normalize score 0-100 (each dim has ~2-3 questions, each 1-3)
                const maxPossible = 15;
                const percentage = Math.min(100, Math.max(0, (score / maxPossible) * 100));
                const isKey = personality.dimensions.includes(dim.id);

                return (
                  <motion.div
                    key={dim.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.03 }}
                    className={`
                      p-6 border-4 border-black bg-white space-y-4
                      ${isKey ? 'ring-4 ring-offset-4' : ''}
                    `}
                    style={isKey ? { ringColor: theme.accent } : {}}
                  >
                    <div className="flex justify-between items-start">
                      <div className="font-black text-xl">{dim.name}</div>
                      {isKey && (
                        <span
                          className="text-[10px] px-2 py-0.5 font-black uppercase"
                          style={{ background: theme.accent, color: '#000' }}
                        >
                          KEY
                        </span>
                      )}
                    </div>

                    <div className="space-y-2">
                      <div className="w-full h-3 bg-zinc-100 border-2 border-black">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${percentage}%` }}
                          transition={{ duration: 0.6, delay: idx * 0.03 }}
                          className="h-full border-r-2 border-black"
                          style={{
                            background: isKey ? theme.accent : '#000',
                          }}
                        />
                      </div>
                      <div className="flex justify-between text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                        <span>Low</span>
                        <span>High</span>
                      </div>
                    </div>

                    <p className="text-xs font-bold text-zinc-500 leading-relaxed">
                      {dim.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col md:flex-row gap-4 pt-12">
          <button
            onClick={onRestart}
            className="flex-1 px-6 py-3 font-bold uppercase tracking-tight transition-all border-4 border-black bg-white hover:bg-zinc-50 flex items-center justify-center gap-2"
            style={{ boxShadow: '4px 4px 0 #000' }}
          >
            <RotateCcw className="w-5 h-5" /> 回到首页
          </button>
          <button
            onClick={handleShare}
            className="flex-1 px-6 py-3 font-bold uppercase tracking-tight transition-all border-4 border-black flex items-center justify-center gap-2"
            style={{
              background: theme.accent,
              color: '#000',
              boxShadow: `4px 4px 0 #000`,
            }}
          >
            <Share2 className="w-5 h-5" /> {copied ? '已复制!' : '分享结果'}
          </button>
        </div>

        <footer className="text-center py-12 text-zinc-400 font-bold uppercase tracking-widest text-xs">
          {theme.title} © 2024 / SPICY PERSONALITY TEST / BUILT FOR CHAOS
        </footer>
      </div>
    </div>
  );
}
