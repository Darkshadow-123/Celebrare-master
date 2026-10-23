import HeartIcon from './HeartIcon';

const PhotoCard = ({ photo, isFavorite, onToggleFavorite }) => {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative overflow-hidden">
        <img
          src={`https://picsum.photos/id/${photo.id}/600/400`}
          alt={photo.author}
          width="600"
          height="400"
          className="aspect-[3/2] w-full bg-gray-200 object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <button
          onClick={() => onToggleFavorite(photo.id)}
          className="absolute right-3 top-3 rounded-full bg-white/90 p-2.5 shadow-md backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-white"
          aria-label={`Toggle ${photo.author} as a favourite`}
        >
          <HeartIcon filled={isFavorite} />
        </button>
      </div>
      <div className="flex items-center gap-2 p-4">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-400 to-pink-400 text-sm font-medium text-white">
          {photo.author.charAt(0)}
        </span>
        <p className="truncate font-semibold text-gray-800">{photo.author}</p>
      </div>
    </article>
  );
};

export default PhotoCard;
