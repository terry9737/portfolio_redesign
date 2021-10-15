// !left slider
export const slideLeftVariants = {
  hidden: { x: "-80vw", transition: { type: "tween" } },
  visible: { x: 0, transition: { type: "tween" } },
};

export const bipDotVariants = {
  hidden: {},
  visible: {
    scale: [1, 1.1, 1],
    transition: { duration: 3, repeat: Infinity, ease: "linear" },
  },
};

// !right slider
export const slideRightVariants = {
  hidden: {
    x: "30vw",
    transition: { duration: 0.5, ease: "linear", type: "tween" },
  },
  active: {
    x: 0,
    y: 0,
    transition: { duration: 0.5, ease: "linear", type: "tween" },
  },
};
