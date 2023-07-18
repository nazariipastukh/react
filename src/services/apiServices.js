import axios from "axios";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

const Endpoints = {
    REGISTER: '/users',
    COMMENT: '/comments'
};

export const ApiServices = {
    handleSubmit: (data) => {
        instance.post(Endpoints.REGISTER, data)
            .then(data => console.log(data))
    },
    handleComment: (data) => {
        instance.post(Endpoints.COMMENT, data)
            .then(data => console.log(data))
    }
};