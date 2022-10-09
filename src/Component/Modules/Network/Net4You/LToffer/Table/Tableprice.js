import React from "react";
import './TPrice.css';

const Tableprice = (props) => {
    const {hider,h1,h2,h3,h4,h5,p1,p2,p3,p4,p5} = props;
  return (
    <div className="tablePrice">
      <div className="container">
      <h1>{hider}</h1>
        <table id="settable">
          <tbody>
            <tr>
              <th>{h1}</th>
              <td>{p1}</td>
            </tr>
            <tr>
              <th>{h2}</th>
              <td>{p2}</td>
            </tr>

            <tr>
              <th>{h3}</th>
              <td>{p3}</td>
            </tr>
            <tr>
              <th>{h4}</th>
              <td>{p4}</td>
            </tr>
            <tr>
              <th>{h5}</th>
              <td>{p5}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tableprice;
