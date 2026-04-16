import React from 'react'
import { Link } from 'react-router-dom'

const Defult = () => {
  return (
    <div className='flex justify-center gap-10 bg-gray-900 p-4 text-lg font-semibold text-white'>
     
      {/* <Link 
        to='/' 
        className='hover:text-blue-600 transition duration-200'
      >
        Signup
      </Link>

      <Link 
        to='/Login' 
        className='hover:text-blue-600 transition duration-200'
      >
        Login
      </Link> */}


      <Link 
        to='/Apii' 
        className='hover:text-blue-600 transition duration-200'
      >
        Recipes
      </Link>

    </div>
  )
}

export default Defult