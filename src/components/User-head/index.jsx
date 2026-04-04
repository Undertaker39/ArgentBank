import { useState } from "react";

function Userheader(data){
    
    const load = data.data
    if (load!=null){
        console.log(load.firstName)
    }else{
        console.log("0")
    }
    console.log(load)
    const [EditState, setEditState] = useState(false)
    if (EditState != true){
        return(
        <div className="header">
            <h1>Welcome back<br />!</h1>
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
                            <input type="text" id="username" />
                        </div>
                        <div className="edit-input-wrapper">
                            <label htmlFor="firstname">First name :</label>
                            <input type="text" id="firstname" />
                        </div>
                        <div className="edit-input-wrapper">
                            <label htmlFor="lastname">Last name :</label>
                            <input type="text" id="lastname" />
                        </div>
                        <div className="button-wrapper">
                            <button className="edit-button">Save</button>
                            <button className="edit-button" onClick={() => setEditState (!EditState)}>Cancel</button>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

export default Userheader