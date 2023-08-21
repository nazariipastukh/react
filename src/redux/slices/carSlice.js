import {createAsyncThunk, createSlice, isFulfilled, isRejected, isPending} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    cars: [],
    carForUpdate: null,
    errors: null,
    isLoading: null
}

const getCar = createAsyncThunk(
    'carSlice/get',
    async (_, thunkApi) => {
        try {
            const {data} = await carService.getAll()
            return data
        } catch (e) {
            return thunkApi.rejectWithValue(e.response.data)
        }
    }
)

const createCar = createAsyncThunk(
    'carSlice/create',
    async ({car}, thunkApi) => {
        try {
            await carService.createCar(car)
            thunkApi.dispatch(getCar())
        } catch (e) {
            return thunkApi.rejectWithValue(e.response.data)
        }
    }
)

const updateCar = createAsyncThunk(
    'carSlice/update',
    async ({id, car}, thunkApi) => {
        try {
            await carService.updateCar(id, car)
            thunkApi.dispatch(getCar())
        } catch (e) {
            return thunkApi.rejectWithValue(e.response.data)
        }
    }
)

const deleteCar = createAsyncThunk(
    'carSlice/delete',
    async ({id}, thunkApi) => {
        try {
            await carService.deleteCar(id)
            thunkApi.dispatch(getCar())
        } catch (e) {
            return thunkApi.rejectWithValue(e.response.data)
        }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getCar.fulfilled, (state, action) => {
                state.cars = action.payload
                state.isLoading = false
            })
            .addCase(createCar.fulfilled, () => {
            })
            .addCase(updateCar.fulfilled, (state) => {
                state.carForUpdate = null
            })
            .addCase(deleteCar.fulfilled, () => {
            })
            .addMatcher(isPending(), (state) => {
                state.isLoading = true
                state.errors = null
            })
            .addMatcher(isFulfilled(), (state) => {
                state.isLoading = false
                state.errors = null
            })
            .addMatcher(isRejected(), (state, action) => {
                state.idLoading = true
                state.errors = action.payload
            })
    }
})

const {reducer: carReducer, actions: {setCarForUpdate}} = carSlice

export const carActions = {
    getCar,
    createCar,
    setCarForUpdate,
    updateCar,
    deleteCar,
}

export {carReducer}