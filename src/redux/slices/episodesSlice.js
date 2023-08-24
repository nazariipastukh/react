import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {episodeService} from "../../services";
import {progressActions} from "./progressSlice";

const initialCurrent = localStorage.getItem('current') || 'Rick And Morty';
const initialState = {
    pages: 0,
    episodes: [],
    current: initialCurrent
}

const getAll = createAsyncThunk(
    'episodesSlice/getAll',
    async ({page}, thunkAPI) => {
        try {
            thunkAPI.dispatch(progressActions.setIsLoading(true))
            await new Promise(resolve => setTimeout(resolve, 500))

            const {data} = await episodeService.getAll(page)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        } finally {
            thunkAPI.dispatch(progressActions.setIsLoading(false))
        }
    }
)

const slice = createSlice({
    name: 'episodesSlice',
    initialState,
    reducers: {
        setCurrent: (state, action) => {
            state.current = action.payload
            localStorage.setItem('current', action.payload);
        }
    },
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            const {info: {pages}, results} = action.payload
            state.pages = pages
            state.episodes = results
            state.current = null
            localStorage.clear()
        })
})

const {reducer: episodeReducer, actions} = slice

const episodeActions = {
    ...actions,
    getAll
}

export {
    episodeReducer,
    episodeActions
}