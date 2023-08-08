import axios from "axios";
import {baseRickUrl} from "../urls/urls";

export const rickApi = axios.create({baseURL: baseRickUrl})