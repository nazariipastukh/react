import {carService} from "../../services";

export const carActionTypes = {
    SET_CARS: 'SET_CARS',
    SET_CAR_FOR_UPDATE: 'SET_CAR_FOR_UPDATE'
}

export const actions = {
    setCars: (payload) => ({type: carActionTypes.SET_CARS, payload}),
    setCarForUpdate: (payload) => ({type: carActionTypes.SET_CAR_FOR_UPDATE, payload})
}

export const getCars = () => (dispatch) => {
    carService.getAll()
        .then(({data}) => {
            dispatch(actions.setCars(data));
        })
}

export const createCar = (car) => (dispatch) => {
    carService.postCar(car)
        .then(() => {
            dispatch(getCars())
        })
}

export const updateCar = (id, car) => (dispatch) => {
    carService.updateCar(id, car)
        .then(() => {
            dispatch(actions.setCarForUpdate(null))
        })
        .then(() => {
            dispatch(getCars())
        })
}

export const deleteCar = (id) => (dispatch) => {
    carService.deleteCar(id)
        .then(() => {
            dispatch(getCars())
        })
}