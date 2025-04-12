import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
        <div className='flex flex-col items-center'>
            <h1 className=' text-6xl bg-black text-white rounded-xl p-2'>WELCOME TO WEATHER PLATFORM</h1>
            <Link to='/weather' className='mt-5 text-xl text-blue-500'>👉click here to check weather</Link>
        </div>
    </div>
  )
}

export default Home