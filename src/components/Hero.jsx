import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navySoft to-slate-900 px-4 py-24 text-center text-white">
      <div className="absolute left-10 top-10 h-28 w-28 rounded-full bg-cyanBrand/20 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-8 right-8 h-36 w-36 rounded-full bg-purple-500/20 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-3xl">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-cyanBrand">API Rick and Morty</p>
        <h1 className="text-4xl font-black leading-tight sm:text-6xl">
          Descubre el <span className="text-cyanBrand">Universo</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-300">
          Explora datos fascinantes desde una API real. Busca, filtra y guarda tus personajes favoritos.
        </p>
        <Link
          to="/explorar"
          className="mt-8 inline-flex rounded-xl bg-cyanBrand px-6 py-3 font-bold text-navy shadow-lg shadow-cyanBrand/25 transition hover:-translate-y-0.5 hover:bg-cyan-300 focus:outline-none focus:ring-4 focus:ring-cyanBrand/40"
        >
          Explorar ahora
        </Link>
      </div>
    </section>
  );
}
