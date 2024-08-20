import React from "react";
import { Link } from "react-router-dom";

function footer() {
  return (
    <>
      <div>
        <Link to={"https://wa.me/+923162142400"}>
          <img
            src="/whatsapp.png"
            alt="whatsapp"
            style={{
              width: "px",
              height: "50px",
              position: "fixed",
              bottom: "20px",
              left: "10px",
            }}
          />
        </Link>
      </div>

      <div class="bd-highlight bg-dark text-white foot">
        <div className="foosec">
          <div className="p-2 bd-highlight footlogo foo">
            <Link class="navbar-brand" to="/">
              <img src="/tcubelogo.png" alt="" width="100%" />
            </Link>
          </div>
          <div className="footlink foo">
            <p className="footh">Get in Touch</p>
            <ul>
              <li>
                <i class="bi bi-geo-alt-fill" />
                &nbsp;&nbsp;11150 N. Williams St Dunnellon, FL 34432
              </li>
              <li>
                <i class="bi bi-geo-alt-fill" />
                &nbsp;&nbsp;36 Grenada Crescent, M1B 2H5, Toronto, Canada
              </li>
              <li>
                <i class="bi bi-envelope-at" /> &nbsp;&nbsp;
                <Link to={"mailto:info@teecubesolutionsltd.com"}>
                  info@teecubesolutionsltd.com
                </Link>
              </li>
              <li>
                <i class="bi bi-telephone" />
                &nbsp;&nbsp;
                <Link to={"tel: (727) 777-4610"}>(727) 777-4610 - US</Link>
              </li>

              <li>
                <i class="bi bi-telephone" />
                &nbsp;&nbsp;
                <Link to={"tel: (437) 419-3255"}>(437) 419-3255 - CA</Link>
              </li>
            </ul>
          </div>

          <div className="footlink foo">
            <p className="footh"> Learn More</p>
            <ul>
              <li>
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link class="nav-link" to="/showcase">
                  Showcase
                </Link>
              </li>
              <li>
                <Link class="nav-link" to="/testimonials">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link class="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link class="nav-link" to="/blogs">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          <div className="footlink foo">
            <p className="footh">Our Newsletter</p>
            <p>
              Subscribe to our newsletter to get our news & deals delivered to
              you.
            </p>

            <form class="row row-cols-lg-auto g-3 align-items-center">
              <div class="col-12">
                <label
                  class="visually-hidden"
                  for="inlineFormInputGroupUsername"
                >
                  Email
                </label>
                <div class="input-group">
                  <input
                    type="email"
                    class="form-control"
                    id="inlineFormInputGroupUsername"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>

              <div class="col-12">
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default footer;
