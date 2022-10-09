import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const ShortNav = (props) => {
  return (
    <>
      <li className="nav-item">
        <NavLink className="nav-link" to={props.sport}>
          Support
        </NavLink>
      </li>
      <li className="nav-item border px-3" id="setcllbtn">
        <NavLink className="nav-link" to="/">
          help 042-42420000
        </NavLink>
      </li>
    </>
  );
};

export default ShortNav;
