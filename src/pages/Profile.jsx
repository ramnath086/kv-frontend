import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { token } = useSelector((state) => state.auth);
  const [form, setForm] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await axios.get('http://localhost:5000/api/user/me', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setForm(res.data);
    };
    fetchProfile();
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put('http://localhost:5000/api/user/update', form, {
      headers: { Authorization: `Bearer ${token}` },
    });
    alert('Profile updated!');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>

      <input className="w-full p-2 mb-2 border" placeholder="Full Name"
        value={form.name || ''} onChange={(e) => setForm({ ...form, name: e.target.value })} />

      <input className="w-full p-2 mb-2 border" placeholder="Profession"
        value={form.profession || ''} onChange={(e) => setForm({ ...form, profession: e.target.value })} />

      <input className="w-full p-2 mb-2 border" placeholder="Caste"
        value={form.caste || ''} onChange={(e) => setForm({ ...form, caste: e.target.value })} />

      <input className="w-full p-2 mb-2 border" placeholder="Religion"
        value={form.religion || ''} onChange={(e) => setForm({ ...form, religion: e.target.value })} />

      <textarea className="w-full p-2 mb-2 border" placeholder="Bio"
        value={form.bio || ''} onChange={(e) => setForm({ ...form, bio: e.target.value })}></textarea>

      <button className="bg-green-500 text-white px-4 py-2 w-full">Save Profile</button>
    </form>
  );
};

export default Profile;
