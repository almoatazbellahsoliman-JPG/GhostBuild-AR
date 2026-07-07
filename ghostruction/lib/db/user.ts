import { prisma } from "./prisma";

export async function syncUser(
  id: string,
  email: string,
  name?: string
) {
  return prisma.user.upsert({
    where: {
      id,
    },
    update: {
      email,
      name,
    },
    create: {
      id,
      email,
      name,
    },
  });
}