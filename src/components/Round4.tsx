import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface ImageData {
  id: number;
  url: string;
  alt: string;
}

interface Round4Props {
  images: ImageData[];
  onRoundComplete: () => void;
}

const Round4: React.FC<Round4Props> = ({ images, onRoundComplete }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    if (currentImage < images.length - 1) {
      setCurrentImage(currentImage + 1);
    } else {
      onRoundComplete();
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Round Header */}
      <div className="text-center mb-8">
        <div className="inline-block px-6 py-3 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full mb-4">
          <h2 className="text-2xl font-bold text-white">రౌండ్ 4</h2>
        </div>
        <h3 className="text-3xl font-bold text-amber-800 mb-2">Image Identification</h3>
        <p className="text-orange-600 text-lg">చిత్ర గుర్తింపు రౌండ్</p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-amber-600 mb-2">
          <span>
            Image {currentImage + 1} of {images.length}
          </span>
          <span>
            {Math.round(((currentImage + 1) / images.length) * 100)}%
          </span>
        </div>
        <div className="w-full bg-orange-100 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-orange-400 to-amber-400 h-3 rounded-full transition-all duration-500"
            style={{ width: `${((currentImage + 1) / images.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Image Card */}
      <div className="bg-white rounded-2xl shadow-lg border-4 border-orange-200 p-8 mb-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white font-bold text-xl">{currentImage + 1}</span>
          </div>

          {/* Image Display */}
          <div className="max-w-md mx-auto mb-6">
            <img
              src={images[currentImage].url}
              alt={images[currentImage].alt}
              className="w-full h-80 object-contain rounded-xl shadow-lg border-2 border-orange-200 bg-black"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src =
                  'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=600';
              }}
            />
          </div>

          <p className="text-lg text-gray-600">
            Identify this image and be ready to answer questions about it.
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="text-center">
        <button
          onClick={handleNext}
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          {currentImage < images.length - 1 ? 'Next Image' : 'Complete Quiz'}
          <ChevronRight className="ml-2" size={20} />
        </button>
      </div>
    </div>
  );
};

export default Round4;
