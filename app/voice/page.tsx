"use client";

import Sidebar from "@/components/Sidebar";
import ThemeToggle from "@/components/ThemeToggle";

import { useState } from "react";

export default function VoicePage() {

  const [listening, setListening] =
    useState(false);

  const [command, setCommand] =
    useState("");

  const startListening = () => {

    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {

      alert(
        "Speech Recognition is not supported in this browser."
      );

      return;

    }

    const recognition =
      new SpeechRecognition();

    recognition.lang = "en-US";

    recognition.start();

    setListening(true);

    recognition.onresult = (
      event: any
    ) => {

      const transcript =
        event.results[0][0].transcript;

      setCommand(transcript);

      setListening(false);

    };

    recognition.onerror = () => {

      setListening(false);

    };

  };

  return (

    <main className="min-h-screen bg-black text-white flex">

      <Sidebar />
      <ThemeToggle />

      <div className="flex-1 p-10 flex flex-col items-center justify-center">

        <h1 className="text-6xl font-bold text-cyan-400 mb-8 text-center">
          AI Voice Command System
        </h1>

        <p className="text-zinc-400 text-xl mb-12 text-center max-w-3xl">
          Speak directly with SYNTHESISE AI and trigger intelligent workflows using voice commands.
        </p>

        <button
          onClick={startListening}
          className={`px-12 py-6 rounded-full text-2xl font-bold transition-all duration-300 ${
            listening
              ? "bg-red-500 animate-pulse"
              : "bg-cyan-500 hover:bg-cyan-400 text-black"
          }`}
        >
          {listening
            ? "Listening..."
            : "Start Voice Command"}
        </button>

        <div className="mt-16 bg-zinc-900 border border-cyan-500 rounded-3xl p-10 w-full max-w-4xl">

          <h2 className="text-4xl font-bold text-cyan-400 mb-6">
            AI Detected Command
          </h2>

          <p className="text-zinc-300 text-2xl leading-relaxed">
            {command || "Waiting for voice input..."}
          </p>

        </div>

      </div>

    </main>

  );

}
