import React from "react";
import BT1 from './BT1'
import {DataFlow1, DataFlow, DataFlow2} from "./Data";
import "./MBody.css";

const MBody = (props) => { 

  const MainFunction = () =>{
    let hide = document.getElementById('hii').style.display='block';
    return hide;
  }

  

 
  return (
    <div className="container-fluid col-md-12 setTextFaq">
      <div className="row">
        <div className="col-md-4 col-12">
          <div className="cards">
            <ul>
              <h1>Broadband</h1>
              <li onClick={MainFunction}>New Smart Spot (Wifi)</li>
              <li onClick={MainFunction}>Internet FAQs</li>
              <li onClick={MainFunction}>High Speed Internet Packages</li>
              <li>Internet Static IP</li>
              <li>USB Wifi Adapter </li>
              <li>PTCL Video Con</li>
              <li>Pakistan Gaming Lounge</li>
              <li>iSentry</li>
            </ul>
          </div>
        </div>
        <div className="col-md-7" id="settextBox">        
          <BT1 DataFlow={DataFlow} Funct={MainFunction} />
          <BT1 DataFlow={DataFlow1} Funct1={MainFunction} />
          <BT1 DataFlow={DataFlow2} Funct={MainFunction} />
        </div>
      </div>
    </div>
  );
};

export default MBody;
