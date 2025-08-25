import React from 'react';
import { MessageSquare, Mic, Image, Trophy } from 'lucide-react';

interface RoundSelectorProps {
  onSelectRound: (round: number) => void;
  onClose: () => void;
}

const RoundSelector: React.FC<RoundSelectorProps> = ({ 
  onSelectRound, 
  onClose
}) => {
  const rounds = [
    {
      number: 1,
      title: 'Rapid Questions',
      telugu: 'వేగవంతమైన ప్రశ్నలు',
      icon: MessageSquare,
      color: 'from-blue-400 to-blue-600',
      description: '10 quick questions to test your knowledge'
    },
    {
      number: 2,
      title: 'Grammar Round',
      telugu: 'వ్యాకరణ రౌండ్',
      icon: MessageSquare,
      color: 'from-green-400 to-green-600',
      description: '10 grammar-focused questions'
    },
    {
      number: 3,
      title: 'Elocution Round',
      telugu: 'వాక్చాతుర్య రౌండ్',
      icon: Mic,
      color: 'from-purple-400 to-purple-600',
      description: '3-minute speaking round'
    },
    {
      number: 4,
      title: 'Image Identification',
      telugu: 'చిత్ర గుర్తింపు రౌండ్',
      icon: Image,
      color: 'from-orange-400 to-orange-600',
      description: '5 images to identify'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-block px-8 py-4 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full mb-6">
          <h2 className="text-3xl font-bold text-white flex items-center">
            <Trophy className="mr-3" size={32} />
            Select Round
          </h2>
        </div>
        <p className="text-xl text-orange-600 bg-white bg-opacity-80 rounded-lg px-4 py-2 inline-block">రౌండ్ ఎంచుకోండి</p>
      </div>

      {/* Round Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {rounds.map((round) => {
          const IconComponent = round.icon;
          return (
            <div
              key={round.number}
              onClick={() => onSelectRound(round.number)}
              className="bg-white bg-opacity-95 rounded-2xl shadow-lg border-4 border-orange-200 p-8 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="text-center">
                {/* Round Number and Icon */}
                <div className={`w-20 h-20 bg-gradient-to-r ${round.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className="text-white" size={32} />
                </div>
                
                {/* Round Info */}
                <div className="mb-4">
                  <div className="text-sm font-bold text-gray-500 mb-1">
                    ROUND {round.number}
                  </div>
                  <h3 className="text-2xl font-bold text-amber-800 mb-2">
                    {round.title}
                  </h3>
                  <p className="text-lg text-orange-600 font-medium mb-3">
                    {round.telugu}
                  </p>
                  <p className="text-gray-600">
                    {round.description}
                  </p>
                </div>

                {/* Select Button */}
                <button className={`w-full py-3 bg-gradient-to-r ${round.color} text-white font-bold rounded-full transition-all duration-300 hover:shadow-lg`}>
                  Start Round {round.number}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Close Button */}
      <div className="text-center">
        <button
          onClick={onClose}
          className="px-8 py-3 bg-gray-500 hover:bg-gray-600 text-white font-bold rounded-full transition-colors duration-300"
        >
          Close Menu
        </button>
      </div>
    </div>
  );
};

export default RoundSelector;