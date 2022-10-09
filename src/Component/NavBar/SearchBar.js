import React from "react";
import "./Nav.css";

const SearchBar = () => {
  return (
    <>
      <li id="setInputSearch">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        <span className="input-group-text">
          <i className="fa fa-search"></i>
        </span>
      </li>
    </>
  );
};

export default SearchBar;
