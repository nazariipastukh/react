import {apiServices} from "./apiServices";
import {urls} from "../constants/urls";

export const carServices = {
    getAll: () => apiServices.get(urls.cars.base),
    create: (car) => apiServices.post(urls.cars.base, car),
    deleteById: (id) => apiServices.delete(urls.cars.byId(id)),
    updateById: (id, car) => apiServices.put(urls.cars.byId(id), car)
}