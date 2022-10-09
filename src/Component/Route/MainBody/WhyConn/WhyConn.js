import React from 'react';
import './WhyConn.css';
import WhyConnData from './WhyConnData';
import {DataHold1,DataHold2,DataHold3,DataHold4,DataHold5,DataHold6} from './DataHold';

const WhyConn = () => {
  return (
    <div id='setWhy'>
       <div className='container'>
       <h1 id='setHeading'>Why <span>Connect</span></h1>
       <div className='row text-start'>
            <div className='col-md-6 col-lg-6 col-12'>
               <WhyConnData Data={DataHold1} />
            </div>

            <div className='col-md-6 col-lg-6 col-12'>
               <WhyConnData Data={DataHold2} />
            </div>

            <div className='col-md-6 col-lg-6 col-12'>
               <WhyConnData Data={DataHold3} />
            </div>

            <div className='col-md-6 col-lg-6 col-12'>
               <WhyConnData Data={DataHold4} />
            </div>

            <div className='col-md-6 col-lg-6 col-12'>
               <WhyConnData Data={DataHold5} />
            </div>

            <div className='col-md-6 col-lg-6 col-12'>
               <WhyConnData Data={DataHold6} />
            </div>
            
       </div>
       </div>
    </div>
  )
}

export default WhyConn
