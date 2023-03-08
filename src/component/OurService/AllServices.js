import React from "react";
import "./allsevices.css";

function AllServices({ header, text, image, color, position }) {
  let px;

  if (window.innerWidth > 925) {
    px = "";
  } else {
    px = "column-reverse";
  }

  if (position === "right") {
    return (
      <div
        className="all-servicescontainer"
        style={{ backgroundColor: `${color}` }}
      >
        <div className="all-servicetext">
          <h4>{header}</h4>
          <div className="text-area">
            <p>{text}</p>
          </div>
        </div>
        <div className="img-section">
          <img src={image} alt="nathaniel" />
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="all-servicescontainer"
        style={{ backgroundColor: `${color}`, flexDirection: `${px}` }}
      >
        <div className="img-section">
          <img src={image} alt="nathaniel" />
        </div>
        <div className="all-servicetext">
          <h4>{header}</h4>
          <div className="text-area">
            <p>{text}</p>
          </div>
        </div>
      </div>
    );
  }

  //   return <>{content}</>;
}

export default AllServices;
