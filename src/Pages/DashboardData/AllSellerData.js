import React from 'react';

const AllSellerData = ({seller, handleDelete, handleVerify}) => {

    const {email, name, _id} = seller;  
    
    return (
        <div className='mt-10'>
           <div className="card w-96 bg-indigo-600 shadow-xl">
  <div className="card-body">
    <h2 className="card-title text-white"> Name: {name?.name}</h2>
    <p className='text-white'>Email: {email} </p>
    <div className="card-actions flex justify-between">
      <button onClick={() => handleDelete(_id)} className="btn glass text-black">Delete</button> 
        {
        seller ? seller.status !== "verify" && <button onClick={() =>handleVerify(_id)} className="btn glass text-black">Verify</button>  : <span className='btn btn-disabled glass text-black'>Verified</span>
        } 
    </div>
  </div>
</div>
        </div>
    );
};

export default AllSellerData;
