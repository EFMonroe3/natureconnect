# NatureConnect

A social geolocation app for outdoor nature lovers to connect over similar hobbies and interests.

## Features
- Geolocation tracking
- Map view with Google Maps integration
- Real-time chat
- User profiles with interests
- Photo sharing
- Local trails and events

## Tech Stack
- Mobile: React Native with Expo
- Backend: Node.js/Express, Golang
- Databases: MongoDB, Redis

## Setup

### Prerequisites
- Node.js
- Go
- MongoDB
- Redis

### Mobile App
1. cd NatureConnect
2. npm install
3. npx expo start --web (for web testing) or npx expo start (for mobile)

### Backend
1. cd backend-node
2. npm install
3. npm start

1. cd backend-go
2. go run main.go

## Usage
- Map tab: View your location and nearby users
- Connect tab: Find and chat with matches
- Profile tab: Edit your profile and interests

## Troubleshooting
- Ensure MongoDB and Redis are running
- For mobile, install Expo Go app on device
- Check permissions for location