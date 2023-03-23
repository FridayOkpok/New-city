import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import "./quotecontainer.css";

function QuoteContainer() {
  const location = useLocation().pathname;
  const quotes = location === "/qoutes" ? " yellow-line" : "";
  const quoteinventory =
    location === "/qoutes/quote-inventory" ? "yellow-line" : "";
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
            <div className={quotes}> </div>
          </li>
          <li className=" quote-list-item">
            QUICK INVENTORY <div className={quoteinventory}> </div>
          </li>
          <li className=" quote-list-item">
            REQUIRED SERVICES <div className=""> </div>
          </li>
          <li className=" quote-list-item">
            FINISH <div className=""> </div>
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
