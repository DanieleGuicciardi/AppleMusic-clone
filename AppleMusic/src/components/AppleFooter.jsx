import React from "react";
import "../styles/AppleFooter.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/">Privacy</a>
          <a href="/">Termini di Servizio</a>
          <a href="/">Supporto</a>
        </div>

        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-instagram"></i>
          </a>
        </div>

        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} Apple Music. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
