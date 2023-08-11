import {carsApi} from "../apiServices/apiServices";
import {urls} from "../../constants";

export const carService = {
    getAll: () => carsApi.get(urls.cars.base),
    updateCar: (id, data) => carsApi.put(urls.cars.byId(id), data),
    postCar: (data) => carsApi.post(urls.cars.base, data),
    deleteCar: (id) => carsApi.delete(urls.cars.byId(id))
}