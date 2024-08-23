import React from "react";
import Hero from "../Components/Hero";
import Servicesgrid from "../Components/Servicesgrid";
import About from "../Components/About";
import Approch from "../Components/Approch";
import Showcases from "../Components/Showcases";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from ".././Components/Footer";

function Home() {
  return (
    <>
      <Helmet>
        <title>Digital Design Agency | TeeCube Solutions ltd</title>
        <meta
          name="description"
          content="TeeCube Solutions Ltd is a dynamic digital design agency committed to revolutionizing brand strategies and enhancing digital presence."
        />
        <link rel="canonical" href="https://teecubesolutionsltd.com/" />
      </Helmet>

      <Nav />

      <Hero />
      <Servicesgrid />
      <About />
      <Approch />
      <div
        className="cta"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <p className="ctap">BECOME A PART OF OUR THRIVING NETWORK</p>
        <h3 className="ctah">
          With the trust of over 5000+ clients, you can join our community and
          harness our services to fuel your business growth.
        </h3>

        <button
          type="button"
          class="btn btn-primary"
          style={{
            padding: "10px 45px",
          }}
        >
          <Link
            to={"tel:03322082393"}
            style={{
              color: "#fff",
              listStyle: "none",
              textDecoration: "none",
              fontfamily: "Montserrat Alternates",
              fontweight: "500",
              fontstyle: "normal",
            }}
          >
            Call Now
          </Link>
        </button>
      </div>

      <div className="showcase">
        <p className="subtitle">OUR PROJECTS</p>
        <h3>
          Check out some of our awesome projects with creative ideas and great
          design.
        </h3>
      </div>
      <Showcases />
      <Footer />
    </>
  );
}

export default Home;
