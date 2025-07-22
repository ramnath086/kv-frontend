// src/pages/Home.jsx
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-pink-50 to-white min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-pink-700">Find Your Perfect Match</h1>
        <p className="text-lg mb-8">India’s most trusted matrimonial platform, now beautifully simple.</p>
        <Link
          to="/signup"
          className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition"
        >
          Join Now
        </Link>
      </section>

      {/* CTA Features */}
      <section className="grid md:grid-cols-3 gap-6 px-6 py-12 text-center">
        <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg">
          <h3 className="text-xl font-semibold text-pink-600 mb-2">Verified Profiles</h3>
          <p>Every profile is manually screened for authenticity and safety.</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg">
          <h3 className="text-xl font-semibold text-pink-600 mb-2">Match by Language & Caste</h3>
          <p>Smart filters to match exactly what you're looking for.</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg">
          <h3 className="text-xl font-semibold text-pink-600 mb-2">Private & Secure</h3>
          <p>Your data is protected with the highest standards.</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-pink-50">
        <h2 className="text-2xl font-bold text-center mb-6 text-pink-700">What Our Users Say</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6 px-6">
          <div className="bg-white rounded-xl p-6 shadow max-w-md">
            <p>"Thanks to Kalyana Vaibhogam, I met my soulmate in just 2 weeks!"</p>
            <p className="mt-2 font-semibold text-pink-600">– Aarti & Suresh</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow max-w-md">
            <p>"Very clean interface, easy to use and trustworthy."</p>
            <p className="mt-2 font-semibold text-pink-600">– Manoj R.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
