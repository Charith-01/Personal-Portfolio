import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { navigationLinks, personalInfo } from "../data/portfolioData";
import { footerReveal, revealViewport } from "../utils/motion";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <motion.footer
      className="contact-footer"
      variants={footerReveal}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
    >
      <div className="contact-footer-line" aria-hidden="true" />

      <div className="contact-footer-container">
        <div className="contact-footer-brand">
          <a href="#home" className="contact-footer-logo">
            {personalInfo.shortName}<span>.OS</span>
          </a>
          <p>{personalInfo.title}</p>
          <span>Built with React, Three.js, and curiosity</span>
        </div>

        <nav className="contact-footer-nav" aria-label="Footer navigation">
          {navigationLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`}>{link.label}</a>
          ))}
        </nav>

        <div className="contact-footer-socials">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Charith Lakshan's GitHub profile"
          >
            <FaGithub size={18} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Charith Lakshan's LinkedIn profile"
          >
            <FaLinkedinIn size={18} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email Charith Lakshan"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      <div className="contact-footer-bottom">
        <span>© {currentYear} {personalInfo.name}</span>
        <span>Data intelligence portfolio · Sri Lanka</span>
      </div>
    </motion.footer>
  );
}

export default Footer;
