import React from 'react'

const About_us = ({abus}) => {
  return (
    <div className="bg-gray-500 min-h-screen flex items-center justify-center p-6">

      <div className="bg-white p-8 rounded-xl shadow-md max-w-3xl text-center">

        <h2 className="text-3xl font-bold mb-4">
         {abus.dec}
        </h2>

        <p className="text-gray-600 mb-4">
          {abus.name}
        </p>

      </div>

    </div>
  )
}

export default About_us
