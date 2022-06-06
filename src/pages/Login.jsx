import axios from "axios";
import React, { useState, useContext } from "react";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("")
  const navigate = useNavigate();
const {login0 , toggle0 } = useContext(AuthContext);
  const handleClick = ()=>{
    axios({
      method: 'post',
      url: 'https://reqres.in/api/login',
      data: {
        email,
        password,
      }
    }).then(()=>{
      toggle0();
      navigate("/")
    }).catch((er)=>{
      console.log(er);
    })
    // console.log(email,password);
}

  return (
    <div>
      <input data-cy="login-email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input data-cy="login-password" value={password} 
      onChange={(e)=>setPassword(e.target.value)}/>
      <button data-cy="login-submit" onClick={handleClick}>Login</button>
    </div>
  );
};

export default Login;
