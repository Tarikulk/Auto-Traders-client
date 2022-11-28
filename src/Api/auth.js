export const setAuthToken = userInfo =>{
        const currentUser = {
        email : userInfo.user.email, 
        role : userInfo.role,
        name: userInfo.name,
    }

    fetch(`https://resale-web-server-tarikulk.vercel.app/user/${userInfo?.user?.email}`, {
        method:"PUT",
        headers:{  
            "content-type": "application/json"
        },
        body: JSON.stringify(currentUser)
    })
    .then(res => res.json())
    .then(data => {
    console.log(data)
    localStorage.setItem('autoTraders', data.token)
    })
}