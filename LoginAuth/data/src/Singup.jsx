import React, { useState } from "react";

const Signup = () => {
  const [form, setform] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    phone: "",
    dob: "",
    address: "",
    country: "",
    gender: "",
    experience: 0,
  });

  const [show, setShow] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(form));

    alert("Signup Successfully 🔥");

    setform({
      name: "",
      email: "",
      password: "",
      age: "",
      phone: "",
      dob: "",
      address: "",
      country: "",
      gender: "",
      experience: 5,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden text-white">

     

      {/* 🔥 OVERLAY */}
      <div className="absolute inset-0 bg-black/25"></div>

      {/* 💎 CARD */}
      <div className="relative backdrop-blur-x bg-white/10 p-8 rounded-2xl shadow-2xl w-[500px] border border-white/20 animate-fadeIn max-h-[90vh] overflow-y-auto">

        <h2 className="text-3xl font-bold text-center mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">

          {/* Full Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={ (e) => setform ({...form, name : e.target.value})}
            className="col-span-2 p-3 rounded-lg bg-white/10 border border-white/30 outline-none"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
           onChange={ (e) => setform ({...form, email : e.target.value})}
            className="p-3 rounded-lg bg-white/10 border border-white/30 outline-none"
          />

          {/* Password */}
          <div className="relative">
            <input
              type={show ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={ (e) => setform ({...form, password : e.target.value})}
              className="w-full p-3 rounded-lg bg-white/10 border border-white/30 outline-none"
            />
            <span
              onClick={() => setShow(!show)}
              className="absolute right-3 top-3 cursor-pointer"
            >
              {show ? "👁️" : "🙈"}
            </span>
          </div>

          {/* Age */}
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={form.age}
           onChange={ (e) => setform ({...form, age : e.target.value})}
            className="p-3 rounded-lg bg-white/10 border border-white/30 outline-none"
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={form.phone}
           onChange={ (e) => setform ({...form, phone : e.target.value})}
            className="p-3 rounded-lg bg-white/10 border border-white/30 outline-none"
          />

          {/* DOB */}
          <input
            type="date"
            name="dob"
            value={form.dob}
         onChange={ (e) => setform ({...form, dob : e.target.value})}
            className="p-3 rounded-lg bg-white/10 border border-white/30 outline-none"
          />

          {/* Country */}
          <select
            name="country"
            value={form.country}
           onChange={ (e) => setform ({...form, country : e.target.value})}
            className="p-3 rounded-lg bg-white/10 border border-white/30 outline-none "
          >
            <option value="" className="text-black">Country</option>
            <option value="India" className="text-black">India</option>
            <option value="USA" className="text-black">USA</option>
            <option value="USA" className="text-black">UK</option>
            <option value="USA" className="text-black">Canada</option>
          </select>

          {/* Gender */}
          <div className="col-span-2 flex gap-4">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={form.gender === "Male"}
                onChange={ (e) => setform ({...form, gender : e.target.value})}
              /> Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={form.gender === "Female"}
              onChange={ (e) => setform ({...form, gender : e.target.value})}
              /> Female
            </label>
          </div>

          {/* Experience */}
          <div className="col-span-2">
            <p>Experience: {form.experience} Years</p>
            <input
              type="range"
              name="experience"
              min="0"
              max="15"
              value={form.experience}
              onChange={ (e) => setform ({...form, experience : e.target.value})}
              className="w-full"
            />
          </div>

          {/* Address */}
          <textarea
            name="address"
            placeholder="Address"
            value={form.address}
           onChange={ (e) => setform ({...form, address : e.target.value})}
            className="col-span-2 p-3 rounded-lg bg-white/10 border border-white/30 outline-none"
          />

          {/* Button */}
          <button
            type="submit"
            className="col-span-2 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-105 transition"
          >
            Register
          </button>

        </form>
      </div>

      {/* ✨ Animation */}
      <style>
        {`
          .animate-fadeIn {
            animation: fadeInScale 2.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          }

          @keyframes fadeInScale {
            0% { opacity: 0; transform: scale(0.7); }
            100% { opacity: 1; transform: scale(1); }
          }
        `}
      </style>

    </div>
  );
};

export default Signup;