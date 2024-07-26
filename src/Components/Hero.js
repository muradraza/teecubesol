import React from "react";
import { Link } from "react-router-dom";

function hero() {
  return (
    <>
      <div class="hero ">
        <h3 className="herotitle">
          Empowering <span style={{ color: "#0D6EFD" }}>Digital</span> Solutions
        </h3>
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
