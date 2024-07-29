import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
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
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
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
                    <Link class="dropdown-item" to={"/shopify"}>
                      Shopify Development
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to={"/seo"}>
                      Seo
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to={"/websitedevelopment"}>
                      Website Development
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to={"/mobile-app"}>
                      Mobile App Development
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to={"/smm"}>
                      Social Media Marketing
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/showcase">
                  Showcase
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/testimonials">
                  Testimonials
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>

            <button type="button" class="btn btn-primary">
              <a className="tel" href="tel: 03322082393">
                +92 332 2082 393
              </a>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
