// algoviz-frontend/components/QuizQuestion.tsx
import React from 'react';

interface QuizQuestionProps {
  questionText: string;
  options: string[];
  selectedOption: number | null;
  onSelectOption: (index: number) => void;
  disabled?: boolean;
  correctAnswerIndex?: number;
  showExplanation?: boolean;
  explanation?: string;
}

export default function QuizQuestion({
  questionText,
  options,
  selectedOption,
  onSelectOption,
  disabled = false,
  correctAnswerIndex,
  showExplanation = false,
  explanation,
}: QuizQuestionProps) {
  return (
    <div className="mb-6 border-b pb-4">
      <p className="font-semibold mb-2">{questionText}</p>
      <div>
        {options.map((option, i) => {
          const isCorrect = showExplanation && i === correctAnswerIndex;
          const isSelected = selectedOption === i;
          const optionClass = showExplanation
            ? isCorrect
              ? 'bg-green-200'
              : isSelected
              ? 'bg-red-200'
              : ''
            : '';

          return (
            <label
              key={i}
              className={`block p-2 rounded cursor-pointer ${optionClass}`}
            >
              <input
                type="radio"
                name={questionText}
                value={i}
                checked={isSelected}
                disabled={disabled}
                onChange={() => onSelectOption(i)}
                className="mr-2"
              />
              {option}
            </label>
          );
        })}
      </div>
      {showExplanation && explanation && (
        <p className="mt-2 italic text-gray-700">Explanation: {explanation}</p>
      )}
    </div>
  );
}
