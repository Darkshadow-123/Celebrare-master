import { useReducer, useEffect } from 'react';
import { getStoredFavorites, saveFavorites } from '../utils/storage';

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD':
      return action.payload;
    case 'TOGGLE':
      const photoId = action.payload;
      if (state.includes(photoId)) {
        return state.filter(id => id !== photoId);
      }
      return [...state, photoId];
    default:
      return state;
  }
};

const useFavorites = () => {
  const [favorites, dispatchFavorites] = useReducer(favoritesReducer, [], getStoredFavorites);

  useEffect(() => {
    saveFavorites(favorites);
  }, [favorites]);

  const toggleFavorite = (photoId) => {
    dispatchFavorites({ type: 'TOGGLE', payload: photoId });
  };

  return { favorites, toggleFavorite };
};

export default useFavorites;
