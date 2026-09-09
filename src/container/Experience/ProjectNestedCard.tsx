import { motion, useReducedMotion } from "framer-motion";
import { IconCheck, IconFlame, IconTrendingUp } from "@tabler/icons-react";
import type { ClientProject } from "../../types/experience";
import { springPhysical } from "../../shared/motion";

interface ProjectNestedCardProps {
  project: ClientProject;
  displayNumber: string;
}

const ProjectNestedCard = ({ project, displayNumber }: ProjectNestedCardProps) => {
  const isCurrent = Boolean(project.isCurrent);
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="project-nested-card-shell"
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, gridTemplateRows: "0fr" }}
      animate={reduceMotion ? { opacity: 1 } : { opacity: 1, gridTemplateRows: "1fr" }}
      exit={reduceMotion ? { opacity: 0 } : { opacity: 0, gridTemplateRows: "0fr" }}
      transition={reduceMotion ? { duration: 0.15 } : springPhysical}
    >
      <div className="project-nested-card">
        {/* Project Title & Badge */}
        <div className="project-header">
          <div className="project-title-group">
            <span className="project-index-badge">{displayNumber}</span>
            <div className="project-title-block">
              <h4 className="project-name">{project.projectName}</h4>
              {isCurrent && (
                <span className="current-project-badge">
                  <IconFlame size={13} />
                  <span>CURRENT PROJECT</span>
                </span>
              )}
            </div>
          </div>
          {project.period && <span className="project-period">{project.period}</span>}
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
              <IconFlame size={16} className="icon-challenge" />
              <span>ENGINEERING CHALLENGES</span>
            </div>
            <p>{project.engineeringChallenges}</p>
          </div>

          <div className="grid-box impact-box">
            <div className="box-title">
              <IconTrendingUp size={16} className="icon-impact" />
              <span>IMPACT DELIVERED</span>
            </div>
            <p>{project.impact}</p>
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="chapter-tech-row">
          <span className="tech-label">STACK:</span>
          <div className="tech-pills">
            {project.techStack.map((tech) => (
              <span key={tech} className="tech-chip">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectNestedCard;
