"use client";

import Sidebar from "@/components/Sidebar";
import ThemeToggle from "@/components/ThemeToggle";

import { useEffect, useState } from "react";

interface Member {
  name: string;
  role: string;
}

export default function TeamPage() {

  const [name, setName] = useState("");

  const [role, setRole] = useState("");

  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {

    const savedMembers =
      localStorage.getItem("teamMembers");

    if (savedMembers) {

      setMembers(JSON.parse(savedMembers));

    }

  }, []);

  const saveMembers = (updatedMembers: Member[]) => {

    setMembers(updatedMembers);

    localStorage.setItem(
      "teamMembers",
      JSON.stringify(updatedMembers)
    );

  };

  const addMember = () => {

    if (!name || !role) return;

    const updatedMembers = [
      ...members,
      {
        name,
        role,
      },
    ];

    saveMembers(updatedMembers);

    setName("");
    setRole("");

  };

  const removeMember = (index: number) => {

    const updatedMembers =
      members.filter((_, i) => i !== index);

    saveMembers(updatedMembers);

  };

  return (

    <main className="min-h-screen bg-black text-white flex">

      <Sidebar />
      <ThemeToggle />

      <div className="flex-1 p-10">

        <h1 className="text-6xl font-bold text-cyan-400 mb-6">
          AI Team Collaboration
        </h1>

        <p className="text-zinc-400 text-xl mb-10">
          Build and manage your AI startup team.
        </p>

        <div className="bg-zinc-900 border border-cyan-500 rounded-3xl p-8 mb-10">

          <input
            type="text"
            placeholder="Team member name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-black border border-cyan-500 rounded-2xl px-6 py-4 text-white outline-none mb-6"
          />

          <input
            type="text"
            placeholder="Role..."
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full bg-black border border-cyan-500 rounded-2xl px-6 py-4 text-white outline-none mb-6"
          />

          <button
            onClick={addMember}
            className="bg-cyan-500 hover:bg-cyan-400 transition text-black font-bold px-8 py-4 rounded-2xl"
          >
            Add Team Member
          </button>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {members.map((member, index) => (

            <div
              key={index}
              className="bg-zinc-900 border border-cyan-500 rounded-3xl p-8"
            >

              <h2 className="text-3xl font-bold text-cyan-400 mb-4">
                {member.name}
              </h2>

              <p className="text-green-400 text-lg mb-6">
                {member.role}
              </p>

              <button
                onClick={() => removeMember(index)}
                className="bg-red-500 hover:bg-red-400 transition text-black font-bold px-6 py-3 rounded-2xl"
              >
                Remove
              </button>

            </div>

          ))}

        </div>

      </div>

    </main>

  );

}
