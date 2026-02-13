import { useScrollReveal } from '../hooks/useScrollReveal';
import { portfolioData } from '../data/portfolio';
import { Sparkles } from 'lucide-react';

const Hobbies = () => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.2 });

  const hobbies = portfolioData.hobbies;

  return (
    <section id="hobbies" ref={ref} className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-width relative z-10">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-accent-primary font-mono text-sm tracking-wider uppercase mb-4 block">
              Beyond Code
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Decision-Making Habits</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Activities that sharpen how I prioritize, communicate, and execute.
            </p>
          </div>

          {/* Hobbies Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {/* Basketball Card */}
            <div
              className="glass rounded-xl p-6 cursor-default relative overflow-hidden group
                         transition-all duration-300 hover:bg-surface-hover hover:border-text-tertiary/10
                         hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(0,0,0,0.2)]"
              style={{ transitionDelay: '0ms' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🏀</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-text-primary">{hobbies[0].name}</h3>
                  <p className="text-sm font-medium" style={{ color: hobbies[0].color }}>{hobbies[0].title}</p>
                </div>
              </div>

              {/* Shot Arc Animation */}
              <div className="h-24 mb-4 relative overflow-hidden opacity-50 group-hover:opacity-100 transition-opacity">
                <svg viewBox="0 0 200 80" className="w-full h-full" style={{ transform: 'scaleX(-1)' }}>
                  <path
                    d="M 20 70 Q 100 10 180 70"
                    fill="none"
                    stroke="url(#shotGradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="animate-pulse"
                  />
                  <defs>
                    <linearGradient id="shotGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f97316" stopOpacity="0" />
                      <stop offset="50%" stopColor="#f97316" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <circle r="4" fill="#f97316">
                    <animateMotion dur="2s" repeatCount="indefinite" path="M 20 70 Q 100 10 180 70" />
                  </circle>
                </svg>
              </div>

              <p className="text-sm text-text-secondary leading-relaxed">
                {hobbies[0].description}
              </p>
            </div>

            {/* Poker Card — centerpiece, always visible description */}
            <div
              className="glass rounded-xl p-6 cursor-default relative overflow-hidden group
                         border border-red-500/10 hover:border-red-500/30
                         transition-all duration-300 hover:bg-surface-hover
                         hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(0,0,0,0.2)]"
              style={{ transitionDelay: '100ms' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🃏</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-text-primary">{hobbies[1].name}</h3>
                  <p className="text-sm font-medium" style={{ color: hobbies[1].color }}>{hobbies[1].title}</p>
                </div>
              </div>

              {/* Card Visual */}
              <div className="h-24 mb-4 relative overflow-hidden opacity-60 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="flex gap-2">
                  {['10', 'J', 'Q', 'K', 'A'].map((card, i) => (
                    <div
                      key={i}
                      className="w-8 h-12 bg-white/90 rounded flex flex-col items-center justify-center shadow-lg
                                 group-hover:-translate-y-1 transition-transform duration-300"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    >
                      <span className="text-xs font-bold text-black">{card}</span>
                      <span className="text-[10px] text-red-600">♥</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-sm text-text-secondary leading-relaxed">
                {hobbies[1].description}
              </p>
            </div>

            {/* Chess Card */}
            <div
              className="glass rounded-xl p-6 cursor-default group relative overflow-hidden
                         transition-all duration-300 hover:bg-surface-hover hover:border-text-tertiary/10
                         hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(0,0,0,0.2)]"
              style={{ transitionDelay: '200ms' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-2xl">♟️</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-text-primary">{hobbies[2].name}</h3>
                  <p className="text-sm font-medium" style={{ color: hobbies[2].color }}>{hobbies[2].title}</p>
                </div>
              </div>

              {/* Knight's Tour Animation */}
              <div className="h-24 mb-4 relative overflow-hidden opacity-50 group-hover:opacity-100 transition-opacity">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path
                    d="M 20 50 L 40 30 L 60 50 L 80 70"
                    fill="none"
                    stroke="#a855f7"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="200"
                    strokeDashoffset="200"
                  >
                    <animate attributeName="stroke-dashoffset" from="200" to="0" dur="3s" repeatCount="indefinite" />
                  </path>
                  <text x="-8" y="5" fontSize="12" fill="#a855f7">
                    <animateMotion dur="3s" repeatCount="indefinite" path="M 20 50 L 40 30 L 60 50 L 80 70" />
                    ♞
                  </text>
                </svg>
              </div>

              <p className="text-sm text-text-secondary leading-relaxed">
                {hobbies[2].description}
              </p>
            </div>
          </div>

          {/* Key Insight */}
          <div className="text-center">
              <div className="glass inline-block p-8 rounded-2xl max-w-3xl mx-auto border border-text-tertiary/10">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles size={20} className="text-accent-primary" />
                <span className="text-accent-primary font-medium text-sm uppercase tracking-wider">The Connection</span>
              </div>
              <p className="text-lg text-text-secondary leading-relaxed italic">
                \"I focus on decisions with strong expected value, clear downside control, and accountable execution.\"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
