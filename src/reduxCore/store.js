import {combineReducers, createStore} from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import {usersReducers} from "./reducers/userReducers";

const rootReducer=combineReducers({
    users: usersReducers
    // rick: rickReducer
})

const composeEnhancers=composeWithDevTools({
    trace:true,
    traceLimit:25
})

export const store= createStore(rootReducer,composeEnhancers());

