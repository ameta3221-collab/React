import React, { useState, useEffect } from 'react';

const Appi = () => {

  const dat = localStorage.getItem("userdata");
  const ans = dat ? JSON.parse(dat) : { products: [] };

  const [user, setUser] = useState(ans);

  const [id, setid] = useState('');
  const [title, settitle] = useState('');
  const [description, setdescription] = useState('');
  const [category, setcategory] = useState('');
  const [price, setprice] = useState('');
  const [discount, setdiscount] = useState('');
  const [rating, setrating] = useState('');
  const [stock, setstock] = useState('');

  // 🔥 Save to localStorage whenever user changes
  useEffect(() => {
    localStorage.setItem("userdata", JSON.stringify(user));
  }, [user]);

  const handle = (e) => {
    e.preventDefault();

    const datas = {
      id,
      title,
      description,
      category,
      price,
      discountPercentage: discount,
      rating,
      stock
    };

    setUser({ products: [...user.products, datas] });

    // Clear form
    setid('');
    settitle('');
    setdescription('');
    setcategory('');
    setprice('');
    setdiscount('');
    setrating('');
    setstock('');
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white p-5'>

      {/* FORM */}
      <form 
        onSubmit={handle} 
        className="max-w-lg mx-auto bg-gray-800 p-6 rounded-2xl shadow-2xl space-y-4"
      >
        <h1 className="text-3xl font-bold text-center text-blue-400">
          Add Product
        </h1>

        <input className="input" type="number" placeholder="ID" value={id} onChange={(e) => setid(e.target.value)} />
        <input className="input" type="text" placeholder="Title" value={title} onChange={(e) => settitle(e.target.value)} />
        <input className="input" type="text" placeholder="Description" value={description} onChange={(e) => setdescription(e.target.value)} />
        <input className="input" type="text" placeholder="Category" value={category} onChange={(e) => setcategory(e.target.value)} />
        <input className="input" type="text" placeholder="Discount %" value={discount} onChange={(e) => setdiscount(e.target.value)} />
        <input className="input" type="text" placeholder="Rating" value={rating} onChange={(e) => setrating(e.target.value)} />
        <input className="input" type="text" placeholder="Stock" value={stock} onChange={(e) => setstock(e.target.value)} />
        <input className="input" type="text" placeholder="Price" value={price} onChange={(e) => setprice(e.target.value)} />

        <button 
          type="submit" 
          className="w-full bg-blue-500 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Add Product
        </button>
      </form>

      {/* PRODUCT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {user.products.map((x, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-2xl p-5 shadow-lg hover:scale-105 transition"
          >
            <h2 className="text-xl font-bold text-blue-600">
              {x.title}
            </h2>

            <p className="text-gray-600 text-sm mb-2">
              {x.description}
            </p>

            <div className="text-sm space-y-1">
              <p><b>ID:</b> {x.id}</p>
              <p><b>Category:</b> {x.category}</p>
              <p><b>Discount:</b> {x.discountPercentage}%</p>
              <p><b>Rating:</b> ⭐ {x.rating}</p>
              <p><b>Stock:</b> {x.stock}</p>

              <p className="text-lg font-bold text-green-600 mt-2">
                ₹ {x.price}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Appi;