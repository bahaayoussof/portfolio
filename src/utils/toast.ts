import toast from "react-hot-toast";

/**
 * Imperative toast helper. Not a React component — call directly in event handlers.
 */
export function showToast(type: "success" | "error", message: string, id: string): void {
  toast[type](message, { id });
}
