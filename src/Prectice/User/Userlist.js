import React, { useEffect, useState } from "react";
import "./user.css";

const Userlist = () => {
  const [userlist, setuserlist] = useState([]);

  useEffect(() => {
    NewReqData();
  }, []);
  const NewReqData = async () => {
    let data = await fetch(`http://localhost:5000/user`);
    data = await data.json();
    setuserlist(data);
  };

  return (
    <div id="userlist">
      <h3>name</h3>
      <h3>email</h3>
      <h3>city</h3>
      {userlist.map((item, ind) => {
        return (
          <div key={ind}>
            <h3>{item.name}</h3>
            <h3>{item.email}</h3>
            <h3>{item.city}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Userlist;
