import React from "react";
import "./navbar.css";
import Logo from "./logo.jpg";

function NavBar(props) {
  return (
    <div id="#nav">
      <div className="nav">
        <div className="nav-container ">
          <div className="nav-item">
            <img src={Logo} alt="companies-logo" className="nav-logo-item" />
            <ul>
              {" "}
              <li>
                <h5>Home</h5>
              </li>
              <li>
                <h5>About</h5>
              </li>
              <li>
                <h5>service</h5>
              </li>
              <li>
                <h5>Contact</h5>
              </li>
            </ul>
          </div>
          <div className="btn-area">
            <div className="btn btn-login"> Login </div>
            <div className="btn btn-signup"> Sign-Up </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
