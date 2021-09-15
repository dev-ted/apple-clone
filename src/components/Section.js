import React from "react";

import "../css/section.css";

function Section({
  title,
  subtitle,
  reverse,
  color,
  button,
  cta_1,
  cta_2,
 
  image,
 
  background,
  imageBackground,
}) {
  return (
    <div className={`section ${background}`}>
      <div className={reverse ? `reverse ${color}` : `section__container ${color}`}>
        <div className="section__top">
          <h1 className="section__title">{title}</h1>

          <h5 className="subtitle">{subtitle}</h5>
          <div className="cta__butons">
            <button className ={`${button} `}>{cta_1} </button>

            <button className ={`${button} `}>{cta_2} </button>
          </div>
        </div>

        <div
          className={`section__bottom`}
          style={{
            backgroundImage: `url(${image}) `,
          }}
        >
        
        </div>
      </div>
    </div>
  );
}

export default Section;
