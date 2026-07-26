import { useState, useEffect } from "react";
import { IconTerminal2, IconCpu, IconCheck } from "@tabler/icons-react";
import "./loader.scss";

const BOOT_STEPS = [
  "Initializing core modules...",
  "Mounting design tokens & UI components...",
  "Establishing telemetry connection...",
  "System ready. Launching portfolio...",
];

export function Loader() {
  const [progress, setProgress] = useState(15);
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 20) + 12;
        return next > 100 ? 100 : next;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress > 35 && stepIndex === 0) setStepIndex(1);
    if (progress > 70 && stepIndex === 1) setStepIndex(2);
    if (progress >= 100 && stepIndex === 2) setStepIndex(3);
  }, [progress, stepIndex]);

  return (
    <div className="portfolio-loader">
      <div className="loader-ambient-glow" />

      <div className="loader-hud-card">
        {/* Terminal Header */}
        <div className="hud-header">
          <div className="hud-controls">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
          </div>
          <div className="hud-title">
            <span className="status-indicator" />
            <span className="title-text">bahaa-youssof ~ boot.sys</span>
          </div>
          <div className="hud-tag">
            <IconTerminal2 size={13} />
            <span>BOOTING</span>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="hud-body">
          <div className="hud-cmd-row">
            <span className="cmd-prompt">$</span>
            <span className="cmd-text">sys.initSequence()</span>
            <span className="cmd-flag">--verbose</span>
          </div>

          {/* Progress Section */}
          <div className="progress-section">
            <div className="progress-bar-track">
              <div
                className="progress-bar-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="progress-meta">
              <span className="progress-percent">{progress}%</span>
              <span className="progress-status">
                <IconCpu size={14} className="icon-spin" />
                <span>{progress === 100 ? "READY" : "LOADING"}</span>
              </span>
            </div>
          </div>

          {/* Log Console Output */}
          <div className="hud-log-console">
            {BOOT_STEPS.slice(0, stepIndex + 1).map((step, idx) => (
              <div key={idx} className="log-line">
                <IconCheck size={13} className="log-icon-check" />
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

