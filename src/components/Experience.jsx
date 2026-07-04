import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
  Radio,
} from "lucide-react";
import { experiences } from "../data/portfolioData";
import {
  revealContainer,
  revealItem,
  revealViewport,
  subtleStagger,
  subtleStaggerItem,
} from "../utils/motion";

function Experience() {
  const experience = experiences[0];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-ambient experience-ambient-one" aria-hidden="true" />
      <div className="experience-ambient experience-ambient-two" aria-hidden="true" />

      <motion.div
        className="experience-container"
        variants={revealContainer}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
      >
        <motion.header className="experience-intro" variants={revealItem}>
          <div className="experience-section-label">
            <span>05</span>
            Career Journey
          </div>

          <h2>
            Experience shaping
            <span> real-world data solutions.</span>
          </h2>

          <p>
            Building practical industry experience through continuous learning,
            collaborative research, and meaningful work with real-world data.
          </p>

          <div className="experience-current-marker">
            <Radio size={16} aria-hidden="true" />
            <div>
              <small>Current chapter</small>
              <strong>Industry experience</strong>
            </div>
          </div>
        </motion.header>

        <motion.div className="experience-timeline" variants={revealItem}>
          <div className="experience-timeline-line" aria-hidden="true" />
          <div className="experience-timeline-node" aria-hidden="true"><span /></div>

          <article className="experience-panel">
            <div className="experience-panel-topline">
              <span>Professional experience</span>
              <div><i /> Current Experience</div>
            </div>

            <div className="experience-company-row">
              <div className="experience-logo-shell">
                <img
                  src={experience.logo}
                  alt={`${experience.company} logo`}
                  width="78"
                  height="78"
                />
              </div>
              <div className="experience-company-copy">
                <span>{experience.type}</span>
                <h3>{experience.role}</h3>
                <p>{experience.company}</p>
              </div>
            </div>

            <div className="experience-meta">
              <div>
                <BriefcaseBusiness size={17} aria-hidden="true" />
                <span>Employment type</span>
                <strong>{experience.type}</strong>
              </div>
              <div>
                <CalendarDays size={17} aria-hidden="true" />
                <span>Duration</span>
                <strong>{experience.startDate} – <em>{experience.endDate}</em></strong>
              </div>
              <div>
                <MapPin size={17} aria-hidden="true" />
                <span>Location</span>
                <strong>{experience.location} · {experience.workMode}</strong>
              </div>
            </div>

            <p className="experience-description">{experience.description}</p>

            <div className="experience-skills">
              <span>Focus areas</span>
              <motion.div variants={subtleStagger}>
                {experience.skills.map((skill) => (
                  <motion.span key={skill} variants={subtleStaggerItem}>
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </article>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Experience;