import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem('token');

  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/admin/users`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(res.data);
    } catch (err) {
      console.error('Failed to fetch users', err);
      alert('Unauthorized or error fetching users');
    }
  };

  const approveUser = async (userId) => {
    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/api/admin/approve/${userId}`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchUsers();
    } catch (err) {
      alert('Failed to approve user');
    }
  };

  const deleteUser = async (userId) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return;
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/api/admin/delete/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchUsers();
    } catch (err) {
      alert('Failed to delete user');
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">🛡️ Admin Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {users.map((user) => (
          <div key={user._id} className="border rounded p-4 shadow bg-white">
            <h3 className="font-bold text-lg">{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Mobile: {user.mobile}</p>
            <p>Role: <span className="font-semibold">{user.role}</span></p>
            <p>Status: <span className={user.isApproved ? 'text-green-600' : 'text-red-500'}>
              {user.isApproved ? 'Approved' : 'Pending'}
            </span></p>

            <div className="mt-3 flex gap-3">
              {!user.isApproved && (
                <button onClick={() => approveUser(user._id)} className="bg-green-600 text-white px-3 py-1 rounded">
                  Approve
                </button>
              )}
              <button onClick={() => deleteUser(user._id)} className="bg-red-600 text-white px-3 py-1 rounded">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
