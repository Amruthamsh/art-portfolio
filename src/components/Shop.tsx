import { artworks } from "../data/artworks";
import { whatsappLink } from "../data/contact";
import { useLightbox } from "../hooks/useLightbox";
import Lightbox from "./Lightbox";

export default function Shop() {
  const lightbox = useLightbox(artworks);

  return (
    <section id="shop" className="px-6 pb-24">
      <h2 className="font-serif text-3xl md:text-4xl text-center text-neutral-900 mb-4">
        Shop Original Artwork
      </h2>
      <p className="text-center text-neutral-500 mb-10 max-w-lg mx-auto">
        Every piece is one of a kind. Message us on WhatsApp to make it yours.
      </p>

      <div className="max-w-3xl mx-auto mb-14 text-center bg-neutral-50 border border-neutral-200 rounded-2xl px-8 py-8">
        <h3 className="font-serif text-xl text-neutral-900">
          Looking for something custom?
        </h3>
        <p className="text-sm text-neutral-500 mt-2 max-w-md mx-auto">
          Tell us what you have in mind &mdash; a portrait, a gift, home decor,
          or anything in between. We'll design and paint it just for you.
        </p>
        <a
          href={whatsappLink(
            "Hi! I'd like to discuss a custom order or design.",
          )}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-5 px-6 py-3 bg-neutral-900 text-white text-sm rounded-full hover:bg-neutral-700 transition-colors"
        >
          Request a Custom Order
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {artworks.map((artwork) => (
          <div key={artwork.id} className="flex flex-col">
            <button
              type="button"
              onClick={() => lightbox.open(artwork.id)}
              className="group overflow-hidden rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2"
            >
              <img
                src={artwork.src}
                alt={artwork.title}
                className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </button>
            <div className="mt-3 text-center">
              <p className="text-sm font-medium text-neutral-800">
                {artwork.title}
              </p>
              <p className="text-xs text-neutral-400 mt-0.5">
                {artwork.category}
              </p>
              <a
                href={whatsappLink(
                  `Hi! I'm interested in buying "${artwork.title}". Is it available?`,
                )}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block px-5 py-2 border border-neutral-300 text-neutral-700 text-xs rounded-full hover:border-neutral-900 hover:text-neutral-900 transition-colors"
              >
                Buy
              </a>
            </div>
          </div>
        ))}
      </div>

      {lightbox.current && (
        <Lightbox
          artwork={lightbox.current}
          artworks={artworks}
          onClose={lightbox.close}
          onPrev={lightbox.prev}
          onNext={lightbox.next}
        />
      )}
    </section>
  );
}
