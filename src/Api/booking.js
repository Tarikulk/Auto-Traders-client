export const getAllBookingByEmail = async email => {
    const url = `http://localhost:5000/bookings/${email}`
    const response = await fetch(url);
    const data = await response.json();
    return data;
}