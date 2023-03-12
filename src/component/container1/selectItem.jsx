import React, { useState } from "react";
// import Optios from "./Countries";
import "./selectitem.css";

function SelectItem() {
  const [checkItem, setCheckItem] = useState(``);

  function onCheckItemHandeler(event) {
    setCheckItem(event.target.value);
  }

  return (
    <div className="travel">
      <div className="travel-text">
        <h3>Price Estimation </h3>
      </div>
      <div className="travel-input">
        <div className="travel-item">
          <input type="text" placeholder="From my Location" />
        </div>
        <div className="travel-item">
          <input type="text" placeholder="To my destination" />
        </div>
        <div className="travel-item">
          <select className="city" name="city" onChange={onCheckItemHandeler}>
            <option value=" "> What are you moving </option>
            <option value="Goods "> Goods </option>
            <option value=" people"> People </option>
            <option value="work items "> Work items </option>
          </select>
        </div>
        <div className="btn btn-estimate"> Get Estimation </div>
      </div>
    </div>
  );
}

export default SelectItem;
