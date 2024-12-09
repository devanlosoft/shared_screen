import { useNavigate } from "react-router-dom";

export default function NewSession() {
  const navigate = useNavigate();

  const createNewSession = async () => {
    try {
      const response = await fetch("http://localhost:4000/new-session");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      navigate(`/canvas?sessionId=${data.sessionId}`);
    } catch (error) {
      console.error("Failed to fetch:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        onClick={createNewSession}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Create New Session
      </button>
    </div>
  );
}