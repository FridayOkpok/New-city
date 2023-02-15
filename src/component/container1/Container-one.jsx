import React from "react";
import "./containerone.css";
import SelectItem from "./selectItem";

function ContainerOne() {
  return (
    <section id="section-1">
      <div className="container-1">
        <div className="container-content">
          <h2> Breathe Easy, We've Got Your Move Covered </h2>
          <p className="contain-text">
            {" "}
            we understand that moving can be stressful and an overwhelming
            process. That's why we're here to take the weight off your shoulders
            ensure a smooth transition to your new home{" "}
          </p>
          <div className="btn-area">
            <div className="btn btn-login"> Get Moving </div>
            <div className="btn btn-signup"> Learn More </div>
          </div>
        </div>{" "}
        {/* the select component will appear here */}
        <SelectItem />
      </div>
    </section>
  );
}

export default ContainerOne;
