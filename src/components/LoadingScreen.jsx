import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const loadingMessages = [
  "Initializing Data Core",
  "Loading Analytics Modules",
  "Establishing Secure Interface",
  "System Ready",
];

function LoadingScreen({ onComplete }) {
  const prefersReducedMotion = useReducedMotion();
  const [messageIndex, setMessageIndex] = useState(0);
  const duration = prefersReducedMotion ? 350 : 1900;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const messageTimers = prefersReducedMotion
      ? []
      : loadingMessages.slice(1).map((_, index) =>
          setTimeout(
            () => setMessageIndex(index + 1),
            450 + index * 430,
          ),
        );
    const completionTimer = setTimeout(onComplete, duration);

    return () => {
      messageTimers.forEach(clearTimeout);
      clearTimeout(completionTimer);
      document.body.style.overflow = previousOverflow;
    };
  }, [duration, onComplete, prefersReducedMotion]);

  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: prefersReducedMotion ? 1 : 1.025 }}
      transition={{ duration: prefersReducedMotion ? 0.12 : 0.48 }}
      role="status"
      aria-live="polite"
      aria-label="Portfolio loading"
    >
      <div className="loading-screen-grid" aria-hidden="true" />
      <div className="loading-screen-glow" aria-hidden="true" />

      <div className="loading-screen-content">
        <div className="loading-screen-mark" aria-hidden="true">
          <span>CL</span>
          <i />
        </div>

        <div className="loading-screen-logo">Charith<span>.OS</span></div>
        <p>{loadingMessages[messageIndex]}</p>

        <div className="loading-progress-track" aria-hidden="true">
          <motion.div
            className="loading-progress-value"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: duration / 1000, ease: "easeInOut" }}
          />
        </div>

        <div className="loading-screen-meta" aria-hidden="true">
          <span>DATA_INTELLIGENCE_INTERFACE</span>
          <span>{messageIndex === loadingMessages.length - 1 ? "READY" : "BOOTING"}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default LoadingScreen;
