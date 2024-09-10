import React, { useEffect } from "react";
import "../css/landing.css";
import { IoMdArrowRoundForward } from "react-icons/io";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import ser1 from "../assets/bg1.png";
import ser2 from "../assets/bg2.png";
import ser3 from "../assets/bg3.png";
import ser4 from "../assets/bg4.png";
import ser5 from "../assets/bg5.png";
import ser6 from "../assets/Overlay-1.png";
import ser7 from "../assets/Overlay-2.png";
import ser8 from "../assets/Overlay-3.png";
import ser9 from "../assets/Overlay.png";
import testpic from "../assets/testi.png";
import ban from "../assets/landing_hero.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import log from "../assets/seec.png";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

import "aos/dist/aos.css";
import Aos from "aos";
import { Helmet } from "react-helmet";

function Landing() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);
  return (
    <>
      <Helmet>
        <title>Custom Web Development Services | Tee Cube Solutions Ltd</title>
        <meta
          name="description"
          content="Unlock the full potential of your business with Tee Cube Solutions Ltd's custom web development services. We create responsive, SEO-friendly websites tailored to your unique needs. Transform your online presence today!"
        />
        <link
          rel="canonical"
          href="https://teecubesolutionsltd.com/custom-web-development"
        />
      </Helmet>
      <div className="heroban">
        <div className="herotxt">
          <h2>Making Your Digital Dream a Reality!</h2>
          <p className="hdes">
            We’re here to bring your ideas to life with our app and web design
            and development services. Whether you need a new website or an app,
            we’re ready to help you create something special.
          </p>
          <button>Get a Quote</button>
        </div>
        <div className="heroimg">
          <img className="serimg" src={ban} />
        </div>
      </div>

      <div className="header">
        <nav className="container navbar navbar-expand-lg navbar-dark bg-dark px-4">
          <div class=" im container-fluid">
            <Link class="navbar-brand lg" to="/">
              <img src="/tcubelogo.png" alt="" width="200px" height="70px" />
            </Link>

            <div className="landbtn">
              <button
                type="button"
                class="btn btn-primary rounded-pill navbtn py-2 px-4"
              >
                <Link className="tel" to="tel: 7277774610)">
                  <FontAwesomeIcon icon="fa-solid fa-phone" />
                  (727) 777 4610
                </Link>
              </button>
            </div>
          </div>
        </nav>
      </div>

      <div className="ms">
        <img className="clilogo" src={log} />
      </div>

      <div className="service">
        <h4 className="serheading">Our services</h4>

        <div className="ser">
          <div className="service1" data-aos="fade-left">
            <img className="serimg" src={ser6} />
            <p className="serviceheading">Custom App Development</p>
            <p className="servicetxt">
              We create apps that are easy to use and full of the features you
              need. Whether you need an app for Android, iOS, or both, we make
              sure it meets your business needs.
            </p>
            <FiArrowUpRight />
          </div>
          <div className="service1" data-aos="fade-left">
            <img className="serimg" src={ser7} />
            <p className="serviceheading">Web Design and Development</p>
            <p className="servicetxt">
              We design websites that look great and work smoothly. Your website
              will be built to impress visitors and keep them coming back.
            </p>
            <FiArrowUpRight />
          </div>
          <div className="service1" data-aos="fade-right">
            <img className="serimg" src={ser8} />
            <p className="serviceheading">E-commerce Solutions</p>
            <p className="servicetxt">
              We build online stores that are secure and simple to manage. With
              our help, selling your products online becomes straightforward and
              effective.
            </p>
            <FiArrowUpRight />
          </div>
          <div className="service1" data-aos="fade-right">
            <img className="serimg" src={ser9} />
            <p className="serviceheading">Maintenance and Support</p>
            <p className="servicetxt">
              After your app or website is live, we’re here to keep everything
              running smoothly. Our team is always ready to assist with updates,
              fixes, and improvements.
            </p>
            <FiArrowUpRight />
          </div>
        </div>
      </div>

      <div className="tservice">
        <h4 className="serheading">Our Process</h4>

        <div className="ser">
          <div className="servicebox" data-aos="fade-right">
            <p className="serviceheading">Consultation</p>
            <p className="servicetxt">
              We begin by getting to know your business goals, target audience,
              and specific needs. This helps us create a solution that fits
              perfectly.
            </p>
            <img className="serimg" src={ser1} />
          </div>
          <div className="servicebox" data-aos="fade-right">
            <p className="serviceheading">Design</p>
            <p className="servicetxt">
              Our creative team designs a prototype, focusing on how it looks
              and feels for the user. We make sure the design reflects your
              vision.
            </p>
            <img className="serimg" src={ser2} />
          </div>
          <div className="servicebox" data-aos="fade-left">
            <p className="serviceheading">Development</p>
            <p className="servicetxt">
              Once the design is approved, we move on to building your app or
              website. We ensure everything works smoothly and efficiently.
            </p>
            <img className="serimg" src={ser3} />
          </div>
          <div className="servicebox" data-aos="fade-left">
            <p className="serviceheading">Launch & Support</p>
            <p className="servicetxt">
              After testing and fine-tuning, we launch your project. We also
              provide ongoing support to keep everything running as it should.
            </p>
            <img className="serimg" src={ser4} />
          </div>
        </div>
      </div>

      {/* <div className="ourservice">
        <p className="sersubheading">Our services</p>
        <h4 className="serheading">Awesome Features</h4>
        <p className="servicedes">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi obortis
          ligula euismod sededesty am augue nisl
        </p>
        <div className="ser">
          <div className="servicebox">
            <p className="serviceheading">Lorem ipsum dolor</p>
            <p className="servicetxt">
              Lorem ipsum dolor sit amet consectetur. Ultrices aenean sagittis
              sed neque tristique ipsum duis eu a.
            </p>
            <FiArrowUpRight />
          </div>
          <div className="servicebox">
            <p className="serviceheading">Lorem ipsum dolor</p>
            <p className="servicetxt">
              Lorem ipsum dolor sit amet consectetur. Ultrices aenean sagittis
              sed neque tristique ipsum duis eu a.
            </p>
            <FiArrowUpRight />
          </div>
          <div className="servicebox">
            <p className="serviceheading">Lorem ipsum dolor</p>
            <p className="servicetxt">
              Lorem ipsum dolor sit amet consectetur. Ultrices aenean sagittis
              sed neque tristique ipsum duis eu a.
            </p>
            <FiArrowUpRight />
          </div>
          <div className="servicebox">
            <p className="serviceheading">Lorem ipsum dolor</p>
            <p className="servicetxt">
              Lorem ipsum dolor sit amet consectetur. Ultrices aenean sagittis
              sed neque tristique ipsum duis eu a.
            </p>
            <FiArrowUpRight />
          </div>
        </div>
      </div> */}

      <div className="testbanner">
        <p className="tsubh">Testimonials</p>
        <h4 className="thead">People talk about us</h4>
        <img src={testpic} alt="..." />
        {/* <p className="tsubj">“Elit penatibus curae aucto”</p> */}
        <p className="tcontent">
          TeeCube Solutions turned my idea into a beautiful app. Their team was
          easy to work with and delivered exactly what I wanted. Would highly
          recommend!
        </p>
        <p className="tname">Andrew Smith</p>
      </div>

      <div className="service">
        <p className="sersubheading">FAQs</p>
        <h4 className="serheading">Frequently Asked Question</h4>

        <div className="aproch faq1">
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
                    What services do you offer?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    We offer design and development services for apps and
                    websites, as well as maintenance and support.
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
                    How long does it take to build a website or app?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    The timeline depends on the project’s complexity, but we
                    always aim to deliver on time.
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
                    Do you offer ongoing support after the launch?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Yes, we provide maintenance and support to keep your app or
                    website running smoothly.
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
                    Can you help with redesigning an existing website or app?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Absolutely! We can redesign your site or app to make it look
                    fresh and work better.
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
                    What industries do you work with?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    We work with a variety of industries, from retail to
                    healthcare and beyond.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call To Action */}

      <div className="ctaa">
        <h3>Ready To Get Started? </h3>
        <p>
          Ready to start your project? Get in touch with TeeCube Solutions
          today. We’ve helped many companies create websites and apps that drive
          success. Let’s work together to bring your ideas to life! So what are
          you waiting for?
        </p>
      </div>

      {/* Call To Action */}

      <div className="footcontact">
        <div className="footlogo">T CUBE</div>
        <div className="fcontact">
          <div className="ficon">
            <div className="fii">
              <FaPhoneAlt />
            </div>
          </div>
          <div className="fcd">
            <div className="ftxt">Phone Number</div>
            <div className="fp">(727) 777 4160</div>
          </div>
        </div>
        <div className="fcontact">
          <div className="ficon">
            <div className="fii">
              <MdEmail />
            </div>
          </div>
          <div className="fcd">
            <div className="ftxt">Email Us Here</div>
            <div className="fp">info@tcube.com</div>
          </div>
        </div>
        <div className="fcontact">
          <div className="ficon">
            <div className="fii">
              <FaMapMarkerAlt />
            </div>
          </div>
          <div className="fcd">
            <div className="ftxt">Office Address</div>
            <div className="fp">251 Hilton, Berlin DE</div>
          </div>
        </div>
      </div>
      <div className="lfooter">
        <div className="footer">
          <div className="lfoot">
            <h4>About Company</h4>
            <hr />
            <p>
              At TeeCube Solutions Ltd, we provide innovative software designed
              to drive your business forward. Our team of experts crafts
              customized solutions that enhance efficiency and performance.
            </p>
          </div>
          <div className="lfoot">
            <h4>Quick Links</h4>
            <hr />
            <li>
              <IoMdArrowRoundForward />
              &nbsp;
              <Link className="link" to="/">
                About
              </Link>
            </li>
            <li>
              <IoMdArrowRoundForward />
              &nbsp;
              <Link className="link" to="/">
                Meet Our Team
              </Link>
            </li>
            <li>
              <IoMdArrowRoundForward />
              &nbsp;
              <Link className="link" to="/">
                News & Media
              </Link>
            </li>
            <li>
              <IoMdArrowRoundForward />
              &nbsp;
              <Link className="link" to="/">
                Our Projects
              </Link>
            </li>
            <li>
              <IoMdArrowRoundForward />
              &nbsp;
              <Link className="link" to="/">
                Contact Us
              </Link>
            </li>
          </div>
          {/* <div className="lfoot">
            <h4>About Company</h4>
            <hr />
            <li>
              <IoMdArrowRoundForward />
              &nbsp;
              <Link className="link" to="/">
                About
              </Link>
            </li>
            <li>
              <IoMdArrowRoundForward />
              &nbsp;
              <Link className="link" to="/">
                Meet Our Team
              </Link>
            </li>
            <li>
              <IoMdArrowRoundForward />
              &nbsp;
              <Link className="link" to="/">
                News & Media
              </Link>
            </li>
            <li>
              <IoMdArrowRoundForward />
              &nbsp;
              <Link className="link" to="/">
                Our Projects
              </Link>
            </li>
            <li>
              <IoMdArrowRoundForward />
              &nbsp;
              <Link className="link" to="/">
                Contact Us
              </Link>
            </li>
          </div> */}
          <div className="lfoot">
            <h4>Get in Touch</h4>
            <hr />
            <p>11150 N. Williams St Dunnellon, FL 34432</p>
            <p>36 Grenada Crescent, M1B 2H5, Toronto, Canada</p>
            <p>
              <Link className="Link" to="mailto:info@teecubesolutionsltd.com">
                info@teecubesolutionsltd.com
              </Link>
            </p>
            <p>
              <Link className="Link" to="tel:7277774610">
                (727) 777-4610 - US
              </Link>
            </p>
            <p>
              <Link className="Link" to="tel: 4374193255">
                (437) 419-3255 - CA
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
