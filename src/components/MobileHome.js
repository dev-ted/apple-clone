import React from "react";
import Section from "./Section";
import "../css/home.css";

import Footer from "./Footer";
import Hero from "./Hero";
import Iphone13 from "../images/iphone13.jpg"
import Iphone13_2 from "../images/iphone13_2.jpg"
import iPad from "../images/ipad.jpg";
import iPadMini from "../images/ipadMini.jpg";
import Card from "./Card";

function MobileHome() {
  return (
    <div className="home">
      <Hero />
      <Section
        background="light"
        link="/pro"
        imageBackground="image__background"
        title="iPhone 13 Pro"
        color="dark__text"
        cta_1 = "Learn More"
        cta_2 = "View Pricing"
        subtitle={`A dramatically more powerful camera system. An all‑new OLED display with ProMotion. The world’s fastest smartphone chip. A huge leap in battery life.`}
        image={Iphone13}
      />
     <Section

     
      background="dark"
      button="bt-white"
      imageBackground="image__background"
      title="iPhone 13 Pro"
      color="white__text"
      cta_1 = "Learn More"
      cta_2 = "View Pricing"
      subtitle={`Powerful A15 Bionic chip. New all‑screen design. Superfast 5G. Ultra Wide front camera with Center Stage. Now in four gorgeous colors.`}
      image={Iphone13_2}
    />

<Card />

<div className="home__grid">
      <Section
        background="light"
        imageBackground="image__background"
        title="iPad Mini"
        color="dark__text"
        cta_1 = "Learn More"
        cta_2 = "Order"
        subtitle={`A dramatically more powerful camera system. An all‑new OLED display with ProMotion. The world’s fastest smartphone chip. A huge leap in battery life.`}
        image={iPad}
      />
      
      </div>
      <div className="home__grid">
      <Section
      reverse
        background="light"
        imageBackground="image__background"
        title="iPad "
        color="dark__text"
        cta_1 = "Learn More"
        cta_2 = "Order"
        subtitle={`Advanced A13 Bionic chip. True Tone technology. Ultra Wide front camera with Center Stage. Now starting at 64GB of storage.`}
        image={iPadMini}
      />
      
      </div>
      <div className="home__footer">
        <div className="home__footer__content">
          <div className="home__footer__text">
            <p>
              1. Apple TV+ is R84.99/month after free trial. One subscription
              per Family Sharing group. Offer valid for three months after
              eligible device activation. Plan automatically renews until
              cancelled. Restrictions and other terms apply.
            </p>
            <p>
              2. R84.99/month after free trial. One subscription per Family
              Sharing group. Offer valid for three months after eligible device
              activation. Plan automatically renews until cancelled.
              Restrictions and other terms apply.
            </p>
            <p>Not all straps available in all regions.</p>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default MobileHome;
