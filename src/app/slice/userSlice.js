import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {}
}

const userSlice = createSlice({
    name:"user",
    initialState,

    reducers:{
        user : (state,action) => {
            state.user = action.payload
        },
        UserName : (state,action) => {
            state.user.userName = action.payload
        }
    }
})

export const { user , UserName } = userSlice.actions;
export default userSlice.reducer;