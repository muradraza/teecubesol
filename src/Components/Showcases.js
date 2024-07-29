import React, { useEffect } from "react";
import "../css/showcase.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Showcases() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);
  return (
    <>
      <div className="project">
        <div className="proimg" data-aos="fade-right">
          <img src="/show1.png" alt="..." />
        </div>
        <div className="protxt" data-aos="fade-left">
          <p className="show_subtitle">
            ELEVATING THE TRAVEL AND HOSPITALITY EXPERIENCE
          </p>
          <p className="show_title">Masterpiece Premium Wines</p>
          <p className="show_des">
            Just as their wines are among the world’s finest, their brand
            identity needed to be equally exceptional. That’s precisely what we
            delivered—a sophisticated brand identity for a truly classy brand.
          </p>
        </div>
      </div>

      <div className="project2">
        <div className="proimg" data-aos="fade-right">
          <img src="/show2.png" alt="..." />
        </div>
        <div className="protxt" data-aos="fade-left">
          <p className="show_subtitle">WEB UI/UX</p>
          <p className="show_title">Learn Guitar</p>
          <p className="show_des">
            For people who are huge music enthusiasts, learn guitar.com offers
            exclusive guitar facilities. When a brand identity didn’t already
            exist, the product’s producers approached us. Our brand identity
            development specialists created a brand with a fresh, lovely
            identity.
          </p>
        </div>
      </div>
    </>
  );
}

export default Showcases;
