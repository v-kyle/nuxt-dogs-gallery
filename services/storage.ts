const key = 'favorites';

function saveFavorites(favorites: Array<string>): void {
  localStorage.setItem(key, JSON.stringify(favorites));
}

function getFavorites(): Array<string> {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
}

export { saveFavorites, getFavorites };
