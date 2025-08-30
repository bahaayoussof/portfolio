import React, { useState } from "react";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { projects, TECHNOLOGIES } from "../../data";

import "./Work.scss";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filterWork, setFilterWork] = useState(projects);

  const workFilterHandler = (project) => {
    setActiveFilter(project);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (project === "All") setFilterWork(projects);
      else
        setFilterWork(projects.filter((work) => work.tags.includes(project)));
    }, 500);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <motion.h2
        className="head-text"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My creative <span>Portfolio</span> section
      </motion.h2>

      <motion.div
        className="app__work-filter"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {TECHNOLOGIES.map((item) => (
          <motion.div
            key={item}
            onClick={() => workFilterHandler(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {item}
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <motion.div
            key={work.id}
            className="app__work-item"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            transition={{ delay: index * 0.1 }}
          >
            <div className="app__work-img-container">
              <motion.div className="app__work-img" variants={imageVariants}>
                <img src={work.imageUrl} alt={work.title} />

                <motion.div
                  className="app__work-overlay"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="app__work-actions">
                    {work.projectLink && (
                      <motion.a
                        href={work.projectLink}
                        target="_blank"
                        rel="noreferrer"
                        className="app__work-action-btn"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                      >
                        <IconExternalLink />
                        <span>Live</span>
                      </motion.a>
                    )}
                    <motion.a
                      href={work.codeLink}
                      target="_blank"
                      rel="noreferrer"
                      className="app__work-action-btn"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                    >
                      <IconBrandGithub />
                      <span>Code</span>
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            <div className="app__work-content">
              <div className="app__work-header">
                <h4 className="app__work-title">{work.title}</h4>
                <div className="app__work-badge">{work.tags[0]}</div>
              </div>

              <p className="app__work-description">{work.description}</p>

              {/* <div className="app__work-tags">
                {work.tags.map((tag, index) => (
                  <span key={index} className="app__work-tag">
                    {tag}
                  </span>
                ))}
              </div> */}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
