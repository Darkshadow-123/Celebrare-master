import HeartIcon from './HeartIcon';

const PhotoCard = ({ photo, isFavorite, onToggleFavorite, index }) => {
  return (
    <div 
      className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="relative overflow-hidden">
        <img
          src={`https://picsum.photos/id/${photo.id}/600/400`}
          alt={photo.author}
          width="600"
          height="400"
          className="w-full aspect-[3/2] bg-gray-200 object-cover transform group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <button
          onClick={() => onToggleFavorite(photo.id)}
          className="absolute top-3 right-3 p-2.5 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-200 shadow-md hover:shadow-lg hover:scale-110 active:scale-95"
        >
          <HeartIcon filled={isFavorite} />
        </button>
        <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700">
            #{photo.id}
          </span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white text-sm font-medium">
            {photo.author.charAt(0)}
          </div>
          <p className="font-semibold text-gray-800 truncate">{photo.author}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
