import React from "react";
import Pagebanner from "../Components/Pagebanner";
import Contactsec from "../Components/Contactsec";
import { Helmet } from "react-helmet";
import Nav from "../Components/Nav";
import Footer from ".././Components/Footer";

function Contact() {
  return (
    <>
      <Helmet>
        <title>
          Contact Tee Cube Solutions Ltd | Get in Touch with Our Team
        </title>
        <meta
          name="description"
          content="Reach out to Tee Cube Solutions Ltd for innovative tech solutions and exceptional customer support. Contact us today to discuss your project needs."
        />
        <link rel="canonical" href="https://teecubesolutionsltd.com/contact" />
      </Helmet>

      <Nav />

      <Pagebanner name={"Contact Us"} />
      <Contactsec />
      <Footer />
    </>
  );
}

export default Contact;
