"use client";

import React from "react";
import { shouldSpawnFloorsLayout } from "../utils/shouldSpawnFloorsLayout";
import { calculateButtonPosition } from "../utils/calculateButtonPosition";

type FloorZeroProps = {
  zoomLevel: number;
  zoomActions: number;
  dragOffset: { x: number; y: number };
  handleRoomClickWithDragCheck: (room: string) => void;
};

const FloorZero: React.FC<FloorZeroProps> = ({
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
      aria-label="Draggable floor 0 map"
    >
      <img
        src="/0th Floor Layout.png"
        alt="Floor Map"
        className="absolute inset-0 w-full h-full object-contain select-none pointer-events-none"
        draggable="false"
        style={{ transform: `scale(${zoomLevel})` }}
      />
      {shouldSpawnFloorsLayout(zoomActions) && (
        <img
          src="/0th Floors Layout.png"
          alt="Floors Layout"
          className="absolute inset-0 w-full h-full object-contain select-none pointer-events-none"
          draggable="false"
          style={{ transform: `scale(${zoomLevel})`, opacity: 0.5 }}
        />
      )}


    </div>
  );
};

export default FloorZero;
