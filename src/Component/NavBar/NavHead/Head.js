import React from "react";
import { NavLink } from "react-router-dom";
import './Head.css';

const Head = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light" id="setMainNav1">
        <div className="container">
          <NavLink className="navbar-brand" to="#">
            <img src={props.img} alt=" " />
          </NavLink>
          <button
            id="showbutton"
            className="navbar-toggler text-light bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav" id="setInput">
            <li className="nav-item">
                <NavLink className="nav-link" to="/nca">
                <span id="setsupport">24/7 SUPPORT:</span> <i className="fa fa-phone" id="setPhone"> 03070468097</i>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link"  to="/coverage">
                <i className="fa fa-envelope-o" id="setMail"> Email at Support</i>
                </NavLink>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};


export default Head;
