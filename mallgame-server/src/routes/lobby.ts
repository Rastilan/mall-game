import { Router } from "express";
import { v4 as uuidv4 } from "uuid";

const router = Router();

interface Lobby {
  id: string;
  players: string[]; // you can add more lobby data here
}

const lobbies = new Map<string, Lobby>();

// POST /api/lobbies - create a new lobby
router.post("/", (req, res) => {
  const id = uuidv4();
  const newLobby: Lobby = {
    id,
    players: [],
  };
  lobbies.set(id, newLobby);

  res.status(201).json({ lobbyId: id });
});

export default router;
