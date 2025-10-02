import { createContext, useContext, useState } from 'react';

const DeckContext = createContext()

export const DeckProvider = ({children}) => {
    const [savedDecks, setSavedDecks] = useState([])

    const addDeck = (deck) => {
        setSavedDecks(prev => [...prev, {...deck, id:Date.now()}])
    }

    const getDeck = (id) => {
        return savedDecks.find(deck => deck.id === id)
    }

      const deleteDeck = (id) => {
    setSavedDecks(prev => prev.filter(deck => deck.id !== id));
  };

 const updateDeck = (id, updatedDeck) => {
  setSavedDecks(prev => 
    prev.map(deck => deck.id === id ? updatedDeck : deck)
  );
};


    return(
        <DeckContext.Provider value={{savedDecks, addDeck, getDeck, deleteDeck,updateDeck}}>
            {children}
        </DeckContext.Provider>
    )
}

export const useDeck = () => {
  const context = useContext(DeckContext);
  if (!context) {
    throw new Error('useDeck must be used within DeckProvider');
  }
  return context;
};