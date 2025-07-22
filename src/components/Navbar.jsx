import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/signup', label: 'Signup' },
    { path: '/login', label: 'Login' },
    { path: '/profile', label: 'Profile' },
    { path: '/matches', label: 'Matches' },
    { path: '/chat', label: 'Chat' },
    { path: '/admin', label: 'Admin' },
  ];

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-xl font-bold text-blue-600">KalyanaVaibhogam</div>
      <div className="space-x-4">
        {navLinks.map(link => (
          <Link
            key={link.path}
            to={link.path}
            className={`${
              location.pathname === link.path ? 'text-blue-600 font-semibold' : 'text-gray-700'
            } hover:text-blue-500`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
