import React from 'react';

const AddAProduct = () => {

	 const handleSubmit = event =>{
		event.preventDefault()
		const form = event.target;
		const name = form.name.value;
		const price = form.price.value;
		const condition = form.price.value;
		const phone = form.phone.value;
		const location = form.location.value;
		const categoryId = form.category_id.value;
		const purchase = form.purchase.value;
		const image = form.image.value;
		const description = form.description.value;

		const formData = new FormData();
		formData.append("image", image)
		const url = `https://api.imgbb.com/1/upload?key=e8b14febb369d80ce9e343791ec92636`
		fetch(url, {
			method:"POST",
			body:formData
		})
		.then(res => res.json())
		.then(data =>{

		})

		console.log(name, price, condition, phone, location, categoryId, purchase, image, description)
	 }

    return (
        <div>
            
        </div>
    );
};

export default AddAProduct;