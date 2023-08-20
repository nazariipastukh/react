import {apiService} from "../apiServices/apiServices";
import {urls} from "../../constants";

export const carService = {
    getAll: () => apiService.get(urls.cars.base),
    createCar: (data) => apiService.post(urls.cars.base, data),
    updateCar: (data, id) => apiService.put(urls.cars.byId(id), data),
    deleteCar: (id) => apiService.delete(urls.cars.byId(id))
}