const initialState = {
    info: {},
    results: [],
    count: 0,
    error: '',
    isLoading: false
}

export const CharacterActionTypes = {
    SET_CHARACTERS: 'SET_CHARACTERS',
    SET_ERROR: 'SET_ERROR',
    SET_IS_LOADING: 'SET_IS_LOADING',
    ADD_CHARACTERS: 'ADD_CHARACTERS',
    PREV_CHARACTERS: 'PREV_CHARACTERS'
}

export const characterReducers = (state = initialState, action) => {
    switch (action.type) {
        case CharacterActionTypes.ADD_CHARACTERS:
            return {
                ...state,
                count: state.count + 1,
                isLoading: false,
                results: [
                    ...action.payload.results
                ],
                info: action.payload.info
            }
        case CharacterActionTypes.PREV_CHARACTERS:
            return {
                ...state,
                count: state.count - 1,
                isLoading: false,
                results: [
                    ...action.payload.results
                ],
                info: action.payload.info
            }
        case CharacterActionTypes.SET_CHARACTERS:
            return {
                ...state,
                results: action.payload.results,
                info: action.payload.info,
                count: state.count + 1,
                isLoading: false
            }
        case CharacterActionTypes.SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case CharacterActionTypes.SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            }
        default:
            return {
                state
            }
    }
}