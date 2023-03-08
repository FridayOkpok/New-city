import React from "react";
import "./servicequestion.css";
import experienced from "./exp.png";
import price from "./price.png";
import time from "./time.png";
import security from "./security.png";

function ServiceQuestion() {
  return (
    <>
      <div className="service-area">
        <div className="para">
          <p className="service-about">
            At NewCity, we set ourselves apart with experienced movers,
            top-notch equipment, and a commitment to customer satisfaction.
            Trust us to make your move seamless and stress-free. Experience the
            difference.
          </p>
        </div>
        <div className="service-text">
          <h1>What Make Us Different?</h1>
          <h5>Why choose us!</h5>
        </div>
      </div>
      <div className="other-info">
        <div className="other-info-container">
          <img src={experienced} alt="imageexperience" />
          <h4>Experience</h4>
          <p>
            {" "}
            Our experience of 25 years of building and making achievements in
            the world of development.{" "}
          </p>
        </div>
        <div className="other-info-container">
          <img src={price} alt="imageexperience" />
          <h4>Competitive Price</h4>
          <p>
            {" "}
            The price we offer you are very competitive without reducing the
            quality of the company's work in the slightest.
          </p>
        </div>
        <div className="other-info-container">
          <img src={time} alt="imageexperience" />
          <h4>On Time</h4>
          <p>we prioritize the quality of our work and finish it on time /</p>
        </div>
        <div className="other-info-container">
          <img src={security} alt="imageexperience" />
          <h4>Secuity</h4>
          <p>
            {" "}
            Our experience of 25 years of building and making achievements in
            the world of development{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default ServiceQuestion;
