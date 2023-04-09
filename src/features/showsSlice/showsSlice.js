import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
};

export const showsSlice = createSlice({
    name: "shows",
    initialState,
    reducers: {
        setShows: (state, action) => {
            state.list = action.payload;
        },
        addBookmark: (state, action) => {
            state.list = state.list.map((show) => {
                if (show.title === action.payload.title) {
                    return { ...show, isBookmarked: true };
                }
                return show;
            })
        },
        removeBookmark: (state, action) => {
            state.list = state.list.map((show) => {
                if (show.title === action.payload.title) {
                    return { ...show, isBookmarked: false };
                }
                return show;
            })
        },
    }
});

export const { setShows, addBookmark, removeBookmark } = showsSlice.actions;
export default showsSlice.reducer;