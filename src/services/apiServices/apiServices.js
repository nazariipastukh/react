import axios from "axios";
import {baseCarsUrl} from "../../constants";

export const carsApi = axios.create({baseURL: baseCarsUrl})