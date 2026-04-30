import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    editorStatus: false
}

const editorSlice = createSlice({
    name:"editor",
    initialState,

    reducers:{
        status : (state) => {

        },
    }
})

export const { status } = editorSlice.actions;
export default editorSlice.reducer;
