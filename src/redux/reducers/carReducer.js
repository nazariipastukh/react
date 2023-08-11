import {carActionTypes} from "../actions/carActions";

const initialState = {
    cars: [],
    carForUpdate: null
}

export const carReducer = (state = initialState, action) => {
    switch (action.type) {
        case carActionTypes.SET_CARS:
            return {
                ...state,
                cars: action.payload
            }
        case carActionTypes.SET_CAR_FOR_UPDATE:
            return {
                ...state,
                carForUpdate: action.payload
            }
        default:
            return state
    }
}