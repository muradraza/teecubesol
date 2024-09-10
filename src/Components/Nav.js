import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <div className="cont">
        <nav className="container navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <Link class="navbar-brand" to="/">
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
                    {/* <li>
                      <Link
                        class="dropdown-item p-3"
                        to={"/custom-web-development"}
                      >
                        Custom Website Development
                      </Link>
                    </li> */}
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
    </>
  );
}

export default Nav;
