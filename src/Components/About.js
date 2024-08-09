import React from "react";
import { Helmet } from "react-helmet";
import "../css/about.css";
import CountUp from "react-countup";

function About() {
  return (
    <>
      <div className="abt">
        <div className="abtimg">
          <img src="/ab.jpg" alt="12" />
          {/* <div className="years">
            <CountUp
              start={0}
              end={8}
              duration={4}
              // separator=" "
              // decimals={4}
              delay={2}
              decimal=","
              //prefix="EUR "
              suffix=" +"
              //onEnd={() => console.log("Ended! 👏")}
              //onStart={() => console.log("Started! 💨")}
            >
              {({ countUpRef, start }) => (
                <div>
                  <span
                    style={{
                      fontSize: "50px",
                    }}
                    ref={countUpRef}
                  />
                </div>
              )}
            </CountUp>
          </div> */}
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
