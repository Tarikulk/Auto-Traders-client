import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import AllSellerData from './AllSellerData';

const AllSeller = () => {

    const {data : allSellers = [], refetch} = useQuery({
       queryKey: ["allSellers"],
       queryFn: async() =>{
        const res = await fetch("https://resale-web-server-tarikulk.vercel.app/allSellers")
        const data = await res.json() 
        return data
       }
    })

    const handleDelete = (id) =>{
       fetch(`https://resale-web-server-tarikulk.vercel.app/allSellers/${id}`, {
        method:"DELETE",
       })
       .then(res => res.json())
       .then(data => {
        if(data.deletedCount > 0 ){
            toast.success(`${allSellers.email} deleted successfully`)
            refetch()
          }
       })
    }

     

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
            {
                allSellers.map(seller => <AllSellerData
                key={seller._id}
                seller={seller} 
                handleDelete={handleDelete}
                ></AllSellerData>)
            }
        </div>
    );
};

export default AllSeller;