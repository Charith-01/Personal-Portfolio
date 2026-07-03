import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  Mail,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import DataSphere from "./DataSphere";
import { personalInfo } from "../data/portfolioData";

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
        >
          <motion.div
            className="hero-status"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <span className="status-dot" />
            Available for Data Science Internships
          </motion.div>

          <p className="hero-eyebrow">
            WELCOME TO MY DATA INTELLIGENCE LAB
          </p>

          <h1 className="hero-title">
            Hi, I&apos;m
            <span>{personalInfo.name}</span>
          </h1>

          <h2 className="hero-role">
            {personalInfo.title}
          </h2>

          <div className="hero-role-list">
            {personalInfo.roles.map((role) => (
              <span key={role}>{role}</span>
            ))}
          </div>

          <p className="hero-description">
            I transform complex datasets into reliable pipelines,
            meaningful visualizations, and actionable business
            insights using Python, SQL, Power BI, statistical
            analysis, and modern data engineering tools.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="primary-button">
              Explore My Projects
              <ArrowDown size={18} />
            </a>

            <a
              href="/Charith-Lakshan-CV.pdf"
              download
              className="secondary-button"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>

          <div className="hero-socials">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <FaGithub size={21} />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <FaLinkedinIn size={21} />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send email"
            >
              <Mail size={21} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.1,
            delay: 0.15,
            ease: "easeOut",
          }}
        >
          <div className="visual-glow" />

          <DataSphere />

          <motion.div
            className="floating-card card-python"
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span>Python</span>
            <strong>Data Analysis</strong>
          </motion.div>

          <motion.div
            className="floating-card card-powerbi"
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 4.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span>Power BI</span>
            <strong>Dashboards</strong>
          </motion.div>

          <motion.div
            className="floating-card card-sql"
            animate={{ x: [0, 10, 0] }}
            transition={{
              duration: 5.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span>SQL</span>
            <strong>Data Engineering</strong>
          </motion.div>
        </motion.div>
      </div>

      <a href="#about" className="hero-scroll-indicator">
        <span>Scroll to explore</span>
        <ArrowDown size={18} />
      </a>
    </section>
  );
}

export default Hero;