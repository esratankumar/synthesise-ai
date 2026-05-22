"use client";

import Sidebar from "@/components/Sidebar";
import ThemeToggle from "@/components/ThemeToggle";

import { useEffect, useState } from "react";

export default function ChatPage() {

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {

    const savedMessages =
      localStorage.getItem("chatMessages");

    if (savedMessages) {

      setMessages(JSON.parse(savedMessages));

    }

  }, []);

  const saveMessages = (
    updatedMessages: string[]
  ) => {

    setMessages(updatedMessages);

    localStorage.setItem(
      "chatMessages",
      JSON.stringify(updatedMessages)
    );

  };

  const sendMessage = () => {

    if (!message) return;

    const updatedMessages = [
      ...messages,
      message,
    ];

    saveMessages(updatedMessages);

    setMessage("");

  };

  const clearChat = () => {

    localStorage.removeItem("chatMessages");

    setMessages([]);

  };

  return (

    <main className="min-h-screen bg-black text-white flex">

      <Sidebar />
      <ThemeToggle />

      <div className="flex-1 p-10">

        <h1 className="text-6xl font-bold text-cyan-400 mb-6">
          AI Team Chat
        </h1>

        <p className="text-zinc-400 text-xl mb-10">
          Collaborate and brainstorm AI startup ideas.
        </p>

        <div className="bg-zinc-900 border border-cyan-500 rounded-3xl p-8 mb-10">

          <div className="space-y-4 mb-8 max-h-[400px] overflow-y-auto">

            {messages.map((msg, index) => (

              <div
                key={index}
                className="bg-black border border-cyan-500 rounded-2xl p-4"
              >

                <p className="text-zinc-200 text-lg">
                  {msg}
                </p>

              </div>

            ))}

          </div>

          <input
            type="text"
            placeholder="Type message..."
            value={message}
            onChange={(e) =>
              setMessage(e.target.value)
            }
            className="w-full bg-black border border-cyan-500 rounded-2xl px-6 py-4 text-white outline-none mb-6"
          />

          <div className="flex gap-4">

            <button
              onClick={sendMessage}
              className="bg-cyan-500 hover:bg-cyan-400 transition text-black font-bold px-8 py-4 rounded-2xl"
            >
              Send Message
            </button>

            <button
              onClick={clearChat}
              className="bg-red-500 hover:bg-red-400 transition text-black font-bold px-8 py-4 rounded-2xl"
            >
              Clear Chat
            </button>

          </div>

        </div>

      </div>

    </main>

  );

}
