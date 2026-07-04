export const revealViewport = {
  once: true,
  amount: 0.18,
};

export const revealContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

export const revealItem = {
  hidden: {
    opacity: 0,
    y: "var(--reveal-distance, 24px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

export const subtleStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.055,
    },
  },
};

export const subtleStaggerItem = {
  hidden: {
    opacity: 0,
    y: "var(--reveal-stagger-distance, 12px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.48,
      ease: "easeOut",
    },
  },
};

export const footerReveal = {
  hidden: {
    opacity: 0,
    y: "var(--reveal-distance, 24px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
