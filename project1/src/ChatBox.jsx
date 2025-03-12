import React, { useState } from "react";
import { FaCommentDots } from "react-icons/fa";

const ChatConsultation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");
    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: "Thank you for your message!" }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end">
      {isOpen && (
        <div className="w-80 h-96 bg-white shadow-lg rounded-lg flex flex-col p-4 border border-green-500">
          <div className="flex justify-between items-center border-b pb-2 mb-2">
            <h3 className="text-green-600 font-bold">Chat Consultation</h3>
            <button onClick={toggleChat} className="text-green-600 font-bold">&times;</button>
          </div>
          <div className="flex-1 overflow-y-auto space-y-2">
            {messages.map((msg, index) => (
              <div key={index} className={`p-2 rounded-lg ${msg.sender === "user" ? "bg-green-500 text-white self-end" : "bg-gray-200 text-gray-800 self-start"}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="border-t pt-2 mt-2 flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-2 border border-green-500 rounded-l-lg focus:outline-none"
              placeholder="Type a message..."
            />
            <button onClick={sendMessage} className="bg-green-500 text-white p-2 rounded-r-lg">Send</button>
          </div>
        </div>
      )}
      <button
        onClick={toggleChat}
        className="bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
      >
        <FaCommentDots size={24} />
      </button>
    </div>
  );
};

export default ChatConsultation;
