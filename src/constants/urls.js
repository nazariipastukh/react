export const baseUrl = process.env.REACT_APP_API

const cars = '/cars'

export const urls = {
    cars: {
        base: cars,
        byId: (id) => `${cars}/${id}`
    }
}