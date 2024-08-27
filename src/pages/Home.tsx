import { Carousel } from "components/Carousel";
import { Plot } from "components/Plot";
import { Promo } from "components/Promo";
import React from "react";

export const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Promo />
      <Plot />
      <Carousel />
    </React.Fragment>
  );
};
