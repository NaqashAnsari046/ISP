import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = (props) => {

  var auth = localStorage.getItem('employee');


  const logout = ()=>{
    localStorage.clear();
  }

  useEffect(() => {
    let hid = document.getElementById("NavSetBtn");
    hid.style.display = " none";
    window.onscroll = function () {
      NavFixed();
    };

    let setNav = document.getElementById("setMainNav");
    let setBtn = document.getElementById("NavSetBtn");
    let logN = document.getElementById("isp");
    let sticky = setNav.offsetTop;
    function NavFixed() {
      if (window.pageYOffset >= sticky) {
        setNav.classList.add("sticky");
        setBtn.classList.add("btnset");
        logN.style.display = "block";
      } else {
        setNav.classList.remove("sticky");
        setBtn.classList.remove("btnset");
        logN.style.display = "none";
      }
    }
  }, []);

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light  sticky-top"
        id="setMainNav"
      >
        <div className="container">
          <NavLink className="navbar-brand" to="#">
            <h4 id="isp">ISP</h4>
          </NavLink>
          <button
            id="NavSetBtn"
            className="navbar-toggler text-light bg-light hiden"
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
            <ul className="navbar-nav " id="topfixed">

            <li className="nav-item">
                <NavLink className="nav-link" to={props.homelink}>
                  {props.home}
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/net4you"
                  className="nav-link dropdown-toggle"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {props.network}
                </NavLink>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                  id="setDrop"
                >
                  <li>
                    <NavLink
                      className="dropdown-item bg-dark text-light"
                      to={props.NetF}
                    >
                      {props.net}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item bg-dark text-light"
                      to={props.NetP}
                    >
                      {props.Fab}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item bg-dark text-light"
                      to="/hbj"
                    >
                      {props.Optix}
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/packages"
                  className="nav-link dropdown-toggle"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {props.packages}
                </NavLink>
                <ul
                  className="dropdown-menu packages"
                  aria-labelledby="dropdownMenuButton1"
                  id="setDrop"
                >
                  <li>
                    <NavLink
                      className="dropdown-item bg-dark text-light"
                      to="/limits"
                    >
                      {props.pkgPlane}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item bg-dark text-light"
                      to="/limits"
                    >
                     {props.pkgPlan}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item bg-dark text-light"
                      to="/broadband"
                    >
                      {props.PkgBndle}
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to={props.link}>
                  {props.Pay}
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to={props.request}>
                  {props.Request}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={props.cover}>
                  {props.Area}
                </NavLink>
              </li>

              <props.input id='setInputSearch' sport={props.sport} />

              <li className="nav-item d-flex" id="singin">
                <NavLink className="nav-link " to="/adminbar">
                  <i className="fa fa-bars" id="bar"></i>
                </NavLink>

              {auth?<NavLink className="nav-link" onClick={logout} to="/signin">
                LogOut  
              </NavLink>:<NavLink className="nav-link" to="/signin">
              {props.sign}</NavLink>}
                
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
