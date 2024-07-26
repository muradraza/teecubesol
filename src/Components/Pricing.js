import React from "react";
import "../css/price.css";

function Pricing() {
  return (
    <section class="pricing-section">
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-xl-5 col-lg-6 col-md-8">
            <div
              class="section-title text-center title-ex1"
              style={{
                margin: "30px 0",
              }}
            >
              <h3 className="text-center fs-1"> Our Packages</h3>
            </div>
          </div>
        </div>
        {/* <!-- Pricing Table starts --> */}
        <div class="row pp">
          <div class="col-md-4">
            <div class="price-card">
              <h2>Shopify Starter Packages</h2>
              <p>
                Suitable for newly formed organizations or small incubated
                startups
              </p>
              <p class="price">
                <span>$ 499.00</span>
              </p>
              <ul class="pricing-offers">
                <li>Custom designed Homepage (1x concepts)</li>
                <li>5 Custom designed Inner pages</li>
                <li>Upto 100 Products</li>
                <li>Upto 7 Categories</li>
                <li>Content Management System</li>
                <li>Sales & Inventory Management</li>
                <li>
                  Cross platform (Desktop, iPhone, Android, etc) responsive
                  compatibility
                </li>
                <li>
                  Cross browser (Chrome, Firefox, Safari, etc) compatibility
                </li>
                <li> W3C Certified HTML </li> <li>Google Friendly Sitemap</li>
                <li>Complete Deployment</li>
                <li>30 Days Free Maintenance (Post-launch support)</li>
                <li>
                  Industry Specified Team of Expert Designers and Developers
                </li>
                <li>Dedicated Account Manager</li>
                <li> 24/7 Customer Support</li>
                <li> Unlimited Revisions</li>
                <li> 100% Satisfaction Guarantee</li>
                <li> 100% Unique Design Guarantee</li>
                <li> 100% Money Back Guarantee *</li>
                <li> 100% Ownership Rights</li>
                <li>
                  Complete Brand Identity <strong>($199)</strong>
                </li>
                <li>
                  Live Chat/Bot Chat Integration
                  <strong>($249)</strong>
                </li>
              </ul>
              {/* <a href="#" class="btn btn-primary btn-mid">
                Buy Now
              </a> */}
            </div>
          </div>
          <div class="col-md-4">
            <div class="price-card ">
              <h2>Shopify Professional Packages</h2>
              <p>
                Suitable for newly formed organizations or small incubated
                startups
              </p>
              <p class="price">
                <span>$ 999.00</span>
              </p>
              <ul class="pricing-offers">
                <li>Custom designed Homepage (1x concepts)</li>
                <li> 5 Custom designed Inner pages</li>
                <li> Upto 100 Products</li>
                <li>Upto 7 Categories</li>
                <li> Content Management System</li>
                <li> Sales & Inventory Management</li>
                <li> Mini Shopping Cart Integration</li>
                <li> Payment Gateway Integration</li>
                <li> Social Media Integration (Facebook, Twitter, LinkedIn)</li>
                <li> Easy Product Search</li>
                <li> 5 Premium Stock Photos</li>
                <li> 2 Promotional Banners</li>
                <li> Interactive jQuery Slider</li>
                <li>
                  Cross platform (Desktop, iPhone, Android, etc) responsive
                  compatibility
                </li>
                <li>
                  Cross browser (Chrome, Firefox, Safari, etc) compatibility
                </li>
                <li> W3C Certified HTML</li>
                <li>Google Friendly Sitemap</li>
                <li> Complete Deployment</li>
                <li> 30 Days Free Maintenance (Post-launch support)</li>
                <li>
                  Industry Specified Team of Expert Designers and Developers
                </li>
                <li>Dedicated Account Manager</li>
                <li> 24/7 Customer Support</li>
                <li> Unlimited Revisions</li>
                <li>
                  100% Satisfaction Guarantee 100% Unique Design Guarantee 100%
                  Money Back Guarantee * 100% Ownership Rights Complete Brand
                  Identity ($199) Live Chat/Bot Chat Integration ($249)
                </li>
              </ul>
              {/* <a href="#" class="btn btn-primary btn-mid">
                Buy Now
              </a> */}
            </div>
          </div>
          <div class="col-md-4">
            <div class="price-card ">
              <h2>Shopify Business Packages</h2>
              <p>
                Suitable for newly formed organizations or small incubated
                startups
              </p>
              <p class="price">
                <span>2699.00</span>
              </p>
              <ul class="pricing-offers">
                <li>Custom designed Homepage (1x concepts)</li>
                <li> 5 Custom designed Inner pages</li>
                <li> Upto 100 Products </li>
                <li>Upto 7 Categories</li>
                <li> Content Management System</li>
                <li> Sales & Inventory Management </li>
                <li>Mini Shopping Cart Integration</li>
                <li> Payment Gateway Integration</li>
                <li> Social Media Integration (Facebook, Twitter, LinkedIn)</li>
                <li> Easy Product Search</li>
                <li>5 Premium Stock Photos</li>
                <li>2 Promotional Banners</li>
                <li> Interactive jQuery Slider</li>
                <li>
                  Cross platform (Desktop, iPhone, Android, etc) responsive
                  compatibility
                </li>
                <li>
                  Cross browser (Chrome, Firefox, Safari, etc) compatibility
                </li>
                <li>W3C Certified HTML</li>
                <li>Google Friendly Sitemap </li>
                <li>Complete Deploy</li>
                <li>30 Days Free Maintenance (Post-launch support)</li>
                <li>
                  Industry Specified Team of Expert Designers and Developers
                </li>
                <li>Dedicated Account Manager</li>
                <li> 24/7 Customer Support</li>
                <li> Unlimited Revisions</li>
                <li>100% Satisfaction Guarantee </li>
                <li>100% Unique Design Guarantee</li>
                <li> 100% Money Back Guarantee *</li>
                <li> 100% Ownership Rights</li>
                <li>
                  Complete Brand Identity <b>($199)</b>
                </li>
                <li>
                  Live Chat/Bot Chat Integration <b>($249)</b>
                </li>
              </ul>
              {/* <a href="#" class="btn btn-primary btn-mid">
                Buy Now
              </a> */}
            </div>
          </div>
          <div class="col-md-4">
            <div class="price-card ">
              <h2>DFY Shopify Packages</h2>
              <p>
                Suitable for newly formed organizations or small incubated
                startups
              </p>
              <p class="price">
                <span>3999.00</span>
              </p>
              <ul class="pricing-offers">
                <li>Custom designed Homepage (1x concepts)</li>
                <li> 5 Custom designed Inner pages</li>
                <li> Upto 100 Products </li>
                <li>Upto 7 Categories</li>
                <li> Content Management System</li>
                <li> Sales & Inventory Management </li>
                <li>Mini Shopping Cart Integration</li>
                <li> Payment Gateway Integration</li>
                <li> Social Media Integration (Facebook, Twitter, LinkedIn)</li>
                <li> Easy Product Search</li>
                <li>5 Premium Stock Photos</li>
                <li>2 Promotional Banners</li>
                <li> Interactive jQuery Slider</li>
                <li>
                  Cross platform (Desktop, iPhone, Android, etc) responsive
                  compatibility
                </li>
                <li>
                  Cross browser (Chrome, Firefox, Safari, etc) compatibility
                </li>
                <li>W3C Certified HTML</li>
                <li>Google Friendly Sitemap </li>
                <li>Complete Deploy</li>
                <li>30 Days Free Maintenance (Post-launch support)</li>
                <li>
                  Industry Specified Team of Expert Designers and Developers
                </li>
                <li>Dedicated Account Manager</li>
                <li> 24/7 Customer Support</li>
                <li> Unlimited Revisions</li>
                <li>100% Satisfaction Guarantee </li>
                <li>100% Unique Design Guarantee</li>
                <li> 100% Money Back Guarantee *</li>
                <li> 100% Ownership Rights</li>
                <li>
                  Complete Brand Identity <b>($199)</b>
                </li>
                <li>
                  Live Chat/Bot Chat Integration <b>($249)</b>
                </li>
              </ul>
              {/* <a href="#" class="btn btn-primary btn-mid">
                Buy Now
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
