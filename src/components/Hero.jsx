import { useState } from 'react';
import ParticleCanvas from './ParticleCanvas';
import { portfolioData } from '../data/portfolio';
import { ChevronDown, Github, Linkedin, Mail, MapPin, ExternalLink } from 'lucide-react';

const Hero = () => {
  const [photoLoaded, setPhotoLoaded] = useState(false);
  const [photoError, setPhotoError] = useState(false);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const initials = portfolioData.name
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Particle Canvas Background */}
      <div className="absolute inset-0">
        <ParticleCanvas />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-8 items-center">

          {/* Left Column: Text Content */}
          <div className="order-2 lg:order-1 flex flex-col items-start text-left space-y-8 animate-slide-up">

            {/* Availability Badge */}
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-primary/10 border border-accent-primary/20 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-text-secondary font-medium">
                {portfolioData.availability}
              </span>
            </div> */}

            {/* Name & Headline */}
            <div className="space-y-4 w-full">
              <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1]">
                <span className="text-text-primary block">{portfolioData.name}</span>
              </h1>

              <div className="space-y-2 text-xl sm:text-2xl text-text-secondary font-light tracking-wide max-w-2xl">
                <p className="flex items-center gap-2">
                  <span className="font-medium text-text-primary">{portfolioData.title}</span>
                  <span className="text-text-tertiary">|</span>
                  <span>{portfolioData.school}</span>
                </p>
                <p className="text-lg sm:text-xl opacity-90">
                  {portfolioData.availability}
                </p>
                <div className="flex items-center gap-2 text-accent-primary pt-2">
                  <MapPin size={20} className="text-accent-primary" />
                  <span className="text-lg">{portfolioData.location}</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full">
              <button
                onClick={scrollToContact}
                className="group px-8 py-4 bg-accent-primary text-white text-sm font-semibold rounded-xl 
                           hover:bg-accent-primary/90 transition-all duration-300 
                           hover:scale-105 hover:shadow-[0_0_40px_rgba(67,97,238,0.4)]
                           flex items-center gap-2"
              >
                Get In Touch
                <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>

            {/* Social Cards (Soham Style) */}
            <div className="flex flex-wrap gap-4 w-full pt-4">
              <SocialCard
                href={portfolioData.contact.linkedin}
                icon={<Linkedin size={20} />}
                label="LinkedIn"
              />
              <SocialCard
                href={portfolioData.contact.github}
                icon={<Github size={20} />}
                label="GitHub"
              />
              <SocialCard
                href={`mailto:${portfolioData.contact.email}`}
                icon={<Mail size={20} />}
                label="Email"
              />
            </div>
          </div>

          {/* Right Column: Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in">
            <div className="relative group">
              {/* Glowing Outer Ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500" />

              {/* Profile Image Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] rounded-full p-2 bg-background border border-text-tertiary/10 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-accent-primary/20 relative">
                  {!photoError && portfolioData.profileImage && (
                    <img
                      src={portfolioData.profileImage}
                      alt={portfolioData.name}
                      className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${photoLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                      onLoad={() => setPhotoLoaded(true)}
                      onError={() => setPhotoError(true)}
                    />
                  )}
                  {(!photoLoaded || photoError) && (
                    <div className="absolute inset-0 flex items-center justify-center bg-accent-primary/5 backdrop-blur-sm">
                      <span className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-accent-primary/40">
                        {initials}
                      </span>
                    </div>
                  )}
                </div>

                {/* Decorative border circle */}
                <div className="absolute inset-0 rounded-full border-[6px] border-accent-primary/30 pointer-events-none group-hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-tertiary">
        <span className="text-xs uppercase tracking-widest opacity-50">Scroll</span>
        <ChevronDown size={20} className="animate-bounce" />
      </div>
    </section>
  );
};

// Sub-component for Social Card Links
const SocialCard = ({ href, icon, label }) => (
  <a
    href={href}
    target={href.startsWith('mailto') ? "_self" : "_blank"}
    rel={!href.startsWith('mailto') ? "noopener noreferrer" : undefined}
    className="flex items-center gap-3 px-5 py-3 rounded-xl bg-surface border border-text-tertiary/10 
               hover:bg-surface-hover hover:border-accent-primary/30 transition-all duration-300 
               group min-w-[140px]"
  >
    <div className="text-accent-primary group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors">
      {label}
    </span>
  </a>
);

export default Hero;
