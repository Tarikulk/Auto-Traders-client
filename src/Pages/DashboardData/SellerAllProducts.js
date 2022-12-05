import React from 'react';
import toast from 'react-hot-toast';

const SellerAllProducts = ({products, sellerProducts, setSellerProducts}) => {

	console.log(products)

    const {condition, image, name, originalPrice, price, sellerName, time, yearOfUsed, _id, description} = products;

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
	
	const handleAdvertise = (id) =>{
		
		const advertiseItem = {
			name,
			description,
			price,
			image
		}

		fetch(`http://localhost:5000/advertise`, {
			method:"POST",
			headers:{
				"content-type": "application/json",
				authorization : `bearer ${localStorage.getItem("autoTraders")}`,
			},
			body: JSON.stringify(advertiseItem)
		})
		.then(res => res.json())
		.then(data => {
			if(data.acknowledged){
                toast.success("Product advertised successfully")
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
		   verified
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
		    <button onClick={handleAdvertise} className='btn glass advertise'>Advertise</button>
           </div>
           </div>
	</div>
</div> 
        </div>
    );
};

export default SellerAllProducts;