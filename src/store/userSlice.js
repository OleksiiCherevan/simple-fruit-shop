import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        token: sessionStorage.getItem("token") || "",
        user: {}
    },
    reducers: {
        setUserToken(state, action) {
            const token = action.payload.token;

            sessionStorage.setItem("token", token);
            state.token = token;
        },
        removeUserToken(state) {
            sessionStorage.setItem("token", "");
            state.token = "";
        }
    }, 
});

export const {setUserToken, removeUserToken} = userSlice.actions;
export default userSlice.reducer;