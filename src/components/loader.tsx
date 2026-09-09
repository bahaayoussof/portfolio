import { IconTerminal2, IconLoader2 } from "@tabler/icons-react";
import "./loader.scss";

/**
 * Suspense fallback.
 *
 * UI-003 — this used to run a `setInterval` that incremented a random fake
 * percentage and revealed scripted "boot" log lines, implying real load
 * progress it never had. It now communicates only what the app actually knows:
 * content is loading. The indeterminate track and spinner represent genuine
 * pending work (an unresolved Suspense boundary) and stop the instant it
 * resolves — there is no artificial minimum display time and no timers.
 */
export function Loader() {
  return (
    <div className="portfolio-loader" role="status" aria-live="polite" aria-busy="true">
      <div className="loader-ambient-glow" aria-hidden="true" />

      <div className="loader-hud-card">
        <div className="hud-header">
          <div className="hud-controls" aria-hidden="true">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
          </div>
          <div className="hud-title">
            <span className="title-text">bahaa-youssof ~ portfolio</span>
          </div>
          <div className="hud-tag" aria-hidden="true">
            <IconTerminal2 size={13} />
            <span>LOADING</span>
          </div>
        </div>

        <div className="hud-body">
          <div className="hud-cmd-row" aria-hidden="true">
            <span className="cmd-prompt">$</span>
            <span className="cmd-text">portfolio.load()</span>
          </div>

          {/* Indeterminate — the app does not know a percentage, so it shows none. */}
          <div className="loader-track" aria-hidden="true">
            <span className="loader-track-bar" />
          </div>

          <div className="loader-status-row">
            <IconLoader2 size={15} className="icon-spin" aria-hidden="true" />
            <span>Loading content…</span>
          </div>
        </div>
      </div>
    </div>
  );
}
