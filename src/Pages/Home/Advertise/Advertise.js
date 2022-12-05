import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertiseData from './AdvertiseData';

const Advertise = () => {

    const {data : allAdvertise = [], refetch} = useQuery({
		queryKey:["allAdvertise"],
		queryFn: async() =>{
			const res = await fetch("http://localhost:5000/advertise", {
				headers:{
					authorization : `bearer ${localStorage.getItem("autoTraders")}`
				 }
			})
			const data = await res.json()
			return data;
		}
	})


    return (
		<div>
            <h1 className='text-center text-3xl font-bold mt-10'>Advertisement</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-10 my-16 ml-20 md:ml-10 lg:ml-10'>
           {
              allAdvertise.map(advertise => <AdvertiseData
			  key={advertise._id}
			  advertise={advertise}
			  ></AdvertiseData>)
		   }
        </div>
		</div>
    );
};

export default Advertise;





