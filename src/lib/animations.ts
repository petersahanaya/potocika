export const easeOutQuart = [0.25, 1, 0.5, 1];

export const slideUp = {
  initial: {
    y: "0",
  },
  exit: {
    y: "-100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

export const fadeIn = {
  initial: {
    opacity: 1,
    transition: {
      type: "tween",
      ease: easeOutQuart,
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
  },
};
