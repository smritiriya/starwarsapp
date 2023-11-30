export function setMoviesR(state, action) {
  state.movieData = action.payload;
  state.isLoading = false;
}

export function setLoadingR(state) {
  console.log(state);
  state.isLoading = true;
}

export function setErrorR(state) {
  state.error = "Error in Loading API";
}