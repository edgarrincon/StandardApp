import React from "react";
import { Button } from "../Button/Button";
import "./Pricing.css";
import { GoPlusSmall } from "react-icons/go";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";

import { DiReact } from "react-icons/di";
import { DiWordpress } from "react-icons/di";
import { SiWoo } from "react-icons/si";

import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#f00946", size: 64 }}>
      <div className="pricing__section">
        <div className="pricing__wrapper">
          <h1 className="pricing__heading">Pricing</h1>
          <div className="pricing__container">
            <Link to="/contacts" className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <div className="icon">
                  <AiFillHtml5 />
                  <GoPlusSmall />
                  <DiCss3 />
                </div>
                <h3>Essential</h3>
                <h4>$199</h4>
                <p>Static Website</p>
                <ul className="pricing__container-features">
                  <li>Domain and Hosting (1 year)</li>
                  <li>Html and CSS informative site</li>
                  <li>Out of the box</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="yellow">
                  Contact Us
                </Button>
              </div>
            </Link>
            <Link to="/contacts" className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <div className="icon">
                  <DiWordpress /> <GoPlusSmall /> <SiWoo />
                </div>
                <h3>Professional</h3>
                <h4>$299</h4>
                <p>WordPress and eCommerce</p>
                <ul className="pricing__container-features">
                  <li>Domain and Hosting (1 year)</li>
                  <li>20 eCommerce Products</li>
                  <li>SEO friendly</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="yellow">
                  Contact Us
                </Button>
              </div>
            </Link>

            <Link to="/contacts" className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <div className="icon">
                  <DiReact />
                </div>
                <h3>Standards</h3>
                <h4>$399</h4>
                <p>React Site</p>
                <ul className="pricing__container-features">
                  <li>Informative and fast</li>
                  <li>Adaptable to your needs</li>
                  <li>Domain and Hosting (1 year)</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="yellow">
                  Contact Us
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;
