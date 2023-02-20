import React from "react";
import Play from "./G24.png";

import "./operation.css";

function Operations() {
  return (
    <>
      <div className="operations">
        <div className="operation-text">
          <h4> How we Operate</h4>
          <h6>why choose us !</h6>
        </div>
        <div className="operation-image">
          <img src={Play} alt={Play} className="play" />
        </div>
      </div>
    </>
  );
}

export default Operations;
