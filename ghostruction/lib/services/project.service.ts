import { prisma } from "@/lib/db/prisma";

export async function createProject(
  name: string,
  description: string,
  ownerId: string
) {
  return prisma.project.create({
    data: {
      name,
      description,
      ownerId,
    },
  });
}

export async function getProjects(ownerId: string) {
  return prisma.project.findMany({
    where: {
      ownerId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}