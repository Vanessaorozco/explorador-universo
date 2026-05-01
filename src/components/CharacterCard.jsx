import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton.jsx";
import StatusBadge from "./StatusBadge.jsx";

export default function CharacterCard({ character, isFavorite, onToggleFavorite }) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-card transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-48 overflow-hidden">
        <img
          src={character.image}
          alt={`Imagen de ${character.name}`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute right-3 top-3">
          <FavoriteButton
            isFavorite={isFavorite}
            onClick={() => onToggleFavorite(character)}
            label={isFavorite ? `Quitar ${character.name} de favoritos` : `Agregar ${character.name} a favoritos`}
          />
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-lg font-black text-slate-900">{character.name}</h2>
            <p className="mt-1 text-sm text-slate-600">Especie: {character.species}</p>
          </div>
          <StatusBadge status={character.status} />
        </div>

        <div className="mt-5 flex items-center justify-between gap-3">
          <span className="rounded-full bg-cyanBrand/10 px-3 py-1 text-xs font-bold text-cyan-700">
            {character.gender}
          </span>
          <Link
            to={`/explorar/${character.id}`}
            className="text-sm font-bold text-cyan-700 hover:text-cyanBrand focus:outline-none focus:underline"
          >
            Ver detalles
          </Link>
        </div>
      </div>
    </article>
  );
}
