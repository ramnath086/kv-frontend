import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-pink-200 to-pink-400">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Perfect Match</h1>
        <p className="text-lg mb-6">India’s most trusted matrimonial platform</p>
        <div className="space-x-4">
          <Link to="/signup">
            <button className="bg-white text-pink-600 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100">Get Started</button>
          </Link>
          <Link to="/login">
            <button className="bg-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-700">Login</button>
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Kalyana Vaibhogam?</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2">1M+ Verified Profiles</h3>
            <p>All profiles go through a strict screening process for genuine connections.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2">Smart Matchmaking</h3>
            <p>Get intelligent suggestions based on preferences, location, and more.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2">Safe & Secure</h3>
            <p>Privacy-first platform with secure login and data protection.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Members Say</h2>
        <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="italic">"Thanks to KV, I found my soulmate in just 2 months!"</p>
            <p className="mt-4 font-bold">– Meera, Bengaluru</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="italic">"Very professional service and genuine matches."</p>
            <p className="mt-4 font-bold">– Ravi, Chennai</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
