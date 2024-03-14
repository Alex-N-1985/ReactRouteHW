import { createSlice } from "@reduxjs/toolkit";


import ProgData from "../assets/datas/progdata.json";

const initialState = {
    data: ProgData.words
}

const wordSlise = createSlice({
    name: "words",
    initialState, 
    reducers: {
        addWord(state, action){
            const result = action.payload;
            console.log(result);
            const has = state.data.filter(el => el.toLowerCase() === result.toLowerCase());
            if (!has.length) {
                state.data.push(result);
            }
        },
        delWord(state, action){
            state.data = state.data.filter(el => el.toLowerCase() !== action.payload.toLowerCase());
        }
    }
});

export const { addWord, delWord } = wordSlise.actions

export default wordSlise.reducer;