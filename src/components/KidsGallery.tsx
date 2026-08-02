import { kidsArtworks } from "../data/students";
import { useLightbox } from "../hooks/useLightbox";
import MasonryGrid from "./MasonryGrid";
import Lightbox from "./Lightbox";

export default function KidsGallery() {
  const lightbox = useLightbox(kidsArtworks);

  return (
    <section id="young-artists" className="px-6 pb-24">
      <h2 className="font-serif text-3xl md:text-4xl text-center text-neutral-900 mb-4">
        Our Young Artists
      </h2>
      <p className="text-center text-neutral-500 mb-10 max-w-lg mx-auto">
        Artwork from the bright young minds at Kusuma's drawing classes, held at
        her home.
      </p>

      <MasonryGrid artworks={kidsArtworks} onSelect={lightbox.open} />

      {lightbox.current && (
        <Lightbox
          artwork={lightbox.current}
          artworks={kidsArtworks}
          onClose={lightbox.close}
          onPrev={lightbox.prev}
          onNext={lightbox.next}
        />
      )}
    </section>
  );
}
