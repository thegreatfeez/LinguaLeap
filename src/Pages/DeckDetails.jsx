import { useState } from "react";
import { Search, List, Grid, Edit2, Trash2, FileX} from "lucide-react";
import { useDeck } from "../context/DeckContext";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function DeckDetails() {
  const [activeTab, setActiveTab] = useState("all");
  const [viewMode, setViewMode] = useState("list");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddCard, setShowAddCard] = useState(false);
  const [newCard, setNewCard] = useState({ front: "", back: "" });
  const [editingCard, setEditingCard] = useState(null);
  const [editedCard, setEditedCard] = useState({ front: "", back: "" });
  const [sortBy, setSortBy] = useState("default");

  const {id} = useParams()
  const {getDeck, updateDeck} = useDeck()
  const deck = getDeck(Number(id))  

if(!deck){
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
            <div className="text-center max-w-md">
                <div className="mb-4">
                    <FileX className="mx-auto h-24 w-24 text-gray-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Deck not found!</h2>
                <p className="text-gray-600 mb-6">The deck you're looking for doesn't exist or has been deleted.</p>
            </div>
        </div>
    )
}

  const [flashcards, setFlashcards] = useState(
    deck.cards.map((card, index) => ({
        ...card,
        id: card.id || index,
        studied: card.studied || false
    }))
  );

  function handleAddCard() {
    if (newCard.front.trim() && newCard.back.trim()) {
    const updatedCards = [...flashcards, { id: Date.now(), ...newCard, studied: false }];
    setFlashcards(updatedCards);
    
    updateDeck(deck.id, { ...deck, cards: updatedCards });
    
    setNewCard({ front: "", back: "" });
    setShowAddCard(false);
  }
  }

function handleDeleteCard(id) {
  const updatedCards = flashcards.filter(card => card.id !== id);
  setFlashcards(updatedCards);
  
  updateDeck(deck.id, { ...deck, cards: updatedCards });
}

function handleStartEdit(card) {
  setEditingCard(card.id);
  setEditedCard({ front: card.front, back: card.back });
}

function handleSaveEdit(cardId) {
  const updatedCards = flashcards.map(card => 
    card.id === cardId ? { ...card, ...editedCard } : card
  );
  setFlashcards(updatedCards);
  
  updateDeck(deck.id, { ...deck, cards: updatedCards });
  
  setEditingCard(null);
  setEditedCard({ front: "", back: "" });
}

function handleCancelEdit() {
  setEditingCard(null);
  setEditedCard({ front: "", back: "" });
}

  const filteredAndSortedCards = flashcards
    .filter(card => {
      if (activeTab === "studied") {
        return card.studied;
      }
      return true;
    })
    .filter(card => {
      if (activeTab === "studied") return true;
      if (!searchQuery.trim()) return true;
      const query = searchQuery.toLowerCase();
      return card.front.toLowerCase().includes(query) || card.back.toLowerCase().includes(query);
    })
    .sort((a, b) => {
      if (activeTab === "studied") return 0;
      if (sortBy === "front-az") {
        return a.front.localeCompare(b.front);
      } else if (sortBy === "front-za") {
        return b.front.localeCompare(a.front);
      } else if (sortBy === "back-az") {
        return a.back.localeCompare(b.back);
      } else if (sortBy === "back-za") {
        return b.back.localeCompare(a.back);
      }
      return 0;
    });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{deck.deckName}</h1>
            <p className="text-gray-600">Browse and manage your flashcards within this deck.</p>
          </div>
          <button
            onClick={() => setShowAddCard(!showAddCard)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors flex items-center space-x-2"
          >
            <span className="text-xl">+</span>
            <span>Add Flashcard</span>
          </button>
        </div>

        {showAddCard && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Add New Flashcard</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Front</label>
                <input
                  type="text"
                  value={newCard.front}
                  onChange={(e) => setNewCard({ ...newCard, front: e.target.value })}
                  placeholder="Enter front text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Back</label>
                <input
                  type="text"
                  value={newCard.back}
                  onChange={(e) => setNewCard({ ...newCard, back: e.target.value })}
                  placeholder="Enter back text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={handleAddCard}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors"
              >
                Add Card
              </button>
              <button
                onClick={() => setShowAddCard(false)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-4 py-2 rounded-lg transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {activeTab === "all" && (
          <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search flashcards..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        )}

        <div className="border-b border-gray-200 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex space-x-1">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-6 py-3 font-medium transition-colors ${
                  activeTab === "all"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                All Cards
              </button>
              <button
                onClick={() => setActiveTab("studied")}
                className={`px-6 py-3 font-medium transition-colors ${
                  activeTab === "studied"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Studied
              </button>
            </div>

            {activeTab === "all" && (
              <div className="relative mb-2">
                <button 
                  onClick={() => {
                    const select = document.getElementById('sort-select');
                    select.focus();
                    select.click();
                  }}
                  className="text-gray-600 hover:text-gray-900 font-medium flex items-center space-x-2 cursor-pointer"
                >
                  <span>Sort by</span>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                  </svg>
                </button>
                <select
                  id="sort-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="absolute right-0 top-0 opacity-0 w-full h-full cursor-pointer"
                >
                  <option value="default">Default</option>
                  <option value="front-az">Front (A-Z)</option>
                  <option value="front-za">Front (Z-A)</option>
                  <option value="back-az">Back (A-Z)</option>
                  <option value="back-za">Back (Z-A)</option>
                </select>
              </div>
            )}
          </div>
        </div>

        {activeTab === "all" && (
          <div className="flex justify-between items-center mb-6">
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded transition-colors ${
                  viewMode === "list" ? "bg-white shadow-sm" : "hover:bg-gray-200"
                }`}
              >
                <List className="w-5 h-5 text-gray-700" />
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded transition-colors ${
                  viewMode === "grid" ? "bg-white shadow-sm" : "hover:bg-gray-200"
                }`}
              >
                <Grid className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>
        )}

        {activeTab === "all" && flashcards.length > 0 && (
          <div className="mb-6">
            <Link to={`/study/${id}`}>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-4 rounded-lg transition-colors flex items-center justify-center space-x-3 shadow-md">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span className="text-lg">Start Study Session</span>
              </button>
            </Link>
          </div>
        )}

        <div className={activeTab === "all" && viewMode === "grid" ? "grid grid-cols-2 gap-4" : "space-y-4"}>
          {activeTab === "studied" && filteredAndSortedCards.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No studied cards yet.</p>
              <p className="text-gray-400 text-sm mt-2">Cards you mark as known will appear here.</p>
            </div>
          )}
          
          {filteredAndSortedCards.map((card) => (
            <div key={card.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              {editingCard === card.id ? (
                <div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Front</label>
                      <input
                        type="text"
                        value={editedCard.front}
                        onChange={(e) => setEditedCard({ ...editedCard, front: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Back</label>
                      <input
                        type="text"
                        value={editedCard.back}
                        onChange={(e) => setEditedCard({ ...editedCard, back: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => handleSaveEdit(card.id)}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors"
                    >
                      Save
                    </button>
                    <button
                      onClick={handleCancelEdit}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-4 py-2 rounded-lg transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className={activeTab === "all" && viewMode === "grid" ? "flex flex-col space-y-4" : "flex items-center justify-between"}>
                  <div className={activeTab === "all" && viewMode === "grid" ? "space-y-4" : "flex-1 grid grid-cols-2 gap-8"}>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Front</p>
                      <p className="text-lg font-semibold text-gray-900">{card.front}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Back</p>
                      <p className="text-lg text-gray-700">{card.back}</p>
                    </div>
                  </div>
                  {activeTab === "all" && (
                    <div className={`flex items-center space-x-2 ${viewMode === "grid" ? "" : "ml-6"}`}>
                      <button
                        onClick={() => handleStartEdit(card)}
                        className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        <Edit2 className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDeleteCard(card.id)}
                        className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}