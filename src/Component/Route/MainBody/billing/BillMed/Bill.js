import React from "react";
import './Bill.css'

const Bill = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-12">
            <div className="col-md-12 col-12 col-lg-12" id="setBillMed">
              <div className="titileBill">
                <h1>EasyPaisa</h1>
                <ul>
                  <li>Tap on “bill payment”</li>
                  <li>Select bill type “internet” </li>
                  <li>Select Company “Net4You"</li>
                  <li>Enter customer code with Net4You Prefix 678493048</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-12">
            <div className="col-md-12 col-12 col-lg-12" id="setBillMed">
              <div className="titileBill">
                <h1>Pay by hand</h1>
                <ul>
                  <li>On connection</li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bill;
