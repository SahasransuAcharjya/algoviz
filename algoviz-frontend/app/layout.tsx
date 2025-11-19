// algoviz-frontend/app/layout.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {children}
        </main>
        <footer className="bg-gray-100 text-center py-4 text-gray-600">
          © 2025 AlgoViz. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
