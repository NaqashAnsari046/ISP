import React from "react";
import { NavLink } from "react-router-dom";
import './Emp1.css';

const Employe1 = () => {

  return (
    <div id="listuser">
    <h1>user data</h1>
       <NavLink id="userList" to='/userlist'><h3>User List</h3></NavLink>
       <NavLink id="userList" to='/userlist'><h3>billing List</h3></NavLink>
       <NavLink id="userList" to='/usernewreqlhr'><h3>New Connect Request</h3></NavLink>
       <NavLink id="userList" to='/userreqncalhr'><h3>New NCA Request</h3></NavLink>
    </div>
  );
};

export default Employe1;
