import React from 'react';
import AdminMenu from './AdminMenu';
import BuyerMenu from './BuyerMenu';
import SellerMenu from './SellerMenu';

const Sidebar = ({usersRole}) => {
    const {role} = usersRole;
    console.log(usersRole)
    return (
        <div>
            <div className="drawer drawer-mobile">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 text-base-content">  
    <nav>
              {role && role !== 'buyer' ? (
                <>{role === 'admin' ? <AdminMenu /> : <SellerMenu />} </>
              ) : (
                <BuyerMenu />
              )}
            </nav>
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default Sidebar;