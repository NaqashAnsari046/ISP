import React from "react";
import "./Broad.css";

const Broad = (props) => {
  const {img11,title,title1,info,para} = props;
  return (
    <div id="Xtream" className="Xtream">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6" id="XtreamTeext">
            <img src={img11} alt="Xtream img" />
          </div>
          <div className="col-12 col-md-6 col-lg-6 broadband" id="XtreamTeext">
            <h1>{title}</h1>
            <h2>{title1}</h2>
            <h2>{info}</h2>
            <p>{para}</p>
            <button>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Broad;
