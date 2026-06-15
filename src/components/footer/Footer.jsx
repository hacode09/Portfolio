import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__links">
          <a href="#home" className="footer__link">
            Home
          </a>
          <a href="#about" className="footer__link">
            About
          </a>
          <a href="#experience" className="footer__link">
            Experience
          </a>
          <a href="#contact" className="footer__link">
            Contact
          </a>
        </div>
        <p className="footer__copy">
          &copy; {year} Rahul Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
