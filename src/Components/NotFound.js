import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

function NotFound() {
  return (
    <>
      <div
        style={{
          height: "100%",
          display: "flex",
          width: "100%",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
      </div>
    </>
  );
}

export default NotFound;
