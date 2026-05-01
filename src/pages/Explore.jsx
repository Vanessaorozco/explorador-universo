import { useEffect, useMemo, useState } from "react";
import CharacterCard from "../components/CharacterCard.jsx";
import EmptyState from "../components/EmptyState.jsx";
import ErrorState from "../components/ErrorState.jsx";
import LoadingState from "../components/LoadingState.jsx";
import PageTitle from "../components/PageTitle.jsx";
import SearchFilters from "../components/SearchFilters.jsx";
import { useToast } from "../context/ToastContext.jsx";
import { getCharacters } from "../services/rickMortyApi.js";

export default function Explore({ favorites, onToggleFavorite }) {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { showToast } = useToast();

  const favoriteIds = useMemo(() => new Set(favorites.map((favorite) => favorite.id)), [favorites]);

  async function loadCharacters() {
    try {
      setLoading(true);
      setError(null);
      const data = await getCharacters({ search, status });
      setCharacters(data);
    } catch (requestError) {
      setError(requestError.message);
      showToast(requestError.message, "error");
      setCharacters([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const timer = window.setTimeout(loadCharacters, 250);
    return () => window.clearTimeout(timer);
  }, [search, status]);

  return (
    <main>
      <PageTitle
        eyebrow="Explorador"
        title={{ before: "Explorar", highlight: "Personajes" }}
        description="Datos obtenidos en tiempo real desde la API pública. Usa la búsqueda o el filtro para encontrar personajes."
      />

      <section className="mx-auto max-w-6xl px-4 py-8 lg:px-6">
        <SearchFilters search={search} status={status} onSearchChange={setSearch} onStatusChange={setStatus} />

        <div className="mt-8 flex items-center justify-between gap-4">
          <h2 className="text-xl font-black text-slate-900">Resultados</h2>
          {!loading && !error && <p className="text-sm text-slate-500">Mostrando {characters.length} resultados</p>}
        </div>

        {loading && <LoadingState />}

        {!loading && error && <ErrorState message={error} onRetry={loadCharacters} />}

        {!loading && !error && characters.length === 0 && (
          <EmptyState
            title="No encontramos resultados"
            message="Prueba con otro nombre o cambia el estado seleccionado."
          />
        )}

        {!loading && !error && characters.length > 0 && (
          <section className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-label="Lista de personajes">
            {characters.map((character) => (
              <CharacterCard
                key={character.id}
                character={character}
                isFavorite={favoriteIds.has(character.id)}
                onToggleFavorite={onToggleFavorite}
              />
            ))}
          </section>
        )}
      </section>
    </main>
  );
}
