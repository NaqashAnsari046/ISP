import React, { useEffect, useState } from "react";
import { Navigate, NavLink, useNavigate,useParams } from "react-router-dom";
import "./LimitCard.css";
const UpdateCardLimit = () => {
    const params = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        CardData();
      }, []);
    
  const [update, setupdate] = useState({
    price:"",
    month:'',
    limit: "",
    mbps: "",
    price1: "",
    time: "",
    con: "",
    tax: "",
    btn: "",
    link: "",
  });

  const CardData = async () => {
    console.log(params);
    let result = await fetch(`http://localhost:5000/cardlimitdata`);
    result = await result.json();
    let txt;
    for(var i=0; i<result.length; i++){
        txt = result[i]
    }
    console.log('hello',txt);
    setupdate(txt);
  };

  const updatadata = async() => {
    const {price,price1,month,limit,mbps,time,con,tax,btn} = update;
     let data = await fetch(`http://localhost:5000/cardupdate/${params.id}`,{
        method:"Put",
        body:JSON.stringify({price,price1,month,limit,mbps,time,con,tax,btn}),
        headers:{
            "Content-Type":"application/json"
        }
     });
     data = await data.json();
     let txt;
     for(var i=0; i<data.length; i++){
        txt = data[i].limit;
     }
     console.log('innher',data);
     if(data){
        navigate('/limitcarddata');
     }
  };

  const inputEvent = (e) =>{
        const {name,value} = e.target;
        setupdate((preValue)=>{
            return{
                ...preValue,
                [name]:value
            }
        })
  }

  return (
    <div className="setimit">
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder='enter Your price'
        autoComplete="off"
        value={update.price}
        onChange={inputEvent}
      />
      <input
        type="text"
        placeholder="Enter Your Email....."
        autoComplete="off"
        name="month"
        value={update.month}
        onChange={inputEvent}
      />
      <input
        type="text"
        placeholder="Enter Your Password....."
        autoComplete="off"
        name="limit"
        value={update.limit}
        onChange={inputEvent}
      />
      <input
        type="text"
        placeholder="Enter Your City....."
        autoComplete="off"
        name="mbps"
        value={update.mbps}
        onChange={inputEvent}
      />
      <input
        type="text"
        placeholder="Enter Your Name....."
        autoComplete="off"
        name="price1"
        value={update.price1}
        onChange={inputEvent}
      />
      <input
        type="text"
        placeholder="Enter Your Email....."
        autoComplete="off"
        name="time"
        value={update.time}
        onChange={inputEvent}
      />
      <input
        type="text"
        placeholder="Enter Your Password....."
        autoComplete="off"
        name="con"
        value={update.con}
        onChange={inputEvent}
      />
      <input
        type="text"
        placeholder="Enter Your City....."
        autoComplete="off"
        name="tax"
        value={update.tax}
        onChange={inputEvent}
      />{" "}
      <input
        type="text"
        placeholder="Enter Your Name....."
        autoComplete="off"
        name="btn"
        value={update.btn}
        onChange={inputEvent}
      />
     
      <button onClick={updatadata}>Updata</button>
    </div>
  );
};

export default UpdateCardLimit;
