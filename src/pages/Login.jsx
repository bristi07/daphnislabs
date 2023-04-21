import React from 'react'
import { useNavigate } from "react-router-dom";
// import loginImg from '../assets/login.jpg'

export default function Login() {
    const navigate = useNavigate();
    const handleClick = () => {
      navigate("/register")
    };
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src="https://mcdn.wallpapersafari.com/medium/33/78/QcSFBJ.png" alt="" />
        </div>

        <div className='bg-gray-100 flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto bg-white p-4'>
                <h2 className='text-4xl font-semibold text-center py-6'>Daphnis Labs</h2>
                <div className='flex flex-col py-2'>
                    <label>Username</label>
                    <input className='border p-2' type="text" />
                </div>
                <div className='flex flex-col  py-2'>
                    <label>Email</label>
                    <input className='border p-2' type="email" />
                </div>
                <button className='border w-full my-5 py-2 bg-indigo-800 hover:bg-indigo-500 text-white'>Sign In</button>
                <div className='flex justify-between'>
                <button className='border w-full my-5 py-2 bg-indigo-800 hover:bg-indigo-500 text-white' onClick={handleClick
                }>Create an account</button>
                </div>
            </form>
        </div>
    </div>
  )
}
