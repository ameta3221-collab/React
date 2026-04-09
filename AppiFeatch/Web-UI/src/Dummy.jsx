import React from 'react'

const Dummy = ({ dataa }) => {

  if (!dataa || !dataa.products) {
    return <h1 className="text-center mt-10 text-gray-600">No Products Found</h1>
  }

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen p-6">

      {/* TITLE */}
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        🛍️ Our Products
      </h1>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {dataa.products.map((x) => (
          <div
            key={x.id}
            className="bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 overflow-hidden group"
          >

            {/* IMAGE */}
            <div className="relative overflow-hidden">
              <img
                src={x.thumbnail}
                alt={x.title}
                className="w-full h-52 object-cover group-hover:scale-110 transition duration-300"
              />

              {/* DISCOUNT BADGE */}
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                {x.discountPercentage}% OFF
              </span>

              {/* QUICK VIEW */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                <button className="bg-white text-black px-4 py-2 rounded-lg text-sm">
                  Quick View
                </button>
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-4">

              <h2 className="font-bold text-lg line-clamp-1 text-gray-800">
                {x.title}
              </h2>

              <p className="text-gray-500 text-sm mt-1 line-clamp-2">
                {x.description}
              </p>

              {/* PRICE + RATING */}
              <div className="flex justify-between items-center mt-3">
                <span className="text-xl font-bold text-green-600">
                  ₹ {x.price}
                </span>

                <span className="text-yellow-500 text-sm font-medium">
                  ⭐ {x.rating}
                </span>
              </div>

              {/* EXTRA INFO */}
              <div className="text-xs text-gray-500 mt-2 space-y-1">
                <p><b>Brand:</b> {x.brand}</p>
                <p><b>Category:</b> {x.category}</p>
                <p><b>Stock:</b> {x.stock}</p>
              </div>

              {/* BUTTONS */}
              <div className="flex gap-2 mt-4">
                <button className="w-1/2 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition text-sm">
                  Add
                </button>

                <button className="w-1/2 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition text-sm">
                  Buy Now
                </button>
              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  )
}

export default Dummy;