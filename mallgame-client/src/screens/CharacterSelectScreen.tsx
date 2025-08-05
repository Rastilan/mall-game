import { useState } from "react";
import { useNavigate } from "react-router-dom";

const characters = [
  {
    id: "knight",
    name: "Dark Knight",
    description: "A heavily armored warrior with immense strength.",
    image: "https://via.placeholder.com/100?text=Knight", // Replace later
  },
  {
    id: "mage",
    name: "Arcane Mage",
    description: "A master of elemental magic and arcane knowledge.",
    image: "https://via.placeholder.com/100?text=Mage",
  },
  {
    id: "archer",
    name: "Forest Archer",
    description: "Swift and deadly from a distance with pinpoint accuracy.",
    image: "https://via.placeholder.com/100?text=Archer",
  },
];

export default function CharacterSelectScreen() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleConfirm = () => {
    if (selectedId) {
      console.log("Character selected:", selectedId);
      navigate("/lobby"); // or "/game" when implemented
    }
  };

  return (
    <div className="h-screen w-full bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <h2 className="text-4xl mb-6">Select Your Character</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 w-full max-w-4xl">
        {characters.map((char) => (
          <div
            key={char.id}
            onClick={() => setSelectedId(char.id)}
            className={`cursor-pointer p-4 rounded-lg border-2 transition-all duration-200 ${
              selectedId === char.id ? "border-blue-500 bg-blue-800" : "border-gray-600"
            }`}
          >
            <img src={char.image} alt={char.name} className="mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2 text-center">{char.name}</h3>
            <p className="text-sm text-gray-300 text-center">{char.description}</p>
          </div>
        ))}
      </div>

      <button
        onClick={handleConfirm}
        disabled={!selectedId}
        className={`px-6 py-3 rounded text-white font-semibold transition ${
          selectedId ? "bg-green-600 hover:bg-green-700" : "bg-gray-600 cursor-not-allowed"
        }`}
      >
        Confirm Selection
      </button>
    </div>
  );
}
