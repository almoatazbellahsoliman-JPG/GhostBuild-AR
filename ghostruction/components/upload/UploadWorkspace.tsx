"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, FolderPlus, UploadCloud } from "lucide-react";

interface Project {
  id: string;
  name: string;
  description: string | null;
  status: string;
}

interface UploadWorkspaceProps {
  projects: Project[];
}

export default function UploadWorkspace({ projects }: UploadWorkspaceProps) {
  const [selectedProjectId, setSelectedProjectId] = useState(projects[0]?.id ?? "");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<any>(null);

  const hasProjects = projects.length > 0;

  async function handleUpload() {
    if (!hasProjects) {
      setError("Create a project before uploading a blueprint.");
      return;
    }

    if (!selectedProjectId) {
      setError("Choose the project this blueprint belongs to.");
      return;
    }

    if (!file) {
      setError("Choose a blueprint file first.");
      return;
    }

    setLoading(true);
    setError(null);
    setMessage(null);
    setAnalysis(null);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("projectId", selectedProjectId);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Upload failed");
      }

      setMessage("Blueprint uploaded, attached to the project, and analyzed.");
      setAnalysis(data.blueprint);
      setFile(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#070b14] px-6 py-24 text-white sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="rounded-3xl border border-slate-800 bg-[#0f1320] p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
                Blueprint workspace
              </p>
              <h1 className="mt-4 text-4xl font-bold text-white">
                Upload and analyze blueprint files
              </h1>
              <p className="mt-4 max-w-2xl text-slate-400">
                Blueprints must belong to a project. Create a project first,
                then attach files for AI processing.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-[#111827] px-5 py-4 text-sm text-slate-300">
              {projects.length} project{projects.length === 1 ? "" : "s"} available
            </div>
          </div>
        </div>

        {!hasProjects ? (
          <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-slate-800 bg-[#111827] p-10">
              <FolderPlus className="h-12 w-12 text-blue-400" />
              <h2 className="mt-6 text-3xl font-bold text-white">
                Create a project before uploading
              </h2>
              <p className="mt-4 max-w-2xl text-slate-400">
                Uploading a blueprint without a project creates messy data. Start
                with a project workspace, then upload plans inside it.
              </p>

              <Link
                href="/"
                className="mt-8 inline-flex items-center justify-center rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Go to dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-[#111827] p-8">
              <h3 className="text-lg font-semibold text-white">
                Correct workflow
              </h3>
              <ol className="mt-6 space-y-4 text-sm text-slate-400">
                <li>1. Create a project from the dashboard.</li>
                <li>2. Open upload once the project exists.</li>
                <li>3. Attach the blueprint to that project.</li>
                <li>4. Let GhostRuction process and track it.</li>
              </ol>
            </div>
          </div>
        ) : (
          <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <div className="rounded-3xl border border-slate-800 bg-[#111827] p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-semibold text-white">
                      Upload a blueprint
                    </h2>
                    <p className="mt-2 text-sm text-slate-400">
                      Choose the project this file belongs to, then upload the
                      drawing for AI processing.
                    </p>
                  </div>
                  <div className="rounded-3xl border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
                    AI scan included
                  </div>
                </div>

                <div className="mt-8 space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-200">
                      Project
                    </label>
                    <select
                      value={selectedProjectId}
                      onChange={(event) => setSelectedProjectId(event.target.value)}
                      className="mt-2 w-full rounded-2xl border border-slate-700 bg-[#0f1320] px-4 py-3 text-white outline-none"
                    >
                      {projects.map((project) => (
                        <option key={project.id} value={project.id}>
                          {project.name} ({project.status.toLowerCase()})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-200">
                      Blueprint file
                    </label>
                    <input
                      type="file"
                      accept="image/*,application/pdf"
                      onChange={(event) => setFile(event.target.files?.[0] ?? null)}
                      className="mt-2 w-full rounded-2xl border border-slate-700 bg-[#0f1320] px-4 py-3 text-sm text-white outline-none file:mr-4 file:rounded-full file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:text-sm file:text-white"
                    />
                  </div>

                  {error ? <p className="text-sm text-rose-400">{error}</p> : null}
                  {message ? <p className="text-sm text-emerald-400">{message}</p> : null}

                  <button
                    type="button"
                    onClick={handleUpload}
                    disabled={loading}
                    className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-blue-500 disabled:opacity-50"
                  >
                    {loading ? "Scanning..." : "Upload and analyze"}
                  </button>
                </div>
              </div>

              {analysis ? (
                <div className="rounded-3xl border border-slate-800 bg-[#111827] p-8">
                  <div className="flex items-center gap-3">
                    <ArrowRight className="h-5 w-5 text-blue-400" />
                    <h2 className="text-xl font-semibold text-white">
                      AI analysis result
                    </h2>
                  </div>

                  <pre className="mt-6 max-h-80 overflow-auto rounded-3xl border border-slate-800 bg-[#0b1220] p-4 text-sm text-slate-300">
                    {JSON.stringify(analysis, null, 2)}
                  </pre>
                </div>
              ) : null}
            </div>

            <aside className="space-y-6">
              <div className="rounded-3xl border border-slate-800 bg-[#111827] p-8">
                <div className="flex items-center gap-3">
                  <UploadCloud className="h-5 w-5 text-blue-400" />
                  <h3 className="text-lg font-semibold text-white">
                    Upload rules
                  </h3>
                </div>
                <ul className="mt-6 space-y-4 text-sm text-slate-400">
                  <li>- Uploads must attach to a project.</li>
                  <li>- Project ownership is checked on the server.</li>
                  <li>- Files are saved into the project workspace.</li>
                  <li>- Project status updates during processing.</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-slate-800 bg-[#111827] p-8">
                <div className="flex items-center gap-3">
                  <FolderPlus className="h-5 w-5 text-blue-400" />
                  <h3 className="text-lg font-semibold text-white">
                    Need another project?
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  Return to the dashboard to create or manage project workspaces.
                </p>
                <Link
                  href="/"
                  className="mt-6 inline-flex items-center justify-center rounded-2xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
                >
                  Open dashboard
                </Link>
              </div>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}