import ProjectCard from "./ProjectCard";
import { Project } from "@/lib/types/project";

const demoProjects: Project[] = [
  {
    id: "1",
    name: "Residential Villa",
    description: "2 Floors · Cairo",
    status: "READY",
    createdAt: "",
    updatedAt: "",
  },
  {
    id: "2",
    name: "Hospital Wing",
    description: "Processing blueprint",
    status: "PROCESSING",
    createdAt: "",
    updatedAt: "",
  },
  {
    id: "3",
    name: "Warehouse",
    description: "Awaiting uploads",
    status: "DRAFT",
    createdAt: "",
    updatedAt: "",
  },
];

export default function ProjectGrid() {
  return (
    <section className="mt-10">
      <h2 className="mb-6 text-2xl font-bold text-white">
        Active Projects
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {demoProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}