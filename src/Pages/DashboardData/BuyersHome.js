import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { getAllBookingByEmail } from '../../Api/booking';
import { AuthContext } from '../../Contexts/AuthProvider';

const BuyersHome = () => {

    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    console.log(bookings)

    useEffect(() =>{
        getAllBookingByEmail(user?.email)
        .then(data => {
         setBookings(data)
        })
        .catch(err => {
            toast.error(err)
        })
    }, [user])

    return (
        <div className="overflow-x-auto w-full">
  <table className="table w-full">
    <thead>
      <tr> 
        <th>User</th>
        <th>Title</th>
        <th>Price</th>
        <th>Pay</th>
      </tr>
    </thead>
    <tbody>
      {
        bookings.map(booking => <tr key={booking._id}> 
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={booking.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                </div>
              </div>
            </td>
            <td>
               {booking.carName}
              <br/>
            </td>
            <td>{booking.price}</td>
            <th>
              <button className="btn glass text-black btn-xs">Pay</button>
            </th>
          </tr> )
      }
    </tbody>  
  </table>
</div>
    );
};

export default BuyersHome;