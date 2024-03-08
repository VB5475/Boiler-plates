import { call, put } from "redux-saga/effects";

export function* sagaApplierFunction() {
  try {
    //async task here

    yield put({ type: "action type", payload: "action payload" });
  } catch {
    yield put({ type: "action error", payload: "error payload" });
  }
}
