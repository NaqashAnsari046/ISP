import React from "react";
import Card from "./Card";
import "./CardNet.css";
const { CardDataFTCL,CardDataFIB, CardDataFS } = require("./CardData");

const CardNet = () => {
 

  return (
    <div className="netword">
      <div className="container setCart">
        <h3>network available</h3>

        <div className="row">
          <div className="col-md-4" id="setOutSide">
            <Card Data={CardDataFTCL} />
          </div>
          <div className="col-md-4" id="setOutSide">
            <Card Data={CardDataFIB} />
          </div>
          <div className="col-md-4" id="setOutSide">
            <Card Data={CardDataFS} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardNet;
