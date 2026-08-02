import { useState } from "react";
import Header from "./components/Header";
import Artists from "./components/Artists";
import Gallery from "./components/Gallery";
import KidsGallery from "./components/KidsGallery";
import Awards from "./components/Awards";
import Shop from "./components/Shop";
import { whatsappLink } from "./data/contact";

function Divider() {
  return <div className="w-12 h-px bg-neutral-200 mx-auto" />;
}

export default function App() {
  const [page, setPage] = useState<"home" | "shop">("home");

  return (
    <div className="min-h-screen bg-white">
      <Header page={page} onNavigate={setPage} />
      {page === "shop" ? (
        <Shop />
      ) : (
        <>
          <Artists />
          <Divider />
          <Gallery />
          <Divider />
          <KidsGallery />
          <Divider />
          <Awards />
        </>
      )}
      <footer className="pb-12 pt-4 text-center">
        <p className="text-neutral-400 text-sm">
          Brush & Bloom &mdash; Made with love and paint-stained hands
        </p>
        <a
          href={whatsappLink("Hi! I'd like to get in touch.")}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-3 text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
        >
          Contact us on WhatsApp
        </a>
      </footer>
    </div>
  );
}
