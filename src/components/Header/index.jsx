import Logo from "../../assets/argentBankLogo.png"
import LogOut from "../../script/sign"

function Header(){
    if ( !sessionStorage.token || sessionStorage.token==="undefined") {
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
                            Tony
                        </a>
                        <a className="main-nav-item" href="/" onClick={LogOut}>
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
