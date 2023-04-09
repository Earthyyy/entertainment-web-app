import { configureStore } from "@reduxjs/toolkit";
import activeReducer from "../features/active/activeSlice";
import showsReducer from "../features/showsSlice/showsSlice";


export const store = configureStore({
    reducer: {
        active: activeReducer,
        shows: showsReducer,
    },
});

