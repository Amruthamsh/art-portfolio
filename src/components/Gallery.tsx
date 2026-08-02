import { useState } from "react";
import { artworks, categories, type Category } from "../data/artworks";
import ImageCard from "./ImageCard";
import Lightbox from "./Lightbox";

export default function Gallery() {
  const [active, setActive] = useState<Category>("All");
  const [lightboxId, setLightboxId] = useState<number | null>(null);

  const filtered =
    active === "All"
      ? artworks
      : artworks.filter((a) => a.category === active);

  const lightboxArtwork = lightboxId !== null
    ? artworks.find((a) => a.id === lightboxId)
    : null;

  const handlePrev = () => {
    if (lightboxId === null) return;
    const idx = filtered.findIndex((a) => a.id === lightboxId);
    const prev = idx <= 0 ? filtered.length - 1 : idx - 1;
    setLightboxId(filtered[prev].id);
  };

  const handleNext = () => {
    if (lightboxId === null) return;
    const idx = filtered.findIndex((a) => a.id === lightboxId);
    const next = idx >= filtered.length - 1 ? 0 : idx + 1;
    setLightboxId(filtered[next].id);
  };

  return (
    <section className="px-6 pb-24">
      <h2 className="font-serif text-3xl md:text-4xl text-center text-neutral-900 mb-8">
        Gallery
      </h2>

      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={`px-4 py-1.5 text-sm rounded-full transition-colors duration-200 ${
              active === cat
                ? "bg-neutral-900 text-white"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 max-w-6xl mx-auto">
        {filtered.map((artwork) => (
          <div key={artwork.id} className="mb-4 break-inside-avoid">
            <ImageCard
              artwork={artwork}
              onClick={() => setLightboxId(artwork.id)}
            />
          </div>
        ))}
      </div>

      {lightboxArtwork && (
        <Lightbox
          artwork={lightboxArtwork}
          artworks={filtered}
          onClose={() => setLightboxId(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  );
}
