import { all } from "redux-saga/effects";

import feedsSaga from "./Feeds/duck";

export default function*() {
  yield all([feedsSaga()]);
}
