import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import Advertise from '../Home/Advertise/Advertise';
import SellerAllProducts from './SellerAllProducts';

const MyProducts = () => {

    const {user} = useContext(AuthContext);

    const [sellerProducts, setSellerProducts] = useState([]);
    
    useEffect(() =>{
     fetch(`http://localhost:5000/categoriesCar?email=${user?.email}`)
     .then(res => res.json())
     .then(data => {
        setSellerProducts(data)
     })
    }, [user])
     
 
    return (
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-14 mx-10 my-16'>
           {
             sellerProducts.map(products => <SellerAllProducts
             key={products._id}
             products={products}
             sellerProducts={sellerProducts}
             setSellerProducts={setSellerProducts}
             ></SellerAllProducts>)
           }
        </div>
    );
};

export default MyProducts;