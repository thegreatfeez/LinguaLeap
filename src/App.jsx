import React from "react"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./components/Layout"
import Decks from "./Pages/Decks"
import Stats from "./Pages/Stats"
import Home from "./Pages/Home"
import Login from "./Pages/Login"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
         <Route index element={<Home />} />
          <Route path="decks" element={<Decks />} />
          <Route path="stats" element={<Stats />} />
        </Route>
         <Route path="login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}