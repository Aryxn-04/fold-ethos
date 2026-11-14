// @ts-check

/** Shared easing curves from the Fold Ethos charter. */
export const EASING = Object.freeze({
  reveal: "cubic-bezier(0.16, 1, 0.3, 1)",
  transition: "power3.inOut",
});

/** Animation duration bounds in seconds. */
export const DURATION = Object.freeze({ min: 0.6, max: 1.2 });

/** Stagger bounds in seconds. */
export const STAGGER = Object.freeze({ min: 0.04, max: 0.08 });
