import React from "react";
import Pagebanner from "../Components/Pagebanner";
import { Link } from "react-router-dom";
import img1 from "../assets/1.png";

function Blog() {
  return (
    <>
      <Pagebanner name={"Blogs"} />

      <div style={{ padding: "50px" }}>
        <div class="card" style={{ width: "18rem" }}>
          <img
            src={img1}
            alt="..."
            className="card-img-top"
            // style={{
            //   margin: "2% 10% 2% 10%",
            //   borderRadius: "8px",
            //   boxShadow: "2px 2px 15px grey",
            //   width: "80%",
            // }}
          />

          <div class="card-body">
            <h5 class="card-title">How Much Does It Cost...</h5>
            <p class="card-text">
              Have you ever wondered how mobile apps have become an integral
              part of our daily lives?...
            </p>
            <Link
              to="/blogs/cost_to_build_a_custom_mobile_app"
              class="btn btn-primary"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
