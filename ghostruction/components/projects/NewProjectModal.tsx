"use client";

import { useState } from "react";

export default function NewProjectModal({
  onClose,
  onCreated,
}: {
  onClose: () => void;
  onCreated: () => void;
}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  async function createProject() {
    if (!name) return;

    setLoading(true);

    const res = await fetch("/api/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, description }),
    });

    if (res.ok) {
      setName("");
      setDescription("");
      onCreated();
      onClose();
    }

    setLoading(false);
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[420px] rounded-2xl bg-[#151922] border border-slate-800 p-6">
        <h2 className="text-xl text-white font-bold mb-4">
          Create New Project
        </h2>

        <input
          className="w-full mb-3 p-3 rounded-xl bg-[#0F1115] text-white border border-slate-700"
          placeholder="Project name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          className="w-full mb-4 p-3 rounded-xl bg-[#0F1115] text-white border border-slate-700"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl border border-slate-700 text-white"
          >
            Cancel
          </button>

          <button
            onClick={createProject}
            disabled={loading}
            className="px-4 py-2 rounded-xl bg-blue-600 text-white"
          >
            {loading ? "Creating..." : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
}