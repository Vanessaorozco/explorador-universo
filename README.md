# Explorador Universo

Aplicación SPA creada con Vite + React + React Router + Tailwind CSS.
Consume la API pública de Rick and Morty para listar personajes, ver detalle por ID, buscar, filtrar y guardar favoritos.

## Cómo correr el proyecto

```bash
npm install
npm run dev
```

Luego abre la URL local que muestre Vite, normalmente `http://localhost:5173`.

## Cómo generar build

```bash
npm run build
```

## Rutas incluidas

- `/` Inicio
- `/explorar` Lista con fetch, búsqueda, filtro, loading, error y empty
- `/explorar/:id` Detalle con fetch individual por ID
- `/favoritos` Favoritos guardados en estado y localStorage
- `/contacto` Formulario controlado con validación
- `*` Página 404

## Requisitos destacados cubiertos

- Vite + React
- React Router
- Dos fetches: lista y detalle por ID
- Estados Loading, Error y Empty
- Búsqueda y filtrado funcional
- Favoritos entre rutas
- Formulario controlado con botón disabled
- Toasts success, error e info con auto-dismiss
- Modal con `<dialog>`, `useRef` y `showModal()`
- Dark pattern intencional comentado en `ConfirmationDialog.jsx`
- SVG inline en `Logo.jsx`
- Tailwind CSS responsive
- Accesibilidad con `alt`, `role`, `aria-label`, `htmlFor` y HTML semántico
- Más de 8 componentes `.jsx` separados

## https://explorador-universo.vercel.app/
