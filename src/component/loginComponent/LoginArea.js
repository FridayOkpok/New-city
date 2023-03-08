import React, { useEffect, useState } from "react";
import "./loginarea.css";
import Logo from "./Logo.png";
import LoginForm from "./LoginForm";
import login from "./loginImage.png";
import signup from "./signupimg.png";

function LoginComponent() {
  const [changeimage, setChangeImage] = useState();

  useEffect(() => {
    function userLogin(userHasAccount) {
      setChangeImage(userHasAccount);
    }
    userLogin();
  }, []);

  return (
    <>
      <div className="login">
        <div
          className="login-container"
          style={{ backgroundImage: `url(${!changeimage ? login : signup})` }}
        >
          <div className="login-left">
            {!changeimage && (
              <div className="left-textarea">
                <h4>LOG IN</h4>
                <h5>Welcome Back !!!</h5>
              </div>
            )}
            {changeimage && (
              <div className="left-textarea">
                <h4>Sign Up</h4>
                <h5
                  style={{
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "24px",
                    lineHeight: "29px",
                    color: " rgba(251, 254, 255, 0.7)",
                    width: "167px",
                    height: "87px",
                  }}
                >
                  Welcome to the easy way to move
                </h5>
              </div>
            )}
            <img src={Logo} alt="logo" />
          </div>
        </div>
        <LoginForm setImage={setChangeImage} />
      </div>
    </>
  );
}

export default LoginComponent;
