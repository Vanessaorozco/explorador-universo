import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="grid min-h-[70vh] place-items-center px-4 py-16 text-center">
      <section>
        <p className="text-8xl font-black text-cyanBrand">404</p>
        <h1 className="mt-4 text-3xl font-black text-slate-900">Página no encontrada</h1>
        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-600">
          La ruta que buscas no existe en esta aplicación.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-xl bg-cyanBrand px-6 py-3 font-bold text-navy transition hover:bg-cyan-300 focus:outline-none focus:ring-4 focus:ring-cyanBrand/30"
        >
          Volver al inicio
        </Link>
      </section>
    </main>
  );
}
