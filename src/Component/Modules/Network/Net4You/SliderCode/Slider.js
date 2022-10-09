import React from 'react'
import './Slider.css'
import slider1 from '../../../../img/Net4You/main/speed1.jpg';
import slider4 from '../../../../img/Net4You/main/speed6.jpg';
import slider3 from '../../../../img/Net4You/main/speed8.jpg';

const Slider = () => {
  return (
    <div>
    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
 
  <div className="carousel-inner" id='setslidernetwork'>
    <div className="carousel-item" data-bs-interval="10000">
      <img src={slider1} className="d-block w-100" alt="..." /> 
      <div className="carousel-caption d-md-block" id='networkslidetText'>
        <h1>Super Fast Speed</h1>
        <h2>100 Mbps</h2>
        <h4>Net4You changing your digital lifestyle</h4>
        <p>do unstoppable socialization and rejoice unlimited chatting, uploading, downloading, surfing, streaming, and much more on the double speed internet from 10 mbps to 100 mbps free for one month</p>
            <button>learn More</button>
       </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={slider4} className="d-block w-100" alt="..." />
      <div className="carousel-caption" id='networkslidetText'>
        <h1>Real Life Action in your living room</h1>
        <h2>XTREAM TV</h2>
        <h4>ENDLESS ENTERTAINMENT</h4>
        <p>do unstoppable socialization and rejoice unlimited chatting, uploading, downloading, surfing, streaming, and much more on the double speed internet from 10 mbps to 100 mbps free for one month</p>
        <button>learn More</button>
    </div>
    </div>
    <div className="carousel-item active">
      <img src={slider3} className="w-100" alt="..." />
      <div className="carousel-caption" id='networkslidetText'>
        <h1>Speed for an absolute</h1>
        <h2>gaming experience</h2>
        <p>loking for a consistent internet connectionfor all your gaming needs well look no further, we have exactly what you are looking for!</p>
        <button>learn More</button>
    </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Slider
