import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './ReqForm.css';


const ReqNet4You = () => {
  const [newReq, setnewReq] = useState({
    name:"",
    email:"",
    content:"",
    province:"",
    district:"",
    city:"",
    areaname:"",
    limits:""
  });
  const navigate=useNavigate();

  const InputEvent = (e) =>{
      const {name,value}= e.target;

      setnewReq((PreValue)=>{
        return{
          ...PreValue,
          [name]:value,
        }
      })
  }

  const DataSubmit = async(e) =>{
    e.preventDefault();
  const {name,email,province,city,content,district,areaname,limit} = newReq;
      let data = await fetch(`http://localhost:5000/newrequest`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({name,email,province,city,content,district,areaname,limit})
      });

      data = await data.json();
      console.log(data);
      if(data){
        navigate('/reqmessage');
      }
  }
  return (    

      <div className='requestForm'>
        <h2>Fill Up the Form</h2>
        <input type='text' placeholder='Enter Your Name.....' name='name' value={newReq.name} onChange={InputEvent} />
        <input type='text' placeholder='Enter Your Email.....' onChange={InputEvent} name='email' value={newReq.email} />
        <input type='text' placeholder='Enter Your content.....' onChange={InputEvent} name='content' value={newReq.content} />
        <input type='text' placeholder='Enter Your Province.....' onChange={InputEvent} name='province' value={newReq.province} />
        <input type='text' placeholder='Enter Your District.....' onChange={InputEvent} name='district' value={newReq.district} />
        <input type='text' placeholder='Enter Your City.....' onChange={InputEvent} name='city' value={newReq.city} />
        <input type='text' placeholder='Enter Your Town, Area Name.....' onChange={InputEvent} name='areaname' value={newReq.areaname} />
        <input type='text' placeholder='Enter Your Connect Limits.....' onChange={InputEvent} name='limits' value={newReq.limits} />
        <button type='submit' onClick={DataSubmit}>Submit</button>
    </div>


  )
}

export default ReqNet4You



