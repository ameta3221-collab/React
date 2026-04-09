import React from 'react'

const Hobbies = ({Hobb}) => {
  return (
     <div className="bg-gray-500 min-h-screen p-6">

      <h2 className="text-3xl font-bold text-center mb-6">
       {Hobb.Ho}
      </h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" > 
        
      {Hobb.Hobname.map((x,index)=>(
        <div  
             key={index}
            className="bg-white p-6 rounded-xl w-60 text-center hover:scale-105 transition   mb-2">
        {x}
       
      </div>))}

        
        

      </div>

    </div>
  )
}

export default Hobbies
