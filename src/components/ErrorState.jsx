export default function ErrorState({ message, onRetry }) {
  return (
    <div className="flex min-h-64 flex-col items-center justify-center gap-4 text-center" role="alert">
      <span className="text-5xl" aria-hidden="true">
        ⚠️
      </span>
      <div>
        <h2 className="text-xl font-black text-red-600">No se pudo cargar la información</h2>
        <p className="mt-2 text-sm text-slate-600">{message}</p>
      </div>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-200"
        >
          Reintentar
        </button>
      )}
    </div>
  );
}
