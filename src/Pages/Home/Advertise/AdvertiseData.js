import React from 'react';

const AdvertiseData = ({advertise}) => {

    const {image, name, price, description} = advertise;

    return (
        <div>
            <div className="card card-compact w-96 bg-indigo-700 shadow-xl text-white">
            <figure><img src={image} className="w-full" style={{height:"250px"}} alt="Car" /></figure>
            <div className="card-body">
                <div className='flex justify-between'>
                <h2 className="card-title">Car : {name}</h2>
                <h2 className="card-title">Price: {price}</h2>
                </div>
                <p>{description}</p> 
            </div>
            </div>
        </div>
    );
};

export default AdvertiseData;