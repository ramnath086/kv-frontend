import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 to-white p-4">
      <h1 className="text-4xl font-bold text-pink-800 mb-4 text-center">Welcome to Kalyana Vaibhogam ®</h1>
      <p className="text-lg text-gray-700 mb-6 text-center max-w-xl">
        India's Premier Matrimonial Service Since 2023. Join thousands who have found their perfect match with us. Sign up to find your soulmate today!
      </p>
      <div className="flex space-x-4">
        <Link to="/register" className="bg-pink-600 text-white px-6 py-2 rounded-xl hover:bg-pink-700 transition">Register</Link>
        <Link to="/login" className="border border-pink-600 text-pink-600 px-6 py-2 rounded-xl hover:bg-pink-50 transition">Login</Link>
      </div>
    </div>
  );
};

export default Home;