import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', mobile: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', form);
      localStorage.setItem('tempUserId', res.data.userId);
      alert('OTP sent to your mobile');
      navigate('/verify-otp');
    } catch (err) {
      alert(err.response?.data?.message || 'Signup error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Signup</h2>
      <input type="text" placeholder="Name" className="w-full p-2 mb-2 border"
        onChange={(e) => setForm({ ...form, name: e.target.value })} required />
      <input type="email" placeholder="Email" className="w-full p-2 mb-2 border"
        onChange={(e) => setForm({ ...form, email: e.target.value })} required />
      <input type="text" placeholder="Mobile" className="w-full p-2 mb-4 border"
        onChange={(e) => setForm({ ...form, mobile: e.target.value })} required />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 w-full">Register</button>
    </form>
  );
};

export default Signup;
