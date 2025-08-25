import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface Question {
  id: number;
  text: string;
}

interface Round2Props {
  questions: Question[];
  onRoundComplete: () => void;
}

const Round2: React.FC<Round2Props> = ({ questions, onRoundComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onRoundComplete();
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Round Header */}
      <div className="text-center mb-8">
        <div className="inline-block px-6 py-3 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full mb-4">
          <h2 className="text-2xl font-bold text-white">రౌండ్ 2</h2>
        </div>
        <h3 className="text-3xl font-bold text-amber-800 mb-2 bg-white bg-opacity-80 rounded-lg px-4 py-2 inline-block">Grammar Round</h3>
        <p className="text-orange-600 text-lg bg-white bg-opacity-80 rounded-lg px-4 py-1 inline-block">వ్యాకరణ రౌండ్</p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-amber-600 mb-2 bg-white bg-opacity-80 rounded-lg px-4 py-2">
          <span>Question {currentQuestion + 1} of {questions.length}</span>
          <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
        </div>
        <div className="w-full bg-orange-100 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-orange-400 to-amber-400 h-3 rounded-full transition-all duration-500"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white bg-opacity-95 rounded-2xl shadow-lg border-4 border-orange-200 p-8 mb-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white font-bold text-xl">{currentQuestion + 1}</span>
          </div>
          <div className="text-xl md:text-2xl text-gray-800 leading-relaxed">
            {questions[currentQuestion]?.text}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="text-center">
        <button
          onClick={handleNext}
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          {currentQuestion < questions.length - 1 ? 'Next Question' : 'Complete Round 2'}
          <ChevronRight className="ml-2" size={20} />
        </button>
      </div>
    </div>
  );
};

export default Round2;