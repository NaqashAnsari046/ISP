import React from "react";

const BT1 = (props) => {
    const {DataFlow} = props;

  return (
    <div id="hi1">
      {DataFlow.map((item, ind) => {
        return (
          <div className="Ptcl" key={ind} id='hii'>
            <h2>{item.h2}</h2>
            <h1>{item.h1}</h1>
            <ul>
              <li>{item.li1}</li>
              <li>{item.li2}</li>
              <li>{item.li3}</li>
              <li>{item.li4}</li>
              <li>{item.li5}</li>
              <li>{item.li6}</li>
            </ul>
            <h1>{item.h11}</h1>
            <p>{item.p}</p>
          </div>
        );
      })}
      {/* <button onClick={()=>props.Funct()}></button>
      <button onClick={()=>props.Funct1()}></button> */}
    </div>
  );
};

export default BT1;
