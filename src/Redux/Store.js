import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import AuthReducer  from "./Reducers"

const RootReducers = combineReducers({
    AuthReducer
});

export const Mystore = createStore(RootReducers,applyMiddleware(thunk));