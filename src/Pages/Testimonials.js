import React from "react";
import "../css/testimonials.css";
import Pagebanner from "../Components/Pagebanner";
import { Helmet } from "react-helmet";

function Testimonials() {
  return (
    <>
      <Helmet>
        <title>
          TeeCube Solutions Ltd | Client Testimonials & Success Stories
        </title>
        <meta
          name="description"
          content="Read real testimonials from satisfied clients of Tee Cube Solutions Ltd. Discover how our innovative tech solutions have transformed businesses and achieved remarkable results."
        />
        <link
          rel="canonical"
          href="https://teecubesolutionsltd.com/testimonials"
        />
      </Helmet>
      <Pagebanner name={"Testimonials"} />

      <div className="ttestimonial">
        <div className="testi">
          <p className="comit">
            I was a bit hesitant at first but after viewing the logo design for
            the Travel Wagon, I felt like the money I invested was well-spent.
          </p>
          <p className="comittitle">Chase Helmsley</p>
        </div>
        <div className="testi">
          <p className="comit">
            From the start to the very end, I got excellent customer services
            and amazing brand development services. Loved working with T Cube
          </p>
          <p className="comittitle">Casey Reynolds</p>
        </div>
        <div className="testi">
          <p className="comit">
            The team at T Cube were excellent to connect with. I got a beautiful
            logo design from them without any hassle. Would definitely recommend
            working with them
          </p>
          <p className="comittitle">Cynthia Rashford</p>
        </div>
        <div className="testi">
          <p className="comit">
            After I received my logo I needed some minor changes and I felt like
            it would be a problem but as always, the staff at T Cube helped me
            through every step. It was a great experience
          </p>
          <p className="comittitle">Gloria Sylvester </p>
        </div>
        <div className="testi">
          <p className="comit">
            I run a small veterinary clinic for pets and T Cube provided me with
            the perfect makeover that I needed. Shoutout to the support team who
            were always super helpful!
          </p>
          <p className="comittitle">Sebastian Crawford </p>
        </div>
        <div className="testi">
          <p className="comit">
            T Cube’s amazing web design team gave my website a whole new look! I
            am extremely overwhelmed by the services provided.
          </p>
          <p className="comittitle">Brandon Kholer </p>
        </div>
        <div className="testi">
          <p className="comit">
            I got some extra panels added to the website and got it redesigned.
            The services were brilliantly prices and excellently executed.
          </p>
          <p className="comittitle">Stephen Niemann</p>
        </div>
        <div className="testi">
          <p className="comit">
            We got ourselves a beautifully animated video for X Time and the
            work that T Cube put in to it clearly speaks boundaries. Loved the
            experience!
          </p>
          <p className="comittitle">Xavier Mathews </p>
        </div>
        <div className="testi">
          <p className="comit">
            We talked to T Cube regarding web design services for our website
            and how it was affecting our rankings. The team provided us
            responsive web design services and SEO consultation too!
          </p>
          <p className="comittitle">The Colbert Family</p>
        </div>
        <div className="testi">
          <p className="comit">
            I was a bit confused when I got to T Cube but the excellent team
            helped us along the way! We’re more than happy working with them.
          </p>
          <p className="comittitle">Tiara Simpson</p>
        </div>
        <div className="testi">
          <p className="comit">
            AMy website looks far better thanks to the web design and
            development services I just received. Thankyou, Team T Cube
          </p>
          <p className="comittitle">George Gresilva</p>
        </div>
        <div className="testi">
          <p className="comit">
            I needed an excellent animated video for my business and I had a
            script in mind. T Cube’s animation team were very helpful and gave
            me just the perfect video that I wanted
          </p>
          <p className="comittitle">Vanessa Lumbergh</p>
        </div>
        <div className="testi">
          <p className="comit">
            I didn’t expect consultation and script assistance were part of the
            plan and the services the team provided were off the hook! I loved
            working with T Cube
          </p>
          <p className="comittitle">Miranda Newburn</p>
        </div>
        <div className="testi">
          <p className="comit">
            I love the way their team cooperated with us throughout the process
            and helped us get the explainer video that we awesome for our
            business
          </p>
          <p className="comittitle">Team Blinds </p>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
