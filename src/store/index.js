import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import counterReducer from "./reducers/counter";
import userReducer from "./reducers/user";

const store = createStore(
  combineReducers({ counterReducer, userReducer }),
  {},
  applyMiddleware(logger)
);

export default store;
