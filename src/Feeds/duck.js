import { createAction, createReducer } from "redux-starter-kit";
import { all, takeEvery, call, put } from "redux-saga/effects";
import { feedsApi } from "./api";

//feeds actions
export const RECEIVE_FEEDS_REQUEST = "[items] receive items request";
export const RECEIVE_FEEDS_SUCCESS = "[items] receive items success";
export const RECEIVE_FEEDS_ERROR = "[items] receive items error";

//actions
export const getFeedsAction = createAction(RECEIVE_FEEDS_REQUEST);
export const getFeedsActionSuccess = createAction(RECEIVE_FEEDS_SUCCESS);
export const getFeedsActionFail = createAction(RECEIVE_FEEDS_ERROR);

//initial state
const initialState = {
  allFeeds: [],
  loading: true,
  error: null
};

const getFeeds = state => {
  state.loading = true;
};
const getFeedsSuccess = (state, { payload }) => {
  if (payload) {
    state.allFeeds = [...payload];
    state.loading = false;
  }
};

const getFeedsFail = state => {
  state.loading = false;
};

//reducer
export const feedsReducer = createReducer(initialState, {
  [RECEIVE_FEEDS_REQUEST]: getFeeds,
  [RECEIVE_FEEDS_SUCCESS]: getFeedsSuccess,
  [RECEIVE_FEEDS_ERROR]: getFeedsFail
});

function* fetchFeeds() {
  try {
    const res = yield call(feedsApi.fetchFeedsRequest);
    yield put(getFeedsActionSuccess(res));
  } catch (e) {
    yield put(getFeedsActionFail());
  }
}

export default function* watcherSaga() {
  yield all([yield takeEvery(RECEIVE_FEEDS_REQUEST, fetchFeeds)]);
}
