import React from "react";
import { NavLink } from "react-router-dom";
import "./ReqText.css";
import CardData from "./CardData";
import req from '../../../../img/Net4You/main/about/about.jpg';
import NCAData from "./NCAData";

const RequestText = () => {
  return (
    <>
      <div id="setImg">
      <img src={req} alt="setresimg" />
        <div id="ReqText">
          <h4>Wellcome to ISP</h4>


          <div className="container">
          <h1 id="setHeding">Request New Connection</h1>
        <div className="row">
          {CardData.map((item, ind) => {
            return (
              <div className="col-12 col-md-6 col-lg-4" key={ind}> 
                <div className="col-md-12" id="reqNet4You">
                  <h1>{item.title}</h1>
                  <h2>{item.test}</h2>
                  <NavLink id="NavRequest" to={item.reqLink}>{item.btn}</NavLink>
                </div>
              </div>
            );
          })}
        </div>

        <h1 id="setHeding">Request New NCA</h1>
        <div className="row">
          {NCAData.map((item, ind) => {
            return (
              <div className="col-12 col-md-6 col-lg-4" key={ind}> 
                <div className="col-md-12" id="reqNet4You">
                  <h1>{item.title}</h1>
                  <h2>{item.test}</h2>
                  <NavLink id="NavRequest" to={item.reqLink}>{item.btn}</NavLink>
                </div>
              </div>
            );
          })}
        </div>
      </div>


        </div>
      </div>
    </>
  );
};

export default RequestText;
