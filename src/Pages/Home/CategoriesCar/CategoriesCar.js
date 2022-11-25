import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Categories from './Categories';

const CategoriesCar = () => {

    const categoriesCar = useLoaderData();

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mx-10 my-16'>
           {
            categoriesCar.map(categories => <Categories
            key={categories._id}
            categories={categories}
            ></Categories>)
           }
        </div>
    );
};

export default CategoriesCar;