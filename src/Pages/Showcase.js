import React from "react";
import Pagebanner from "../Components/Pagebanner";
import Showcases from "../Components/Showcases";
import { Helmet } from "react-helmet";

function Showcase() {
  return (
    <>
      <Helmet>
        <title>Showcase Your Innovation with TeeCube Solutions Ltd</title>
        <meta
          name="description"
          content="Transform your vision into reality with TeeCube Solutions Ltd. Explore our showcase to see cutting-edge projects and happy clients."
        />
        <link rel="canonical" href="https://teecubesolutionsltd.com/showcase" />
      </Helmet>
      <Pagebanner name={"Show Case"} />
      <Showcases />
    </>
  );
}

export default Showcase;
