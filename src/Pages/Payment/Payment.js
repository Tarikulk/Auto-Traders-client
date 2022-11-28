import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';
import Loading from '../../Components/Loading/Loading';

const stripePromise = loadStripe("pk_test_51M6AlSHqnjOrsof30vWxBcE9yIH46PwWkUMAz6xuwVl62UAg8kEeLCYgaRmrdAMpTWXydHvl4kICE7JqZu7Db7i600aqeNLTNX");

const Payment = () => {
    
    const data = useLoaderData();
    const navigation = useNavigation();
    if(navigation.state === "loading"){
        return <Loading></Loading>
    }

    return (
        <div>
        <div className='grid gap-2'>
            <h1 className='text-2xl'>Name :{data.name}</h1>
            <h1 className='text-xl'>Car Name : {data.carName}</h1>
            <p>Price : {data.price}</p>
        </div>
            <div className='w-96 my-6'>
    <Elements stripe={stripePromise}>
      <CheckOutForm 
      data = {data}
       />
    </Elements>
        </div>
        </div>
    );
};

export default Payment;