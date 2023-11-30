import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import movieSlice from "./slice/movieSlice";
import rootSaga from "./saga";

let sagamiddleware = createSagaMiddleware();
const middleware = [sagamiddleware];

export default configureStore({
  reducer: {
    starwarsAPI: movieSlice
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(middleware);
  }
})

sagamiddleware.run(rootSaga);