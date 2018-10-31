import { combineReducers } from "redux";

import todos from "./todos";
import cart from "./cart";

export default combineReducers({
  todos,
  cart
});
