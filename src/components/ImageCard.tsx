import type { ArtPiece } from "../data/artworks";

interface ImageCardProps {
  artwork: ArtPiece;
  onClick: () => void;
}

export default function ImageCard({ artwork, onClick }: ImageCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative overflow-hidden rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2"
    >
      <img
        src={artwork.src}
        alt={artwork.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-white text-sm font-medium tracking-wide">
          {artwork.title}
        </p>
      </div>
    </button>
  );
}
