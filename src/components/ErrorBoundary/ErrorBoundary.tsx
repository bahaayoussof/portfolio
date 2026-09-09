import { Component, type ErrorInfo, type ReactNode } from "react";
import { IconAlertTriangle, IconRefresh } from "@tabler/icons-react";
import "./ErrorBoundary.scss";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

/**
 * UI-018 — app-level resilience.
 *
 * The app renders lazy sections behind Suspense; a render error or a failed
 * chunk fetch would otherwise leave a blank page. This catches that and shows
 * a calm, keyboard-accessible fallback built from the existing visual system.
 * "Try again" re-mounts the subtree (enough for a transient chunk failure);
 * "Reload page" is the reliable fallback. Raw error details go to the console
 * for development only — never to the user.
 */
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, info.componentStack);
  }

  handleRetry = () => {
    this.setState({ hasError: false });
  };

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div className="error-boundary" role="alert">
        <div className="error-boundary-card">
          <span className="error-boundary-icon" aria-hidden="true">
            <IconAlertTriangle size={22} />
          </span>
          <h2 className="error-boundary-title">Something went wrong</h2>
          <p className="error-boundary-text">
            This part of the page didn&apos;t load correctly. Trying again usually fixes
            it — if not, reload the page.
          </p>
          <div className="error-boundary-actions">
            <button
              type="button"
              className="error-boundary-btn error-boundary-btn--primary"
              onClick={this.handleRetry}
            >
              <IconRefresh size={16} aria-hidden="true" />
              <span>Try again</span>
            </button>
            <button
              type="button"
              className="error-boundary-btn"
              onClick={this.handleReload}
            >
              Reload page
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ErrorBoundary;
