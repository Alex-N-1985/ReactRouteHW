import { createSlice } from "@reduxjs/toolkit";


import ProgData from "../assets/datas/progdata.json";

const initialState = {
    data: ProgData.words
}

const wordSlise = createSlice({
    name: "words",
    initialState, 
    reducers: {}
});



export default wordSlise.reducer;