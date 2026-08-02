import { awards } from "../data/students";
import { useLightbox } from "../hooks/useLightbox";
import Lightbox from "./Lightbox";

export default function Awards() {
  const lightbox = useLightbox(awards);

  return (
    <section id="awards" className="px-6 pb-24">
      <h2 className="font-serif text-3xl md:text-4xl text-center text-neutral-900 mb-4">
        Awards & Achievements
      </h2>
      <p className="text-center text-neutral-500 mb-10 max-w-lg mx-auto">
        Moments of pride from our students' competitions and achievements.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {awards.map((award) => (
          <button
            key={award.id}
            type="button"
            onClick={() => lightbox.open(award.id)}
            className="group relative overflow-hidden rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2"
          >
            <img
              src={award.src}
              alt={award.title}
              className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
          </button>
        ))}
      </div>

      {lightbox.current && (
        <Lightbox
          artwork={lightbox.current}
          artworks={awards}
          onClose={lightbox.close}
          onPrev={lightbox.prev}
          onNext={lightbox.next}
        />
      )}
    </section>
  );
}
