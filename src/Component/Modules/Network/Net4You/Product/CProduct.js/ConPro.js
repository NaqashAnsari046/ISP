import React from "react";
import "./ConPro.css";
import couple from "../../../../../img/Net4You/main/product/couple.png";

const ConPro = (props) => {
  return (
    <div id="setMainPro">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6" id="setImgPro">
            <img src={couple} alt="img" />
          </div>
          <div className="col-12 col-md-6 col-lg-6" id="setConProduct">
            <h1>unbelievable</h1>
            <p>
              Unbelievable up-time ensured through our strong fiber optic
              network which means you will never be out of touch with your loved
              ones and will always be connected.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConPro;
