function LogOut() {
    window.location.href = "/"
    sessionStorage.removeItem("token")
   // Bearer token
}
export default LogOut