export const FAVORITES_KEY = 'photo-gallery-favorites';

export const getStoredFavorites = () => {
  try {
    const stored = localStorage.getItem(FAVORITES_KEY);
    const favorites = stored ? JSON.parse(stored) : [];
    return Array.isArray(favorites) ? favorites : [];
  } catch {
    return [];
  }
};

export const saveFavorites = (favorites) => {
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  } catch {
    // Ignore storage errors, such as private browsing restrictions.
  }
};
