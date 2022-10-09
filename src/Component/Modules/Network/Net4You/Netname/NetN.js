import React from "react";
import './NetN.css';

const NetN = () => {
  return (
    <div id="setNetname">
      <div className="container" id="setContainetNet">
        <div className="row">
          <div className="col-md-4 col-12 col-lg-4">
            <h1><i className="fa fa-wifi"></i> Broadband</h1>
            <p>
              Bothered about slow internet at your workplace or home? You don’t
              need to worry anymore, Switch to Optix now and get lightning fast
              speed internet upto 150 Mbps.
            </p>
          </div>
          <div className="col-md-4 col-12 col-lg-4">
            <h1><i className="fa fa-television"></i> Xtream TV</h1>
            <p>
              We know you love better quality TV but we have the best for you!
              Optix Offers brilliant picture quality IPTV for news,
              entertainment, sports, movies and much More
            </p>
          </div>
          <div className="col-md-4 col-12 col-lg-4">
            <h1><i className="fa fa-phone"></i> Telephone</h1>
            <p>
              Talk it out to your heart’s content! OPTIX offers a crystal-clear
              phone service with all the features you need and love.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetN;
