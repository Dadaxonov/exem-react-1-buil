import React from "react";
import bir from "../../../assets/icons/1.svg";
export const FooterBottom = () => {
  return (
    <div className="footer">
      <div className="container  footerbottom__container">
      <div className="footerbottom__box">
        <div>
          <p className="footerbottom__text">
            Copyright © HasThemes. All Rights Reserved
          </p>
        </div>
        <div className="footerbottom__icons">
          <a target="blank" href="#" className="footertop__icon">
            <img src={bir} alt="facebook" />
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};
