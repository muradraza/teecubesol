import React from "react";
import Pagebanner from "../Components/Pagebanner";
import "../css/about.css";
import Howitwork from "../Components/Howitwork";
import { Helmet } from "react-helmet";

function About() {
  return (
    <>
      <Helmet>
        <title>
          About Us - Tee Cube Solutions Ltd | Innovators in Technology Solutions
        </title>
        <meta
          name="description"
          content="Discover the story behind Tee Cube Solutions Ltd. Learn about our mission, values, and how we transform ideas into innovative tech solutions."
        />
        <link rel="canonical" href="/about" />
      </Helmet>
      <Pagebanner name={"About Us"} />

      <div className="about">
        <div className="about1">
          <h2>
            The full service we are offering is specifically designed to meet
            your business needs and projects.
          </h2>
          <p>
            Trust TeeCube Solutions Ltd. to provide specialized expertise and
            support for every aspect of your business journey.
          </p>
        </div>
        <div className="about2">
          <div className="progresss">
            <p>Website Development</p>
            <div
              class="progress"
              style={{
                height: "20px",
                borderRadius: "25px",
              }}
            >
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: "99%" }}
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                Website Development
              </div>
            </div>
          </div>
          <div className="progresss">
            <p>Digital Marketing</p>
            <div
              class="progress"
              style={{
                height: "20px",
                borderRadius: "25px",
              }}
            >
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: "95%" }}
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                Digital Marketing
              </div>
            </div>
          </div>
          <div className="progresss">
            <p>Shopify Dropshipping Solutions</p>
            <div
              class="progress"
              style={{
                height: "20px",
                borderRadius: "25px",
              }}
            >
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: "98%" }}
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                Shopify Dropshipping Solutions
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="row row-cols-1 row-cols-md-4 g-4"
        style={{ width: "90%", margin: "auto" }}
      >
        <div class="col">
          <div
            class="card"
            style={{
              padding: "20px",
            }}
          >
            <img
              src="megaphone.png"
              class="card-img-top"
              alt="..."
              style={{ width: "80px", margin: "auto" }}
            />
            <div class="card-body text-center">
              <h5 class="card-title">Marketing</h5>
              <p class="card-text">
                At TeeCube Solutions Ltd., our marketing services elevate your
                brand and connect you with your target audience.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div
            class="card"
            style={{
              padding: "20px",
            }}
          >
            <img
              src="mark.png"
              class="card-img-top"
              alt="..."
              style={{ width: "80px", margin: "auto" }}
            />
            <div class="card-body text-center">
              <h5 class="card-title">Strategy</h5>
              <p class="card-text">
                Strategic planning is central to our approach at TeeCube
                Solutions Ltd.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div
            class="card"
            style={{
              padding: "20px",
            }}
          >
            <img
              src="screen.png"
              class="card-img-top"
              alt="..."
              style={{ width: "80px", margin: "auto" }}
            />
            <div class="card-body text-center">
              <h5 class="card-title">Development</h5>
              <p class="card-text">
                Innovation and technology drive our development services.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div
            class="card"
            style={{
              padding: "20px",
            }}
          >
            <img
              src="analytics.png"
              class="card-img-top"
              alt="..."
              style={{
                width: "80px",
                display: "flex",
                justifyContent: "center",
                margin: "auto",
              }}
            />
            <div class="card-body text-center">
              <h5 class="card-title">Data Analysis</h5>
              <p class="card-text">
                At TeeCube Solutions Ltd., our data analysis services empower
                informed decision-making.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Howitwork />
    </>
  );
}

export default About;
