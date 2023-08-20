import axios from "axios";
import {baseUrl} from "../../constants";

export const apiService = axios.create({baseURL: baseUrl})