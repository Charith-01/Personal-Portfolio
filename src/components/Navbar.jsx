import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navigationLinks } from "../data/portfolioData";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
    >
      <nav className="navbar-container">
        <a href="#home" className="logo">
          Charith<span>.OS</span>
        </a>

        <div className="desktop-nav">
          {navigationLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        <a href="#contact" className="nav-contact-button">
          Let&apos;s Talk
        </a>

        <button
          type="button"
          className="menu-button"
          onClick={() => setIsOpen((previous) => !previous)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-nav"
          >
            {navigationLinks.map((link, index) => (
              <motion.a
                key={link.id}
                href={`#${link.id}`}
                onClick={closeMenu}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.06 }}
                className="mobile-nav-link"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;