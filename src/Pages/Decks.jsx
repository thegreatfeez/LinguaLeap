import React from "react";
import { Link } from "react-router-dom";
import { useDeck } from "../context/DeckContext";
import { FaTrash } from "react-icons/fa";

export default function Decks() {
  const { savedDecks, deleteDeck } = useDeck();
 
 

  function getCountryImage(deckName, deckId) {
    const countryMap = {
      spanish: "1",
      french: "2",
      german: "3",
      italian: "4",
      japanese: "5",
      chinese: "6",
      korean: "7",
      portuguese: "8",
      russian: "9",
      arabic: "10",
    };

    const language = Object.keys(countryMap).find((lang) =>
      deckName.toLowerCase().includes(lang)
    );

    const seed = language ? countryMap[language] + deckId : deckId;
    return `https://picsum.photos/400/200?random=${seed}`;
  }


  if (!savedDecks) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back!
          </h1>
          <p className="text-gray-600">Let's continue your language journey.</p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Recent Decks
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {savedDecks.map((deck) => (
              <Link key={deck.id} to={`/deckDetails/${deck.id}`}>
              <div
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow relative group"
              >
                <div
                  className="h-32 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${getCountryImage(
                      deck.deckName,
                      deck.id
                    )}')`,
                  }}
                ></div>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <FaTrash 
                  onClick={(e) => {
                    e.preventDefault();
                    deleteDeck(deck.id);
                  }}
                  className="w-5 h-5 text-red-500 cursor-pointer" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {deck.deckName}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {deck.cards.length} cards
                  </p>
                </div>
              </div>
              </Link>
            ))}

            <Link to="/createDeck">
              <div className="bg-white rounded-lg shadow-md border-2 border-dashed border-gray-300 hover:border-gray-400 transition-colors cursor-pointer">
                <div className="h-32 flex items-center justify-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-2xl text-gray-400">+</span>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-gray-600 mb-1">
                    Add New Deck
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Actions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              to="/createDeck"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
            >
              <span className="text-xl">+</span>
              <span>Create New Deck</span>
            </Link>

            <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2">
              <span className="text-xl">🔎</span>
              <span>Browse Decks</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}