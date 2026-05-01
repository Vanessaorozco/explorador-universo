import { NavLink } from "react-router-dom";
import Logo from "./Logo.jsx";

const linkClass = ({ isActive }) =>
  `rounded-full px-3 py-2 text-sm font-semibold transition hover:bg-white/10 hover:text-cyanBrand ${
    isActive ? "bg-white/10 text-cyanBrand" : "text-slate-200"
  }`;

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-navy/95 shadow-lg shadow-black/10 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-6">
        <NavLink to="/" aria-label="Ir al inicio">
          <Logo />
        </NavLink>

        <nav aria-label="Navegación principal" className="flex flex-wrap items-center gap-2">
          <NavLink className={linkClass} to="/" end>
            Inicio
          </NavLink>
          <NavLink className={linkClass} to="/explorar">
            Explorar
          </NavLink>
          <NavLink className={linkClass} to="/favoritos">
            Favoritos
          </NavLink>
          <NavLink className={linkClass} to="/contacto">
            Contacto
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
