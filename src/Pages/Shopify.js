import React from "react";
import Pagebanner from "../Components/Pagebanner";
import Pricing from "../Components/Pricing";
import "../css/shopi.css";
import { Helmet } from "react-helmet";

function Shopify() {
  return (
    <>
      <Helmet>
        <title>
          Unlock Excellence with our Best Shopify Development Service
        </title>
        <meta
          name="description"
          content="Discover unmatched Shopify development expertise near me. Upgrade your online store with our top-rated services for seamless, customized, and growth-driven solutions."
        />
      </Helmet>

      <Pagebanner name={"Shopify Development"} />

      <div className="aproch" style={{ display: "flex", alignItems: "center" }}>
        <div className="approchdetails">
          <h3>Solution For Shopify</h3>
          <p>
            We’ve honed our skills in Shopify web design, website building, and
            search engine optimization. Allow us to assist you with any online
            initiatives you may have. Designed and developed with you in mind
            Shopify-powered websites. Conversion rates and speed are among the
            best in the industry. SEO and search marketing for Shopify that
            works. Shopify features that you may customize to help you operate
            your business more efficiently. Allow us to assist you with any
            online initiatives you may have. Designed and developed with you in
            mind Shopify-powered websites. Conversion rates and speed are among
            the best in the industry. SEO and search marketing for Shopify that
            works. Shopify features that you may customize to help you operate
            your business more efficiently.
          </p>
          {/* <div>
            <button
              type="button"
              class="btn btn-primary"
              style={{ marginRight: "15px" }}
            >
              Primary
            </button>
            <button type="button" class="btn btn-primary">
              Primary
            </button>
          </div> */}
        </div>
        <div className="aprochimg">
          <img src="/shopifyf.jpg" alt="..." />
        </div>
      </div>

      {/* <div
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
      </div> */}

      <Pricing />

      <div className="aproch" style={{ display: "flex", alignItems: "center" }}>
        <div className="aprochimg">
          <img src="/shop.jpg" alt="..." style={{ borderRadius: "50%" }} />
        </div>
        <div className="approchdetails">
          <h3>Our Shopify Experts Will Execute Your Idea</h3>
          <p>
            Even after you’ve set up your Shopify Online Store, there are
            several things to consider that are just as vital as putting up the
            business in the first place. To Optimize Conversion Rates, which is
            essentially how to make your Shopify Website convert into sales, you
            must first get the product-market fit perfect. Our Web Districts
            team handles sourcing products, inventory management, and making
            educated marketing decisions. The Web Districts team can help you
            turn your old website into a new customer-driven website that will
            boost your store’s credibility and visibility.
          </p>
        </div>
      </div>

      <div className="faq">
        <h3>Frequently Ask Question</h3>

        <div
          class="accordion"
          id="accordionExample"
          style={{ marginTop: "40px" }}
        >
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={{
                  backgroundColor: "#4ACEF7",
                  color: "#00",
                }}
              >
                What do I require to begin selling on Shopify?
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Once your Shopify site is up and running, all you need is a
                product to sell to get started.
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
                style={{
                  backgroundColor: "#4ACEF7",
                  color: "#00",
                }}
              >
                Where can I use Shopify to sell?
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Shopify allows you to sell practically everywhere, including
                online, in person, on marketplaces, and social media, to your
                customers.
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
                style={{
                  backgroundColor: "#4ACEF7",
                  color: "#00",
                }}
              >
                Who makes use of Shopify?
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Shopify is used by over 1,000,000 enterprises to create their
                online stores. Shopify is the greatest option for you if you
                want to sell online and have your website.
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
                style={{
                  backgroundColor: "#4ACEF7",
                  color: "#00",
                }}
              >
                What is Shopify Plus, and how does it work?
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                While Shopify is geared for small and medium-sized businesses,
                Shopify Plus is built for larger organizations. It’s the same
                platform as Shopify, but it’s more scalable for larger
                audiences.
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
                style={{
                  backgroundColor: "#4ACEF7",
                  color: "#00",
                }}
              >
                Is it possible for me to create my own Shopify store? If that's
                the case, what role does TeeCube Solutions play?
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                You certainly can, but a skilled team like TeeCube can assist
                you in getting the most out of Shopify that you otherwise would
                not be able to. Top Shopify Development Companies like Web
                Districts have years of experience with the platform and can
                help you do more with less.
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
                style={{
                  backgroundColor: "#4ACEF7",
                  color: "#00",
                }}
              >
                Is it possible for me to utilize my domain name with Shopify?
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Yes, registering a name with Shopify is simple. Log into your
                Shopify store admin, choose Preferences, then Domains & DNS to
                register your domain. Ask your domain registrar to point your
                domain to Shopify’s servers if your domain is currently
                registered with another supplier.
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
                style={{
                  backgroundColor: "#4ACEF7",
                  color: "#00",
                }}
              >
                What should I do if I receive an order?
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                When you get an order, you can log into your account and review
                the details. If you require additional information from them,
                you can send an email directly from Shopify. When the item is
                ready to ship, package it, send it to the specified address, and
                mark it as sent in Shopify to keep track of orders!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shopify;
