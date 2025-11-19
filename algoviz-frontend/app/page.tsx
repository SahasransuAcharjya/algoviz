// algoviz-frontend/app/page.tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20 text-center">
      <h1 className="text-5xl font-extrabold mb-6 text-blue-600">Welcome to AlgoViz</h1>
      <p className="text-lg mb-10 max-w-xl mx-auto">
        Master Data Structures and Algorithms with interactive lessons, detailed animations, 
        and quizzes designed to boost your understanding and coding skills.
      </p>

      <div className="space-x-4">
        <Link
          href="/lessons"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Browse Lessons
        </Link>
        <Link
          href="/login"
          className="inline-block px-6 py-3 border border-blue-600 text-blue-600 rounded hover:bg-blue-50"
        >
          Login
        </Link>
      </div>
    </main>
  );
}
