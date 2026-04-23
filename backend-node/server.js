const express = require('express');
const mongoose = require('mongoose');
const socketIo = require('socket.io');
const redis = require('redis');

const app = express();
const server = require('http').createServer(app);
const io = socketIo(server);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/natureconnect', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Connect to Redis
const redisClient = redis.createClient();
redisClient.on('error', (err) => console.log('Redis Client Error', err));

// Basic route
app.get('/', (req, res) => {
  res.send('NatureConnect Backend');
});

// Socket.io for real-time chat
io.on('connection', (socket) => {
  console.log('User connected');
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});