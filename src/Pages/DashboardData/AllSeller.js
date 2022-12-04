import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import AllSellerData from './AllSellerData';

const AllSeller = () => {

    const {data : allSellers = [], refetch} = useQuery({
       queryKey: ["allSellers"],
       queryFn: async() =>{
        const res = await fetch("http://localhost:5000/allSellers", {
          headers:{
              authorization : `bearer ${localStorage.getItem("autoTraders")}`
          }
        })
        const data = await res.json() 
        return data
       }
    })

    const handleDelete = (id) =>{
       fetch(`http://localhost:5000/allSellers/${id}`, {
        method:"DELETE",
        headers:{
            authorization : `bearer ${localStorage.getItem("autoTraders")}`
        }
       })
       .then(res => res.json())
       .then(data => {
        if(data.deletedCount > 0 ){
            toast.success(`${allSellers.email} deleted successfully`)
            refetch()
          }
       })
    }


    const handleVerify = (id) =>{
        fetch(`http://localhost:5000/user/verify/${id}`, {
          method: "PUT",
          headers:{
            authorization: `bearer ${localStorage.getItem("autoTraders")}`
          }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                toast.success("seller verified successful")
                refetch() 
         }
        })
      }

     

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10'>
            {
                allSellers.map(seller => <AllSellerData
                key={seller._id}
                seller={seller} 
                handleDelete={handleDelete}
                handleVerify={handleVerify}
                ></AllSellerData>)
            }
        </div>
    );
};

export default AllSeller;