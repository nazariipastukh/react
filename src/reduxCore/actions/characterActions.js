import {CharacterActionTypes} from "../reducers/characterReducers";

export const characterActions = {
    setCharacters: (data) => ({type: CharacterActionTypes.SET_CHARACTERS, payload: data}),
    setIsLoading: (isLoading) => ({type: CharacterActionTypes.SET_IS_LOADING, payload: isLoading}),
    addCharacters: (data) => ({type: CharacterActionTypes.ADD_CHARACTERS, payload: data}),
    prevCharacters: (data) => ({type: CharacterActionTypes.PREV_CHARACTERS, payload: data}),
}