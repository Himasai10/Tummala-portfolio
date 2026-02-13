// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-[60] origin-left"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, var(--color-accent-primary), var(--color-accent-secondary))',
        boxShadow: '0 0 10px var(--color-accent-glow), 0 0 5px var(--color-accent-primary)',
      }}
    />
  )
}
