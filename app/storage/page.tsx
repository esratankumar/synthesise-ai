"use client";

import Sidebar from "@/components/Sidebar";
import ThemeToggle from "@/components/ThemeToggle";

import { useEffect, useState } from "react";

export default function StoragePage() {

  const [files, setFiles] = useState<string[]>([]);

  useEffect(() => {

    const savedFiles =
      localStorage.getItem("aiFiles");

    if (savedFiles) {

      setFiles(JSON.parse(savedFiles));

    }

  }, []);

  const saveFiles = (updatedFiles: string[]) => {

    setFiles(updatedFiles);

    localStorage.setItem(
      "aiFiles",
      JSON.stringify(updatedFiles)
    );

  };

  const uploadFile = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {

    const selectedFile = event.target.files?.[0];

    if (!selectedFile) return;

    const updatedFiles = [
      ...files,
      selectedFile.name,
    ];

    saveFiles(updatedFiles);

  };

  const deleteFile = (index: number) => {

    const updatedFiles =
      files.filter((_, i) => i !== index);

    saveFiles(updatedFiles);

  };

  return (

    <main className="min-h-screen bg-black text-white flex">

      <Sidebar />
      <ThemeToggle />

      <div className="flex-1 p-10">

        <h1 className="text-6xl font-bold text-cyan-400 mb-6">
          AI File Storage
        </h1>

        <p className="text-zinc-400 text-xl mb-10">
          Store and manage your AI startup files.
        </p>

        <div className="bg-zinc-900 border border-cyan-500 rounded-3xl p-8 mb-10">

          <input
            type="file"
            onChange={uploadFile}
            className="mb-6 text-zinc-300"
          />

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {files.map((file, index) => (

            <div
              key={index}
              className="bg-zinc-900 border border-cyan-500 rounded-3xl p-8"
            >

              <h2 className="text-2xl font-bold text-cyan-400 mb-4">
                {file}
              </h2>

              <p className="text-zinc-300 mb-6">
                AI document successfully stored.
              </p>

              <button
                onClick={() => deleteFile(index)}
                className="bg-red-500 hover:bg-red-400 transition text-black font-bold px-6 py-3 rounded-2xl"
              >
                Delete File
              </button>

            </div>

          ))}

        </div>

      </div>

    </main>

  );

}
