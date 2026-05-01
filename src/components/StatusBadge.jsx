const statusStyles = {
  Alive: "bg-emerald-100 text-emerald-700",
  Dead: "bg-red-100 text-red-700",
  unknown: "bg-slate-200 text-slate-700"
};

const statusLabels = {
  Alive: "Vivo",
  Dead: "Muerto",
  unknown: "Desconocido"
};

export default function StatusBadge({ status }) {
  return (
    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${statusStyles[status] ?? statusStyles.unknown}`}>
      {statusLabels[status] ?? statusLabels.unknown}
    </span>
  );
}
