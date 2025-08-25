import React, { useState } from 'react';
import { X, Menu } from 'lucide-react';
import { round1Questions, round2Questions, round4Images } from './data/questions';
import Round1 from './components/Round1';
import Round2 from './components/Round2';
import Round3 from './components/Round3';
import Round4 from './components/Round4';
import ThankYou from './components/ThankYou';
import RoundSelector from './components/RoundSelector';

function App() {
  const [currentRound, setCurrentRound] = useState(1);
  const [showRoundSelector, setShowRoundSelector] = useState(false);

  const restartQuiz = () => {
    setCurrentRound(1);
    setShowRoundSelector(false);
  };

  const selectRound = (round: number) => {
    setCurrentRound(round);
    setShowRoundSelector(false);
  };

  const handleRoundComplete = () => {
    if (currentRound < 4) {
      setCurrentRound(currentRound + 1);
    } else {
      setCurrentRound(5); // Thank you page
    }
  };

  const renderCurrentRound = () => {
    if (showRoundSelector) {
      return (
        <RoundSelector
          onSelectRound={selectRound}
          onClose={() => setShowRoundSelector(false)}
        />
      );
    }

    switch (currentRound) {
      case 1:
        return (
          <Round1 
            questions={round1Questions} 
            onRoundComplete={handleRoundComplete} 
          />
        );
      case 2:
        return (
          <Round2 
            questions={round2Questions} 
            onRoundComplete={handleRoundComplete} 
          />
        );
      case 3:
        return (
          <Round3 
            onRoundComplete={handleRoundComplete}
            onShowRoundSelector={() => setShowRoundSelector(true)}
          />
        );
      case 4:
        return (
          <Round4 
            images={round4Images} 
            onRoundComplete={handleRoundComplete} 
          />
        );
      case 5:
        return (
          <ThankYou 
            onRestart={restartQuiz}
            onShowRoundSelector={() => setShowRoundSelector(true)}
          />
        );
      default:
        return null;
    }
  };

  // ✅ Background logic:
  const showBackgroundImage =
    currentRound === 1 || currentRound === 2 || currentRound === 5 || showRoundSelector;

  return (
    <div
      className={`min-h-screen ${
        showBackgroundImage
          ? 'relative'
          : 'bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50'
      }`}
    >
      {/* Background image but START BELOW header */}
      {showBackgroundImage && (
        <div
          className="absolute inset-0 top-40 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/background.jpg)',
          }}
        >
          {/* Overlay for readability */}
          <div className="w-full h-full bg-yellow-50 bg-opacity-70"></div>
        </div>
      )}

      {/* Decorative Border */}
      <div className="w-full h-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-amber-400 relative z-20"></div>

      {/* Header */}
      <header className="relative py-8 px-4 text-center bg-gradient-to-r from-amber-100 to-yellow-100 border-b-4 border-orange-200 z-20">
        <div className="absolute inset-0 opacity-10 bg-pattern"></div>
        <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-2 relative z-10">
          తెలుగు భాషా దినోత్సవ క్విజ్
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-orange-700 relative z-10">
          Telugu Language Day Quiz
        </h2>

        {/* Round Navigation Button */}
        <button
          onClick={() => setShowRoundSelector(!showRoundSelector)}
          className="absolute top-4 left-4 p-2 bg-amber-200 hover:bg-amber-300 rounded-full transition-colors duration-200 z-30"
          title="Round Navigation"
        >
          {showRoundSelector ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 relative z-20">
        {renderCurrentRound()}
      </main>

      {/* Footer */}
      <footer className="mt-16 py-6 bg-gradient-to-r from-amber-100 to-yellow-100 border-t-4 border-orange-200 relative z-20">
        <div className="text-center text-amber-700">
          <p className="text-lg font-medium">వన్దేమాతరమ్ | Vande Mataram</p>
        </div>
      </footer>

      <style>{`
        .bg-pattern {
          background-image: 
            radial-gradient(circle at 25px 25px, rgba(251, 146, 60, 0.2) 2px, transparent 0),
            radial-gradient(circle at 75px 75px, rgba(245, 158, 11, 0.2) 2px, transparent 0);
          background-size: 100px 100px;
        }
      `}</style>
    </div>
  );
}

export default App;
