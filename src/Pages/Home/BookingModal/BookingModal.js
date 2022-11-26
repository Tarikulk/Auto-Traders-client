import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider';

const BookingModal = ({categories, setBookingsCar}) => {

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const carName = form.carName.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const booking = {
           email,
           name,
           carName,
           price,
           phone,
           location
        }

        fetch('http://localhost:5000/bookings', {
            method:"POST",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                setBookingsCar(null)
                toast.success("booking confirmed")
            } 
        })
        .catch(error => {
            toast.error(error.message)
        });

    }


    const {user} = useContext(AuthContext); 
    const {name, price} = categories;

    return (
        <div> 
<input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
     <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 mt-10'>
     <input type="text" name='email'  defaultValue={user?.email} readOnly className="input input-bordered w-full" />
     <input type="text" name='name'  defaultValue={user?.displayName} readOnly className="input input-bordered w-full" />
     <input type="text" name='carName'  defaultValue={name} className="input input-bordered w-full" />
     <input type="text" name='price' defaultValue={price.price}  className="input input-bordered w-full" />
     <input type="text" name='phone' placeholder="your phone number" className="input input-bordered w-full" />
     <input type="text" name='location' placeholder="product receive location" className="input input-bordered w-full" />
     <button type="submit" className='btn glass w-full text-white font-bold text-black'>Confirm Booking</button>
     </form>
  </div>
</div>
        </div>
    );
};

export default BookingModal;