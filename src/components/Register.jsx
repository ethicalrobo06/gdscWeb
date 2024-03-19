import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Register = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    return (
        <div className='flex flex-col items-center bg-sky-200 w-full justify-center h-screen '>
            <div className='flex flex-col border-2 border-sky-700 rounded-lg p-10'>
                <h1 className='text-5xl font-semibold'>Create an Account</h1>
                <p className='my-5 '>Enter your details below</p>
                <input value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='border-b-2 focus:border-blue-600  border-gray-300 outline-none text-xl p-2 ' type="text" placeholder='Name' />
                <input value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='border-b-2 focus:border-blue-600  border-gray-300 outline-none text-xl p-2 ' type="text" placeholder='Email or Phone Number' />
                <input value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='border-b-2 focus:border-blue-600  border-gray-300 outline-none text-xl p-2 ' type="password" placeholder='Password' />
                <button className='bg-red-600 mt-4 text-white rounded-lg py-4'>Create Account</button>
                <Link to='/'>
                    < p > Already have an Account? Login</p>
                </Link>
            </div >
        </div >
    )
}

export default Register