import {configureStore} from "@reduxjs/toolkit";
import {charactersReducer, episodeReducer, progressReducer} from "./slices";

const store = configureStore({
    reducer: {
        episodes: episodeReducer,
        progress: progressReducer,
        characters: charactersReducer
    }
})

export {
    store
}