import React from 'react';
import Navbar from '../components/Navbar';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-cyber font-montserrat relative">
        <Navbar />
        <main className="flex-grow relative z-10">{children}</main>
        <footer className="bg-cyber py-4 text-center text-electric text-sm">
          © 2025 AlgoViz. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
