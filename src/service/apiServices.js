import axios from "axios";
import {baseCarsUrl, baseJsonUrl} from "../constants";

export const apiJson = axios.create({baseURL: baseJsonUrl})
export const apiCars = axios.create({baseURL: baseCarsUrl})