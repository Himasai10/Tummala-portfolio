import { useRef, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Briefcase, GraduationCap, Award, Heart, Trophy } from 'lucide-react';

const getIcon = (type) => {
  const iconClass = "w-5 h-5";
  switch (type) {
    case 'work': return <Briefcase className={iconClass} />;
    case 'education': return <GraduationCap className={iconClass} />;
    case 'achievement': return <Trophy className={iconClass} />;
    case 'volunteer': return <Heart className={iconClass} />;
    default: return <Award className={iconClass} />;
  }
};

const LogoOrIcon = ({ item }) => {
  const [logoError, setLogoError] = useState(false);

  if (item.logo && !logoError) {
    return (
      <img
        src={item.logo}
        alt={`${item.org} logo`}
        className="w-5 h-5 object-contain"
        onError={() => setLogoError(true)}
      />
    );
  }
  return getIcon(item.type);
};

const getTypeLabel = (type) => {
  switch (type) {
    case 'work': return 'Experience';
    case 'education': return 'Education';
    case 'achievement': return 'Achievement';
    case 'volunteer': return 'Volunteer';
    default: return 'Milestone';
  }
};

const TimelineItem = ({ item, index }) => {
  const ref = useRef(null);

  return (
    <div
      ref={ref}
      className={`relative flex items-center justify-between gap-8 py-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
        }`}
    >
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ margin: "-10% 0px", once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
      >
        <div className={`glass glass-hover p-8 rounded-2xl inline-block w-full ${index % 2 === 0 ? 'md:mr-0' : 'md:ml-0'
          }`}>
          {/* Type Badge */}
          <div className={`flex items-center gap-2 mb-3 text-accent-primary text-xs font-medium uppercase tracking-wider ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
            }`}>
            {getIcon(item.type)}
            <span>{getTypeLabel(item.type)}</span>
          </div>

          {/* Year */}
          <span className="font-mono text-text-tertiary text-sm">{item.year}</span>

          {/* Title */}
          <h3 className="text-xl font-bold text-text-primary mt-1 mb-1">
            {item.title}
          </h3>

          {/* Organization with Logo */}
          <div className={`flex items-center gap-2 mb-4 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
            <LogoOrIcon item={item} />
            <p className="text-text-secondary font-medium">
              {item.org}
            </p>
          </div>

          {/* Description */}
          {Array.isArray(item.description) ? (
            <ul className={`text-text-secondary/80 text-sm leading-relaxed mb-4 space-y-2 ${
              index % 2 === 0 ? 'md:text-right' : 'md:text-left'
            }`}>
              {item.description.map((point, i) => (
                <li key={i} className={`flex gap-2 ${
                  index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''
                }`}>
                  <span className="text-accent-primary mt-1 shrink-0">&#8226;</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-text-secondary/80 text-sm leading-relaxed mb-4">
              {item.description}
            </p>
          )}

          {/* Metrics */}
          <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
            {item.metrics.map((metric, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-medium rounded-full bg-accent-primary/10 text-accent-primary border border-accent-primary/20"
              >
                {metric}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Center Dot */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
        <div className="w-4 h-4 rounded-full bg-accent-primary border-4 border-background shadow-[0_0_20px_rgba(67,97,238,0.5)]" />
      </div>

      {/* Mobile Dot */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 md:hidden">
        <div className="w-3 h-3 rounded-full bg-accent-primary border-2 border-background" />
      </div>

      {/* Spacer for alternating layout */}
      <div className="flex-1 hidden md:block" />
    </div>
  );
};

const Timeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="timeline" className="section-padding relative overflow-hidden" ref={containerRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container-width relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-accent-primary font-mono text-sm tracking-wider uppercase mb-4 block">
            Experience Timeline
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience & Achievements</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A concise view of roles, projects, and outcomes that shaped my software and analytics approach.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-text-tertiary/20 md:-translate-x-1/2" />

          {/* Active Progress Line */}
          <motion.div
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-primary to-accent-secondary md:-translate-x-1/2 origin-top"
            style={{ scaleY }}
          />

          {/* Items */}
          <div className="space-y-0 pl-8 md:pl-0">
            {portfolioData.timeline.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
