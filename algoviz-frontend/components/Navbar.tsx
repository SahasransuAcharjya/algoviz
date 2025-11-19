// algoviz-frontend/components/Navbar.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
    router.push('/login');
  };

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow">
      <Link href="/" className="text-2xl font-bold hover:text-blue-300">AlgoViz</Link>
      <div className="space-x-4">
        <Link href="/lessons" className={`hover:text-blue-300 ${pathname.startsWith('/lessons') ? 'underline' : ''}`}>Lessons</Link>
        {loggedIn ? (
          <>
            <Link href="/profile" className={`hover:text-blue-300 ${pathname === '/profile' ? 'underline' : ''}`}>Profile</Link>
            <button onClick={handleLogout} className="hover:text-blue-300">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className={`hover:text-blue-300 ${pathname === '/login' ? 'underline' : ''}`}>Login</Link>
            <Link href="/register" className={`hover:text-blue-300 ${pathname === '/register' ? 'underline' : ''}`}>Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
