import React, { useState } from "react";
import "./navbar.css";
import Logo from "./logo.jpg";
import { NavLink } from "react-router-dom";
import { BsMenuButtonFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { loginAction } from "../../store/Store";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();

  function onLoginHandeler() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    dispatch(loginAction.togglePupUp());
    onShowLoginHandelerFunction();
  }

  function onShowLoginHandelerFunction() {
    setShowMenu((previous) => !previous);
  }

  return (
    <div className="nav" id="nav">
      <div className="nav-container ">
        <img src={Logo} alt="companies-logo" className="nav-logo-item" />
        <div className="nav-item">
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
              to="qoutes"
              className={({ isActive }) => (isActive ? `active` : `notactive`)}
              end
            >
              <li>
                <h5>Get Quote</h5>
              </li>
            </NavLink>
            <NavLink
              to=""
              className={({ isActive }) => (isActive ? `active` : `notactive`)}
              end
            >
              <li>
                <h5>Track Move</h5>
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
          </ul>

          <BsMenuButtonFill
            className="menubtn"
            onClick={onShowLoginHandelerFunction}
          />
          {showMenu && (
            <div className="loginMenu">
              <div className="btn-area nav-btnarea">
                <h4 onClick={onShowLoginHandelerFunction}>Hide</h4>

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
          )}
          <div className="btn-area nav-btnarea">
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
    </div>
  );
}

export default NavBar;
