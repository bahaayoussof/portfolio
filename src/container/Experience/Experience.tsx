import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconMapPin,
  IconCalendar,
  IconBuildingSkyscraper,
  IconCheck,
  IconFlame,
  IconTrendingUp,
  IconFolderCode,
  IconChevronDown,
  IconChevronUp,
  IconWorld,
  IconBrandGithub,
  IconArrowUpRight,
} from "@tabler/icons-react";
import { companyExperiences } from "../../data";

import "./Experience.scss";

const Experience = () => {
  const [expandedCompanies, setExpandedCompanies] = useState<
    Record<string, boolean>
  >({});

  const toggleCompanyExpanded = (companyId: string) => {
    setExpandedCompanies((prev) => ({
      ...prev,
      [companyId]: !prev[companyId],
    }));
  };

  return (
    <section className="studio-journey-section" id="experience">
      <div className="journey-container">
        {/* Section Header */}
        <div className="journey-header">
          <div className="journey-badge">
            <span>CAREER STORYTELLING JOURNEY</span>
          </div>
          <h2 className="journey-title">
            Engineering Experience & Enterprise Impact
          </h2>
          <p className="journey-subtitle">
            A chronological narrative detailing companies, high-stakes client
            projects, technical hurdles, and delivered business results.
          </p>
        </div>

        {/* Company Cards List */}
        <div className="chapters-list">
          {companyExperiences.map((item, companyIndex) => {
            const projectsList = [...item.projects].reverse();
            const isExpanded = !!expandedCompanies[item.id];
            const visibleProjects = isExpanded
              ? projectsList
              : projectsList.slice(0, 1);

            return (
              <motion.article
                key={item.id}
                className="company-card"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: companyIndex * 0.1 }}
              >
                {/* Company Header Bar */}
                <div className="company-top-bar">
                  <div className="company-info-group">
                    <div className="company-icon">
                      <IconBuildingSkyscraper size={24} />
                    </div>
                    <div>
                      <h3 className="company-name">{item.company}</h3>
                      <div className="role-title-row">
                        <h4 className="role-title">{item.role}</h4>
                        {item.isCurrent && (
                          <span className="current-badge">
                            <span className="pulse-dot" />
                            <span>ACTIVE</span>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="company-meta">
                    <span className="meta-item">
                      <IconCalendar size={14} />
                      <span>{item.overallPeriod}</span>
                    </span>
                    <span className="meta-item">
                      <IconMapPin size={14} />
                      <span>{item.location}</span>
                    </span>
                    <span className="meta-item projects-count-badge">
                      <IconFolderCode size={14} />
                      <span>
                        {item.projects.length}{" "}
                        {item.projects.length > 1 ? "Projects" : "Project"}
                      </span>
                    </span>
                  </div>
                </div>

                {/* Featured Flagship Project Showcase */}
                {item.featuredProject && (
                  <div className="featured-project-wrapper">
                    <div className="featured-project-card">
                      {/* Header with Badges */}
                      <div className="featured-card-header">
                        <div className="featured-badge-group">
                          <span className="featured-flagship-badge">
                            {item.featuredProject.badge}
                          </span>
                          <span className="featured-status-badge">
                            <span className="live-pulse-dot" />
                            <span>{item.featuredProject.statusBadge}</span>
                          </span>
                        </div>
                      </div>

                      {/* Card Body - 2 Columns */}
                      <div className="featured-card-body">
                        {/* Left Column: Info & Details */}
                        <div className="featured-info-col">
                          <h4 className="featured-project-title">
                            {item.featuredProject.projectName}
                          </h4>
                          <p className="featured-project-tagline">
                            {item.featuredProject.tagline}
                          </p>
                          <p className="featured-project-description">
                            {item.featuredProject.description}
                          </p>

                          {/* Metrics Chips */}
                          <div className="featured-metrics-grid">
                            {item.featuredProject.metrics.map((metric, idx) => (
                              <span key={idx} className="metric-tag">
                                <IconCheck
                                  size={13}
                                  className="metric-check-icon"
                                />
                                <span>{metric}</span>
                              </span>
                            ))}
                          </div>

                          {/* Tech Stack Row */}
                          <div className="featured-tech-row">
                            <span className="tech-label">STACK:</span>
                            <div className="tech-pills">
                              {item.featuredProject.techStack.map(
                                (tech, idx) => (
                                  <span
                                    key={idx}
                                    className="tech-chip featured-tech-chip"
                                  >
                                    {tech}
                                  </span>
                                ),
                              )}
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="featured-actions-row">
                            <a
                              href={item.featuredProject.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-live-doc"
                            >
                              <span>Live Documentation</span>
                              <IconArrowUpRight size={16} />
                            </a>
                            {item.featuredProject.githubLink && (
                              <a
                                href={item.featuredProject.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-github-repo"
                              >
                                <IconBrandGithub size={16} />
                                <span>Repository</span>
                              </a>
                            )}
                          </div>
                        </div>

                        {/* Right Column: Browser Mockup Preview */}
                        <div className="featured-preview-col">
                          <div className="browser-mockup">
                            <div className="browser-header">
                              <div className="browser-dots">
                                <span className="dot dot-red" />
                                <span className="dot dot-yellow" />
                                <span className="dot dot-green" />
                              </div>
                              <div className="browser-url-bar">
                                <IconWorld size={12} className="url-icon" />
                                <span className="url-text">
                                  momah-doc.bahaa.qzz.io
                                </span>
                              </div>
                            </div>
                            <div className="browser-content-momah">
                              {/* Top Nav Mock */}
                              <div className="momah-nav">
                                <div className="momah-brand">
                                  <span>Momah Components</span>
                                </div>
                              </div>

                              {/* Hero Title & Stats Strip */}
                              <div className="momah-hero-block">
                                <h5 className="momah-hero-title">
                                  Enterprise{" "}
                                  <span className="highlight">ASP.NET MVC</span>{" "}
                                  UI Library
                                </h5>
                                <div className="momah-stats-strip">
                                  <span className="stat-pill">
                                    <strong>19+</strong> Components
                                  </span>
                                  <span className="stat-pill">
                                    <strong>4</strong> Categories
                                  </span>
                                  <span className="stat-pill">
                                    <strong>100%</strong> Native
                                  </span>
                                </div>
                              </div>

                              {/* Live Code & Rendered Badge Box */}
                              <div className="code-window-mock">
                                <div className="code-header">
                                  <span className="code-file">
                                    Views/Shared/_Badge.cshtml
                                  </span>
                                  <span className="copy-badge">
                                    Razor Partial
                                  </span>
                                </div>
                                <div className="code-body">
                                  <code>
                                    <span className="code-keyword">@await</span>{" "}
                                    Html.PartialAsync(
                                    <span className="code-string">
                                      &quot;UI/_Badge&quot;
                                    </span>
                                    , <span className="code-keyword">new</span>{" "}
                                    &#123; label ={" "}
                                    <span className="code-string">
                                      &quot;Active&quot;
                                    </span>
                                    , bgColor ={" "}
                                    <span className="code-string">
                                      &quot;#e6f2f2&quot;
                                    </span>
                                    , dot ={" "}
                                    <span className="code-keyword">true</span>{" "}
                                    &#125;)
                                  </code>
                                </div>
                                <div className="live-output-preview">
                                  <span className="output-label">
                                    RENDERED OUTPUT:
                                  </span>
                                  <div className="momah-badge">
                                    <span className="badge-real-dot" />
                                    <span className="badge-text">
                                      Active
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Grouped Client Projects List */}
                <div className="projects-container">
                  <AnimatePresence initial={false}>
                    {visibleProjects.map((project, projIndex) => {
                      const displayNumber = String(
                        projectsList.length - projIndex,
                      ).padStart(2, "0");
                      const isCurrent = Boolean(project.isCurrent);

                      return (
                        <motion.div
                          key={project.id}
                          className="project-nested-card"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {/* Project Title & Badge */}
                          <div className="project-header">
                            <div className="project-title-group">
                              <span className="project-index-badge">
                                {displayNumber}
                              </span>
                              <div className="project-title-block">
                                <h4 className="project-name">
                                  {project.projectName}
                                </h4>
                                {isCurrent && (
                                  <span className="current-project-badge">
                                    <IconFlame size={13} />
                                    <span>CURRENT PROJECT</span>
                                  </span>
                                )}
                              </div>
                            </div>
                            {project.period && (
                              <span className="project-period">
                                {project.period}
                              </span>
                            )}
                          </div>

                          <p className="project-tagline">{project.tagline}</p>

                          {/* Grid Breakdown: Built, Challenges, Impact */}
                          <div className="chapter-grid">
                            <div className="grid-box built-box">
                              <div className="box-title">
                                <IconCheck size={16} className="icon-built" />
                                <span>WHAT WAS BUILT</span>
                              </div>
                              <p>{project.whatWasBuilt}</p>
                            </div>

                            <div className="grid-box challenge-box">
                              <div className="box-title">
                                <IconFlame
                                  size={16}
                                  className="icon-challenge"
                                />
                                <span>ENGINEERING CHALLENGES</span>
                              </div>
                              <p>{project.engineeringChallenges}</p>
                            </div>

                            <div className="grid-box impact-box">
                              <div className="box-title">
                                <IconTrendingUp
                                  size={16}
                                  className="icon-impact"
                                />
                                <span>IMPACT DELIVERED</span>
                              </div>
                              <p>{project.impact}</p>
                            </div>
                          </div>

                          {/* Tech Stack Pills */}
                          <div className="chapter-tech-row">
                            <span className="tech-label">STACK:</span>
                            <div className="tech-pills">
                              {project.techStack.map((tech, idx) => (
                                <span key={idx} className="tech-chip">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>

                  {item.projects.length > 1 && (
                    <div className="show-more-wrapper">
                      <button
                        className="btn-show-more-projects"
                        onClick={() => toggleCompanyExpanded(item.id)}
                      >
                        <span>
                          {isExpanded
                            ? "Show Fewer Projects"
                            : `Show More Projects (+${item.projects.length - 1})`}
                        </span>
                        {isExpanded ? (
                          <IconChevronUp size={16} />
                        ) : (
                          <IconChevronDown size={16} />
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
