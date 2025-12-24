import { useCallback, useState } from "react";

export type UseZoomLevelOptions = {
  min?: number;
  max?: number;
  step?: number;
};

export const useZoomLevel = ({ min = 1, max = 2, step = 0.1 }: UseZoomLevelOptions = {}) => {
  const [zoomLevel, setZoomLevel] = useState(min);
  const [zoomActions, setZoomActions] = useState(0);

  const zoomIn = useCallback(() => {
    setZoomLevel((prev) => {
      const next = Math.min(prev + step, max);
      if (next !== prev) setZoomActions((actions) => actions + 1);
      return next;
    });
  }, [max, step]);

  const zoomOut = useCallback(() => {
    setZoomLevel((prev) => {
      const next = Math.max(prev - step, min);
      if (next !== prev) setZoomActions((actions) => actions - 1);
      return next;
    });
  }, [min, step]);

  return { zoomLevel, zoomActions, zoomIn, zoomOut };
};
