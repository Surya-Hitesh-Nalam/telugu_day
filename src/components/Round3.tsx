import React, { useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

interface Round3Props {
  onRoundComplete: () => void;
  onShowRoundSelector: () => void;
}

const Round3: React.FC<Round3Props> = ({ onRoundComplete, onShowRoundSelector }) => {
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes in seconds
  const [isActive, setIsActive] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft => timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      setIsCompleted(true);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeLeft, onRoundComplete]);

  const toggleTimer = () => {
    setIsActive(!isActive);
    if (!hasStarted) {
      setHasStarted(true);
    }
  };

  const resetTimer = () => {
    setTimeLeft(180);
    setIsActive(false);
    setHasStarted(false);
    setIsCompleted(false);
  };

  const handleComplete = () => {
    onRoundComplete();
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercentage = ((180 - timeLeft) / 180) * 100;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Round Header */}
      <div className="text-center mb-12">
        <div className="inline-block px-6 py-3 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full mb-4">
          <h2 className="text-2xl font-bold text-white">రౌండ్ 3</h2>
        </div>
        <h3 className="text-3xl font-bold text-amber-800 mb-2">Elocution Round</h3>
        <p className="text-orange-600 text-lg">వాక్చాతుర్య రౌండ్</p>
      </div>

      {/* Hero Image */}
      <div className="text-center mb-8">
        <div className="inline-block rounded-2xl overflow-hidden shadow-xl border-4 border-orange-200">
          <img
            src="/alluri-seetharama-raju.jpg"
            alt="Alluri Seetharama Raju"
            className="w-64 h-80 object-cover"
          />
        </div>
        <p className="mt-4 text-lg font-semibold text-amber-800">అల్లూరి సీతారామరాజు</p>
        <p className="text-orange-600">Speak about this great freedom fighter</p>
      </div>

      {/* Instructions */}
      <div className="bg-white rounded-2xl shadow-lg border-4 border-orange-200 p-8 mb-8">
        <div className="text-center">
          <h4 className="text-2xl font-bold text-amber-800 mb-4">Instructions</h4>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            You have 3 minutes for speaking about Alluri Seetharama Raju. Click the start button when you're ready to begin.
          </p>
          <p className="text-orange-600 font-medium">
            అల్లూరి సీతారామరాజు గురించి వాక్చాతుర్యం కోసం మీకు 3 నిమిషాలు ఉన్నాయి. మీరు సిద్ధంగా ఉన్నప్పుడు స్టార్ట్ బటన్‌ను క్లిక్ చేయండి.
          </p>
        </div>
      </div>

      {/* Timer Display */}
      <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-3xl shadow-xl border-4 border-orange-200 p-12 mb-8">
        <div className="text-center">
          <div className="relative inline-block">
            {/* Circular Progress */}
            <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="currentColor"
                strokeWidth="6"
                fill="transparent"
                className="text-orange-200"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="currentColor"
                strokeWidth="6"
                fill="transparent"
                strokeDasharray={`${progressPercentage * 2.51327} 251.327`}
                className="text-orange-500 transition-all duration-1000 ease-linear"
              />
            </svg>
            
            {/* Timer Text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl font-bold text-amber-800 mb-2">
                  {formatTime(timeLeft)}
                </div>
                <div className="text-lg text-orange-600">
                  {timeLeft > 0 ? 'Minutes Left' : 'Time Up!'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Control Button */}
      <div className="text-center">
        {isCompleted ? (
          <div className="space-y-4">
            <div className="text-2xl font-bold text-green-600 mb-4">
              Time Complete! 🎉
            </div>
            <div className="space-x-4 flex flex-wrap justify-center gap-4">
              <button
                onClick={resetTimer}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-bold rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Reset Timer
              </button>
              <button
                onClick={onShowRoundSelector}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Choose Round
              </button>
              <button
                onClick={handleComplete}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Continue to Round 4
              </button>
            </div>
          </div>
        ) : !hasStarted ? (
          <button
            onClick={toggleTimer}
            className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Play className="mr-3" size={24} />
            Start 
          </button>
        ) : (
          <button
            onClick={toggleTimer}
            className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {isActive ? (
              <>
                <Pause className="mr-3" size={24} />
                Pause Timer
              </>
            ) : (
              <>
                <Play className="mr-3" size={24} />
                Resume Timer
              </>
            )}
          </button>
        )}
      </div>

      {hasStarted && (
        <div className="text-center mt-6">
          <div className="space-y-2">
            <p className="text-orange-600 text-lg">
              {isActive ? 'Timer is running...' : 'Timer is paused'}
            </p>
            <div className="space-x-4">
              <button
                onClick={resetTimer}
                className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg text-sm transition-colors"
              >
                Reset Timer
              </button>
              <button
                onClick={onShowRoundSelector}
                className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg text-sm transition-colors"
              >
                Choose Round
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Round3;