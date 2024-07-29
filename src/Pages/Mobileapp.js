import React from "react";
import { Helmet } from "react-helmet";
import Pagebanner from "../Components/Pagebanner";
import Counter from "../Components/Counter";

function Mobileapp() {
  return (
    <>
      <Helmet>
        <title>
          Best Mobile App Development Company in USA - TeeCube Solutions
        </title>
        <meta
          name="description"
          content="Looking for top-notch website management? TeeCube is the top website management company in USA, ensuring your online presence is always optimized and running smoothly."
        />
      </Helmet>
      <Pagebanner name={"Mobile App Development"} />

      <div className="aproch">
        <div className="approchdetails">
          <h3>Leading Mobile Application Design and Development Company</h3>
          <p>
            T Cube provides full-service for mobile app development companies
            based in Florida, California and other states of the US. Our team of
            skilled professionals will help your business in every phase of the
            mobile software development cycle from product planning to app
            development, design and deployment. We build native iOS and Android
            apps, custom mobile apps, web applications, databases,
            cross-platform app development and hybrid mobile application from
            scratch. We love working with organizations of all size, from
            startups to a corporate level. Our primary service features involve.
            <ul>
              <li>1) iOS App Design and Development</li>
              <li>2) Android App Design and Development</li>
              <li>3) Windows App Design and Development</li>
              <li>4) Hybrid App Design and Development</li>
              <li>5) Application Maintenance Services</li>
              <li>6) Startup Application service</li>
            </ul>
          </p>
        </div>
        <div className="aprochimg">
          <img src="/mob.png" alt="..." />
        </div>
      </div>

      <div
        className="seoplan"
        style={{
          marginTop: "30px",
        }}
      >
        <p className="text-center p-0">
          We’ve Got a Proven Formula for Success to Guarantee Results for Our
          Clients
        </p>
        <h3 className="text-center">
          If it isn’t a 100% then it isn’t enough for us. To ensure each
          corporate 3D explainer video is getting nothing but the best, we make
          sure we follow a set of rules that keep us on track in terms of
          results.
        </h3>
      </div>

      <div
        class="row row-cols-1 row-cols-md-3 g-4"
        style={{ width: "80%", margin: "auto" }}
      >
        <div class="col">
          <div
            class="card"
            style={{
              padding: "20px",
            }}
          >
            <img
              src="idea.png"
              class="card-img-top"
              alt="..."
              style={{ width: "80px", margin: "auto" }}
            />
            <div class="card-body text-center">
              <h5 class="card-title">Idea</h5>
              <p class="card-text">
                Your ideas are the most important aspect of your application. It
                defines how different your application is going to be, which is
                why it is the initial step to our process.
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
              src="services.png"
              class="card-img-top"
              alt="..."
              style={{ width: "80px", margin: "auto" }}
            />
            <div class="card-body text-center">
              <h5 class="card-title">Develop</h5>
              <p class="card-text">
                Designing and developing your app idea is the next most
                important step that we focus on to create an app that stands out
                from all of its competitors and makes a mark on the audience.
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
              src="result.png"
              class="card-img-top"
              alt="..."
              style={{ width: "80px", margin: "auto" }}
            />
            <div class="card-body text-center">
              <h5 class="card-title">Deliver</h5>
              <p class="card-text">
                Delivering perfection is what our team aims for, mainly why we
                focus on quality assurance and bug fixes before the final
                delivery to make sure you get what you imagine.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Gallery --> */}
      <div
        class="row"
        style={{ width: "80%", margin: "auto", paddingTop: "50px" }}
      >
        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0 sepic">
          <img
            src="/appportfolio.png"
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />

          <img
            src="/app02.png"
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0 sepic">
          <img
            src="/app03.png"
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Mountains in the Clouds"
          />

          <img
            src="/app04.png"
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0 sepic">
          <img
            src="/app05.png"
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />

          <img
            src="/app08.png"
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Wintry Mountain Landscape"
          />
        </div>
      </div>
      {/* <!-- Gallery --> */}
      <Counter />
    </>
  );
}

export default Mobileapp;
