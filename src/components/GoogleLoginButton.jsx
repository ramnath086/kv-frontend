import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../features/authSlice';

const GoogleLoginButton = () => {
  const dispatch = useDispatch();

  const onSuccess = async (credentialResponse) => {
    const decoded = jwt_decode(credentialResponse.credential);
    const res = await axios.post('http://localhost:5000/api/auth/google-login', {
      email: decoded.email,
      name: decoded.name,
      googleId: decoded.sub,
    });
    dispatch(setCredentials({ user: decoded, token: res.data.token }));
    alert('Logged in via Google');
  };

  return <GoogleLogin onSuccess={onSuccess} onError={() => alert('Google Login Failed')} />;
};

export default GoogleLoginButton;
