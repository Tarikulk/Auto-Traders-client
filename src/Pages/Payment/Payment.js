import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {

    const data = useLoaderData();
    console.log(data)

    return (
        <div>
            <h1>hello</h1>
        </div>
    );
};

export default Payment;