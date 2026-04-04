function UserData(){
    window.addEventListener("load", async (event) => {
        event.preventDefault()
        const token2 = "Bearer "+sessionStorage.token
        const ids = JSON.stringify(token2)
        const data = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: "GET",
            headers: { "Content-type": "application/json" },
            body: ids
        })
        const User = await data.json()
        console.log(User)
        sessionStorage.setItem("user",User.body)
    })
}
export default UserData