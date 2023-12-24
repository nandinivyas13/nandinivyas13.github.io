import React from "react";
import "../assets/css/home.css";
import { Icon } from '@iconify/react';

const Home = () => {
  return (
    <>
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            <div className="home__img"></div>
            

            <div className="home__data">
              <h1 className="home__title">Nandini Vyas</h1>
              <h3 className="home__subtitle">Content Strategist</h3>
              <p className="home__description">
              Versatile Creative Writer
              </p>

              <div className="home__social">
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

              <a href="#contact" className="button button--flex">
                Say Hello <i className="uil uil-message home__icons"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
