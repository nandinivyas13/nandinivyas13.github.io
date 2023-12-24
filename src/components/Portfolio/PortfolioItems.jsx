import React from "react";
import "../../assets/css/portfolio.css";

const PortfolioItems = ({ item }) => {
  return (
    <>
      <div className="portfolio__card" key={item.id}>
        <img src={item.image} alt="" className="portfolio__img" />
        <h3 className="portfolio__title">{item.title}</h3>
        <a
          href={item.link}
          className="portfolio__button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read <i className="bx bx-right-arrow-alt portfolio__button"></i>
        </a>
      </div>
    </>
  );
};

export default PortfolioItems;
