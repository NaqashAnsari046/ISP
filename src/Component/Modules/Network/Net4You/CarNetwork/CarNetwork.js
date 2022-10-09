import React from "react";
import "./CarNetwork.css";
import carSpeed from "../../../../img/Net4You/main/speentext.jpg";

const CarNetwork = () => {
  return (
    <div id="carNetwork">
      <img src={carSpeed} alt="Car Speed" />

      <div className="Cartext">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-12 col-lg-2 col-md-2">
              <h2>
                100<sup id="supnet">MBPS</sup>
              </h2>
            </div>
            <div className="col-12 col-lg-6 col-lg-6">
              <h1>Ultra Fast Internet</h1>
              <p>Ultra Fast, Limitless and Reliable</p>
              <h6>
                Net4You gets bigger and better than ever with enhanced speed,
                clarity and bandwidth with a new and improved spectrum of
                packages for internet user experience.
              </h6>
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarNetwork;
