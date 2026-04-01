function LogStatus(){
    
    const form = document.querySelector("form")
    let username = document.getElementById("username")
    let password = document.getElementById("password")

    form.addEventListener("submit", async (event) => {
        event.preventDefault()
        const connexion = {
            email: username.value,
            password: password.value
        }
        const ids = JSON.stringify(connexion)
        const data = await fetch('http://localhost:3001/api/v1/user/login', {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: ids
        })
        
        const token = await data.json()
        if (token.status === 200){
            sessionStorage.setItem("token", token.body.token)
            async function getUser() {
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
            }
            getUser()
            //window.location.href = "/user"
        }else{
            console.log("Votre adresse e-mail ou votre mot de passe sont erronés")
        }
    })
}

export default LogStatus