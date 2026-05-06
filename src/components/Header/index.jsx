import Logo from "../../assets/argentBankLogo.png"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../../app/slice/tokenSlice"
import { user } from "../../app/slice/userSlice"
import { useEffect } from "react"


function Header(){

    const userName = useSelector((state) => state.user.user.userName)
    const token = useSelector((state) => state.token.token)
    const dispatch = useDispatch()
    const Logout = () => {
        dispatch(logout())
        window.location.href = "/"
    }

    useEffect(()=>{
        const UserData = async() => {

            const data = await fetch('http://localhost:3001/api/v1/user/profile', {
                method: "GET",
                headers: { Authorization: 'Bearer ' + token}
            })
            const User = await data.json()
            dispatch(user(User.body))
        }

        if (token != null){
            UserData()
        }else{

        }
    })
    
    if ( !token ) {
        return(
            <header>
                <nav className="main-nav">
                    <a className="main-nav-logo" href="/">
                        <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo"/>
                        <h1 className="sr-only">Argent Bank</h1>
                    </a>
                    <div>
                        <a className="main-nav-item" href="/sign_in">
                            <i className="fa fa-user-circle"></i>
                            &nbsp;Sign In
                        </a>
                    </div>
                </nav>
            </header>
        )
    } else {
        return(
            <header>
                <nav className="main-nav">
                    <a className="main-nav-logo" href="/">
                        <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo"/>
                        <h1 className="sr-only">Argent Bank</h1>
                    </a>
                    <div>
                        <a className="main-nav-item" href="/user">
                            <i className="fa fa-user-circle"></i>
                            &nbsp;{userName}
                        </a>
                        <a className="main-nav-item" href="/" onClick={Logout}>
                            <i className="fa fa-sign-out"></i>
                            Sign Out
                        </a>
                    </div>
                </nav>
            </header>
        )
    } 
}

export default Header
