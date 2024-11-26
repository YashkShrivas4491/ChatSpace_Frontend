import { useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiSend } from "react-icons/fi";
import { FaUserCircle, FaDoorOpen } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";

function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [room, setRoom] = useState("");
  const [socketID, setSocketID] = useState("");
  const [roomName, setRoomName] = useState("");
  const [username, setUsername] = useState("");

  const socket = useMemo(() => io("https://chatspace-backend-cwyt.onrender.com"),[]);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("message", { message, room });
    setMessage("");
  };

  const joinRoomHandler = (e) => {
    e.preventDefault();
    if (roomName && username) {
      socket.emit("join-room", roomName, username);
      setRoom(roomName);
      setRoomName("");
    } else {
      toast.error("Room name and username are required");
    }
  };

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Socket connected:", socket.id);
      setSocketID(socket.id);
    });

    socket.on("disconnect", () => {
      console.log("Socket disconnected");
      setSocketID("");
    });

    socket.on("receive-message", (data) => {
      setMessages((messages) => [...messages, data]);
    });

    socket.on("userJoined", (message) => {
      toast(message);
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  return (
    <div className="container mx-auto p-4">
      <ToastContainer />
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto bg-gradient-to-r from-gray-100 to-violet-200">
        <h1 className="text-2xl font-bold text-center mb-4">
          Chat Application 💬
        </h1>
        <p className="text-center mb-4 text-gray-600">Socket ID: {socketID}</p>
        {/* Room Join Form */}
        <div className="mb-4 border-b pb-4">
          <form onSubmit={joinRoomHandler} className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <FaUserCircle className="text-gray-400" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="p-2 border rounded w-full"
              />
            </div>
            <div className="flex items-center space-x-2">
              <FaDoorOpen className="text-gray-400" />
              <input
                type="text"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
                placeholder="Room Name"
                className="p-2 border rounded w-full"
              />
            </div>
            <button
              type="submit"
              className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center justify-center space-x-2"
            >
              <span>Join</span>
            </button>
          </form>
        </div>
        {/* Message Form */}
        <div className="border-b pb-4">
          <form onSubmit={handleSubmit} className="flex space-x-2">
            <div className="flex items-center flex-1 space-x-2">
              <AiOutlineMessage className="text-gray-400" />
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                className="p-2 border rounded w-full"
              />
            </div>
            <button
              type="submit"
              className="p-2 bg-green-500 text-white rounded hover:bg-green-600 flex items-center space-x-1"
            >
              <span>Send</span>
              <FiSend />
            </button>
          </form>
        </div>
        {/* Message Display */}
        <div id="message-box" className="mt-4 max-h-72 overflow-y-auto">
          <div className="space-y-2">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`p-2 rounded ${
                  i % 2 === 0 ? "bg-blue-100" : "bg-pink-100"
                }`}
              >
                {m}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
