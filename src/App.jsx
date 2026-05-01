import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import ToastContainer from "./components/ToastContainer.jsx";
import { ToastProvider, useToast } from "./context/ToastContext.jsx";
import CharacterDetail from "./pages/CharacterDetail.jsx";
import Contact from "./pages/Contact.jsx";
import Explore from "./pages/Explore.jsx";
import Favorites from "./pages/Favorites.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";

function AppContent() {
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = window.localStorage.getItem("rick-favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });
  const { showToast } = useToast();

  useEffect(() => {
    window.localStorage.setItem("rick-favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (character) => {
    setFavorites((currentFavorites) => {
      const exists = currentFavorites.some((favorite) => favorite.id === character.id);

      if (exists) {
        showToast(`${character.name} fue quitado de favoritos.`, "info");
        return currentFavorites.filter((favorite) => favorite.id !== character.id);
      }

      showToast(`${character.name} fue agregado a favoritos.`, "success");
      return [...currentFavorites, character];
    });
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-100">
      <Header />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explorar" element={<Explore favorites={favorites} onToggleFavorite={toggleFavorite} />} />
          <Route path="/explorar/:id" element={<CharacterDetail favorites={favorites} onToggleFavorite={toggleFavorite} />} />
          <Route path="/favoritos" element={<Favorites favorites={favorites} onToggleFavorite={toggleFavorite} />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default function App() {
  return (
    <ToastProvider>
      <AppContent />
    </ToastProvider>
  );
}
