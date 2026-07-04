import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SiGit, SiNumpy, SiPandas, SiPython, SiR, SiReact } from "react-icons/si";
import { revealContainer, revealItem, revealViewport } from "../utils/motion";

const categories = [
  { id: "all", label: "All" },
  { id: "programming", label: "Programming" },
  { id: "analysis", label: "Data Analysis" },
  { id: "bi", label: "BI & Visualization" },
  { id: "databases", label: "Databases" },
  { id: "engineering", label: "Data Engineering" },
  { id: "tools", label: "Development Tools" },
];

const technologies = [
  { name: "Python", category: "programming", icon: SiPython, color: "#facc15" },
  { name: "SQL", category: "programming", symbol: "sql", color: "#67e8f9" },
  { name: "Power BI", category: "bi", symbol: "power-bi", color: "#facc15" },
  { name: "Pandas", category: "analysis", icon: SiPandas, color: "#c4b5fd" },
  { name: "NumPy", category: "analysis", icon: SiNumpy, color: "#67e8f9" },
  { name: "R", category: "programming", icon: SiR, color: "#60a5fa" },
  { name: "SQL Server", category: "databases", symbol: "sql-server", color: "#fb7185" },
  { name: "Git", category: "tools", icon: SiGit, color: "#fb7185" },
  { name: "React", category: "tools", icon: SiReact, color: "#67e8f9" },
  { name: "ETL", category: "engineering", symbol: "etl", color: "#22d3ee" },
];

function TechnologySymbol({ type }) {
  if (type === "power-bi") {
    return (
      <svg className="skills-symbol skills-symbol-fill" viewBox="0 0 48 48" aria-hidden="true">
        <rect x="7" y="25" width="6" height="15" rx="2" />
        <rect x="17" y="17" width="6" height="23" rx="2" />
        <rect x="27" y="10" width="6" height="30" rx="2" />
        <rect x="37" y="5" width="6" height="35" rx="2" />
      </svg>
    );
  }

  if (type === "etl") {
    return (
      <svg className="skills-symbol skills-symbol-line" viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="8" cy="24" r="5" />
        <circle cx="40" cy="10" r="5" />
        <circle cx="40" cy="38" r="5" />
        <path d="M14 24h9m0 0 7-14m-7 14 7 14" />
        <path d="m20 20 4 4-4 4" />
      </svg>
    );
  }

  return (
    <svg className="skills-symbol skills-symbol-line" viewBox="0 0 48 48" aria-hidden="true">
      <ellipse cx="24" cy="9" rx="15" ry="6" />
      <path d="M9 9v12c0 3.3 6.7 6 15 6s15-2.7 15-6V9" />
      <path d="M9 21v12c0 3.3 6.7 6 15 6s15-2.7 15-6V21" />
      {type === "sql-server" && <path d="M18 17h12M18 31h12" />}
    </svg>
  );
}

function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");
  const visibleTechnologies = technologies.filter(
    (technology) => activeCategory === "all" || technology.category === activeCategory,
  );

  return (
    <section id="skills" className="skills-section">
      <div className="skills-atmosphere" aria-hidden="true" />

      <motion.div
        className="skills-container"
        variants={revealContainer}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
      >
        <motion.header className="skills-intro" variants={revealItem}>
          <div className="skills-section-label">
            <span>03</span>
            Technical Universe
          </div>
          <h2 className="skills-title">
            Tools I use to build <span>data-driven experiences.</span>
          </h2>
          <p className="skills-description">
            A focused toolkit for data analysis, business intelligence,
            databases, and data engineering—from raw information to clear,
            useful experiences.
          </p>
        </motion.header>

        <motion.div className="skills-explorer" variants={revealItem}>
          <div className="skills-filter-wrap" aria-label="Technology categories">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                className={`skills-filter${activeCategory === category.id ? " skills-filter-active" : ""}`}
                onClick={() => setActiveCategory(category.id)}
                aria-pressed={activeCategory === category.id}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="skills-grid-glow" aria-hidden="true" />
          <motion.div className={`skills-icon-grid skills-icon-grid-${visibleTechnologies.length}`} layout role="list" aria-live="polite">
            <AnimatePresence mode="popLayout">
              {visibleTechnologies.map((technology) => {
                const Icon = technology.icon;
                return (
                  <motion.div
                    key={technology.name}
                    className="skills-icon-item"
                    style={{ "--skills-tech-color": technology.color }}
                    layout
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    whileHover={{ y: -5, scale: 1.04 }}
                    role="listitem"
                    tabIndex={0}
                    title={technology.name}
                    aria-label={technology.name}
                  >
                    <span className="skills-standalone-icon">
                      {technology.symbol ? <TechnologySymbol type={technology.symbol} /> : <Icon aria-hidden="true" />}
                    </span>
                    <span className="skills-icon-label">{technology.name}</span>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Skills;