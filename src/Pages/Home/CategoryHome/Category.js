import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({category, refetch}) => {
     
    const {image, name, id} = category;

    return (
           <div className="card card-compact w-96 bg-indigo-800 shadow-xl">
  <figure><img src={image} className="w-full" style={{height:"250px"}} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-white">Name: {name}</h2>
    <div className="card-actions justify-end">
      <Link to={`categoriesCar/${id}`}>
      <button className="btn glass text-white font-bold">Explore {name} </button>
      </Link>
    </div>
  </div>
</div>
    );
};

export default Category;