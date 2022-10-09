import React, { useEffect,useState } from "react";

const SilderData = (props) => {
  const { data } = props;

  const [CardDataFIB, setCardDataFIB] = useState([]);
  
  useEffect(() => {
    CardDataF();
  },[]);


  const CardDataF = async () => {
    let result = await fetch("http://localhost:5000/mainpagedata");
    result = await result.json();
    for(let i=0; i<result.length; i++){
      let data =result[i].silderdata;
      for(let j=0; j<data.length; j++){
        console.log(data[1]);
        let Rresult = data
        setCardDataFIB(Rresult);
        
        break;
      }
      break;
    }

  };
  

  return (
    <div>
      {data.map((item, ind) => {
        return (
          <div className="carousel-caption d-none d-md-block" id="logSet1" key={ind}>
            <h1>{item.title}</h1>
            <p>{item.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SilderData;
