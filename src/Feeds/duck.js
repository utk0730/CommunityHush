import { createAction, createReducer } from "redux-starter-kit";
import { all, takeEvery, call, put } from "redux-saga/effects";
import { feedsApi } from "./api";

//feeds actions
export const RECEIVE_FEEDS_REQUEST = "[feeds] receive items request";
export const RECEIVE_FEEDS_SUCCESS = "[feeds] receive items success";
export const RECEIVE_FEEDS_ERROR = "[feeds] receive items error";

export const FEED_REACTIONS_REQUEST = "[feed] reactions request";

//actions
export const getFeedsAction = createAction(RECEIVE_FEEDS_REQUEST);
export const getFeedsActionSuccess = createAction(RECEIVE_FEEDS_SUCCESS);
export const getFeedsActionFail = createAction(RECEIVE_FEEDS_ERROR);

export const feedReactiosnAction = createAction(FEED_REACTIONS_REQUEST);

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
const feedReaction = (state, { payload }) => {
  //since we are using createReducer , we can directly mutate the property
  const { feedId, type_reaction } = payload;
  const feedObj = state.allFeeds.find(_o => _o.id === feedId);
  switch (type_reaction) {
    case "like":
      ++feedObj.AviewCount;
      break;
    case "heart":
      ++feedObj.likeCount;
      break;
    case "clap":
      ++feedObj.commentCount;
      break;
  }
};

//reducer
export const feedsReducer = createReducer(initialState, {
  [RECEIVE_FEEDS_REQUEST]: getFeeds,
  [RECEIVE_FEEDS_SUCCESS]: getFeedsSuccess,
  [RECEIVE_FEEDS_ERROR]: getFeedsFail,
  [FEED_REACTIONS_REQUEST]: feedReaction
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
