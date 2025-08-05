import { Routes, Route } from "react-router-dom";
import StartScreen from "./screens/StartScreen";
import SettingsScreen from "./screens/SettingsScreen";
import CharacterSelectScreen from "./screens/CharacterSelectScreen";
import MultiplayerLobby from "./screens/MultiplayerLobbyScreen";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<StartScreen />} />
      <Route path="/settings" element={<SettingsScreen />} />
      <Route path="/character-select" element={<CharacterSelectScreen />} />
      <Route path="/lobby" element={<MultiplayerLobby />} />
    </Routes>
  );
}
