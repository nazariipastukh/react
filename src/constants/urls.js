export const baseCarsUrl = 'http://owu.linkpc.net/carsAPI/v1'

const cars = '/cars'

export const urls = {
    cars: {
        base: cars,
        byId: (id) => `${cars}/${id}`
    }
}