import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import Categories from './Categories';

const CategoriesCar = () => {

    const [bookingsCar, setBookingsCar] = useState("")
    const categoriesCar = useLoaderData();
    console.log(categoriesCar)

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mx-10 my-16'>
           {
            categoriesCar.map(categories => <Categories
            key={categories._id}
            categories={categories}
            setBookingsCar={setBookingsCar}
            ></Categories>)
           }
           {
             bookingsCar && categoriesCar.map(categories => <BookingModal
                key={categories._id}
                categories={categories}
                bookingsCar={bookingsCar}
                setBookingsCar={setBookingsCar}
                ></BookingModal>)
           }
        </div>
    );
};

export default CategoriesCar;