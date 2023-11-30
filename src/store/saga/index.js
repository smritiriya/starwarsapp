import { put, takeEvery, call } from "redux-saga/effects";

const getMovie = async () => {
  const response = await fetch("https://swapi.dev/api/films/",{
    method: "get"
  });
  return await response.json();
};

function* getMovieData() {
  try {
    let respondedData = yield call(getMovie);
    yield put({ type: "starwarsAPI/setMovies", payload: respondedData });
  } catch (error) {
    yield put({ type: "starwarsAPI/setError" });
  }
}

function* rootSaga() {
  yield takeEvery("FETCH_MOVIE_DATA", getMovieData);
}

export default rootSaga;
