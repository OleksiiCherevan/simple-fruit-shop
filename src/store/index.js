import { configureStore } from "@reduxjs/toolkit";
import cardsSlice from "./cardsSlice";

export default configureStore({
    reducer: {
        cards: cardsSlice,
    },
});