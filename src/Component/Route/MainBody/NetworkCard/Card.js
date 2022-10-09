import React from "react";
import { NavLink } from "react-router-dom";
import "./CardNet.css";

const Card = (props) => {
  const { Data } = props;

  return (
    <div>
      {Data.map((item, ind) => {
        return (
            <div className="col-md-12 col-lg-12 col-12 setCardNetwork" key={ind}>
            <img src={item.img} alt="img" />
            <div className="imgText">
              <h4>{item.NetworkName}</h4>
              <p>{item.paragraph}</p>
              <NavLink to="/">
                <button>{item.button}</button>
              </NavLink>
            </div>
            </div>
        );
      })}
    </div>
  );
};

export default Card;
