'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Question {
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
  explanation?: string;
}

interface Quiz {
  _id: string;
  questions: Question[];
  // Add more quiz fields if needed
}

export default function QuizPage() {
  const router = useRouter();
  const { quizId } = router.query;

  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  useEffect(() => {
    if (!quizId) return;

    async function fetchQuiz() {
      try {
        const res = await fetch(`/api/quizzes/${quizId}`);
        if (!res.ok) throw new Error('Failed to fetch quiz');
        const data = await res.json();
        setQuiz(data);
        setAnswers(new Array(data.questions.length).fill(null));
      } catch (err) {
        setError('Failed to load quiz.');
      } finally {
        setLoading(false);
      }
    }

    fetchQuiz();
  }, [quizId]);

  const handleOptionChange = (questionIdx: number, optionIdx: number) => {
    if (submitted) return; // prevent changes after submit
    const newAnswers = [...answers];
    newAnswers[questionIdx] = optionIdx;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    if (!quiz) return;
    let calculatedScore = 0;
    answers.forEach((answer, i) => {
      if (answer === quiz.questions[i].correctAnswerIndex) {
        calculatedScore += 1;
      }
    });
    setScore(calculatedScore);
    setSubmitted(true);
  };

  if (loading) return <p>Loading quiz...</p>;
  if (error) return <p className="text-red-600">{error}</p>;
  if (!quiz) return <p>Quiz not found.</p>;

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Quiz</h1>

      {quiz.questions.map((question, qIdx) => (
        <div key={qIdx} className="mb-6 border-b pb-4">
          <p className="font-semibold mb-2">
            {qIdx + 1}. {question.questionText}
          </p>
          <div>
            {question.options.map((option, oIdx) => {
              const isCorrect = submitted && oIdx === question.correctAnswerIndex;
              const isSelected = answers[qIdx] === oIdx;
              const optionClass = submitted
                ? isCorrect
                  ? 'bg-green-200'
                  : isSelected
                  ? 'bg-red-200'
                  : ''
                : '';

              return (
                <label
                  key={oIdx}
                  className={`block p-2 rounded cursor-pointer ${optionClass}`}
                >
                  <input
                    type="radio"
                    name={`question-${qIdx}`}
                    value={oIdx}
                    checked={isSelected}
                    disabled={submitted}
                    onChange={() => handleOptionChange(qIdx, oIdx)}
                    className="mr-2"
                  />
                  {option}
                </label>
              );
            })}
          </div>
          {submitted && question.explanation && (
            <p className="mt-2 italic text-gray-700">Explanation: {question.explanation}</p>
          )}
        </div>
      ))}

      {!submitted ? (
        <button
          onClick={handleSubmit}
          disabled={answers.includes(null)}
          className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-400"
        >
          Submit
        </button>
      ) : (
        <p className="text-xl font-semibold mt-4">
          Your Score: {score} / {quiz.questions.length}
        </p>
      )}
    </main>
  );
}
