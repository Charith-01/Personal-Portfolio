import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import profileImage from "../assets/charith-profile.png";
import {
  revealContainer,
  revealItem,
  revealViewport,
} from "../utils/motion";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-orb about-orb-one" aria-hidden="true" />
      <div className="about-orb about-orb-two" aria-hidden="true" />

      <motion.div
        className="about-container"
        variants={revealContainer}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
      >
        <motion.div className="about-profile" variants={revealItem}>
          <div className="about-section-label">
            <span>02</span>
            Data profile
          </div>

          <div className="about-heading-row">
            <h2>
              Turning raw data into
              <span> clear direction.</span>
            </h2>

            <motion.div
              className="about-opportunity-badge"
              animate={{
                boxShadow: [
                  "0 0 0 rgba(34, 211, 238, 0)",
                  "0 0 28px rgba(34, 211, 238, 0.18)",
                  "0 0 0 rgba(34, 211, 238, 0)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span />
              Open to Opportunities
            </motion.div>
          </div>

          <motion.div className="about-identity" variants={revealItem}>
            <div className="about-identity-copy">
              <p className="about-role">
                {personalInfo.name} · {personalInfo.title}
              </p>

              <p className="about-summary">{personalInfo.summary}</p>

              <p className="about-supporting-copy">
                I focus on building dependable data workflows—from extraction
                and quality checks to statistical analysis and visual stories
                that support better decisions.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.figure
          className="about-photo-panel"
          variants={revealItem}
          whileHover={{ rotateX: -1.5, rotateY: 2, y: -6 }}
          transition={{ duration: 0.35 }}
        >
          <div className="about-photo-glow" aria-hidden="true" />
          <div className="about-photo-grid" aria-hidden="true" />
          <div className="about-photo-viewfinder" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>

          <img
            src={profileImage}
            alt={`${personalInfo.name}, ${personalInfo.title}`}
            className="about-profile-photo"
          />
        </motion.figure>
      </motion.div>
    </section>
  );
}

export default About;