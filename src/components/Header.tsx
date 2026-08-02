import { whatsappLink } from "../data/contact";

interface HeaderProps {
  page: "home" | "shop";
  onNavigate: (page: "home" | "shop") => void;
}

const links = [
  { href: "#artists", label: "Artists" },
  { href: "#gallery", label: "Gallery" },
  { href: "#young-artists", label: "Young Artists" },
  { href: "#awards", label: "Awards" },
];

export default function Header({ page, onNavigate }: HeaderProps) {
  const handleSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    if (page !== "home") onNavigate("home");
    requestAnimationFrame(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    });
  };

  return (
    <header className="pt-16 pb-16 px-6 text-center">
      <nav className="mb-14 flex flex-wrap justify-center gap-6 text-sm text-neutral-500">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleSection(e, link.href)}
            className="hover:text-neutral-900 transition-colors"
          >
            {link.label}
          </a>
        ))}
        <button
          type="button"
          onClick={() => onNavigate(page === "shop" ? "home" : "shop")}
          className={`cursor-pointer transition-colors ${
            page === "shop" ? "text-neutral-900" : "hover:text-neutral-900"
          }`}
        >
          Shop
        </button>
      </nav>

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

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <a
          href={whatsappLink(
            "Hi! I'd like to enroll my child in drawing classes.",
          )}
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 bg-neutral-900 text-white text-sm rounded-full hover:bg-neutral-700 transition-colors"
        >
          Enroll in Drawing Classes
        </a>
        {page === "shop" ? (
          <button
            type="button"
            onClick={() => onNavigate("home")}
            className="px-6 py-3 border border-neutral-300 text-neutral-700 text-sm rounded-full hover:border-neutral-900 hover:text-neutral-900 transition-colors cursor-pointer"
          >
            Back to Gallery
          </button>
        ) : (
          <button
            type="button"
            onClick={() => onNavigate("shop")}
            className="px-6 py-3 border border-neutral-300 text-neutral-700 text-sm rounded-full hover:border-neutral-900 hover:text-neutral-900 transition-colors cursor-pointer"
          >
            Buy Paintings
          </button>
        )}
      </div>
    </header>
  );
}
