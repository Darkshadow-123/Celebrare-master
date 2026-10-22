import { useState, useMemo, useCallback } from 'react';
import useFetchPhotos from './hooks/usePhotos';
import useFavorites from './hooks/useFavorites';
import Header from './components/Header';
import PhotoCard from './components/PhotoCard';
import LoadingState from './components/LoadingState';
import ErrorState from './components/ErrorState';
import Footer from './components/Footer';

function App() {
  const { photos, loading, error } = useFetchPhotos();
  const { favorites, toggleFavorite } = useFavorites();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  const filteredPhotos = useMemo(() => {
    if (!searchTerm.trim()) {
      return photos;
    }
    const term = searchTerm.toLowerCase();
    return photos.filter(photo => 
      photo.author.toLowerCase().includes(term)
    );
  }, [photos, searchTerm]);

  if (loading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState error={error} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <Header 
        searchTerm={searchTerm} 
        onSearch={handleSearch} 
        favoritesCount={favorites.length} 
      />

      <div className="max-w-6xl mx-auto px-4 md:px-8 pb-4">
        {filteredPhotos.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-gray-500 text-xl">No photos found matching "{searchTerm}"</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 pb-2">
            {filteredPhotos.map((photo, index) => (
              <PhotoCard 
                key={photo.id} 
                photo={photo}
                isFavorite={favorites.includes(photo.id)}
                onToggleFavorite={toggleFavorite}
                index={index}
              />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default App;
