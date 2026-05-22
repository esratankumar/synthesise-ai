"use client";

import Sidebar from "@/components/Sidebar";
import ThemeToggle from "@/components/ThemeToggle";

import { useEffect, useState } from "react";

interface AIModel {
  name: string;
  description: string;
  specialty: string;
}

const models: AIModel[] = [

  {
    name: "SYNTHESISE GPT-X",
    description:
      "Advanced reasoning and startup intelligence engine.",
    specialty:
      "Business Strategy",
  },

  {
    name: "SYNTHESISE CREATOR AI",
    description:
      "Viral content and marketing generation engine.",
    specialty:
      "Content Creation",
  },

  {
    name: "SYNTHESISE ANALYTICS AI",
    description:
      "Data analysis and market prediction engine.",
    specialty:
      "Analytics",
  },

  {
    name: "SYNTHESISE AUTOMATION AI",
    description:
      "Workflow and automation optimization engine.",
    specialty:
      "Automation",
  },

];

export default function ModelsPage() {

  const [selectedModel, setSelectedModel] =
    useState<AIModel | null>(null);

  useEffect(() => {

    const savedModel =
      localStorage.getItem("selectedAIModel");

    if (savedModel) {

      setSelectedModel(
        JSON.parse(savedModel)
      );

    }

  }, []);

  const activateModel = (
    model: AIModel
  ) => {

    setSelectedModel(model);

    localStorage.setItem(
      "selectedAIModel",
      JSON.stringify(model)
    );

  };

  return (

    <main className="min-h-screen bg-black text-white flex">

      <Sidebar />
      <ThemeToggle />

      <div className="flex-1 p-10">

        <h1 className="text-6xl font-bold text-cyan-400 mb-6">
          AI Multi-Model System
        </h1>

        <p className="text-zinc-400 text-xl mb-14">
          Switch between multiple AI intelligence engines.
        </p>

        {selectedModel && (

          <div className="bg-green-900 border border-green-500 rounded-3xl p-8 mb-14">

            <h2 className="text-4xl font-bold text-green-400 mb-4">
              Active AI Model
            </h2>

            <p className="text-3xl font-bold text-white mb-3">
              {selectedModel.name}
            </p>

            <p className="text-zinc-300 text-lg mb-2">
              {selectedModel.description}
            </p>

            <p className="text-yellow-400 text-lg font-bold">
              Specialty: {selectedModel.specialty}
            </p>

          </div>

        )}

        <div className="grid md:grid-cols-2 gap-8">

          {models.map((model, index) => (

            <div
              key={index}
              className="bg-zinc-900 border border-cyan-500 rounded-3xl p-8"
            >

              <h2 className="text-3xl font-bold text-cyan-400 mb-4">
                {model.name}
              </h2>

              <p className="text-zinc-300 text-lg mb-4">
                {model.description}
              </p>

              <p className="text-yellow-400 text-lg font-bold mb-8">
                Specialty: {model.specialty}
              </p>

              <button
                onClick={() =>
                  activateModel(model)
                }
                className="bg-cyan-500 hover:bg-cyan-400 transition text-black font-bold px-8 py-4 rounded-2xl"
              >
                Activate Model
              </button>

            </div>

          ))}

        </div>

      </div>

    </main>

  );

}
