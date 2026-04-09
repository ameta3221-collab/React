import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="bg-slate-700 p-4 flex flex-col items-center">

  <h2 className="mb-2 text-lg font-semibold text-white">
    MY PORTFOLIO
  </h2>

  <div className="flex gap-4 flex-wrap justify-center">
     <Link className="text-white no-underline text-sm" to="/">Introduction</Link>
    <Link className="text-white no-underline text-sm" to="/skill">Skill</Link>
    <Link className="text-white no-underline text-sm" to="/Project">Project</Link>
    <Link className="text-white no-underline text-sm" to="/Qualification">Qualification</Link>
    <Link className="text-white no-underline text-sm" to="/Expireance">Expireance</Link>
    <Link className="text-white no-underline text-sm" to="/Hobbies">Hobbies</Link>
    <Link className="text-white no-underline text-sm" to="/About_us">About_us</Link>
    <Link className="text-white no-underline text-sm" to="/Contect">Contect</Link>
    <Link className="text-white no-underline text-sm" to="/Counters">Counters</Link>
   
  </div>

</div>
  )
}

export default Header