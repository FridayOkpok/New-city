import React from "react";
import "./inputemail.css";

function SendMail(props) {
  return (
    <>
      <div className="sendmail-container">
        <div className="sendmail-top">
          <h3>Ready to get started?</h3>
          <h5>Having any more questions?</h5>
        </div>
        <p>Join over 4,000+ satisfied customers already using NewCity</p>
        {!props.type && (
          <div className="sendmail-bottom">
            <input
              type="email"
              className="sendmail-emailinput"
              placeholder="example@email.com"
            />
            <h6 style={{ width: "90px" }}> contact me </h6>
          </div>
        )}
        {props.type && (
          <div className="sendmail-bottom">
            <h6 style={{ width: "120px" }}> Get Free Quote </h6>
          </div>
        )}
      </div>
    </>
  );
}

export default SendMail;
