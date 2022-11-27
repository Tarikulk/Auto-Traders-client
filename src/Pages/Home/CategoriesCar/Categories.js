import React from 'react';

const Categories = ({categories, setBookingsCar}) => { 

    const {author, name, price, YearsOfUse} = categories; 

    return (
        <div>
            <div className="rounded-md shadow-md sm:w-96 bg-indigo-800 dark:text-gray-100">
	<div className="flex items-center justify-between p-3">
		<div className="flex items-center space-x-2">
			<img src={author.sellerImg} alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700" />
			<div className="-space-y-1">
				<h2 className="text-sm font-semibold leading-none">{author.name}</h2>
			</div>
		</div>
		<button title="Open options" type="button">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
				<path d="M256,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,48Z"></path>
				<path d="M256,368a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,368Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,464Z"></path>
				<path d="M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z"></path>
			</svg>
		</button>
	</div>
	<img src={author.img} alt="" className="object-cover object-center w-full h-72 dark:bg-gray-500" />
	<div className="p-3">
		<div className="flex items-center justify-between">
			<div className="flex items-center space-x-3">
				 <h1 className='text-xl font-bold'>{name}</h1>
				  
			</div>
			<h1>Condition: {author.condition}</h1>
		</div>
		<div className="flex items-center justify-between py-3">
		<div className="flex items-center">
			<h1>Original Price: ${price.originalPrice}</h1>
		</div>
		 <h1>Resale: ${price.price}</h1>
	</div>
    <div className="flex items-center justify-between py-3">
		<div className="flex items-center">
			<h1> Used: {YearsOfUse} years</h1>
		</div>
		 <h1> Posted:</h1>
	</div>
           <div className='w-full text-center'>
		   <label onClick={() => setBookingsCar(categories)} htmlFor="booking-modal" className="btn glass w-full text-white font-bold">Book Car</label>
           </div>
	</div>
</div>
        </div>
    );
};

export default Categories;