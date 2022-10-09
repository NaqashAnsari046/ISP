import React from 'react';
import img1 from '../../../img/cImg/girl1.png';
import img2 from '../../../img/slider/second1.jpg';
import img3 from '../../../img/cImg/img23.jpg';
import {DataHoldS2,DataHoldS3} from './DataHoldS';
import './Slider.css';
import SilderData from './SilderData';

const Slider = () => {
  

  return (
    <div className='sliderSet'>
      <div id="carouselExampleCaptions" className="container carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-current="true" aria-label="Slide 2" className="active"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" ></button>
        </div>
        <div className="carousel-inner ">
          <div className="carousel-item">
            <img src={img1} className="w-100" alt="..." />
            <div className="carousel-caption d-md-block" id='setSlider'>
              <h1>HIGH SPEED CONNECTIVITY</h1>
              <p>Connect Communications delivers the best, fastest and most reliable internet service at all time and you can choose from wide range of available speeds.</p>
            </div>
          </div>
          <div className="carousel-item active">
            <img src={img2} className="w-100" alt="..." />
             <SilderData data={DataHoldS2} />
          </div>
          <div className="carousel-item">
            <img src={img3} className="w-100" alt="..." />
             <SilderData data={DataHoldS3} />
          </div>


        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Slider;
