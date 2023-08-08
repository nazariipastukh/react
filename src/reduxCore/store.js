import {combineReducers, createStore} from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import {characterReducers} from "./reducers/characterReducers";

const rootReducer = combineReducers({
    characters: characterReducers
})

const composeEnhancers = composeWithDevTools({
    trace: true,
    traceLimit: 25
})

export const store = createStore(rootReducer, composeEnhancers());