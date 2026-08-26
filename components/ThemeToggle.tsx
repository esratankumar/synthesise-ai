"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }

    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-5 right-4 md:bottom-6 md:right-6 bg-cyan-500 hover:bg-cyan-400 text-black px-3 py-2 md:px-5 md:py-3 rounded-xl md:rounded-2xl font-bold text-sm md:text-base z-50"
    >
      {darkMode ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}
