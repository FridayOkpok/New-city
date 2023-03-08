import React, { useState } from "react";
import "./loginform.css";
import Facebook from "./Facebook.png";
import Google from "./Google.png";

function LoginForm({ setImage }) {
  const [userHasAccount, setUserHasAccount] = useState(true);

  function onLoginHandeler() {
    setUserHasAccount((previous) => !previous);
    setImage(userHasAccount);
  }

  return (
    <>
      <div className="loginform-container">
        <div className="inputContainer">
          <input type="mail" className="input-text" placeholder="EMAIL" />
          {userHasAccount && (
            <input type="mail" className="input-text" placeholder="PASSWORD" />
          )}
          <span>{`${userHasAccount ? `Log In ` : `Create Account`}`}</span>
        </div>
        {userHasAccount && <h4> forgot your password ?</h4>}
        <div className="orlogin">
          <div className="line1"> </div>
          <h5>or {`${userHasAccount ? "Log in with " : "Sign up with"}`}</h5>
          <div className="line2"></div>
        </div>
        <div className="socialmedia-handeler">
          <div className="facebookicons">
            <img src={Facebook} alt="facebook" />
            Facebook
          </div>
          <div className="googleicons">
            <img src={Google} alt="facebook" />
            Google
          </div>
        </div>
        <p onClick={onLoginHandeler}>
          {`${
            userHasAccount
              ? `Don't have an account? Sign up`
              : ` have an account? Login`
          }`}
        </p>
      </div>
    </>
  );
}

export default LoginForm;
