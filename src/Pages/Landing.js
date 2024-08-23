import React from "react";
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
import ban from "../assets/Section (2).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import log from "../assets/seec.png";

function Landing() {
  return (
    <>
      <div className="heroban">
        <div className="herotxt">
          <p className="shead">Lorem ipsum dolor sit</p>
          <h2>Lorem ipsum dolor sit amet consectetur.</h2>
          <p className="hdes">
            Lorem ipsum dolor sit amet consectetur. Sit venenatis aliquet
            volutpat in adipiscing sodales montes. Lectus arcu non cras vitae
            congue vel felis orci.
          </p>
          <button>Get a Quote</button>
        </div>
        <div className="heroimg">
          <img className="serimg" src={ban} />
        </div>
      </div>

      <div className="header">
        <nav className="container navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <Link class="navbar-brand lg" to="/">
              <img src="/tcubelogo.png" alt="" width="200px" height="70px" />
            </Link>

            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" to="/about">
                    About
                  </Link>
                </li>
                <li class="nav-item dropdown">
                  <Link
                    class="nav-link dropdown-toggle active"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </Link>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <Link class="dropdown-item p-3" to={"/shopify"}>
                        Shopify Development
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item p-3" to={"/seo"}>
                        Seo
                      </Link>
                    </li>
                    <li>
                      <Link
                        class="dropdown-item p-3"
                        to={"/websitedevelopment"}
                      >
                        Website Development
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item p-3" to={"/mobile-app"}>
                        Mobile App Development
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item p-3" to={"/smm"}>
                        Social Media Marketing
                      </Link>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" to="/showcase">
                    Showcase
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" to="/testimonials">
                    Testimonials
                  </Link>
                </li>

                <li class="nav-item ">
                  <Link class="nav-link active" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>

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
        <div className="service">
          <p className="sersubheading">Our services</p>
          <h4 className="serheading">Awesome Features</h4>
          <p className="servicedes">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="ser">
            <div className="service1">
              <img className="serimg" src={ser6} />
              <p className="serviceheading">Lorem ipsum dolor</p>
              <p className="servicetxt">
                Lorem ipsum dolor sit amet consectetur. Ut vitae accumsan
                consequat sit.
              </p>
              <FiArrowUpRight />
            </div>
            <div className="service1">
              <img className="serimg" src={ser7} />
              <p className="serviceheading">Lorem ipsum dolor</p>
              <p className="servicetxt">
                Lorem ipsum dolor sit amet consectetur. Ut vitae accumsan
                consequat sit.
              </p>
              <FiArrowUpRight />
            </div>
            <div className="service1">
              <img className="serimg" src={ser8} />
              <p className="serviceheading">Lorem ipsum dolor</p>
              <p className="servicetxt">
                Lorem ipsum dolor sit amet consectetur. Ut vitae accumsan
                consequat sit.
              </p>
              <FiArrowUpRight />
            </div>
            <div className="service1">
              <img className="serimg" src={ser9} />
              <p className="serviceheading">Lorem ipsum dolor</p>
              <p className="servicetxt">
                Lorem ipsum dolor sit amet consectetur. Ut vitae accumsan
                consequat sit.
              </p>
              <FiArrowUpRight />
            </div>
          </div>
        </div>
      </div>

      <div className="tservice">
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
              Learn More <FiArrowUpRight />
            </p>
            <img className="serimg" src={ser1} />
          </div>
          <div className="servicebox">
            <p className="serviceheading">Lorem ipsum dolor</p>
            <p className="servicetxt">
              Learn More
              <FiArrowUpRight />
            </p>
            <img className="serimg" src={ser2} />
          </div>
          <div className="servicebox">
            <p className="serviceheading">Lorem ipsum dolor</p>
            <p className="servicetxt">
              Learn More
              <FiArrowUpRight />
            </p>
            <img className="serimg" src={ser3} />
          </div>
          <div className="servicebox">
            <p className="serviceheading">Lorem ipsum dolor</p>
            <p className="servicetxt">
              Learn More
              <FiArrowUpRight />
            </p>
            <img className="serimg" src={ser4} />
          </div>
        </div>
      </div>

      <div className="ourservice">
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
      </div>

      <div className="testbanner">
        <p className="tsubh">Testimonials</p>
        <h4 className="thead">People talk about us</h4>
        <img src={testpic} alt="..." />
        <p className="tsubj">“Elit penatibus curae aucto”</p>
        <p className="tcontent">
          Sem a penatibus varius dui nostra vehicula gravida congue, potenti
          etiam erat justo faucibus fusce quis nulla eu, dignissim eget posuere
          blandit curabitur porta inceptos. Inceptos faucibus fringilla pharetra
          mi suscipit curabitu
        </p>
        <p className="tname">Andrew Smith</p>
      </div>

      <div className="service">
        <p className="sersubheading">Our services</p>
        <h4 className="serheading">Awesome Features</h4>
        <p className="servicedes">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi obortis
          ligula euismod sededesty am augue nisl
        </p>
        <div className="ser">
          <div className="servicebox">
            <img className="serimg" src={ser1} />
            <p className="serviceheading">Lorem ipsum dolor</p>
            <p className="servicetxt">
              Lorem ipsum dolor sit amet consectetur. Ut vitae accumsan
              consequat sit. Adipiscing mollis sed eu enim. Massa neque sit
              consequat nascetur tortor.
            </p>
          </div>
          <div className="servicebox">
            <img className="serimg" src={ser2} />
            <p className="serviceheading">Lorem ipsum dolor</p>
            <p className="servicetxt">
              Lorem ipsum dolor sit amet consectetur. Ut vitae accumsan
              consequat sit. Adipiscing mollis sed eu enim. Massa neque sit
              consequat nascetur tortor.
            </p>
          </div>
          <div className="servicebox">
            <img className="serimg" src={ser3} />
            <p className="serviceheading">Lorem ipsum dolor</p>
            <p className="servicetxt">
              Lorem ipsum dolor sit amet consectetur. Ut vitae accumsan
              consequat sit. Adipiscing mollis sed eu enim. Massa neque sit
              consequat nascetur tortor.
            </p>
          </div>
          <div className="servicebox">
            <img className="serimg" src={ser4} />
            <p className="serviceheading">Lorem ipsum dolor</p>
            <p className="servicetxt">
              Lorem ipsum dolor sit amet consectetur. Ut vitae accumsan
              consequat sit. Adipiscing mollis sed eu enim. Massa neque sit
              consequat nascetur tortor.
            </p>
          </div>
          <div className="servicebox">
            <img className="serimg" src={ser5} />
            <p className="serviceheading">Lorem ipsum dolor</p>
            <p className="servicetxt">
              Lorem ipsum dolor sit amet consectetur. Ut vitae accumsan
              consequat sit. Adipiscing mollis sed eu enim. Massa neque sit
              consequat nascetur tortor.
            </p>
          </div>
        </div>
      </div>

      {/* Call To Action */}

      <div className="cta">
        <h3>Lorem ipsum dolor sit</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Ullamcorper risus quam quam
          elementum non hac vulputate in. Sit netus non neque nulla quis.
          Lobortis at gravida commodo id. Ullamcorper sed cras eleifend egestas
          aliquet. Quis fermentum eu adipiscing maecenas aliquet gravida. Non
          egestas neque egestas proin nisl feugiat. Dignissim ac ultrices varius
          malesuada fringilla at nunc ullamcorper. Tortor curabitur odio
          praesent in in felis. Posuere nullam diam morbi ut dictumst.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>

      {/* Call To Action */}

      <div className="footcontact">
        <div className="footlogo">T CUBE</div>
        <div className="fcontact">
          <div className="ficon">
            <div className="fi">
              <FaPhoneAlt />
            </div>
          </div>
          <div className="fcd">
            <div className="ftxt">Phone Number</div>
            <div className="fp">000</div>
          </div>
        </div>
        <div className="fcontact">
          <div className="ficon">
            <div className="fi">
              <FaPhoneAlt />
            </div>
          </div>
          <div className="fcd">
            <div className="ftxt">Phone Number</div>
            <div className="fp">000</div>
          </div>
        </div>
        <div className="fcontact">
          <div className="ficon">
            <div className="fi">
              <FaPhoneAlt />
            </div>
          </div>
          <div className="fcd">
            <div className="ftxt">Phone Number</div>
            <div className="fp">000</div>
          </div>
        </div>
      </div>
      <div className="lfooter">
        <div className="footer">
          <div className="lfoot">
            <h4>About Company</h4>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur. Quis eros nibh maecenas
              habitasse ultricies semper a.
            </p>
          </div>
          <div className="lfoot">
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
          </div>
          <div className="lfoot">
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
          </div>
          <div className="lfoot">
            <h4>About Company</h4>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur. Quis eros nibh maecenas
              habitasse ultricies semper a.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
