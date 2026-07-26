import { useState } from "react";
import { motion } from "framer-motion";
import {
  IconArrowUpRight,
  IconBrandGithub,
  IconSparkles,
  IconCpu,
} from "@tabler/icons-react";
import { flagshipProject, studioProjects } from "../../data";

import "./Work.scss";

const Work = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <section className="studio-work-section" id="work">
      <div className="work-container">
        {/* Section Header */}
        <div className="work-header">
          <div className="work-badge">
            <span>FEATURED PRODUCT SHOWCASE</span>
          </div>
          <h2 className="work-title">Crafted Digital Products & Web Platforms</h2>
          <p className="work-subtitle">
            Replacing generic template cards with full-scale engineering breakdowns.
          </p>
        </div>

        {/* 1. Large Flagship Project Showcase */}
        <motion.div
          className="flagship-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flagship-badge">
            <IconSparkles size={14} />
            <span>FLAGSHIP PROJECT</span>
          </div>

          <div className="flagship-grid">
            {/* Left: Product Info */}
            <div className="flagship-info">
              <span className="flagship-category">{flagshipProject.category}</span>
              <h3 className="flagship-title">{flagshipProject.title}</h3>
              <p className="flagship-desc">{flagshipProject.description}</p>

              {/* Sub-nav Tabs */}
              <div className="flagship-tabs">
                <button
                  className={`tab-btn ${activeTab === "overview" ? "active" : ""}`}
                  onClick={() => setActiveTab("overview")}
                >
                  Overview
                </button>
                <button
                  className={`tab-btn ${activeTab === "architecture" ? "active" : ""}`}
                  onClick={() => setActiveTab("architecture")}
                >
                  Architecture
                </button>
              </div>

              <div className="flagship-tab-content">
                {activeTab === "overview" ? (
                  <p className="tab-text">
                    <strong>Impact:</strong> {flagshipProject.impact}
                  </p>
                ) : (
                  <p className="tab-text">
                    <strong>Architecture:</strong> {flagshipProject.architecture}
                  </p>
                )}
              </div>

              {/* Impact Metrics Row */}
              <div className="flagship-metrics">
                {flagshipProject.metrics.map((m, idx) => (
                  <div key={idx} className="metric-box">
                    <span className="box-value">{m.value}</span>
                    <span className="box-label">{m.label}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Badges */}
              <div className="flagship-tech-list">
                {flagshipProject.techStack.map((tech, idx) => (
                  <span key={idx} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flagship-actions">
                {flagshipProject.projectLink && (
                  <a
                    href={flagshipProject.projectLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-live-demo"
                  >
                    <span>Launch Live Application</span>
                    <IconArrowUpRight size={16} />
                  </a>
                )}
                <a
                  href={flagshipProject.codeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-code-link"
                >
                  <IconBrandGithub size={18} />
                  <span>Repository</span>
                </a>
              </div>
            </div>

            {/* Right: Immersive Screenshot */}
            <div className="flagship-preview">
              <div className="browser-mockup-header">
                <div className="mockup-dots">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <span className="mockup-url">https://resumind-by.vercel.app</span>
              </div>
              <div className="mockup-image-wrap">
                <img src={flagshipProject.imageUrl} alt={flagshipProject.title} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. Secondary Curated Studio Projects */}
        <div className="studio-projects-grid">
          {studioProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="studio-project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="project-image-container">
                <img src={project.imageUrl} alt={project.title} />
                <div className="project-overlay">
                  <div className="overlay-actions">
                    {project.projectLink && (
                      <a
                        href={project.projectLink}
                        target="_blank"
                        rel="noreferrer"
                        className="overlay-btn"
                      >
                        <IconArrowUpRight size={18} />
                      </a>
                    )}
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noreferrer"
                      className="overlay-btn"
                    >
                      <IconBrandGithub size={18} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-top">
                  <span className="project-cat">{project.category}</span>
                  <h4 className="project-title">{project.title}</h4>
                </div>
                <p className="project-desc">{project.description}</p>
                <div className="project-highlight">
                  <IconCpu size={16} />
                  <span>{project.highlight}</span>
                </div>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
