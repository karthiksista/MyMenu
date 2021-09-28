import { combineReducers } from "redux";

import { restrauntReducer } from "./restrauntReducer";

const reducer = combineReducers({
  restrauntData: restrauntReducer,
});

export default reducer;
