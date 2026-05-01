import { useRef, useState } from "react";
import CharacterCard from "../components/CharacterCard.jsx";
import ConfirmationDialog from "../components/ConfirmationDialog.jsx";
import EmptyState from "../components/EmptyState.jsx";

export default function Favorites({ favorites, onToggleFavorite }) {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const dialogRef = useRef(null);

  const requestRemove = (character) => {
    setSelectedCharacter(character);
    dialogRef.current?.showModal();
  };

  const confirmRemove = () => {
    if (selectedCharacter) {
      onToggleFavorite(selectedCharacter);
      setSelectedCharacter(null);
    }
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 lg:px-6">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-700">Tus personajes guardados</p>
        <h1 className="mt-2 text-3xl font-black text-slate-900">Mis Favoritos</h1>
        <p className="mt-2 text-sm text-slate-500">{favorites.length} item(s) guardados</p>
      </div>

      {favorites.length === 0 ? (
        <EmptyState
          title="No tienes favoritos guardados"
          message="Explora personajes y agrega algunos a esta sección."
          actionLabel="Explorar y agregar favoritos"
          actionTo="/explorar"
        />
      ) : (
        <section className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-label="Lista de favoritos">
          {favorites.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              isFavorite
              onToggleFavorite={requestRemove}
            />
          ))}
        </section>
      )}

      <ConfirmationDialog
        ref={dialogRef}
        danger
        title="¿Quitar de favoritos?"
        description={
          selectedCharacter
            ? `Estás seguro de que quieres quitar a ${selectedCharacter.name} de tus favoritos?`
            : "Esta acción quitará el personaje de tus favoritos."
        }
        cancelText="Cancelar"
        confirmText="Quitar"
        onConfirm={confirmRemove}
      />
    </main>
  );
}
