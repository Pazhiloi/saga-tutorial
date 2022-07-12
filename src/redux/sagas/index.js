import {
  put,
  call,
  fork,
  takeEvery,
  spawn,
  join,
  select,
  all,
  delay,
  take,
  cancel
} from "redux-saga/effects";
import { loadBasicData } from "./initialSagas/index.js";
import pageLoaderSaga from "./pageLoaderSaga/index.js";


export function* fetchPlanets(signal) {
  console.log("LOAD_SOME_DATA started");
   const response = yield call(fetch, "https://swapi.dev/api/planets" , {signal});
    const data = yield call([response, response.json]);

    console.log("LOAD_SOME_DATA completed", data);
}

export function* loadOnAction() {

  let task;

  let abortController = new AbortController()
  while (true) {
    yield take("LOAD_SOME_DATA");
    

    if (task) {
      abortController.abort();
      yield cancel(task)
      abortController = new AbortController();
    }
  task =  yield fork(fetchPlanets, abortController.signal)
  }
}

export default function* rootSaga() {
  const sagas = [
    // loadBasicData,
    //  pageLoaderSaga,
     loadOnAction
    ];

  const retrySagas = yield sagas.map((saga) => {
    return spawn(function* () {
      while (true) {
        try {
          yield call(saga);
          break;
        } catch (e) {
          console.log(e);
        }
      }
    });
  });

  yield all(retrySagas);
}
