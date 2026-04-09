import React from 'react'

const Project = ({Project}) => {
  return (
   <div className="bg-gray-500 min-h-screen text-white py-10 px-5">

      <h2 className="text-3xl font-bold text-center mb-10 text-white">
        {Project.des}
      </h2>

      <div className="flex flex-wrap justify-center gap-6">

      {Project.projname.map((x,index)=>(
        <div  
             key={index}
            className="bg-gray-800 p-6 rounded-xl w-60 text-center hover:scale-105 transition">
        {x}
       
      </div>))}

       
    </div>
    </div>
  )
}

export default Project
