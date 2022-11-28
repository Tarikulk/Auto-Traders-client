export const getRole = async email =>{
    const url = `https://resale-web-server-tarikulk.vercel.app/user/${email}`;
    const response = await fetch(url);
    const user = await response.json();
    return user?.role
};