import React from "react";
import "./ourservice.css";
import ServiceQuestion from "./ServiceQuestion";

function OurService() {
  return (
    <>
      <div className="service">
        <div className="service-container">
          <div className="service-area">
            <div className="service-text">
              <h1>Our Service</h1>
              <h5>what we offer</h5>
            </div>
            <div className="para">
              <p className="service-about">
                {" "}
                check out our best service you can possibly orders in building{" "}
                your company and don't forget to ask via our email or our
                costomer service if you are interested in using our service{" "}
              </p>
            </div>
          </div>
          <div className="move-container">
            <div className="move-item">
              <h5>Resident move</h5>
              <p>
                Make your home move a breeze with our top-notch residential
                moving services. From packing and loading to transportation and
                unloading, we'll handle every detail to ensure a stress-free
                transition.
              </p>
              <div className=" btn-area">
                <p className="btn-more"> Read more </p>
              </div>
            </div>
            <div className="move-item">
              <h5>Cooperate move</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur., Lorem ipsum dLorem
                ipsum dolor sit amet consectetur.
              </p>
              <div className=" btn-area">
                <p className="btn-more"> Read more </p>
              </div>
            </div>
            <div className="move-item">
              <h5>Interstate move</h5>
              <p>
                Make your home move a breeze with our top-notch residential
                moving services. From packing and loading to transportation and
                unloading, we'll handle every detail to ensure a stress-free
                transition.
              </p>
              <div className=" btn-area">
                <p className="btn-more"> Read more </p>
              </div>
            </div>
          </div>
          <ServiceQuestion />
        </div>
      </div>
    </>
  );
}

export default OurService;
