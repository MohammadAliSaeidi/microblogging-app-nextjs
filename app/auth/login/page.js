'use client'

import {useState} from 'react'
import {getCsrfToken, signIn} from 'next-auth/react';
import {useSearchParams, useRouter} from "next/navigation";
import './login.css'

export default function Login({csrfToken}) {
    const router = useRouter();

    const [formData, setFormData] = useState({
        username: '', email: '', password: ''
    })

    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/";

    function onInputChange(e) {
        setFormData(prevData => ({
            ...prevData, [e.target.name]: e.target.value
        }));
    }

    const loginUser = async (e) => {
        e.preventDefault()
        try {

            const result = await signIn("credentials", {
                username: formData.username,
                email: formData.email,
                password: formData.password,
                callbackUrl
            })
            console.log(result)

            if (!result?.error) {
                router.push(callbackUrl)
            } else {
                console.log("invalid email or password")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return <div className='bg'>
        <div className='form-container'>
            <form>
                <label>
                    Username or Email
                    <input
                        name='username'
                        type="text"
                        onChange={onInputChange}
                        placeholder="example_username_02"/>
                </label>
                <label>
                    Password
                    <input
                        name='password'
                        type="password"
                        onChange={onInputChange}
                        placeholder='********'/>
                </label>
                <input
                    type="submit"
                    value='Login'
                    onClick={loginUser}/>
            </form>
        </div>
    </div>
}

export async function getServerSideProps(context) {
    return {
        props: {
            csrfToken: await getCsrfToken(context)
        }
    }
}