import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: "home",
};

export const activeSlice = createSlice({
    name: "active",
    initialState,
    reducers: {
        setActive: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setActive } = activeSlice.actions;
export default activeSlice.reducer;
