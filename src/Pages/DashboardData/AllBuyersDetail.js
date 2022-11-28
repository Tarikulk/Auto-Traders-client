import React from 'react';

const AllBuyersDetail = ({buyers, handleDelete}) => {

    const {email, name, _id} = buyers 

    return (
        <div className='mt-10'>
        <div className="card w-96 bg-indigo-600 shadow-xl">
<div className="card-body">
 <h2 className="card-title text-white">Name: {name?.name}</h2>
 <p className='text-white'>Email: {email} </p>
 <div className="card-actions justify-end">
   <button onClick={() =>handleDelete(_id)} className="btn glass text-black">Delete</button>
 </div>
</div>
</div>
     </div>
    );
};

export default AllBuyersDetail;