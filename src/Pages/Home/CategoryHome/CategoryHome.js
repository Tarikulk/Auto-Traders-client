import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../../Components/Loading/Loading';
import Category from './Category';

const CategoryHome = () => {
 
 
    const {data: categories = [], refetch, isLoading } = useQuery({
         queryKey:["categories"],
         queryFn: async() =>{
            const res = await fetch(`http://localhost:5000/categories`)
            const data = await res.json()
            refetch()
            return data;
         }
    })

    if(isLoading){
        return <Loading></Loading>
    };

    return (
        <div>
            <h1 className='text-center text-3xl font-bold mt-10'>Categories</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-10 my-16 ml-20 md:ml-10 lg:ml-10'>
            {
                categories.map(category => <Category
                key={category._id}
                category={category}
                refetch={refetch}
                ></Category>)
            }
        </div>
        </div>
    );
};

export default CategoryHome;