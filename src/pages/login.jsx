import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 flex items-center justify-center p-5">
      <div className="bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-md p-8">

        <h1 className="text-3xl font-extrabold text-white text-center mb-8 drop-shadow-lg">
          🔐 Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-5">

          {/* Email */}
          <div>
            <label className="text-white font-semibold mb-1 block">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/70 backdrop-blur border border-white/40 
              focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-900 placeholder-gray-700"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-white font-semibold mb-1 block">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/70 backdrop-blur border border-white/40 
              focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-900 placeholder-gray-700"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 mt-2 bg-white/40 hover:bg-white/60 transition rounded-xl 
            backdrop-blur border border-white/30 shadow-lg text-white font-semibold text-lg"
          >
            Login
          </button>

        </form>

      </div>
    </div>
  );
};

export default Login;
