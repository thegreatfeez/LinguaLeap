import React from "react"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./components/Layout"
import Decks from "./Pages/Decks"
import Stats from "./Pages/Stats"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="decks" element={<Decks />} />
          <Route path="stats" element={<Stats />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}