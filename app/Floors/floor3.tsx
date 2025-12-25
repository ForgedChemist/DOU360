"use client";

import React from "react";
import { shouldSpawnFloorsLayout } from "../utils/shouldSpawnFloorsLayout";
import { calculateButtonPosition } from "../utils/calculateButtonPosition";

type FloorThreeProps = {
  zoomLevel: number;
  zoomActions: number;
  dragOffset: { x: number; y: number };
  handleRoomClickWithDragCheck: (room: string) => void;
};

const FloorThree: React.FC<FloorThreeProps> = ({
  zoomLevel,
  zoomActions,
  dragOffset,
  handleRoomClickWithDragCheck,
}) => {
  return (
    <div
      className="relative w-full h-full"
      style={{ transform: `translate(${dragOffset.x}px, ${dragOffset.y}px)` }}
      role="application"
      aria-label="Draggable floor 3 map"
    >
      <img
        src="/3rd Floor Layout.png"
        alt="Floor Map"
        className="absolute inset-0 w-full h-full object-contain select-none pointer-events-none"
        draggable="false"
        style={{ transform: `scale(${zoomLevel})` }}
      />
      {shouldSpawnFloorsLayout(zoomActions) && (
        <img
          src="/3rd Floors Layout.png"
          alt="Floors Layout"
          className="absolute inset-0 w-full h-full object-contain select-none pointer-events-none"
          draggable="false"
          style={{ transform: `scale(${zoomLevel})`, opacity: 0.5 }}
        />
      )}

    </div>
  );
};

export default FloorThree;
