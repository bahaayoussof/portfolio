import type { KeyboardEvent } from "react";

export function nextTabIndex(
  event: KeyboardEvent,
  currentIndex: number,
  count: number,
): number | null {
  let next: number | null = null;

  switch (event.key) {
    case "ArrowRight":
    case "ArrowDown":
      next = (currentIndex + 1) % count;
      break;
    case "ArrowLeft":
    case "ArrowUp":
      next = (currentIndex - 1 + count) % count;
      break;
    case "Home":
      next = 0;
      break;
    case "End":
      next = count - 1;
      break;
    default:
      return null;
  }

  event.preventDefault();
  return next;
}
