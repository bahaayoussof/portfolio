import { motion } from "framer-motion";
import {
  IconArrowRight,
  IconTerminal2,
  IconCode,
} from "@tabler/icons-react";
import { heroMetrics, featuredTechnologies, socialLinks } from "../../data";

import "./Header.scss";

const Header = () => {
  return (
    <section className="studio-hero-section" id="home">
      {/* Background Animated Subtle Glow & Mesh Grid */}
      <div className="hero-ambient-glow" />
      <div className="hero-grid-mesh" />

      <div className="studio-hero-container">
        {/* Top Tagline Badge */}
        <motion.div
          className="hero-tag-badge"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <IconTerminal2 size={16} className="tag-icon" />
          <span>SOFTWARE ENGINEER // FRONTEND & MOBILE</span>
        </motion.div>

        {/* Main Powerful Headline */}
        <motion.h1
          className="hero-main-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Building <span className="text-gradient">high-quality interfaces</span> & scalable web applications.
        </motion.h1>

        {/* Engineering Sub-text */}
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Passionate about creating user-friendly, efficient web and mobile applications with React, React Native, Vue 3, and Redux. Proven track record delivering scalable enterprise products.
        </motion.p>

        {/* Call-to-action buttons */}
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href="#work" className="btn-hero-primary">
            <span>Explore Featured Projects</span>
            <IconArrowRight size={18} />
          </a>

          <a href="#experience" className="btn-hero-secondary">
            <IconCode size={18} />
            <span>Career Journey</span>
          </a>

          <div className="hero-social-list">
            {socialLinks.map((social) => {
              const isMail = social.link.startsWith("mailto:");
              return (
                <a
                  key={social.id}
                  href={social.link}
                  target={isMail ? undefined : "_blank"}
                  rel={isMail ? undefined : "noreferrer"}
                  className="hero-social-link"
                  title={social.name}
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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {/* Terminal Window Header */}
          <div className="hud-header">
            <div className="hud-controls">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
            </div>
            <div className="hud-title">
              <span className="status-indicator" />
              <span className="title-text">bahaa-youssof ~ telemetry.sys</span>
            </div>
            <div className="hud-tag">
              <IconTerminal2 size={14} />
              <span>LIVE SYSTEM</span>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="hud-body">
            {/* Telemetry Stat Tiles */}
            <div className="hud-stats-grid">
              {heroMetrics.map((metric, index) => (
                <div key={`metric-${index}`} className="hud-stat-tile">
                  <div className="stat-top">
                    <span className="stat-value">{metric.value}</span>
                    <span className="stat-live-badge">ONLINE</span>
                  </div>
                  <span className="stat-label">{metric.label}</span>
                </div>
              ))}
            </div>

            {/* Terminal Command Line */}
            <div className="hud-cmd-line">
              <span className="cmd-prompt">$</span>
              <span className="cmd-text">sys.getTechStack()</span>
              <span className="cmd-flag">--verified</span>
            </div>

            {/* Tech Matrix Chips */}
            <div className="hud-tech-matrix">
              {featuredTechnologies.map((tech, idx) => (
                <div key={`tech-${idx}`} className="hud-tech-chip">
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
