import React from "react";
import { Link } from "react-router-dom";
import './Header.css';
const Header = () => {
  return (
    <div className="navbar bg-info">
      <div className="navbar-start">
      <div className="w-10">
          <img className='rounded-full' src="https://thumbs.dreamstime.com/b/world-travel-logo-vector-drawing-represents-design-40702766.jpg" alt=" "/>
        </div>
        <h2 className="btn btn-ghost normal-case text-3xl text-amber-500">
          Trusted-Emmigration
        </h2>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal"> 
           <Link to='/'>Home</Link>
           <Link to='/services'>Our Services</Link>
           <Link to='/about'>About Us</Link>
           <Link to='/blog'>Blog</Link>
           <Link to='/login'>Login</Link>
           <Link to='/signup'>SignUp</Link>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Get started</a>
      </div>
    </div>
  );
};

export default Header;
