import { motion } from "framer-motion";

function AnimatedBackground() {
  return (
    <div className="animated-background">
      <motion.div
        className="orb orb-one"
        animate={{
          x: [0, 120, 0],
          y: [0, 80, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="orb orb-two"
        animate={{
          x: [0, -100, 0],
          y: [0, -60, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="orb orb-three"
        animate={{
          x: [0, 70, 0],
          y: [0, -100, 0],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="grid-overlay" />
    </div>
  );
}

export default AnimatedBackground;