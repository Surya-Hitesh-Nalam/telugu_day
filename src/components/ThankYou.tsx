import React from 'react';
import { Heart, Star, Trophy, RotateCcw } from 'lucide-react';

interface ThankYouProps {
  onRestart: () => void;
  onShowRoundSelector: () => void;
}

const ThankYou: React.FC<ThankYouProps> = ({ onRestart, onShowRoundSelector }) => {
  return (
    <div className="max-w-4xl mx-auto text-center">
      {/* Celebration Icons */}
      <div className="flex justify-center space-x-8 mb-8">
        <div className="animate-bounce">
          <Trophy className="w-16 h-16 text-yellow-500" />
        </div>
        <div className="animate-bounce delay-150">
          <Star className="w-16 h-16 text-orange-500" />
        </div>
        <div className="animate-bounce delay-300">
          <Heart className="w-16 h-16 text-red-500" />
        </div>
      </div>

      {/* Thank You Message */}
      <div className="bg-white rounded-3xl shadow-xl border-4 border-orange-200 p-12">
        <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-6">
          Thank You for Participating!
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-orange-700 mb-8">
          పాల్గొన్నందుకు ధన్యవాదాలు!
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            You have successfully completed all four rounds of the Telugu Day Quiz. 
            Your participation in celebrating our beautiful Telugu culture and language is greatly appreciated.
          </p>
          
          <p className="text-lg text-orange-600 font-medium mb-8">
            మా అందమైన తెలుగు సంస్కృతి మరియు భాషను జరుపుకోవడంలో మీ పాల్గొనుట చాలా ప్రశంసనీయం.
          </p>

          {/* Final Message */}
          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-6 border-2 border-orange-200">
            <p className="text-2xl font-bold text-amber-800 mb-2">
              తెలుగు భాషకు జై!
            </p>
            <p className="text-xl font-semibold text-orange-700">
              Long Live Telugu Language!
            </p>
          </div>

          {/* Restart Button */}
          <div className="mt-8 space-x-4 flex flex-wrap justify-center gap-4">
            <button
              onClick={onRestart}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-bold rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <RotateCcw className="mr-3" size={20} />
              Start Quiz Again
            </button>
            <button
              onClick={onShowRoundSelector}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Trophy className="mr-3" size={20} />
              Choose Round
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="mt-12 flex justify-center space-x-4">
        <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse delay-100"></div>
        <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse delay-200"></div>
      </div>
    </div>
  );
};

export default ThankYou;