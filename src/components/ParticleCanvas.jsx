import { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const ParticleCanvas = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: null, y: null, active: false });
  const isActiveRef = useRef(true);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Check for mobile
    const isMobile = window.matchMedia('(pointer: coarse)').matches;
    const particleCount = isMobile ? 40 : 120;
    const connectionDistance = 100;
    const mouseRadius = 200;

    // Resize canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize particles with varied properties
    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 2.5 + 0.5,
          opacity: Math.random() * 0.6 + 0.3,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.02 + 0.01,
          color: Math.random() > 0.7 ? '#4cc9f0' : '#4361ee',
        });
      }
    };

    // Draw particles and connections
    const draw = () => {
      if (!isActiveRef.current || prefersReducedMotion) return;

      // Semi-transparent clear for trail effect
      const clearColor = theme === 'light' ? 'rgba(248, 249, 252, 0.1)' : 'rgba(3, 3, 5, 0.1)';
      ctx.fillStyle = clearColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach((particle) => {
        // Pulse effect
        particle.pulse += particle.pulseSpeed;
        const pulseFactor = Math.sin(particle.pulse) * 0.3 + 1;
        
        // Mouse repulsion/attraction effect
        if (mouseRef.current.x !== null && mouseRef.current.y !== null) {
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < mouseRadius) {
            const force = (mouseRadius - dist) / mouseRadius;
            const angle = Math.atan2(dy, dx);
            // Push particles away from mouse
            const pushForce = force * 2;
            particle.vx -= Math.cos(angle) * pushForce * 0.05;
            particle.vy -= Math.sin(angle) * pushForce * 0.05;
          }
        }

        // Add slight randomness to movement
        particle.vx += (Math.random() - 0.5) * 0.05;
        particle.vy += (Math.random() - 0.5) * 0.05;

        // Apply velocity with damping
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Apply friction
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        // Ensure minimum movement
        const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
        if (speed < 0.3) {
          particle.vx += (Math.random() - 0.5) * 0.5;
          particle.vy += (Math.random() - 0.5) * 0.5;
        }

        // Wrap around edges instead of bounce
        if (particle.x < -50) particle.x = canvas.width + 50;
        if (particle.x > canvas.width + 50) particle.x = -50;
        if (particle.y < -50) particle.y = canvas.height + 50;
        if (particle.y > canvas.height + 50) particle.y = -50;

        // Draw particle with glow
        const currentSize = particle.size * pulseFactor;
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, currentSize * 2
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(0.4, particle.color + '80');
        gradient.addColorStop(1, 'transparent');
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, currentSize * 2, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw core
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, currentSize * 0.5, 0, Math.PI * 2);
        const coreColor = theme === 'light' 
          ? `rgba(15, 23, 42, ${particle.opacity})`
          : `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fillStyle = coreColor;
        ctx.fill();
      });

      // Draw connections with gradient lines
      for (let i = 0; i < particlesRef.current.length; i++) {
        const particle = particlesRef.current[i];
        let connections = 0;
        
        for (let j = i + 1; j < particlesRef.current.length && connections < 3; j++) {
          const other = particlesRef.current[j];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            connections++;
            const opacity = (1 - dist / connectionDistance) * 0.3;
            const gradient = ctx.createLinearGradient(
              particle.x, particle.y, other.x, other.y
            );
            gradient.addColorStop(0, `rgba(67, 97, 238, ${opacity})`);
            gradient.addColorStop(0.5, `rgba(76, 201, 240, ${opacity * 1.5})`);
            gradient.addColorStop(1, `rgba(67, 97, 238, ${opacity})`);
            
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    // Mouse handlers
    const handleMouseMove = (e) => {
      mouseRef.current = { 
        x: e.clientX, 
        y: e.clientY, 
        active: true 
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: null, y: null, active: false };
    };

    // Visibility change handler
    const handleVisibilityChange = () => {
      if (document.hidden) {
        isActiveRef.current = false;
        cancelAnimationFrame(animationRef.current);
      } else {
        isActiveRef.current = true;
        draw();
      }
    };

    // Initialize
    resizeCanvas();
    initParticles();

    // Full clear to prevent ghost artifacts from previous theme
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Only start animation if not reduced motion
    if (!prefersReducedMotion) {
      draw();
    }

    // Event listeners
    const handleResize = () => {
      resizeCanvas();
      initParticles();
    };
    window.addEventListener('resize', handleResize);
    
    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseleave', handleMouseLeave);
    }
    
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ 
        zIndex: 0,
        background: 'transparent'
      }}
    />
  );
};

export default ParticleCanvas;
