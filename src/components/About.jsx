import { useScrollReveal } from '../hooks/useScrollReveal';
import { portfolioData } from '../data/portfolio';
import { Award, MapPin, GraduationCap } from 'lucide-react';

const About = () => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="about" ref={ref} className="section-padding relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-width relative z-10">
        <div
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-accent-primary font-mono text-sm tracking-wider uppercase mb-4 block">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">How I Work</h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg">
              Engineering with measurable outcomes, clear ownership, and business context.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - About Text */}
            <div className="space-y-6">
              <p className="text-lg text-text-secondary leading-relaxed">
                {portfolioData.about}
              </p>
              
              {/* Quick Info */}
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-text-secondary text-sm">
                  <MapPin size={16} className="text-accent-primary" />
                  <span>{portfolioData.location}</span>
                </div>
                <div className="flex items-center gap-2 text-text-secondary text-sm">
                  <GraduationCap size={16} className="text-accent-primary" />
                  <span>Expected Graduation: 2029</span>
                </div>
              </div>

              {/* Scholarship Badge */}
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 
                            px-6 py-4 rounded-xl border border-accent-primary/20">
                <Award size={24} className="text-accent-primary" />
                <div>
                  <div className="font-semibold text-text-primary">Drexel University Scholarship</div>
                  <div className="text-sm text-text-tertiary">Awarded 2024 - Present</div>
                </div>
              </div>
            </div>

            {/* Right - Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {portfolioData.stats.map((stat, index) => (
                <div
                  key={index}
                  className="glass glass-hover p-6 rounded-2xl text-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="font-heading text-3xl sm:text-4xl font-bold text-gradient-accent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-text-tertiary uppercase tracking-wider font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
