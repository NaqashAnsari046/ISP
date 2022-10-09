import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./CardPkg.css";

const CardPkg = () => {
  const [limitdata, setlimitdata] = useState([]);
  useEffect(() => {
    CardData();
  }, []);

  const CardData = async () => {
    let result = await fetch(`http://localhost:5000/cardlimitdata`);
    result = await result.json();
    setlimitdata(result);
  };
  return (
    <div className="mainCard">
      <div className="container">
        <h1>Choose Your Packages</h1>
        <div className="row">
        {limitdata.map((item, ind) => {
          return (
            <div className="col-12 col-md-6 col-lg-4" key={ind}> 
            <div className="card">
            <div className="card-body text-center">
              <div className="title">
                <h5>{item.price}</h5>
                <span>{item.month}</span>
                <h2>{item.limit}</h2>
              </div>

              <div className="text">
                <h3>{item.mbps}</h3>
                <h1>{item.price1}</h1>
                <h4>{item.time}</h4>
                <h5>{item.con}</h5>
                <p>{item.tax}</p>
                <NavLink to={item.link} id="setLink">
                  {item.btn}
                </NavLink>
              </div>
            </div>
          </div>
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default CardPkg;
