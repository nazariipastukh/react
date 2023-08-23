import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {episodeService} from "../../services";

const initialState = {
    pages: 0,
    episodes: []
}

const getAll = createAsyncThunk(
    'episodesSlice/getAll',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await episodeService.getAll(page)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        } finally {

        }
    }
)

const slice = createSlice({
    name: 'episodesSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => builder
        .addCase(getAll.fulfilled, (state, action) => {
            const {info: {pages}, results} = action.payload
            state.pages = pages
            state.episodes = results
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