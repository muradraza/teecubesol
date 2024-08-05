import React, { useEffect } from "react";
import "../css/aproch.css";
import "../js/animation.js";
import Aos from "aos";
import "aos/dist/aos.css";

function Approch() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div
        style={{
          marginTop: "30px",
        }}
      >
        <p className="text-center p-0 subtitle">OUR BUSINESS APPROACH</p>
        <h3 className="text-center">
          Relax and entrust your business needs to us. We've got your back.
        </h3>
      </div>
      <div className="aproch">
        <div className="aprochimg " data-aos="fade-left">
          <img src="/aprox.jpg" alt="..." />
        </div>
        <div className="approchdetails">
          <div
            style={{
              display: "flex",
              alignContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "20%",
              }}
            >
              <p
                style={{
                  backgroundColor: "#B0CBFF",
                  padding: "20px",
                  color: "#1E68F8",
                  borderRadius: "50%",
                }}
              >
                01
              </p>
            </div>
            <div
              style={{
                width: "80%",
              }}
            >
              <div>
                <h4>Agile Web and Software Development</h4>
              </div>
              <div>
                <p>
                  Efficiency is our motto, waste is our enemy. We mitigate risks
                  in web development through continuous, incremental releases,
                  crafting professional web designs that embody your brand
                  identity.
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "20%",
              }}
            >
              <p
                style={{
                  backgroundColor: "#B0CBFF",
                  color: "#1E68F8",
                  padding: "20px",
                  borderRadius: "50%",
                }}
              >
                01
              </p>
            </div>
            <div
              style={{
                width: "80%",
              }}
            >
              <div>
                <h4>Long-Term Collaborative Partnership</h4>
              </div>
              <div>
                <p>
                  Our dedicated web development team becomes your strategic
                  partner. They immerse themselves in your vision, comprehend
                  your products or services, and relentlessly pursue your
                  business's ultimate objectives.
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "20%",
              }}
            >
              <p
                style={{
                  backgroundColor: "#B0CBFF",
                  color: "#1E68F8",
                  padding: "20px",
                  borderRadius: "50%",
                }}
              >
                01
              </p>
            </div>
            <div
              style={{
                width: "80%",
              }}
            >
              <div>
                <h4>Mastering Software Craftsmanship</h4>
              </div>
              <div>
                <p>
                  P2P - Peer-to-peer code reviews and rigorous automated testing
                  are embedded in our DNA. We excel at unearthing the finest web
                  design and development solutions while managing technical debt
                  judiciously.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Approch;
