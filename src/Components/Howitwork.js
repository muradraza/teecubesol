import React from "react";
import "../css/about.css";

function Howitwork() {
  return (
    <>
      <div
        className="aproch"
        style={{
          backgroundColor: "#0096FF",
          marginTop: "15px",
        }}
      >
        <div className="aprochimg">
          <img src="/aprox.jpg" alt="..." />
        </div>
        <div className="approchdetails">
          <p>------ HOW IT WORKS?</p>
          <h3>Everything you need on creating a business process.</h3>
          <br />
          <br />

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
                <h4>Collect Ideas</h4>
              </div>
              <div>
                <p>
                  Gather innovative concepts to drive your business forward.
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
                <h4>Data Analysis</h4>
              </div>
              <div>
                <p>
                  Transform data into actionable insights for strategic
                  decisions.
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
                <h4>Magic Touch</h4>
              </div>
              <div>
                <p>Add a unique flair that sets your brand apart.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="aproch"
        style={{
          marginTop: "15px",
        }}
      >
        <div className="approchdetails">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Professional Design
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  Experience visually stunning and highly functional designs
                  tailored to your brand identity. Our professional design
                  services ensure your business stands out in the competitive
                  market.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Top-Notch Support
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  Benefit from our dedicated support team, always ready to
                  assist you with any queries or issues. We provide reliable and
                  timely solutions to keep your operations running smoothly.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Header and Slider Options
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  Enhance your website with customizable header and slider
                  options that captivate your audience. Our dynamic features
                  allow you to showcase your content in an engaging and visually
                  appealing manner.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="aprochimg">
          <img src="/aprox.jpg" alt="..." />
        </div>
      </div>
    </>
  );
}

export default Howitwork;
