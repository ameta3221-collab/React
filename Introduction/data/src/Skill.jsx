import React from 'react'

const Skill = ({ skills }) => {
  return (
   <div className="p-5 font-sans bg-gray-500 min-h-screen">

      <h2 className="text-center text-gray-800 mb-5 text-2xl font-semibold">
        {skills.Des}
      </h2>

      <div className="flex justify-center flex-wrap gap-5 mt-20">

        {/* Skill Card 1 */}
        <div className="bg-white p-5 rounded-lg w-52 shadow-md text-center  hover:scale-105 transition">
          <h3 className="text-lg font-semibold">{skills.First[0]}</h3>
          <p className="text-gray-600 mt-2">
            Strong knowledge of HTML structure and tags
          </p>
        </div>

        {/* Skill Card 2 */}
        <div className="bg-white p-5 rounded-lg w-52 shadow-md text-center  hover:scale-105 transition">
          <h3 className="text-lg font-semibold">{skills.First[1]}</h3>
          <p className="text-gray-600 mt-2">
            Good at designing responsive layouts
          </p>
        </div>

        {/* Skill Card 3 */}
        <div className="bg-white p-5 rounded-lg w-52 shadow-md text-center  hover:scale-105 transition">
          <h3 className="text-lg font-semibold">{skills.First[2]}</h3>
          <p className="text-gray-600 mt-2">
            Knowledge of ES6, DOM, and logic building
          </p>
        </div>

        {/* Skill Card 4 */}
        <div className="bg-white p-5 rounded-lg w-52 shadow-md text-center  hover:scale-105 transition">
          <h3 className="text-lg font-semibold">{skills.First[3]}</h3>
          <p className="text-gray-600 mt-2">
            Basic understanding of components and JSX
          </p>
        </div>

      </div>

    </div>
  )
}

export default Skill