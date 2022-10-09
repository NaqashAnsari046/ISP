import React from "react";
import SupData from "./SupData";
import "./SupText.css";

const SupText = () => {
  return (
    <div className="mainSupport">
      <div className="container" id="setSoprt">
        <h1>How can we help you?</h1>

        <div className="row">
          {SupData.map((item, ind) => {
            return (
              <div className="col-md-4 col-lg-4 col-12" id="setCardSupport">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-3 col-lg-3 col-3">
                      <h1>icon</h1>
                    </div>
                    <div className="col-md-9 col-lg-9 col-9" id="setsportiner">
                      <h1>{item.title}</h1>
                      <p>{item.para}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SupText;
