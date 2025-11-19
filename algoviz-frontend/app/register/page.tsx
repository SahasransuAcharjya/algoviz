'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'Registration failed');
        setLoading(false);
        return;
      }

      // Redirect to login after successful registration
      router.push('/login');
    } catch (err) {
      setError('Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  return (
    <main className="max-w-md mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Register for AlgoViz</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && <p className="text-red-600 text-center">{error}</p>}

        <div>
          <label htmlFor="name" className="block mb-2 font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 border rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoComplete="name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
        </div>

        <div>
          <label htmlFor="password" className="block mb-2 font-semibold">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="new-password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </main>
  );
}
