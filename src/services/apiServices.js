import axios from "axios";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

const Endpoints = {
    REGISTER: '/users'
};

export const ApiServices = {
    handleSubmit: (data) => {
        instance.post(Endpoints.REGISTER, data)
            .then(data => console.log(data))
    }
};