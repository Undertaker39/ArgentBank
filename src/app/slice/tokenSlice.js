import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null
}

const tokenSlice = createSlice({
    name:"token",
    initialState,

    reducers:{
        login : (state,action) => {
            state.token = action.token
        },

        logout :  (state) => {
            state.token = null
        }
    }

})

export const { login , logout } = tokenSlice.actions;
export default tokenSlice.reducer;