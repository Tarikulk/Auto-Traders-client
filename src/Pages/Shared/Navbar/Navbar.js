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
      navigate("signIn")
    })
    .catch(error => {
      toast.error(error)
      console.log(error)
    })
  }

  return (
    <div>
      <header className="lg:px-16 px-8 bg-indigo-700 shadow-md py-4 md:py-0">
        <div className="container mx-auto flex flex-wrap items-center">
          <div className="flex-1 flex justify-between items-center">
            <Link
              to="/"
              className="text-xl font-semibold text-green-100 hover:text-white tracking-normal"
            >
              Auto Trader
            </Link>
          </div>

          <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
            <svg
              className="fill-current text-gray-300 hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            > 
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </label>
          <input className="hidden" type="checkbox" id="menu-toggle" />

          <div
            className="hidden md:flex md:items-center md:w-auto w-full"
            id="menu"
          >
              <ul className="md:flex items-center justify-between text-base pt-4 md:pt-0">
                <li>
                  <Link
                   to="/"
                    className="md:px-4 py-2 md:py-4 px-0 block text-green-100 hover:text-white md:hover:bg-indigo-800"
                    href=""
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="md:px-4 py-2 md:py-4 px-0 block text-green-100 hover:text-white md:hover:bg-indigo-800"
                    href=""
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    className="md:px-4 py-2 md:py-4 px-0 block text-green-100 hover:text-white md:hover:bg-indigo-800"
                    href=""
                  >
                    Contact Us
                  </Link>
                </li>
                {
                  user?.uid ?  
                  <li className="dropdown inline-block relative w-full md:w-auto md:mb-0 mb-2">
                  <div className="dropdown dropdown-end">
                    <label
                      tabIndex={0}
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-10 rounded-full">
                        <img src={user?.photoURL} alt="" />
                      </div>
                    </label>
                    <ul
                      tabIndex={0}
                      className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <Link to="/dashboard" className="justify-between">
                          Dashboard
                        </Link>
                      </li> 
                      <li>
                        <button onClick={handleLogOut}>Logout</button>
                      </li>
                    </ul>
                  </div>
                </li> 
                :
                  <li>
                  <Link
                    to="signIn"
                    className="md:px-4 py-2 md:py-4 px-0 block text-green-100 hover:text-white md:hover:bg-indigo-800"
                    href=""
                  >
                    Sing In
                  </Link>
                </li>
               
                }
              </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
