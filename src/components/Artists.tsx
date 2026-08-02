import kusuma1 from "../assets/art/kusuma-1.jpeg";
import kusuma2 from "../assets/art/kusuma-2.jpeg";
import kusuma3 from "../assets/art/kusuma-3.jpeg";
import kusuma4 from "../assets/art/kusuma-4.jpeg";
import amsh1 from "../assets/art/amsh-1.jpeg";
import amsh2 from "../assets/art/amsh-2.jpeg";
import amsh3 from "../assets/art/amsh-3.jpeg";
import amsh4 from "../assets/art/amsh-4.jpeg";

const artists = [
  {
    name: "Kusuma",
    images: [kusuma1, kusuma2, kusuma3, kusuma4],
    description:
      "Artist, teacher, and dreamer. Kusuma conducts drawing classes from her home, patiently guiding young hands and hearts to find their own creative voice.",
  },
  {
    name: "Amruthamsh",
    images: [amsh1, amsh2, amsh3, amsh4],
    description:
      "Software Engineer @ Deloitte by profession, Amruthamsh explores every medium: from delicate pencil sketches to vibrant acrylics and ink.",
  },
];

export default function Artists() {
  return (
    <section id="artists" className="px-6 pb-20">
      <h2 className="font-serif text-3xl md:text-4xl text-center text-neutral-900 mb-12">
        Meet the Artists
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        {artists.map((artist) => (
          <div key={artist.name} className="text-center">
            <div className="grid grid-cols-2 gap-3 max-w-xs mx-auto">
              {artist.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${artist.name} painting`}
                  className="w-full aspect-square object-cover rounded-lg shadow-sm"
                  loading="lazy"
                />
              ))}
            </div>
            <h3 className="font-serif text-2xl mt-6 text-neutral-800">
              {artist.name}
            </h3>
            <p className="mt-2 text-neutral-500 text-sm leading-relaxed max-w-xs mx-auto">
              {artist.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
