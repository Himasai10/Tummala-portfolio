import { portfolioData } from '../data/portfolio';
import { Github, Linkedin, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import ParticleCanvas from './ParticleCanvas';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="py-32 px-6 relative overflow-hidden flex flex-col items-center justify-center">
      {/* Particle Canvas Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <ParticleCanvas />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background via-background/80 to-transparent" />

      <div className="w-full max-w-5xl mx-auto relative z-10 flex flex-col items-center">

        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-heading text-5xl md:text-6xl font-bold tracking-tighter text-text-primary">
            Get In Touch
          </h2>
          <p className="text-xl text-text-tertiary">
            Open to Fall 2026 co-op opportunities
          </p>
        </div>

        {/* Main Glass Card Container */}
        <div className="w-full glass rounded-3xl p-8 md:p-12 border border-text-tertiary/10 bg-surface/50 backdrop-blur-xl shadow-2xl">

          <div className="text-center mb-12">
            <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
              I'm currently seeking Fall 2026 Co-op opportunities in software engineering and quantitative development.
              Feel free to reach out!
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Email Card */}
            <ContactCard
              href={`mailto:${portfolioData.contact.email}`}
              icon={<Mail size={24} />}
              label="Email"
              value={portfolioData.contact.email}
              delay={0}
            />

            {/* LinkedIn Card */}
            <ContactCard
              href={portfolioData.contact.linkedin}
              icon={<Linkedin size={24} />}
              label="LinkedIn"
              value="linkedin.com/in/himasai-tummala"
              delay={100}
            />

            {/* GitHub Card */}
            <ContactCard
              href={portfolioData.contact.github}
              icon={<Github size={24} />}
              label="GitHub"
              value="github.com/Himasai10"
              delay={200}
            />

          </div>
        </div>

        {/* Footer Metadata */}
        <div className="mt-20 text-center space-y-6">
          <div className="flex items-center justify-center gap-2 text-text-secondary">
            <MapPin size={16} className="text-accent-primary" />
            <span>Based in Philadelphia, PA</span>
          </div>

          <div className="text-sm text-text-tertiary flex flex-col items-center gap-2">
            <p>© {currentYear} {portfolioData.name}. All rights reserved.</p>
            <p className="opacity-50 text-xs">Built with React, Vite & Tailwind</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

// Sub-component for Grid Cards
const ContactCard = ({ href, icon, label, value, delay }) => (
  <a
    href={href}
    target={href.startsWith('mailto') ? "_self" : "_blank"}
    rel={!href.startsWith('mailto') ? "noopener noreferrer" : undefined}
    className="group flex items-center p-4 rounded-xl bg-surface-hover/50 border border-text-tertiary/10 
               hover:bg-surface-hover hover:border-accent-primary/30 transition-all duration-300 
               hover:-translate-y-1 hover:shadow-lg relative overflow-hidden"
    style={{ animationDelay: `${delay}ms` }}
  >
    {/* Icon Container */}
    <div className="p-3 rounded-lg bg-surface text-text-secondary group-hover:text-accent-primary 
                    group-hover:bg-accent-primary/10 transition-colors duration-300 mr-4">
      {icon}
    </div>

    {/* Text Content */}
    <div className="flex-1 min-w-0">
      <div className="text-xs text-text-tertiary font-medium mb-0.5 uppercase tracking-wider">
        {label}
      </div>
      <div className="text-text-primary font-medium truncate group-hover:text-accent-primary transition-colors">
        {value}
      </div>
    </div>

    {/* External Link Icon (Fade in on hover) */}
    <div className="opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
      <ArrowUpRight size={18} className="text-text-tertiary" />
    </div>
  </a>
);

export default Footer;
