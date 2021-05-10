import React from "react";
import { Link } from "react-router-dom";
import "../css/section.css";
import { BiChevronRight } from "react-icons/bi";

function Section({ title, subtitle, color, small,icon ,image, link ,background ,imageBackground }) {
  return (
    <div className={`section ${background}`}>
      <div className="section__top">
        <Link to={link}>
          <h1 className={`section__title ${color}`}>{icon}{title}</h1>
        </Link>

        <small className="section__small">{small}</small>
        <h4 className={`section__subtitle ${color}`}>{subtitle}</h4>
        <Link to={link}>
          <div className="learn__more">
            <p>Learn more </p>
            <BiChevronRight className="icon" />
          </div>
        </Link>
      </div>

      <div
        className={`section__bottom ${imageBackground}`}
        style={{
          backgroundImage: `url(${image}) `,
        }}
      >
        {/* <img className="section__image"
            src="https://www.citypng.com/public/uploads/preview/-21602679419e0tlovek0t.png"
            alt=""
          /> */}
      </div>
    </div>
  );
}

export default Section;
