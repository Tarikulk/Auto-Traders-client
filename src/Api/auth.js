export const setAuthToken = userInfo =>{
        const currentUser = {
        email : userInfo.user.email, 
        role : userInfo.role,
        name: userInfo.name,
    }

    fetch(`http://localhost:5000/user?email=${userInfo?.user?.email}`, {
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