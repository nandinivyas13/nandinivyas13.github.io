import React from "react";
import "../assets/css/about.css";
import AboutImg from "../assets/images/About.jpg";
import Resume from "../assets/Nandini Vyas CV.pdf";

const About = () => {
  const handleDownload = () => {
    const pdfUrl = Resume;

    const anchor = document.createElement("a");
    anchor.href = pdfUrl;
    anchor.target = "_blank";
    anchor.download = "Nandini Vyas CV";

    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };
  return (
    <>
      <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">Introduction</span>

        <div className="about__container container grid">
          <img src={AboutImg} alt="" className="about__img" />

          <div className="about__data">
            <div className="about__info grid">
              <div className="about__box">
                <i class="bx bx-briefcase-alt about__icon"></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">2.5 Years</span>
              </div>

              <div className="about__box">
                <i class="bx bx-list-check  about__icon"></i>
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">4 Projects</span>
              </div>

              <div className="about__box">
                <i class="bx bx-award about__icon"></i>
                <h3 className="about__title">French</h3>
                <span className="about__subtitle">DELF B1</span>
              </div>
            </div>

            <p className="about__description">
              Experienced content writer and strategist specializing in brand
              narratives and impactful content. Dedicated to making a meaningful
              difference through the power of storytelling and eager to embark
              on an enriching journey of continuous learning and innovative
              exploration.
            </p>

            <button onClick={handleDownload} className="button button--flex">
              Download CV
              <i className="uil uil-download-alt button__icon"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
