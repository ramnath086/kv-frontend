import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setCredentials } from '../features/authSlice';
import { useNavigate } from 'react-router-dom';

const OTPVerify = () => {
  const [otp, setOtp] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleVerify = async () => {
    try {
      const userId = localStorage.getItem('tempUserId');
      const res = await axios.post('http://localhost:5000/api/auth/verify-otp', { userId, otp });
      dispatch(setCredentials({ user: {}, token: res.data.token }));
      alert('OTP verified');
      navigate('/');
    } catch (err) {
      alert(err.response?.data?.message || 'Verification error');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Verify OTP</h2>
      <input type="text" placeholder="Enter OTP" className="w-full p-2 mb-2 border"
        value={otp} onChange={(e) => setOtp(e.target.value)} />
      <button onClick={handleVerify} className="bg-green-500 text-white px-4 py-2 w-full">Verify</button>
    </div>
  );
};

export default OTPVerify;
