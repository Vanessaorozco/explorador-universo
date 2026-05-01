import { forwardRef } from "react";

const ConfirmationDialog = forwardRef(function ConfirmationDialog(
  { title, description, confirmText = "Confirmar", cancelText = "Cancelar", danger = false, onConfirm },
  ref
) {
  return (
    <dialog ref={ref} className="w-[min(92vw,420px)] rounded-3xl p-0 shadow-2xl backdrop:bg-navy/70">
      <form method="dialog" className="p-6 text-center">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-amber-100 text-3xl" aria-hidden="true">
          ⚠️
        </span>
        <h2 className="mt-4 text-xl font-black text-slate-900">{title}</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>

        <div className="mt-6 flex flex-col-reverse justify-center gap-3 sm:flex-row">
          <button
            value="cancel"
            className="rounded-xl bg-slate-100 px-5 py-3 text-sm font-bold text-slate-600 transition hover:bg-slate-200 focus:outline-none focus:ring-4 focus:ring-slate-200"
          >
            {cancelText}
          </button>

          {/* Dark pattern intencional: el botón destructivo tiene más peso visual para mostrar cómo un diseño puede empujar al usuario a una acción. */}
          <button
            value="confirm"
            onClick={onConfirm}
            className={`rounded-xl px-5 py-3 text-sm font-black text-white shadow-lg transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 ${
              danger
                ? "bg-red-600 shadow-red-600/20 hover:bg-red-700 focus:ring-red-200"
                : "bg-cyanBrand shadow-cyanBrand/25 hover:bg-cyan-400 focus:ring-cyanBrand/30"
            }`}
          >
            {confirmText}
          </button>
        </div>
      </form>
    </dialog>
  );
});

export default ConfirmationDialog;
