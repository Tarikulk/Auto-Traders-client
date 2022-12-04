import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import AllBuyersDetail from './AllBuyersDetail';

const AllBuyers = () => {

    const {data : allBuyers = [], refetch} = useQuery({
        queryKey: ["allBuyers"],
        queryFn: async() =>{
         const res = await fetch("http://localhost:5000/allBuyers",{
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
            authorization: `bearer ${localStorage.getItem("autoTraders")}`
         }
        })
        .then(res => res.json())
        .then(data => {
         if(data.deletedCount > 0 ){
             toast.success(`${allBuyers.email} deleted successfully`)
             refetch()
           }
        })
     }

    return (
        <div>
            {
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10'>
                {
                    allBuyers.map(buyers => <AllBuyersDetail
                    key={buyers._id}
                    buyers={buyers} 
                    handleDelete={handleDelete}
                    ></AllBuyersDetail>)
                }
            </div>
            }
        </div>
    );
};

export default AllBuyers;