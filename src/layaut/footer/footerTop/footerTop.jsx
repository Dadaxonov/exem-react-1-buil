import React from "react";
import Logo from "../../../assets/imgs/logo.svg";
import Insta from "../../../assets/icons/instagramm1.svg";
import tvit from "../../../assets/icons/twitter1.svg";
import yotub from "../../../assets/icons/youtube1.svg";
import fes from "../../../assets/icons/facebook1.svg";

export const FooterTop = () => {
  return (
    <div className="footer1">
      <div className="container footerTop__container">
      <div className="footerTop__box">
        <div>
          <div className="footertop__logo">
            <img src={Logo} alt="dddfd" />
          </div>
          <p className="footertop__text">
            We are a team of professional designers and developers that create
            high quality wordpress plugins, Html, React Template.
          </p>
          <div className="footertop__icons">
            <a target="blank" href="#" className="footertop__icon">
              <img src={Insta} alt="sds" />
            </a>
            <a target="blank" href="#" className="footertop__icon">
              <img src={tvit} alt="sds" />
            </a>
            <a target="blank" href="#" className="footertop__icon">
              <img src={yotub} alt="sds" />
            </a>
            <a target="blank" href="#" className="footertop__icon">
              <img src={fes} alt="sds" />
            </a>
          </div>
        </div>
        <div className="footertop__navbar">
          <div className="footertop__minibox">
            <h2 className="footertop__title">Information</h2>
            <span className="footertop__span"></span>
          </div>
          <ul className="footertop__list">
            <li className="footertop__item">About us</li>
            <li className="footertop__item">Payment</li>
            <li className="footertop__item">Contact us</li>
            <li className="footertop__item">Stores</li>
          </ul>
        </div>
        <div className="footertop__navbar">
          <div className="footertop__minibox">
            <h2 className="footertop__title">social Links</h2>
            <span className="footertop__span"></span>
          </div>
          <ul className="footertop__list">
            <li className="footertop__item">New products</li>
            <li className="footertop__item">Best sales</li>
            <li className="footertop__item">Login</li>
            <li className="footertop__item">My account</li>
          </ul>
        </div>
        <div className="footertop__navbar">
          <div className="footertop__minibox">
            <h2 className="footertop__title">social Links</h2>
            <span className="footertop__span"></span>
          </div>
          <p className="footertop__text2">
            Subcribe to the TheFace mailing list to receive update on mnew
            arrivals, special offers and other discount information.
          </p>
          <div className="footertop__form">
            <form>
              <input
                className="footertop__input"
                placeholder="Your email address"
                type="email"
              />
              <button className="footertop__button">Sign up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
