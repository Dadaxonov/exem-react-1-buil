import React from "react";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
export const MainLayaut = ({children}) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
