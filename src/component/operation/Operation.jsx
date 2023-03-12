import React from "react";
import Play from "./G24.png";
import { useSpring, animated } from "react-spring";

import "./operation.css";

function Operations() {
  const [isVisible, setIsVisible] = React.useState(false);
  const fadeAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(20px)",
  });

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > 360) {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log(`operation ${isVisible}`);

  return (
    <>
      <animated.div style={fadeAnimation} className="operations">
        <div className="operation-text">
          <h4> How we Operate</h4>
          <h6>why choose us !</h6>
        </div>
        <div className="operation-image">
          <img src={Play} alt={Play} className="play" />
        </div>
      </animated.div>
    </>
  );
}

export default Operations;
