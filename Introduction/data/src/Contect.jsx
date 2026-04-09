import React from 'react'

const Contect = () => {
  return (
      <div className="bg-gray-500 min-h-screen flex items-center justify-center p-5">

      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        
        <h2 className="text-2xl font-bold text-center mb-5">
          Contact Me
        </h2>

        <form className="space-y-4">

          {/* Name */}
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Message */}
          <textarea
            placeholder="Your message"
            rows="4"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
           

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
          >
            Submit
          </button>

        </form>

      </div>

    </div>
  )
}

export default Contect
