import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AnimeList from "./components/AnimeList";
import AnimePage from "./Pages/AnimePage";


function App() {

  return(
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<AnimeList />} />
    <Route path="/anime/:id" element={<AnimePage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
