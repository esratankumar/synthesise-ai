"use client";

import Sidebar from "@/components/Sidebar";
import ThemeToggle from "@/components/ThemeToggle";

import { useEffect, useState } from "react";

interface Lead {
  name: string;
  email: string;
}

export default function CRMPage() {

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {

    const savedLeads =
      localStorage.getItem("crmLeads");

    if (savedLeads) {

      setLeads(JSON.parse(savedLeads));

    }

  }, []);

  const saveLeads = (
    updatedLeads: Lead[]
  ) => {

    setLeads(updatedLeads);

    localStorage.setItem(
      "crmLeads",
      JSON.stringify(updatedLeads)
    );

  };

  const addLead = () => {

    if (!name || !email) return;

    const updatedLeads = [
      ...leads,
      {
        name,
        email,
      },
    ];

    saveLeads(updatedLeads);

    setName("");

    setEmail("");

  };

  const deleteLead = (index: number) => {

    const updatedLeads =
      leads.filter((_, i) => i !== index);

    saveLeads(updatedLeads);

  };

  return (

    <main className="min-h-screen bg-black text-white flex">

      <Sidebar />
      <ThemeToggle />

      <div className="flex-1 p-10">

        <h1 className="text-6xl font-bold text-cyan-400 mb-6">
          AI CRM System
        </h1>

        <p className="text-zinc-400 text-xl mb-10">
          Manage AI startup clients and business leads.
        </p>

        <div className="bg-zinc-900 border border-cyan-500 rounded-3xl p-8 mb-10">

          <input
            type="text"
            placeholder="Client Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="w-full bg-black border border-cyan-500 rounded-2xl px-6 py-4 text-white outline-none mb-6"
          />

          <input
            type="email"
            placeholder="Client Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full bg-black border border-cyan-500 rounded-2xl px-6 py-4 text-white outline-none mb-6"
          />

          <button
            onClick={addLead}
            className="bg-cyan-500 hover:bg-cyan-400 transition text-black font-bold px-8 py-4 rounded-2xl"
          >
            Add Lead
          </button>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {leads.map((lead, index) => (

            <div
              key={index}
              className="bg-zinc-900 border border-cyan-500 rounded-3xl p-8"
            >

              <h2 className="text-3xl font-bold text-cyan-400 mb-4">
                {lead.name}
              </h2>

              <p className="text-zinc-300 text-lg mb-6">
                {lead.email}
              </p>

              <button
                onClick={() =>
                  deleteLead(index)
                }
                className="bg-red-500 hover:bg-red-400 transition text-black font-bold px-6 py-3 rounded-2xl"
              >
                Delete Lead
              </button>

            </div>

          ))}

        </div>

      </div>

    </main>

  );

}
