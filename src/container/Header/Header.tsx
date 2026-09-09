import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  IconArrowRight,
  IconTerminal2,
  IconFileText,
  IconCode,
  IconChartBar,
} from "@tabler/icons-react";
import { heroMetrics, featuredTechnologies, socialLinks } from "../../data";
import { useReveal, useTabPanelMotion, springPhysical } from "../../shared/motion";
import { nextTabIndex } from "../../shared/tabList";

import "./Header.scss";

type HudTabId = "code" | "metrics";

const HUD_TABS: { id: HudTabId; label: string; Icon: typeof IconCode }[] = [
  { id: "code", label: "engineer.ts", Icon: IconCode },
  { id: "metrics", label: "telemetry.stats", Icon: IconChartBar },
];

const Header = () => {
  const [hudTab, setHudTab] = useState<HudTabId>("code");
  const hudTabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const panelMotion = useTabPanelMotion();

  // UI-008 — small travel, fast settle, a total stagger window of ~200ms so the
  // hero reads immediately rather than presenting itself over ~1s.
  const reveal = useReveal();
  const rBadge = reveal({ duration: 0.4 });
  const rTitle = reveal({ duration: 0.4, delay: 0.05 });
  const rSubtitle = reveal({ duration: 0.4, delay: 0.1 });
  const rActions = reveal({ duration: 0.4, delay: 0.15 });
  const rHud = reveal({ duration: 0.45, delay: 0.2 });

  const onHudTabKeyDown = (event: React.KeyboardEvent, index: number) => {
    const next = nextTabIndex(event, index, HUD_TABS.length);
    if (next === null) return;
    hudTabRefs.current[next]?.focus();
    setHudTab(HUD_TABS[next].id);
  };

  return (
    <section className="studio-hero-section" id="home">
      {/* Background Animated Subtle Glow & Mesh Grid */}
      <div className="hero-ambient-glow" />
      <div className="hero-grid-mesh" />

      <div className="studio-hero-container">
        {/* Top Tagline Badge */}
        <motion.div
          className="hero-tag-badge"
          initial={rBadge.initial}
          animate={rBadge.target}
          transition={rBadge.transition}
        >
          <IconTerminal2 size={16} className="tag-icon" />
          <span>SOFTWARE ENGINEER // FRONTEND & MOBILE</span>
        </motion.div>

        {/* Main Powerful Headline */}
        <motion.h1
          className="hero-main-title"
          initial={rTitle.initial}
          animate={rTitle.target}
          transition={rTitle.transition}
        >
          Building <span className="text-gradient">high-quality interfaces</span> &
          scalable web applications.
        </motion.h1>

        {/* Supporting Subheading */}
        <motion.p
          className="hero-subtitle"
          initial={rSubtitle.initial}
          animate={rSubtitle.target}
          transition={rSubtitle.transition}
        >
          Specializing in React, Next.js, TypeScript, and React Native. Engineering
          high-concurrency SaaS applications, legal tech platforms, and interactive POS
          telemetry systems.
        </motion.p>

        {/* Action Buttons & Social Links */}
        <motion.div
          className="hero-actions"
          initial={rActions.initial}
          animate={rActions.target}
          transition={rActions.transition}
        >
          <a
            href="https://docs.google.com/document/d/1sFB48YhA56EVV90pBLlWGts-1O71cSAvuKz-9I2RZsw/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero-primary"
          >
            <span>Resume</span>
            <IconFileText size={18} />
          </a>

          <a href="#contact" className="btn-hero-secondary">
            <span>Get in Touch</span>
            <IconArrowRight size={18} />
          </a>

          <div className="hero-social-list">
            {socialLinks.map((social) => {
              const isMail = social.link.startsWith("mailto:");
              return (
                <a
                  key={social.id}
                  href={social.link}
                  target={isMail ? undefined : "_blank"}
                  rel={isMail ? undefined : "noopener noreferrer"}
                  className="hero-social-link"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* Interactive Developer Telemetry HUD */}
        <motion.div
          className="hero-telemetry-hud"
          initial={rHud.initial}
          animate={rHud.target}
          transition={rHud.transition}
        >
          {/* Terminal Window Header */}
          <div className="hud-header">
            <div className="hud-controls">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
            </div>

            <div className="hud-tab-switcher" role="tablist" aria-label="Terminal view">
              {HUD_TABS.map((tab, index) => {
                const selected = hudTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    ref={(el) => {
                      hudTabRefs.current[index] = el;
                    }}
                    id={`hud-tab-${tab.id}`}
                    role="tab"
                    type="button"
                    aria-selected={selected}
                    aria-controls={`hud-panel-${tab.id}`}
                    tabIndex={selected ? 0 : -1}
                    className={`hud-tab-btn ${selected ? "active" : ""}`}
                    onClick={() => setHudTab(tab.id)}
                    onKeyDown={(event) => onHudTabKeyDown(event, index)}
                  >
                    <tab.Icon size={13} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Terminal Body */}
          <div className="hud-body">
            <motion.div
              className="hud-panel-wrap"
              layout={!panelMotion.reduce}
              transition={springPhysical}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={hudTab}
                  id={`hud-panel-${hudTab}`}
                  role="tabpanel"
                  aria-labelledby={`hud-tab-${hudTab}`}
                  tabIndex={0}
                  initial={panelMotion.initial}
                  animate={panelMotion.animate}
                  exit={panelMotion.exit}
                  transition={panelMotion.transition}
                >
                  {hudTab === "code" ? (
                    <div className="hud-code-snippet">
                      <div className="code-table">
                        <div className="code-row">
                          <span className="ln">01</span>
                          <span className="code-line">
                            <span className="kw">const</span>{" "}
                            <span className="var">engineer</span>:{" "}
                            <span className="type">Developer</span> = &#123;
                          </span>
                        </div>
                        <div className="code-row">
                          <span className="ln">02</span>
                          <span className="code-line indent">
                            <span className="prop">name</span>:{" "}
                            <span className="str">&quot;Bahaa Youssof&quot;</span>,
                          </span>
                        </div>
                        <div className="code-row">
                          <span className="ln">03</span>
                          <span className="code-line indent">
                            <span className="prop">role</span>:{" "}
                            <span className="str">&quot;Frontend Engineer&quot;</span>,
                          </span>
                        </div>
                        <div className="code-row">
                          <span className="ln">04</span>
                          <span className="code-line indent">
                            <span className="prop">currentRole</span>:{" "}
                            <span className="str">
                              &quot;Frontend Engineer @ AZM Squad&quot;
                            </span>
                            ,
                          </span>
                        </div>
                        <div className="code-row">
                          <span className="ln">05</span>
                          <span className="code-line indent">
                            <span className="prop">specialties</span>: [
                            <span className="str">&quot;Legal Tech&quot;</span>,{" "}
                            <span className="str">&quot;Enterprise POS&quot;</span>,{" "}
                            <span className="str">&quot;Real-Time Sync&quot;</span>],
                          </span>
                        </div>
                        <div className="code-row">
                          <span className="ln">06</span>
                          <span className="code-line indent">
                            <span className="prop">status</span>:{" "}
                            <span className="str">
                              &quot;Building high-scale SaaS web applications&quot;
                            </span>
                          </span>
                        </div>
                        <div className="code-row">
                          <span className="ln">07</span>
                          <span className="code-line">&#125;;</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="hud-stats-grid">
                      {heroMetrics.map((metric) => (
                        <div key={metric.label} className="hud-stat-tile">
                          <span className="stat-value">{metric.value}</span>
                          <span className="stat-label">{metric.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Terminal Command Line */}
            <div className="hud-cmd-line">
              <div className="cmd-left">
                <span className="cmd-prompt">$</span>
                <span className="cmd-text">sys.getTechStack()</span>
              </div>
            </div>

            {/* Tech Matrix Chips */}
            <div className="hud-tech-matrix">
              {featuredTechnologies.map((tech) => (
                <div key={tech.name} className="hud-tech-chip">
                  <span className="chip-badge">{tech.badge}</span>
                  <span className="chip-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Header;
