import React from "react";
import Hero from "../Components/Hero";
import Servicesgrid from "../Components/Servicesgrid";
import About from "../Components/About";
import Approch from "../Components/Approch";
import Showcases from "../Components/Showcases";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Index() {
  return (
    <>
      <Helmet>
        <title>Digital Design Agency</title>
        <meta
          name="description"
          content="TeeCube Solutions Ltd is a dynamic digital design agency committed to revolutionizing brand strategies and enhancing digital presence."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "TeeCube Solutions ltd",
            alternateName: "TeeCube",
            url: "https://teecubesolutionsltd.com/",
            logo: "https://teecubesolutionsltd.com/",
            sameAs: [
              "https://www.facebook.com/teecubesolutionsltd",
              "https://www.instagram.com/teecubes/",
              "https://www.linkedin.com/company/teecubesolutions",
            ],
          })}
        </script>
      </Helmet>

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
        <p>OUR PROJECTS</p>
        <h3>
          Check out some of our awesome projects with creative ideas and great
          design.
        </h3>
      </div>
      <Showcases />
    </>
  );
}

export default Index;
