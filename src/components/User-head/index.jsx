import { useDispatch, useSelector } from "react-redux";
import { status } from "../../app/slice/editorSlice";
import { UserName } from "../../app/slice/userSlice"

function Userheader(){
    const user = useSelector((state) => state.user.user)
    const token = useSelector((state) => state.token.token)
    const EditState = useSelector((state)=>state.editor.editorStatus)
    const dispatch = useDispatch()
    const Edit = () =>{
        dispatch(status())
    }
    const changeUser = async(event) => {

        let username = document.getElementById("username")
        
        event.preventDefault()

        const user = {
            userName: username.value
        }
        const ids = JSON.stringify(user)
        const data = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: "PUT",
            headers: {
                Authorization: 'Bearer ' + token,
                "Content-type": "application/json"
            },
            body: ids
        })

        const Token = await data.json()
        if (Token.status === 200){
            dispatch(UserName())
        }else{
            console.log("404")
        }
    }

    if (EditState === false){
        return(
            <div className="header">
                <h1>Welcome back<br />{user.firstName} {user.lastName}</h1>
                <button className="edit-button" onClick={Edit}>Edit Name</button>
            </div>
        )
    }else{
        return(
            <section className="edit-content">
                <div className="header">
                    <h1>Edit user info</h1>
                    <form>
                        <div className="edit-input-wrapper">
                            <label htmlFor="username">User name :</label>
                            <input type="text" id="username" placeholder={user.userName} />
                        </div>
                        <div className="edit-input-wrapper">
                            <label htmlFor="firstname">First name :</label>
                            <input type="text" id="firstname" placeholder={user.firstName} disabled/>
                        </div>
                        <div className="edit-input-wrapper">
                            <label htmlFor="lastname">Last name :</label>
                            <input type="text" id="lastname" placeholder={user.lastName} disabled/>
                        </div>
                        <div className="button-wrapper">
                            <button className="edit-button" onClick={changeUser}>Save</button>
                            <button className="edit-button" onClick={Edit}>Cancel</button>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

export default Userheader