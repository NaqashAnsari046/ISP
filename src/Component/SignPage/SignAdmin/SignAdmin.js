import React, {useState} from 'react';
import '../SignIn/SignIn.css';
import {NavLink,useNavigate} from 'react-router-dom'

const SignAdmin = () => {

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
      let result = await fetch(`http://localhost:5000/adminLogin`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({email,password})
      });
      result = await result.json();
       localStorage.setItem('admin',JSON.stringify(result));
       navigate('/adminbar');
      console.log(result);
  }
 
  return (
    <div className='SginageSet'>
      <form>
        <h2>Manage ISP</h2>
        <input type='text' placeholder='Enter Your Email.....' name='email' value={login.email} onChange={InputEvents} />
        <input type='text' placeholder='Enter Your Email.....' name='password' value={login.password} onChange={InputEvents} />
        <button type='submit' onClick={DataSubmit}>Submit</button>
         <NavLink to='/home' id='SignUP'>Back Home</NavLink>
      </form>
    </div>
  );
}

export default SignAdmin;
