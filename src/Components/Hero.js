import React from "react";
import { Link } from "react-router-dom";
import "../js/heero.js";
import "../css/hero.css";

function hero() {
  return (
    <>
      <div class="hero ">
        <p className="herop">Welcome to</p>
        <h3 className="herotitle">
          Digital <span style={{ color: "#0D6EFD" }}>Design</span> Agency
        </h3>
        <h4 className="herotitle">
          <Link
            to=""
            class="typewrite"
            data-period="2000"
            data-type='[ "For Website Development", "For Digital Marketing", "Shopify Dropshipping Solutions" ]'
          >
            <span class="wrap"></span>
          </Link>
        </h4>

        <p className="herotxt">
          At TeeCube Solutions Ltd, we provide innovative software designed to
          drive your business forward. Our team of experts crafts customized
          solutions that enhance efficiency and performance. Let us empower your
          digital transformation with cutting-edge technology and strategic
          insights.
        </p>
        <div className="hbtn">
          <button type="button" class="btn bg-primary rounded-pill">
            <Link className="hlink" to="/contact">
              Get In Touch
            </Link>
          </button>
          <button type="button" class="btn bg-primary rounded-pill">
            <Link className="hlink" to="/about">
              What We Do
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default hero;
