import { createSlice } from "@reduxjs/toolkit";

import WordData from "../components/WordData/WordData";

const initialState = {
    data: WordData.words
}

const wordSlise = createSlice({
    name: "words",
    initialState,
    reducers: {
        // addWord(state, action){
            
        // }
    }
});



export default wordSlise.reducer;