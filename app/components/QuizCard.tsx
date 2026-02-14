import { Question } from '../data/quiz-data';

interface QuizCardProps {
  question: Question;
  onAnswer: (personality: string) => void;
  currentQuestionNumber: number;
  totalQuestions: number;
}

export default function QuizCard({
  question,
  onAnswer,
  currentQuestionNumber,
  totalQuestions
}: QuizCardProps) {
  return (
    <div className="quiz-card">
      <div className="text-center mb-6">
        <div className="text-sm text-purple-600 font-bold mb-2">
          Question {currentQuestionNumber} of {totalQuestions}
        </div>
        <div className="text-6xl mb-4">{question.emoji}</div>
        <h2 className="text-2xl font-bold text-gray-800">
          {question.question}
        </h2>
      </div>

      <div className="space-y-3">
        {question.answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => onAnswer(answer.personality)}
            className="answer-button w-full text-left"
          >
            <span className="mr-2">{answer.emoji}</span>
            {answer.text}
          </button>
        ))}
      </div>
    </div>
  );
}
