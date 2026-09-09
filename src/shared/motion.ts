import { useReducedMotion } from "framer-motion";
import type { Transition } from "framer-motion";

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
    const { y = 10, delay = 0, duration = 0.4 } = options;

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

export const cappedStagger = (index: number, step = 0.05, max = 0.15): number =>
  Math.min(index * step, max);

export const springPhysical: Transition = {
  type: "spring",
  bounce: 0,
  duration: 0.35,
};

export interface TabPanelMotion {
  reduce: boolean;
  initial: Record<string, number>;
  animate: Record<string, number>;
  exit: Record<string, number>;
  transition: Transition;
}

export function useTabPanelMotion(): TabPanelMotion {
  const reduce = useReducedMotion();

  if (reduce) {
    return {
      reduce: true,
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.1 },
    };
  }

  return {
    reduce: false,
    initial: { opacity: 0, y: 4 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -2 },
    transition: { duration: 0.18, ease: "easeOut" },
  };
}
