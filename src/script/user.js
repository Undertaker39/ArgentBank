async function getUser(token) {
    const token2 = "Bearer "+token
    const ids = JSON.stringify(token2)
    const data = await fetch('http://localhost:3001/api/v1/user/login', {
        method: "Get",
        headers: { "Content-type": "application/json" },
        body: ids
    })

    const User = await data.json()
    console.log(User)
    sessionStorage.setItem("user",User.body)
}
export default getUser