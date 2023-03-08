import React from "react";
import "./overlay.css";
import { useDispatch } from "react-redux";
import { loginAction } from "../store/Store";

function OverLay() {
  const dispatch = useDispatch();

  function onHideFormHandeler() {
    console.log("hidden");
    dispatch(loginAction.togglePupUp());
  }

  return <div className="overlay" onClick={onHideFormHandeler}></div>;
}
export default OverLay;
