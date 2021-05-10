import React from "react";
import { Link } from "react-router-dom";
import "../css/footer.css";
import {
  services,
  links,
  accounts,
  business,
  education,
  values,
  about,
} from "../data/NavItems";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="row">
          <h4>Explore</h4>
          {links.map((item) => (
            <Link className="link__items" key={item.id} to={item.link}>
              <li>{item.title}</li>
            </Link>
          ))}
        </div>
        <div className="row">
          <h4>Services</h4>
          {services.map((item) => (
            <Link className="link__items" key={item.id} to={item.link}>
              <li>{item.title}</li>
            </Link>
          ))}
          <h4>Account</h4>
          {accounts.map((item) => (
            <Link className="link__items" key={item.id} to={item.link}>
              <li>{item.title}</li>
            </Link>
          ))}
        </div>
        <div className="row">
          <h4>For Business</h4>
          {business.map((item) => (
            <Link className="link__items" key={item.id} to={item.link}>
              <li>{item.title}</li>
            </Link>
          ))}
          <h4>For Education</h4>
          {education.map((item) => (
            <Link className="link__items" key={item.id} to={item.link}>
              <li>{item.title}</li>
            </Link>
          ))}
        </div>

        <div className="row">
          <h4>Apple Values</h4>
          {values.map((item) => (
            <Link className="link__items" key={item.id} to={item.link}>
              <li>{item.title}</li>
            </Link>
          ))}
          <h4>About Apple</h4>
          {about.map((item) => (
            <Link className="link__items" key={item.id} to={item.link}>
              <li>{item.title}</li>
            </Link>
          ))}
        </div>
      </div>
      <div className="locator">
        <small>
          <span>Find a retailer</span>near you
        </small>
      </div>

      <div className="footer__copyright">
        <div className="left">
          <small>
            Copyright &copy; {`${new Date().getUTCFullYear()}`} Apple Inc. All
            rights reserved.
          </small>
        </div>
        <div className="middle">
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
          <li>Legal</li>
          <li>Site Map</li>
        </div>

        <div className="end">
          <small>South Africa</small>
        </div>
      </div>
    </div>
  );
}

export default Footer;
