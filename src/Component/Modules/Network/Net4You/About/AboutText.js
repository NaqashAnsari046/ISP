import React from 'react'
import './About.css';
import about from "../../../../img/Net4You/main/product/woman1.jpg";


const AboutText = (props) => {
  const {title,head,text,ftext} = props;
  return (
    <div className="aboutNetwork">
    <img src={about} alt="about" />
    <div className="textNetwork">
      <h1>{title}</h1>
      <h2>{head}</h2>
      <p>{text}</p>
      <h3>{ftext}</h3>
    </div>
  </div>
  )
}

export default AboutText
