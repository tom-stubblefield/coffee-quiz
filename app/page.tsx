'use client';

import { useState } from 'react';
import { questions, personalityResults, PersonalityType } from './data/quiz-data';
import StartScreen from './components/StartScreen';
import QuizCard from './components/QuizCard';
import ResultCard from './components/ResultCard';

export default function Home() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<PersonalityType[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleStart = () => {
    setQuizStarted(true);
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  const handleAnswer = (personality: string) => {
    const newAnswers = [...answers, personality as PersonalityType];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleRetake = () => {
    setQuizStarted(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  // Calculate winning personality
  const getWinningPersonality = (): PersonalityType => {
    const counts = answers.reduce((acc, personality) => {
      acc[personality] = (acc[personality] || 0) + 1;
      return acc;
    }, {} as Record<PersonalityType, number>);

    return Object.keys(counts).reduce((a, b) =>
      counts[a as PersonalityType] > counts[b as PersonalityType] ? a : b
    ) as PersonalityType;
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-5">
      {!quizStarted ? (
        <StartScreen onStart={handleStart} />
      ) : showResults ? (
        <ResultCard
          result={personalityResults[getWinningPersonality()]}
          onRetake={handleRetake}
        />
      ) : (
        <QuizCard
          question={questions[currentQuestion]}
          onAnswer={handleAnswer}
          currentQuestionNumber={currentQuestion + 1}
          totalQuestions={questions.length}
        />
      )}
    </div>
  );
}
