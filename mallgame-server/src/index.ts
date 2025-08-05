import express from "express";
import http from "http";
import cors from "cors";
import mongoose from "mongoose";
import { Server } from "socket.io";

import authRoutes from "./routes/auth";
import lobbyRoutes from "./routes/lobby";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

app.use(cors());
app.use(express.json());

// MongoDB connection (replace with your connection string)
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/mallgame";
mongoose.connect(MONGO_URI).then(() => {
  console.log("MongoDB connected");
}).catch(err => {
  console.error("MongoDB connection error:", err);
});

// REST routes
app.use("/api/auth", authRoutes);
app.use("/api/lobby", lobbyRoutes);

// Socket.IO for lobby communication
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("joinLobby", (lobbyId) => {
    socket.join(lobbyId);
    console.log(`${socket.id} joined lobby ${lobbyId}`);
  });

  socket.on("leaveLobby", (lobbyId) => {
    socket.leave(lobbyId);
    console.log(`${socket.id} left lobby ${lobbyId}`);
  });

  socket.on("lobbyMessage", ({ lobbyId, message }) => {
    io.to(lobbyId).emit("lobbyMessage", { senderId: socket.id, message });
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
