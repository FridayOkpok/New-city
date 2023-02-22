import React from "react";
import "./fotter.css";
import logo from "../../component/NavBar/logo.jpg";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

function Fotter() {
  return (
    <>
      <div className="fotter-container">
        <div className="fotter-col1">
          <img src={logo} alt={logo} />
          <div className="col1-item">
            <span>Get in touch</span>
            <span>+234 903 350 0464</span>
            <span>Contact@privlabrary.ng</span>
          </div>
        </div>
        <div className="fotter-col2">
          <div className="fotter-col3">
            <h4>Company</h4>
            <span>service</span>
            <span>about</span>
            <span>Contact</span>
          </div>
          <div className="fotter-col4">
            <h4>Legal</h4>
            <span>Terms and conditions</span>
            <span>Disclaimer</span>
            <span>Privacy Policy</span>
            <span>Insurance Cover </span>
          </div>
          <div className="fottter-last">
            <h4>Connect With Us </h4>
            <div className="icon-container">
              <div className="icon-col1">
                <BsFacebook className="socials facebook" />
                <BsInstagram className="socials" />
              </div>
              <div className="icon-col2">
                <BsLinkedin className="socials" />
                <BsTwitter className="socials" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fotter;
