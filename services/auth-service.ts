import axios from "axios";

//add in URL later
const BASE_URL = process.env.REACT_APP_BASE_URL

const AUTH_API = `@{BASE_URL}/api/auth`

const api = axios.create({
    withCredentials: true
});


//TODO: Check that user: any is the correct way to fix code
export const signup = (user: any) =>
    api.post(`${AUTH_API}/signup`, user).then(response =>response.data);

export const profile = ()=>
    api.post(`${AUTH_API}/profile`).then(response => response.data);

export const Logout = (user: any) =>
    api.post(`${AUTH_API}/logout`, user).then(response =>response.data);

export const Login = (credentials: any) =>
    api.post(`${AUTH_API}/login`, credentials)
        .then(response => response.data);

