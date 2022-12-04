import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";
import "./Navbar.css";

const Navbar = () => {

  const {user, logout} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () =>{
    logout()
    .then(() =>{
      navigate("/signIn")
    })
    .catch(error => {
      toast.error(error)
      console.log(error)
    })
  }
 
  const menuItems = <>
        <li><Link to="/">Home</Link></li> 
        <li><Link to="/blog">Blog</Link></li>
       { user?.uid ? 
        <>
        <li><Link to="/dashboard">DashBoard</Link></li>
        <li><button onClick={handleLogOut} to="/login">Sign Out</button></li>
        </>
        :
        <li><Link to="/signIn">Login</Link></li>

        }
  </>

  return ( 
  <div className="navbar flex justify-between  text-white bg-indigo-800">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-indigo-800 rounded-box w-52">
        {menuItems}
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost normal-case text-xl">Auto Traders</Link>
  </div>
  <div className="navbar-center hidden lg:flex justify-between">
    <ul className="menu menu-horizontal p-0">
      {menuItems}
    </ul>
  </div> 
  <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
  </label>
</div> 
  );
};

export default Navbar;
