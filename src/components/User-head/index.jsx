import { useState } from "react";
import changeUser from "../../script/changeuser";

function Userheader(data){
    const datauser=data.data 
    const [EditState, setEditState] = useState(false)
    if (EditState != true){
        return(
        <div className="header">
            <h1>Welcome back<br />{datauser.firstName} {datauser.lastName}!</h1>
            <button className="edit-button" onClick={() => setEditState (!EditState)}>Edit Name</button>
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
                            <input type="text" id="username" placeholder={datauser.userName} />
                        </div>
                        <div className="edit-input-wrapper">
                            <label htmlFor="firstname">First name :</label>
                            <input type="text" id="firstname" placeholder={datauser.firstName} disabled/>
                        </div>
                        <div className="edit-input-wrapper">
                            <label htmlFor="lastname">Last name :</label>
                            <input type="text" id="lastname" placeholder={datauser.lastName} disabled/>
                        </div>
                        <div className="button-wrapper">
                            <button className="edit-button" onClick={changeUser}>Save</button>
                            <button className="edit-button" onClick={() => setEditState (!EditState)}>Cancel</button>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

export default Userheader