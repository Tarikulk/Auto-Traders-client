export const setAuthToken = userInfo =>{
        const currentUser = {
        email : userInfo.user.email, 
        role : userInfo.role
    }

    fetch(`http://localhost:5000/user/${userInfo?.user?.email}`, {
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