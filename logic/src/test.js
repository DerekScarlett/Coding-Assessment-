import React from "react";

import "./index.css";

function Stations(props) {
  return (
    <div className="main">
    <section className="all">
      <h2 className="heading">{props.name}</h2>
      <section className="slots">
      <h2 className="options"><span>Empty Slots:</span> {props.empty_slots}</h2>
      <h2 className="options"><span>Free Bikes:</span> {props.free_bikes}</h2>
      </section>
      </section>
    </div>
  );
}

export default Stations;
