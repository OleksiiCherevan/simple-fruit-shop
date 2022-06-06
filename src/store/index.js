import { configureStore } from "@reduxjs/toolkit";
import cardsSlice from "./cardsSlice";
import userSlice from "./userSlice";

export default configureStore({
    reducer: {
        cards: cardsSlice,
        user: userSlice
    },
});