import { useToast } from "../context/ToastContext.jsx";

const styles = {
  success: "border-emerald-200 bg-emerald-50 text-emerald-800",
  error: "border-red-200 bg-red-50 text-red-800",
  info: "border-cyan-200 bg-cyan-50 text-cyan-800"
};

const icons = {
  success: "✓",
  error: "!",
  info: "i"
};

export default function ToastContainer() {
  const { toasts, removeToast } = useToast();

  return (
    <div className="fixed right-4 top-24 z-50 flex w-[calc(100%-2rem)] max-w-sm flex-col gap-3" aria-live="polite">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`flex items-start gap-3 rounded-2xl border p-4 shadow-card ${styles[toast.type] ?? styles.info}`}
          role={toast.type === "error" ? "alert" : "status"}
        >
          <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white/70 text-sm font-black" aria-hidden="true">
            {icons[toast.type] ?? icons.info}
          </span>
          <p className="flex-1 text-sm font-semibold">{toast.message}</p>
          <button
            type="button"
            onClick={() => removeToast(toast.id)}
            aria-label="Cerrar notificación"
            className="font-black opacity-70 hover:opacity-100"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
}
