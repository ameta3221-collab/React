import React, { useState } from "react";

const Login = () => {
  const [show, setShow] = useState(false);

  const [form, setform] = useState({
    email: "",
    password: "",
  });

  const [loggedUser, setLoggedUser] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    const result = JSON.parse(localStorage.getItem("user"));

    if (!result) {
      alert("You Have To Signup First !");
      return;
    }

    if (form.email !== result.email && form.password !== result.password) {
      alert("Email & Password not matched");
    } else if (form.email !== result.email) {
      alert("Email not matched");
    } else if (form.password !== result.password) {
      alert("Password not matched");
    } else {
      alert("Login Successfully 🔥");

      setLoggedUser(result);

      setform({
        email: "",
        password: "",
      });
    }
  }

 
  const handleClear = () => {
      setLoggedUser(null);
    setform({
      email: "",
      password: "",
    });
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center gap-10 relative overflow-hidden text-white">

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* 💎 Login Card */}
      <div className="relative backdrop-blur-x bg-white/10 p-10 rounded-2xl shadow-2xl w-80 border border-white/20 animate-fadeIn">

        <h2 className="text-3xl font-bold text-center mb-8">
          Welcome Back
        </h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setform({ ...form, email: e.target.value })}
          className="w-full p-3 mb-4 rounded-lg bg-white/10 border border-white/30 text-white outline-none"
        />

        {/* Password */}
        <div className="relative">
          <input
            type={show ? "text" : "password"}
            placeholder="Password"
            value={form.password}
            onChange={(e) => setform({ ...form, password: e.target.value })}
            className="w-full p-3 rounded-lg bg-white/10 border border-white/30 text-white outline-none"
          />

          <span
            onClick={() => setShow(!show)}
            className="absolute right-3 top-3 cursor-pointer"
          >
            {show ? "👁️" : "🙈"}
          </span>
        </div>

        {/* Login Button */}
        <button
          onClick={handleSubmit}
          className="w-full mt-5 py-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg"
        >
          Login
        </button>
      </div>

      {/* 🎉 USER DATA (RIGHT SIDE) */}
      {loggedUser && (
        <div className="backdrop-blur-x bg-white/10 p-6 rounded-xl border border-white/20 w-80 animate-fadeIn">
          <h3 className="text-xl font-bold mb-3 text-center">
            User Details 🎉
          </h3>

          <p><strong>Name:</strong> {loggedUser.name}</p>
          <p><strong>Email:</strong> {loggedUser.email}</p>
          <p><strong>Age:</strong> {loggedUser.age}</p>
          <p><strong>Phone:</strong> {loggedUser.phone}</p>
          <p><strong>DOB:</strong> {loggedUser.dob}</p>
          <p><strong>Address:</strong> {loggedUser.address}</p>
          <p><strong>Country:</strong> {loggedUser.country}</p>
          <p><strong>Gender:</strong> {loggedUser.gender}</p>
          <p><strong>Experience:</strong> {loggedUser.experience}</p>

          {/* 🔥 CLEAR BUTTON */}
          <button
            onClick={handleClear}
            className="w-full mt-5 py-2 bg-red-500 rounded-lg hover:scale-105 transition"
          >
            Clear Data
          </button>
        </div>
      )}

      {/* Animation */}
      <style>
        {`
          .animate-fadeIn {
            animation: fadeInScale 2s ease forwards;
          }

          @keyframes fadeInScale {
            0% { opacity: 0; transform: scale(0.8); }
            100% { opacity: 1; transform: scale(1); }
          }
        `}
      </style>

    </div>
  );
};

export default Login;