import React from 'react';
import { NavLink } from 'react-router-dom';
import "./user.css";

const UserReq = () => {

  return (
    <div id='setUerBorad'>
       <h1>User Request</h1>
       <div className="container">
       <div className="row">
         <div className="col-12 col-md-6 col-lg-4">
           <div className="col-md-12" id="setCardAdmin">
              <NavLink to='/userreqlist' id="setNAdmin">New Connect Request</NavLink>
           </div> 
         </div>
         <div className="col-12 col-md-6 col-lg-4">
         <div className="col-md-12" id="setCardAdmin">
            <NavLink to='/userreqnca' id="setNAdmin">User NCA Request</NavLink>
         </div>
         </div>
         <div className="col-12 col-md-6 col-lg-4">
         <div className="col-md-12" id="setCardAdmin">
         <NavLink to='/userlistall' id="setNAdmin">User List</NavLink>
      </div>
         </div>
       </div>
    </div>
    </div>
  )
}

export default UserReq
