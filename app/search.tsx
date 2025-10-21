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

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<React.ReactNode[]>([]);
  const [recommendations, setRecommendations] = useState<string[]>([]);

  // Search handler for rooms and teachers
  // Recommendation dropdown logic
  const getRecommendations = (input: string) => {
    const q = input.trim().toLowerCase();
    if (!q) return [];
    const recs: string[] = [];
    for (const [room, data] of Object.entries(roomSchedules)) {
      if (room.toLowerCase().includes(q)) recs.push(room);
      if (typeof data === "object" && "teachers" in data) {
        for (const teacher of data.teachers as Teacher[]) {
          if (teacher.name.toLowerCase().includes(q)) recs.push(teacher.name);
        }
      }
    }
    return recs;
  };

  // Update recommendations as user types
  React.useEffect(() => {
    setRecommendations(getRecommendations(query));
  }, [query]);

  const handleRecommendationClick = (rec: string) => {
    setQuery(rec);
    // Optionally auto-search
    setTimeout(() => {
      document.getElementById("search-submit")?.click();
    }, 0);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim().toLowerCase();
    if (!q) {
      setResults([]);
      return;
    }
    const res: React.ReactNode[] = [];
    for (const [room, data] of Object.entries(roomSchedules)) {
      if (room.toLowerCase().includes(q)) {
        // Room match: show schedule
        const schedule = data as Record<string, DaySchedule>;
        res.push(
          <div key={room} className="mb-6">
            <h2 className="text-lg font-bold mb-2">{room} Schedule</h2>
            <table className="min-w-full border border-gray-300 text-sm">
              <thead>
                <tr>
                  <th className="px-2 py-1 border-b">Time</th>
                  <th className="px-2 py-1 border-b">Monday</th>
                  <th className="px-2 py-1 border-b">Tuesday</th>
                  <th className="px-2 py-1 border-b">Wednesday</th>
                  <th className="px-2 py-1 border-b">Thursday</th>
                  <th className="px-2 py-1 border-b">Friday</th>
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
                  return allTimes.map((time) => (
                    <tr key={time}>
                      <td className="px-2 py-1 border-b font-semibold">{time}</td>
                      {days.map((day) => {
                        const scheduled = schedule?.[day]?.find((s) => s.time === time);
                        return (
                          <td className="px-2 py-1 border-b text-center" key={day}>
                            {scheduled ? (
                              <div className="flex flex-col items-center justify-center text-center">
                                <span>{scheduled.subject}</span>
                                {scheduled.teacher && (
                                  <div className="text-xs text-gray-400 mt-1">{scheduled.teacher}</div>
                                )}
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
        );
      }
      // Search teachers in lounges
      if (typeof data === "object" && "teachers" in data) {
        for (const teacher of data.teachers as Teacher[]) {
          if (teacher.name.toLowerCase().includes(q)) {
            res.push(
              <div key={room + teacher.name} className="mb-6">
                <h2 className="text-lg font-bold mb-2">{teacher.name}'s Schedule</h2>
                <table className="min-w-full border border-gray-300 text-sm">
                  <thead>
                    <tr>
                      <th className="px-2 py-1 border-b">Time</th>
                      <th className="px-2 py-1 border-b">Monday</th>
                      <th className="px-2 py-1 border-b">Tuesday</th>
                      <th className="px-2 py-1 border-b">Wednesday</th>
                      <th className="px-2 py-1 border-b">Thursday</th>
                      <th className="px-2 py-1 border-b">Friday</th>
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
                      return allTimes.map((time) => (
                        <tr key={time}>
                          <td className="px-2 py-1 border-b font-semibold">{time}</td>
                          {days.map((day) => {
                            const scheduled = teacher.schedule?.[day]?.find((s) => s.time === time);
                            return (
                              <td className="px-2 py-1 border-b text-center" key={day}>
                                {scheduled ? (
                                  <div className="flex flex-col items-center justify-center text-center">
                                    <span>{scheduled.subject}</span>
                                    {scheduled.room && (
                                      <div className="text-xs text-gray-400 mt-1">{scheduled.room}</div>
                                    )}
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
            );
          }
        }
      }
    }
    setResults(res.length ? res : [<div key="nores" className="text-gray-500">No results found.</div>]);
  };

  return (
    <div className="flex flex-col items-center py-8">
      <h1 className="text-2xl font-bold mb-6">Search</h1>
      <form onSubmit={handleSearch} className="flex flex-col items-center gap-2 mb-4 relative w-full max-w-md">
  <div className="w-full relative" style={{zIndex: 50}}>
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search rooms, teachers..."
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
            autoComplete="off"
          />
          {recommendations.length > 0 && (
            <ul
              className="absolute left-0 w-full bg-white border border-gray-300 rounded shadow-lg mt-1 max-h-56 overflow-y-auto"
              style={{zIndex: 1000}}
            >
              {recommendations.map((rec) => (
                <li
                  key={rec}
                  className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                  onClick={() => handleRecommendationClick(rec)}
                  tabIndex={0}
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ') handleRecommendationClick(rec);
                  }}
                  role="option"
                  aria-selected="false"
                >
                  {rec}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button id="search-submit" type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200">
          Search
        </button>
      </form>
      <div className="w-full max-w-2xl">
        {results.map((result) => result)}
      </div>
    </div>
  );
};

export default Search;
