import { useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { portfolioData } from '../data/portfolio';
import { ExternalLink, Github, X, Award, Clock } from 'lucide-react';

const Projects = () => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });
  const [selectedProject, setSelectedProject] = useState(null);

  // Escape key close + scroll lock
  useEffect(() => {
    if (!selectedProject) return;

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section id="projects" ref={ref} className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-accent-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-accent-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-width relative z-10">
        <div
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-accent-primary font-mono text-sm tracking-wider uppercase mb-4 block">
              Featured Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Selected Projects</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Problem-focused builds with measurable outcomes and clear technical decisions.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center mx-auto">
            {portfolioData.projects.map((project, index) => (
              <article
                key={project.id}
                onClick={() => setSelectedProject(project)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelectedProject(project); } }}
                role="button"
                tabIndex={0}
                aria-label={`Open details for ${project.name}`}
                className="group glass glass-hover rounded-xl p-6 cursor-pointer relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-accent-primary/10"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-accent-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Hover Reveal Content (Buttons) */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 bg-background/20 backdrop-blur-[2px]">
                  <span className="px-4 py-2 bg-white text-black font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Details
                  </span>
                </div>

                {/* Content Container - Slides Up on Hover */}
                {/* Achievement Badge */}
                <div className="flex items-center gap-2 mb-4 relative z-10 transition-transform duration-500 group-hover:-translate-y-1">
                  {['In Progress', 'Active Development'].includes(project.achievement) ? (
                    <>
                      <Clock size={14} className="text-accent-secondary" />
                      <span className="text-xs text-accent-secondary font-medium">
                        {project.achievement}
                      </span>
                    </>
                  ) : (
                    <>
                      <Award size={14} className="text-accent-primary" />
                      <span className="text-xs text-accent-primary font-medium">
                        {project.achievement}
                      </span>
                    </>
                  )}
                </div>

                {/* Project Name */}
                <h3 className="font-heading text-xl font-bold text-text-primary mb-2 group-hover:text-accent-primary transition-colors relative z-10">
                  {project.name}
                </h3>

                {/* Tagline */}
                <p className="text-sm text-text-secondary mb-4 line-clamp-2 relative z-10">
                  {project.tagline}
                </p>

                {/* Tech Stack - Slides Up */}
                <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-background/80 text-text-tertiary rounded border border-text-tertiary/10 group-hover:border-accent-primary/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-1 text-xs text-text-tertiary">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                {/* Key Stat - Highlighted */}
                <div className="pt-4 border-t border-text-tertiary/10 relative z-10">
                  <p className="text-sm font-medium font-mono group-hover:scale-105 transition-transform origin-left" style={{ color: project.color }}>
                    {project.keyStat}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="glass rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 text-text-tertiary hover:text-text-primary transition-colors rounded-lg hover:bg-surface-hover"
            >
              <X size={24} />
            </button>

            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="font-heading text-2xl font-bold text-text-primary">
                  {selectedProject.name}
                </h3>
                {['In Progress', 'Active Development'].includes(selectedProject.achievement) ? (
                  <span className="px-3 py-1 text-xs bg-accent-secondary/10 text-accent-secondary rounded-full border border-accent-secondary/30">
                    {selectedProject.achievement}
                  </span>
                ) : (
                  <span className="px-3 py-1 text-xs bg-accent-primary/10 text-accent-primary rounded-full border border-accent-primary/30">
                    {selectedProject.achievement}
                  </span>
                )}
              </div>
              <p className="text-text-secondary">{selectedProject.tagline}</p>
            </div>

            {/* Description */}
            <p className="text-text-secondary mb-6 leading-relaxed">
              {selectedProject.description}
            </p>

            {/* Challenges & Architecture */}
            {(selectedProject.challenges || selectedProject.architecture) && (
              <div className="mb-6 space-y-4">
                {selectedProject.challenges && (
                  <div className="p-4 bg-background/50 rounded-xl border border-text-tertiary/10">
                    <h4 className="text-sm font-semibold text-text-primary mb-2">The Challenge</h4>
                    <p className="text-sm text-text-secondary">{selectedProject.challenges}</p>
                  </div>
                )}
                {selectedProject.architecture && (
                  <div className="p-4 bg-background/50 rounded-xl border border-text-tertiary/10">
                    <h4 className="text-sm font-semibold text-text-primary mb-2">Architecture</h4>
                    <p className="text-sm text-text-secondary">{selectedProject.architecture}</p>
                  </div>
                )}
              </div>
            )}

            {/* Tech Stack */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-text-primary mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm bg-accent-primary/10 text-accent-primary rounded-lg border border-accent-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Metric */}
            <div className="mb-8 p-4 bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 rounded-xl border border-accent-primary/20">
              <div className="text-xs text-text-tertiary uppercase tracking-wider mb-1">Key Result</div>
              <div
                className="font-mono text-lg font-bold"
                style={{ color: selectedProject.color }}
              >
                {selectedProject.keyStat}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-4">
              {selectedProject.links.github ? (
                <a
                  href={selectedProject.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-primary text-white rounded-lg hover:bg-accent-primary/90 transition-colors font-medium"
                >
                  <Github size={18} />
                  View Code
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 px-5 py-2.5 text-text-tertiary cursor-not-allowed">
                  <Clock size={18} />
                  Repository Available On Request
                </span>
              )}
              {selectedProject.links.live ? (
                <a
                  href={selectedProject.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-text-tertiary/20 text-text-primary rounded-lg hover:bg-surface-hover transition-colors font-medium"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 px-5 py-2.5 text-text-tertiary cursor-not-allowed">
                  <Clock size={18} />
                  Demo Coming Soon
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
