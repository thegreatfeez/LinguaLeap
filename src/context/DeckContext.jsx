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

    return(
        <DeckContext.Provider value={{savedDecks, addDeck, getDeck}}>
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