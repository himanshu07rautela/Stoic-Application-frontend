import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './JoinOurMission.css';

const JoinOurMission = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [totalSubscribers, setTotalSubscribers] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const response = await axios.get('https://stoic-application-backend-1.onrender.com/api/subscribers/count');
        setTotalSubscribers(response.data.count);
      } catch (err) {
        console.error('Error fetching subscriber count:', err.message);
      }
    };
    fetchSubscribers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('https://stoic-application-backend-1.onrender.com/api/subscribers/subscribe', { email });
      setSubmitted(true);
      setLoading(false);
      setEmail('');
      setTotalSubscribers((prevCount) => prevCount + 1); // Update the count locally
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.msg || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section className="bg-dark-blue py-16 px-8 flex flex-col items-center justify-center text-light-gray">
      <div className="join-card bg-dark-gray p-8 rounded-lg shadow-xl text-center w-full max-w-3xl">
        <h2 className="text-4xl font-serif font-bold mb-6 underline-custom">Join Our Mission</h2>
        <p className="text-lg leading-relaxed mb-8">
          Be part of a growing community of modern Stoics. Subscribe to our email service and receive weekly Stoic quotes and wisdom directly to your inbox. Together, let’s build a more resilient and purposeful life.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full max-w-md p-3 rounded-lg mb-4 text-dark-gray"
            required
            disabled={loading}
          />
          <button
            type="submit"
            className="bg-gold text-dark-gray font-bold py-3 px-6 rounded-lg shadow-md hover:bg-dark-gray hover:text-gold transition duration-300"
            disabled={loading}
          >
            {loading ? 'Joining...' : 'Join the Mission'}
          </button>
        </form>
        {submitted && !error && (
          <p className="mt-6 text-lg font-semibold text-gold animate-bounce">
            Thank you for joining us! You'll receive your Stoic NewsLetter every saturday.
          </p>
        )}
        {error && (
          <p className="mt-6 text-lg font-semibold text-red-500">
            {error}
          </p>
        )}
        <p className="mt-4 text-sm">
          <span className="font-bold">{totalSubscribers}</span> people have joined our mission.
        </p>
      </div>
    </section>
  );
};

export default JoinOurMission;
