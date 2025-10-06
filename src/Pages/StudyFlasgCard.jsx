import { useState, useEffect } from "react";
import { X, ArrowLeft } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { useDeck } from "../context/DeckContext";

export default function StudyFlashcards() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getDeck, updateDeck } = useDeck();
  const deck = getDeck(Number(id));

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [localCards, setLocalCards] = useState([]);

  useEffect(() => {
    if (deck) {
      setLocalCards(deck.cards || []);
    }
  }, [deck]);

  if (!deck) {
    return null;
  }

  const totalCards = localCards.length;
  const studiedCount = localCards.filter(card => card.studied).length;
  const unstudiedCards = localCards.filter(card => !card.studied);
  const currentCard = unstudiedCards[currentIndex];
  const progress = totalCards > 0 ? (studiedCount / totalCards) * 100 : 0;

  function handleFlip() {
    setIsFlipped(!isFlipped);
  }

  function handleMarkKnown() {
    if (!currentCard) return;
    
    const updatedCards = localCards.map(card =>
      card.id === currentCard.id ? { ...card, studied: true } : card
    );
    
    setLocalCards(updatedCards);
    updateDeck(deck.id, { ...deck, cards: updatedCards });
    
    setIsFlipped(false);
    
    const remainingUnstudied = updatedCards.filter(card => !card.studied);
    
    if (remainingUnstudied.length === 0) {
      navigate(`/deckDetails/${id}`);
    } else if (currentIndex >= remainingUnstudied.length) {
      setCurrentIndex(0);
    }
  }

  function handleMarkUnknown() {
    setIsFlipped(false);
    if (currentIndex < unstudiedCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  }

  function handlePrevious() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  }

  function handleNext() {
    if (currentIndex < unstudiedCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    }
  }

  function handleClose() {
    navigate(`/deckDetails/${id}`);
  }

  if (unstudiedCards.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="text-center max-w-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">All cards studied!</h2>
          <p className="text-gray-600 mb-6">You've marked all cards as known.</p>
          <button
            onClick={handleClose}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Back to Deck
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={handleClose}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <h2 className="text-xl font-semibold text-gray-900">{deck.deckName}</h2>
          <div className="w-6"></div>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Progress</span>
            <span className="text-sm font-semibold text-blue-600">
              {studiedCount} / {totalCards} cards ({Math.round(progress)}%)
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-blue-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="mb-8 perspective-1000">
          <div
            onClick={handleFlip}
            className="relative w-full h-96 cursor-pointer transition-transform duration-500"
            style={{
              transformStyle: "preserve-3d",
              transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
            }}
          >
            <div
              className="absolute w-full h-full bg-white rounded-lg shadow-lg flex items-center justify-center p-8"
              style={{ backfaceVisibility: "hidden" }}
            >
              <h1 className="text-4xl font-bold text-gray-900 text-center">
                {currentCard?.front}
              </h1>
            </div>

            <div
              className="absolute w-full h-full bg-white rounded-lg shadow-lg flex items-center justify-center p-8"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)"
              }}
            >
              <h1 className="text-4xl font-bold text-gray-900 text-center">
                {currentCard?.back}
              </h1>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            onClick={handleMarkUnknown}
            className="bg-red-50 hover:bg-red-100 border-2 border-red-200 text-red-600 font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
          >
            <X className="w-5 h-5" />
            <span>Mark as Unknown</span>
          </button>
          <button
            onClick={handleMarkKnown}
            className="bg-green-50 hover:bg-green-100 border-2 border-green-200 text-green-600 font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Mark as Known</span>
          </button>
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="bg-blue-100 hover:bg-blue-200 text-blue-600 font-medium px-6 py-3 rounded-lg transition-colors flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Previous</span>
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === unstudiedCards.length - 1}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>Next</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
}