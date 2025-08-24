import React from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { experiences } from "../../data";
import {
  IconCalendarWeek,
  IconMapPin,
  IconBrandDatabricks,
} from "@tabler/icons-react";

import "./Experience.scss";
const Experience = () => {
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
                            <div className="bookmark-icon">
                              <i className="fas fa-bookmark"></i>
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

                          {work.description && (
                            <div className="card-description">
                              <p>{work.description}</p>
                            </div>
                          )}

                          {work.achievements &&
                            work.achievements.length > 0 && (
                              <div className="card-achievements">
                                <div className="achievements-header">
                                  <i className="fas fa-trophy"></i>
                                  <h5>Key Achievements</h5>
                                </div>
                                <ul className="achievements-list">
                                  {work.achievements.map((achievement, idx) => (
                                    <li key={idx}>{achievement}</li>
                                  ))}
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
