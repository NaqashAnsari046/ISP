import React from "react";
import "./Icon.css";
// import icon1 from "../../../../img/Net4You/main/icon4.jpg";
import IconData from "./IconData";

const Icon = () => {
  return (
    <div id="iconNetwork">
      <div className="container">
        <div className="row">
          {IconData.map((item,ind) => {
            return (
                <div className="col-12 col-md-2 col-lg-2" id="setsmallIcon" key={ind}>
                  <img src={item.img} alt="icon" />
                  <h1>{item.text}</h1>
                </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Icon;
