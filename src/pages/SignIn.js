import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import { IoSunnyOutline } from "react-icons/io5";
import { LuMoon } from "react-icons/lu";
import {
  FaApple,
  FaGoogle,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaDiscord,
} from "react-icons/fa";
import logo from "../assets/logo.png";
import sideRightImage from "../assets/side right.png";

const SignIn = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`flex flex-col md:flex-row justify-between items-center md:items-start min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      {/* Image Container (Visible only on desktop) */}
      <div
        className={`hidden md:block relative top-6 bottom-6 ${
          darkMode ? "bg-gray-900" : "bg-gray-100"
        }`}
        style={{
          marginTop: window.innerWidth > 1300 ? "24px" : "0",
          marginBottom: window.innerWidth > 1300 ? "24px" : "0",
          marginLeft: window.innerWidth > 1300 ? "32px" : "0",
        }}
      >
        <img
          src={sideRightImage}
          alt="Sign In Visual"
          className="w-[704px] h-[976px] opacity-100"
        />
        <button
          className={`absolute top-[114px] left-[122px] ${
            darkMode ? "bg-white text-black" : "bg-white text-black"
          } text-2xl font-bold py-[13.02px] px-[21.71px] w-[151.31px] h-[61px] rounded-full opacity-100 shadow-md`}
        >
          Base
        </button>

        {/* Dark Mode/Light Mode Button */}
        <button
          onClick={toggleDarkMode}
          className={`absolute top-[872px] left-[122px] ${
            darkMode ? "bg-gray-700 text-white" : "bg-white text-black"
          } w-[76px] h-[40px] px-0 py-[4px] flex items-center justify-between rounded-full shadow-md`}
        >
          <IoSunnyOutline className="text-xl" />
          <LuMoon className="text-xl" />
        </button>
      </div>

      {/* Top Bar (Visible only on mobile) */}
      <div
  className={`md:hidden fixed top-0 left-0 w-full h-[80px] mb-6 flex items-center px-4 ${
    darkMode ? "bg-blue-700" : "bg-blue-500"
  }`}
  style={{
    opacity: 1,
    gap: "0px",
  }}
>
  <img src={logo}  alt="Logo" className="h-10 w-auto text-white" />
  <span className="ml-2 text-white font-bold text-lg">Base</span>
</div>

      {/* Sign-In Container */}
      <div
        className={`flex flex-col items-center ml-[10%] mr-[10%] mt-[14%] mb-[14%] md:items-start p-4 md:p-8 shadow-md rounded-lg w-full md:max-w-md ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
        }`}
      >
        <h1 className="text-3xl font-bold text-start mb-2">Sign In</h1>
        <p className="text-center md:text-left mb-4">Sign in to your account</p>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full mb-4">
          <button
            className={`flex items-center justify-center py-2 px-2 rounded-lg transition w-full md:w-auto ${
              darkMode
                ? "bg-gray-950 hover:bg-gray-800"
                : "bg-white text-gray-800 hover:bg-gray-50"
            }`}
          >
            <FaGoogle className="mr-2" /> Sign in with Google
          </button>
          <button
            className={`flex items-center justify-center py-2 px-2 rounded-lg transition w-full md:w-auto ${
              darkMode
                ? "bg-gray-950 hover:bg-gray-800"
                : "bg-white text-gray-800 hover:bg-gray-50"
            }`}
          >
            <FaApple className="mr-2" /> Sign in with Apple
          </button>
        </div>
        <div
          className={`rounded-lg p-6 md:p-8 w-full ${
            darkMode ? "bg-gray-950" : "bg-white"
          }`}
        >
          <form className="mt-4 w-full text-left">
            <div className="mb-4">
              <label
                className={`block text-sm font-bold mb-2 ${
                  darkMode ? "text-gray-300" : "text-black"
                }`}
                htmlFor="email"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="johndoe@gmail.com"
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none ${
                  darkMode
                    ? "bg-gray-800 border-gray-600 focus:ring-gray-400"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              />
            </div>
            <div className="mb-6">
              <label
                className={`block text-sm font-bold mb-2 ${
                  darkMode ? "text-gray-300" : "text-black"
                }`}
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none ${
                  darkMode
                    ? "bg-gray-800 border-gray-600 focus:ring-gray-400"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              />
            </div>
            <Link
              to="/" // Adjust the route if needed
              className={`text-sm hover:underline ${
                darkMode ? "text-gray-400" : "text-blue-500"
              }`}
            >
              Forgot password?
            </Link>
            <div className="mt-4">
              <Link
                to="/home"
                className={`w-full font-bold py-2 px-4 rounded-lg focus:outline-none inline-block text-center ${
                  darkMode
                    ? "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 text-black"
                    : "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 text-white"
                }`}
              >
                Sign In
              </Link>
            </div>
          </form>
        </div>

      <div className="flex flex-col items-center mt-6 mb-4 ml-auto mr-auto">
    <p className="text-center text-sm mb-4">
      Don’t have an account?{" "}
      <a
        href="#"
        className={`hover:underline ${
          darkMode ? "text-blue-600" : "text-blue-500"
        }`}
      >
        Register here
      </a>
    </p>
    <div
      className="flex items-center justify-center gap-4 mt-6"
      style={{
        width: "239.2px",
        height: "38.4px",
        opacity: 1, // Adjust opacity to 1 if you want the icons to be visible
      }}
    >
      <FaGithub className="text-2xl hover:text-gray-500 transition duration-300" />
      <FaTwitter className="text-2xl hover:text-blue-400 transition duration-300" />
      <FaLinkedin className="text-2xl hover:text-blue-700 transition duration-300" />
      <FaDiscord className="text-2xl hover:text-purple-600 transition duration-300" />
    </div>
  </div>
      </div>
    </div>
  );
};

export default SignIn;
