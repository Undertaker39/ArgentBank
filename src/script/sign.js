function LogOut() {
    window.location.href = "/"
    sessionStorage.removeItem("token")
}
export default LogOut