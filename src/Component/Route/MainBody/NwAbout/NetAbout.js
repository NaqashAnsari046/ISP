import React from 'react';
import './NetAbout.css';

const NetAbout = (props) => {
    const {title,para,para1,title1,info,imgCmg} = props;
    return (
        <div  id='mainSetAbout'>
         <img src={imgCmg} alt='background' />
                <div id='setTestabot'>
                <div className='col-md-12' id='setCC'>
                <h1>{title}</h1>
                <h1>{title1}</h1>
                <h2>{info}</h2>
                <p>{para}</p>
                <p>{para1}</p>
                </div>
                </div>
        </div>
    )
}

export default NetAbout
