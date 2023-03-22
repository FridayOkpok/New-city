import React from "react";
import "../Quote/quoteform.css";
import EnhancedTable from "./QuoteTable";

function Quoteinventory() {
  return (
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
      </div>
      <div className="quoteform-right"> </div>
    </div>
  );
}

export default Quoteinventory;
