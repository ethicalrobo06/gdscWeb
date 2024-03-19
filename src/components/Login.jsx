import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = (e) => {
        // e.preventDefault()
        console.log("Email:", email)
        console.log("Password:", password)
    }
    return (
        <div className='flex flex-col items-center bg-sky-200 w-full justify-center h-screen '>
            <div className='flex flex-col border-2 border-sky-700 rounded-lg p-10'>
                <h1 className='text-5xl font-semibold'>Login</h1>
                <p className='my-5 '>Enter your details below</p>
                <input value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='border-b-2 focus:border-blue-600  border-gray-300 outline-none text-xl p-2 ' type="email" placeholder='Email' />
                <input value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='border-b-2 focus:border-blue-600  border-gray-300 outline-none text-xl p-2 ' type="password" placeholder='Password' />
                <button onClick={handleLogin} className='bg-red-600 mt-4 text-white rounded-lg py-4'>Login</button>
                <Link to='/register'>
                    < p className='mt-2 text-center'>New User?</p>
                </Link >

            </div>
        </div >
    )
}

export default Login