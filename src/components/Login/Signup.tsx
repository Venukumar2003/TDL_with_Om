import React, { useState } from "react";

const Signup: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    setName("")
    setEmail("")
    setPassword("")

    console.log({
      name,
      email,
      password,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-8">

        <h1 className="text-3xl font-bold text-center text-violet-700 mb-6">
          Sign Up
        </h1>

        <form onSubmit={handleSignup} className="space-y-5">

          <div>
            <label className="block mb-2 font-medium">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-lg p-3 outline-none focus:border-violet-600"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-lg p-3 outline-none focus:border-violet-600"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-lg p-3 outline-none focus:border-violet-600"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-violet-700 text-white py-3 rounded-lg hover:bg-violet-800 cursor-pointer"
          >
            Create Account
          </button>

        </form>

      </div>

    </div>
  );
};

export default Signup;