import acrylic1 from "../assets/art/acrylic-1-buddha.jpeg";
import acrylic2 from "../assets/art/acrylic-2.jpeg";
import acrylic3 from "../assets/art/acrylic-3.jpeg";
import acrylic4 from "../assets/art/acrylic-4.jpeg";
import acrylic5 from "../assets/art/acrylic-5.jpeg";
import acrylic6 from "../assets/art/acrylic-6.jpeg";
import acrylic7 from "../assets/art/acrylic-7.jpeg";
import acrylic8 from "../assets/art/acrylic-8.jpeg";
import acrylic9 from "../assets/art/acrylic-9.jpeg";
import pencil1 from "../assets/art/pencil-1.jpeg";
import pencil2 from "../assets/art/pencil-2.jpeg";
import pencil3 from "../assets/art/pencil-3.jpeg";
import pencil4 from "../assets/art/pencil-4.jpeg";
import pen1 from "../assets/art/pen-1.jpeg";
import sketchPen1 from "../assets/art/sketch-pen-1.jpeg";
import sketchPen2 from "../assets/art/sketch-pen-2.jpeg";
import sketchPen3 from "../assets/art/sketch-pen-3.jpeg";
import sketchPen4 from "../assets/art/sketch-pen-4.jpeg";
import mandala1 from "../assets/art/mandala-1.jpeg";
import mandala2 from "../assets/art/mandala-2.jpeg";
import clay1 from "../assets/art/clay-1.jpeg";
import clay2 from "../assets/art/clay-2.jpeg";
import clay3 from "../assets/art/clay-3.jpeg";
import clay5 from "../assets/art/clay-5.jpeg";
import clay6 from "../assets/art/clay-6.jpeg";
import clay7 from "../assets/art/clay-7.jpeg";
import lippon1 from "../assets/art/lippon-1.jpeg";
import lippon2 from "../assets/art/lippon-2.jpeg";
import craft1 from "../assets/art/craft-1.jpeg";

export type Category =
  | "All"
  | "Acrylic"
  | "Pencil"
  | "Pen"
  | "Brush Pen"
  | "Mandala"
  | "Clay"
  | "Lippon"
  | "Craft";

export interface ArtPiece {
  id: number;
  src: string;
  title: string;
}

export interface Artwork extends ArtPiece {
  category: Exclude<Category, "All">;
}

export const categories: Category[] = [
  "All",
  "Acrylic",
  "Pencil",
  "Pen",
  "Brush Pen",
  "Mandala",
  "Clay",
  "Lippon",
  "Craft",
];

export const artworks: Artwork[] = [
  { id: 1, src: acrylic9, title: "Lord Ganesha", category: "Acrylic" },
  { id: 2, src: acrylic2, title: "Vibrant Threads", category: "Acrylic" },
  { id: 3, src: acrylic3, title: "Color Symphony", category: "Acrylic" },
  { id: 4, src: acrylic4, title: "Buddha Serenity", category: "Acrylic" },
  { id: 5, src: acrylic5, title: "Petal Dance", category: "Acrylic" },
  { id: 6, src: acrylic6, title: "Azure Dreams", category: "Acrylic" },
  { id: 7, src: acrylic7, title: "Golden Hour", category: "Acrylic" },
  { id: 8, src: acrylic8, title: "Wild Heart", category: "Acrylic" },
  { id: 9, src: acrylic1, title: "Buddha in Bloom", category: "Acrylic" },
  { id: 10, src: pencil1, title: "Graphite Dreams", category: "Pencil" },
  { id: 11, src: pencil2, title: "Lines & Shadows", category: "Pencil" },
  { id: 12, src: pencil3, title: "Delicate Study", category: "Pencil" },
  { id: 13, src: pencil4, title: "Deep Focus", category: "Pencil" },
  { id: 14, src: pen1, title: "Ink Whispers", category: "Pen" },
  { id: 15, src: sketchPen1, title: "Neon Strokes", category: "Brush Pen" },
  { id: 16, src: sketchPen2, title: "Vivid Paths", category: "Brush Pen" },
  { id: 17, src: sketchPen3, title: "Chromatic Flow", category: "Brush Pen" },
  { id: 18, src: sketchPen4, title: "Electric Garden", category: "Brush Pen" },
  { id: 19, src: mandala1, title: "Sacred Geometry", category: "Mandala" },
  { id: 20, src: mandala2, title: "Mandala in Motion", category: "Mandala" },
  { id: 21, src: clay1, title: "Earth & Form", category: "Clay" },
  { id: 22, src: clay2, title: "Sculpted Calm", category: "Clay" },
  { id: 23, src: clay3, title: "Hands in Clay", category: "Clay" },
  { id: 24, src: clay5, title: "Terracotta Tales", category: "Clay" },
  { id: 25, src: clay6, title: "Molded Moments", category: "Clay" },
  { id: 26, src: clay7, title: "Clay Reverie", category: "Clay" },
  { id: 27, src: lippon1, title: "Lippan Glow", category: "Lippon" },
  { id: 28, src: lippon2, title: "Mirror Shimmer", category: "Lippon" },
  { id: 29, src: craft1, title: "Handmade Whimsy", category: "Craft" },
];
