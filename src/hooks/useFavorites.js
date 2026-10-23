import { useReducer, useEffect } from 'react';
import { getStoredFavorites, saveFavorites } from '../utils/storage';

// A reducer receives the current favourites array and a named action.
const favoritesReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE': {
      // The action payload is the ID of the photo the user clicked.
      const photoId = action.payload;

      // Remove an existing ID; otherwise return a new array with the ID added.
      if (state.includes(photoId)) {
        return state.filter((id) => id !== photoId);
      }
      return [...state, photoId];
    }
    default:
      return state;
  }
};

const useFavorites = () => {
  // The third useReducer argument is a lazy initializer, so localStorage is read once.
  const [favorites, dispatchFavorites] = useReducer(favoritesReducer, [], getStoredFavorites);

  // Save the updated array after every change, so favourites survive a page refresh.
  useEffect(() => {
    saveFavorites(favorites);
  }, [favorites]);

  const toggleFavorite = (photoId) => {
    // Send one named action instead of changing the array inside a component.
    dispatchFavorites({ type: 'TOGGLE', payload: photoId });
  };

  return { favorites, toggleFavorite };
};

export default useFavorites;
