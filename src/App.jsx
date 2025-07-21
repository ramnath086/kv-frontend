import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import OTPVerify from './pages/OTPVerify';
import Login from './pages/Login';
import Profile from './pages/Profile';
import SearchMatches from './pages/SearchMatches';
import AdminDashboard from './pages/AdminDashboard';
import MyShortlist from './pages/MyShortlist';
import MyBlocked from './pages/MyBlocked';
import ChatPage from './pages/ChatPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div className="text-center p-4">🏠 Home Page</div>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify-otp" element={<OTPVerify />} />
        <Route path="/login" element={<Login />} />
	<Route path="/profile" element={<Profile />} />
	<Route path="/matches" element={<SearchMatches />} />
	<Route path="/admin" element={<AdminDashboard />} />
	<Route path="/my-shortlist" element={<MyShortlist />} />
	<Route path="/my-blocked" element={<MyBlocked />} />
	<Route path="/chat" element={<ChatPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
