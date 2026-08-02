import type { ArtPiece } from "../data/artworks";
import ImageCard from "./ImageCard";

interface MasonryGridProps {
  artworks: ArtPiece[];
  onSelect: (id: number) => void;
}

export default function MasonryGrid({ artworks, onSelect }: MasonryGridProps) {
  return (
    <div className="columns-2 md:columns-3 lg:columns-4 gap-4 max-w-6xl mx-auto">
      {artworks.map((artwork) => (
        <div key={artwork.id} className="mb-4 break-inside-avoid">
          <ImageCard artwork={artwork} onClick={() => onSelect(artwork.id)} />
        </div>
      ))}
    </div>
  );
}
