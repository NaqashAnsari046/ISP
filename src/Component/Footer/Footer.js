import React from "react";
import "./Footer.css";
import FooterBar from "./FooterBar/FooterBar";

const Footer = (props) => {
  const {hider,text} = props;
  return (
    <>
      <div className="FooterMain">
      <div className="row">
        <div className="col-md-6" id="setColSix">
          <div className="setImgText">
            <h2>{hider}</h2>
          </div>
          <p>{text}</p>
        </div>
        <div className="col-md-6 setfooterTextTwo">
          <h3>Connect with us on:</h3>
          <h3>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-facebook-square"></i>
          <i className="fa fa-linkedin"></i>
          </h3>
        </div>
      </div>
    </div>
    <FooterBar />

    </>
  );
};

export default Footer;
