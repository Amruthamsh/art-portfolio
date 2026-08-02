import Header from "./components/Header";
import Artists from "./components/Artists";
import Gallery from "./components/Gallery";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Artists />
      <div className="w-12 h-px bg-neutral-200 mx-auto" />
      <div className="py-16" />
      <Gallery />
      <footer className="pb-12 text-center">
        <p className="text-neutral-400 text-sm">
          Brush & Bloom &mdash; Made with love and paint-stained hands
        </p>
      </footer>
    </div>
  );
}
