import React from "react";
import "./navbar.css";
import Logo from "./logo.jpg";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAction } from "../../store/Store";

function NavBar() {
  const dispatch = useDispatch();

  function onLoginHandeler() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    dispatch(loginAction.togglePupUp());
  }

  return (
    <div className="nav" id="nav">
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
          <div className="btn btn-login" onClick={onLoginHandeler}>
            {" "}
            Login{" "}
          </div>
          <div className="btn btn-signup" onClick={onLoginHandeler}>
            {" "}
            Sign-Up{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
