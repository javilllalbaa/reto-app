import {
    createAsyncThunk,
    createSlice
  } from '@reduxjs/toolkit';
import Axios from 'axios';
import apiConfig from '../config/api';

export const loadMovies = createAsyncThunk('loadMovies', async (data, thunkAPI) => {
  let language = "es";
  let page = !thunkAPI.getState().movie.data.page ? 1 : thunkAPI.getState().movie.data.page
  let query = `movies/${page}/${language}`;
  let response = await Axios.get(`${apiConfig.domain}/${query}`)
  return response.data;
})

export const loadMoviesSearch = createAsyncThunk('loadMoviesSearch', async (data, thunkAPI) => {
  let language = "es";
  var status = JSON.parse(localStorage.getItem('search_state'))
  let page = status ? 1 : thunkAPI.getState().movie.data.page_search
  console.log(status, page)
  let query = `movies/search/${page}/${language}`;
  let response = await Axios.post(`${apiConfig.domain}/${query}`, data)
  return response.data;
})  
  
let movieSlice = createSlice({
  name: 'movie',
  initialState: {
      status: 'not_loaded',
      data: {
        movies: [],
        page: null,
        page_search: 1,
        name_search: null
      }
  },
  extraReducers: {
    [loadMovies.pending]: (state, action) => {
      state.status = 'loading';
    },
    [loadMovies.fulfilled]: (state, action) => {
      var page = parseInt(action.payload.page) == 0 ? 2 : parseInt(action.payload.page) + 1
      if(!state.data.page)
        state.data.movies = []
      state.data = {
        movies: state.data.movies.concat(action.payload.results),
        page: page,
        page_search: 1
      }
    },
    [loadMovies.rejected]: (state, action) => {
      state.status = 'failed';
    },
    [loadMoviesSearch.pending]: (state, action) => {
      state.status = 'loading';
    },
    [loadMoviesSearch.fulfilled]: (state, action) => {
      var page = state.data.page_search + 1
      if(state.data.page_search == 1 || state.data.name_search != action.payload.search || JSON.parse(localStorage.getItem('search_state'))){
        state.data.movies = []
        state.data.page_search = 1
      } 
      state.data = {
        movies: state.data.movies.concat(action.payload.results),
        page: null,
        page_search: page,
        name_search: action.payload.search 
      }
    },
    [loadMoviesSearch.rejected]: (state, action) => {
      state.status = 'failed';
    }
  }
});
  
//   export const { logOut } = userSlice.actions;
  
  export default movieSlice.reducer;