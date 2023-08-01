import {urls} from "../constants";
import {apiJson} from "./apiServices";

export const commentsService = {
    getAll: () => apiJson.get(urls.comments)
}