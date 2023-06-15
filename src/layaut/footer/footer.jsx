import React from "react";
import { FooterTop } from "./footerTop/footerTop";
import { FooterBottom } from "./footerBottom/footerBottom";
import "./footer.css";

export const Footer = () => {
  return (
    <div>
      <FooterTop />
      <FooterBottom />
    </div>
  );
};
