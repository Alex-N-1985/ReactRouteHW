import { createSlice } from "@reduxjs/toolkit";


import ProgData from "../assets/datas/progdata.json";

const initialState = {
    data: ProgData.words.sort()
}

const wordSlise = createSlice({
    name: "words",
    initialState, 
    reducers: {
        addWord(state, action){
            const result = action.payload;
            const has = state.data.filter(el => el.toLowerCase() === result.toLowerCase());
            if (!has.length) {
                state.data.push(result);
                state.data = state.data.sort();
            }
        },
        
        delWord(state, action){
            state.data = state.data.filter(el => el.toLowerCase() !== action.payload.toLowerCase()).sort();
        },

        editWord(state, action) {
            const result = action.payload;
            state.data = state.data.filter(el => el.toLowerCase() !== result.prev.toLowerCase());            
            state.data.push(result.value);
            state.data.sort();
        }
    }
});

export const { addWord, delWord, editWord } = wordSlise.actions

export default wordSlise.reducer;