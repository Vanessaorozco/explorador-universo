export default function SearchFilters({ search, status, onSearchChange, onStatusChange }) {
  return (
    <form className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-[1fr_180px]" role="search" aria-label="Buscar personajes">
      <label className="sr-only" htmlFor="search">
        Buscar personaje
      </label>
      <input
        id="search"
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Buscar personaje..."
        className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-cyanBrand focus:ring-4 focus:ring-cyanBrand/20"
      />

      <label className="sr-only" htmlFor="status">
        Filtrar por estado
      </label>
      <select
        id="status"
        value={status}
        onChange={(event) => onStatusChange(event.target.value)}
        className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-cyanBrand focus:ring-4 focus:ring-cyanBrand/20"
      >
        <option value="">Todos los estados</option>
        <option value="alive">Vivo</option>
        <option value="dead">Muerto</option>
        <option value="unknown">Desconocido</option>
      </select>
    </form>
  );
}
