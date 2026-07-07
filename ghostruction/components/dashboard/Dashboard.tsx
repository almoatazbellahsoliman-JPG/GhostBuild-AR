"use client";

import { useEffect, useState } from "react";
import NewProjectModal from "@/components/projects/NewProjectModal";

export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const [projects, setProjects] = useState([]);

  async function loadProjects() {
    const res = await fetch("/api/projects");
    const data = await res.json();
    setProjects(data);
  }

  useEffect(() => {
    loadProjects();
  }, []);

  return (
    <div className="flex-1 p-6">
      <div className="flex justify-between mb-6">
        <h1 className="text-white text-2xl font-bold">Projects</h1>

        <button
          onClick={() => setOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-xl"
        >
          + New Project
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {projects.map((p: any) => (
          <div
            key={p.id}
            className="p-4 rounded-xl bg-[#151922] border border-slate-800"
          >
            <h2 className="text-white font-bold">{p.name}</h2>
            <p className="text-slate-400 text-sm">{p.description}</p>
          </div>
        ))}
      </div>

      {open && (
        <NewProjectModal
          onClose={() => setOpen(false)}
          onCreated={loadProjects}
        />
      )}
    </div>
  );
}