"use client";

import Sidebar from "@/components/Sidebar";
import ThemeToggle from "@/components/ThemeToggle";

import { useEffect, useState } from "react";

interface Plugin {
  name: string;
  description: string;
}

const availablePlugins: Plugin[] = [

  {
    name: "AI SEO Optimizer",
    description:
      "Optimize startup websites using AI SEO intelligence.",
  },

  {
    name: "AI Viral Content Generator",
    description:
      "Generate viral social media and YouTube content.",
  },

  {
    name: "AI Email Automation",
    description:
      "Automate business emails and startup outreach.",
  },

  {
    name: "AI Market Analyzer",
    description:
      "Analyze startup trends and business opportunities.",
  },

];

export default function StorePage() {

  const [installedPlugins, setInstalledPlugins] =
    useState<Plugin[]>([]);

  useEffect(() => {

    const savedPlugins =
      localStorage.getItem("installedPlugins");

    if (savedPlugins) {

      setInstalledPlugins(
        JSON.parse(savedPlugins)
      );

    }

  }, []);

  const savePlugins = (
    updatedPlugins: Plugin[]
  ) => {

    setInstalledPlugins(updatedPlugins);

    localStorage.setItem(
      "installedPlugins",
      JSON.stringify(updatedPlugins)
    );

  };

  const installPlugin = (
    plugin: Plugin
  ) => {

    const exists =
      installedPlugins.find(
        (p) => p.name === plugin.name
      );

    if (exists) return;

    const updatedPlugins = [

      ...installedPlugins,
      plugin,

    ];

    savePlugins(updatedPlugins);

  };

  const uninstallPlugin = (
    pluginName: string
  ) => {

    const updatedPlugins =
      installedPlugins.filter(
        (plugin) =>
          plugin.name !== pluginName
      );

    savePlugins(updatedPlugins);

  };

  return (

    <main className="min-h-screen bg-black text-white flex">

      <Sidebar />
      <ThemeToggle />

      <div className="flex-1 p-10">

        <h1 className="text-6xl font-bold text-cyan-400 mb-6">
          AI App Store
        </h1>

        <p className="text-zinc-400 text-xl mb-12">
          Install and manage AI plugins for your startup ecosystem.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">

          {availablePlugins.map((plugin, index) => (

            <div
              key={index}
              className="bg-zinc-900 border border-cyan-500 rounded-3xl p-8"
            >

              <h2 className="text-3xl font-bold text-cyan-400 mb-4">
                {plugin.name}
              </h2>

              <p className="text-zinc-300 text-lg mb-6">
                {plugin.description}
              </p>

              <button
                onClick={() =>
                  installPlugin(plugin)
                }
                className="bg-cyan-500 hover:bg-cyan-400 transition text-black font-bold px-8 py-4 rounded-2xl"
              >
                Install Plugin
              </button>

            </div>

          ))}

        </div>

        <h2 className="text-5xl font-bold text-green-400 mb-10">
          Installed Plugins
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {installedPlugins.map((plugin, index) => (

            <div
              key={index}
              className="bg-zinc-900 border border-green-500 rounded-3xl p-8"
            >

              <h3 className="text-3xl font-bold text-green-400 mb-4">
                {plugin.name}
              </h3>

              <p className="text-zinc-300 text-lg mb-6">
                {plugin.description}
              </p>

              <button
                onClick={() =>
                  uninstallPlugin(plugin.name)
                }
                className="bg-red-500 hover:bg-red-400 transition text-black font-bold px-6 py-3 rounded-2xl"
              >
                Remove Plugin
              </button>

            </div>

          ))}

        </div>

      </div>

    </main>

  );

}
