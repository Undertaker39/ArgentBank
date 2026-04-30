import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {}
}

const userSlice = createSlice({
    name:"user",
    initialState,

    reducers:{
        user : (state) => {

        },
    }
})

export const { user } = userSlice.actions;
export default userSlice.reducer;