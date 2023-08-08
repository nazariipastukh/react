import {urls} from "../urls/urls";
import {rickApi} from "./apiService";

export const rickService = {
    getAll: () => rickApi.get(urls.characters)
}