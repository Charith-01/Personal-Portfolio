import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen,
  BrainCircuit,
  CalendarDays,
  ChartNoAxesCombined,
  Code2,
  GraduationCap,
  Orbit,
  School,
  Workflow,
} from "lucide-react";
import { education } from "../data/portfolioData";

const milestones = [
  {
    id: "foundation",
    title: "Foundation in Programming",
    label: "Core foundations",
    detail: "Core coursework in Python Programming and Database Management.",
    subjects: [education.coursework[0], education.coursework[3]],
    icon: Code2,
  },
  {
    id: "analysis",
    title: "Data Analysis & Statistics",
    label: "Analytical thinking",
    detail: "Coursework in Statistics and Data Visualization.",
    subjects: [education.coursework[1], education.coursework[6]],
    icon: ChartNoAxesCombined,
  },
  {
    id: "engineering",
    title: "Data Engineering & BI",
    label: "Data systems",
    detail: "Coursework in Data Warehousing and Business Intelligence.",
    subjects: [education.coursework[4], education.coursework[5]],
    icon: Workflow,
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    label: "Model development",
    detail: "Machine Learning within the Data Science specialization.",
    subjects: [education.coursework[2]],
    icon: BrainCircuit,
  },
  {
    id: "current-stage",
    title: "Current Third-Year Stage",
    label: "Current position",
    detail: "Current academic stage in the undergraduate learning journey.",
    subjects: [education.stage, `CGPA ${education.cgpa}`],
    icon: BookOpen,
  },
  {
    id: "graduation",
    title: `Expected Graduation ${education.graduationYear}`,
    label: "Next milestone",
    detail: "Expected completion of the undergraduate degree programme.",
    subjects: [education.institution, education.graduationYear],
    icon: GraduationCap,
  },
];

const revealContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const revealItem = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Education() {
  const [activeMilestoneId, setActiveMilestoneId] = useState(
    milestones[0].id,
  );
  const activeIndex = milestones.findIndex(
    (milestone) => milestone.id === activeMilestoneId,
  );
  const activeMilestone = milestones[activeIndex];
  const ActiveIcon = activeMilestone.icon;

  return (
    <section id="education" className="education-section">
      <div className="education-ambient education-ambient-one" aria-hidden="true" />
      <div className="education-ambient education-ambient-two" aria-hidden="true" />

      <motion.div
        className="education-container"
        variants={revealContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.header className="education-heading" variants={revealItem}>
          <div className="education-section-label">
            <span>05</span>
            Academic trajectory
          </div>

          <div className="education-heading-row">
            <h2>
              Education &
              <span> Learning Journey</span>
            </h2>
            <p>
              My academic path combines programming, analytics, data
              engineering, business intelligence, and statistical modelling.
            </p>
          </div>
        </motion.header>

        <div className="education-layout">
          <motion.article className="education-profile-panel" variants={revealItem}>
            <div className="education-panel-topline">
              <span>Academic profile</span>
              <div><i /> In progress</div>
            </div>

            <div className="education-institution">
              <div className="education-institution-icon">
                <School size={25} />
              </div>
              <div>
                <small>Institution</small>
                <strong>{education.institution}</strong>
              </div>
            </div>

            <div className="education-degree">
              <span>Degree programme</span>
              <h3>{education.degree}</h3>
              <p>
                Specialization: <strong>{education.specialization}</strong>
              </p>
            </div>

            <div className="education-metrics">
              <motion.div whileHover={{ y: -4 }}>
                <ChartNoAxesCombined size={18} />
                <span>Current CGPA</span>
                <strong>{education.cgpa}</strong>
              </motion.div>
              <motion.div whileHover={{ y: -4 }}>
                <BookOpen size={18} />
                <span>Study stage</span>
                <strong>{education.stage}</strong>
              </motion.div>
              <motion.div whileHover={{ y: -4 }}>
                <CalendarDays size={18} />
                <span>Expected graduation</span>
                <strong>{education.graduationYear}</strong>
              </motion.div>
            </div>

            <div className="education-coursework">
              <div className="education-coursework-heading">
                <div>
                  <BookOpen size={17} />
                  <span>Relevant Coursework</span>
                </div>
                <small>{education.coursework.length} modules</small>
              </div>

              <div className="education-coursework-list">
                {education.coursework.map((course, index) => (
                  <motion.span
                    key={course}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.055 }}
                    whileHover={{ y: -3, rotate: -0.5 }}
                  >
                    {course}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.article>

          <motion.div className="education-orbit-panel" variants={revealItem}>
            <div className="education-orbit-header">
              <div>
                <Orbit size={18} />
                <span>Learning orbit</span>
              </div>
              <small>
                {String(activeIndex + 1).padStart(2, "0")} / {String(milestones.length).padStart(2, "0")}
              </small>
            </div>

            <div className="education-path-shell">
              <div className="education-path-line" aria-hidden="true" />

              <div className="education-milestone-list">
                {milestones.map((milestone, index) => {
                  const Icon = milestone.icon;
                  const isActive = milestone.id === activeMilestoneId;

                  return (
                    <motion.button
                      key={milestone.id}
                      type="button"
                      className={`education-milestone${
                        isActive ? " education-milestone-active" : ""
                      }`}
                      onClick={() => setActiveMilestoneId(milestone.id)}
                      aria-pressed={isActive}
                      aria-label={`View milestone: ${milestone.title}`}
                      whileHover={{ x: index % 2 === 0 ? 4 : -4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="education-milestone-node">
                        <Icon size={17} />
                      </span>
                      <span className="education-milestone-copy">
                        <small>{String(index + 1).padStart(2, "0")} · {milestone.label}</small>
                        <strong>{milestone.title}</strong>
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            <div className="education-detail-shell" aria-live="polite">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMilestone.id}
                  className="education-milestone-detail"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.32 }}
                >
                  <div className="education-detail-icon">
                    <ActiveIcon size={21} />
                  </div>
                  <div>
                    <small>Selected milestone</small>
                    <h3>{activeMilestone.title}</h3>
                    <p>{activeMilestone.detail}</p>
                    <div className="education-detail-tags">
                      {activeMilestone.subjects.map((subject) => (
                        <span key={subject}>{subject}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Education;
