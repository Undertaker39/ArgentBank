import { useDispatch } from "react-redux"
import { login } from "../../app/slice/tokenSlice"

function Sign_in (){

    const dispatch = useDispatch();
    const LogStatus = async(event) => {

        let username = document.getElementById("username")
        let password = document.getElementById("password")

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
            dispatch(login(token.body.token))
            window.location.href = "/user"
        }else{
            console.log("Votre adresse e-mail ou votre mot de passe sont erronés")
        }
        }
        

    return(
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button onClick={LogStatus} className="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
    )
}

export default Sign_in

