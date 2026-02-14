interface StartScreenProps {
  onStart: () => void;
}

export default function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="quiz-card">
      <h1 className="text-4xl font-bold text-center mb-4 text-purple-600">
        ☕ What&apos;s Your Coffee Personality?
      </h1>
      <p className="text-center text-gray-700 mb-8 text-lg">
        Discover your coffee personality and get a personalized drink recommendation from Basecamp Coffee!
      </p>
      <button
        onClick={onStart}
        className="answer-button w-full"
      >
        Start Quiz
      </button>
    </div>
  );
}
