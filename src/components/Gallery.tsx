import { useState } from "react";
import { artworks, categories, type Category } from "../data/artworks";
import { useLightbox } from "../hooks/useLightbox";
import MasonryGrid from "./MasonryGrid";
import Lightbox from "./Lightbox";

export default function Gallery() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All"
      ? artworks
      : artworks.filter((a) => a.category === active);

  const lightbox = useLightbox(filtered);

  return (
    <section id="gallery" className="px-6 pb-24">
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

      <MasonryGrid artworks={filtered} onSelect={lightbox.open} />

      {lightbox.current && (
        <Lightbox
          artwork={lightbox.current}
          artworks={filtered}
          onClose={lightbox.close}
          onPrev={lightbox.prev}
          onNext={lightbox.next}
        />
      )}
    </section>
  );
}
