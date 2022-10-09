import React from "react";

const WhyConnData = (props) => {
  const {Data} = props;
  return (
    <div>
      <div  id="setIconText">
      {
        Data.map((item,ind)=>{
          return(
            <div className="col-md-12 d-flex" key={ind}>
            <span> <img src={item.img} alt="whyConnect" />
          </span>
          <div>
            <h1>{item.tile}</h1>
              <p>{item.text}</p>
            </div>
            </div>
          );
        })
      }
        
      </div>
    </div>
  );
};

export default WhyConnData;
