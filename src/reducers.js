import { combineReducers } from "redux";

import { feedsReducer } from "./Feeds/duck.js";

const rootReducer = combineReducers({
  feedsReducer
});

export default rootReducer;
