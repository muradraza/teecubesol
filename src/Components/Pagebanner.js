import React from "react";

function Pagebanner(props) {
  return (
    <div className="pagebanner">
      <h1 className="bannertitle">{props.name}</h1>
    </div>
  );
}

export default Pagebanner;
