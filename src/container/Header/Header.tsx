import { useState } from "react";
import { motion } from "framer-motion";
import {
  IconArrowRight,
  IconTerminal2,
  IconFileText,
  IconCode,
  IconChartBar,
} from "@tabler/icons-react";
import { heroMetrics, featuredTechnologies, socialLinks } from "../../data";
import { useReveal } from "../../shared/motion";

import "./Header.scss";

const Header = () => {
  const [hudTab, setHudTab] = useState<"code" | "metrics">("code");
  const reveal = useReveal();
  const rBadge = reveal({ y: 15, duration: 0.5 });
  const rTitle = reveal({ y: 20, duration: 0.6, delay: 0.1 });
  const rSubtitle = reveal({ y: 20, duration: 0.6, delay: 0.2 });
  const rActions = reveal({ y: 20, duration: 0.6, delay: 0.3 });
  const rHud = reveal({ y: 30, duration: 0.7, delay: 0.4 });

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

            <div className="hud-tab-switcher">
              <button
                className={`hud-tab-btn ${hudTab === "code" ? "active" : ""}`}
                onClick={() => setHudTab("code")}
              >
                <IconCode size={13} />
                <span>engineer.ts</span>
              </button>
              <button
                className={`hud-tab-btn ${hudTab === "metrics" ? "active" : ""}`}
                onClick={() => setHudTab("metrics")}
              >
                <IconChartBar size={13} />
                <span>telemetry.stats</span>
              </button>
            </div>

            <div className="hud-tag">
              <IconTerminal2 size={16} />
              <span>LIVE SYSTEM</span>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="hud-body">
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
                      <span className="str">&quot;Frontend Engineer @ AZM Squad&quot;</span>,
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
                    <div className="stat-top">
                      <span className="stat-value">{metric.value}</span>
                      <span className="stat-live-badge">ONLINE</span>
                    </div>
                    <span className="stat-label">{metric.label}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Terminal Command Line */}
            <div className="hud-cmd-line">
              <div className="cmd-left">
                <span className="cmd-prompt">$</span>
                <span className="cmd-text">sys.getTechStack()</span>
                <span className="cmd-flag">--verified</span>
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
