import { Project } from "@/lib/types/project";

interface Props {
  project: Project;
}

const statusColors = {
  DRAFT: "bg-slate-500",
  PROCESSING: "bg-yellow-500",
  READY: "bg-green-500",
  ERROR: "bg-red-500",
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-[#151922] p-6 transition hover:border-blue-500 hover:shadow-xl">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-white">
          {project.name}
        </h3>

        <div
          className={`h-3 w-3 rounded-full ${statusColors[project.status]}`}
        />
      </div>

      <p className="mt-3 text-sm text-slate-400">
        {project.description || "No description yet"}
      </p>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-xs text-slate-500">
          {project.status}
        </span>

        <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
          Open
        </button>
      </div>
    </div>
  );
}