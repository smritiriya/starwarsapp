import { createSlice } from "@reduxjs/toolkit";
import { setErrorR, setLoadingR, setMoviesR } from "../reducer";

export const movieSlice = createSlice({
  name: "starwarsAPI",
  initialState: {
    movieData: {},
    isLoading: false,
    error: "",
  },
  reducers: {
    setMovies: setMoviesR,
    setError: setErrorR,
    setLoading: setLoadingR
  },
});

export const { setMovies, setError, setLoading } = movieSlice.actions;
export default movieSlice.reducer;