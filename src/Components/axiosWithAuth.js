import axios from "axios"

export const axiosWithAuth = () => {
    const token = window.localStorage.getItem('token')
    return axios.create({ 
        headers: {
            authorization: token
        },
        baseURL: 'https://jobs-xmmtw.ondigitalocean.app/'}) 
}                