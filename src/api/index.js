import axios from 'axios';

const $host = axios.create({
    // baseURL: process.env.REACT_APP_API_URL
    baseURL: 'https://min-api.cryptocompare.com'
})

const $authHost = axios.create({
    // baseURL: process.env.REACT_APP_API_URL
    baseURL: 'https://min-api.cryptocompare.com'
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}
