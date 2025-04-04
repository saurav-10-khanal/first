import React, { useState } from "react";
import { toast, Toaster } from "sonner";
import axios from "axios";

export default function AuthPage() {
  const [formData, setFormData] = useState({ email: "", username: "", password: "" });
  const [isPending, setIsPending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    try {
      // Dummy successful simulation
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Registration successful! Redirecting...");
      setTimeout(() => window.location.href = "/", 500);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.error || "Registration failed. Try again.";
        toast.error(errorMessage);
      } else {
        toast.error("An unexpected error occurred.");
      }
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-200 to-gray-700">
      <Toaster />
      <div className="w-[80vw] h-[90vh] flex shadow-lg rounded-2xl overflow-hidden bg-white">
        {/* Left Side - Image */}
        <div
          className="w-1/2 bg-cover bg-center flex flex-col justify-center items-center p-6"
          style={{ backgroundImage: "url('/Doctor.png')" }}
        ></div>

        {/* Right Side - Form */}
        <div className="w-1/2 flex flex-col items-center justify-center p-10 bg-gray-100">
          <h1 className="text-3xl font-bold text-center text-black drop-shadow-lg">Welcome to MedicoHub</h1>
          <p className="text-center text-black text-lg mt-2 drop-shadow-lg">Your trust is our pride</p>

          <div className="w-full max-w-md p-6 shadow-2xl bg-white mt-8 rounded-xl">
            <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">Register</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                <input
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  id="username"
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isPending}
                className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-lg font-semibold transition"
              >
                {isPending ? "Registering..." : "Register"}
              </button>
            </form>
          </div>

          {/* Link to Login */}
          <div className="mt-4 text-center">
            <p className="text-sm font-bold text-black">
              Already have an account?{' '}
              <a href="/sign-in" className="text-blue-600 hover:underline">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
