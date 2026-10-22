import SearchIcon from './SearchIcon';

const Header = ({ searchTerm, onSearch, favoritesCount }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 relative">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Photo Gallery
        </h1>
        <p className="text-center text-gray-500 mb-8 text-lg">Discover amazing photographs from talented artists</p>
        
        <div className="max-w-2xl mx-auto mb-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <SearchIcon />
            </div>
            <input
              type="text"
              placeholder="Search by author name..."
              value={searchTerm}
              onChange={onSearch}
              className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl shadow-lg shadow-purple-100/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent text-lg transition-all duration-300"
            />
          </div>
        </div>

        {favoritesCount > 0 && (
          <p className="text-center text-gray-500 mb-4">
            <span className="inline-flex items-center gap-1">
              <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
              </svg>
              {favoritesCount} photo{favoritesCount !== 1 ? 's' : ''} in your favorites
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Header;
