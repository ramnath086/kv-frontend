import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyShortlist = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchShortlisted = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/user-actions/shortlisted`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(res.data);
    };
    fetchShortlisted();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">💛 My Shortlisted Users</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {users.map(user => (
          <div key={user._id} className="p-4 border rounded shadow bg-white">
            <h3 className="text-lg font-semibold">{user.name}</h3>
            <p>{user.profession} | {user.religion} | {user.language}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyShortlist;
