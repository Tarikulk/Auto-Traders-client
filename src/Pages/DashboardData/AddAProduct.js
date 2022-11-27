import React  from 'react'; 
import toast from 'react-hot-toast';

const AddAProduct = () => {
 
	 const handleSubmit = event =>{
		
		event.preventDefault()
		const form = event.target;
		const name = form.name.value;
		const originalPrice = form.originalPrice.value;
		const price = form.price.value;
		const condition = form.price.value;
		const phone = form.phone.value;
		const location = form.location.value;
		const category_id = form.category_id.value;
		const purchase = form.purchase.value;
		const time = form.time.value;
		const sellerName = form.sellerName.value;
		const image = form.image.files[0];
		const description = form.description.value;



		const formData = new FormData();
		formData.append("image", image)
		const url = `https://api.imgbb.com/1/upload?key=e8b14febb369d80ce9e343791ec92636`
		fetch(url, {
			method:"POST",
			body:formData
		})
		.then(res => res.json())
		.then(imgData =>{

			if(imgData.success){
				const carCategoriesInfo = {
					name,
					originalPrice,
					price,
					condition,
					phone,
					location, 
					category_id,
					purchase,
					time,
					sellerName,
					image: imgData.data.display_url,
					description
				}
				fetch("http://localhost:5000/categoriesCar", {
				   method:"POST",
				   headers:{
					"content-type":"application/json"
				   },
				   body: JSON.stringify(carCategoriesInfo)
				})
				.then(res => res.json())
				.then(data => {
					toast.success("Product Added Successful")
					form.reset()
					console.log(data)
				})
				.catch(error => {
					toast.error(error)
					console.error(error)
				})
			}
 

		}) 
	 }

    return (
        <div>
            <section className="p-6 bg-indigo-800 dark:text-gray-50 rounded-lg">



	<form onSubmit={handleSubmit} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"> 
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="username" className="text-sm">Products Name</label>
					<input id="username" type="text" name='name' placeholder="products name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-2" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="originalPrice" className="text-sm">Original Price</label>
					<input id="originalPrice" type="text" name='originalPrice' placeholder="Original Price" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-2" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="price" className="text-sm">Price</label>
					<input id="price" type="text" name='price' placeholder="price" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-2" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="condition" className="text-sm">Condition</label>
					<input id="condition" type="text" name='condition' placeholder="condition" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-2" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="phone" className="text-sm">Mobile Number</label>
					<input id="phone" type="text" name='phone' placeholder="phone" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-2" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="location" className="text-sm">Location</label>
					<input id="location" type="text" name='location' placeholder="location" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-2" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="category" className="text-sm">Brand</label>
					<input id="category" type="text" name='category' placeholder="product Category" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-2" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="categoryId" className="text-sm">Category Id</label>
					<input id="categoryId" type="text" name='category_id' placeholder="category id" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-2" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="purchase" className="text-sm">Year Of Purchase</label>
					<input id="purchase" type="text" name='purchase' placeholder="year" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-2" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="time" className="text-sm">Posting Time</label>
					<input id="time" type="date" name='time' placeholder="time" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-2" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="sellerName" className="text-sm">Seller Name</label>
					<input id="sellerName" type="text" name='sellerName' placeholder="sellerName" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-2" />
				</div> 
				<div className='ml-8'>
              <label htmlFor='image' className='block mb-2 text-sm'>
                Select Car Image:
              </label>
              <input
                required
                type='file'
                id='image'
                name='image'
                accept='image/*'
              />
            </div>
				<div className="col-span-full">
					<label htmlFor="description" className="text-sm">Description</label>
					<textarea id="description" name='description' placeholder="description" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-2"></textarea>
				</div>
				<div className="col-span-full">
					<div className="flex items-center justify-center"> 
						<button type="submit" className="px-4 py-2 border rounded-md dark:border-gray-100">Submit</button>
					</div>
				</div>
			</div>
	</form>
</section>
        </div>
    );
};

export default AddAProduct;