import React from 'react'

const Expireance = () => {
  return (
    <div>
     <div className="bg-gray-500 min-h-screen p-6">

      <h2 className="text-3xl font-bold text-center mb-6">
        My Experience
      </h2>

      <div className="max-w-3xl mx-auto space-y-6">

        {/* Experience Card 1 */}
        <div className="bg-white p-5 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-blue-600">
            Web Development Learning
          </h3>
          <p className="text-gray-600 mt-2">
            I have been learning HTML, CSS, JavaScript, and React. I have built multiple small projects like portfolio websites and practice apps.
          </p>
        </div>

        {/* Experience Card 2 */}
        <div className="bg-white p-5 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-blue-600">
            Projects Practice
          </h3>
          <p className="text-gray-600 mt-2">
            Created projects like tourism website and restaurant website using HTML, CSS, JavaScript, PHP, and MySQL.
          </p>
        </div>

        {/* Experience Card 3 */}
        <div className="bg-white p-5 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-blue-600">
            Currently Learning
          </h3>
          <p className="text-gray-600 mt-2">
            Currently improving skills in React, Tailwind CSS, and backend development (MERN Stack).
          </p>
        </div>

      </div>

    </div>
  
    </div>
  )
}

export default Expireance
