"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end">
      {/* Chat Button */}
     

      {/* Chat Popup */}
      {isOpen && (
        <motion.div
          className="w-80 h-96 bg-white shadow-xl rounded-lg overflow-hidden flex flex-col border border-gray-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Header */}
          <div className="flex justify-between items-center bg-blue-600 text-white p-3">
            <h3 className="text-lg font-semibold">💬 Chat with Prof. Zainab</h3>
            <FaTimes className="cursor-pointer hover:opacity-70 transition" onClick={() => setIsOpen(false)} />
          </div>

          {/* Embedded Chat */}
          <iframe
            src="https://prof-zainab-agent.vercel.app/"
            className="w-full h-full border-none"
          ></iframe>

          {/* Input Field */}
          <div className="flex items-center p-3 border-t">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 px-3 py-2 border rounded-lg focus:outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="text-blue-600 p-2 hover:text-blue-800 transition">
              <FaPaperPlane size={20} />
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Chatbot;
