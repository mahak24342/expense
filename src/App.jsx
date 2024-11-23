// src/components/HomePage.js
import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-gray-500 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-16 px-6 bg-blue-600 text-white">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          Welcome to Our App
        </h1>
        <p className="mt-4 text-xl md:text-2xl">
          The best app for managing all your tasks and projects.
        </p>
        <button className="mt-8 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 text-center bg-gray-100">
        <h2 className="text-3xl font-semibold mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-medium text-gray-800">Fast & Efficient</h3>
            <p className="mt-4 text-gray-600">Get things done quicker with our intuitive design.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-medium text-gray-800">Seamless Integration</h3>
            <p className="mt-4 text-gray-600">Easily integrate with other tools you love.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-medium text-gray-800">Collaboration Ready</h3>
            <p className="mt-4 text-gray-600">Collaborate effortlessly with your team.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-blue-600 text-white">
        <h2 className="text-3xl font-semibold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-8">Join thousands of happy users today!</p>
        <button className="px-8 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600">
          Start Free Trial
        </button>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-white text-center">
        <p>&copy; 2024 Your App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
