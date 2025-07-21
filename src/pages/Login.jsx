import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../features/authSlice';
import GoogleLoginButton from '../components/GoogleLoginButton';

const Login = () => {
  const [form, setForm] = useState({ emailOrMobile: '', password: '' });
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', form);
      dispatch(setCredentials({ user: {}, token: res.data.token }));
      alert('Login successful');
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <input type="text" placeholder="Email or Mobile" className="w-full p-2 mb-2 border"
        onChange={(e) => setForm({ ...form, emailOrMobile: e.target.value })} />
      <input type="password" placeholder="Password" className="w-full p-2 mb-4 border"
        onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 w-full">Login</button>
      <div className="mt-4"><GoogleLoginButton /></div>
    </div>
  );
};

export default Login;
