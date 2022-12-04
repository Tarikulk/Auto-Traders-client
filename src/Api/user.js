export const getRole = async email =>{
    const url = `http://localhost:5000/user/${email}`;
    const response = await fetch(url, {
        headers:{
            authorization : `bearer ${localStorage.getItem("autoTraders")}`
        }
    });
    const user = await response.json();
    return user?.role
};