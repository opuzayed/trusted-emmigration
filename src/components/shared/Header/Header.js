import React from "react";
import { Link } from "react-router-dom";
import './Header.css';
const Header = () => {
  return (
    <div className="navbar bg-info">
      <div className="navbar-start">
      <div className="w-10 rounded-full">
          <img src="https://thumbs.dreamstime.com/b/world-travel-logo-vector-drawing-represents-design-40702766.jpg" alt=" "/>
        </div>
        <h2 className="btn btn-ghost normal-case text-3xl text-amber-500">
          Trusted-Immigration
        </h2>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal"> 
           <Link to='/home'>Home</Link>
           <Link to='/home'>Our Services</Link>
           <Link to='/home'></Link>
           <Link to='/home'>Blog</Link>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Get started</a>
      </div>
    </div>
  );
};

export default Header;
