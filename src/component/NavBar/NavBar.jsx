import React from "react";
import "./navbar.css";
import Logo from "./logo.jpg";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav">
      <div className="nav-container ">
        <div className="nav-item">
          <img src={Logo} alt="companies-logo" className="nav-logo-item" />
          <ul>
            {" "}
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? `active` : `notactive`)}
              end
            >
              <li>
                <h5>Home</h5>
              </li>
            </NavLink>
            <NavLink
              to="about"
              className={({ isActive }) => (isActive ? `active` : `notactive`)}
              end
            >
              <li>
                <h5>About</h5>
              </li>
            </NavLink>
            <NavLink
              to="services"
              className={({ isActive }) => (isActive ? `active` : `notactive`)}
              end
            >
              <li>
                <h5>Service</h5>
              </li>
            </NavLink>
            <NavLink
              to="contact"
              className={({ isActive }) => (isActive ? `active` : `notactive`)}
              end
            >
              <li>
                <h5>Contact</h5>
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="btn-area">
          <div className="btn btn-login"> Login </div>
          <div className="btn btn-signup"> Sign-Up </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
