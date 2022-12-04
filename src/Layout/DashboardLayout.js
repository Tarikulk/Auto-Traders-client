import React, { useContext, useEffect, useState } from 'react';
import {Outlet } from 'react-router-dom';
import { getRole } from '../Api/user';
import { AuthContext } from '../Contexts/AuthProvider';
import AdminMenu from '../Pages/Dashboard/AdminMenu';
import BuyerMenu from '../Pages/Dashboard/BuyerMenu';
import SellerMenu from '../Pages/Dashboard/SellerMenu';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {

    const {user} = useContext(AuthContext)
    const [usersRole, setUsersRole] = useState(null); 
    const [loading, setLoading] = useState(true);
     
    useEffect(() =>{
        setLoading(true)
        getRole(user?.email)
        .then(data => {
            setUsersRole(data)
            setLoading(false)
        })
    }, [user]) 


    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
            
            </div> 
            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                   {
                    usersRole && usersRole === "buyer" ?
                    <li><BuyerMenu></BuyerMenu></li>
                    : 
                    <div>
                       {
                        usersRole && usersRole === "seller" ?
                        <>
                        <li><BuyerMenu></BuyerMenu></li>
                        <li><SellerMenu></SellerMenu></li>
                        </>
                        :
                        <>
                        <li><BuyerMenu></BuyerMenu></li>
                        <li><AdminMenu></AdminMenu></li>
                        </>
                       }
                    </div>  
                   }
                </ul>
               </div>
             </div> 
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;
 