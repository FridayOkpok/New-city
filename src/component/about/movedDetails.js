import React from "react";
import "./moveddetails.css";
import homemove from "./homemove.png";
import businessMove from "./businessMove.png";
import happycostomers from "./happycostomers.png";
import killometers from "./killometers.png";

function ItemMoved() {
  return (
    <>
      <div className="moved-container">
        <img src={homemove} alt="moved" />
        <img src={businessMove} alt="moved" />
        <img src={happycostomers} alt="moved" />
        <img src={killometers} alt="moved" />
      </div>
    </>
  );
}

export default ItemMoved;
