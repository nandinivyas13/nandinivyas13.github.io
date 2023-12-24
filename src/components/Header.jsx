import React, { useState } from "react";
import "../assets/css/header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="app-container">
      <header id="header" className={` ${isMenuOpen ? "open" : "close"}`}>
        <nav
          id="navbar"
          className={`navbar nav-menu ${isMenuOpen ? "open" : "close"}`}
        >
          <button className="toggle-button" onClick={handleToggle}>
            <i className="bx bx-x"></i>
          </button>
          <ul>
            <li>
              <a href="#home" className="nav-link" onClick={handleToggle}>
                <i className="bx bx-home"></i> <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link" onClick={handleToggle}>
                <i className="bx bx-user"></i> <span>About</span>
              </a>
            </li>
            <li>
              <a href="#resume" className="nav-link" onClick={handleToggle}>
                <i className="bx bx-file-blank"></i> <span>Resume</span>
              </a>
            </li>
            <li>
              <a href="#portfolio" className="nav-link" onClick={handleToggle}>
                <i className="bx bx-book-content"></i> <span>Portfolio</span>
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link" onClick={handleToggle}>
                <i className="bx bx-envelope"></i> <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <div id="main" className={isMenuOpen ? "open" : "close"}>
        <div className="content">
          <button className="toggle-button" onClick={handleToggle}>
            <i className="bx bx-menu"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
