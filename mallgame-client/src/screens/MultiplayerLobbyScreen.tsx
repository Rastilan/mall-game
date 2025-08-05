import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function MultiplayerLobbyScreen() {
  const [lobbyId, setLobbyId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function createLobby() {
    setLoading(true);
    setError(null);
    setLobbyId(null);
    try {
      const response = await fetch("/api/lobbies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) throw new Error("Failed to create lobby");
      const data = await response.json();
      setLobbyId(data.lobbyId);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-600 text-white">
      <h2 className="text-3xl mb-4">Multiplayer Lobby</h2>
      <p>Join or create multiplayer games here...</p>

      <button
        onClick={createLobby}
        disabled={loading}
        className="btn mt-4"
      >
        {loading ? "Creating Lobby..." : "Create Lobby"}
      </button>

      {error && <p className="mt-4 text-red-400">{error}</p>}

      {lobbyId && (
        <p className="mt-4 text-green-400">
          Lobby created! ID: <code>{lobbyId}</code>
        </p>
      )}

      <Link className="mt-6 btn" to="/">
        Back to Start
      </Link>
    </div>
  );
}
