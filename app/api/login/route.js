import axios from "axios";

export async function POST(credentials) {
    console.log(credentials)
    return await axios.post('/api/login', credentials, {baseURL: process.env.JSON_SERVER_BASE_URL})
}