const API_URL = "https://rickandmortyapi.com/api/character";

export async function getCharacters({ search = "", status = "" } = {}) {
  const params = new URLSearchParams();

  if (search.trim()) params.set("name", search.trim());
  if (status) params.set("status", status);

  const url = params.toString() ? `${API_URL}/?${params.toString()}` : API_URL;
  const response = await fetch(url);

  if (response.status === 404) {
    return [];
  }

  if (!response.ok) {
    throw new Error("No se pudo cargar la información. Inténtalo nuevamente.");
  }

  const data = await response.json();
  return data.results ?? [];
}

export async function getCharacterById(id) {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error("No se pudo cargar el personaje solicitado.");
  }

  return response.json();
}
