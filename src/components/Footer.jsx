import React from "react";
import "../assets/css/footer.css";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__container container">
          <h1 className="footer__title">Nandini Vyas</h1>

          <ul className="footer__list">
            <li>
              <a href="#about" className="footer__link">
                About
              </a>
            </li>
            <li>
              <a href="#resume" className="footer__link">
                Resume
              </a>
            </li>
            <li>
              <a href="#portfolio" className="footer__link">
                Projects
              </a>
            </li>
          </ul>

          <div className="footer__social">
            <a
              href="mailto:nandini.9605@gmail.com"
              className="home__social-icons"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="uil uil-google"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/nandini-vyas-profilelink"
              className="home__social-icons"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="uil uil-linkedin"></i>
            </a>

            <a
              href="https://medium.com/@V_Nandini"
              className="home__social-icons top-margin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="ri:medium-fill" />
            </a>

            <a
              href="https://bento.me/nandinivyas"
              className="home__social-icons top-margin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="mingcute:pen-fill" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
