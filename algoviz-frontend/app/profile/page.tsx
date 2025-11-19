'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface User {
  name: string;
  email: string;
  // Add more user fields as needed
}

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login');
        return;
      }

      try {
        const res = await fetch('/api/users/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error('Failed to fetch user data');
        }

        const data = await res.json();
        setUser(data);
      } catch (err) {
        setError('Failed to load profile. Please login again.');
        localStorage.removeItem('token');
        router.push('/login');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [router]);

  if (loading) return <p className="text-center mt-8">Loading profile...</p>;

  if (error)
    return <p className="text-center mt-8 text-red-600 font-semibold">{error}</p>;

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Profile</h1>
      {user && (
        <div className="bg-white shadow rounded p-6">
          <p className="mb-4">
            <span className="font-semibold">Name: </span>
            {user.name}
          </p>
          <p className="mb-4">
            <span className="font-semibold">Email: </span>
            {user.email}
          </p>
          {/* Add more user info fields here */}
        </div>
      )}
    </main>
  );
}
