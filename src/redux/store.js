import {configureStore} from "@reduxjs/toolkit";
import {charactersReducer, episodeReducer, progressReducer, themeReducer} from "./slices";

const store = configureStore({
    reducer: {
        episodes: episodeReducer,
        progress: progressReducer,
        characters: charactersReducer,
        theme: themeReducer
    }
})

export {
    store
}