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

  const handleRoomClick = (room: string) => {
    setSelectedRoom(room);
  };

  const closeModal = () => setSelectedRoom(null);
  const closeTeacher = () => setSelectedTeacher(null);


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

  return (
    <div className="flex flex-col items-center py-8">
      <h1 className="text-2xl font-bold mb-6">Floor Map</h1>

      <div className="flex flex-row w-full justify-center">
        {/* Elevator/floor selector on the left */}
        <div className="flex flex-col items-center mr-8">
          <div className="flex flex-col gap-2 border border-gray-300 rounded-full p-2 bg-gray-200" style={{ borderRadius: '9999px'}}>
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

          {/* Only show the map for Floor 1 for now */}
          {currentFloor === 'floor1' && (
            <div className="relative w-[600px] h-[400px]">
              {/* Floor SVG as background */}
              <img src="/Home.svg" alt="Floor Map" className="w-full h-full object-contain select-none pointer-events-none" draggable="false" />
              {/* Invisible clickable room buttons */}
              {/* Room 1 button: position (left/top), width, height */}
              <button
                className="absolute left-[50px] top-[50px] w-[200px] h-[100px] bg-transparent hover:bg-transparent rounded-lg border-2 border-transparent hover:border-blue-500 transition-all duration-200 cursor-pointer"
                onClick={() => handleRoomClick("Room 1")}
                aria-label="Room 1"
              />
              {/* Room 2 button: position (left/top), width, height */}
              <button
                className="absolute left-[300px] top-[200px] w-[200px] h-[100px] bg-transparent hover:bg-transparent rounded-lg border-2 border-transparent hover:border-orange-500 transition-all duration-200 cursor-pointer"
                onClick={() => handleRoomClick("Room 2")}
                aria-label="Room 2"
              />
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
                        return allTimes.map((time) => (
                          <tr key={time}>
                            <td className="px-4 py-2 border-b font-semibold">{time}</td>
                            {days.map((day) => {
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
                            })}
                          </tr>
                        ));
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
