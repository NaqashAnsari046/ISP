import React, { useEffect, useState } from "react";
import "./Emp1.css";

const UserNewReqLhr = () => {
  const [lhruser, setlhruser] = useState([]);
  const [paid, setpiad] = useState();
  const [tab, settab] = useState();
  const [email, setemail] = useState();
  const [bill, setbill] = useState();
  useEffect(() => {
    userElp();
  }, []);

  const userElp = async () => {
    let auth = localStorage.getItem("admin");
    let auths = await JSON.parse(auth);
    console.log("Auths", auths._id);

    let result = await fetch(`http://localhost:5000/newReq/${auths._id}`);
    result = await result.json();
    console.log(result);
    setlhruser(result);
  };

  const updateBill = (email, Bill, id) => {
    settab(lhruser[id - 1].name);
    setemail(id);
    setbill(Bill);
  };

  const DataBill = () => {};

  const BillUpdate = (e) => {
    // e.target.value;
  };
  return (
    <div id="userEmpSet">
      <li>User Name</li>
      <li>User Email</li>
      <li>User city</li>
      {lhruser.map((item, ind) => {
        return (
          <div key={ind} id="userEmpSet">
            <h4>{item.name}</h4>
            <h4>{item.email}</h4>
            <h4>{item.city}</h4>
            <button
              onClick={() =>
                updateBill(item.email, item.Bill, item.name, item.id)
              }
            >
              Customize
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default UserNewReqLhr;
