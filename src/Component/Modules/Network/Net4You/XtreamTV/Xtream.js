import React from 'react';
import './Xtream.css';

const Xtream = (props) => {
  const {hider,spantext,paratext,realtest,room,para2text,text,para1,para,button,Ximg} = props;
  return (
    <div id='Xtream'>
    <div className="container">
    <div className="row">
      <div className="col-12 col-md-6 col-lg-5" id='XtreamTeext'>
        <h1>{hider}</h1>
        <span>{spantext}</span>
        <p>{paratext}</p>
        <h2>{realtest}</h2>
        <h2>{room}</h2>
        <p>{para2text}</p>
        <h2>{text}</h2>
        <p>{para}</p>
        <p>{para1}</p>
        <button>{button}</button>
      </div>
      <div className="col-12 col-md-6 col-lg-7" id='XtreamTeext'>
        <img src={Ximg} alt='Xtream img' />
      </div>
    </div>
  </div>
    </div>
  )
}

export default Xtream
