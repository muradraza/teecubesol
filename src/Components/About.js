import React from "react";
import { Helmet } from "react-helmet";
import "../css/about.css";

function About() {
  return (
    <>
      <Helmet>
        <title>
          Tee Cube Solutions Ltd | Innovators in Technology Solutions
        </title>
        <meta
          name="description"
          content="Discover the story behind Tee Cube Solutions Ltd. Learn about our mission, values, and how we transform ideas into innovative tech solutions."
        />
      </Helmet>
      <div className="abt">
        <div className="abtimg">
          <img src="/about.jpg" alt="12" />
        </div>
        <div className="abttxt">
          <h5>About Us</h5>
          <p>
            TeeCube Solutions Ltd is a dynamic marketing agency committed to
            revolutionizing brand strategies and enhancing digital presence.
            With a focus on precision and innovation, we tailor comprehensive
            solutions to meet the diverse needs of our clients. Our team of
            experts combines creativity, data-driven insights, and cutting-edge
            technology to deliver impactful results and drive business growth.
            At TeeCube Solutions Ltd, we strive for excellence in every aspect
            of our work, from brand naming and marketing strategies to web
            design and development. Partner with us to unleash the full
            potential of your brand and achieve unparalleled success in the
            digital landscape.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
