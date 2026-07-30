import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconMapPin,
  IconCalendar,
  IconBuildingSkyscraper,
  IconFolderCode,
  IconChevronDown,
  IconChevronUp,
} from "@tabler/icons-react";
import { companyExperiences } from "../../data";
import MomahShowcaseMockup from "./MomahShowcaseMockup";
import ProjectNestedCard from "./ProjectNestedCard";

import "./Experience.scss";

const Experience = () => {
  const [expandedCompanies, setExpandedCompanies] = useState<Record<string, boolean>>({});

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
          <h2 className="journey-title">Engineering Experience & Enterprise Impact</h2>
          <p className="journey-subtitle">
            A chronological narrative detailing companies, high-stakes client projects,
            technical hurdles, and delivered business results.
          </p>
        </div>

        {/* Company Cards List */}
        <div className="chapters-list">
          {companyExperiences.map((item, companyIndex) => {
            const projectsList = item.projects;
            const isExpanded = !!expandedCompanies[item.id];
            const visibleProjects = isExpanded ? projectsList : projectsList.slice(0, 1);

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
                  <MomahShowcaseMockup featuredProject={item.featuredProject} />
                )}

                {/* Grouped Client Projects List */}
                <div className="projects-container">
                  <AnimatePresence initial={false}>
                    {visibleProjects.map((project, projIndex) => {
                      const displayNumber = String(
                        projectsList.length - projIndex,
                      ).padStart(2, "0");

                      return (
                        <ProjectNestedCard
                          key={project.id}
                          project={project}
                          displayNumber={displayNumber}
                        />
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
