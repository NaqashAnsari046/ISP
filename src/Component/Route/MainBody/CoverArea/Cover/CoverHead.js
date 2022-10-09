import React from "react";
import "./Cover.css";
import { NavLink } from "react-router-dom";

const CoverHead = (props) => {
  const {title,home,Pkg} = props
  return (
    <div className="setCoverarea">
      <div className="container">
        <h1>{title}</h1>
        <NavLink className='borderSet' to="/" id="setLinkcover">
          {home}
        </NavLink>
        <NavLink to="/broadband" id="setLinkcover">
          {Pkg}
        </NavLink>
      </div>
    </div>
  );
};

export default CoverHead;
