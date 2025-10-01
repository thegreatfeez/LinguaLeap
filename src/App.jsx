import React from "react"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./components/Layout"
import Decks from "./Pages/Decks"
import Stats from "./Pages/Stats"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import CreateNewDeck from "./components/AddToDeck"
import { DeckProvider } from "./context/DeckContext"
import DeckDetails from "./Pages/DeckDetails"
import StudyFlashcards from "./Pages/StudyFlasgCard"


export default function App() {
  return (
    <DeckProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
         <Route index element={<Home />} />
          <Route path="decks" element={<Decks />} />
          <Route path="stats" element={<Stats />} />
           <Route path="createDeck" element={<CreateNewDeck />} />
           <Route path="deckDetails/:id" element={<DeckDetails />} />
           <Route path="study/:id" element={<StudyFlashcards />} />
        </Route>
         <Route path="login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    </DeckProvider>
  );
}