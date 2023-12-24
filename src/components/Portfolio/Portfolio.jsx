import React from "react";
import "../../assets/css/portfolio.css";
import Portfolios from "./Portfolios";

const Portfolio = () => {
  return (
    <>
      <section className="work section" id="portfolio">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Blogs</span>

        <Portfolios />
      </section>
    </>
  );
};

export default Portfolio;
