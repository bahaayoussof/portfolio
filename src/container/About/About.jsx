import React from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import {
  IconCode,
  IconHeart,
  IconCircleDashedCheck,
  IconUser,
} from "@tabler/icons-react";
import { aboutHighlights } from "../../data";

import "./About.scss";

const About = () => {
  return (
    <>
      {/* Navigation Tab */}
      <div className="about-nav-tab">
        <IconUser />
        <span>About Me</span>
      </div>

      {/* Header Section */}
      <div className="about-header">
        <h1 className="about-title">
          Get to Know <span>Me</span> <span className="better">Better</span>
        </h1>
        <p className="about-subtitle">
          Passionate about creating digital experiences that make a difference
        </p>
      </div>

      {/* Main Content */}
      <div className="about-content">
        {/* Left Column */}
        <div className="about-left-column">
          {/* My Journey Section */}
          <motion.div
            whileInView={{ opacity: [0, 1], y: [20, 0] }}
            transition={{ duration: 0.5 }}
            className="about-section"
          >
            <div className="section-header">
              <div className="section-icon icon-linear">
                <IconCode />
              </div>
              <h3>My Journey</h3>
            </div>
            <p>
              I'm a passionate Software Engineer with expertise in modern web
              technologies. I specialize in building scalable applications using
              React, React Native, and cutting-edge development tools. My focus
              is on creating user-centric solutions that combine elegant design
              with robust functionality.
            </p>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="about-right-column">
          {/* Key Highlights Section */}
          <motion.div
            whileInView={{ opacity: [0, 1], y: [20, 0] }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="about-section"
          >
            <h3>Key Highlights</h3>
            <ul className="highlights-list">
              {aboutHighlights.map((highlight, index) => (
                <motion.li
                  key={index}
                  whileInView={{ opacity: [0, 1], x: [20, 0] }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <IconCircleDashedCheck />
                  <span>{highlight}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* What Drives Me Section */}
      <motion.div
        whileInView={{ opacity: [0, 1], y: [20, 0] }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="about-section"
      >
        <div className="section-header">
          <div className="section-icon icon-linear">
            <IconHeart />
          </div>
          <h3>What Drives Me</h3>
        </div>
        <p>
          I believe in the power of technology to solve real-world problems and
          create meaningful connections between people and digital experiences.
        </p>
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
