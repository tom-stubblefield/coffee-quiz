import { PersonalityResult } from '../data/quiz-data';

interface ResultCardProps {
  result: PersonalityResult;
  onRetake: () => void;
}

export default function ResultCard({ result, onRetake }: ResultCardProps) {
  return (
    <div className="quiz-card">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-purple-600 mb-2">
          You&apos;re a {result.name}!
        </h1>
        <div className="text-6xl my-6">☕</div>
        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-6 mb-4">
          <div className="text-sm text-purple-700 font-semibold mb-2">YOUR PERFECT DRINK</div>
          <div className="text-3xl font-bold text-purple-800">{result.coffeeDrink}</div>
        </div>
        <p className="text-xl font-bold text-pink-600 mb-4 italic">
          {result.tagline}
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          {result.description}
        </p>
      </div>

      <button
        onClick={onRetake}
        className="answer-button w-full mt-6"
      >
        Retake Quiz
      </button>
    </div>
  );
}
