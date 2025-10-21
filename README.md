# Dou360 Floor Map App

A modern Next.js application for interactive campus floor maps, room schedules, and teacher lounge management.

## Features
- Responsive navbar with animated logo and search
- Interactive floor map with invisible clickable rooms
- Modal popups for room and teacher schedules
- Multi-floor support with elevator selector
- Search bar for rooms and teachers
- Data-driven schedules via JSON
- Styled with Tailwind CSS

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation
```bash
npm install
```

### Running the App
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure
- `app/` — Next.js app directory
- `app/Navbar.tsx` — Responsive navbar component
- `app/floor-map-page.tsx` — Main floor map page
- `app/room-schedules.json` — Room and teacher schedule data
- `public/` — Static assets (SVGs, images)

## Customization
- Add more floors by editing `FLOORS` in `floor-map-page.tsx`
- Update room/teacher schedules in `room-schedules.json`
- Adjust styles via Tailwind classes

## License
MIT
