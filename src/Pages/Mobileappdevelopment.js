import React from "react";
import "../css/mad.css";
import "../js/carosal.js";

function Mobileappdevelopment() {
  return (
    <>
      {/* Hero Sec */}
      <div className="headban">
        <p className="shead">Welcome to App Studio</p>
        <h3>
          We Creating
          <span>
            <img src="/Groupbtn.png" />
          </span>
          Stunning
        </h3>
        <p className="hbtn">Mobile Application</p>
        <p>
          Appstudio Inc is world leader in the design and development of mobile
          applications. For business owners and gamers, Appstudio Inc produces
          extensive applications.
        </p>
      </div>
      {/* Hero Sec */}

      {/* Video */}
      <div className="videosec">
        <video width="1360" height="500" loop autoPlay controls>
          <source src="/animation.mp4" type="video/mp4" />
        </video>
      </div>
      {/* Video */}

      {/* Why Choose */}
      <div className="technology">
        <div className="technologyimg">
          <div className="technologyimg1">
            <p
              style={{
                color: "#4cd3f7",
              }}
            >
              Why Choose
            </p>
            <h4>Appstudio Inc Over Other Brands?</h4>
            <p style={{ color: "white" }}>
              We assist clients in preventing budget overheads and creating
              streamlined mobile applications. Contact our specialists right now
              if you want to create a top-notch mobile app to make money or an
              app to ease life.
            </p>
            <p style={{ color: "white" }}>
              Making a Difference Through Strategic Technology Partnerships
            </p>
            <img src="/whyy.png" />
          </div>
          <div className="technologyimg1">
            <video width="500" height="500" loop autoPlay controls>
              <source src="/animation.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      {/* Why Choose */}

      <div>
        <h3>Reputed as Industry Leaders in Custom App Development</h3>
        <p>
          As the preferred platform for developing{" "}
          <span style={{ fontWeight: "bold" }}>bespoke software</span>,
          Appstudio Inc is a well-known and respected software company that has
          earned the{" "}
          <span style={{ fontWeight: "bold" }}>trust of leaders</span> in the
          international IT sector. Our sustainable software solutions increase
          our sales.
        </p>
      </div>

      <div className="casestudy">
        <p
          style={{
            color: "#4cd3f7",
          }}
        >
          View Our Case Studies
        </p>
        <h4>We Transform Your Idea from a Product Into a Digital Reality </h4>
        <p style={{ color: "white" }}>
          By creating enterprise grade mobile and online applications, we
          contribute to the development of top-tier iOS and Android solutions.
        </p>
        <div className="casestudyimg">
          <div className="proimg1">
            <img src="/Rectangle33.png" alt="..." />
          </div>
          <div className="proimg1">
            <img src="/Rectangle34copy.png" alt="..." />
          </div>
        </div>
      </div>
      <div className="ourproduct">
        <p>OUR PRODUCTS</p>
        <h4>We Offer wide range of Solutions</h4>
        <div className="proimg">
          <div className="proimg1">
            <img src="/product1.png" alt="..." />
          </div>
          <div className="proimg1">
            <img src="/product3.png" alt="..." />
          </div>
        </div>
      </div>
      <div className="foothead">
        <p className="footheading">APP STUDIO</p>
      </div>
    </>
  );
}

export default Mobileappdevelopment;
