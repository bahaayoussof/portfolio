import type { ReactNode } from "react";
import "./BrowserFrame.scss";

interface BrowserFrameProps {
  /** Address / title shown in the chrome. Omit for a bare frame. */
  url?: ReactNode;
  /** Optional leading glyph inside the address area (e.g. a globe icon). */
  urlIcon?: ReactNode;
  children: ReactNode;
  className?: string;
}

/**
 * UI-024 — the shared browser-chrome shell.
 *
 * Work's flagship preview and Experience's featured showcase each hand-rolled
 * the same top chrome (three traffic-light dots + an address line) around
 * different content. This centralises that shell; the content slot stays local
 * to each caller. The dots are purely decorative (`aria-hidden`) and no
 * pseudo-interactive buttons are added.
 *
 * The Header/Loader terminal HUDs are deliberately NOT migrated here — they are
 * a tab-switcher pattern, not browser chrome.
 */
export function BrowserFrame({ url, urlIcon, children, className }: BrowserFrameProps) {
  return (
    <div className={`browser-frame${className ? ` ${className}` : ""}`}>
      <div className="browser-frame__chrome">
        <div className="browser-frame__dots" aria-hidden="true">
          <span className="browser-frame__dot browser-frame__dot--red" />
          <span className="browser-frame__dot browser-frame__dot--yellow" />
          <span className="browser-frame__dot browser-frame__dot--green" />
        </div>
        {url != null && (
          <div className="browser-frame__address">
            {urlIcon != null && (
              <span className="browser-frame__address-icon" aria-hidden="true">
                {urlIcon}
              </span>
            )}
            <span className="browser-frame__address-text">{url}</span>
          </div>
        )}
      </div>
      <div className="browser-frame__body">{children}</div>
    </div>
  );
}

export default BrowserFrame;
