import {
  IconCheck,
  IconWorld,
  IconBrandGithub,
  IconArrowUpRight,
} from "@tabler/icons-react";
import type { FeaturedProject } from "../../types/experience";

interface MomahShowcaseMockupProps {
  featuredProject: FeaturedProject;
}

// One-off browser mockup for the Momah Component Documentation showcase.
// The right-column preview (nav brand, code snippet, rendered badge) is
// hand-written to that specific project rather than data-driven — if a
// second company ever gets a `featuredProject`, either extend `FeaturedProject`
// with mockup fields or fork this component instead of reusing it as-is.
const MomahShowcaseMockup = ({ featuredProject }: MomahShowcaseMockupProps) => {
  return (
    <div className="featured-project-wrapper">
      <div className="featured-project-card">
        {/* Header with Badges */}
        <div className="featured-card-header">
          <div className="featured-badge-group">
            <span className="featured-flagship-badge">{featuredProject.badge}</span>
            <span className="featured-status-badge">
              <span className="live-pulse-dot" />
              <span>{featuredProject.statusBadge}</span>
            </span>
          </div>
        </div>

        {/* Card Body - 2 Columns */}
        <div className="featured-card-body">
          {/* Left Column: Info & Details */}
          <div className="featured-info-col">
            <h4 className="featured-project-title">{featuredProject.projectName}</h4>
            <p className="featured-project-tagline">{featuredProject.tagline}</p>
            <p className="featured-project-description">{featuredProject.description}</p>

            {/* Metrics Chips */}
            <div className="featured-metrics-grid">
              {featuredProject.metrics.map((metric) => (
                <span key={metric} className="metric-tag">
                  <IconCheck size={13} className="metric-check-icon" />
                  <span>{metric}</span>
                </span>
              ))}
            </div>

            {/* Tech Stack Row */}
            <div className="featured-tech-row">
              <span className="tech-label">STACK:</span>
              <div className="tech-pills">
                {featuredProject.techStack.map((tech) => (
                  <span key={tech} className="tech-chip featured-tech-chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="featured-actions-row">
              <a
                href={featuredProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-live-doc"
              >
                <span>Live Documentation</span>
                <IconArrowUpRight size={16} />
              </a>
              {featuredProject.githubLink && (
                <a
                  href={featuredProject.githubLink}
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
                  <span className="url-text">momah-doc.bahaa.qzz.io</span>
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
                    Enterprise <span className="highlight">ASP.NET MVC</span> UI Library
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
                    <span className="code-file">Views/Shared/_Badge.cshtml</span>
                    <span className="copy-badge">Razor Partial</span>
                  </div>
                  <div className="code-body">
                    <code>
                      <span className="code-keyword">@await</span> Html.PartialAsync(
                      <span className="code-string">&quot;UI/_Badge&quot;</span>,{" "}
                      <span className="code-keyword">new</span> &#123; label ={" "}
                      <span className="code-string">&quot;Active&quot;</span>, bgColor ={" "}
                      <span className="code-string">&quot;#e6f2f2&quot;</span>, dot ={" "}
                      <span className="code-keyword">true</span> &#125;)
                    </code>
                  </div>
                  <div className="live-output-preview">
                    <span className="output-label">RENDERED OUTPUT:</span>
                    <div className="momah-badge">
                      <span className="badge-real-dot" />
                      <span className="badge-text">Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MomahShowcaseMockup;
