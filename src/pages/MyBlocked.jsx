import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyBlocked = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchBlocked = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/user-actions/blocked`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(res.data);
    };
    fetchBlocked();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">🚫 Blocked Users</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {users.map(user => (
          <div key={user._id} className="p-4 border rounded shadow bg-white">
            <h3 className="text-lg font-semibold">{user.name}</h3>
            <p>{user.profession} | {user.language} | {user.religion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBlocked;
