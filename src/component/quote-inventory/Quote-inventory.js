import React from "react";
import "../Quote/quoteform.css";
import EnhancedTable from "./QuoteTable";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Quoteinventory() {
  const navigate = useNavigate();

  function onGoToPreviousPageHandeler() {
    navigate(-1);
  }

  return (
    <div style={{ height: "120vh", overflow: "visible" }}>
      <div className="quoteform-container">
        <div className="quoteform-left">
          <div className="quoteservice-list">
            <ul>
              <li className="quoteservice-listitem">Living Room</li>

              <li className="quoteservice-listitem">Beedroom</li>

              <li className="quoteservice-listitem">Kitchen</li>

              <li className="quoteservice-listitem">Others</li>
            </ul>
          </div>
          <EnhancedTable />
          <div style={{ marginTop: "2rem", padding: "5px 20px" }}>
            <p>Enter Additional Infromation</p>

            <textarea
              rows="5"
              style={{
                padding: "3px ",
                outline: "none",
                width: "100%",
                overflow: "inherit",
                height: "86px",
                background: "#F3FAFC",
                border: " 1px solid rgba(57, 28, 238, 0.2) ",
              }}
            />
          </div>
          <div className="form-btn">
            <span
              style={{ backgroundColor: "white" }}
              onClick={onGoToPreviousPageHandeler}
            >
              PREVIOUS
            </span>
            <span>NEXT</span>
          </div>
        </div>
        <div className="quoteform-right"> </div>
      </div>
    </div>
  );
}

export default Quoteinventory;
