import React from "react";
import "./testimonies.css";
import { BsStarFill } from "react-icons/bs";
import { useSpring, animated } from "react-spring";
import user1 from "./Ellipse.png";
import user2 from "./Ellipse1.png";
import user3 from "./Ellipse2.png";
import user4 from "./Ellipse3.png";

function Testimonies() {
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

  console.log(`testimonies ${isVisible}`);

  return (
    <>
      <animated.div style={fadeAnimation} className="testimonies">
        <div className="peoples-container">
          <div className="people-testimonies">
            <div className="people-col1">
              <div className="user user1">
                <div className="user-testimonie-top">
                  <img src={user1} alt="userdp" />
                  <div className="user-name-status">
                    <h4> Ralph </h4>
                    <h6> Researcher </h6>
                  </div>
                </div>
                <div className="user-bottom">
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation.{" "}
                  </p>
                  <div className="rating">
                    <BsStarFill className="star" />
                    <BsStarFill className="star" />
                    <BsStarFill className="star" />
                    <BsStarFill className="star" />
                    <BsStarFill className="star" />
                  </div>
                </div>
              </div>
              <div className="user user2">
                <div className="user-testimonie-top">
                  <img src={user2} alt="userdp" />
                  <div className="user-name-status">
                    <h4> Ralph </h4>
                    <h6> Researcher </h6>
                  </div>
                </div>
                <div className="user-bottom">
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation.{" "}
                  </p>
                  <div className="rating">
                    <BsStarFill className="star" />
                    <BsStarFill className="star" />
                    <BsStarFill className="star" />
                    <BsStarFill className="star" />
                    <BsStarFill className="star" />
                  </div>
                </div>
              </div>
            </div>
            <div className="people-col2">
              <div className="user user3">
                <div className="user-testimonie-top">
                  <img src={user3} alt="userdp" />
                  <div className="user-name-status">
                    <h4> Ralph </h4>
                    <h6> Researcher </h6>
                  </div>
                </div>
                <div className="user-bottom">
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation.{" "}
                  </p>
                  <div className="rating">
                    <BsStarFill className="star" />
                    <BsStarFill className="star" />
                    <BsStarFill className="star" />
                    <BsStarFill className="star" />
                    <BsStarFill className="star" />
                  </div>
                </div>
              </div>
              <div className="user user4">
                <div className="user-testimonie-top">
                  <img src={user4} alt="userdp" />
                  <div className="user-name-status">
                    <h4> Ralph </h4>
                    <h6> Researcher </h6>
                  </div>
                </div>
                <div className="user-bottom">
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation.{" "}
                  </p>
                  <div className="rating">
                    <BsStarFill className="star" />
                    <BsStarFill className="star" />
                    <BsStarFill className="star" />
                    <BsStarFill className="star" />
                    <BsStarFill className="star" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonies-text">
            <div className="testimonies-text-top">
              <h5>What our customers say </h5>
              <h4>Testimonials</h4>
            </div>
            <div className="testimonies-text-bottom">
              <p>
                Here is what our esteemed customers say about our services after
                becoming a member.
              </p>
              <div className="testimonies-bottom-bt">
                <h2>50K+</h2>
                <p>Positive reviews from people around Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </animated.div>
    </>
  );
}

export default Testimonies;
