export default function FavoriteButton({ isFavorite, onClick, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-lg font-black shadow-md transition hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyanBrand/30 ${
        isFavorite ? "bg-amber-300 text-white" : "bg-white text-slate-300 hover:text-amber-400"
      }`}
    >
      ★
    </button>
  );
}
