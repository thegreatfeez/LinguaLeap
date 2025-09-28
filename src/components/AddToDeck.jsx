import React, { useState } from "react";
import { IoAdd, IoDocumentText, IoCheckmark, IoReorderThree } from "react-icons/io5";
import { useDeck } from "../context/DeckContext";
import SuccessAlert from "./SuccessAlerts";
import ErrorAlert from "./ErrorAlert";

export default function CreateNewDeck() {
     const {addDeck} = useDeck()

    const [deckDetails, setDeckDetails] = React.useState({
    deckName: "",
    deckDescription: "",
    })
   
    const [cards, setCards] = React.useState({front:'', back: ''})
    const [cardsList, setCardsList] = React.useState([
        { front: "Hola", back: "Hello" },
        { front: "Adiós", back: "Goodbye" },
        { front: "Gracias", back: "Thank you" }
    ])

    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);

    function handleChange(e) {
    const { name, value } = e.target;
    setDeckDetails(prev => ({ ...prev, [name]: value }));
  }

    function handleCreateDeck() {
      if (!deckDetails.deckName.trim()) {
    setShowError(true);
    return;
  }
  const completeDeck = {
    ...deckDetails,
    cards: cardsList
  }
    addDeck(completeDeck);
    setShowSuccess(true);
    console.log("Deck created:", completeDeck);

    setDeckDetails({ deckName: "", deckDescription: "" });
  }

    function handleCardChange(e) {
        const { name, value } = e.target;
        setCards(prev => ({ ...prev, [name]: value }));
    }

    function handleAddCard() {
        if (cards.front.trim() && cards.back.trim()) {
            setCardsList(prev => [...prev, { front: cards.front, back: cards.back }]);
            setCards({ front: '', back: '' });
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex gap-12">
                    
                    <div className="flex-1">
                        
                        <div className="flex items-center justify-between mb-8">
                            <h1 className="text-3xl font-bold text-gray-900">
                                Create New Deck
                            </h1>
                            <button 
                            onClick={handleCreateDeck}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors flex items-center space-x-2">
                                <IoDocumentText />
                                <span>Save Deck</span>
                            </button>
                        </div>

                        
                        <div className="space-y-6 mb-8">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Deck Name
                                </label>
                                <input
                                    name="deckName"
                                    onChange={handleChange}
                                    value={deckDetails.deckName}
                                    type="text"
                                    required
                                    placeholder="e.g., Spanish Vocabulary: Level 1"
                                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-100"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Description
                                </label>
                                <textarea
                                    name="deckDescription"
                                    onChange={handleChange}
                                    value={deckDetails.deckDescription}
                                    rows="4"
                                    placeholder="Optional: Describe the contents of this deck"
                                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-100"
                                />
                            </div>
                        </div>

                        
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">
                                Add Cards
                            </h2>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Front
                                    </label>
                                    <input
                                        name="front"
                                        value={cards.front}
                                        onChange={handleCardChange}
                                        type="text"
                                        placeholder="Term (e.g., Hola)"
                                        className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-100"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Back
                                    </label>
                                    <input
                                        name="back"
                                        value={cards.back}
                                        onChange={handleCardChange}
                                        type="text"
                                        placeholder="Definition (e.g., Hello)"
                                        className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-100"
                                    />
                                </div>
                            </div>
                            <button 
                                onClick={handleAddCard}
                                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors flex items-center space-x-2">
                                <IoAdd />
                                <span>Add Card</span>
                            </button>
                        </div>

                        
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">
                                Cards in Deck ({cardsList.length})
                            </h2>
                            <div className="space-y-3">
                                {cardsList.map((card, index) => (
                                    <div key={index} className="border border-gray-200 rounded-lg p-4 bg-white">
                                        <div className="flex items-start space-x-4">
                                            <div className="text-gray-400 mt-1">
                                                <IoReorderThree />
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-medium text-gray-900 mb-1">{card.front}</div>
                                                <div className="text-gray-500 text-sm">{card.back}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    
                    <div className="w-80">
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-8">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                Tips for Great Flashcards
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                                        <IoCheckmark className="w-3 h-3 text-blue-600" />
                                    </div>
                                    <p className="text-gray-600 text-sm">Keep it simple: one concept per card.</p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                                        <IoCheckmark className="w-3 h-3 text-blue-600" />
                                    </div>
                                    <p className="text-gray-600 text-sm">Use images or examples to add context.</p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                                        <IoCheckmark className="w-3 h-3 text-blue-600" />
                                    </div>
                                    <p className="text-gray-600 text-sm">Say the words out loud as you study.</p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                                        <IoCheckmark className="w-3 h-3 text-blue-600" />
                                    </div>
                                    <p className="text-gray-600 text-sm">Study your decks regularly for best results.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <SuccessAlert 
                message="Deck has been saved successfully!"
                isVisible={showSuccess}
                onClose={() => setShowSuccess(false)}
            />

            <ErrorAlert 
                message="Deck name is required"
                isVisible={showError}
                onClose={() => setShowError(false)}
            />
        </div>
    );
}