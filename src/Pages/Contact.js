import React from "react";
import Pagebanner from "../Components/Pagebanner";
import Contactsec from "../Components/Contactsec";
import { Helmet } from "react-helmet";

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
        <link rel="canonical" href="/contact" />
      </Helmet>
      <Pagebanner name={"Contact Us"} />
      <Contactsec />
    </>
  );
}

export default Contact;
