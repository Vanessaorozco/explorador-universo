import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ConfirmationDialog from "../components/ConfirmationDialog.jsx";
import ErrorState from "../components/ErrorState.jsx";
import LoadingState from "../components/LoadingState.jsx";
import StatusBadge from "../components/StatusBadge.jsx";
import { useToast } from "../context/ToastContext.jsx";
import { getCharacterById } from "../services/rickMortyApi.js";

export default function CharacterDetail({ favorites, onToggleFavorite }) {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { showToast } = useToast();
  const dialogRef = useRef(null);

  const isFavorite = favorites.some((favorite) => favorite.id === Number(id));

  async function loadCharacter() {
    try {
      setLoading(true);
      setError(null);
      const data = await getCharacterById(id);
      setCharacter(data);
    } catch (requestError) {
      setError(requestError.message);
      showToast(requestError.message, "error");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadCharacter();
  }, [id]);

  const handleFavoriteAction = () => {
    if (!character) return;

    if (isFavorite) {
      dialogRef.current?.showModal();
      return;
    }

    onToggleFavorite(character);
  };

  const confirmRemove = () => {
    if (character) onToggleFavorite(character);
  };

  if (loading) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-12 lg:px-6">
        <LoadingState message="Cargando detalle..." />
      </main>
    );
  }

  if (error) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-12 lg:px-6">
        <ErrorState message={error} onRetry={loadCharacter} />
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 lg:px-6">
      <Link to="/explorar" className="font-bold text-cyan-700 hover:text-cyanBrand">
        ← Volver a explorar
      </Link>

      <article className="mt-6 grid overflow-hidden rounded-3xl bg-white shadow-card md:grid-cols-[360px_1fr]">
        <img src={character.image} alt={`Imagen de ${character.name}`} className="h-full min-h-80 w-full object-cover" />

        <div className="p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-black text-slate-900 sm:text-4xl">{character.name}</h1>
              <p className="mt-2 text-slate-600">Personaje del universo Rick and Morty</p>
            </div>
            <StatusBadge status={character.status} />
          </div>

          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-4">
              <dt className="text-xs font-bold uppercase tracking-wide text-slate-400">Especie</dt>
              <dd className="mt-1 font-bold text-slate-900">{character.species}</dd>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <dt className="text-xs font-bold uppercase tracking-wide text-slate-400">Género</dt>
              <dd className="mt-1 font-bold text-slate-900">{character.gender}</dd>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <dt className="text-xs font-bold uppercase tracking-wide text-slate-400">Origen</dt>
              <dd className="mt-1 font-bold text-slate-900">{character.origin?.name}</dd>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <dt className="text-xs font-bold uppercase tracking-wide text-slate-400">Episodios</dt>
              <dd className="mt-1 font-bold text-slate-900">{character.episode?.length ?? 0}</dd>
            </div>
          </dl>

          <button
            type="button"
            onClick={handleFavoriteAction}
            className="mt-8 rounded-xl bg-cyanBrand px-6 py-3 font-black text-navy transition hover:bg-cyan-300 focus:outline-none focus:ring-4 focus:ring-cyanBrand/30"
          >
            {isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
          </button>
        </div>
      </article>

      <ConfirmationDialog
        ref={dialogRef}
        danger
        title="¿Quitar de favoritos?"
        description={`Esta acción quitará a ${character.name} de tu lista de favoritos.`}
        cancelText="Cancelar"
        confirmText="Quitar"
        onConfirm={confirmRemove}
      />
    </main>
  );
}
