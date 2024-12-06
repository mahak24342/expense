import React from "react";
import { useGetUserInfo } from "../hooks/useGetUserInfo";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase-config";

const Nav = () => {
  const { name, profilePhoto } = useGetUserInfo();

  const signUserOut = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      window.location.href = "/"; // Redirects to the home page
    } catch (err) {
      console.error("Error signing out:", err);
    }
  };

  return (
    <nav className="bg-pink-200  p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="text-black text-2xl font-extrabold">
          <a href="/" className="hover:text-blue-600 transition duration-300">
            Expensii
          </a>
        </div>

        {/* Authenticated Info */}
        <div className="flex items-center space-x-4">
          {profilePhoto && (
            <div className="flex items-center space-x-2">
              <img
                src={profilePhoto}
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-white shadow-md"
              />
              <p className="text-black font-medium hidden sm:block">{name}</p>
              <button
                onClick={signUserOut}
                className="px-4 py-2 bg-pink-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition-transform transform hover:scale-105"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
