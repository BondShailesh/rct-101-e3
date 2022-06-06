import React from "react";
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
const RequiredAuth = ({ children }) => {
const { login0 } = useContext(AuthContext);
 if(!login0){
   return <Navigate to ="/login" />
 }else {
  return children;
 }
 
};

export default RequiredAuth;
