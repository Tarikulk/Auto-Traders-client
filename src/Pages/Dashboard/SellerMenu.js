import React from 'react';
import { NavLink } from 'react-router-dom';

const SellerMenu = () => {
    return (
        <>
      <NavLink
        to='/dashboard/addAProducts'
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
          }`
        }
      >

        <span className='mx-4 font-medium'>Add A Products</span>
      </NavLink> 

      <NavLink
        to='myProducts'
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
          }`
        }
      >

        <span className='mx-4 font-medium'>My Products</span>
      </NavLink> 
    </>
    );
};

export default SellerMenu;