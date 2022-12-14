import { useQuery } from '@tanstack/react-query';
import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const BuyersHome = () => {

    const {user} = useContext(AuthContext); 


    const {data : bookings = [], refetch} = useQuery({
      queryKey: ["bookings", user?.email], 
      queryFn: async() =>{
        const res = await fetch(`https://resale-web-server-tarikulk.vercel.app/bookings?email=${user?.email}`, {
          headers: {
            authorization : `bearer ${localStorage.getItem("autoTraders")}`
          }
        })
        const data = await res.json()
        return data;
      }
    })  

    refetch();

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
        bookings?.map(booking => <tr key={booking._id}> 
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
            <td> 
                {
                  booking.price &&  !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}>
                  <button className="btn glass text-black btn-xs">
                    pay
                  </button>
                  </Link>
                } 
                {
                  booking.price && booking.paid && <span className='text-green-500'>Paid</span>
                }
            </td>
          </tr> )
      }
    </tbody>  
  </table>
</div>
    );
};

export default BuyersHome;