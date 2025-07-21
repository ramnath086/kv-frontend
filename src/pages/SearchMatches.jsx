import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SearchMatches = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/matches/search`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMatches(res.data);
      } catch (err) {
        console.error('Error fetching matches:', err);
      }
    };

    fetchMatches();
  }, []);

  const token = localStorage.getItem('token');

  const handleShortlist = async (userId) => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/user-actions/shortlist/${userId}`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('User shortlisted!');
    } catch {
      alert('Error shortlisting user');
    }
  };

  const handleBlock = async (userId) => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/user-actions/block/${userId}`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('User blocked!');
    } catch {
      alert('Error blocking user');
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Search Matches</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {matches.map((user) => (
          <div key={user._id} className="border rounded-xl p-4 shadow-sm bg-white">
            {user.photoUrl ? (
              <img
                src={user.photoUrl}
                alt={user.name}
                className="w-full h-48 object-cover rounded mb-4"
              />
            ) : (
              <div className="w-full h-48 bg-gray-200 rounded mb-4 flex items-center justify-center text-gray-500">
                No Photo
              </div>
            )}
            <h3 className="text-lg font-semibold">{user.name}</h3>
            <p className="text-sm text-gray-600">Age: {user.age || '—'}</p>
            <p className="text-sm text-gray-600">Religion: {user.religion}</p>
            <p className="text-sm text-gray-600">Caste: {user.caste}</p>
            <p className="text-sm text-gray-600">Language: {user.language}</p>
            <p className="text-sm text-gray-600">Profession: {user.profession}</p>

            <div className="flex gap-2 mt-3 flex-wrap">
              <button
                onClick={() => handleShortlist(user._id)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-sm"
              >
                Shortlist
              </button>
              <button
                onClick={() => handleBlock(user._id)}
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
              >
                Block
              </button>
              <button
                onClick={() => window.location.href = `/chat?user=${user._id}`}
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
              >
                💬 Chat
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchMatches;
