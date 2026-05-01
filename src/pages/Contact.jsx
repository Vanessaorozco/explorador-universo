import { useMemo, useRef, useState } from "react";
import ConfirmationDialog from "../components/ConfirmationDialog.jsx";
import { useToast } from "../context/ToastContext.jsx";

const initialForm = {
  name: "",
  email: "",
  message: ""
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [touched, setTouched] = useState({});
  const dialogRef = useRef(null);
  const { showToast } = useToast();

  const errors = useMemo(() => {
    const nextErrors = {};

    if (form.name.trim().length < 2) {
      nextErrors.name = "El nombre debe tener al menos 2 caracteres.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Ingresa un email válido.";
    }

    if (form.message.trim().length < 10) {
      nextErrors.message = "El mensaje debe tener al menos 10 caracteres.";
    }

    return nextErrors;
  }, [form]);

  const isValid = Object.keys(errors).length === 0;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleBlur = (event) => {
    setTouched((current) => ({ ...current, [event.target.name]: true }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTouched({ name: true, email: true, message: true });

    if (!isValid) {
      showToast("Revisa los campos marcados antes de enviar.", "error");
      return;
    }

    dialogRef.current?.showModal();
  };

  const confirmSubmit = () => {
    showToast("Mensaje enviado correctamente.", "success");
    setForm(initialForm);
    setTouched({});
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 lg:px-6">
      <section className="mx-auto max-w-xl rounded-3xl bg-white p-8 shadow-card">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-700">Contacto</p>
          <h1 className="mt-2 text-3xl font-black text-slate-900">Escríbenos</h1>
          <p className="mt-2 text-sm text-slate-500">Tienes preguntas o sugerencias? Envíanos un mensaje.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
          <div>
            <label htmlFor="name" className="text-sm font-bold text-slate-800">
              Nombre
            </label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={Boolean(touched.name && errors.name)}
              aria-describedby="name-error"
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-cyanBrand focus:ring-4 focus:ring-cyanBrand/20"
              placeholder="Tu nombre"
            />
            {touched.name && errors.name && (
              <p id="name-error" className="mt-2 text-xs font-semibold text-red-600">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-bold text-slate-800">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={Boolean(touched.email && errors.email)}
              aria-describedby="email-error"
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-cyanBrand focus:ring-4 focus:ring-cyanBrand/20"
              placeholder="correo@ejemplo.com"
            />
            {touched.email && errors.email && (
              <p id="email-error" className="mt-2 text-xs font-semibold text-red-600">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="text-sm font-bold text-slate-800">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={Boolean(touched.message && errors.message)}
              aria-describedby="message-error"
              rows="5"
              className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-cyanBrand focus:ring-4 focus:ring-cyanBrand/20"
              placeholder="Escribe tu mensaje aquí..."
            />
            {touched.message && errors.message && (
              <p id="message-error" className="mt-2 text-xs font-semibold text-red-600">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={!isValid}
            className="w-full rounded-xl bg-cyanBrand px-6 py-3 font-black text-navy transition hover:bg-cyan-300 focus:outline-none focus:ring-4 focus:ring-cyanBrand/30 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500"
          >
            Enviar mensaje
          </button>
        </form>
      </section>

      <ConfirmationDialog
        ref={dialogRef}
        title="¿Enviar mensaje?"
        description="Confirma que deseas enviar el formulario de contacto."
        cancelText="Revisar"
        confirmText="Enviar"
        onConfirm={confirmSubmit}
      />
    </main>
  );
}
