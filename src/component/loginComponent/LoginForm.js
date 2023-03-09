import React, { useState } from "react";
import "./loginform.css";
import Facebook from "./Facebook.png";
import Google from "./Google.png";
import { useDispatch } from "react-redux";
import { loginAction } from "../../store/Store";

function LoginForm({ setImage }) {
  const dispatch = useDispatch();
  const [userHasAccount, setUserHasAccount] = useState(true);
  const [emailInput, setEmailInput] = useState(" ");
  const [passwordInput, setPasswordInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function onChangeEmailHandeler(event) {
    setEmailInput(event.target.value);
  }

  function onChangePasswordHandeler(event) {
    setPasswordInput(event.target.value);
  }

  function onLoginHandeler() {
    setUserHasAccount((previous) => !previous);
    setImage(userHasAccount);
    setEmailInput(" ");
    setPasswordInput(" ");
  }

  let url;

  function submitFormHandeler() {
    setIsLoading(true);
    if (userHasAccount) {
      //
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAlWveUg0aFYUGO0w96K2DpgK3v6-z8a20";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAlWveUg0aFYUGO0w96K2DpgK3v6-z8a20";
    }

    const req = fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: emailInput,
        password: passwordInput,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = req.then((response) => {
      console.log(response);
      if (response.ok) {
        const res = response.json();
        console.log(res);
        setEmailInput("");
        setPasswordInput("");
        setIsLoading(false);
        dispatch(loginAction.togglePupUp());

        setUserHasAccount(true);
        return res;
      } else {
        response.json().then((data) => {
          setEmailInput("");
          setPasswordInput("");

          setIsLoading(false);
          alert(`error ${data.error.code} ${data.error.message} `);
        });
      }
    });
  }

  return (
    <>
      <div className="loginform-container">
        <div className="inputContainer">
          {isLoading && <h2> Loading </h2>}
          <input
            type="email"
            className="input-text"
            placeholder="EMAIL"
            value={emailInput}
            onChange={onChangeEmailHandeler}
          />

          <input
            type="password"
            className="input-text"
            placeholder="PASSWORD"
            value={passwordInput}
            onChange={onChangePasswordHandeler}
          />

          <span onClick={submitFormHandeler}>{`${
            userHasAccount ? `Log In ` : `Create Account`
          }`}</span>
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
