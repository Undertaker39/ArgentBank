async function UserData(e){
    const data = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: "GET",
        headers: { Authorization: 'Bearer ' + sessionStorage.token }
    })
    const User = await data.json()
    e(User.body)
    }

export default UserData