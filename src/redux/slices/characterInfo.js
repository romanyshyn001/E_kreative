import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    personageDetails: {},
    personageFilmLinks: [],
    isLoading: false,
    filmsInfo: []
}

const personageInfo = createSlice({
    name:'personageInfo',
    initialState,
    reducers:{
        //........SET_FILMS........//
    getCharacterInfo: (state, action) => {
        state.personageDetails = action.payload
        state.personageFilmLinks = action.payload.films
        state.isLoading = false
    },
    characterInfoLoading: (state) => {
        state.isLoading = true
    },
    //........GET_FILMS........//
    setFilmsInfoLoading: (state) => {        
        state.isLoading = true
    },
    getFilmsInfo: (state, {payload}) => {
        state.filmsInfo = payload
        state.isLoading = false
    },
    }
})

export const {  getCharacterInfo, characterInfoLoading, 
    setFilmsInfoLoading, getFilmsInfo } = personageInfo.actions
export default personageInfo.reducer