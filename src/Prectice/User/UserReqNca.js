import React, { useEffect, useState } from "react";
import "./user.css";

const UserReqNca = () => {
  const [userlist, setuserlist] = useState([]);

  useEffect(() => {
    NewReqData();
  }, []);
  const NewReqData = async () => {
    let data = await fetch(`http://localhost:5000/newrequestnca`);
    data = await data.json();
    setuserlist(data);
  };

  const clearUserList = async(_id) => {
    let data = await fetch(`http://localhost:5000/newrequestncadelete/${_id}`,{
        method:"DELETE",
    })
    data = await data.json();
    if(data){
    NewReqData();

    }
  };
  return (
    <div id="userlist">
      <h3>name</h3>
      <h3>email</h3>
      <h3>city</h3>
      <h3>Work</h3>
      {userlist.map((item, ind) => {
        return (
          <div key={ind}>
            <h3>{item.name}</h3>
            <h3>{item.email}</h3>
            <h3>{item.city}</h3>
            <button onClick={()=>clearUserList(item._id)}>Clear</button>
          </div>
        );
      })}
    </div>
  );
};

export default UserReqNca;
