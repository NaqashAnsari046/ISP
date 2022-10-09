import React from "react";
import { NavLink } from "react-router-dom";
import "../ManagAdmin.css";


const WebData = () => {
  return (
    <div id="setSite">
      <h1>WebData Manger</h1>
      <div className="container-fluid">
        <div className="row">
        <div className="col-md-4">
        <div className="col-md-12 col-12 col-lg-12 mt-4" id="setCardAdmin">
          <NavLink to="/limitcarddata" id="setNAdmin">
            limit Card Data
          </NavLink>
        </div>

          <div className="col-md-12 mt-3" id="setCardAdmin">
          <NavLink to="/newreqdata" id="setNAdmin">
            other
          </NavLink>
        </div>
        <div className="col-md-12 mt-3" id="setCardAdmin">
        <NavLink to="/webdata" id="setNAdmin">
          other
        </NavLink>
      </div>
        </div>
        <div className="col-md-8">

        </div>
         
          
        </div>
      </div>
    </div>
  );
};

export default WebData;
