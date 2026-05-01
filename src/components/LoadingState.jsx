export default function LoadingState({ message = "Cargando datos..." }) {
  return (
    <div className="flex min-h-64 flex-col items-center justify-center gap-4 text-center" role="status" aria-live="polite">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-cyanBrand border-t-transparent" aria-hidden="true" />
      <p className="text-sm font-semibold text-slate-500">{message}</p>
    </div>
  );
}
