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
import ban from "../assets/Section (2).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import log from "../assets/seec.png";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

import "aos/dist/aos.css";
import Aos from "aos";

function Landing() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);
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
        <nav className="container navbar navbar-expand-lg navbar-dark bg-dark px-4">
          <div class=" im container-fluid">
            <Link class="navbar-brand lg" to="/">
              <img src="/tcubelogo.png" alt="" width="200px" height="70px" />
            </Link>

            <div>
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
            <div className="service1" data-aos="fade-left">
              <img className="serimg" src={ser6} />
              <p className="serviceheading">Lorem ipsum dolor</p>
              <p className="servicetxt">
                Lorem ipsum dolor sit amet consectetur. Ut vitae accumsan
                consequat sit.
              </p>
              <FiArrowUpRight />
            </div>
            <div className="service1" data-aos="fade-left">
              <img className="serimg" src={ser7} />
              <p className="serviceheading">Lorem ipsum dolor</p>
              <p className="servicetxt">
                Lorem ipsum dolor sit amet consectetur. Ut vitae accumsan
                consequat sit.
              </p>
              <FiArrowUpRight />
            </div>
            <div className="service1" data-aos="fade-right">
              <img className="serimg" src={ser8} />
              <p className="serviceheading">Lorem ipsum dolor</p>
              <p className="servicetxt">
                Lorem ipsum dolor sit amet consectetur. Ut vitae accumsan
                consequat sit.
              </p>
              <FiArrowUpRight />
            </div>
            <div className="service1" data-aos="fade-right">
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
          <div className="servicebox" data-aos="zoom-in">
            <p className="serviceheading">Lorem ipsum dolor</p>
            <p className="servicetxt">
              Learn More <FiArrowUpRight />
            </p>
            <img className="serimg" src={ser1} />
          </div>
          <div className="servicebox" data-aos="zoom-in">
            <p className="serviceheading">Lorem ipsum dolor</p>
            <p className="servicetxt">
              Learn More
              <FiArrowUpRight />
            </p>
            <img className="serimg" src={ser2} />
          </div>
          <div className="servicebox" data-aos="zoom-in">
            <p className="serviceheading">Lorem ipsum dolor</p>
            <p className="servicetxt">
              Learn More
              <FiArrowUpRight />
            </p>
            <img className="serimg" src={ser3} />
          </div>
          <div className="servicebox" data-aos="zoom-in">
            <p className="serviceheading">Lorem ipsum dolor</p>
            <p className="servicetxt">
              Learn More
              <FiArrowUpRight />
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
          <div className="servicebox" data-aos="zoom-out">
            <img className="serimg" src={ser1} />
            <p className="serviceheading">Lorem ipsum dolor</p>
            <p className="servicetxt">
              Lorem ipsum dolor sit amet consectetur. Ut vitae accumsan
              consequat sit. Adipiscing mollis sed eu enim. Massa neque sit
              consequat nascetur tortor.
            </p>
          </div>
          <div className="servicebox" data-aos="zoom-out">
            <img className="serimg" src={ser2} />
            <p className="serviceheading">Lorem ipsum dolor</p>
            <p className="servicetxt">
              Lorem ipsum dolor sit amet consectetur. Ut vitae accumsan
              consequat sit. Adipiscing mollis sed eu enim. Massa neque sit
              consequat nascetur tortor.
            </p>
          </div>
          <div className="servicebox" data-aos="zoom-out">
            <img className="serimg" src={ser3} />
            <p className="serviceheading">Lorem ipsum dolor</p>
            <p className="servicetxt">
              Lorem ipsum dolor sit amet consectetur. Ut vitae accumsan
              consequat sit. Adipiscing mollis sed eu enim. Massa neque sit
              consequat nascetur tortor.
            </p>
          </div>
          <div className="servicebox" data-aos="zoom-out">
            <img className="serimg" src={ser4} />
            <p className="serviceheading">Lorem ipsum dolor</p>
            <p className="servicetxt">
              Lorem ipsum dolor sit amet consectetur. Ut vitae accumsan
              consequat sit. Adipiscing mollis sed eu enim. Massa neque sit
              consequat nascetur tortor.
            </p>
          </div>
          <div className="servicebox" data-aos="zoom-out">
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
          aliquet. Quis fermentum eu adipiscing maecenas aliquet gravida.
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
            <div className="fp">(727) 777 4160</div>
          </div>
        </div>
        <div className="fcontact">
          <div className="ficon">
            <div className="fi">
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
            <div className="fi">
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
