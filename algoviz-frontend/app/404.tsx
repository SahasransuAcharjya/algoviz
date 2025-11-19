// algoviz-frontend/app/404.tsx
import Link from 'next/link';

export default function Custom404() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <h1 className="text-6xl font-extrabold mb-4 text-red-600">404</h1>
      <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
      <p className="text-gray-700 mb-8">
        Sorry, the page you're looking for does not exist.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Go Back Home
      </Link>
    </main>
  );
}
