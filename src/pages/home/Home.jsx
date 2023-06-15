import React from "react";
import StaticCarousel from "./components/carousel/carousel";
import Carousel2 from "./components/carousel/carousel2";
import Support from "./components/support/support";
import { StaticImg } from "./components/static-img/StaticImg";
import { OurProduct } from "./components/our-product/OurProduct";
import { StaticImg2 } from "./components/static-img/StaticImg2";
import { NewProduct } from "./components/new-praduct/NewProduct";
import { Blog } from "./components/blog/Blog";
export const Home = () => {
  return (
    <>
      <StaticCarousel />
      <Support />
      <StaticImg />
      <OurProduct />
      <StaticImg2 />
      <NewProduct />
      <Blog />
      <Carousel2 />
    </>
  );
};
