import React from 'react'

const Qualification = ({Quali}) => {
  return (
     <div className="bg-gray-500 min-h-screen p-6">

      <h2 className="text-3xl font-bold text-center mb-6">
        {Quali.dec}
      </h2>

      <div className="max-w-3xl mx-auto space-y-6">

        {/* 10th */}
        <div className="bg-white p-5 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-blue-600">
            10th Class
          </h3>
          <p className="text-gray-600 mt-1">
            Completed from [{Quali.name.Tenth}]
          </p>
          <p className="text-gray-500 text-sm">
            Percentage: XX%
          </p>
        </div>

        {/* 12th */}
        <div className="bg-white p-5 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-blue-600">
            12th Class
          </h3>
          <p className="text-gray-600 mt-1">
            Completed from [{Quali.name.Twelfth}]
          </p>
          <p className="text-gray-500 text-sm">
            Stream: [Science / Commerce / Arts]
          </p>
          <p className="text-gray-500 text-sm">
            Percentage: XX%
          </p>
        </div>

        {/* Graduation */}
        <div className="bg-white p-5 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-blue-600">
            Bachelor of Computer Applications (BCA)
          </h3>
          <p className="text-gray-600 mt-1">
            Currently Pursuing
          </p>
          <p className="text-gray-500 text-sm">
            College: [{Quali.name.College}]
          </p>
        </div>

      </div>

    </div>
  )
}

export default Qualification
