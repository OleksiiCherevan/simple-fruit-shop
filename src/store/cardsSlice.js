import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { LINK_CARDS } from "assets/links";
import axios from "axios";

export const fetchCards = createAsyncThunk("cards/fetchCards", async function () {
    const response = await axios(LINK_CARDS)
    .then(response => response)
    .catch(e => {
        return e;
    })

    const cards = response.data;
    return cards;
})

const cardsSlice = createSlice({
    name: "cards",
    initialState: {
        cards: [],
        selectedCard: {},
        status: null,
        error: null
    },
    reducers: {
        setSelectedCard(state, action) {
            const card = action.payload.card;
            state.selectedCard = card;
        }
    }, 
    extraReducers: {
        [fetchCards.pending]: (state) => {
            state.status = "pending";
            state.error = null;
        },
        [fetchCards.fulfilled]: (state, action) => {
            state.status = "fulfilled";
            state.error = null;
            state.cards = action.payload;
        },
        [fetchCards.rejected]: (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        },
    }
});

export const { setSelectedCard } = cardsSlice.actions;
export default cardsSlice.reducer;