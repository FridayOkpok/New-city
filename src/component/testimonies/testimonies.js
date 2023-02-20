import React from "react";
import "./testimonies.css";
import { BsPerson, BsStarFill } from "react-icons/bs";

function Testimonies() {
  return (
    <>
      <div className="testimonies">
        <div className="peoples-container">
          <div className="people-testimonies">
            <div className="people-col1">
              <div className="user user1">
                <div className="user-testimonie-top">
                  <BsPerson className="userprofile" />
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
                  <BsPerson className="userprofile" />
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
                  <BsPerson className="userprofile" />
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
                  <BsPerson className="userprofile" />
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
      </div>
    </>
  );
}

export default Testimonies;
