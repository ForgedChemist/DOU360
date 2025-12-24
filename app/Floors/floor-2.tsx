"use client";

import React from "react";
import { shouldSpawnFloorsLayout } from "../utils/shouldSpawnFloorsLayout";
import { calculateButtonPosition } from "../utils/calculateButtonPosition";

type FloorMinusTwoProps = {
  zoomLevel: number;
  zoomActions: number;
  dragOffset: { x: number; y: number };
  handleRoomClickWithDragCheck: (room: string) => void;
};

const FloorMinusTwo: React.FC<FloorMinusTwoProps> = ({
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
      aria-label="Draggable floor -2 map"
    >
      <img
        src="/-2th Floor Layout.png"
        alt="Floor Map"
        className="absolute inset-0 w-full h-full object-contain select-none pointer-events-none"
        draggable="false"
        style={{ transform: `scale(${zoomLevel})` }}
      />
      {shouldSpawnFloorsLayout(zoomActions) && (
        <img
          src="/-2th Floors Layout.png"
          alt="Floors Layout"
          className="absolute inset-0 w-full h-full object-contain select-none pointer-events-none"
          draggable="false"
          style={{ transform: `scale(${zoomLevel})`, opacity: 0.5 }}
        />
      )}

      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 1"
        style={calculateButtonPosition(120, 118, 34, 21, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 1</span>
      </button>

      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 2")}
        aria-label="Room 2"
        style={calculateButtonPosition(155, 118, 12, 22, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 2</span>
      </button>

      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 3")}
        aria-label="Room 3"
        style={calculateButtonPosition(167, 118, 86, 22, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 3</span>
      </button>

      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 4")}
        aria-label="Room 4"
        style={calculateButtonPosition(253, 102, 20, 60, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 4</span>
      </button>

      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 5")}
        aria-label="Room 5"
        style={calculateButtonPosition(273, 102, 23, 60, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 5</span>
      </button>

      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 6")}
        aria-label="Room 6"
        style={calculateButtonPosition(296, 102, 23, 60, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 6</span>
      </button>

      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 7")}
        aria-label="Room 7"
        style={calculateButtonPosition(317, 102, 23, 60, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 7</span>
      </button>

      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 8")}
        aria-label="Room 8"
        style={calculateButtonPosition(362, 120, 27, 20, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 8</span>
      </button>

      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 9")}
        aria-label="Room 9"
        style={calculateButtonPosition(405, 104, 22, 32, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 9</span>
      </button>

      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 10")}
        aria-label="Room 10"
        style={calculateButtonPosition(427, 104, 30, 58, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 10</span>
      </button>

      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 11")}
        aria-label="Room 11"
        style={calculateButtonPosition(390, 141, 36, 21, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 11</span>
      </button>

      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 12")}
        aria-label="Room 12"
        style={calculateButtonPosition(458, 137, 35, 26, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 12</span>
      </button>

      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 13")}
        aria-label="Room 13"
        style={calculateButtonPosition(120, 137, 34, 26, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 13</span>
      </button>

      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 14")}
        aria-label="Room 14"
        style={calculateButtonPosition(124, 163, 30, 21, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 14</span>
      </button>

      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 15")}
        aria-label="Room 15"
        style={calculateButtonPosition(155, 140, 32, 44, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 15</span>
      </button>

      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 16")}
        aria-label="Room 16"
        style={calculateButtonPosition(187, 140, 33, 22, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 16</span>
      </button>

      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 17")}
        aria-label="Room 17"
        style={calculateButtonPosition(187, 162, 33, 22, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 17</span>
      </button>

      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 18")}
        aria-label="Room 18"
        style={calculateButtonPosition(228, 169, 46, 15, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 18</span>
      </button>

      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 19")}
        aria-label="Room 19"
        style={calculateButtonPosition(274, 169, 44, 15, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 19</span>
      </button>

      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 20")}
        aria-label="Room 20"
        style={calculateButtonPosition(318, 169, 56, 15, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 20</span>
      </button>

      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 21")}
        aria-label="Room 21"
        style={calculateButtonPosition(382, 169, 44, 15, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 21</span>
      </button>

      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 22")}
        aria-label="Room 22"
        style={calculateButtonPosition(425, 169, 22, 15, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 22</span>
      </button>

      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 23")}
        aria-label="Room 23"
        style={calculateButtonPosition(447, 169, 22, 15, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 23</span>
      </button>

      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 24")}
        aria-label="Room 24"
        style={calculateButtonPosition(469, 169, 24, 15, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 24</span>
      </button>

      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 25")}
        aria-label="Room 25"
        style={calculateButtonPosition(120, 224, 112, 15, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 25</span>
      </button>

      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 26")}
        aria-label="Room 26"
        style={calculateButtonPosition(120, 245, 24, 50, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 26</span>
      </button>

      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 27")}
        aria-label="Room 27"
        style={calculateButtonPosition(144, 245, 22, 50, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 27</span>
      </button>

      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 28")}
        aria-label="Room 28"
        style={calculateButtonPosition(166, 245, 21, 50, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 28</span>
      </button>

      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 29")}
        aria-label="Room 29"
        style={calculateButtonPosition(187, 245, 21, 50, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 29</span>
      </button>

      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 30")}
        aria-label="Room 30"
        style={calculateButtonPosition(208, 245, 23, 50, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 30</span>
      </button>

      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 31")}
        aria-label="Room 31"
        style={calculateButtonPosition(231, 274, 14.5, 21, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 31</span>
      </button>

      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 32")}
        aria-label="Room 32"
        style={calculateButtonPosition(253, 224, 21, 67, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 32</span>
      </button>

      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 33")}
        aria-label="Room 33"
        style={calculateButtonPosition(274, 224, 22, 67, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 33</span>
      </button>

      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 34")}
        aria-label="Room 34"
        style={calculateButtonPosition(296, 224, 21, 67, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 34</span>
      </button>

      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 35")}
        aria-label="Room 35"
        style={calculateButtonPosition(317, 224, 22, 67, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 35</span>
      </button>

      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 36")}
        aria-label="Room 36"
        style={calculateButtonPosition(339, 224, 22, 67, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 36</span>
      </button>

      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 37")}
        aria-label="Room 37"
        style={calculateButtonPosition(339, 224, 21, 67, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 37</span>
      </button>

      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 38")}
        aria-label="Room 38"
        style={calculateButtonPosition(382, 224, 111, 15, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 38</span>
      </button>

      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 39")}
        aria-label="Room 39"
        style={calculateButtonPosition(382, 245, 22, 50, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 39</span>
      </button>

      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 40")}
        aria-label="Room 40"
        style={calculateButtonPosition(404, 245, 22, 50, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 40</span>
      </button>

      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 41")}
        aria-label="Room 41"
        style={calculateButtonPosition(426, 245, 22, 50, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 41</span>
      </button>

      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 42")}
        aria-label="Room 42"
        style={calculateButtonPosition(448, 245, 22, 50, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 42</span>
      </button>

      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 43")}
        aria-label="Room 43"
        style={calculateButtonPosition(470, 245, 22, 37, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 43</span>
      </button>

      <div className="group">
        <button
          className="absolute bg-transparent group-hover:bg-white transition-all duration-200 cursor-pointer flex items-center justify-center z-10"
          onClick={() => handleRoomClickWithDragCheck("Room 44")}
          aria-label="Room 44 - Spine"
          style={calculateButtonPosition(361, 225, 8, 29, zoomLevel)}
        >
          <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 44</span>
        </button>

        <button
          className="absolute bg-transparent group-hover:bg-white transition-all duration-200 cursor-pointer flex items-center justify-center"
          onClick={() => handleRoomClickWithDragCheck("Room 44")}
          aria-label="Room 44 - Top"
          style={calculateButtonPosition(360, 224, 15, 10, zoomLevel)}
        />

        <button
          className="absolute bg-transparent group-hover:bg-white transition-all duration-200 cursor-pointer flex items-center justify-center"
          onClick={() => handleRoomClickWithDragCheck("Room 44")}
          aria-label="Room 44 - Bottom"
          style={calculateButtonPosition(360, 245, 15, 10, zoomLevel)}
        />

        <div
          className="absolute border-2 border-transparent group-hover:border-black transition-all pointer-events-none"
          style={calculateButtonPosition(360, 224, 8, 30, zoomLevel)}
        />
        <div
          className="absolute border-2 border-transparent group-hover:border-black transition-all pointer-events-none"
          style={calculateButtonPosition(360, 224, 15, 10, zoomLevel)}
        />
        <div
          className="absolute border-2 border-transparent group-hover:border-black transition-all pointer-events-none"
          style={calculateButtonPosition(360, 245, 15, 10, zoomLevel)}
        />
      </div>

    </div>
  );
};

export default FloorMinusTwo;
