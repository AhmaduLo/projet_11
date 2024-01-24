import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import InfoLoc from "./pages/InfoLoc";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/about" element={<About />} />
        <Route path="/infoLoc/:id" element={<InfoLoc/>} />
        {/* path"*" fonctionne si jamais l'url ne correspond a rien  */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
