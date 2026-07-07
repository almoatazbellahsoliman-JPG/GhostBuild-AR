import { prisma } from "./prisma";

export async function createProject(
  ownerId: string,
  name: string,
  description?: string
) {
  return prisma.project.create({
    data: {
      ownerId,
      name,
      description,
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