import {urls} from "../constants";
import {apiCars} from "./apiServices";

export const carsService = {
    getAll: () => apiCars.get(urls.cars)
}