async function changeUser(){
     
    const form = document.querySelector("form")
    let username = document.getElementById("username")
    
    form.addEventListener("submit", async (event) => {
        event.preventDefault()
        const user = {
            userName: username.value
        }
        const ids = JSON.stringify(user)
        const data = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: "PUT",
            headers: { Authorization: 'Bearer ' + sessionStorage.token },
            body: ids
        })
        console.log(data)

        const token = await data.json()
        console.log(token)
        if (token.status === 200){
            console.log("ok")

        //    location.reload()
        }else{
            console.log("404")
        }
    })
}

export default changeUser