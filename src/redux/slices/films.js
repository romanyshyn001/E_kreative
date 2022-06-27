import { createSlice} from '@reduxjs/toolkit'

const initialState = {    
  list: [],
  isLoading: false,
}

const moviesList = createSlice({
  name: 'movies',
  initialState,
  reducers:{
    moviesAll: (state, {payload}) => {
      state.list = payload
      state.isLoading = false
    },
    moviesLoading: (state) => {
      state.isLoading = true
    },
  },
})

export const { moviesLoading, moviesAll} = moviesList.actions
export default moviesList.reducer
















