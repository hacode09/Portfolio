import React, { useEffect, useState } from "react";
import "./header.css";
import { motion, useScroll } from "framer-motion";

const navLinks = [
  { href: "#home", icon: "uil-estate", label: "Home" },
  { href: "#about", icon: "uil-user", label: "About" },
  { href: "#experience", icon: "uil-briefcase-alt", label: "Experience" },
  { href: "#skills", icon: "uil-brackets-curly", label: "Skills" },
  { href: "#certifications", icon: "uil-award", label: "Certification" },
  { href: "#portfolio", icon: "uil-scenery", label: "Portfolio" },
  { href: "#contact", icon: "uil-message", label: "Contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    document.body.classList.toggle("nav-open", menuOpen);
    return () => document.body.classList.remove("nav-open");
  }, [menuOpen]);

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="header">
      <motion.div
        className="progress__bar"
        style={{ scaleX: scrollYProgress }}
        aria-hidden="true"
      />
      <nav className="nav container" aria-label="Main navigation">
        <a href="#home" className="nav__logo" onClick={closeMenu}>
          H@CoDE
        </a>

        {menuOpen && (
          <div
            className="nav__overlay"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}

        <div className={menuOpen ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            {navLinks.map(({ href, icon, label }) => (
              <li className="nav__item" key={href}>
                <a
                  href={href}
                  className={`nav__link ${
                    activeSection === href.replace("#", "") ? "active-link" : ""
                  }`}
                  onClick={closeMenu}
                >
                  <i className={`uil ${icon} nav__icon`}></i>
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="nav__close"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <i className="uil uil-times"></i>
          </button>
        </div>

        <button
          type="button"
          className="nav__toggle"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <i className={`uil ${menuOpen ? "uil-times" : "uil-apps"}`}></i>
        </button>
      </nav>
    </header>
  );
};

export default Header;
