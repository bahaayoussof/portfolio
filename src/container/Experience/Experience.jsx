import React, { useState } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { experiences } from "../../data";
import {
  IconCalendarWeek,
  IconMapPin,
  IconBrandDatabricks,
  IconMedal,
  IconChevronDown,
  IconChevronUp,
} from "@tabler/icons-react";

import "./Experience.scss";

const Experience = () => {
  // Get all work IDs and set them as collapsed by default
  const allWorkIds = experiences.flatMap((exp) =>
    exp.works.map((work) => work.id)
  );

  // Get the work ID that has "Present" in the date (current position)
  const presentWorkId = experiences
    .flatMap((exp) => exp.works)
    .find((work) => work.date.includes("Present"))?.id;

  // Initialize with all cards collapsed except the one with "Present" in date
  const [collapsedCards, setCollapsedCards] = useState(() => {
    const initialCollapsed = new Set(allWorkIds);
    if (presentWorkId) {
      initialCollapsed.delete(presentWorkId);
    }
    return initialCollapsed;
  });

  const toggleCard = (workId) => {
    setCollapsedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(workId)) {
        newSet.delete(workId);
      } else {
        newSet.add(workId);
      }
      return newSet;
    });
  };

  const isCollapsed = (workId) => collapsedCards.has(workId);

  return (
    <>
      <h2 className="head-text">Experience</h2>

      <div className="app__experience-container">
        <div className="app__timeline">
          <div className="timeline-line" />
          {[...experiences]
            .slice()
            .reverse()
            .map((experience, yearIdx) => (
              <div
                className={`timeline-year-group ${
                  yearIdx % 2 === 0 ? "left" : "right"
                }`}
                key={experience.year}
              >
                <div className="timeline-year-node">
                  <span className="year-text">{experience.year}</span>
                </div>
                <div className="timeline-cards">
                  {[...experience.works].reverse().map((work) => {
                    const side = yearIdx % 2 === 0 ? "left" : "right";
                    const collapsed = isCollapsed(work.id);
                    return (
                      <div className={`timeline-entry ${side}`} key={work.id}>
                        <div className="timeline-node" />
                        <span className={`time-ago ${side}`}>
                          {work.timeAgo || ""}
                        </span>
                        <motion.div
                          whileInView={{ opacity: [0, 1], y: [20, 0] }}
                          transition={{ duration: 0.5 }}
                          className={`timeline-card ${side}`}
                          onClick={() => toggleCard(work.id)}
                          style={{ cursor: "pointer" }}
                        >
                          <div className="card-header">
                            <div className="header-left">
                              <div className="role-icon">
                                <IconBrandDatabricks />
                              </div>
                              <div className="title-section">
                                <h4 className="job-title">{work.title}</h4>
                                <p className="company-name">{work.company}</p>
                              </div>
                            </div>
                            <div className="card-actions">
                              <div className="bookmark-icon">
                                <i className="fas fa-bookmark"></i>
                              </div>
                              <div className="toggle-button">
                                {collapsed ? (
                                  <IconChevronDown />
                                ) : (
                                  <IconChevronUp />
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="card-metadata">
                            <div className="metadata-item">
                              <IconCalendarWeek stroke={1.5} />
                              <span>{work.date}</span>
                            </div>
                            <div className="metadata-item">
                              <IconMapPin stroke={1.5} />
                              <span>{work.location}</span>
                            </div>
                          </div>

                          <motion.div
                            initial={false}
                            animate={{
                              height: collapsed ? 0 : "auto",
                              opacity: collapsed ? 0 : 1,
                            }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="card-details"
                            style={{ overflow: "hidden" }}
                          >
                            {work.description && (
                              <div className="card-description">
                                <p>{work.description}</p>
                              </div>
                            )}

                            {work.achievements &&
                              work.achievements.length > 0 && (
                                <div className="card-achievements">
                                  <div className="achievements-header">
                                    <IconMedal stroke={1.5} />
                                    <h5>Key Achievements</h5>
                                  </div>
                                  <ul className="achievements-list">
                                    {work.achievements.map(
                                      (achievement, idx) => (
                                        <li key={idx}>{achievement}</li>
                                      )
                                    )}
                                  </ul>
                                </div>
                              )}

                            {work.tags && work.tags.length > 0 && (
                              <div className="card-tools">
                                {work.tags.map((tag) => (
                                  <span key={tag} className="tool-chip">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}
                          </motion.div>
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Experience, "app__experience"),
  "experience",
  "app__whitebg"
);
