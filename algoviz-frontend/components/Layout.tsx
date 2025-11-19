'use client';

import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/courses', label: 'Courses' },
  { href: '/tutorials', label: 'Tutorials' },
  { href: '/community', label: 'Community' },
  { href: '/about', label: 'About Us' },
];

export default function Navbar() {
  return (
    <header className="bg-[#0A192F]/90 shadow-lg backdrop-blur sticky top-0 z-20">
      <nav className="max-w-7xl mx-auto flex items-center px-6 py-2">
        <Image src="/logo.png" width={38} height={38} alt="Logo" className="rounded-full mr-4" />
        <div className="ml-2 flex-1 flex items-center space-x-8">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white font-semibold hover:text-electric transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link
          href="/login"
          className="btn bg-electric text-cyber font-bold shadow hover:bg-accent transition duration-200"
        >
          Sign In
        </Link>
      </nav>
    </header>
  );
}
