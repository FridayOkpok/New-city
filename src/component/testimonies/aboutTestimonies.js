import React from "react";
import "./aboutTestimonies.css";
import { BsStarFill } from "react-icons/bs";
import user1 from "./Ellipse.png";
import user2 from "./Ellipse1.png";
import user3 from "./Ellipse2.png";
import user4 from "./Ellipse3.png";

function AboutTestimonies() {
  return (
    <>
      <div className="abouttestimonies">
        <div className="peoples-container">
          <div className="people-testimonies">
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
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation.{" "}
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
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation.{" "}
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
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation.{" "}
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
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation.{" "}
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
      </div>
    </>
  );
}

export default AboutTestimonies;
