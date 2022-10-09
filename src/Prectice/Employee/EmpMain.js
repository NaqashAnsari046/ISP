import React from "react";
import { NavLink } from "react-router-dom";
import Employe1 from "./Employee1/Employe1";
import "./Employee1/Emp1.css";

const EmpMain = () => {
  return (
    <div id="setemployeedashdord">
      <h1>Employee Dashbord</h1>
      <div className="container">
        <div className="row pt-5">
          <div className="col-12 col-md-11 col-lg-4">
            <div className="col-md-12" id="setCardAdmin">
              <NavLink to="/emp1" id="setLinkemp">
                Employee 1
              </NavLink>
            </div>
          </div>
          <div className="col-12 col-md-11 col-lg-4">
            <div className="col-md-12" id="setCardAdmin">
              <NavLink to="/emp1" id="setLinkemp">
                Employee 1
              </NavLink>
            </div>
          </div>
          <div className="col-12 col-md-11 col-lg-4">
            <div className="col-md-12" id="setCardAdmin">
              <NavLink to="/emp1" id="setLinkemp">
                Employee 1
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpMain;
