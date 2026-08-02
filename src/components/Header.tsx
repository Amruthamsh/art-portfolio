export default function Header() {
  return (
    <header className="pt-24 pb-16 px-6 text-center">
      <h1 className="font-serif text-5xl md:text-7xl font-semibold tracking-tight text-neutral-900">
        Brush{" "}
        <span className="font-serif italic font-normal text-neutral-400">
          &
        </span>{" "}
        Bloom
      </h1>
      <p className="mt-4 text-neutral-500 text-lg tracking-wide">
        Art by Kusuma & Amruthamsh
      </p>
      <div className="mt-8 w-12 h-px bg-neutral-300 mx-auto" />
    </header>
  );
}
