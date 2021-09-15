import React from "react";
import "../css/card.css";
import { AiFillApple } from "react-icons/ai";

export default function Card() {
  return (
    <div className="card">
      <div className="card__container">
        <div className="card__top">
          <div className="heading">
            <span>
              <AiFillApple />
            </span>{" "}
            <h1 className="title">Watch</h1>
          </div>
          <small className="sub_title">Series 7</small>

          <p className="info">
            The largest, most advanced Always‑On Retina display. The most
            durable Apple Watch ever. Breakthrough health innovations. Up to 33%
            faster charging.
          </p>
          <span className="grey">
          Available later this fall
          </span>
          <button>Learn More</button>
        </div>
        <div className="card__bottom">
           
        </div>
      </div>
    </div>
  );
}
