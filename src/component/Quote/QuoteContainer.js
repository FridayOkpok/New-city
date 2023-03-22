import React from "react";
import { Outlet } from "react-router-dom";
import "./quotecontainer.css";

function QuoteContainer() {
  return (
    <div className="quotecontainer">
      <div className="quote-text">
        <h5 className="text-top">Get Quote</h5>
        <h5 className="text-bottom">Help us help you move</h5>
      </div>
      <div className="quote-steps">
        <ul className="quote-list">
          <li className=" quote-list-item">
            GET STARTED
            <div className="yellow-line"> </div>
          </li>
          <li className=" quote-list-item">
            QUICK INVENTORY <div className="yellow-line"> </div>
          </li>
          <li className=" quote-list-item">
            REQUIRED SERVICES <div className="yellow-line"> </div>
          </li>
          <li className=" quote-list-item">
            FINISH <div className="yellow-line"> </div>
          </li>
        </ul>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default QuoteContainer;
