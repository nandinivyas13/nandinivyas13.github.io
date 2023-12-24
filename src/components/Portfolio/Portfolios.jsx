import React, { useEffect, useState } from "react";
import { PortfolioData } from "./PortfolioData";
import PortfolioItems from "./PortfolioItems";

const Portfolios = () => {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    setPortfolios(PortfolioData);
  }, []);

  // const handleClick = (e, index) => {
  //   const clickedItem = e.target.textContent || e.target.innerText;
  //   setItem({ name: clickedItem });
  //   setActive(index);
  // };

  return (
    <>
      {/* <div className="portfolio__filters">
        {PortfolioNav.map((item, index) => (
          <span
            onClick={(e) => handleClick(e, index)}
            className={`${
              active === index ? "active-portfolio" : ""
            } portfolio__item`}
            key={index}
          >
            {item.name}
          </span>
        ))}
      </div> */}

      <div className="portfolio__container container grid">
        {portfolios.map((portfolio) => (
          <PortfolioItems item={portfolio} key={portfolio.id} />
        ))}
        <div>
          <a
            href="https://bento.me/nandinivyas"
            className="portfolio__button__readmore "
            target="_blank"
            rel="noreferrer"
          >
            More Blogs <i className="bx bx-right-arrow-alt portfolio__button"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Portfolios;
