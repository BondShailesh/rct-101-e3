import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {

  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate("/login");
  }
  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link" to="/">Home</Link>
      <span data-cy="navbar-cart-items-count">{/* count here */}</span>
      <button data-cy="navbar-login-logout-button" onClick={handleClick}>login</button>
    </div>
  );
};

export default Navbar;
