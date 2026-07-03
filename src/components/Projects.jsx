import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  BarChart3,
  CircleCheck,
  Database,
  GitPullRequestArrow,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data/portfolioData";

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

function PipelinePreview() {
  return (
    <div className="projects-preview projects-preview-pipeline" aria-hidden="true">
      <div className="projects-preview-bar">
        <span>Pipeline intelligence</span>
        <i />
      </div>

      <div className="projects-pipeline-map">
        <svg viewBox="0 0 420 210" preserveAspectRatio="none">
          <path d="M18 158 C82 155, 70 68, 142 73 S210 166, 266 118 S340 42, 402 62" />
          <path d="M28 184 C94 112, 148 184, 208 128 S310 90, 394 144" />
          <circle cx="72" cy="126" r="5" />
          <circle cx="142" cy="73" r="5" />
          <circle cx="266" cy="118" r="5" />
          <circle cx="356" cy="55" r="5" />
        </svg>
        <div className="projects-map-label projects-map-label-one">Flow node</div>
        <div className="projects-map-label projects-map-label-two">Loss signal</div>
      </div>

      <div className="projects-pipeline-footer">
        <div className="projects-kpi-block">
          <Database size={15} />
          <span>Warehouse</span>
          <strong>Connected</strong>
        </div>
        <div className="projects-loss-chart">
          {[34, 52, 43, 72, 60, 88, 67].map((height, index) => (
            <i key={index} style={{ height: `${height}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function JobMarketPreview() {
  return (
    <div className="projects-preview projects-preview-jobs" aria-hidden="true">
      <div className="projects-preview-bar">
        <span>Market signal</span>
        <i />
      </div>

      <div className="projects-jobs-headline">
        <div>
          <small>Job records analyzed</small>
          <strong>50K+</strong>
        </div>
        <BarChart3 size={27} />
      </div>

      <div className="projects-salary-chart">
        <span>Salary trend</span>
        <svg viewBox="0 0 420 130" preserveAspectRatio="none">
          <defs>
            <linearGradient id="projectsSalaryFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path className="projects-chart-area" d="M0 112 L0 94 L62 82 L126 91 L188 54 L252 67 L316 28 L376 43 L420 18 L420 112 Z" />
          <path className="projects-chart-line" d="M0 94 L62 82 L126 91 L188 54 L252 67 L316 28 L376 43 L420 18" />
        </svg>
      </div>

      <div className="projects-skills-bars">
        {["Skills demand", "Role demand", "Remote insights"].map((label, index) => (
          <div key={label}>
            <span>{label}</span>
            <i><b style={{ width: `${82 - index * 14}%` }} /></i>
          </div>
        ))}
      </div>
    </div>
  );
}

function QualityPreview() {
  return (
    <div className="projects-preview projects-preview-quality" aria-hidden="true">
      <div className="projects-preview-bar">
        <span>Quality monitor</span>
        <i />
      </div>

      <div className="projects-quality-main">
        <div className="projects-health-ring">
          <div>
            <Activity size={26} />
            <span>Data health</span>
          </div>
        </div>

        <div className="projects-quality-status">
          <span>Monitoring status</span>
          <strong><i /> Active checks</strong>
          <small>Validation pipeline online</small>
        </div>
      </div>

      <div className="projects-alert-list">
        {[
          ["Missing values", "Required fields"],
          ["Duplicate records", "Uniqueness"],
          ["Invalid formats", "Format rules"],
        ].map(([title, label]) => (
          <div key={title}>
            <CircleCheck size={15} />
            <span><strong>{title}</strong><small>{label}</small></span>
            <i />
          </div>
        ))}
      </div>
    </div>
  );
}

function AthletePreview() {
  const points = [
    [35, 150], [62, 138], [83, 148], [108, 117], [136, 128],
    [158, 93], [187, 107], [215, 75], [246, 88], [273, 58],
    [305, 69], [336, 37], [372, 49], [397, 27],
  ];

  return (
    <div className="projects-preview projects-preview-athlete" aria-hidden="true">
      <div className="projects-preview-bar">
        <span>Statistical model</span>
        <i />
      </div>

      <div className="projects-scatter-chart">
        <span>Motivation × performance</span>
        <svg viewBox="0 0 430 190" preserveAspectRatio="none">
          <line className="projects-regression-line" x1="25" y1="165" x2="410" y2="20" />
          {points.map(([x, y], index) => (
            <circle key={index} cx={x} cy={y} r="4" />
          ))}
        </svg>
      </div>

      <div className="projects-stat-cards">
        <div><GitPullRequestArrow size={17} /><span>Regression analysis</span></div>
        <div><CircleCheck size={17} /><span>Model diagnostics</span></div>
      </div>
    </div>
  );
}

const previewComponents = {
  1: PipelinePreview,
  2: JobMarketPreview,
  3: QualityPreview,
  4: AthletePreview,
};

function Projects() {
  const [activeProjectId, setActiveProjectId] = useState(projects[0].id);
  const activeIndex = projects.findIndex(
    (project) => project.id === activeProjectId,
  );
  const activeProject = projects[activeIndex];
  const Preview = previewComponents[activeProject.id];
  const projectNumber = String(activeIndex + 1).padStart(2, "0");

  return (
    <section id="projects" className="projects-section">
      <div className="projects-ambient projects-ambient-one" aria-hidden="true" />
      <div className="projects-ambient projects-ambient-two" aria-hidden="true" />

      <motion.div
        className="projects-container"
        variants={revealContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.header className="projects-heading" variants={revealItem}>
          <div className="projects-section-label">
            <span>04</span>
            Project command center
          </div>
          <div className="projects-heading-row">
            <h2>Selected <span>Data Projects</span></h2>
            <p>
              A collection of analytics, business intelligence, data quality,
              and statistical modelling projects built to solve real data
              problems.
            </p>
          </div>
        </motion.header>

        <motion.div className="projects-command-center" variants={revealItem}>
          <nav className="projects-selector" aria-label="Featured projects">
            <div className="projects-selector-heading">
              <span>Project index</span>
              <small>{String(projects.length).padStart(2, "0")} entries</small>
            </div>

            <div className="projects-selector-list">
              {projects.map((project, index) => {
                const isActive = project.id === activeProjectId;

                return (
                  <motion.button
                    key={project.id}
                    type="button"
                    className={`projects-selector-button${
                      isActive ? " projects-selector-button-active" : ""
                    }`}
                    onClick={() => setActiveProjectId(project.id)}
                    aria-pressed={isActive}
                    aria-label={`View project ${index + 1}: ${project.title}`}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.985 }}
                  >
                    <span className="projects-selector-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="projects-selector-copy">
                      <small>{project.category}</small>
                      <strong>{project.title}</strong>
                    </span>
                    <ArrowUpRight size={15} />
                  </motion.button>
                );
              })}
            </div>
          </nav>

          <div className="projects-active-shell">
            <AnimatePresence mode="wait">
              <motion.article
                key={activeProject.id}
                className="projects-active-panel"
                initial={{ opacity: 0, y: 18, scale: 0.992 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -14, scale: 0.992 }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="projects-active-copy">
                  <div className="projects-active-meta">
                    <span>{activeProject.category}</span>
                    <small>{activeProject.technologies.length} technologies</small>
                  </div>

                  <span className="projects-active-number" aria-hidden="true">
                    {projectNumber}
                  </span>

                  <h3>{activeProject.title}</h3>
                  <p>{activeProject.description}</p>

                  <div className="projects-tech-list" aria-label="Technologies used">
                    {activeProject.technologies.map((technology, index) => (
                      <motion.span
                        key={technology}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.12 + index * 0.045 }}
                      >
                        {technology}
                      </motion.span>
                    ))}
                  </div>

                  <div className="projects-links">
                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${activeProject.title} on GitHub`}
                    >
                      <FaGithub size={17} />
                      View Repository
                      <ArrowUpRight size={15} />
                    </a>

                    {activeProject.secondGithub && (
                      <a
                        href={activeProject.secondGithub}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View the second ${activeProject.title} repository on GitHub`}
                        className="projects-secondary-link"
                      >
                        <FaGithub size={17} />
                        OLAP & Visualization
                        <ArrowUpRight size={15} />
                      </a>
                    )}
                  </div>
                </div>

                <motion.div
                  className="projects-preview-shell"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                >
                  <div className="projects-preview-label">
                    <span>Visual model</span>
                    <span><i /> System online</span>
                  </div>
                  <Preview />
                </motion.div>
              </motion.article>
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Projects;
