import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";


const initialState={
    cars: [],
    carForUpdate: null,
    errors: null,
    isLoading: null
}

const getCar = createAsyncThunk(
    'carSlice/get',
    async (_, thunkApi) => {
        try {
            const {data} = await  carService.getAll()
            return data
        }catch (e){
            return thunkApi.rejectWithValue(e.response.data)
        }
    }
)

// const createCar = createAsyncThunk(
//
// )
//
// const deleteCar = createAsyncThunk(
//
// )
//
// const updateCar = createAsyncThunk(
//
// )

const carSlice = createSlice({
    name:'carSlice',
    initialState,
    reducers:{

    },
    extraReducers:{
        [getCar.fulfilled]: (state, action) => {
            state.cars = action.payload
            state.isLoading = false
        },
        [getCar.pending]: (state) => {
            state.isLoading = true
        }
    }
})

const {reducer: carReducer, actions:{} } = carSlice

export const carActions = {
    getCar,
    // createCar,
    // deleteCar,
    // updateCar
}

export {carReducer}
