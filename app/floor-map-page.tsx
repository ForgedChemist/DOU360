"use client";
import React, { useState } from "react";
import roomSchedulesData from "./room-schedules.json";

type DaySchedule = { time: string; subject: string; teacher?: string; room?: string }[];
type Teacher = { name: string; schedule: Record<string, DaySchedule> };
type RoomSchedules = {
  [room: string]:
    | Record<string, DaySchedule>
    | { teachers: Teacher[] };
};
const roomSchedules = roomSchedulesData as RoomSchedules;

// Example SVG with two rooms as buttons
const FloorMap = () => {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
  const [zoomedRoom, setZoomedRoom] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1.2); // Set initial zoom level to the max zoom-out limit
  const [zoomActions, setZoomActions] = useState(0); // Track total zoom actions

  const handleRoomZoom = (room: string) => {
    setZoomedRoom(room);
  };

  const closeModal = () => setSelectedRoom(null);
  const closeTeacher = () => setSelectedTeacher(null);
  const handleZoomOut = () => {
    setZoomLevel((prev) => {
      const newZoom = Math.max(prev - 0.1, 1.2); // Limit zoom out to a minimum of 1.2x
      if (newZoom !== prev) setZoomActions((actions) => actions - 1);
      return newZoom;
    });
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => {
      const newZoom = Math.min(prev + 0.1, 2); // Limit zoom in to 2x
      if (newZoom !== prev) setZoomActions((actions) => actions + 1);
      return newZoom;
    });
  };

  const shouldSpawnFloorsLayout = () => {
    const maxZoomOutLimit = 1.2; // Minimum zoom level
    const spawnThreshold = 3; // Threshold for zoom actions
    return zoomLevel <= maxZoomOutLimit && zoomActions <= -spawnThreshold;
  };

  // Floor selector (elevator) logic
  const FLOORS = [
    { label: "1", key: "floor1" },
    { label: "2", key: "floor2" },
    { label: "3", key: "floor3" },
  ];
  const [currentFloor, setCurrentFloor] = useState<string>(FLOORS[0].key);

  const [search, setSearch] = useState("");
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // You can implement search logic here if needed
  };

  const renderScheduleCell = (schedule: Record<string, DaySchedule> | undefined, time: string, day: string) => {
    const scheduled = schedule?.[day]?.find((s) => s.time === time);
    let extraInfo = null;
    if (scheduled) {
      if (selectedRoom && "teachers" in (roomSchedules[selectedRoom] || {}) && selectedTeacher && scheduled.room) {
        extraInfo = <div className="text-xs text-gray-400 mt-1">{scheduled.room}</div>;
      } else if (scheduled.teacher) {
        extraInfo = <div className="text-xs text-gray-400 mt-1">{scheduled.teacher}</div>;
      }
    }
    return (
      <td className="px-4 py-2 border-b" key={day}>
        {scheduled ? (
          <div className="flex flex-col items-center justify-center text-center">
            <span>{scheduled.subject}</span>
            {extraInfo}
          </div>
        ) : ""}
      </td>
    );
  };

  const renderScheduleRows = (schedule: Record<string, DaySchedule> | undefined, allTimes: string[], days: string[]) => {
    return allTimes.map((time) => (
      <tr key={time}>
        <td className="px-4 py-2 border-b font-semibold">{time}</td>
        {days.map((day) => renderScheduleCell(schedule, time, day))}
      </tr>
    ));
  };

  const handleRoomClick = (room: string) => {
    setSelectedRoom(room); // Open the modal to show the schedule for the clicked room
  };

  const calculateButtonPosition = (baseLeft: number, baseTop: number, baseWidth: number, baseHeight: number, zoomLevel: number) => {
    const mapCenterOffsetX = 300; // Adjust this value to center the map horizontally
    const mapCenterOffsetY = 200; // Adjust this value to center the map vertically

    return {
      left: `${(baseLeft * zoomLevel) - mapCenterOffsetX * (zoomLevel - 1)}px`, // Adjust left position with zoom and center offset
      top: `${(baseTop * zoomLevel) - mapCenterOffsetY * (zoomLevel - 1)}px`,  // Adjust top position with zoom and center offset
      width: `${baseWidth * zoomLevel}px`, // Adjust width based on zoom level
      height: `${baseHeight * zoomLevel}px`, // Adjust height based on zoom level
    };
  };

  return (
    <div className="flex flex-col items-center py-8">
      <h1 className="text-2xl font-bold mb-6">Floor Map</h1>

      <div className="flex flex-row w-full justify-center">
        {/* Elevator/floor selector on the left */}
        <div className="flex flex-col items-center mr-8">
          <div className="flex flex-col gap-2 border border-gray-300 rounded-full p-2">
            {FLOORS.map(floor => (
              <button
                key={floor.key}
                className={`w-12 h-12 flex items-center justify-center rounded-full border font-medium text-lg transition-colors duration-200 ${currentFloor === floor.key ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-100'}`}
                onClick={() => setCurrentFloor(floor.key)}
              >
                {floor.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main content (search, map, etc) */}
        <div className="flex flex-col items-center">
          <div className="mb-2 text-lg font-semibold text-blue-700">Floor {FLOORS.find(f => f.key === currentFloor)?.label}</div>

          {/* Search bar above the map */}
          <form onSubmit={handleSearch} className="flex gap-2 mb-6">
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search rooms, teachers..."
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200">
              Search
            </button>
          </form>

          {/* Overall floor view with zoom controls */}
          {currentFloor === 'floor1' && (
            <div className="relative w-[600px] h-[400px]">
              <div className="absolute top-2 right-2 flex gap-2">
                <button
                  className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                  onClick={handleZoomIn}
                >
                  +
                </button>
                <button
                  className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                  onClick={handleZoomOut}
                >
                  -
                </button>
              </div>
              <img
                src="/Floor Layout.svg"
                alt="Floor Map"
                className="w-full h-full object-contain select-none pointer-events-none"
                draggable="false"
                style={{ transform: `scale(${zoomLevel})` }}
              />
              {shouldSpawnFloorsLayout() && (
                <img
                  src="/Floors Layout.svg"
                  alt="Floors Layout"
                  className="absolute inset-0 w-full h-full object-contain select-none pointer-events-none"
                  draggable="false"
                  style={{ transform: `scale(${zoomLevel})` }}
                />
              )}
              {/* Invisible clickable room buttons */}
              <button
                className="absolute bg-transparent hover:bg-transparent rounded-lg border-2 border-transparent hover:border-blue-500 transition-all duration-200 cursor-pointer"
                onClick={() => handleRoomClick("Room 1")}
                aria-label="Room 1"
                style={calculateButtonPosition(204, 175, 60, 59, zoomLevel)}
              />
              <button
                className="absolute bg-transparent hover:bg-transparent rounded-lg border-2 border-transparent hover:border-orange-500 transition-all duration-200 cursor-pointer"
                onClick={() => handleRoomClick("Room 2")}
                aria-label="Room 2"
                style={calculateButtonPosition(107, 167, 98, 67, zoomLevel)}
              />
            </div>
          )}

          {/* Display Floors Layout when zoomed into a room */}
          {zoomedRoom && (
            <div className="relative w-[600px] h-[400px]">
              <img
                src="/Floors Layout.svg"
                alt={`Room ${zoomedRoom} Layout`}
                className="w-full h-full object-contain select-none pointer-events-none"
                draggable="false"
                style={{ transform: `scale(${zoomLevel})` }} // Adjust Floors Layout resolution dynamically
              />
              <button
                className="absolute top-2 left-2 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                onClick={handleZoomOut}
              >
                Back
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modal for schedule */}
      {selectedRoom && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 min-w-[300px] relative">
            <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={() => { closeModal(); closeTeacher(); }}>&times;</button>
            {selectedRoom && "teachers" in (roomSchedules[selectedRoom] || {}) && !selectedTeacher ? (
              <>
                <h2 className="text-xl font-bold mb-4">Teachers Lounge</h2>
                <ul className="space-y-2">
                  {((roomSchedules[selectedRoom] as { teachers: Teacher[] }).teachers).map((teacher) => (
                    <li key={teacher.name}>
                      <button
                        className="px-4 py-2 bg-blue-100 rounded hover:bg-blue-300 transition-colors duration-150 w-full text-left"
                        onClick={() => setSelectedTeacher(teacher)}
                      >
                        {teacher.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <>
                <h2 className="text-xl font-bold mb-4">
                  {selectedRoom === "Room 2" && selectedTeacher
                    ? `${selectedTeacher.name}'s Schedule`
                    : `${selectedRoom} Schedule`}
                </h2>
                {/* Weekday calendar grid */}
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-300">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 border-b">Time</th>
                        <th className="px-4 py-2 border-b">Monday</th>
                        <th className="px-4 py-2 border-b">Tuesday</th>
                        <th className="px-4 py-2 border-b">Wednesday</th>
                        <th className="px-4 py-2 border-b">Thursday</th>
                        <th className="px-4 py-2 border-b">Friday</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(() => {
                        const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
                        const allTimes = [
                          "09:00 - 10:00",
                          "10:15 - 11:15",
                          "11:30 - 12:30",
                          "13:00 - 14:00",
                          "14:15 - 15:15",
                          "15:30 - 16:30"
                        ];
                        let schedule: Record<string, DaySchedule> | undefined;
                        if (selectedRoom === "Room 2" && selectedTeacher) {
                          schedule = selectedTeacher.schedule;
                        } else if (selectedRoom && typeof roomSchedules[selectedRoom] === "object" && !Array.isArray(roomSchedules[selectedRoom]) && !("teachers" in (roomSchedules[selectedRoom] || {}))) {
                          schedule = roomSchedules[selectedRoom] as Record<string, DaySchedule>;
                        }
                        return renderScheduleRows(schedule, allTimes, days);
                      })()}
                    </tbody>
                  </table>
                </div>
                {selectedRoom === "Room 2" && selectedTeacher && (
                  <button className="mt-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300" onClick={closeTeacher}>
                    Back to Teachers
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FloorMap;
