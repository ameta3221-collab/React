import React from 'react'
import { Link } from 'react-router-dom'

const Heder = () => {
  return (

    <div>

          <div className='flex items-center justify-center gap-5 
     backdrop-blur-sm 
    w-full h-[8vh] text-white text-2xl'>

    <Link to={'/Singup'}>Signup</Link>
    <Link to={'/Login'}>Login</Link>


      
      

    </div>
    </div>
  )
}

export default Heder