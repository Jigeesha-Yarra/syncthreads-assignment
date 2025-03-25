# SyncThreads Assignment: React Map Dashboard

## 📌 Overview
A React application demonstrating:
- **OpenStreetMap integration** (via `react-leaflet`)
- **JWT-based authentication flow**
- **Protected routes** (Dashboard/Map view for logged-in users only)
- **Interactive map** with zoom controls and location markers

## ✨ Features
| Feature | Implementation |
|---------|---------------|
| **Login System** | Mock JWT validation with `localStorage` persistence |
| **Dashboard** | Card-based UI showing locations (Mumbai/Delhi/Bangalore) |
| **Map View** | Clicking a card opens OpenStreetMap with the location |
| **Authentication** | Protected routes show "User not logged in" if unauthorized |
| **Responsive Design** | Works on mobile/desktop |

## 🛠️ Tech Stack
- **Frontend**: React (Class Components), react-router-dom v6
- **Map Library**: react-leaflet (OpenStreetMap)
- **Styling**: Pure CSS (no frameworks)

## 🚀 Setup Guide
1. **Install dependencies**:
   ```bash
   npm install react-leaflet leaflet react-router-dom

## Login Credentials
- **Username**: Syncthreads
- **Password**: Syncthreads@2019

## 📂 Project Structure
src/
├── components/
│   ├── Login/      # Login form with validation
│   ├── Dashboard/  # Location cards grid
│   ├── Card/       # Individual location card
│   └── MapView/    # Interactive OpenStreetMap
├── api/            # Mock API handlers
└── utils/          # Auth helpers
