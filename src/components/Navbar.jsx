import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-3 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Kalyana Vaibhogam
        </Link>
        <div className="space-x-4">
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/matches">Matches</Link>
          <Link to="/chat">Chat</Link>
          <Link to="/admin">Admin</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
