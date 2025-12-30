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


      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 1"
        style={calculateButtonPosition(0, 129, 27, 27, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 1</span>
      </button>

      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 1"
        style={calculateButtonPosition(27, 127, 25, 29, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 2</span>
      </button>

      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 1"
        style={calculateButtonPosition(52, 127, 25, 29, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 3</span>
      </button>

      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 1"
        style={calculateButtonPosition(7, 166, 21, 35, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 4</span>
      </button>
      
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 1"
        style={calculateButtonPosition(7, 201, 21, 35, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 5</span>
      </button>  

      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 1"
        style={calculateButtonPosition(28, 166, 24, 35, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 6</span>
      </button>
      
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 1"
        style={calculateButtonPosition(52, 166, 23, 35, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 7</span>
      </button>
            
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 1"
        style={calculateButtonPosition(75, 166, 23, 35, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 8</span>
      </button>   

      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 1"
        style={calculateButtonPosition(28, 201, 24, 35, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 9</span>
      </button>

      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 1"
        style={calculateButtonPosition(52, 201, 23, 35, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 10</span>
      </button>
      
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 1"
        style={calculateButtonPosition(75, 201, 23, 35, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 11</span>
      </button>
            
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 1"
        style={calculateButtonPosition(1, 247, 27, 26, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 12</span>
      </button>
                  
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 1"
        style={calculateButtonPosition(28, 247, 24, 26, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 13</span>
      </button>
                        
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 1"
        style={calculateButtonPosition(52, 247, 23, 26, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 14</span>
      </button>
                              
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 1"
        style={calculateButtonPosition(75, 247, 17, 10, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 14</span>
      </button>
                                    
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 1"
        style={calculateButtonPosition(97, 247, 24, 25, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 15</span>
      </button>
                                          
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 1"
        style={calculateButtonPosition(97, 129, 37, 27, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 16</span>
      </button>
                                                
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 1"
        style={calculateButtonPosition(122, 223, 24, 50, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 17</span>
      </button>
                                                      
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 1"
        style={calculateButtonPosition(146, 223, 24, 50, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 18</span>
      </button>
                                                            
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 1"
        style={calculateButtonPosition(170, 223, 24, 50, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 19</span>
      </button>
                                                                  
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 1"
        style={calculateButtonPosition(194, 223, 22, 50, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 20</span>
      </button>
                                                            
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 1"
        style={calculateButtonPosition(146, 129, 24, 50, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 21</span>
      </button>
                                                            
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 1"
        style={calculateButtonPosition(170, 129, 24, 50, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 22</span>
      </button>
                                                                  
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 1"
        style={calculateButtonPosition(194, 129, 22, 50, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 23</span>
      </button>
                                                                        
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 1"
        style={calculateButtonPosition(226, 160, 14, 20, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 24</span>
      </button>
                                                                              
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 1"
        style={calculateButtonPosition(240, 129, 25, 27, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 25</span>
      </button>
                                                                                    
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 1"
        style={calculateButtonPosition(240, 156, 25, 23, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 26</span>
      </button>
                                                                                          
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 1"
        style={calculateButtonPosition(222, 223, 20, 33, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 27</span>
      </button>
                                                                                                
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 1"
        style={calculateButtonPosition(242, 223, 24, 25, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 28</span>
      </button>
                                                                                                      
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 1"
        style={calculateButtonPosition(502, 166, 22, 35, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 29</span>
      </button>
                                                                                                            
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 1"
        style={calculateButtonPosition(525, 166, 23, 35, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 30</span>
      </button>
                                                                                                                  
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 1"
        style={calculateButtonPosition(548, 166, 24, 35, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 31</span>
      </button>
                                                                                                                        
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 1"
        style={calculateButtonPosition(572, 166, 20, 35, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 32</span>
      </button>
                                                                                                                              
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 1"
        style={calculateButtonPosition(502, 202, 22, 35, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 33</span>
      </button>
                                                                                                                                    
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 1"
        style={calculateButtonPosition(524, 202, 24, 35, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 34</span>
      </button>
                                                                                                                                          
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 1"
        style={calculateButtonPosition(548, 202, 24, 35, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 35</span>
      </button>
                                                                                                                                                
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 1"
        style={calculateButtonPosition(572, 202, 20, 35, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 36</span>
      </button>
                                                                                                                                                      
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 1"
        style={calculateButtonPosition(508, 147, 17, 9, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 37</span>
      </button>
                                                                                                                                                            
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 1"
        style={calculateButtonPosition(526, 128, 22, 28, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 38</span>
      </button>
                                                                                                                                                                  
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 1"
        style={calculateButtonPosition(548, 128, 24, 28, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 39</span>
      </button>
                                                                                                                                                                        
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 1"
        style={calculateButtonPosition(572, 128, 24, 28, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 40</span>
      </button>
                                                                                                                                                            
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 1"
        style={calculateButtonPosition(508, 246, 17, 9, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 41</span>
      </button>
                                                                                                                                                                  
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 1"
        style={calculateButtonPosition(525, 246, 22, 26, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 42</span>
      </button>
                                                                                                                                                                  
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 1"
        style={calculateButtonPosition(547, 246, 24, 26, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 43</span>
      </button>
                                                                                                                                                                        
      <button
        className="absolute bg-transparent hover:bg-white border-2 border-transparent hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center group"
        onClick={() => handleRoomClickWithDragCheck("Room 1")}
        aria-label="Room 1"
        style={calculateButtonPosition(571, 246, 25, 26, zoomLevel)}
      >
        <span className="opacity-0 group-hover:opacity-100 text-black text-sm font-medium transition-opacity duration-200">Room 44</span>
      </button>
    </div>
  );
};

export default FloorZero;
