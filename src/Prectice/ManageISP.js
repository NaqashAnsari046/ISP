import React from "react";
import { NavLink } from "react-router-dom";
import "./ManagAdmin.css";

const Site = () => {
  return (
    <div id="setAdminbar">
      <h1>Site Manger</h1>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-4">
            <div className="col-md-12 " id="setCardAdmin">
              <NavLink to="/emplmain" id="setNAdmin">
                Employee Manage
              </NavLink>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            <div className="col-md-12" id="setCardAdmin">
              <NavLink to="/newreqdata" id="setNAdmin">
                User Manage
              </NavLink>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            <div className="col-md-12" id="setCardAdmin">
              <NavLink to="/webdata" id="setNAdmin">
                Web Data Mange
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Site;
