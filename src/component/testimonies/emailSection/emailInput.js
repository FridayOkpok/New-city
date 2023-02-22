import React from "react";
import "./inputemail.css";

function SendMail() {
  return (
    <>
      <div className="sendmail-container">
        <div className="sendmail-top">
          <h3>Ready to get started?</h3>
          <h5>Having any more questions?</h5>
        </div>
        <p>Join over 4,000+ satisfied customers already using NewCity</p>
        <div className="sendmail-bottom">
          <input
            type="email"
            className="sendmail-emailinput"
            placeholder="example@email.com"
          />
          <h6> contact me </h6>
        </div>
      </div>
    </>
  );
}

export default SendMail;
