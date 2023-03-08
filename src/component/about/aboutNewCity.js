import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./aboutnewcity.css";
import Property1 from "./Property1.png";
import Property2 from "./Property2.png";
import Property3 from "./Property3.png";
import Property4 from "./Property4.png";
import Property5 from "./Property5.png";
import Property6 from "./Property6.png";
import Property7 from "./Property7.png";
import Property8 from "./Property8.png";

function AboutNewCity({ color }) {
  const navigate = useNavigate();
  const location = useLocation();

  const path = location.pathname;
  let text;

  const [theImage, settheImage] = useState([
    Property1,
    Property2,
    Property3,
    Property4,
    Property5,
    Property6,
    Property7,
    Property8,
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (path === "/about") {
    text = " ";
  } else {
    text = " See More ...";
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % theImage.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex, theImage.length]);

  const dotActiveClass = `dot dot${currentIndex}`;

  function onChnageToAboutParamsHandeler() {
    navigate("about");
  }

  return (
    <>
      <div
        className="aboutContainer"
        style={{ backgroundColor: `${color ? color : ``}` }}
      >
        <div className="about-text">
          <div className="about-text-top">
            <h4> About NewCity</h4>
            <h6>our Story: Who we are</h6>
          </div>
          <div className="about-text-bottom">
            <p>
              "At NewCity Movers, we believe that moving should be a celebration
              of new beginnings, not a source of stress. That's why we've made
              it our mission to provide seamless, hassle-free moving services to
              make your transition to your new home as smooth as possible.{" "}
              <br />
              Our team of expert movers and state-of-the-art equipment ......{" "}
              <br />
              <strong onClick={onChnageToAboutParamsHandeler}>
                {" "}
                <br />
                {text}
              </strong>
            </p>
          </div>
        </div>
        <div className="about-image-container">
          <img
            src={theImage[currentIndex]}
            alt={`Logo ${currentIndex + 1}`}
            style={{ width: "100%", height: "400px" }}
          />
        </div>
      </div>
    </>
  );
}

export default AboutNewCity;
