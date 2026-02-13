// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { GraduationCap, BookOpen, Award, Users } from 'lucide-react';

const Education = () => {
  const edu = portfolioData.education;

  return (
    <section id="education" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container-width relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent-primary font-mono text-sm tracking-wider uppercase mb-4 block">
            Foundation
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Education</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Building a cross-disciplinary foundation in finance and computer science
          </p>
        </motion.div>

        {/* Main Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass glass-hover rounded-2xl p-8 md:p-10">
            {/* School Header */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-6 mb-8">
              <div className="w-16 h-16 rounded-xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center shrink-0">
                <GraduationCap className="w-8 h-8 text-accent-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-text-primary">{edu.school}</h3>
                <p className="text-text-secondary mt-1">{edu.degree} | Minor: {edu.minor}</p>
                <p className="text-text-tertiary text-sm mt-1">{edu.location} &middot; {edu.graduation}</p>
              </div>
            </div>

            {/* Grid: Honors, Coursework, Extracurriculars */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Honors */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-4 h-4 text-accent-secondary" />
                  <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider">Honors</h4>
                </div>
                <ul className="space-y-2">
                  {edu.honors.map((honor, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="text-accent-primary mt-0.5 shrink-0">&#8226;</span>
                      <span>{honor}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Relevant Coursework */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-4 h-4 text-accent-secondary" />
                  <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider">Relevant Coursework</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-xs font-medium rounded-full bg-surface border border-text-tertiary/10 text-text-secondary"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              {/* Extracurriculars */}
              {edu.extracurriculars && edu.extracurriculars.length > 0 && (
                <div className="md:col-span-2">
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="w-4 h-4 text-accent-secondary" />
                    <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider">Extracurriculars</h4>
                  </div>
                  <div className="space-y-3">
                    {edu.extracurriculars.map((activity, i) => (
                      <div key={i} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                        <div className="flex-1">
                          <p className="text-sm text-text-primary font-medium">
                            {activity.name}
                            <span className="text-text-tertiary font-normal"> — {activity.role}</span>
                          </p>
                          <p className="text-xs text-text-tertiary mt-0.5">{activity.period}</p>
                          <p className="text-sm text-text-secondary/80 mt-1">{activity.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
