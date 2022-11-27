import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MyProducts = () => {

    const categoriesCar = useLoaderData();
    console.log(categoriesCar)
 
    return (
        <div>
           
        </div>
    );
};

export default MyProducts;