const baseURL = process.env.REACT_APP_API

const urls = {
    episodes: '/episodes',
    characters: (ids) => `/characters/${ids}`
}

export {
    baseURL,
    urls
}