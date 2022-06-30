import React from "react";
import "./cta.css";
const Cta = (props) => {
  return <div className="gpt3__cta">
    <div className="gpt3__cta-content">
    <p>{props.para}</p>
      <h3>{props.h3}</h3>
    </div>
    <div className="gpt3__cta-btn">
      <button  type="button">
        Get Started
      </button>
    </div>
  </div>;
};

export default Cta;
