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
      className="fixed top-6 right-6 bg-cyan-500 hover:bg-cyan-400 text-black px-5 py-3 rounded-2xl font-bold z-50"
    >
      {darkMode ? "☀️ Light" : "🌙 Dark"}
    </button>

  );

}
