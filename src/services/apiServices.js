import axios from 'axios'
import {baseUrl} from "../constants/urls";

export const apiServices = axios.create({baseURL: baseUrl})
