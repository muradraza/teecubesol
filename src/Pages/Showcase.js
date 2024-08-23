import React from "react";
import Pagebanner from "../Components/Pagebanner";
import Showcases from "../Components/Showcases";
import { Helmet } from "react-helmet";
import Nav from "../Components/Nav";
import Footer from ".././Components/Footer";

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
      <Nav />
      <Pagebanner name={"Show Case"} />
      <Showcases />
      <Footer />
    </>
  );
}

export default Showcase;
