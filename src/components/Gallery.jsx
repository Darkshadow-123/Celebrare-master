import { useCallback, useMemo, useState } from 'react';
import useFetchPhotos from '../hooks/useFetchPhotos';
import useFavorites from '../hooks/useFavorites';
import PhotoCard from './PhotoCard';
import SearchBar from './SearchBar';

const Gallery = () => {
  const { photos, loading, error } = useFetchPhotos();
  const { favorites, toggleFavorite } = useFavorites();
  const [searchTerm, setSearchTerm] = useState('');

  // Keeps one function reference, allowing the memoized SearchBar to skip favourite-only renders.
  const handleSearch = useCallback((e) => setSearchTerm(e.target.value), []);

  // Reuses filtered photos until the photo list or search text changes.
  const filteredPhotos = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    return photos.filter((photo) => photo.author.toLowerCase().includes(term));
  }, [photos, searchTerm]);

  return (
    <section className="mx-auto max-w-6xl">
      <SearchBar value={searchTerm} onChange={handleSearch} />
      {favorites.length > 0 && (
        <p className="mb-6 text-center text-gray-500">
          <span className="inline-flex items-center gap-1">
            <svg className="h-4 w-4 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
            {favorites.length} photo{favorites.length !== 1 ? 's' : ''} in your favorites
          </span>
        </p>
      )}

      {loading && (
        <div className="flex justify-center py-12">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-300 border-t-slate-700" />
        </div>
      )}

      {error && (
        <div className="py-12 text-center">
          <p className="mb-4 text-red-600">{error}</p>
          <button className="rounded bg-slate-800 px-4 py-2 text-white" onClick={() => window.location.reload()}>
            Try again
          </button>
        </div>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredPhotos.map((photo) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              isFavorite={favorites.includes(photo.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Gallery;
