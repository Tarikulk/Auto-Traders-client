import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Loading from '../Components/Loading/Loading';
import Sidebar from '../Pages/Dashboard/Sidebar';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {

    const [loading, setLoading] = useState(true);
    const [usersRole, setUsersRole] = useState(null); 

    useEffect(() =>{
        setLoading(true)
        fetch("http://localhost:5000/user")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setUsersRole(data)
            setLoading(false)
        })
    }, [])

    return (
        <div>
            <Navbar></Navbar>
            {
                loading ? (
                    <Loading></Loading>
                ): (
                    <>
                    <Sidebar usersRole={usersRole}></Sidebar>
                    <div className='flex-1 md:ml-64'>
                    <div className='p-5'>
                    <Outlet />
                    </div>
                    </div>
                    </>
                )
            }
        </div>
    );
};

export default DashboardLayout;