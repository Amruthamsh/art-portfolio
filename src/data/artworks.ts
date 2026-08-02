import acrylic1 from "../assets/art/acrylic-1-buddha.jpeg";
import acrylic2 from "../assets/art/acrylic-2.jpeg";
import acrylic3 from "../assets/art/acrylic-3.jpeg";
import mandala1 from "../assets/art/mandala-1.jpeg";
import pen1 from "../assets/art/pen-1.jpeg";
import pencil1 from "../assets/art/pencil-1.jpeg";
import pencil2 from "../assets/art/pencil-2.jpeg";
import sketchPen1 from "../assets/art/sketch-pen-1.jpeg";
import sketchPen2 from "../assets/art/sketch-pen-2.jpeg";
import sketchPen3 from "../assets/art/sketch-pen-3.jpeg";

export type Category =
  | "All"
  | "Acrylic"
  | "Pencil"
  | "Pen"
  | "Sketch Pen"
  | "Mandala";

export interface Artwork {
  id: number;
  src: string;
  title: string;
  category: Exclude<Category, "All">;
}

export const categories: Category[] = [
  "All",
  "Acrylic",
  "Pencil",
  "Pen",
  "Sketch Pen",
  "Mandala",
];

export const artworks: Artwork[] = [
  { id: 1, src: acrylic1, title: "Buddha in Bloom", category: "Acrylic" },
  { id: 2, src: acrylic2, title: "Vibrant Threads", category: "Acrylic" },
  { id: 3, src: acrylic3, title: "Color Symphony", category: "Acrylic" },
  { id: 5, src: pencil1, title: "Graphite Dreams", category: "Pencil" },
  { id: 6, src: pencil2, title: "Lines & Shadows", category: "Pencil" },
  { id: 7, src: pen1, title: "Ink Whispers", category: "Pen" },
  { id: 8, src: sketchPen1, title: "Neon Strokes", category: "Sketch Pen" },
  { id: 9, src: sketchPen2, title: "Vivid Paths", category: "Sketch Pen" },
  { id: 10, src: sketchPen3, title: "Chromatic Flow", category: "Sketch Pen" },
  { id: 11, src: mandala1, title: "Sacred Geometry", category: "Mandala" },
];
