import { Link } from "react-router-dom";
import Hero from "../components/Hero.jsx";

const features = [
  "Búsqueda y filtros en tiempo real",
  "Favoritos que persisten entre rutas",
  "Detalle individual con ruta dinámica"
];

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="px-4 py-14">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <article key={feature} className="rounded-2xl bg-white p-6 shadow-card">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-cyanBrand/10 text-2xl" aria-hidden="true">
                ✨
              </span>
              <h2 className="mt-4 text-lg font-black text-slate-900">{feature}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Implementado con React, React Router, Fetch API y Tailwind CSS responsive.
              </p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-6xl rounded-3xl bg-navy p-8 text-center text-white shadow-card">
          <h2 className="text-2xl font-black">Listo para explorar personajes</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-300">
            La información viene directamente desde la API pública de Rick and Morty, sin datos hardcodeados.
          </p>
          <Link
            to="/explorar"
            className="mt-6 inline-flex rounded-xl bg-cyanBrand px-6 py-3 font-bold text-navy transition hover:bg-cyan-300 focus:outline-none focus:ring-4 focus:ring-cyanBrand/40"
          >
            Ir a explorar
          </Link>
        </div>
      </section>
    </main>
  );
}
