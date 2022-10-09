import React, {useState} from 'react';
import './SignIn.css';
import {NavLink,useNavigate} from 'react-router-dom'

const SignIn = () => {

  const navigate = useNavigate();
  const [login, setlogin] = useState({
    email:'',
    password:''
  })

  const InputEvents = (e) =>{
      const {name,value} = e.target;

      setlogin((PreValue)=>{
        return{
          ...PreValue,
          [name]:value 
        }
      })
  }

  const DataSubmit = async(e) =>{
      e.preventDefault();
      const {email,password} = login;
      
      let data = await fetch(`http://localhost:5000/userLogin`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({email,password})
      });
      data = await data.json();
       localStorage.setItem('user',JSON.stringify(data));
       navigate('/');
      console.log(data);
  }
 
  return (
    <div className='SginageSet'>
      <form>
        <h2>Sign In</h2>
        <input type='text' placeholder='Enter Your Email.....' name='email' value={login.email} onChange={InputEvents} />
        <input type='text' placeholder='Enter Your Email.....' name='password' value={login.password} onChange={InputEvents} />
        <button type='submit' onClick={DataSubmit}>Submit</button>
         <NavLink to='/signup' id='SignUP'>Sign Up</NavLink>
      </form>
    </div>
  );
}

export default SignIn;
