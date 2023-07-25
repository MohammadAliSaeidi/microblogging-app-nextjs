import axios from "axios";

export async function POST(userData) {
    console.log(userData)
    return await axios.post('/api/login', userData, {baseURL: process.env.JSON_SERVER_BASE_URL})
}