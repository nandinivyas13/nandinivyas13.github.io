import React from "react";
import "../assets/css/resume.css"; // Make sure to update the path to your CSS file

const Resume2 = () => {
  return (
    <>
      <section className="skills section" id="resume">
        <h2 className="section__title">Resume</h2>
        <span className="section__subtitle">Summary</span>

        <div className="resume__container container grid">
          <div className="resume__column">
            <div className="resume__item">
              <h4>Nandini Vyas</h4>
              <p>
                <em>Content Strategist</em>
              </p>

              <a href="mailto:nandini.9605@gmail.com">
                <p>nandini.9605@gmail.com</p>
              </a>
            </div>

            <h3 className="resume__title">Education</h3>
            <div className="resume__item">
              <h4>Graduation</h4>
              <h5>2014 - 2017</h5>
              <p>
                <em>K. J Somaiya College </em>
              </p>
              <p>Bachelors of Commerce</p>
            </div>
            <div className="resume__item">
              <h4>H.S.C</h4>
              <h5>2012 - 2014</h5>
              <p>
                <em>Smt. Sulochanadevi Singhania School</em>
              </p>
              <p>Class: 12th (ICSE Board)</p>
            </div>
            <div className="resume__item">
              <h4>S.S.C</h4>
              <h5>2000 - 2012</h5>
              <p>
                <em>Smt. Sulochanadevi Singhania School</em>
              </p>
              <p>Class: 10th (ICSE Board)</p>
            </div>

            <h3 className="resume__title">Skills</h3>
            <div className="resume__item">
              <p>
                <em>Content Writing and Strategy</em>
              </p>
              <p>
                <em>Web Content Writing, Editing and Proofreading</em>
              </p>
              <p>
                <em>Social Media and Email Marketing</em>
              </p>
              <p>
                <em>French</em>
              </p>
              <p>
                <em>International Bussiness Development</em>
              </p>
              
            </div>

          </div>
          <div className="resume__column">
            <h3 className="resume__title">Professional Experience</h3>
            <div className="resume__item">
              <h4>Content Strategist</h4>
              <h5>Aug 2022 - Present</h5>
              <p>
                <em>Vertoz Advertising Limited</em>
              </p>
            </div>
            <div className="resume__item">
              <h4>Contest Coordinator</h4>
              <h5>May 2021 - July 2022</h5>
              <p>
                <em>LeFrehindi - Paris</em>
              </p>
            </div>

            <div className="resume__item">
              <h4>Associate Center Manager</h4>
              <h5>May 2021 - July 2022</h5>
              <p>
                <em>CultFit Healthcare Pvt. Ltd.</em>
              </p>
            </div>
            <h3 className="resume__title">Certifications and Activities</h3>
            <div className="resume__item">
              <h4>French Language DELF B1</h4>
              <h5>2020 - 2021</h5>
              <p>
                <em>
                Alliance Française de Bombay
                </em>
              </p>
            </div>
            <div className="resume__item">
              <h4>Search Engine Optimization</h4>
              <h5>2019</h5>
              <p>
                <em>
                Coursera
                </em>
              </p>
            </div>
            <div className="resume__item">
              <h4>National Cadet Corps </h4>
              <p>
                <em>Defense</em>
              </p>
              <p>
                <em>Certificate 'A' (grade A)</em>
              </p>
              
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume2;
