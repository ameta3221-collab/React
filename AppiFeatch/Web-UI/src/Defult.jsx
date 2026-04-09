import React from 'react'
import { Link } from 'react-router-dom'

const Defult = () => {
  return (
    <div className="flex gap-4 flex-wrap justify-center bg-gray-800 h-[5vh] text-3xl">

    <Link className="text-white no-underline text-sm" to="/">Appi</Link>
    <Link className="text-white no-underline text-sm" to="/Dummy">Dummy</Link> 
    <Link className="text-white no-underline text-sm" to="/Dusara">Dusara</Link> 
    <Link className="text-white no-underline text-sm" to="/TwoApifeach">TwoApifeach</Link> 

    </div>
  )
}

export default Defult
