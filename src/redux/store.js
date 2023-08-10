import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {carReducer} from "./reducers/carReducer";

const rootReducer=combineReducers({
    cars: carReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))