import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: sessionStorage.getItem("token") || null
}

const tokenSlice = createSlice({
    name:"token",
    initialState,

    reducers:{
        login : (state,action) => {
            state.token = action.payload
            sessionStorage.setItem("token", action.payload)
        },

        logout : (state) => {
            state.token = null
            sessionStorage.removeItem("token")
        }
    }

})

export const { login , logout } = tokenSlice.actions;
export default tokenSlice.reducer;