import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart3,
  ChartNoAxesCombined,
  Code2,
  Database,
  MonitorCog,
  Workflow,
  Wrench,
} from "lucide-react";
import { skills as portfolioSkills } from "../data/portfolioData";

const skillCategories = [
  {
    id: "programming",
    label: "Programming Languages",
    coreLabel: "Programming",
    icon: Code2,
  },
  {
    id: "dataAnalysis",
    label: "Data Analysis",
    coreLabel: "Data Analysis",
    icon: ChartNoAxesCombined,
  },
  {
    id: "visualization",
    label: "Data Visualization & BI",
    coreLabel: "Visualization & BI",
    icon: BarChart3,
  },
  {
    id: "databases",
    label: "Databases",
    coreLabel: "Databases",
    icon: Database,
  },
  {
    id: "dataEngineering",
    label: "Data Engineering",
    coreLabel: "Data Engineering",
    icon: Workflow,
  },
  {
    id: "webDevelopment",
    label: "Web Development",
    coreLabel: "Web Development",
    icon: MonitorCog,
  },
  {
    id: "tools",
    label: "Tools",
    coreLabel: "Tools",
    icon: Wrench,
  },
];

const summaryItems = [
  {
    label: "Primary Focus",
    value: "Data Analytics & BI",
  },
  {
    label: "Strong Foundation",
    value: "Python, SQL, Power BI",
  },
  {
    label: "Expanding Into",
    value: "Data Engineering & Dimensional Modeling",
  },
];

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const revealVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const chipContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.055,
      delayChildren: 0.08,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.025,
      staggerDirection: -1,
    },
  },
};

const chipVariants = {
  hidden: { opacity: 0, scale: 0.72 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.38, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.78,
    transition: { duration: 0.18 },
  },
};

function getOrbitPosition(index, total) {
  if (total <= 7) {
    return {
      angle: -90 + (360 / total) * index,
      radius: total <= 4 ? 205 : 220,
    };
  }

  const outerCount = Math.ceil(total / 2);
  const isInnerRing = index >= outerCount;
  const ringIndex = isInnerRing ? index - outerCount : index;
  const ringTotal = isInnerRing ? total - outerCount : outerCount;

  return {
    angle:
      (isInnerRing ? -45 : -90) +
      (360 / ringTotal) * ringIndex,
    radius: isInnerRing ? 148 : 222,
  };
}

function Skills() {
  const [activeCategoryId, setActiveCategoryId] = useState(
    skillCategories[0].id,
  );

  const activeCategory = skillCategories.find(
    (category) => category.id === activeCategoryId,
  );
  const activeSkills = portfolioSkills[activeCategoryId];
  const ActiveIcon = activeCategory.icon;

  return (
    <section id="skills" className="skills-section">
      <div className="skills-atmosphere" aria-hidden="true" />

      <motion.div
        className="skills-container"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
      >
        <motion.div className="skills-intro" variants={revealVariant}>
          <div className="skills-section-label">
            <span>03</span>
            Technical universe
          </div>

          <h2 className="skills-title">
            A connected stack for
            <span> data-driven systems.</span>
          </h2>

          <p className="skills-description">
            Explore the technologies I use across analysis, business
            intelligence, data engineering, and application development.
            Select a category to navigate the universe.
          </p>

          <div
            className="skills-category-list"
            aria-label="Skill categories"
          >
            {skillCategories.map((category) => {
              const Icon = category.icon;
              const isActive = category.id === activeCategoryId;

              return (
                <motion.button
                  key={category.id}
                  type="button"
                  className={`skills-category-button${
                    isActive ? " skills-category-button-active" : ""
                  }`}
                  onClick={() => setActiveCategoryId(category.id)}
                  aria-pressed={isActive}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="skills-category-icon">
                    <Icon size={17} />
                  </span>
                  <span>{category.label}</span>
                  <small>{portfolioSkills[category.id].length}</small>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        <motion.div className="skills-universe" variants={revealVariant}>
          <div className="skills-universe-topline">
            <span>Technology constellation</span>
            <span>{String(activeSkills.length).padStart(2, "0")} nodes</span>
          </div>

          <div className="skills-universe-stage">
            <div className="skills-orbit skills-orbit-outer" aria-hidden="true" />
            <div className="skills-orbit skills-orbit-inner" aria-hidden="true" />

            <motion.div
              className="skills-data-core"
              key={activeCategory.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.42 }}
            >
              <div className="skills-core-surface">
                <ActiveIcon size={28} />
                <span>Data Core</span>
                <strong>{activeCategory.coreLabel}</strong>
              </div>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                className="skills-chip-layer"
                variants={chipContainerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {activeSkills.map((skill, index) => {
                  const position = getOrbitPosition(
                    index,
                    activeSkills.length,
                  );

                  return (
                    <div
                      className="skills-chip-position"
                      key={skill}
                      style={{
                        "--skills-angle": `${position.angle}deg`,
                        "--skills-radius": `${position.radius}px`,
                      }}
                    >
                      <div className="skills-chip-counter">
                        <motion.div
                          className="skills-chip"
                          variants={chipVariants}
                          whileHover={{ y: -6, scale: 1.04, rotate: -1 }}
                        >
                          <span />
                          {skill}
                        </motion.div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div className="skills-summary" variants={revealVariant}>
          {summaryItems.map((item, index) => (
            <motion.div
              className="skills-summary-item"
              key={item.label}
              whileHover={{ y: -4 }}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <small>{item.label}</small>
                <strong>{item.value}</strong>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Skills;
