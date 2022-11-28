import React from 'react';
import toast from 'react-hot-toast';

const SellerAllProducts = ({products, sellerProducts, setSellerProducts}) => {

    const {condition, image, name, originalPrice, price, sellerName, time, yearOfUsed, _id} = products

	const handleDelete = (id) =>{
		fetch(`http://localhost:5000/categoriesCar/${_id}`, {
			method:"DELETE"
		})
		.then(res => res.json())
		.then(data => {
			if(data.deletedCount > 0 ){
				toast.success(`${name} deleted successfully`)
				const remaining = sellerProducts.filter(products => products._id !== id)
				setSellerProducts(remaining)
			  }
		})

	}

    return (
        <div>
            <div className="rounded-md shadow-md sm:w-96 bg-indigo-800 dark:text-gray-100">
	<div className="flex items-center justify-between p-3">
		<div className="flex items-center space-x-2">
			<img src="https://i.ibb.co/XS557Pk/274467547-1111767866283383-7054671178087598912-n-2.jpg" alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700" />
			<div className="-space-y-1">
				<h2 className="text-sm font-semibold leading-none">{sellerName}</h2>
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
	<img src={image} alt="" className="object-cover object-center w-full h-72 dark:bg-gray-500" />
	<div className="p-3">
		<div className="flex items-center justify-between">
			<div className="flex items-center space-x-3">
				 <h1 className='text-xl font-bold'>{name}</h1>
				  
			</div>
			<h1>Condition: {condition}</h1>
		</div>
		<div className="flex items-center justify-between py-3">
		<div className="flex items-center">
			<h1>Original Price: ${originalPrice}</h1>
		</div>
		 <h1>Resale: ${price}</h1>
	</div>
    <div className="flex items-center justify-between py-3">
		<div className="flex items-center">
			<h1> Used: {yearOfUsed} years</h1>
		</div>
		 <h1> Posted: {time}</h1>
	</div>
           <div className='flex justify-between'>
            <div>
               <button onClick={() =>handleDelete(_id)} className='btn glass'>Delete</button>
            </div>
            <div>
		    <button  className='btn glass advertise'>Advertise</button>
           </div>
           </div>
	</div>
</div> 
        </div>
    );
};

export default SellerAllProducts;