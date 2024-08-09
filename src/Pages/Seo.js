import React from "react";
import Pagebanner from "../Components/Pagebanner";
import "../css/seo.css";
import Counter from "../Components/Counter";
import { Helmet } from "react-helmet";

function Seo() {
  return (
    <>
      <Helmet>
        <title>Unmatched SEO Services for Sustainable Online Success</title>
        <meta
          name="description"
          content="Seeking enduring SEO solutions? TeeCube delivers the best SEO services in the US, propelling your website to new heights. Ready to secure long-term online excellence?"
        />
        <link rel="canonical" href="/seo" />
      </Helmet>

      <Pagebanner name={"Search Engine Optimization"} />

      <div className="aproch">
        <div className="approchdetails">
          <h3>
            SEO services Florida to help Rank your brand higher on Google Search
          </h3>
          <p>
            Continually getting lost amid online competition? Or maybe your
            searching for the best SEO services near me? It seems like you need
            a little help from the best SEO company in Florida, California, that
            offers SEO services globally. T Cube help you to climb up the SERPs
            and be on the top-tier of your customer’s preferences. Looking for
            affordable search engine optimization services is hard, and it is
            even harder to find the best SEO company or local SEO services.
            Lucky for you, our top highly skilled and professional SEO experts
            are here to help you provide the best SEO services online. We are an
            experienced group of SEO professionals focused on providing
            affordable search engine optimization services for businesses of all
            shapes and sizes. We are the best SEO agency out there working with
            the sole motivation to help your business shine on the search
            rankings..
            <ul>
              <li>1) On-page SEO Services</li>
              <li>2) Off-page SEO Services</li>
              <li>3) Strategic SEO planning</li>
              <li>4) SEO website audit</li>
              <li>5) Keyword Research and Analysis</li>
              <li>6) Ongoing Audience Research and Analysis</li>
            </ul>
          </p>
        </div>
        <div className="aprochimg">
          <img src="/seo.png" alt="..." />
        </div>
      </div>

      <div
        className="seoplan"
        style={{
          marginTop: "30px",
        }}
      >
        <p className="text-center p-0">
          We’ve Got a Proven Formula for Success to Guarantee Results with SEO
          Services to Our Clients
        </p>
        <h3 className="text-center">
          The work isn’t done till your marketing objectives aren’t met with our
          Search Engine Optimization services. We follow a precise and proven
          formula for success that makes us the best SEO agency out there in the
          market.
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
              <h5 class="card-title">SEO Services Plan</h5>
              <p class="card-text">
                Planning out the perfect SEO strategies is the first step to
                many for your brand improvement. Creating a proper marketing
                plan is where we start from.
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
              <h5 class="card-title">Managed SEO services</h5>
              <p class="card-text">
                Our experts always monitor SEO link building services with
                unique and engaging content measuring and analyzing statistics
                is what helps our SEO experts understand the nature of your
                brand.
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
              <h5 class="card-title">SEO Results</h5>
              <p class="card-text">
                Discovering new trends, new audience networks and new potential
                customers is an effective cycle that always keeps moving.
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
            src="/seopic/11.png"
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />

          <img
            src="/seopic/12.png"
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0 sepic">
          <img
            src="/seopic/14.png"
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Mountains in the Clouds"
          />

          <img
            src="/seopic/15.png"
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0 sepic">
          <img
            src="/seopic/15.png"
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />

          <img
            src="/seopic/13.png"
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

export default Seo;
