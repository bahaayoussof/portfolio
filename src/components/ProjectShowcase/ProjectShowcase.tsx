import type { ReactNode } from "react";
import "./ProjectShowcase.scss";

interface ProjectShowcaseProps {
  /** Full-width badge/eyebrow band above everything. */
  eyebrow: ReactNode;
  /** Optional full-width heading block (category + title + description) that
   *  sits above the two-column body. Sections that keep the title inside the
   *  info column simply omit this. */
  heading?: ReactNode;
  /** Left column — section-specific body (tabs, metrics, tech, actions…). */
  info: ReactNode;
  /** Right column — the preview / media area. */
  media: ReactNode;
  className?: string;
}

/**
 * UI-024 — shared skeleton for a highlighted / featured project.
 *
 * Both the Work flagship and the Experience featured project were large,
 * near-parallel implementations of the same shape: an eyebrow band, an
 * optional full-width heading, then a two-column `info | media` body that
 * collapses to one column on smaller screens. That scaffolding lives here;
 * every section-specific concern (metric styling, tabs, the hand-built
 * mockup, exact column ratio) stays in the owning section via the slots and a
 * context `className`. No `showX` / `variantY` flags.
 */
export function ProjectShowcase({
  eyebrow,
  heading,
  info,
  media,
  className,
}: ProjectShowcaseProps) {
  return (
    <div className={`project-showcase${className ? ` ${className}` : ""}`}>
      <div className="project-showcase__eyebrow">{eyebrow}</div>
      {heading != null && <div className="project-showcase__heading">{heading}</div>}
      <div className="project-showcase__body">
        <div className="project-showcase__info">{info}</div>
        <div className="project-showcase__media">{media}</div>
      </div>
    </div>
  );
}

export default ProjectShowcase;
