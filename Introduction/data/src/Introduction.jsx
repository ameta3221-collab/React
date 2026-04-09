import React from "react";

const Introduction = ({ intro }) => {
  return (
    <div className="p-10 bg-gray-500 min-h-screen font-sans flex flex-col items-center">

      {/* ✅ Image fix (public folder se load hoga) */}
      <img
        src="/mypic.png"
        alt="mypic"
        className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg"
      />

      <div className="max-w-3xl mx-auto p-8 rounded-xl shadow-md text-center text-white mt-6 bg-gray-600">

        {/* ✅ Safe access (error nahi aayega) */}
        <h2 className="mb-4 text-2xl font-semibold">
          {intro?.des}
        </h2>

        <h3 className="text-xl font-bold">
          {intro?.First?.[0]}
        </h3>

        <p className="mt-2">
          {intro?.First?.[1]}
        </p>

        <p className="mt-2">
          {intro?.First?.[2]}
        </p>

      </div>

    </div>
  );
};

export default Introduction;