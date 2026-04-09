import React from 'react'

const Dusara = ({ datas }) => {

  if (!datas || !datas.recipes) {
    return <h1 className="text-center text-white mt-10">No Data Found</h1>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 p-6">
      
      <h1 className="text-3xl font-bold text-center text-white mb-8">
        🍽️ Recipe Collection
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        
        {datas.recipes.map((item) => (
          <div
            key={item.id}
            className="bg-gray-800 text-white rounded-2xl w-72 shadow-xl overflow-hidden hover:scale-105 hover:shadow-2xl transition duration-300"
          >

            {/* Image */}
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-44 object-cover"
              />
              <span className="absolute top-2 right-2 bg-yellow-400 text-black text-xs px-2 py-1 rounded">
                ⭐ {item.rating}
              </span>
            </div>

            {/* Content */}
            <div className="p-4 space-y-2">

              <h2 className="text-lg font-bold text-blue-400">
                {item.name}
              </h2>

              <p className="text-xs text-gray-300">
                {item.cuisine} • {item.difficulty}
              </p>

              <p className="text-sm text-gray-400">
                ⏱ {item.prepTimeMinutes + item.cookTimeMinutes} mins
              </p>

              {/* Ingredients */}
              <div>
                <h3 className="mt-2 font-semibold text-sm text-green-400">
                  Ingredients:
                </h3>

                <ul className="text-sm list-disc ml-5 text-gray-300">
                  {item.ingredients.slice(0, 3).map((ing, i) => (
                    <li key={i}>{ing}</li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <button className="w-full mt-3 bg-blue-500 hover:bg-blue-600 py-1.5 rounded-lg text-sm transition">
                View Details
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  )
}

export default Dusara;