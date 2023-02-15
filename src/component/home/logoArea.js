import React from "react";
import Betty from "./Betty.png";
import Brandfetch from "./Brandfetch.png";
import Frame from "./Frame.png";
import Poshmark from "./Poshmark.png";
import "./logo.css";

function SponsorLogo() {
  return (
    <div className="logo-container">
      <div className="img-container">
        <img src={Betty} alt="betty company logo" />
      </div>
      <div className="img-container">
        <img src={Brandfetch} alt="betty company logo" />
      </div>
      <div className="img-container">
        <img src={Frame} alt="betty company logo" />
      </div>
      <div className="img-container">
        <img src={Poshmark} alt="betty company logo" />
      </div>
    </div>
  );
}

export default SponsorLogo;
