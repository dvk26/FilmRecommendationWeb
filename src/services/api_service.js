import axios from "./axios_customize"


const getAccountAPI = () =>{
    const URL_BACKEND = "/api/v1/auth/account"
    return axios.get(URL_BACKEND)
}
const logoutAPI = () =>{
    const URL_BACKEND = "/api/v1/auth/logout"
    return axios.post(URL_BACKEND)
}
const registerAPI = (username,fullname,email,password,phone, gender) =>{
    const URL_BACKEND = "/api/v1/auth/register"
    const data = {
        userName: username,
        fullName: fullname,
        email:email,
        phone:phone,
        gender: gender,
        password: password
    }
    return axios.post(URL_BACKEND,data)
}
const loginAPI = (username,  password) =>{
    const URL_BACKEND = "/api/v1/auth/login"
    console.log("check api nhe", username)
    console.log("check api nhe", password)
    const data = {
        userName: username,
        password: password
    }
    console.log(data)
    return axios.post(URL_BACKEND, data)
}

const searchAPI = (Prompt) => {
    const URL_BACKEND = `/api/v1/searches/${Prompt}`
    const data = {
        Prompt: Prompt
    }

    return axios.post(URL_BACKEND, data)
}

export{
    getAccountAPI, logoutAPI, registerAPI, loginAPI, searchAPI

}