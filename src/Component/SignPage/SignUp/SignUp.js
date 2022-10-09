import React, { useEffect, useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";
import '../SignUp/SignUp.css'

const SignUp = () => {
  const navigate=useNavigate()
  useEffect(()=>{
    DataSub();
  })
  const [Reg, setReg] = useState({
    name: "",
    email: "",
    password: "",
    city: ""
  });

  const inputEvent = (e) => {
    const { name, value } = e.target;

    setReg((PreValue) => {
      return {
        ...PreValue,
        [name]: value,
      };
    });
  };

  const DataSub = async (e) => {
    e.preventDefault();
    const { name, email, password, city } = Reg;

    let result = await fetch(`http://localhost:5000/userReg`, {
      method: "POST",
      body: JSON.stringify({ name, email, password, city }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    if(result){
      navigate('/');
    }
    console.log(result);
  };

  return (
    <div className="SginageSet">
      <form>
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="Enter Your Name....."
          autoComplete="off"
          name="name"
          value={Reg.name}
          onChange={inputEvent}
        />
        <input
          type="text"
          placeholder="Enter Your Email....."
          autoComplete="off"
          name="email"
          value={Reg.email}
          onChange={inputEvent}
        />
        <input
          type="text"
          placeholder="Enter Your Password....."
          autoComplete="off"
          name="password"
          value={Reg.password}
          onChange={inputEvent}
        />
        <input
          type="text"
          placeholder="Enter Your City....."
          autoComplete="off"
          name="city"
          value={Reg.city}
          onChange={inputEvent}
        />       

        <button type="submit" onClick={DataSub}>
          Submit
        </button>
        <NavLink to="/signin" id="SignUP">
          Sign In
        </NavLink>
      </form>
    </div>
  );
};

export default SignUp;

// <select className="form-select" name="city" id="specificSizeSelect">
//   <option defaultValue>City...</option>
//   <option value={Reg.city} onChange={inputEvent}>
//     lhr
//   </option>
//   <option value="2">mdk</option>
//   <option value="3">nrw</option>
// </select>
