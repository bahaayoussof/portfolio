import { useReducedMotion } from "framer-motion";

/**
 * Entrance / scroll-reveal transition props, reduced-motion aware.
 *
 * Normal motion: unchanged from before — a short opacity fade plus a small
 * vertical travel, with optional stagger delay.
 * Reduced motion (`prefers-reduced-motion: reduce`): a short opacity fade only,
 * no vertical travel, no stagger — feedback is preserved, vestibular motion is not.
 *
 * `useReveal()` is a hook (reads the OS preference once); the value it returns is a
 * plain builder function that is safe to call in a render loop / `.map()`.
 */
export interface RevealOptions {
  y?: number;
  delay?: number;
  duration?: number;
}

export interface RevealProps {
  initial: Record<string, number>;
  target: Record<string, number>;
  transition: { duration: number; delay: number };
}

export function useReveal(): (options?: RevealOptions) => RevealProps {
  const reduce = useReducedMotion();

  return (options: RevealOptions = {}): RevealProps => {
    const { y = 20, delay = 0, duration = 0.6 } = options;

    if (reduce) {
      return {
        initial: { opacity: 0 },
        target: { opacity: 1 },
        transition: { duration: 0.2, delay: 0 },
      };
    }

    return {
      initial: { opacity: 0, y },
      target: { opacity: 1, y: 0 },
      transition: { duration, delay },
    };
  };
}
