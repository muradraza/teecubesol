import React from "react";
import "../css/counter.css";
import CountUp from "react-countup";

function Counter() {
  return (
    <>
      <section
        class="wow fadeIn animated"
        style={{
          visibility: "visible",
          animationName: "fadeInUp",
        }}
      >
        <div
          style={{
            padding: "10PX 0",
          }}
        >
          <div
            className="seoplan"
            style={{
              marginTop: "30px",
            }}
          >
            <p className="text-center p-0">
              We’ve Got a Proven Formula for Success to Guarantee Results with
              SEO Services to Our Clients
            </p>
            <h3 className="text-center">
              The work isn’t done till your marketing objectives aren’t met with
              our Search Engine Optimization services. We follow a precise and
              proven formula for success that makes us the best SEO agency out
              there in the market.
            </h3>
          </div>
          <div
            className="countercon"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "80%",
              margin: "auto",
            }}
          >
            {/* <!-- counter --> */}
            <div>
              <CountUp
                start={0}
                end={7518}
                duration={2}
                // separator=" "
                // decimals={4}
                delay={2}
                decimal=","
                //prefix="EUR "
                //suffix=" left"
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
              <p class="counter-title">Completed Projects</p>
            </div>
            {/* <!-- end counter -->*/}
            {/* <!-- counter --> */}
            <div>
              <CountUp
                start={0}
                end={5472}
                duration={2}
                // separator=" "
                // decimals={4}
                delay={2}
                decimal=","
                //prefix="EUR "
                //suffix=" left"
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
              <p class="counter-title">Satisfied Customers</p>
            </div>
            {/* <!-- end counter -->*/} {/* <!-- counter --> */}
            <div>
              <CountUp
                start={0}
                end={2184}
                duration={2}
                // separator=" "
                // decimals={4}
                delay={2}
                decimal=","
                //prefix="EUR "
                //suffix=" left"
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
              <p class="counter-title">Expert Employees</p>
            </div>
            {/* <!-- end counter -->*/}
          </div>
        </div>
      </section>
    </>
  );
}

export default Counter;
