import axios from "./axios_customize"


const getAccountAPI = () =>{
    const URL_BACKEND = "/api/v1/auth/account"
    return axios.get(URL_BACKEND)
}
const logoutAPI = () =>{
    const URL_BACKEND = "/api/v1/auth/logout"
    return axios.post(URL_BACKEND)
}
const registerAPI = (username,email,password) =>{
    const URL_BACKEND = "/api/v1/auth/register"
    const data = {
        userName: username,
        email:email,
        password: password
    }
    return axios.post(URL_BACKEND,data)
}
const loginAPI = (username,  password) =>{
    const URL_BACKEND = "/api/v1/auth/login"
    // console.log("check api nhe", username)
    // console.log("check api nhe", password)
    const data = {
        userName: username,
        password: password
    }
    // console.log(data)
    return axios.post(URL_BACKEND, data)
}

//Search(receive prompt from header2) and main(home) page
const searchAPI = (Prompt) => {
    const URL_BACKEND = `/api/v1/searches/${Prompt}`
    const data = {
        Prompt: Prompt
    }

    return axios.post(URL_BACKEND, data)
}

//Search page
const likeAPI = (filmId) => {
    const URL_BACKEND = `/api/v1/films/${filmId}/likes`
    const data = {
        filmId: filmId
    }

    return axios.post(URL_BACKEND, data) 
}

//Search page
const disLikeAPI = (filmId) => {
    const URL_BACKEND = `/api/v1/films/${filmId}/disLikes`
    const data = {
        filmId: filmId
    }

    return axios.post(URL_BACKEND, data) 
}

//Collection page
const createCollectionAPI = (name, userId) => {
    const URL_BACKEND = `/api/v1/collections`
    const data = {
        name: name,
        userId: userId
    }

    return axios.post(URL_BACKEND, data)
}

//Search and collection page
const getCollectionAPI = (userId) => {
    const URL_BACKEND = `/api/v1/collections/user/${userId}`
    const data = {
        userId: userId
    }

    return axios.get(URL_BACKEND, data)
}

//Search page
const addToCollectionAPI = (filmId, collectionId) => {
    const URL_BACKEND = `/api/collectionfilms/CreateAndRemove`
    const data = {
        filmId: filmId,
        addCollections: collectionId
    }

    return axios.post(URL_BACKEND, data)
}

//Collection page
const getFilmsInCollectionAPI = (userId, collectionId) => {
    const URL_BACKEND = `/api/collectionfilms/get/${userId}/${collectionId}`
    const data = {
        userId: userId,
        collectionId: collectionId
    }

    return axios.get(URL_BACKEND, data)
}

//Search page
const getTickedCollectionsAPI = (filmId) => {
    const URL_BACKEND = `/api/collectionfilms/tickedCollection/${filmId}`
    const data = {
        filmId: filmId
    }

    return axios.get(URL_BACKEND, data)
}

export{
    getAccountAPI, logoutAPI, registerAPI, loginAPI, searchAPI, likeAPI, disLikeAPI, createCollectionAPI, getCollectionAPI,
    addToCollectionAPI, getFilmsInCollectionAPI, getTickedCollectionsAPI
}