import { all, take, takeEvery, takeLatest } from "redux-saga/effects";
import { sagaApplierFunction } from "./sagaapplierfunction";

export function* rootSaga() {
  yield all([
    takeLatest("starting action for async part", sagaApplierFunction),
  ]);
}

// export function rootSaga (){

//     yield all ([takeEvery("starting action for async part",sagaApplierFunction)])

//     }
