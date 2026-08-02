import { useCallback, useState } from "react";
import type { ArtPiece } from "../data/artworks";

export function useLightbox(items: ArtPiece[]) {
  const [currentId, setCurrentId] = useState<number | null>(null);

  const current =
    currentId !== null
      ? items.find((item) => item.id === currentId) ?? null
      : null;

  const open = useCallback((id: number) => setCurrentId(id), []);
  const close = useCallback(() => setCurrentId(null), []);

  const prev = useCallback(() => {
    setCurrentId((id) => {
      if (id === null) return null;
      const index = items.findIndex((item) => item.id === id);
      return items[(index - 1 + items.length) % items.length].id;
    });
  }, [items]);

  const next = useCallback(() => {
    setCurrentId((id) => {
      if (id === null) return null;
      const index = items.findIndex((item) => item.id === id);
      return items[(index + 1) % items.length].id;
    });
  }, [items]);

  return { current, open, close, prev, next };
}
