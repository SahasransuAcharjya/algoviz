// algoviz-frontend/app/about/page.tsx
import React from 'react';

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">About AlgoViz</h1>
      <p className="text-lg leading-relaxed mb-4">
        AlgoViz is an interactive online platform designed to help students learn Data Structures and Algorithms (DSA) through clear explanations, engaging animations,
        and interactive quizzes. Our mission is to make complex computer science concepts approachable and fun.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        With AlgoViz, learners can visualize how algorithms work step-by-step and test their understanding with practical quizzes, enhancing retention and problem-solving skills.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        This platform is built using modern web technologies including Next.js for the frontend and Node.js with MongoDB for the backend. We aim to continuously improve and expand content based on user feedback.
      </p>
      <p className="text-lg leading-relaxed mt-8 text-center font-semibold">
        Happy Learning! 🚀
      </p>
    </main>
  );
}
