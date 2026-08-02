import { useEffect } from "react";
import type { Artwork } from "../data/artworks";

interface LightboxProps {
  artwork: Artwork;
  artworks: Artwork[];
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({
  artwork,
  artworks,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const currentIndex = artworks.findIndex((a) => a.id === artwork.id);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={artwork.title}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
        aria-label="Close"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 md:left-8 text-white/60 hover:text-white transition-colors z-10"
        aria-label="Previous"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 md:right-8 text-white/60 hover:text-white transition-colors z-10"
        aria-label="Next"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      <div
        className="max-w-5xl max-h-[85vh] px-16"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={artwork.src}
          alt={artwork.title}
          className="max-w-full max-h-[78vh] object-contain rounded-md"
        />
        <div className="mt-4 text-center">
          <p className="text-white font-serif text-lg">{artwork.title}</p>
          <p className="text-white/50 text-sm mt-1">
            {currentIndex + 1} / {artworks.length}
          </p>
        </div>
      </div>
    </div>
  );
}
