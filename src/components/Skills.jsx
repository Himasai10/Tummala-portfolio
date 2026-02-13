import { useScrollReveal } from '../hooks/useScrollReveal';
import { portfolioData } from '../data/portfolio';
import { Code, Layers, Database, Award, Sparkles } from 'lucide-react';

const Skills = () => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.2 });

  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code size={24} />,
      color: 'from-accent-primary to-accent-primary/50',
      skills: portfolioData.skills.languages,
    },
    {
      title: 'Frameworks & Tools',
      icon: <Layers size={24} />,
      color: 'from-accent-secondary to-accent-secondary/50',
      skills: portfolioData.skills.frameworks,
    },
    {
      title: 'Data & Analytics',
      icon: <Database size={24} />,
      color: 'from-purple-500 to-purple-500/50',
      skills: portfolioData.skills.data,
    },
    {
      title: 'Certifications',
      icon: <Award size={24} />,
      color: 'from-green-500 to-green-500/50',
      skills: portfolioData.skills.certifications,
    },
  ];

  return (
    <section id="skills" ref={ref} className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-width relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-accent-primary font-mono text-sm tracking-wider uppercase mb-4 block">
              Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Technical Stack</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Tools I use to build reliable software and analytics systems end to end.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="group glass glass-hover p-8 rounded-2xl"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white shadow-lg`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-text-primary">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="px-4 py-2 text-sm font-medium bg-background/80 text-text-secondary 
                               rounded-full border border-text-tertiary/10 hover:border-accent-primary/30 
                               hover:text-text-primary hover:bg-accent-primary/10 transition-all duration-300 cursor-default"
                      style={{ animationDelay: `${skillIndex * 50}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Highlight Box */}
          <div className="mt-12 glass p-8 rounded-2xl text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles size={20} className="text-accent-primary" />
              <span className="text-accent-primary font-medium">Core Competency</span>
            </div>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              I connect <span className="text-text-primary font-medium">financial reasoning</span> and{' '}
              <span className="text-text-primary font-medium">technical implementation</span> to ship systems that are both useful and measurable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
