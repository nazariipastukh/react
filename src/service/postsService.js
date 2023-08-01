import {urls} from "../constants";
import {apiJson} from "./apiServices";

export const postsService = {
    getAll: () => apiJson.get(urls.posts)
}