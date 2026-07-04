import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  LockKeyhole,
  Mail,
  MapPin,
  Phone,
  Radio,
  Send,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const revealContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.11,
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

const contactMethods = [
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: personalInfo.linkedin,
    icon: FaLinkedinIn,
    external: true,
  },
  {
    label: "GitHub",
    value: "Explore repositories",
    href: personalInfo.github,
    icon: FaGithub,
    external: true,
  },
  {
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    icon: Phone,
    external: false,
  },
];

function validateForm(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.subject.trim()) {
    errors.subject = "Please add a subject.";
  }

  if (!values.message.trim()) {
    errors.message = "Please enter a message.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Please enter at least 10 characters.";
  }

  return errors;
}

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPrepared, setIsPrepared] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setIsPrepared(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
    setIsPrepared(false);

    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 650));
    setIsSubmitting(false);
    setIsPrepared(true);

    // Connect EmailJS, Formspree, or a backend API here when real message
    // delivery is configured. This demo intentionally prepares a draft only.
  };

  const emailDraftHref = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
    formData.subject,
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
  )}`;

  return (
    <section id="contact" className="contact-section">
      <div className="contact-ambient contact-ambient-one" aria-hidden="true" />
      <div className="contact-ambient contact-ambient-two" aria-hidden="true" />

      <motion.div
        className="contact-container"
        variants={revealContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div className="contact-intro" variants={revealItem}>
          <div className="contact-section-label">
            <span>06</span>
            Communication channel
          </div>

          <h2>
            Start a
            <span> Conversation</span>
          </h2>

          <p className="contact-description">
            Have an internship opportunity, data project, or collaboration
            idea? Let&apos;s connect.
          </p>

          <div className="contact-availability">
            <span className="contact-availability-dot" />
            <div>
              <small>Current availability</small>
              <strong>Open to Data Science Internship Opportunities</strong>
            </div>
          </div>

          <div className="contact-methods">
            {contactMethods.map((method) => {
              const Icon = method.icon;

              return (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target={method.external ? "_blank" : undefined}
                  rel={method.external ? "noreferrer" : undefined}
                  aria-label={`${method.label}: ${method.value}`}
                  className="contact-method-card"
                  whileHover={{ y: -5 }}
                >
                  <span className="contact-method-icon">
                    <Icon size={18} />
                  </span>
                  <span className="contact-method-copy">
                    <small>{method.label}</small>
                    <strong>{method.value}</strong>
                  </span>
                  <ArrowUpRight size={15} />
                </motion.a>
              );
            })}
          </div>

          <div className="contact-location">
            <MapPin size={16} />
            <span>Network location</span>
            <strong>{personalInfo.location}</strong>
          </div>
        </motion.div>

        <motion.div className="contact-terminal" variants={revealItem}>
          <div className="contact-terminal-scan" aria-hidden="true" />

          <div className="contact-terminal-header">
            <div className="contact-terminal-title">
              <span className="contact-window-controls" aria-hidden="true">
                <i /><i /><i />
              </span>
              <div>
                <Terminal size={16} />
                <span>transmission_terminal.exe</span>
              </div>
            </div>
            <span className="contact-transmission-id">
              TX-{personalInfo.shortName.toUpperCase()}-DS
            </span>
          </div>

          <div className="contact-status-row" aria-label="Terminal status">
            <span><Radio size={13} /> System Online</span>
            <span><LockKeyhole size={13} /> Secure Channel</span>
            <span><ShieldCheck size={13} /> Ready to Connect</span>
          </div>

          <div className="contact-command-line" aria-hidden="true">
            <span>charith@portfolio:~$</span>
            initialize transmission
            <i />
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="contact-form-grid">
              <div className="contact-field">
                <label htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  autoComplete="name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                />
                {errors.name && <small id="contact-name-error">{errors.name}</small>}
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                />
                {errors.email && <small id="contact-email-error">{errors.email}</small>}
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What would you like to discuss?"
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? "contact-subject-error" : undefined}
              />
              {errors.subject && <small id="contact-subject-error">{errors.subject}</small>}
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows={6}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "contact-message-error" : undefined}
              />
              <span className="contact-character-count">
                {formData.message.length} characters
              </span>
              {errors.message && <small id="contact-message-error">{errors.message}</small>}
            </div>

            <div className="contact-validation-summary" aria-live="polite">
              {Object.values(errors).some(Boolean)
                ? "Please correct the highlighted fields before transmitting."
                : ""}
            </div>

            <button
              type="submit"
              className="contact-submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <><span className="contact-submit-loader" /> Preparing transmission</>
              ) : (
                <><Send size={17} /> Transmit Message</>
              )}
            </button>

            <div className="contact-form-feedback" aria-live="polite">
              <AnimatePresence mode="wait">
                {isPrepared && (
                  <motion.div
                    key="prepared"
                    className="contact-success"
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8 }}
                  >
                    <CheckCircle2 size={20} />
                    <div>
                      <strong>Message prepared successfully</strong>
                      <span>No server submission was made.</span>
                    </div>
                    <a href={emailDraftHref}>Open Email Draft</a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Contact;
