import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Servicesgrid() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);
  return (
    <div className="ser">
      <p className="text-center p-0 subtitle">Our Services</p>
      <h3 className="text-center fs-1">What we do</h3>

      <div className="sergrd">
        <div className="services web" id="overlay" data-aos="fade-left">
          <h5>Website Development</h5>
        </div>
        <div className="services market" data-aos="fade-left">
          <h5>Digital Marketing</h5>
        </div>
        <div className="services it" data-aos="fade-right">
          <h5>SEO</h5>
        </div>
        <div className="services text-warp shop" data-aos="fade-right">
          <h5>Shopify Dropshipping Solutions</h5>
        </div>
      </div>
    </div>
  );
}

export default Servicesgrid;
