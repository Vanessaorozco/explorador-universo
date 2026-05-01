import { Link } from "react-router-dom";

export default function EmptyState({ title, message, actionLabel, actionTo }) {
  return (
    <div className="flex min-h-64 flex-col items-center justify-center gap-4 text-center" role="status">
      <span className="text-6xl text-slate-300" aria-hidden="true">
        ★
      </span>
      <div>
        <h2 className="text-xl font-black text-slate-800">{title}</h2>
        <p className="mt-2 text-sm text-slate-500">{message}</p>
      </div>
      {actionLabel && actionTo && (
        <Link className="font-bold text-cyan-700 hover:text-cyanBrand" to={actionTo}>
          {actionLabel}
        </Link>
      )}
    </div>
  );
}
