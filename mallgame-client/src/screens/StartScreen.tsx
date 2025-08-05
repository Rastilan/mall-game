import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function StartScreen() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-5xl mb-8">Welcome to MallGame</h1>
      <nav className="space-x-4">
        <Link className="btn" to="/character-select">Start Game</Link>
        <Link className="btn" to="/settings">Settings</Link>
        <Link className="btn" to="/lobby">Multiplayer Lobby</Link>
      </nav>
    </div>
  );
}
