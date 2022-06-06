import React from "react";
import { useContext } from "react";
import Products from "../components/Products/Products";
import { AuthContext } from "../context/AuthContext";
const Home = () => {
  const {login0} = useContext(AuthContext);
  // console.log(login0);
  return <div>
    
    </div>;
};

export default Home;
