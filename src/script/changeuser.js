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
            headers: {
                Authorization: 'Bearer ' + sessionStorage.token,
                "Content-type": "application/json"
            },
            body: ids
        })

        const token = await data.json()
        if (token.status === 200){
            location.reload()
        }else{
            console.log("404")
        }
    })
}

export default changeUser