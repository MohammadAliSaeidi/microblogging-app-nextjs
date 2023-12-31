'use client'

import {useState} from 'react'
import {useRouter} from 'next/navigation'
import './signup.css'
import axios from "axios";

function Signup() {
    const router = useRouter()
    const [formData, setFormData] = useState({
        username: '', email: '', password: ''
    })

    function onInputChange(e) {
        setFormData(prevData => ({
            ...prevData,
            [e.target.name]: e.target.value
        }));
    }

    const registerUser = async (e) => {
        e.preventDefault()
        const result = await axios.post('/api/login', userData, {baseURL: process.env.JSON_SERVER_BASE_URL})
        console.log(result)
    }

    return <div className='bg'>
        <div className='form-container'>
            <form>
                <input
                    name='username'
                    type="text"
                    onChange={onInputChange}
                    placeholder="example_username_02"/>
                <input
                    name='email'
                    type="email"
                    onChange={onInputChange}
                    placeholder='example@email.com'/>
                <input
                    name='password'
                    type="password"
                    onChange={onInputChange}
                    placeholder='********'/>
                <input
                    type="submit"
                    value='Signup'
                    onClick={registerUser}/>
            </form>
        </div>
    </div>
}

export default Signup;