import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";

const middlewares = [thunk];

const store = createStore(reducers, applyMiddleware(...middlewares));

export default store;
