import React, { useEffect, useState } from "react";
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// MUI Loader
import CircularProgress from "@mui/material/CircularProgress";

const Apii = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [loading, setLoading] = useState(true);

  // 🔄 Fetch Data
  const fetchData = async () => {
    try {
      const result = await axios.get("https://dummyjson.com/recipes");
      setData(result.data.recipes);
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 🔍 Filter
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // 🔃 Sort
  const sortedData = [...filteredData];

  if (sort === "low") {
    sortedData.sort(
      (a, b) => a.caloriesPerServing - b.caloriesPerServing
    );
  } else if (sort === "high") {
    sortedData.sort(
      (a, b) => b.caloriesPerServing - a.caloriesPerServing
    );
  } else if (sort === "az") {
    sortedData.sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
  <div className="min-h-screen bg-gradient-to-b from-gray-600 to-gray-700 p-6 text-black">

  {/* 🔝 TOP BAR */}
  <div className="flex flex-col md:flex-row items-center gap-4 mb-8">

    {/* SORT */}
    <select
      className="p-3 rounded-xl bg-gray-800 border border-gray-600 text-white w-full md:w-auto"
      value={sort}
      onChange={(e) => setSort(e.target.value)}
    >
      <option value="">Sort</option>
      <option value="low">🔥 Low Calories</option>
      <option value="high">🔥 High Calories</option>
      <option value="az">🔤 A-Z</option>
    </select>

    {/* SEARCH */}
 <div className="p-[3px] rounded-2xl bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 hover:scale-105 transition ml-80">

  <input
    type="search"
    placeholder="Search recipe..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className=" w-[70vh] p-2 rounded-2xl bg-gray-900 text-white placeholder-gray-400 outline-none"
  />

</div>

  </div>

  {/* LOADER */}
  {loading ? (
    <div className="flex justify-center items-center mt-20">
      <CircularProgress size={60} />
    </div>
  ) : sortedData.length === 0 ? (
    <h2 className="text-center text-gray-300 text-xl mt-20">
      No Recipes Found 😕
    </h2>
  ) : (

    /* CARDS */
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

      {sortedData.map((item) => (
        <div
          key={item.id}
          className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
        >

          {/* IMAGE FIXED CENTER */}
          <div className="w-full h-44 overflow-hidden flex items-center justify-center bg-gray-900">
            <LazyLoadImage
              src={item.image}
              effect="blur"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="p-4 text-white">

            <h2 className="text-lg font-bold">{item.name}</h2>

            <p className="text-sm text-gray-400">
              {item.cuisine} • {item.difficulty}
            </p>

            <p className="text-sm mt-2">
              ⏱ {item.prepTimeMinutes + item.cookTimeMinutes} mins
            </p>

            <p className="text-sm mt-1 text-yellow-400">
              🔥 {item.caloriesPerServing} cal
            </p>

            {/* INGREDIENTS */}
            <div className="mt-3">
              <h3 className="font-semibold text-sm">Ingredients:</h3>
              <ul className="text-sm list-disc ml-5 text-gray-300">
                {item.ingredients.slice(0, 3).map((ing, i) => (
                  <li key={i}>{ing}</li>
                ))}
              </ul>
            </div>

            {/* BUTTON */}
            <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 p-2 rounded-lg transition">
              View Recipe
            </button>

          </div>
        </div>
      ))}

    </div>
  )}

</div>
  );
};

export default Apii;