import { Link } from "react-router-dom";

export default function SettingsScreen() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-800 text-white">
      <h2 className="text-3xl mb-4">Settings</h2>
      <p>Settings will go here...</p>
      <Link className="mt-6 btn" to="/">Back to Start</Link>
    </div>
  );
}
