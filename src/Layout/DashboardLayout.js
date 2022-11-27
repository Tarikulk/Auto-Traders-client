import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { getRole } from '../Api/user';
import Loading from '../Components/Loading/Loading';
import { AuthContext } from '../Contexts/AuthProvider';
import Sidebar from '../Pages/Dashboard/Sidebar';
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
            <div className='md:flex relative min-h-screen'>
            {
                loading ? (
                    <Loading></Loading>
                ): (
                    <>
                    <Sidebar usersRole={usersRole} className="bg-black"></Sidebar>
                    <div className='flex-1 w-full '>
                    <div className='p-5'>
                    <Outlet />
                    </div>
                    </div>
                    </>
                )
            }
            </div>
        </div>
    );
};

export default DashboardLayout;