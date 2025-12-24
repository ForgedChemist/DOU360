"use client";

import React from "react";
import { shouldSpawnFloorsLayout } from "../utils/shouldSpawnFloorsLayout";
import { calculateButtonPosition } from "../utils/calculateButtonPosition";

type FloorMinusOneProps = {
  zoomLevel: number;
  zoomActions: number;
  dragOffset: { x: number; y: number };
  handleRoomClickWithDragCheck: (room: string) => void;
};

const FloorMinusOne: React.FC<FloorMinusOneProps> = ({
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
      aria-label="Draggable floor -1 map"
    >
      <img
        src="/-1th Floor Layout.png"
        alt="Floor Map"
        className="absolute inset-0 w-full h-full object-contain select-none pointer-events-none"
        draggable="false"
        style={{ transform: `scale(${zoomLevel})` }}
      />
      {shouldSpawnFloorsLayout(zoomActions) && (
        <img
          src="/-1th Floors Layout.png"
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
        style={calculateButtonPosition(113, 163, 68, 21, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 1</span>
      </button>

      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 2"
        style={calculateButtonPosition(181, 117, 22.5, 67, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 2</span>
      </button>

      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 2"
        style={calculateButtonPosition(203, 117, 21, 23, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 3</span>
      </button>

      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 2"
        style={calculateButtonPosition(203, 139, 21, 44, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 4</span>
      </button>
      
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 2"
        style={calculateButtonPosition(225, 118, 42, 21, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 5</span>
      </button>
      
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 2"
        style={calculateButtonPosition(246, 139, 14, 44, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 6</span>
      </button>
      
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 2"
        style={calculateButtonPosition(249, 101, 18, 17, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 7</span>
      </button>
      
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 2"
        style={calculateButtonPosition(268, 102, 23, 38, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 8</span>
      </button>
                  
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 2"
        style={calculateButtonPosition(290, 102, 23, 38, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 9</span>
      </button>
            
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 2"
        style={calculateButtonPosition(313, 102, 23, 67, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 10</span>
      </button>
      
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 2"
        style={calculateButtonPosition(268, 145, 23, 24, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 11</span>
      </button>
      
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 2"
        style={calculateButtonPosition(290, 145, 23, 24, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 12</span>
      </button>
      
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 2"
        style={calculateButtonPosition(335.5, 102, 20, 59, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 13</span>
      </button>
                  
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 2"
        style={calculateButtonPosition(356, 119, 23, 21, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 14</span>
      </button> 

      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 2"
        style={calculateButtonPosition(400, 104, 22, 36, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 15</span>
      </button>
            
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 2"
        style={calculateButtonPosition(422, 104, 22, 36, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 16</span>
      </button>
                        
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 2"
        style={calculateButtonPosition(445, 104, 20, 25, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 17</span>
      </button>
                                    
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 2"
        style={calculateButtonPosition(465, 104, 23, 25, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 18</span>
      </button>
                                                
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 2"
        style={calculateButtonPosition(488, 105, 23, 24, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 19</span>
      </button>
                                                            
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 2"
        style={calculateButtonPosition(531, 106, 22, 56, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 20</span>
      </button>
                                                                        
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 2"
        style={calculateButtonPosition(553, 106, 22, 56, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 21</span>
      </button>
                                                                                    
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 2"
        style={calculateButtonPosition(573, 106, 16, 56, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 22</span>
      </button>
                                                                                                
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 2"
        style={calculateButtonPosition(445, 137, 8, 25, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 23</span>
      </button>
                                                                                                            
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 2"
        style={calculateButtonPosition(453, 137, 37, 25, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 24</span>
      </button>
                                                                                                                        
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 2"
        style={calculateButtonPosition(445, 163, 46, 21, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 25</span>
      </button>
                                                                                                                                    
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 2"
        style={calculateButtonPosition(422, 140, 23, 44, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 26</span>
      </button>
                                                                                                                                                
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 2"
        style={calculateButtonPosition(399, 140, 23, 22, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 27</span>
      </button>
                                                                                                                                                            
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 2"
        style={calculateButtonPosition(399, 162, 23, 22, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 28</span>
      </button>
                                                                                                                                                                        
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 2"
        style={calculateButtonPosition(267, 168, 112, 15, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 29</span>
      </button>
                                                                                                                                                                                    
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 2"
        style={calculateButtonPosition(500, 172, 52, 10, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 30</span>
      </button>
                                                                                                                                                                                                
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 2"
        style={calculateButtonPosition(500, 182, 52, 22, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 31</span>
      </button>
                                                                                                                                                                                                            
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 2"
        style={calculateButtonPosition(500, 204, 52, 22, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 32</span>
      </button>
                                                                                                                                                                                                                        
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 2"
        style={calculateButtonPosition(500, 226, 52, 10, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 33</span>
      </button>
                                                                                                                                                                                                                                    
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 2"
        style={calculateButtonPosition(553, 172, 36, 64, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 34</span>
      </button>
                                                                                                                                                                                                                                                
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 2"
        style={calculateButtonPosition(377, 224, 114, 23, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 35</span>
      </button>
                                                                                                                                                                                                                                                            
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 2"
        style={calculateButtonPosition(235, 224, 135, 23, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 36</span>
      </button>
                                                                                                                                                                                                                                                                        
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 2"
        style={calculateButtonPosition(113, 224, 114, 23, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 37</span>
      </button>
                                                                                                                                                                                                                                                                                    
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 2"
        style={calculateButtonPosition(115, 256, 23, 40, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 38</span>
      </button>
                                                                                                                                                                                                                                                                                                
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 2"
        style={calculateButtonPosition(138, 256, 22, 40, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 39</span>
      </button>
                                                                                                                                                                                                                                                                                                            
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 2"
        style={calculateButtonPosition(160, 256, 22, 40, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 40</span>
      </button>
                                                                                                                                                                                                                                                                                                                        
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 2"
        style={calculateButtonPosition(182, 256, 22, 40, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 41</span>
      </button>
                                                                                                                                                                                                                                                                                                                                    
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 2"
        style={calculateButtonPosition(247, 256, 22, 40, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 42</span>
      </button>
                                                                                                                                                                                                                                                                                                                                                
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 2"
        style={calculateButtonPosition(269, 256, 22, 40, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 43</span>
      </button>
                                                                                                                                                                                                                                                                                                                                                            
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 2"
        style={calculateButtonPosition(291, 256, 22, 40, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 44</span>
      </button>
                                                                                                                                                                                                                                                                                                                                                                        
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 2"
        style={calculateButtonPosition(313, 256, 22, 40, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 45</span>
      </button>
                                                                                                                                                                                                                                                                                                                                                                                    
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 2"
        style={calculateButtonPosition(335, 256, 22, 40, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 46</span>
      </button>
                                                                                                                                                                                                                                                                                                                                                                                                
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 2"
        style={calculateButtonPosition(400, 256, 22, 40, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 47</span>
      </button>
                                                                                                                                                                                                                                                                                                                                                                                                            
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 2"
        style={calculateButtonPosition(422, 256, 22, 40, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 48</span>
      </button>
                                                                                                                                                                                                                                                                                                                                                                                                                        
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 2"
        style={calculateButtonPosition(444, 256, 22, 40, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 49</span>
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

export default FloorMinusOne;
