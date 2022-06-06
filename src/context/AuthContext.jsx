import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  // const navigate = useNavigate()
  const [ login0 , setLogin ] = useState(false);
   const toggle0 = ()=>{
  setLogin(!login0);  
}
// if(login0){
//   navigate("/")
// }
  return ( 
  <AuthContext.Provider value = {{ login0 , toggle0  }}>{children}</AuthContext.Provider>
  )
};
